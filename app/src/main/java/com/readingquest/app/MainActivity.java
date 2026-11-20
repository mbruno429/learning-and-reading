package com.readingquest.app;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.ActivityManager;
import android.content.Context;
import android.content.SharedPreferences;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.util.Locale;

/**
 * Reading Quest is a web app (assets/www) shown full-screen in a WebView.
 * This class adds what the web page cannot do on its own: read-aloud with the
 * phone's text-to-speech voice, a second copy of the child's progress outside
 * the WebView, the back button, full-screen mode and Focus Lock.
 * The app has no internet permission and never loads anything from the network.
 */
public class MainActivity extends Activity implements TextToSpeech.OnInitListener {

    private static final String HOME = "file:///android_asset/www/index.html";
    private static final String PREFS = "rq";
    private static final String STATE_KEY = "rq_state_v1";
    private static final long SCREEN_ON_IDLE_MS = 5 * 60 * 1000L;

    private WebView web;
    private TextToSpeech tts;
    private volatile boolean ttsReady = false;
    private long lastTtsInit = 0;          // SystemClock.elapsedRealtime(), so clock changes cannot block a retry
    private boolean ttsInitPending = false;
    private int renderCrashes = 0;
    private long lastRenderCrash = 0;
    private volatile boolean wantFocusLock = false;
    private boolean resumed = false;
    private final Handler ui = new Handler(Looper.getMainLooper());
    private final Runnable letScreenSleep = () -> getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setVolumeControlStream(AudioManager.STREAM_MUSIC);   // volume keys always change the app's sound
        keepScreenOnForAWhile();
        createWebView();
        initTts();
        // Always start from the bundled page: progress lives in saved state, not in the WebView's back stack.
        web.loadUrl(HOME);
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void createWebView() {
        web = new WebView(this);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);           // progress is saved in localStorage (and mirrored natively, see Bridge)
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setTextZoom(100);                      // the app has its own text-size setting
        s.setSupportZoom(false);
        s.setAllowContentAccess(false);
        s.setAllowFileAccess(false);             // file:///android_asset/ stays readable; the rest of the file system does not
        s.setAllowFileAccessFromFileURLs(false);
        s.setAllowUniversalAccessFromFileURLs(false);
        s.setGeolocationEnabled(false);
        s.setSaveFormData(false);
        s.setBlockNetworkLoads(true);

        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setVerticalScrollBarEnabled(false);
        web.setOnLongClickListener(v -> true);   // no copy/paste or "search the web" pop-ups
        web.setHapticFeedbackEnabled(false);
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri u = request.getUrl();
                // Stay inside the bundled app; never open outside links.
                return !(u != null && "file".equals(u.getScheme()) && String.valueOf(u.getPath()).startsWith("/android_asset/"));
            }

            @Override
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                // The WebView's helper process died (low memory or a crash). Rebuild it instead of letting the app close.
                if (view != web) return true;
                long now = SystemClock.elapsedRealtime();
                renderCrashes = (now - lastRenderCrash < 10000) ? renderCrashes + 1 : 1;
                lastRenderCrash = now;
                ViewGroup parent = (ViewGroup) web.getParent();
                if (parent != null) parent.removeView(web);
                try { web.destroy(); } catch (Exception ignored) { }
                web = null;
                if (renderCrashes > 3) { finish(); return true; }   // it keeps dying: close instead of looping forever
                createWebView();
                web.loadUrl(HOME);
                return true;
            }
        });
        web.addJavascriptInterface(new Bridge(), "Android");
    }

    // ---------- text-to-speech ----------

    private void initTts() {
        ttsReady = false;
        ttsInitPending = true;
        lastTtsInit = SystemClock.elapsedRealtime();
        try {
            tts = new TextToSpeech(getApplicationContext(), this);
        } catch (Exception e) {
            tts = null;
            ttsInitPending = false;
        }
    }

    /** If the voice is not ready (engine was updating, or failed to start), try again; called when the app comes back and when the page asks. */
    private void retryTtsIfNeeded() {
        if (ttsReady) return;
        long now = SystemClock.elapsedRealtime();
        if (now - lastTtsInit < (ttsInitPending ? 20000 : 5000)) return;
        try { if (tts != null) tts.shutdown(); } catch (Exception ignored) { }
        initTts();
    }

    @Override
    public void onInit(int status) {
        ttsInitPending = false;
        if (status != TextToSpeech.SUCCESS || tts == null) return;
        try {
            int r = tts.setLanguage(Locale.US);
            if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) r = tts.setLanguage(Locale.ENGLISH);
            if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) return;   // no English voice: hide Listen
            tts.setAudioAttributes(new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH).build());
            tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                @Override public void onStart(String id) { }
                @Override public void onDone(String id) { ttsDone(id); }
                @Override public void onError(String id) { ttsDone(id); }
                @Override public void onError(String id, int errorCode) { ttsDone(id); }
                @Override public void onRangeStart(String id, int start, int end, int frame) { ttsRange(id, start, end); }
            });
            ttsReady = true;
        } catch (Exception ignored) { }
    }

    private void ttsDone(final String id) {
        if (id == null || !id.matches("[0-9]+")) return;
        ui.post(() -> { if (web != null) web.evaluateJavascript("window.RQ_ttsDone && window.RQ_ttsDone('" + id + "')", null); });
    }

    /** Tells the page which characters are being spoken now, so it can highlight the word. */
    private void ttsRange(final String id, final int start, final int end) {
        if (id == null || !id.matches("[0-9]+")) return;
        ui.post(() -> { if (web != null) web.evaluateJavascript("window.RQ_ttsRange && window.RQ_ttsRange('" + id + "'," + start + "," + end + ")", null); });
    }

    /** Methods the web page can call as window.Android.xxx(). They run on a background thread. */
    private class Bridge {
        @JavascriptInterface
        public boolean canSpeak() {
            if (!ttsReady) ui.post(MainActivity.this::retryTtsIfNeeded);
            return ttsReady;
        }

        @JavascriptInterface
        public void speak(final String text, final String id, final double rate) {
            ui.post(() -> {
                keepScreenOnForAWhile();
                int result = TextToSpeech.ERROR;
                if (ttsReady && tts != null) {
                    try {
                        tts.setSpeechRate((float) Math.max(0.5, Math.min(1.5, rate)));
                        result = tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, id);
                    } catch (Exception ignored) { }
                }
                if (result != TextToSpeech.SUCCESS) {
                    ttsDone(id);            // never leave the page waiting for a voice that is not coming
                    // The speech engine may have been updated or stopped; reconnect (at most every 5 seconds).
                    if (SystemClock.elapsedRealtime() - lastTtsInit > 5000) {
                        try { if (tts != null) tts.shutdown(); } catch (Exception ignored) { }
                        initTts();
                    }
                }
            });
        }

        @JavascriptInterface
        public void stopSpeaking() {
            ui.post(() -> { try { if (ttsReady && tts != null) tts.stop(); } catch (Exception ignored) { } });
        }

        /** Focus Lock = Android screen pinning. The system asks the grown-up to confirm. */
        @JavascriptInterface
        public void setFocusLock(final boolean on) {
            wantFocusLock = on;
            ui.post(MainActivity.this::applyFocusLock);
        }

        @JavascriptInterface
        public boolean isFocusLocked() { return isPinned(); }

        /** Second copy of the child's progress, kept outside the WebView (and included in Android backups). */
        @JavascriptInterface
        public void saveState(String json) {
            if (json == null || json.length() > 4_000_000) return;
            prefs().edit().putString(STATE_KEY, json).apply();
        }

        @JavascriptInterface
        public String loadState() {
            try { return prefs().getString(STATE_KEY, ""); } catch (Exception e) { return ""; }
        }

        /** The device's font-size setting (1.0 = default), used once to pick the starting text size. */
        @JavascriptInterface
        public double fontScale() { return getResources().getConfiguration().fontScale; }
    }

    private SharedPreferences prefs() { return getSharedPreferences(PREFS, Context.MODE_PRIVATE); }

    private void applyFocusLock() {
        try {
            if (wantFocusLock) { if (resumed && !isPinned()) startLockTask(); }
            else if (isPinned()) stopLockTask();
        } catch (Exception ignored) { }
    }

    private boolean isPinned() {
        try {
            ActivityManager am = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
            return am != null && am.getLockTaskModeState() != ActivityManager.LOCK_TASK_MODE_NONE;
        } catch (Exception e) { return false; }
    }

    // ---------- screen, back button, lifecycle ----------

    /** Keep the screen awake while the child is reading, but let it sleep after 5 minutes without a touch. */
    private void keepScreenOnForAWhile() {
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        ui.removeCallbacks(letScreenSleep);
        ui.postDelayed(letScreenSleep, SCREEN_ON_IDLE_MS);
    }

    @Override
    public void onUserInteraction() {
        super.onUserInteraction();
        keepScreenOnForAWhile();
    }

    @Override
    public void onBackPressed() {
        if (web == null) { moveTaskToBack(true); return; }
        web.evaluateJavascript("window.RQ_back ? window.RQ_back() : false", handled -> {
            if (!"true".equals(handled) && !isPinned()) moveTaskToBack(true);
        });
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemBars();
    }

    @SuppressWarnings("deprecation")
    private void hideSystemBars() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            WindowInsetsController c = getWindow().getInsetsController();
            if (c != null) {
                c.hide(WindowInsets.Type.statusBars() | WindowInsets.Type.navigationBars());
                c.setSystemBarsBehavior(WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            }
        } else {
            getWindow().getDecorView().setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        }
    }

    @Override
    protected void onPause() {
        resumed = false;
        try { if (ttsReady && tts != null) tts.stop(); } catch (Exception ignored) { }
        if (web != null) {
            // Stops the lesson clock and read-aloud, and saves progress.
            web.evaluateJavascript("window.RQ_pause && window.RQ_pause()", null);
            web.onPause();
        }
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        resumed = true;
        keepScreenOnForAWhile();
        retryTtsIfNeeded();
        if (web != null) {
            web.onResume();
            web.evaluateJavascript("window.RQ_resume && window.RQ_resume()", null);
        }
        applyFocusLock();
    }

    @Override
    protected void onDestroy() {
        ui.removeCallbacksAndMessages(null);
        try { if (tts != null) { tts.stop(); tts.shutdown(); } } catch (Exception ignored) { }
        if (web != null) { web.destroy(); web = null; }
        super.onDestroy();
    }
}
