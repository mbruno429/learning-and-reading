/* Only for the hosted (browser / home-screen) version. The Android app loads this file too, but nothing here runs there. */
(function () {
  'use strict';
  var RQ = window.RQ;
  if (window.Android || !/^https?:$/.test(location.protocol)) return;
  RQ.isWeb = true;

  // Offline: after the first visit everything is served from the device.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { /* still works online */ }); });
  }
  // Ask the browser not to clear saved progress when the device runs low on space.
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {}); } catch (e) { /* ignore */ }

  // Back button / back swipe: close pop-ups and leave lessons politely instead of leaving the site.
  try {
    history.pushState({ rq: 1 }, '');
    window.addEventListener('popstate', function () {
      if (window.RQ_back && window.RQ_back()) history.pushState({ rq: 1 }, '');
    });
  } catch (e2) { /* ignore */ }

  // Keep the screen awake during a lesson (the Android app does this natively).
  var lock = null;
  function wants() { return RQ.current && (RQ.current.name === 'session' || RQ.current.name === 'fluency') && !document.hidden; }
  function sync() {
    if (!navigator.wakeLock) return;
    if (wants()) {
      if (!lock) navigator.wakeLock.request('screen').then(function (l) { lock = l; l.addEventListener('release', function () { if (lock === l) lock = null; }); }).catch(function () {});
    } else if (lock) { var l2 = lock; lock = null; l2.release().catch(function () {}); }
  }
  var show = RQ.show;
  RQ.show = function () { show.apply(RQ, arguments); sync(); };
  document.addEventListener('visibilitychange', sync);
})();
