/* Saved progress + all the progression rules (unlocking, stars, mastery, weekly goal, review schedules, Reading Checks). */
(function () {
  'use strict';
  var RQ = window.RQ = window.RQ || {};
  var KEY = 'rq_state_v1';
  var C = window.RQCurriculum;

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return iso(new Date()); }
  // Day number without the local UTC offset, so daylight-saving changes cannot skip or repeat a day.
  function dayNum(str) { var p = str.split('-'); return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000); }
  function addDays(str, n) { var p = str.split('-'); return iso(new Date(+p[0], +p[1] - 1, +p[2] + n, 12)); }
  function weekKey(str) { var p = str.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2], 12); return addDays(str, -((d.getDay() + 6) % 7)); } // Monday

  function fresh() {
    return {
      v: 2,
      profile: null, // {name, petName, petColor, created}
      settings: { sound: true, readAloud: true, listenMode: 'auto', textSize: 1, dailyLimit: 2, support: 'auto', speechRate: 0.85, focusLock: false, unlockAll: false, skipChecks: false },
      sessions: {},  // id -> {best, stars, tries, passed, first, last, mastered, talked}
      skills: {},    // skill -> {seen, correct, recent:[0/1...]}
      vocab: {},     // word -> {def, ex, box, due, sid}
      missed: {},    // 'sid:questionIndex' -> {box, due}   (questions to see again on a later day)
      log: [],       // [{t, sid, score, fr, ms, wpm, first, listen, rushed, feel}]
      checks: {},    // form -> {t, levels:[{level, right, total}], right, total, ms}
      fluency: [],   // [{t, id, level, wcpm, acc}]
      journal: [],   // [{t, sid, text}]
      weeks: {},     // Monday date -> [dates with reading]
      gems: 0, xp: 0, gameBest: 0,
      streak: { count: 0, last: '', best: 0 },
      daily: { day: '', newDone: 0, gameGems: 0 },
      pet: { hat: '', owned: [] },
      seenStrategy: {},
      inProgress: null,
      totalMs: 0, savedAt: 0
    };
  }

  var S = fresh();
  var storageOK = true;
  function parse(raw) { try { var o = JSON.parse(raw); return o && typeof o === 'object' && !Array.isArray(o) ? o : null; } catch (e) { return null; } }
  function repair(o) {
    var f = fresh(), k, j;
    for (k in f) {
      var def = f[k], val = o[k];
      if (val === undefined || val === null && def !== null) { o[k] = def; continue; }
      if (Array.isArray(def)) { if (!Array.isArray(val)) o[k] = def; continue; }
      if (def && typeof def === 'object') {
        if (!val || typeof val !== 'object' || Array.isArray(val)) { o[k] = def; continue; }
        for (j in def) if (val[j] === undefined) val[j] = def[j];
      } else if (def !== null && typeof val !== typeof def) o[k] = def;
    }
    if (o.profile && (typeof o.profile !== 'object' || !o.profile.petName)) o.profile = null;
    if (!Array.isArray(o.pet.owned)) o.pet.owned = [];
    ['gems', 'xp', 'totalMs'].forEach(function (n) { if (!isFinite(o[n]) || o[n] < 0) o[n] = 0; });
    o.v = 2;
    return o;
  }
  function load() {
    var a = null, b = null;
    try { a = parse(window.localStorage.getItem(KEY)); } catch (e) { storageOK = false; }
    // Android keeps a second copy outside the WebView; use whichever is newer.
    try { if (window.Android && window.Android.loadState) b = parse(window.Android.loadState()); } catch (e2) { b = null; }
    var o = a && b ? ((b.savedAt || 0) > (a.savedAt || 0) ? b : a) : (a || b);
    S = o ? repair(o) : fresh();
    RQ.S = S;
  }
  function save() {
    S.savedAt = Date.now();
    var json;
    try { json = JSON.stringify(S); } catch (e) { return; }
    try { window.localStorage.setItem(KEY, json); storageOK = true; } catch (e2) { storageOK = false; }
    try { if (window.Android && window.Android.saveState) window.Android.saveState(json); } catch (e3) { /* ignore */ }
  }
  function reset() { S = fresh(); RQ.S = S; save(); }
  // Backup file: the whole saved state as text, and back again.
  function exportState() { S.savedAt = Date.now(); return JSON.stringify(S); }
  function importState(text) {
    var o = parse(text);
    if (!o || !o.profile || typeof o.profile !== 'object' || !o.profile.petName || typeof o.sessions !== 'object') return false;
    S = repair(o); RQ.S = S; save();
    return true;
  }

  // ---------- content index ----------
  var order = [], index = {};
  function buildIndex() {
    order = []; index = {};
    var W = window.RQ_WEEKS || {};
    for (var n = 1; n <= 12; n++) {
      if (!W[n] || !W[n].sessions) continue;
      W[n].sessions.forEach(function (s, i) {
        order.push(s.id);
        index[s.id] = { id: s.id, week: n, day: i + 1, meta: C.WEEKS[n], data: s, strategy: W[n].strategy };
      });
    }
    RQ.order = order;
  }
  function get(id) { return index[id]; }
  function weeksAvailable() { var out = []; for (var n = 1; n <= 12; n++) if (window.RQ_WEEKS && window.RQ_WEEKS[n]) out.push(n); return out; }
  function weekIds(n) { return order.filter(function (id) { return index[id].week === n; }); }

  // ---------- progression ----------
  var PASS = 0.6, FIRST_PASS = 0.5;
  function rec(id) { return S.sessions[id]; }
  function cleared(id) { var r = rec(id); return !!(r && (r.passed || r.tries >= 2)); }
  function passed(id) { var r = rec(id); return !!(r && r.passed); }
  function weekCleared(n) { var ids = weekIds(n); return ids.length > 0 && ids.every(cleared); }
  function clearedCount() { var n = 0; order.forEach(function (id) { if (cleared(id)) n++; }); return n; }
  function passedCount() { var n = 0; order.forEach(function (id) { if (passed(id)) n++; }); return n; }
  function starsFor(score) { return score >= 0.9 ? 3 : score >= 0.75 ? 2 : score >= PASS ? 1 : 0; }
  function totalStars() { var n = 0; for (var k in S.sessions) n += S.sessions[k].stars || 0; return n; }

  // Reading Checks: which form (1-4) should be taken now, or 0.
  function hasCheck(n) { return !!(window.RQ_CHECKS && window.RQ_CHECKS[n]); }
  function checkDue() {
    if (S.settings.skipChecks || S.settings.unlockAll) return 0;
    if (hasCheck(1) && !S.checks[1] && clearedCount() === 0 && !Object.keys(S.sessions).length) return 1;
    for (var n = 2; n <= 4; n++) {
      if (!hasCheck(n) || S.checks[n]) continue;
      var upTo = C.CHECKS.after[n], ok = true;
      for (var w = 1; w <= upTo; w++) if (!weekCleared(w)) ok = false;
      if (ok) return n;
    }
    return 0;
  }
  function unlocked(id) {
    var i = order.indexOf(id);
    if (i < 0) return false;
    if (S.settings.unlockAll) return true;
    if (rec(id)) return true;                       // anything already played can be replayed
    if (i > 0 && !cleared(order[i - 1])) return false;
    return !checkDue();                             // a due Reading Check comes before the next new lesson
  }
  function nextId() { for (var i = 0; i < order.length; i++) if (!cleared(order[i])) return order[i]; return null; }
  function rollDaily() { var t = today(); if (!S.daily.day || t > S.daily.day) S.daily = { day: t, newDone: 0, gameGems: 0 }; } // forward only
  function firstAttempts(n) { return S.log.filter(function (l) { return l.first && !l.check; }).slice(-n); }
  function rate(l) { return l.fr === undefined ? l.score : l.fr; }
  // Three first attempts in a row under 50% first-try: slow down and bring back easier wins.
  function struggling() {
    var f = firstAttempts(3);
    return f.length >= 3 && f.reduce(function (a, l) { return a + rate(l); }, 0) / f.length < 0.5;
  }
  function dailyLimit() { var lim = S.settings.dailyLimit; return struggling() ? (lim > 0 ? 1 : 1) : lim; }
  function dailyLocked(id) {
    rollDaily();
    var lim = dailyLimit();
    return lim > 0 && !S.settings.unlockAll && !rec(id) && S.daily.newDone >= lim;
  }
  // A lesson worth playing again: not passed or under 3 stars, and not played in the last 2 days.
  function comeback() {
    var t = Date.now(), best = null;
    order.forEach(function (id) {
      var r = rec(id); if (!r || !cleared(id) || r.stars >= 3) return;
      if (t - (r.last || 0) < 2 * 86400000) return;
      if (!best || r.stars < rec(best).stars) best = id;
    });
    return best;
  }

  var STAGES = [0, 1, 10, 28, 50]; // lessons cleared needed for pet stage 0..4
  var STAGE_NAMES = ['Mystery Egg', 'Hatchling', 'Little Explorer', 'Sky Glider', 'Mighty Star Dragon'];
  function petStage(n) { if (n === undefined) n = clearedCount(); var s = 0; for (var i = 0; i < STAGES.length; i++) if (n >= STAGES[i]) s = i; return s; }

  function supportMode() {
    if (S.settings.support !== 'auto') return S.settings.support;
    var f = firstAttempts(3);
    if (f.length < 2) {
      var c = S.checks[1]; // before there are lessons to go on, use the first Reading Check
      if (c && c.levels && c.levels[0] && c.levels[0].right <= 2) return 'helper';
      return 'standard';
    }
    var avg = f.reduce(function (a, l) { return a + rate(l); }, 0) / f.length;
    return avg < 0.55 ? 'helper' : avg >= 0.85 && f.length >= 3 ? 'independent' : 'standard';
  }
  // Listen is always there for a child who needs it; otherwise from week 3 it opens after the child's own read.
  function listenFirst(week) {
    if (S.settings.listenMode === 'always' || week < 3) return true;
    return supportMode() === 'helper';
  }

  function mastery(skill) {
    var k = S.skills[skill];
    if (!k || !k.recent.length) return null;
    return k.recent.reduce(function (a, b) { return a + b; }, 0) / k.recent.length;
  }

  // ---------- reading days (weekly goal of 5) ----------
  function markReadingDay() {
    var t = today(), wk = weekKey(t), days = S.weeks[wk] || (S.weeks[wk] = []);
    if (days.indexOf(t) >= 0) return { isNew: false, days: days.length, goal: false };
    days.push(t);
    S.streak.count = (S.streak.last && dayNum(t) - dayNum(S.streak.last) === 1) ? S.streak.count + 1 : 1;
    if (!S.streak.last || t > S.streak.last) S.streak.last = t;
    if (S.streak.count > S.streak.best) S.streak.best = S.streak.count;
    return { isNew: true, days: days.length, goal: days.length === 5 };
  }
  function weekDays() { return (S.weeks[weekKey(today())] || []).length; }
  function weeksHit() { var n = 0; for (var k in S.weeks) if (S.weeks[k].length >= 5) n++; return n; }
  function readingDays() { var n = 0; for (var k in S.weeks) n += S.weeks[k].length; return n; }

  // result: {score, firstRate, perQ:[{skill, first, rushed}], missed:[question indexes], ms, readMs, words, usedListen}
  function recordSession(id, result) {
    rollDaily();
    var info = get(id), t = today();
    var r = S.sessions[id] || (S.sessions[id] = { best: 0, stars: 0, tries: 0, passed: false, first: Date.now() });
    var isFirstTry = r.tries === 0;
    var wasCleared = cleared(id), wasPassed = r.passed;
    var stageBefore = petStage();
    var stale = r.last && Date.now() - r.last >= 2 * 86400000;
    var fr = result.firstRate === undefined ? result.score : result.firstRate;
    r.tries++; r.last = Date.now();
    var didPass = result.score >= PASS && fr >= FIRST_PASS;
    var stars = didPass ? starsFor(result.score) : 0;
    var gain = Math.max(0, stars - r.stars);
    if (result.score > r.best) r.best = result.score;
    if (stars > r.stars) r.stars = stars;
    if (didPass) r.passed = true;
    var newlyMastered = didPass && fr >= 0.8 && !result.usedListen && !r.mastered;
    if (newlyMastered) r.mastered = true;

    if (isFirstTry) {
      result.perQ.forEach(function (q) {
        var k = S.skills[q.skill] || (S.skills[q.skill] = { seen: 0, correct: 0, recent: [] });
        k.seen++; if (q.first) k.correct++;
        k.recent.push(q.first ? 1 : 0); if (k.recent.length > 12) k.recent.shift();
      });
      (result.missed || []).forEach(function (qi) { S.missed[id + ':' + qi] = { box: 0, due: addDays(t, 2) }; });
    }
    var ms = Math.min(result.ms || 0, 45 * 60000);
    var wpm = (!result.usedListen && result.readMs > 3000) ? Math.round(result.words / (result.readMs / 60000)) : 0;
    var rushed = result.perQ.filter(function (q) { return q.rushed; }).length;
    S.log.push({ t: Date.now(), sid: id, score: result.score, fr: fr, ms: ms, wpm: wpm, first: isFirstTry, listen: !!result.usedListen, rushed: rushed });
    if (S.log.length > 400) S.log.shift();
    S.totalMs += ms;

    var gems = gain * 2;
    var solo = didPass && !result.usedListen && (!wasPassed || gain > 0);
    if (solo) gems += 1;
    if (didPass && info.data.boss && !wasPassed) gems += 5;
    var back = didPass && !isFirstTry && stale && (gain > 0 || !wasPassed);
    if (back) gems += 1;
    var xp = Math.round(result.score * 100) + (didPass && !wasPassed ? 50 : 0);
    var day = markReadingDay();
    if (day.isNew) gems += 1;
    if (day.goal) gems += 3;
    if (!wasCleared && cleared(id)) S.daily.newDone++;
    if (didPass && !wasPassed) addVocab(info.data, id);
    if (S.inProgress && S.inProgress.id === id) S.inProgress = null;

    S.gems += gems; S.xp += xp;
    save();
    var stageAfter = petStage();
    var isLast = order.indexOf(id) === order.length - 1;
    return {
      score: result.score, firstRate: fr, stars: stars, passed: didPass, newSticker: didPass && !wasPassed, gems: gems, xp: xp,
      solo: solo, comeback: back, dayNew: day.isNew, weekDays: day.days, weekGoal: day.goal, mastered: newlyMastered,
      petGrew: stageAfter > stageBefore, stage: stageAfter, movedOn: !didPass && !wasCleared && cleared(id), tries: r.tries,
      isLast: isLast, weekDone: didPass && !wasPassed && !!info.data.boss,
      finishedAll: !wasCleared && order.length === 60 && clearedCount() === order.length
    };
  }
  function setFeel(feel) { var l = S.log[S.log.length - 1]; if (l) { l.feel = feel; save(); } }
  function markTalked(id) {
    var r = rec(id); if (!r || r.talked) return 0;
    r.talked = true; S.gems += 1; save(); return 1;
  }
  function addJournal(sid, text) {
    text = String(text || '').trim().slice(0, 300); if (!text) return 0;
    var r = rec(sid), pay = r && r.journal ? 0 : 2;          // gems once per lesson
    if (r) r.journal = true;
    S.journal.push({ t: Date.now(), sid: sid, text: text }); if (S.journal.length > 80) S.journal.shift();
    S.gems += pay; save(); return pay || -1;
  }

  // ---------- a lesson left half-way ----------
  function saveProgress(p) {
    var o = S.inProgress;      // a replay of a passed lesson must not overwrite the saved place of an unfinished new one
    if (o && o.id !== p.id && getProgress(o.id) && !passed(o.id) && passed(p.id)) return;
    p.t = Date.now(); S.inProgress = p; save();
  }
  function getProgress(id) {
    var p = S.inProgress;
    if (!p || p.id !== id || Date.now() - p.t > 3 * 86400000 || !get(id)) return null;
    return p;
  }
  function clearProgress() { if (S.inProgress) { S.inProgress = null; save(); } }

  // ---------- vocabulary review (spaced: 1, 2, 4, 8, 16, 30 days) ----------
  var GAPS = [1, 2, 4, 8, 16, 30];
  function addVocab(session, sid) {
    var t = today();
    (session.vocab || []).forEach(function (v) {
      var key = v.word.toLowerCase(), old = S.vocab[key];
      if (!old || old.def !== v.def) S.vocab[key] = { def: v.def, ex: v.ex, box: 0, due: addDays(t, 1), sid: sid };
    });
  }
  function dueVocab(max) {
    var t = today(), out = [];
    for (var w in S.vocab) if (S.vocab[w].due <= t) out.push(w);
    out.sort(function (a, b) { return S.vocab[a].due < S.vocab[b].due ? -1 : S.vocab[a].due > S.vocab[b].due ? 1 : a < b ? -1 : 1; });
    if (max === undefined) max = out.length > 16 ? 5 : out.length > 8 ? 4 : 3; // catch up when a backlog builds
    return out.slice(0, max);
  }
  function gradeVocab(word, ok) {
    var v = S.vocab[word]; if (!v) return;
    v.box = ok ? Math.min(v.box + 1, GAPS.length - 1) : 0;
    v.due = addDays(today(), GAPS[v.box]);
    save();
  }
  function knownWords() { return Object.keys(S.vocab); }

  // ---------- missed questions come back on a later day ("Second Chance") ----------
  function missedItem(key) {
    var p = key.split(':'), info = get(p[0]), q = info && info.data.questions[+p[1]];
    if (!q || q.type !== 'mc' || q.para === undefined || q.part) return null; // needs one paragraph that holds the proof
    return { key: key, sid: p[0], qi: +p[1], q: q, info: info };
  }
  function dueMissed(max) {
    var t = today(), out = [];
    Object.keys(S.missed).sort().forEach(function (key) {
      if (S.missed[key].due > t) return;
      var it = missedItem(key);
      if (it) out.push(it); else delete S.missed[key];
    });
    out.sort(function (a, b) { return S.missed[a.key].due < S.missed[b.key].due ? -1 : 1; });
    return out.slice(0, max || 2);
  }
  function gradeMissed(key, ok) {
    var m = S.missed[key]; if (!m) return;
    if (ok && m.box >= 1) delete S.missed[key];                // right twice, days apart: done
    else { m.box = ok ? m.box + 1 : 0; m.due = addDays(today(), ok ? 5 : 2); }
    save();
  }

  // ---------- Reading Checks and fluency ----------
  function recordCheck(n, res) {
    S.checks[n] = { t: Date.now(), levels: res.levels, right: res.right, total: res.total, ms: Math.min(res.ms || 0, 60 * 60000) };
    S.totalMs += S.checks[n].ms;
    S.log.push({ t: Date.now(), sid: 'check' + n, score: res.total ? res.right / res.total : 0, ms: S.checks[n].ms, wpm: 0, first: true, check: true });
    var day = markReadingDay(), gems = 10 + (day.isNew ? 1 : 0) + (day.goal ? 3 : 0);
    S.gems += gems; S.xp += 100;
    save();
    return { gems: gems, weekDays: day.days, weekGoal: day.goal };
  }
  // Highest level read independently on a check: 4 of 5 right there, and at least 3 of 5 on the levels below.
  function checkLevel(c) {
    if (!c || !c.levels) return 0;
    var best = 0;
    for (var i = 0; i < c.levels.length; i++) {
      var l = c.levels[i];
      if (!l.total || l.right / l.total < 0.6) break;
      if (l.right / l.total >= 0.8) best = l.level;
    }
    return best;
  }
  function latestCheck() { for (var n = 4; n >= 1; n--) if (S.checks[n]) return n; return 0; }
  function addFluency(e) { e.t = Date.now(); S.fluency.push(e); if (S.fluency.length > 60) S.fluency.shift(); save(); }

  RQ.store = {
    load: load, save: save, reset: reset, exportState: exportState, importState: importState, buildIndex: buildIndex, get: get, weeksAvailable: weeksAvailable, weekIds: weekIds,
    rec: rec, cleared: cleared, passed: passed, weekCleared: weekCleared, unlocked: unlocked, nextId: nextId, dailyLocked: dailyLocked,
    dailyLimit: dailyLimit, struggling: struggling, comeback: comeback, clearedCount: clearedCount, passedCount: passedCount,
    totalStars: totalStars, starsFor: starsFor, petStage: petStage, STAGES: STAGES, STAGE_NAMES: STAGE_NAMES,
    supportMode: supportMode, listenFirst: listenFirst, mastery: mastery, recordSession: recordSession, setFeel: setFeel,
    markTalked: markTalked, addJournal: addJournal, saveProgress: saveProgress, getProgress: getProgress, clearProgress: clearProgress,
    dueVocab: dueVocab, gradeVocab: gradeVocab, knownWords: knownWords, dueMissed: dueMissed, gradeMissed: gradeMissed,
    checkDue: checkDue, hasCheck: hasCheck, recordCheck: recordCheck, checkLevel: checkLevel, latestCheck: latestCheck, addFluency: addFluency,
    weekDays: weekDays, weeksHit: weeksHit, readingDays: readingDays, today: today, rollDaily: rollDaily, storageOK: function () { return storageOK; },
    PASS: PASS, FIRST_PASS: FIRST_PASS
  };
})();
