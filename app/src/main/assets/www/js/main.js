/* Boot. */
(function () {
  'use strict';
  var RQ = window.RQ;

  RQ.applySettings = function () {
    document.documentElement.style.setProperty('--ts', RQ.S.settings.textSize || 1);
  };

  // Called by the Android back button. Returns true when the app handled it.
  window.RQ_back = function () {
    if (RQ.$('#modal')) { RQ.closeModal(); return true; }
    var lb = RQ.$('#lookback.open'); if (lb) { lb.classList.remove('open'); return true; }
    var name = RQ.current.name;
    if (name === 'session') { RQ.actions.quit(); return true; }
    if (name === 'fluency') { RQ.actions.fluQuit(); return true; }
    if (name === 'welcome') return false;
    if (name !== 'map') { RQ.show('map'); return true; }
    return false;
  };
  // Called by Android when the app goes to the background / comes back.
  window.RQ_pause = function () { if (RQ.pauseClock) RQ.pauseClock(); RQ.store.save(); };
  window.RQ_resume = function () {
    if (RQ.resumeClock) RQ.resumeClock();
    if (RQ.current.name === 'map') RQ.show('map');      // a new day may have opened the next lesson
  };

  function boot() {
    if (/[?&]fast=1/.test(location.search)) window.RQ_FAST = true;
    RQ.store.load();
    RQ.store.buildIndex();
    // First run on a device set to large system text: start with larger app text too.
    try {
      if (!RQ.S.profile && window.Android && window.Android.fontScale) {
        var fs = +window.Android.fontScale();
        if (fs >= 1.25) RQ.S.settings.textSize = 1.3; else if (fs >= 1.1) RQ.S.settings.textSize = 1.15;
      }
    } catch (e) { /* ignore */ }
    RQ.applySettings();
    if (RQ.S.settings.focusLock && window.Android && window.Android.setFocusLock) window.Android.setFocusLock(true);
    RQ.show(RQ.S.profile ? 'map' : 'welcome');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
