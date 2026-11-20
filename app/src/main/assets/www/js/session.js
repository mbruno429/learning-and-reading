/* One lesson: power-up (+ guided practice) → warm-up (old words, second-chance questions) → new words →
   read in parts with stop-and-think checks → questions → fix-it round → rewards.
   The same engine runs the Reading Checks in "test mode" (no help, one try, no feedback until the end). */
(function () {
  'use strict';
  var RQ = window.RQ, esc = RQ.esc, C = window.RQCurriculum, SH = window.RQShared;
  var ss = null;       // current lesson state
  var cur = null;      // current question state
  var stopListen = null, readTimer = null, warmTimer = null, nextTimer = null, stopTimer = null;
  function fast() { return !!window.RQ_FAST; }

  RQ._state = function () { return { ss: ss, cur: cur }; }; // used by the tools/ tests

  RQ.allVocab = function () {
    var out = [], W = window.RQ_WEEKS || {};
    for (var n in W) (W[n].sessions || []).forEach(function (s) { (s.vocab || []).forEach(function (v) { out.push(v); }); });
    return out;
  };

  // ---------- active-time clock (time with the app in the background does not count) ----------
  function clockOn() { if (ss && !ss.clockAt) ss.clockAt = Date.now(); if (ss && ss.step === 'read' && !ss.readAt) ss.readAt = Date.now(); }
  function clockOff() {
    if (!ss) return;
    var now = Date.now();
    if (ss.clockAt) { ss.activeMs += Math.min(now - ss.clockAt, 20 * 60000); ss.clockAt = 0; }
    if (ss.readAt) { ss.readMs += Math.min(now - ss.readAt, 15 * 60000); ss.readAt = 0; }
  }
  RQ.pauseClock = function () { clockOff(); RQ.tts.stop(); };
  RQ.resumeClock = function () { if (ss && RQ.current.name === 'session' && ss.step !== 'results') clockOn(); };
  document.addEventListener('visibilitychange', function () { if (document.hidden) RQ.pauseClock(); else RQ.resumeClock(); });

  // ---------- starting ----------
  function newState(id, info, d) {
    return {
      id: id, info: info, d: d, isReplay: false, activeMs: 0, clockAt: 0, readMs: 0, readAt: 0, usedListen: false,
      qIdx: 0, points: [], perQ: [], missed: [], wordIdx: 0, pracIdx: 0, stopIdx: 0, stopOK: false, readDone: false,
      mode: RQ.store.supportMode(), warm: null, reward: null, partA: null, fix: null, rush: 0, hits: 0, test: null
    };
  }
  RQ.startSession = function (id, opts) {
    opts = opts || {};
    var st = RQ.store, info = st.get(id), S = RQ.S;
    clearTimers();
    ss = newState(id, info, info.data);
    ss.isReplay = st.passed(id);
    var p = opts.fresh ? null : st.getProgress(id);
    if (p) {                                      // pick up where the child left off
      ss.points = p.points || []; ss.perQ = p.perQ || []; ss.missed = p.missed || []; ss.readMs = p.readMs || 0;
      ss.activeMs = p.activeMs || 0; ss.usedListen = !!p.usedListen; ss.hits = p.hits || 0;
      var n = ss.d.questions.length;
      if (p.step === 'quiz') {
        ss.readDone = true; ss.step = 'quiz';
        if (ss.points.length < n) {
          ss.qIdx = ss.points.length; buildCur();
          if (p.tried === ss.qIdx) { ss.tried = p.tried; cur.tries = 1; }       // the first try on this question was already used
          var prev = ss.d.questions[ss.qIdx - 1];
          if (cur.q.part === 'B' && prev && prev.part === 'A') ss.partA = { q: stem(prev), a: prev.options[0] };
        } else {     // every question was already answered: go on to the fix-it round or the rewards, never ask them again
          ss.points.length = n; ss.perQ.length = n; ss.qIdx = n - 1;
          if (ss.missed.length) { ss.fix = { list: ss.missed.slice(), i: 0, fixed: 0 }; buildCur(ss.fix.list[0]); }
          else { finishLesson(); return; }
        }
      } else { ss.step = 'read'; ss.stopIdx = Math.min(p.stopIdx || 0, stopsFor().length); }
      RQ.show('session'); RQ.toast('Welcome back! Your place was saved.');
      return;
    }
    if (opts.step) ss.step = opts.step;
    else if (info.strategy && st.rec(id) && !st.cleared(id)) { ss.afterFail = true; ss.step = 'strategy'; }   // retry after a failed try
    else if (info.day === 1 && !S.seenStrategy[info.week]) ss.step = 'strategy';
    else beginWarmOrWords();
    RQ.show('session');
  };
  // Reading Check n: three cold passages, no help.
  RQ.startCheck = function (n) {
    clearTimers();
    var form = window.RQ_CHECKS[n];
    ss = newState('check' + n, { week: 0, day: 0, meta: { emoji: '🧭', guardian: { name: '', emoji: '🧭' }, focus: [] } }, null);
    ss.test = { n: n, form: form, pi: 0, levels: [], right: 0, total: 0 };
    ss.mode = 'independent';
    ss.step = 'checkintro';
    RQ.show('session');
  };
  function loadCheckPassage() {
    var p = ss.test.form.passages[ss.test.pi];
    ss.d = { title: p.title, genre: p.genre, passage: p.passage, questions: p.questions, vocab: [], boss: false };
    ss.qIdx = 0; ss.points = []; ss.perQ = []; ss.readDone = false; ss.stopIdx = 0;
  }
  function beginWarmOrWords() {
    var list = [];
    if (!ss.isReplay && !ss.test) {
      RQ.store.dueMissed(2).forEach(function (m) { list.push({ kind: 'again', m: m }); });
      var due = RQ.store.dueVocab();
      if (due.length >= 2 || (due.length && list.length)) due.forEach(function (w) { list.push({ kind: 'vocab', word: w }); });
    }
    if (list.length) { ss.step = 'warmup'; ss.warm = { list: list, i: 0, right: 0 }; buildWarm(); }
    else ss.step = ss.d.vocab && ss.d.vocab.length ? 'words' : 'read';
  }
  function clearTimers() { clearTimeout(readTimer); clearTimeout(warmTimer); clearTimeout(nextTimer); clearTimeout(stopTimer); if (stopListen) { stopListen(); stopListen = null; } }
  function saveProgress() {
    if (ss.test || ss.fix) return;
    clockOff(); clockOn();
    RQ.store.saveProgress({ id: ss.id, step: ss.step === 'quiz' ? 'quiz' : 'read', points: ss.points.slice(), perQ: ss.perQ.slice(), missed: ss.missed.slice(), tried: ss.tried, readMs: ss.readMs, activeMs: ss.activeMs, usedListen: ss.usedListen, stopIdx: ss.stopIdx, hits: ss.hits });
  }

  // ---------- passage rendering ----------
  function rx(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function vocabRegex(d, skip) {
    var ws = (d.vocab || []).map(function (v) { return v.word; }).filter(function (w) { return !skip || skip.indexOf(w.toLowerCase()) < 0; });
    if (!ws.length) return null;
    return new RegExp('\\b(' + ws.map(rx).join('|') + ')(s|es|d|ed|ing)?\\b', 'gi');
  }
  function sentHTML(text, re) {
    var h = esc(text);
    if (re) h = h.replace(re, function (m, w) { return '<span class="vw" role="button" tabindex="0" data-a="vocabTip" data-w="' + w.toLowerCase() + '">' + m + '</span>'; });
    return h;
  }
  // o: {tappable, upTo (last paragraph index to show), skip (vocab words to leave un-dotted)}
  function passageHTML(d, o) {
    o = o || {};
    var re = o.tappable ? null : vocabRegex(d, o.skip), h = '';
    d.passage.forEach(function (p, pi) {
      if (o.upTo !== undefined && pi > o.upTo) return;
      if (SH.isHeading(p)) { h += '<h3 class="p-head' + (o.from !== undefined && pi >= o.from ? ' fresh' : '') + '" data-p="' + pi + '">' + esc(p.slice(3)) + '</h3>'; return; }
      var isStanza = p.indexOf('\n') >= 0;
      h += '<p class="para' + (isStanza ? ' stanza' : '') + (o.from !== undefined && pi >= o.from ? ' fresh' : '') + '" data-p="' + pi + '">';
      SH.splitSentences(p).forEach(function (t, si) {
        h += '<span class="sent' + (o.tappable ? ' tap' : '') + '"' + (o.tappable ? ' role="button" tabindex="0" data-a="pickSent"' : '') + ' data-p="' + pi + '" data-s="' + si + '">' + sentHTML(t, re) + '</span>' + (isStanza ? '<br>' : ' ');
      });
      h += '</p>';
    });
    return h;
  }
  // Pre-taught words that a word-meaning question asks about: no tap-for-meaning on those while it is on screen.
  function vocabTargets(q) {
    if (!q || q.skill !== 'vocab') return null;
    var text = q.q.toLowerCase(), out = [];
    (ss.d.vocab || []).forEach(function (v) { if (text.indexOf(v.word.toLowerCase()) >= 0) out.push(v.word.toLowerCase()); });
    return out.length ? out : null;
  }

  function headHTML() {
    var total = ss.d ? ss.d.questions.length + 1 : 1, done = ss.step === 'quiz' ? ss.qIdx + 1 : ss.step === 'results' ? total : 0;
    if (ss.test) { var np = ss.test.form.passages.length; done = ss.test.pi * total + (ss.step === 'quiz' ? ss.qIdx + 1 : 0); total = np * total; }
    if (ss.fix) done = total;
    return '<div class="s-head"><button class="x-btn" data-a="quit" aria-label="Leave">✕</button>' +
      '<div class="s-prog" role="progressbar" aria-label="Lesson progress"><div class="s-prog-fill" style="width:' + Math.round(100 * done / total) + '%"></div></div>' +
      '<span class="s-land">' + ss.info.meta.emoji + '</span></div>';
  }
  function say(text) { return RQ.S.settings.readAloud && RQ.tts.available() && !ss.test ? ' <button class="say" data-a="say" aria-label="Read aloud" data-t="' + RQ.attr(text) + '">🔊</button>' : ''; }

  // ---------- step renderers ----------
  function renderStrategy() {
    var st = ss.info.strategy, more = st.practice && st.practice.length && !ss.afterFail;
    return headHTML() + '<div class="s-body">' + RQ.strategyHTML(ss.info.week, '<button class="btn big" data-a="strategyDone">' + (more ? 'Let me try!' : 'I\'m ready!') + '</button>') + '</div>';
  }
  function renderPractice() {
    var st = ss.info.strategy, p = st.practice[ss.pracIdx], pr = ss.prac;
    return headHTML() + '<div class="s-body"><div class="kicker">' + esc(st.icon) + ' You try · ' + (ss.pracIdx + 1) + ' of ' + st.practice.length + '</div>' +
      '<div class="mini-text">' + esc(p.text) + say(p.text + ' ' + p.q) + '</div>' +
      '<div class="q-card"><h2 class="q-text">' + esc(p.q) + '</h2><div class="opts">' +
      pr.opts.map(function (o, i) { return '<button class="opt ' + o.state + '" data-a="pracPick" data-i="' + i + '"' + (o.state || pr.done ? ' disabled' : '') + '><span>' + esc(o.t) + '</span></button>'; }).join('') + '</div>' +
      '<div id="feedback">' + (pr.done ? '<div class="fb ok"><div class="fb-h">✅ That is the way!</div><p>' + esc(p.why) + '</p></div>' : pr.miss ? '<div class="fb retry"><div class="fb-h">💡 Not yet. Use the steps and try again.</div></div>' : '') + '</div>' +
      '<div class="q-actions">' + (pr.done ? '<button class="btn big" data-a="pracNext">' + (ss.pracIdx === st.practice.length - 1 ? 'I\'m ready!' : 'Next') + '</button>' : '') + '</div></div></div>';
  }
  function buildPrac() {
    var p = ss.info.strategy.practice[ss.pracIdx];
    ss.prac = { opts: RQ.shuffle(p.options.map(function (t, i) { return { t: t, ok: i === 0, state: '' }; })), done: false, miss: false };
  }
  function buildWarm() {
    var w = ss.warm, it = w.list[w.i];
    w.done = false; w.fb = '';
    if (it.kind === 'again') {
      w.opts = RQ.shuffle(it.m.q.options.map(function (t, i) { return { t: t, ok: i === 0 }; }));
      return;
    }
    var word = it.word, v = RQ.S.vocab[word];
    var pool = RQ.allVocab().filter(function (x) { return x.word.toLowerCase() !== word && x.def !== v.def; });
    var seen = {}; pool = RQ.shuffle(pool).filter(function (x) { if (seen[x.def] || seen[x.word.toLowerCase()]) return false; seen[x.def] = seen[x.word.toLowerCase()] = 1; return true; }).slice(0, 3);
    // Two formats take turns: "what does it mean?" and "which word fits the sentence?"
    var blank = v.ex ? v.ex.replace(new RegExp('\\b' + rx(word) + '\\w{0,3}\\b', 'i'), '_____') : '';
    it.cloze = w.i % 2 === 1 && blank && blank !== v.ex && pool.length === 3;
    it.blank = blank;
    w.opts = RQ.shuffle(pool.map(function (x) { return { t: it.cloze ? x.word : x.def, ok: false }; }).concat([{ t: it.cloze ? word : v.def, ok: true }]));
  }
  function renderWarm() {
    var w = ss.warm, it = w.list[w.i], h = headHTML() + '<div class="s-body">';
    var optsHTML = '<div class="opts">' + w.opts.map(function (o, i) {
      return '<button class="opt' + (w.done ? (o.ok ? ' ok' : i === w.picked ? ' no' : ' dim') : '') + '" data-a="warmPick" data-i="' + i + '"' + (w.done ? ' disabled' : '') + '><span>' + esc(o.t) + '</span></button>';
    }).join('') + '</div>';
    if (it.kind === 'again') {
      var m = it.m;
      h += '<div class="kicker">🔁 Second chance · from “' + esc(m.info.data.title) + '”</div>' +
        '<article class="passage mini">' + passageHTML({ passage: [m.info.data.passage[m.q.para]], vocab: [] }) + '</article>' +
        '<div class="q-card"><h2 class="q-text">' + esc(m.q.q) + '</h2>' + optsHTML + '<div id="feedback">' + w.fb + '</div>' +
        '<div class="q-actions">' + (w.done ? '<button class="btn big" data-a="warmNext">Next</button>' : '') + '</div></div>';
    } else {
      var wl = w.list.filter(function (x) { return x.kind === 'vocab'; });
      h += '<div class="kicker">🔥 Warm-up · word ' + (wl.indexOf(it) + 1) + ' of ' + wl.length + '</div><div class="q-card"><h2 class="q-text">' +
        (it.cloze ? 'Which word fits? <span class="cloze">' + esc(it.blank) + '</span>' : 'What does <span class="hl-word">' + esc(it.word) + '</span> mean?') + '</h2>' + optsHTML +
        '<div id="feedback">' + w.fb + '</div><div class="q-actions"></div></div>';
    }
    return h + '</div>';
  }
  function renderWords() {
    var v = ss.d.vocab[ss.wordIdx], n = ss.d.vocab.length, last = ss.wordIdx === n - 1;
    return headHTML() + '<div class="s-body"><div class="kicker">✨ New words · ' + (ss.wordIdx + 1) + ' of ' + n + '</div>' +
      '<div class="word-card"><div class="word-big">' + esc(v.word) + say(v.word + '. ' + v.def + '. ' + v.ex) + '</div>' +
      '<p class="word-def">' + esc(v.def) + '</p><p class="word-ex">“' + esc(v.ex) + '”</p></div>' +
      '<button class="btn big" data-a="wordNext">' + (last ? 'Let\'s read! 📖' : 'Next word') + '</button>' +
      '<p class="note-kid center">You will see these words in today\'s reading.</p></div>';
  }

  // Stop-and-think checks used for this child: all of them, or just the first once the child reads independently.
  function stopsFor() {
    if (ss.test || ss.isReplay || !ss.d.stops) return [];
    return ss.mode === 'independent' ? ss.d.stops.slice(0, 1) : ss.d.stops;
  }
  function minReadMs() {
    if (fast()) return 250;
    if (ss.isReplay) return 3000;
    var words = SH.passageWordCount(ss.d.passage), week = ss.info.week || 6;
    var cap = week <= 4 ? 150 : week <= 8 ? 175 : 200;      // words a minute nobody at this level reads faster than
    if (ss.test) cap = [150, 175, 200][ss.test.pi] || 200;
    var w = RQ.S.log.filter(function (l) { return l.first && l.wpm > 30 && l.wpm < 400; }).slice(-5).map(function (l) { return l.wpm; }).sort(function (a, b) { return a - b; });
    if (w.length >= 3) cap = Math.max(110, Math.min(260, w[Math.floor(w.length / 2)] * 1.4));
    return Math.max(8000, Math.min(240000, words / cap * 60000));
  }
  function renderRead() {
    var d = ss.d, stops = stopsFor(), stop = stops[ss.stopIdx], upTo = stop ? stop.after : undefined;
    if (stop && !ss.stop) buildStop();
    var from = ss.stopIdx > 0 ? stops[ss.stopIdx - 1].after + 1 : undefined;
    var listenOpen = !ss.test && RQ.S.settings.readAloud && RQ.tts.available();
    var listenNow = listenOpen && (RQ.store.listenFirst(ss.info.week) || ss.isReplay || ss.readDone);
    var h = headHTML() + '<div class="s-body reader"><div class="reader-head"><span class="genre-tag">' + (C.GENRES[d.genre] || 'Text') + '</span>' +
      (d.boss ? '<span class="genre-tag boss-tag">' + ss.info.meta.guardian.emoji + ' Guardian Challenge</span>' : '') +
      (ss.test ? '<span class="genre-tag boss-tag">🧭 Reading Check · part ' + (ss.test.pi + 1) + ' of ' + ss.test.form.passages.length + '</span>' : '') +
      '<h1>' + esc(d.title) + '</h1></div>';
    if (d.purpose && !ss.test) h += '<p class="purpose">🎯 ' + esc(d.purpose) + '</p>';
    if (!ss.test) h += '<div class="reader-tools">' + (listenOpen ? '<button class="tool' + (listenNow ? '' : ' waiting') + '" id="listen-btn" data-a="listen">🔊 Listen</button>' : '') +
      (d.vocab && d.vocab.length ? '<span class="note-kid">Tap a <span class="vw demo">dotted</span> word to see what it means.</span>' : '') + '</div>';
    h += '<article class="passage" id="passage">' + passageHTML(d, { upTo: upTo, from: from }) + '</article>';
    if (stop) {
      var so = ss.stop;
      h += '<div class="stop-card" id="stop-card"><div class="stop-h">🛑 Stop &amp; Think</div><h2 class="q-text">' + esc(stop.q) + '</h2><div class="opts' + (ss.stopOK || so.done ? '' : ' locked') + '">' +
        so.opts.map(function (o, i) { return '<button class="opt ' + o.state + '" data-a="stopPick" data-i="' + i + '"' + (o.state || so.done ? ' disabled' : '') + '><span>' + esc(o.t) + '</span></button>'; }).join('') + '</div>' +
        (so.done ? '<div class="fb ok"><div class="fb-h">✅ ' + esc(stop.say) + '</div></div><button class="btn big" data-a="stopNext">Keep reading →</button>'
          : so.miss ? '<div class="fb retry"><div class="fb-h">💡 Read that part one more time. Then try again.</div></div>' : '<p class="note-kid center" id="stop-wait">' + (ss.stopOK ? '' : 'Read this part first…') + '</p>') + '</div>';
    } else {
      h += '<div class="reader-foot"><button class="btn big wait' + (ss.readDone ? ' ready' : '') + '" id="done-read" data-a="doneRead"' + (ss.readDone ? '' : ' aria-disabled="true"') + '><span class="wait-fill"></span><span class="wait-lbl">I finished reading ✓</span></button>' +
        '<p class="note-kid center">' + (ss.test ? 'No hints this time. You can look back at the text.' : 'Read carefully. Questions come next!') + '</p></div>';
    }
    return h + '</div>';
  }
  function buildStop() {
    var stop = stopsFor()[ss.stopIdx];
    ss.stop = stop ? { opts: RQ.shuffle(stop.options.map(function (t, i) { return { t: t, ok: i === 0, state: '' }; })), done: false, miss: false } : null;
    ss.stopOK = false;
  }

  function buildCur(qi) {
    var q = ss.d.questions[qi === undefined ? ss.qIdx : qi];
    cur = { q: q, qi: qi === undefined ? ss.qIdx : qi, tries: 0, done: false, sel: [], opts: null, items: null, placed: [], assign: {}, lockedOK: {}, shownAt: Date.now(), nextAt: 0 };
    if (q.type === 'mc') cur.opts = RQ.shuffle(q.options.map(function (t, i) { return { t: t, ok: i === 0, state: '' }; }));
    if (q.type === 'multi') cur.opts = RQ.shuffle(q.options.map(function (t, i) { return { t: t, ok: i < q.correct, state: '' }; }));
    if (q.type === 'order') {
      var sh; do { sh = RQ.shuffle(q.items.map(function (t, i) { return { t: t, i: i }; })); } while (sh.every(function (x, k) { return x.i === k; }));
      cur.items = sh;
    }
    if (q.type === 'sort') cur.items = RQ.shuffle(q.items.map(function (it, i) { return { t: it.t, c: it.c, i: i }; }));
    if (q.type === 'evidence') SH.passageSentences(ss.d.passage).forEach(function (x) { if (x.text === q.answer) cur.ansKey = x.p + ':' + x.s; });
  }
  function qBodyHTML() {
    var q = cur.q, h = '';
    if (q.type === 'mc' || q.type === 'multi') {
      h += '<div class="opts' + (q.type === 'multi' ? ' multi' : '') + '">' + cur.opts.map(function (o, i) {
        var on = cur.sel.indexOf(i) >= 0;
        return '<button class="opt ' + o.state + (on ? ' sel' : '') + '" data-a="pickOpt" data-i="' + i + '"' + (q.type === 'multi' ? ' role="checkbox" aria-checked="' + on + '"' : ' aria-pressed="' + on + '"') + (o.state || cur.done ? ' disabled' : '') + '><span class="opt-mark">' + (q.type === 'multi' ? '✓' : String.fromCharCode(65 + i)) + '</span><span>' + esc(o.t) + '</span></button>';
      }).join('') + '</div>';
    } else if (q.type === 'order') {
      h += '<div class="order"><p class="ev-tip">👇 Tap the sentences in the right order. Tap a number to undo.</p><div class="slots">';
      for (var k = 0; k < cur.items.length; k++) {
        var it = cur.placed[k] !== undefined ? cur.items[cur.placed[k]] : null;
        h += '<button class="slot' + (it ? ' filled' : '') + (cur.done ? ' ok' : '') + '" data-a="unplace" data-k="' + k + '"' + (cur.done || !it ? ' disabled' : '') + '><span class="slot-n">' + (k + 1) + '</span><span>' + (it ? esc(it.t) : '') + '</span></button>';
      }
      h += '</div><div class="bank">' + cur.items.map(function (it2, i) {
        return cur.placed.indexOf(i) >= 0 ? '' : '<button class="bank-item" data-a="place" data-i="' + i + '">' + esc(it2.t) + '</button>';
      }).join('') + '</div></div>';
    } else if (q.type === 'sort') {
      h += '<div class="sort"><p class="ev-tip">👇 Tap where each one belongs.</p>' + cur.items.map(function (it3, i) {
        var a = cur.assign[i], st = cur.done ? ' ok' : cur.lockedOK[i] ? ' ok' : cur.badSort && cur.badSort[i] ? ' no' : '';
        return '<div class="sort-row' + st + '"><div class="sort-t">' + esc(it3.t) + '</div><div class="sort-cats">' + q.cats.map(function (c, ci) {
          var on = (cur.done ? it3.c : a) === ci;
          return '<button class="sort-cat' + (on ? ' on' : '') + '" data-a="sortPick" data-i="' + i + '" data-c="' + ci + '" aria-pressed="' + on + '"' + (cur.done || cur.lockedOK[i] ? ' disabled' : '') + '>' + esc(c) + '</button>';
        }).join('') + '</div></div>';
      }).join('') + '</div>';
    } else if (q.type === 'evidence') {
      h += '<p class="ev-tip">👇 Tap one sentence in the text.</p><article class="passage ev" id="ev-passage">' + passageHTML(ss.d, { tappable: true }) + '</article>';
    }
    return h;
  }
  function canCheck() {
    var q = cur.q;
    if (cur.done) return false;
    if (q.type === 'mc' || q.type === 'evidence') return cur.sel.length === 1;
    if (q.type === 'multi') return cur.sel.length === 2;
    if (q.type === 'order') return cur.placed.filter(function (x) { return x !== undefined; }).length === cur.items.length;
    if (q.type === 'sort') return cur.items.every(function (_, i) { return cur.assign[i] !== undefined; });
    return false;
  }
  function checkLabel() {
    if (cur.q.type === 'multi' && cur.sel.length < 2) return cur.sel.length === 0 ? 'Pick 2 answers' : 'Pick 1 more';
    return ss.test ? 'Lock in my answer' : 'Check';
  }
  function stem(q) { return q.part ? q.q.replace(/^Part [AB]\s*[:.\-]\s*/i, '') : q.q; }
  function renderQuiz() {
    var q = cur.q, sk = C.SKILLS[q.skill], n = ss.d.questions.length, boss = ss.d.boss, wk = ss.info.week;
    var hideSkill = (boss || wk === 12 || ss.test) && !cur.done;   // mixed practice: the child has to spot the kind of question
    var isEv = q.type === 'evidence';
    var h = headHTML() + '<div class="s-body quiz' + (isEv ? ' is-ev' : '') + '">';
    if (!isEv) h += '<aside class="lookback" id="lookback"><div class="lb-head"><b>📖 ' + esc(ss.d.title) + '</b><button class="tool lb-close" data-a="lookClose">Back to question</button></div>' +
      '<div class="lb-q">❓ ' + esc(stem(q)) + '</div><article class="passage" id="lb-passage">' + passageHTML(ss.d, { skip: vocabTargets(q) }) + '</article></aside>';
    h += '<div class="q-col">';
    if (boss && !ss.fix) {
      var hearts = ''; for (var i = 0; i < n; i++) hearts += '<span class="heart' + (i < ss.hits ? ' hit' : '') + '">' + (i < ss.hits ? '⭐' : '❤️') + '</span>';
      h += '<div class="boss-bar"><span class="boss-face">' + ss.info.meta.guardian.emoji + '</span><span class="hearts">' + hearts + '</span></div>';
    }
    h += '<div class="q-meta"><span class="skill-chip">' + (ss.fix ? '🔧 Fix-it round' : hideSkill ? (ss.test ? '🧭 Reading Check' : '❓ Mixed practice') : sk.icon + ' ' + (sk.kid || sk.name)) + '</span>' +
      '<span class="q-count">' + (ss.fix ? 'Try again: ' + (ss.fix.i + 1) + ' of ' + ss.fix.list.length : 'Question ' + (ss.qIdx + 1) + ' of ' + n) + '</span>' +
      (!ss.test && ss.info.strategy ? '<button class="tool pu-btn" data-a="strategy" data-week="' + wk + '" aria-label="Power-Up card">⚡</button>' : '') +
      (!isEv ? '<button class="tool look-btn" data-a="lookOpen">📖 Look back</button>' : '') + '</div>';
    if (ss.remind && !cur.done && !ss.fix && ss.info.meta.focus.indexOf(q.skill) >= 0) h += '<div class="remind">⚡ <b>' + esc(ss.info.strategy.name) + ':</b> ' + esc(sk.tip) + '</div>';
    h += '<div class="q-card">';
    if (q.part) h += '<div class="part-tag">Part ' + q.part + '</div>';
    if (q.part === 'B' && ss.partA) h += '<div class="part-recap"><b>Part A asked:</b> ' + esc(ss.partA.q) + (ss.partA.a ? '<br><b>The answer was:</b> ' + esc(ss.partA.a) : '') + '</div>';
    h += '<h2 class="q-text">' + esc(stem(q)) + (RQ.S.settings.readAloud && RQ.tts.available() && !ss.test ? ' <button class="say" data-a="sayQ" aria-label="Read the question aloud">🔊</button>' : '') + '</h2>' +
      '<div id="q-body">' + qBodyHTML() + '</div><div id="feedback" tabindex="-1" aria-live="polite">' + (cur.fb || '') + '</div><div class="q-actions">';
    if (cur.done) {
      var last = ss.fix ? ss.fix.i === ss.fix.list.length - 1 : ss.qIdx === n - 1;
      h += '<button class="btn big" id="next-btn" data-a="nextQ"' + (Date.now() < cur.nextAt ? ' disabled' : '') + '>' + (last && !(ss.test && ss.test.pi < ss.test.form.passages.length - 1) ? 'Finish! 🎉' : 'Next →') + '</button>';
    } else h += '<button class="btn big" id="check-btn" data-a="check"' + (canCheck() ? '' : ' disabled') + '>' + checkLabel() + '</button>';
    return h + '</div></div></div></div>';
  }
  function refreshQuiz() {
    var top = window.scrollY, act = document.activeElement, key = act && act.getAttribute ? act.getAttribute('data-a') : null;
    var idx = act && act.getAttribute ? (act.getAttribute('data-i') || act.getAttribute('data-k')) : null;
    var lbOpen = RQ.$('#lookback') && RQ.$('#lookback').classList.contains('open');
    var evScroll = RQ.$('#ev-passage') ? RQ.$('#ev-passage').scrollTop : 0;
    RQ.$('#app').innerHTML = renderQuiz();
    if (lbOpen) RQ.$('#lookback').classList.add('open');
    markEvidence(); markPara();
    if (RQ.$('#ev-passage')) RQ.$('#ev-passage').scrollTop = evScroll;
    window.scrollTo(0, top);
    if (key) { var again = RQ.$('[data-a="' + key + '"]' + (idx !== null ? '[data-i="' + idx + '"],[data-a="' + key + '"][data-k="' + idx + '"]' : '')); if (again && !again.disabled) try { again.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
    armNext();
  }
  function armNext() {
    clearTimeout(nextTimer);
    if (cur && cur.done && Date.now() < cur.nextAt) nextTimer = setTimeout(function () { var b = RQ.$('#next-btn'); if (b) b.disabled = false; }, cur.nextAt - Date.now() + 20);
  }
  function markEvidence() {
    if (!cur || cur.q.type !== 'evidence') return;
    RQ.$$('#ev-passage .sent').forEach(function (el) {
      var key = el.getAttribute('data-p') + ':' + el.getAttribute('data-s'), bad = (cur.bad || []).indexOf(key) >= 0;
      el.classList.toggle('sel', cur.sel[0] === key && !cur.done);
      el.classList.toggle('bad', bad);
      el.classList.toggle('good', !!cur.done && key === cur.ansKey && !ss.test);
      if (cur.done || bad) { el.removeAttribute('data-a'); el.classList.remove('tap'); }
    });
    if (cur.tries > 0 && cur.q.para !== undefined && ss.mode !== 'independent') {
      var p = RQ.$('#ev-passage [data-p="' + cur.q.para + '"].para'); if (p) p.classList.add('hint-para');
    }
  }
  function markPara() {
    if (!cur || cur.q.type === 'evidence' || cur.q.para === undefined || ss.test) return;
    if (cur.tries > 0 && (ss.mode !== 'independent' || cur.done)) {
      var p = RQ.$('#lb-passage [data-p="' + cur.q.para + '"].para'); if (p) p.classList.add('hint-para');
    }
  }

  function dotsHTML() { return ss.points.map(function (p) { return '<span class="dot ' + (p === 1 ? 'g' : p > 0 ? 'y' : 'r') + '"></span>'; }).join(''); }
  function weekDotsHTML(n) { var h = '<span class="wdots" aria-label="' + n + ' of 5 reading days this week">'; for (var i = 0; i < 5; i++) h += '<span class="wdot' + (i < n ? ' on' : '') + '"></span>'; return h + '</span>'; }
  RQ.weekDotsHTML = weekDotsHTML;
  function renderResults() {
    var r = ss.reward, d = ss.d, S = RQ.S, n = d.questions.length;
    var firsts = ss.perQ.filter(function (q) { return q.first; }).length;
    var h = '<div class="results">';
    if (r.passed) {
      var head = r.stars === 3 ? 'You proved it!' : r.stars === 2 ? 'Strong reading!' : 'You stuck with it!';
      var sub = ss.usedLook ? 'You looked back in the text. That is what great readers do.' : firsts === n ? 'Every answer right on the first try!' : 'You kept going and worked it out.';
      h += '<div class="res-pet" id="res-pet">' + RQ.petSVG(r.petGrew ? { stage: r.stage - 1, mood: 'happy' } : { mood: 'wow' }) + '</div><h1>' + head + '</h1>' +
        RQ.starsHTML(r.stars, 'big anim') + '<p class="res-score">' + firsts + ' of ' + n + ' right on the first try</p><div class="dots">' + dotsHTML() + '</div><p class="res-sub">' + sub + '</p><div class="loot">';
      if (r.newSticker) h += '<div class="loot-item sticker-win"><span class="loot-emoji">' + d.sticker.emoji + '</span><span>New sticker!<br><b>' + esc(d.sticker.name) + '</b></span></div>';
      if (r.gems) h += '<div class="loot-item"><span class="loot-emoji">💎</span><span><b>+' + r.gems + '</b> gems' + (r.solo ? '<br>You read it by yourself!' : '') + (r.fixedAll ? '<br>Fix-it round: all fixed!' : '') + '</span></div>';
      if (r.mastered) h += '<div class="loot-item"><span class="loot-emoji">👑</span><span><b>Mastered!</b><br>Almost all right on the first try, all by yourself</span></div>';
      if (r.dayNew) h += '<div class="loot-item"><span class="loot-emoji">📅</span><span>Reading day <b>' + r.weekDays + '</b> this week<br>' + weekDotsHTML(r.weekDays) + (r.weekGoal ? '<br><b>Weekly goal reached! +3 💎</b>' : '') + '</span></div>';
      h += '</div>';
      if (r.petGrew) h += '<div class="grew card" id="grew">🎉 ' + esc(S.profile.petName) + (r.stage === 1 ? ' hatched!' : ' grew into a ' + RQ.store.STAGE_NAMES[r.stage] + '!') + '</div>';
      if (r.weekDone) h += '<div class="grew card week-done"><span class="loot-emoji">' + ss.info.meta.guardian.emoji + '</span> You beat ' + esc(ss.info.meta.guardian.name) + '!<br><b>' + esc(ss.info.meta.land) + '</b> is complete. ' + esc(ss.info.meta.guardian.name) + ' is now your friend.</div>';
      h += '<div class="feel" id="feel"><div class="feel-h">How did that feel?</div><div class="feel-row">' +
        '<button class="feel-btn" data-a="feel" data-f="easy">😊<span>Easy</span></button><button class="feel-btn" data-a="feel" data-f="ok">🙂<span>Just right</span></button><button class="feel-btn" data-a="feel" data-f="hard">😅<span>Hard</span></button></div></div>';
      var talked = RQ.store.rec(ss.id) && RQ.store.rec(ss.id).talked;
      h += '<div class="talk card"><div class="talk-h">🗣️ Tell a grown-up</div><p>' + esc(d.talk.replace(/^Tell a grown-up:\s*/i, '')) + '</p>' +
        (talked ? '<p class="note-kid">✅ You talked about it!</p>' : '<button class="btn alt sm" data-a="talked">✅ We talked about it <span class="pill">+1 💎</span></button>') + '</div>';
      if (d.boss) h += '<div class="talk card" id="journal"><div class="talk-h">✏️ Quest Journal</div><p>Write one sentence about what you read this week.</p>' +
        '<textarea class="inp area" id="journal-text" maxlength="300" rows="3" placeholder="I think … because the text says …"></textarea><button class="btn alt sm" data-a="journalSave">Save my sentence' + ((RQ.store.rec(ss.id) || {}).journal ? '' : ' <span class="pill">+2 💎</span>') + '</button></div>';
      if (r.stars < 3) h += '<p class="note-kid center">Want all 3 stars? Come back to this lesson another day.</p>';
      h += '<button class="btn big" data-a="resDone">Continue</button>';
    } else {
      h += '<div class="res-pet">' + RQ.petSVG({ mood: 'happy' }) + '</div><h1>' + (r.movedOn ? 'You kept trying!' : 'Not yet!') + '</h1>' +
        '<p class="res-score">' + firsts + ' of ' + n + ' right on the first try</p><div class="dots">' + dotsHTML() + '</div><p class="res-msg">' +
        (r.movedOn ? (r.isLast ? 'That was the hardest one of all. Read it again another day and you will get it.' : 'That was a tough one. The next lesson is open now. Come back another day and win this sticker.')
          : (firsts < Math.ceil(n * RQ.store.FIRST_PASS) ? 'You need ' + Math.ceil(n * RQ.store.FIRST_PASS) + ' right on the first try. ' : 'So close! You need a few more right answers. ') + 'Look at the Power-Up, read it one more time, and you can win the <b>' + esc(d.sticker.name) + '</b> sticker!') + '</p>' +
        (r.dayNew ? '<p class="note-kid center">📅 Reading day ' + r.weekDays + ' this week ' + weekDotsHTML(r.weekDays) + '</p>' : '') +
        (r.movedOn ? '' : '<button class="btn big" data-a="retry">📖 Read it again</button>') + '<button class="btn alt" data-a="resDone">Back to the map</button>';
    }
    return h + '</div>';
  }
  function renderCheckIntro() {
    var S = RQ.S, n = ss.test.n;
    return headHTML() + '<div class="results"><div class="res-pet">' + RQ.petSVG({ mood: 'happy' }) + '</div><h1>Reading Check</h1>' +
      '<p class="res-msg">' + (n === 1 ? 'Before the quest starts, show ' + esc(S.profile.petName) + ' how you read <b>all by yourself</b>.' : 'Time to show how much stronger your reading is, <b>all by yourself</b>.') + '</p>' +
      '<div class="how"><div class="how-row"><span>📖</span><p>Up to 3 short texts with 5 questions each.</p></div>' +
      '<div class="how-row"><span>🤫</span><p>No hints and no Listen this time. You can still look back.</p></div>' +
      '<div class="how-row"><span>💪</span><p>Some will be tricky. That is OK! Just do your best.</p></div></div>' +
      '<button class="btn big" data-a="checkStart">I\'m ready!</button></div>';
  }
  function renderCheckDone() {
    var S = RQ.S, t = ss.test, r = ss.reward;
    return '<div class="results"><div class="res-pet">' + RQ.petSVG({ mood: 'wow' }) + '</div><h1>Reading Check done!</h1>' +
      '<p class="res-msg">You answered <b>' + t.total + '</b> questions all by yourself. ' + esc(S.profile.petName) + ' is proud of how hard you worked.</p>' +
      '<div class="loot"><div class="loot-item"><span class="loot-emoji">💎</span><span><b>+' + r.gems + '</b> gems</span></div>' +
      '<div class="loot-item"><span class="loot-emoji">📅</span><span>Reading day <b>' + r.weekDays + '</b> this week<br>' + weekDotsHTML(r.weekDays) + '</span></div></div>' +
      '<p class="note-kid center">A grown-up can see how you did in the Grown-ups area.</p>' +
      '<button class="btn big" data-a="resDone">' + (t.n === 1 ? 'Start my quest!' : 'Continue') + '</button></div>';
  }

  RQ.screens.session = {
    render: function () {
      if (ss.step === 'strategy') return renderStrategy();
      if (ss.step === 'practice') return renderPractice();
      if (ss.step === 'warmup') return renderWarm();
      if (ss.step === 'words') return renderWords();
      if (ss.step === 'read') return renderRead();
      if (ss.step === 'quiz') return renderQuiz();
      if (ss.step === 'checkintro') return renderCheckIntro();
      if (ss.step === 'checkdone') return renderCheckDone();
      return renderResults();
    },
    enter: function () {
      clockOn();
      if (ss.step === 'read') armRead();
      if (ss.step === 'quiz') { markEvidence(); markPara(); armNext(); }
      if ((ss.step === 'results' && ss.reward.passed) || ss.step === 'checkdone') {
        RQ.sfx.fanfare(); RQ.confetti(((ss.reward.stars || 2) * 40) + 30);
        for (var i = 0; i < (ss.reward.stars || 0); i++) (function (k) { setTimeout(function () { RQ.sfx.star(k); }, 700 + k * 350); })(i);
        if (ss.reward.petGrew) setTimeout(function () {       // the hatch / growth moment
          var el = RQ.$('#res-pet'); if (!el || RQ.current.name !== 'session') return;
          el.innerHTML = RQ.petSVG({ mood: 'wow' }); el.classList.add('boing'); RQ.sfx.fanfare(); RQ.confetti(90);
        }, fast() ? 10 : 1900);
      }
    },
    leave: function () { clockOff(); clearTimers(); }
  };
  function go(step) { ss.step = step; RQ.show('session'); }

  function armRead() {
    clearTimeout(readTimer); clearTimeout(stopTimer);
    var stops = stopsFor(), stop = stops[ss.stopIdx];
    if (stop) {       // the stop question wakes up after a short read of the new part
      if (!ss.stop) buildStop();
      var from = ss.stopIdx > 0 ? stops[ss.stopIdx - 1].after + 1 : 0, w = 0;
      for (var i = from; i <= stop.after; i++) if (!SH.isHeading(ss.d.passage[i])) w += SH.words(ss.d.passage[i]).length;
      var wait = fast() ? 0 : Math.min(25000, w / 200 * 60000 * 0.6);
      stopTimer = setTimeout(function () { ss.stopOK = true; var o = RQ.$('#stop-card .opts'); if (o) o.classList.remove('locked'); var n = RQ.$('#stop-wait'); if (n) n.textContent = ''; }, wait);
      return;
    }
    if (ss.readDone) return;
    var ms = Math.max(fast() ? 250 : 2500, minReadMs() - ss.readMs);
    var btn = RQ.$('#done-read'), fill = RQ.$('.wait-fill');
    if (fill) { fill.style.transitionDuration = ms + 'ms'; requestAnimationFrame(function () { requestAnimationFrame(function () { fill.style.width = '100%'; }); }); }
    readTimer = setTimeout(function () {
      ss.readDone = true;
      if (btn) { btn.removeAttribute('aria-disabled'); if (!fast()) btn.classList.add('ready'); }
      var lb = RQ.$('#listen-btn'); if (lb) lb.classList.remove('waiting');
    }, ms);
  }

  // ---------- actions ----------
  RQ.actions.strategyDone = function () {
    RQ.sfx.tap();
    var st = ss.info.strategy;
    if (ss.afterFail) { ss.afterFail = false; go('read'); return; }
    if (st.practice && st.practice.length) { ss.pracIdx = 0; buildPrac(); go('practice'); return; }
    RQ.S.seenStrategy[ss.info.week] = true; RQ.store.save();
    beginWarmOrWords(); RQ.show('session');
  };
  RQ.actions.pracPick = function (el) {
    var pr = ss.prac, o = pr.opts[+el.getAttribute('data-i')];
    if (pr.done || o.state) return;
    if (o.ok) { pr.done = true; o.state = 'ok'; pr.opts.forEach(function (x) { if (!x.ok && !x.state) x.state = 'dim'; }); RQ.sfx.correct(); }
    else { o.state = 'no'; pr.miss = true; RQ.sfx.wrong(); }
    RQ.navAt = Date.now(); RQ.$('#app').innerHTML = renderPractice();
  };
  RQ.actions.pracNext = function () {
    RQ.sfx.tap();
    if (ss.pracIdx < ss.info.strategy.practice.length - 1) { ss.pracIdx++; buildPrac(); go('practice'); return; }
    RQ.S.seenStrategy[ss.info.week] = true; RQ.store.save();
    beginWarmOrWords(); RQ.show('session');
  };
  RQ.actions.say = function (el) { RQ.tts.stop(); RQ.tts.speak(el.getAttribute('data-t')); };
  RQ.actions.wordNext = function () {
    RQ.sfx.tap(); RQ.tts.stop();
    if (ss.wordIdx < ss.d.vocab.length - 1) { ss.wordIdx++; go('words'); } else { buildStop(); go('read'); saveProgress(); }
  };
  RQ.actions.warmPick = function (el) {
    var w = ss.warm; if (w.done) return;
    var i = +el.getAttribute('data-i'), o = w.opts[i], it = w.list[w.i];
    w.done = true; w.picked = i;
    if (o.ok) { RQ.sfx.correct(); w.right++; } else RQ.sfx.wrong();
    if (it.kind === 'again') {
      RQ.store.gradeMissed(it.m.key, o.ok);
      w.fb = '<div class="fb ' + (o.ok ? 'ok' : 'reveal') + '"><div class="fb-h">' + (o.ok ? '✅ You got it this time!' : '📘 Here is why.') + '</div><p>' + esc(it.m.q.why) + '</p></div>';
      RQ.navAt = Date.now(); RQ.$('#app').innerHTML = renderWarm();
      return;
    }
    RQ.store.gradeVocab(it.word, o.ok);
    RQ.$('#app').innerHTML = renderWarm();
    var mine = w;
    warmTimer = setTimeout(function () { if (ss && ss.warm === mine && RQ.current.name === 'session' && ss.step === 'warmup') RQ.actions.warmNext(); }, fast() ? 60 : o.ok ? 900 : 2200);
  };
  RQ.actions.warmNext = function () {
    clearTimeout(warmTimer);
    var w = ss.warm; w.i++;
    if (w.i >= w.list.length) { RQ.S.xp += w.right * 5; RQ.store.save(); if (ss.d.vocab && ss.d.vocab.length) go('words'); else { buildStop(); go('read'); } }
    else { buildWarm(); go('warmup'); }
  };
  RQ.actions.vocabTip = function (el) {
    var w = el.getAttribute('data-w'), v = null;
    (ss.d.vocab || []).forEach(function (x) { if (x.word.toLowerCase() === w) v = x; });
    if (!v) return;
    RQ.sfx.pop();
    RQ.modal('<div class="tip-word">' + esc(v.word) + say(v.word + '. ' + v.def + '. ' + v.ex) + '</div><p class="word-def">' + esc(v.def) + '</p><p class="word-ex">“' + esc(v.ex) + '”</p><button class="btn" data-a="closeModal">OK</button>');
  };
  function listenReset(label) {
    stopListen = null; RQ.$$('.speaking').forEach(function (s) { s.classList.remove('speaking'); }); RQ.tts.markWord(null);
    var b = RQ.$('#listen-btn'); if (b) b.textContent = label;
  }
  RQ.actions.listen = function (el) {
    if (el.classList.contains('waiting')) { RQ.sfx.tap(); RQ.toast('Read it yourself first. Then you can listen to check!'); return; }
    if (stopListen) { var s = stopListen; stopListen = null; s(); listenReset('🔊 Listen'); return; }
    ss.usedListen = true;
    var spans = RQ.$$('#passage .sent');
    el.textContent = '⏹ Stop';
    stopListen = RQ.tts.speakList(spans.map(function (s2) { return s2.textContent; }), function (i) {
      RQ.$$('.speaking').forEach(function (s3) { s3.classList.remove('speaking'); });
      spans[i].classList.add('speaking');
      var r = spans[i].getBoundingClientRect();           // only scroll when the sentence is leaving the screen
      if (r.top < 90 || r.bottom > window.innerHeight * 0.72) spans[i].scrollIntoView({ block: 'center', behavior: RQ.reduceMotion ? 'auto' : 'smooth' });
    }, function () { listenReset('🔊 Listen again'); }, function () { listenReset('🔊 Listen'); }, function (i, a, b) { RQ.tts.markWord(spans[i], a, b); });
  };
  RQ.actions.stopPick = function (el) {
    var so = ss.stop, o = so.opts[+el.getAttribute('data-i')];
    if (so.done || o.state) return;
    if (!ss.stopOK) { RQ.toast('Read this part first!'); return; }
    if (o.ok) { so.done = true; o.state = 'ok'; so.opts.forEach(function (x) { if (!x.ok && !x.state) x.state = 'dim'; }); RQ.sfx.correct(); }
    else { o.state = 'no'; so.miss = true; RQ.sfx.wrong(); }
    var y = window.scrollY; RQ.navAt = Date.now();
    RQ.$('#app').innerHTML = renderRead(); window.scrollTo(0, y);
    var c = RQ.$('#stop-card'); if (c) c.scrollIntoView({ block: 'nearest' });
  };
  RQ.actions.stopNext = function () {
    RQ.sfx.tap(); if (stopListen) { var s = stopListen; stopListen = null; s(); }
    ss.stopIdx++; ss.stop = null; buildStop(); saveProgress();
    var y = window.scrollY; RQ.navAt = Date.now();
    RQ.$('#app').innerHTML = renderRead(); window.scrollTo(0, y);
    var f = RQ.$('#passage .fresh'); if (f) f.scrollIntoView({ block: 'start', behavior: RQ.reduceMotion ? 'auto' : 'smooth' });
    armRead();
  };
  RQ.actions.doneRead = function (el) {
    if (!ss.readDone) { RQ.sfx.tap(); el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); RQ.toast('Keep reading! The button wakes up when the bar is full.'); return; }
    clockOff(); clockOn();
    RQ.sfx.tap(); ss.qIdx = 0; ss.remind = remindFor(); buildCur(); ss.step = 'quiz'; saveProgress(); RQ.show('session');
  };
  // Days 2-3 of a week: a one-line reminder of the week's strategy on the first question that needs it.
  function remindFor() { return !ss.test && !ss.isReplay && ss.info.strategy && (ss.info.day === 2 || ss.info.day === 3) && ss.mode !== 'independent'; }
  RQ.actions.sayQ = function () {
    var q = cur.q, t = stem(q);
    if (cur.opts) t += ' ' + cur.opts.filter(function (o) { return o.state !== 'no' && o.state !== 'gone'; }).map(function (o) { return o.t; }).join('. ');
    RQ.tts.stop(); RQ.tts.speak(t);
  };
  RQ.actions.lookOpen = function () { ss.usedLook = true; RQ.$('#lookback').classList.add('open'); var p = RQ.$('#lb-passage .hint-para'); if (p) p.scrollIntoView({ block: 'center' }); };
  RQ.actions.lookClose = function () { RQ.$('#lookback').classList.remove('open'); };

  RQ.actions.pickOpt = function (el) {
    if (cur.done) return;
    var i = +el.getAttribute('data-i');
    if (cur.q.type === 'mc') cur.sel = [i];
    else {
      var k = cur.sel.indexOf(i);
      if (k >= 0) cur.sel.splice(k, 1);
      else if (cur.sel.length >= 2) { RQ.sfx.wrong(); el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); RQ.toast('Only TWO! Tap one to take it away first.'); return; }
      else cur.sel.push(i);
    }
    RQ.sfx.tap(); refreshQuiz();
  };
  RQ.actions.place = function (el) {
    var i = +el.getAttribute('data-i'); RQ.sfx.tap();
    for (var k = 0; k < cur.items.length; k++) if (cur.placed[k] === undefined) { cur.placed[k] = i; break; }
    refreshQuiz();
  };
  RQ.actions.unplace = function (el) { cur.placed[+el.getAttribute('data-k')] = undefined; RQ.sfx.tap(); refreshQuiz(); };
  RQ.actions.sortPick = function (el) {
    if (cur.done) return;
    var i = +el.getAttribute('data-i'); if (cur.lockedOK[i]) return;
    cur.assign[i] = +el.getAttribute('data-c'); if (cur.badSort) cur.badSort[i] = false;
    RQ.sfx.tap(); refreshQuiz();
  };
  RQ.actions.pickSent = function (el) {
    if (cur.done) return;
    var key = el.getAttribute('data-p') + ':' + el.getAttribute('data-s');
    if ((cur.bad || []).indexOf(key) >= 0) return;
    cur.sel = [key];
    RQ.sfx.tap(); markEvidence();
    var b = RQ.$('#check-btn'); if (b) b.disabled = false;
  };

  function isCorrect() {
    var q = cur.q;
    if (q.type === 'mc') return cur.opts[cur.sel[0]].ok;
    if (q.type === 'multi') return cur.sel.length === 2 && cur.sel.every(function (i) { return cur.opts[i].ok; });
    if (q.type === 'order') return cur.placed.every(function (i, k) { return cur.items[i].i === k; });
    if (q.type === 'sort') return cur.items.every(function (it, i) { return cur.assign[i] === it.c; });
    if (q.type === 'evidence') return cur.sel[0] === cur.ansKey;
    return false;
  }
  function fbHTML(kind, text, extra) {
    var sk = C.SKILLS[cur.q.skill], head = kind === 'ok' ? '✅ ' + RQ.petSay('correct') : kind === 'retry' ? '💡 ' + RQ.petSay('retry') : '📘 ' + RQ.petSay('reveal');
    var weak = RQ.store.mastery(cur.q.skill), tip = kind === 'retry' && (ss.mode === 'helper' || (weak !== null && weak < 0.65));
    return '<div class="fb has-pet ' + kind + '"><div class="fb-pet">' + RQ.petSVG({ mood: kind === 'ok' ? 'wow' : 'happy' }) + '</div><div class="fb-body"><div class="fb-h">' + esc(head) + say(text) + '</div><p>' + esc(text) + '</p>' +
      (extra ? '<p class="fb-tip">' + esc(extra) + '</p>' : '') + (tip ? '<p class="fb-tip">' + sk.icon + ' ' + esc(sk.tip) + '</p>' : '') + '</div></div>';
  }
  function finishQuestion(points, first, rushed) {
    cur.done = true;
    cur.nextAt = fast() ? 0 : Date.now() + (points === 0 ? 2600 : 650);     // time to take in the explanation
    if (ss.fix) { if (points > 0) ss.fix.fixed++; return; }
    ss.tried = null;
    ss.points.push(points); ss.perQ.push({ skill: cur.q.skill, first: first, rushed: !!rushed });
    if (!first) ss.missed.push(cur.qi);
    if (first && ss.d.boss) ss.hits++;
    if (cur.q.part === 'A') ss.partA = { q: stem(cur.q), a: ss.test ? '' : cur.q.options[0] };
  }
  RQ.actions.check = function () {
    if (!cur || cur.done || !canCheck()) return;
    var q = cur.q, ok = isCorrect(), first = cur.tries === 0;
    RQ.tts.stop(); RQ.navAt = Date.now();
    // An answer faster than the question could be read is a guess.
    var words = SH.words(q.q + ' ' + (q.options || q.items || []).map(function (x) { return x.t || x; }).join(' ')).length;
    var rushed = first && !fast() && !ss.fix && Date.now() - cur.shownAt < 1200 + 60 * words;
    if (first) cur.rushed = rushed;
    if (ss.test) {                                        // Reading Check: one try, no feedback
      finishQuestion(ok ? 1 : 0, ok, rushed); cur.nextAt = 0; RQ.sfx.tap();
      RQ.actions.nextQ(); return;
    }
    if (ok) {
      finishQuestion(first ? 1 : 0.5, first, cur.rushed); saveProgress();
      if (cur.opts) cur.opts.forEach(function (o) { if (o.ok) o.state = 'ok'; else if (!o.state) o.state = 'dim'; });
      cur.sel = q.type === 'evidence' ? cur.sel : [];
      cur.fb = fbHTML('ok', q.why); RQ.sfx.correct(); ss.rush = 0; ss.streak = first ? (ss.streak || 0) + 1 : 0;
      if (first && ss.streak === 3 && !RQ.reduceMotion) RQ.confetti(24);
    } else if (first && !ss.fix) {
      cur.tries = 1; RQ.sfx.wrong(); ss.streak = 0;
      ss.tried = cur.qi; saveProgress();        // leaving now must not give the first try back
      ss.rush = rushed ? ss.rush + 1 : 0;
      if (q.type === 'mc') {
        cur.opts[cur.sel[0]].state = 'no';
        if (ss.mode === 'helper') { var left = cur.opts.filter(function (o) { return !o.ok && !o.state; }); if (left.length > 1) RQ.pick(left).state = 'gone'; }
      }
      if (q.type === 'evidence') cur.bad = [cur.sel[0]];
      if (q.type === 'order') cur.placed = [];
      if (q.type === 'sort') { cur.badSort = {}; cur.items.forEach(function (it, i) { if (cur.assign[i] === it.c) cur.lockedOK[i] = true; else { cur.badSort[i] = true; delete cur.assign[i]; } }); }
      cur.sel = [];
      var extra = q.type === 'multi' ? 'Remember: pick the TWO best answers.' : q.type === 'sort' ? 'The green ones are right. Try the others again.' : '';
      if (ss.rush >= 2) extra = '🐢 Slow down. Read the question, then look back in the text before you answer.';
      cur.fb = fbHTML('retry', q.hint, extra);
    } else {
      finishQuestion(0, false, cur.rushed); saveProgress(); RQ.sfx.wrong(); ss.streak = 0;
      if (cur.opts) cur.opts.forEach(function (o) { o.state = o.ok ? 'ok' : (o.state || 'dim'); });
      if (q.type === 'order') cur.placed = q.items.map(function (_, k) { for (var i = 0; i < cur.items.length; i++) if (cur.items[i].i === k) return i; });
      cur.sel = [];
      cur.fb = fbHTML('reveal', q.why);
    }
    refreshQuiz();
    // After a miss on tap-the-sentence, keep the hinted paragraph in view; otherwise show the feedback.
    // Keep what the child has to look at on screen: the hinted paragraph, the row to redo, or the right sentence.
    var beh = RQ.reduceMotion ? 'auto' : 'smooth', fb = RQ.$('#feedback');
    if (q.type === 'evidence') {
      var hp = !cur.done ? RQ.$('#ev-passage .hint-para') : null, good = cur.done ? RQ.$('#ev-passage .sent.good') : null;
      if (hp) hp.scrollIntoView({ block: 'center', behavior: beh });
      else if (good) good.scrollIntoView({ block: 'start', behavior: beh });   // the feedback box is pinned above the button
    } else {
      var badRow = !cur.done && q.type === 'sort' ? RQ.$('.sort-row.no') : null;
      if (badRow) badRow.scrollIntoView({ block: 'center', behavior: beh });
      else if (fb && fb.firstChild) fb.scrollIntoView({ block: cur.done ? 'center' : 'end', behavior: beh });
    }
    if (ss.rush >= 2 && !cur.done && q.type !== 'evidence') RQ.actions.lookOpen();
  };
  function finishLesson() {
    clockOff();
    var score = ss.points.reduce(function (a, b) { return a + b; }, 0) / ss.points.length;
    var firstRate = ss.perQ.filter(function (q) { return q.first; }).length / ss.perQ.length;
    ss.reward = RQ.store.recordSession(ss.id, {
      score: score, firstRate: firstRate, perQ: ss.perQ, missed: ss.missed, ms: ss.activeMs, readMs: ss.readMs,
      words: SH.passageWordCount(ss.d.passage), usedListen: ss.usedListen
    });
    if (ss.fix && ss.fix.fixed === ss.fix.list.length && ss.reward.passed && ss.reward.newSticker) { RQ.S.gems += 1; ss.reward.gems += 1; ss.reward.fixedAll = true; RQ.store.save(); }
    ss.fix = null;
    go('results');
  }
  function finishCheckPassage() {
    var t = ss.test, p = t.form.passages[t.pi], right = ss.points.reduce(function (a, b) { return a + b; }, 0);
    t.levels.push({ level: p.level, right: right, total: ss.points.length, asked: true });
    t.right += right; t.total += ss.points.length;
    // Stop early when a text is clearly too hard, so the child is not put through the harder ones.
    var stopEarly = right <= 1;
    if (t.pi < t.form.passages.length - 1 && !stopEarly) { t.pi++; loadCheckPassage(); ss.step = 'read'; RQ.show('session'); return; }
    for (var i = t.pi + 1; i < t.form.passages.length; i++) t.levels.push({ level: t.form.passages[i].level, right: 0, total: 5, asked: false });
    clockOff();
    ss.reward = RQ.store.recordCheck(t.n, { levels: t.levels, right: t.right, total: t.total, ms: ss.activeMs });
    go('checkdone');
  }
  RQ.actions.nextQ = function () {
    if (!cur || !cur.done || Date.now() < cur.nextAt) return;
    RQ.sfx.tap();
    if (ss.fix) {
      if (ss.fix.i < ss.fix.list.length - 1) { ss.fix.i++; buildCur(ss.fix.list[ss.fix.i]); go('quiz'); } else finishLesson();
      return;
    }
    if (ss.remind && ss.info.meta.focus.indexOf(cur.q.skill) >= 0) ss.remind = false;
    if (ss.qIdx < ss.d.questions.length - 1) { ss.qIdx++; buildCur(); go('quiz'); saveProgress(); return; }
    if (ss.test) { finishCheckPassage(); return; }
    // Fix-it round: the questions that were not right on the first try come back once before the rewards.
    if (ss.missed.length) { ss.fix = { list: ss.missed.slice(), i: 0, fixed: 0 }; buildCur(ss.fix.list[0]); go('quiz'); RQ.toast('🔧 Fix-it round! Try ' + (ss.missed.length === 1 ? 'this one' : 'these') + ' again.'); return; }
    finishLesson();
  };
  RQ.actions.checkStart = function () { RQ.sfx.tap(); loadCheckPassage(); go('read'); };
  RQ.actions.retry = function () {       // after a failed lesson: Power-Up card first, then a real reread
    var id = ss.id; RQ.sfx.tap();
    RQ.startSession(id, { fresh: true, step: 'read' });
    if (ss.info.strategy) { ss.afterFail = true; ss.step = 'strategy'; }
    buildStop(); RQ.show('session');
  };
  RQ.actions.feel = function (el) {
    RQ.store.setFeel(el.getAttribute('data-f')); RQ.sfx.pop();
    RQ.$('#feel').innerHTML = '<div class="feel-h">Thanks for telling ' + esc(RQ.S.profile.petName) + '!</div>';
  };
  RQ.actions.talked = function (el) {
    if (RQ.store.markTalked(ss.id)) { RQ.sfx.coin(); el.outerHTML = '<p class="note-kid">✅ You talked about it! +1 💎</p>'; }
  };
  RQ.actions.journalSave = function () {
    var t = RQ.$('#journal-text');
    if (!t || t.value.trim().split(/\s+/).length < 3) { RQ.toast('Write a whole sentence first.'); return; }
    var got = RQ.store.addJournal(ss.id, t.value);
    if (got) { RQ.sfx.coin(); RQ.$('#journal').innerHTML = '<div class="talk-h">✏️ Quest Journal</div><p class="note-kid">Saved! A grown-up can read it.' + (got > 0 ? ' +' + got + ' 💎' : '') + '</p>'; }
  };
  RQ.actions.resDone = function () {
    RQ.sfx.tap();
    var done = RQ.store.clearedCount() === RQ.order.length && RQ.order.length === 60;
    if (ss.test ? ss.test.n === 4 : (ss.reward && ss.reward.finishedAll && !RQ.store.checkDue())) { RQ.show('trophy'); return; }
    void done;
    RQ.show('map');
  };
  RQ.actions.quit = function () {
    if (ss && (ss.step === 'results' || ss.step === 'checkdone')) { RQ.actions.resDone(); return; }
    if (!ss || ss.step === 'checkintro') { RQ.show('map'); return; }
    var saved = !ss.test && (ss.step === 'read' || ss.step === 'quiz');
    RQ.modal('<div class="m-emoji">🤔</div><h2>' + (ss.test ? 'Stop the Reading Check?' : 'Take a break?') + '</h2><p>' + (ss.test ? 'You will start it again from the beginning next time.' : saved ? 'Your place is saved. You can pick up right here later.' : 'You can start this lesson again any time.') + '</p><button class="btn" data-a="closeModal">Keep going</button><button class="btn alt" data-a="quitYes">Stop for now</button>');
  };
  RQ.actions.quitYes = function () { RQ.closeModal(); if (ss && !ss.test && !ss.fix && (ss.step === 'read' || ss.step === 'quiz')) saveProgress(); RQ.show('map'); };

  RQ.screens.trophy = {
    render: function () {
      var S = RQ.S, st = RQ.store, c1 = S.checks[1], c4 = S.checks[4], grow = '';
      if (c1 && c4) grow = '<p class="res-msg">On your first Reading Check you got <b>' + c1.right + '</b> right. Now you got <b>' + c4.right + '</b>. Look how far you have come!</p>';
      return '<div class="results trophy"><div class="m-emoji huge">🏆</div><h1>Master Reader!</h1><p class="res-msg"><b>' + esc(S.profile.name) + '</b>, you finished all 12 weeks of Reading Quest. ' +
        esc(S.profile.petName) + ' is so proud of you!</p><div class="res-pet">' + RQ.petSVG({ mood: 'wow' }) + '</div>' + grow +
        '<p class="res-msg">⭐ ' + st.totalStars() + ' stars · 📒 ' + st.passedCount() + ' stickers · 📅 ' + st.readingDays() + ' reading days</p><button class="btn big" data-a="go" data-to="map">Back to the map</button></div>';
    },
    enter: function () { RQ.sfx.fanfare(); RQ.confetti(200); }
  };
})();
