/* Word Pop mini-game and the Grown-ups area (progress, growth, fluency check, plan, settings). */
(function () {
  'use strict';
  var RQ = window.RQ, esc = RQ.esc, C = window.RQCurriculum, SH = window.RQShared;

  // ================= WORD POP =================
  // The game is also real review: words that are due come first, and the first answer to each word is graded.
  var g = null, gTimer = null;
  var GAME_SECS = 45, GEM_CAP = 3;
  function newRound() {
    var S = RQ.S, known = RQ.store.knownWords();
    if (!g.queue.length) g.queue = RQ.store.dueVocab(40).concat(RQ.shuffle(known)).filter(function (w, i, a) { return a.indexOf(w) === i; });
    var target = g.queue.shift();
    if (target === g.last && g.queue.length) { g.queue.push(target); target = g.queue.shift(); }
    g.last = target;
    var def = S.vocab[target].def, seen = {};
    var others = RQ.shuffle(known).filter(function (w) {            // never two balloons with the same meaning
      var d = S.vocab[w].def; if (w === target || d === def || seen[d]) return false; seen[d] = 1; return true;
    }).slice(0, 3);
    g.target = target; g.opts = RQ.shuffle(others.concat([target])); g.lock = false; g.missed = false;
  }
  function gameHTML() {
    var S = RQ.S;
    if (!g || g.state === 'intro') {
      var ok = RQ.store.knownWords().length >= 4;
      return RQ.topbarHTML() + '<div class="page game-intro"><div class="m-emoji huge">🎈</div><h1 class="page-title">Word Pop</h1>' +
        (ok ? '<p class="res-msg">Read the meaning. Pop the balloon with the right word. How many can you pop in ' + GAME_SECS + ' seconds?</p>' +
          (S.gameBest ? '<p class="pill">Best: ' + S.gameBest + '</p>' : '') + '<button class="btn big" data-a="gameStart">Play!</button>'
          : '<p class="res-msg">Word Pop opens after you finish 2 lessons. Your new words will float here!</p><button class="btn big" data-a="go" data-to="map">Back to the quest</button>') +
        '</div>' + RQ.navHTML('game');
    }
    if (g.state === 'play') {
      var v = S.vocab[g.target];
      return '<div class="game"><div class="game-top"><button class="x-btn" data-a="gameQuit" aria-label="Stop game">✕</button><div class="s-prog"><div class="s-prog-fill time" id="g-time" style="width:' + Math.round(100 * g.left / GAME_SECS) + '%"></div></div><span class="g-score" aria-label="' + g.score + ' popped">🎈 ' + g.score + '</span></div>' +
        '<div class="clue card"><div class="kicker">Which word means…</div><p>' + esc(v.def) + '</p></div>' +
        '<div class="bubbles">' + g.opts.map(function (w, i) { return '<button class="bubble b' + i + '" data-a="bubble" data-w="' + RQ.attr(w) + '"><span>' + esc(w) + '</span></button>'; }).join('') + '</div></div>';
    }
    return '<div class="results"><div class="m-emoji huge">🎈</div><h1>' + (g.score >= 10 ? 'Word wizard!' : g.score >= 5 ? 'Nice popping!' : 'Good practice!') + '</h1>' +
      '<p class="res-score">You popped <b>' + g.score + '</b> word' + (g.score === 1 ? '' : 's') + '!</p>' + (g.newBest ? '<p class="pill">New best score!</p>' : '') +
      (g.gems ? '<div class="loot"><div class="loot-item"><span class="loot-emoji">💎</span><span><b>+' + g.gems + '</b> gems</span></div></div>' : '') +
      '<button class="btn big" data-a="gameStart">Play again</button><button class="btn alt" data-a="go" data-to="map">Back to the quest</button></div>';
  }
  RQ.screens.game = {
    render: function () { if (!g || g.state !== 'play') g = { state: 'intro' }; return gameHTML(); },
    leave: function () { clearInterval(gTimer); g = null; }
  };
  function gameEnd() {
    clearInterval(gTimer);
    var S = RQ.S; RQ.store.rollDaily();
    g.state = 'end';
    g.gems = Math.max(0, Math.min(Math.floor(g.score / 4), GEM_CAP - (S.daily.gameGems || 0)));
    S.daily.gameGems = (S.daily.gameGems || 0) + g.gems; S.gems += g.gems;
    g.newBest = g.score > (S.gameBest || 0); if (g.newBest) S.gameBest = g.score;
    RQ.store.save(); RQ.navAt = Date.now(); RQ.$('#app').innerHTML = gameHTML();
    if (g.score >= 5) { RQ.sfx.fanfare(); RQ.confetti(60); }
  }
  RQ.actions.gameStart = function () {
    if (RQ.store.knownWords().length < 4) { RQ.show('game'); return; }
    g = { state: 'play', score: 0, left: GAME_SECS, queue: [], graded: {} }; newRound();
    RQ.$('#app').innerHTML = gameHTML(); RQ.sfx.tap();
    clearInterval(gTimer);
    gTimer = setInterval(function () {
      if (document.hidden) return;                        // the clock waits while the app is in the background
      g.left--; var t = RQ.$('#g-time'); if (t) t.style.width = Math.round(100 * g.left / GAME_SECS) + '%';
      if (g.left <= 0) gameEnd();
    }, 1000);
  };
  RQ.actions.gameQuit = function () { clearInterval(gTimer); g = { state: 'intro' }; RQ.show('map'); };
  RQ.actions.bubble = function (el) {
    if (!g || g.state !== 'play' || g.lock) return;
    var right = el.getAttribute('data-w') === g.target;
    if (!g.graded[g.target]) {                 // grade the first response to each word, once per game
      g.graded[g.target] = 1;
      var isDue = RQ.S.vocab[g.target].due <= RQ.store.today();
      if (!right || isDue) RQ.store.gradeVocab(g.target, right);   // a right answer only moves a word on when it was due
    }
    if (right) {
      g.lock = true; g.score++; RQ.sfx.pop(); el.classList.add('popped');
      setTimeout(function () { if (g && g.state === 'play') { newRound(); RQ.$('#app').innerHTML = gameHTML(); } }, 320);
    } else { g.missed = true; RQ.sfx.wrong(); el.classList.add('shake', 'dim'); el.disabled = true; g.left = Math.max(1, g.left - 2); }
  };

  // ================= GROWN-UPS GATE =================
  var gate = { a: 0, b: 0, typed: '' };
  RQ.screens.gate = {
    render: function () {
      gate.a = 6 + Math.floor(Math.random() * 4); gate.b = 6 + Math.floor(Math.random() * 4); gate.typed = '';
      var keys = ''; for (var i = 1; i <= 9; i++) keys += '<button class="key" data-a="gateKey" data-k="' + i + '">' + i + '</button>';
      keys += '<button class="key" data-a="gateKey" data-k="del" aria-label="Delete">⌫</button><button class="key" data-a="gateKey" data-k="0">0</button><button class="key ok" data-a="gateKey" data-k="ok">OK</button>';
      return '<div class="page gate"><h1 class="page-title">Grown-ups only</h1><p class="res-msg">To open the parent area, answer:</p>' +
        '<div class="gate-q">' + gate.a + ' × ' + gate.b + ' = <span id="gate-val" aria-live="polite">?</span></div><div class="keys">' + keys + '</div></div>' + RQ.navHTML('gate');
    }
  };
  RQ.actions.gateKey = function (el) {
    var k = el.getAttribute('data-k');
    if (k === 'del') gate.typed = gate.typed.slice(0, -1);
    else if (k === 'ok') {
      if (+gate.typed === gate.a * gate.b) { RQ.show('parent'); return; }
      RQ.sfx.wrong(); RQ.toast('Not quite. Ask a grown-up!'); RQ.show('gate'); return;
    } else if (gate.typed.length < 3) gate.typed += k;
    RQ.$('#gate-val').textContent = gate.typed || '?';
  };

  // ================= PARENT AREA =================
  var ptab = 'progress';
  function pct(x) { return Math.round(x * 100) + '%'; }
  function dstr(t) { var d = new Date(t); return (d.getMonth() + 1) + '/' + d.getDate(); }
  function seg(key, opts, val) {
    return '<div class="seg">' + opts.map(function (o) {
      return '<button class="seg-btn' + (String(o[0]) === String(val) ? ' on' : '') + '" data-a="set" data-k="' + key + '" data-v="' + o[0] + '" aria-pressed="' + (String(o[0]) === String(val)) + '">' + o[1] + '</button>';
    }).join('') + '</div>';
  }
  var LEVEL_TXT = { 0: 'below grade 2 text', 2: 'grade 2 text', 3: 'grade 3 text', 5: 'grade 4–5 text' };

  function alertsHTML() {
    var S = RQ.S, st = RQ.store, out = [];
    var firsts = S.log.filter(function (l) { return l.first && !l.check; });
    if (st.struggling()) out.push('<b>The last three lessons were hard</b> (under half right on the first try). The app has slowed to one new lesson a day and is offering easier “comeback” lessons first. Sit alongside for a few days: have your child read the passage aloud to you, and ask “How do you know?” after each answer. If decoding the words is the struggle, try the one-minute read in the Growth tab.');
    var last6 = firsts.slice(-6);
    if (last6.length >= 4 && last6.filter(function (l) { return l.listen; }).length >= last6.length * 0.6 && S.settings.listenMode !== 'always')
      out.push('<b>Listen is being used on most passages.</b> That is fine as support, but the goal is reading the text alone. Encourage “read first, then listen to check.”');
    var rushed = last6.reduce(function (a, l) { return a + (l.rushed || 0); }, 0);
    if (rushed >= 4) out.push('<b>' + rushed + ' answers in the last few lessons were faster than the question could be read.</b> Remind your child that looking back in the text is what earns stars, not speed.');
    var feelGap = last6.filter(function (l) { return l.feel === 'easy' && (l.fr === undefined ? l.score : l.fr) < 0.6; }).length;
    if (feelGap >= 2) out.push('<b>“Easy” but low scores.</b> Your child rated lessons easy that went poorly. Talk through one together; they may not be noticing when the text stops making sense.');
    if (!st.storageOK()) out.push('<b>Progress could not be saved to this device.</b> Free up storage space, then reopen the app.');
    return out.map(function (x) { return '<div class="note warn">' + x + '</div>'; }).join('');
  }
  function lastLessonHTML() {
    var S = RQ.S, st = RQ.store, l = null;
    for (var i = S.log.length - 1; i >= 0; i--) if (!S.log[i].check && st.get(S.log[i].sid)) { l = S.log[i]; break; }
    if (!l) return '';
    var info = st.get(l.sid), d = info.data;
    var h = '<h2 class="sec">Talk about the last lesson</h2><div class="note"><b>“' + esc(d.title) + '”</b> (week ' + info.week + ', day ' + info.day + '). ' + esc(d.talk) +
      ' Good follow-ups: “How do you know?”, “Show me the sentence.”, “What was the most important part?”' +
      '<details><summary>Read the passage</summary><div class="p-passage">' + d.passage.map(function (p) { return SH.isHeading(p) ? '<h4>' + esc(p.slice(3)) + '</h4>' : '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>'; }).join('') + '</div></details>' +
      '<details><summary>Questions and answers</summary><ol class="plain">' + d.questions.map(function (q) {
        var a = q.type === 'mc' ? q.options[0] : q.type === 'multi' ? q.options.slice(0, q.correct).join(' / ') : q.type === 'order' ? q.items.join(' → ') : q.type === 'sort' ? q.items.map(function (it) { return it.t + ' (' + q.cats[it.c] + ')'; }).join('; ') : q.answer;
        return '<li>' + esc(q.q) + '<br><b>' + esc(a) + '</b></li>';
      }).join('') + '</ol></details></div>';
    return h;
  }
  function progressTab() {
    var S = RQ.S, st = RQ.store, cleared = st.clearedCount(), passed = st.passedCount(), total = RQ.order.length;
    var next = st.nextId(), info = next ? st.get(next) : st.get(RQ.order[RQ.order.length - 1]);
    var firsts = S.log.filter(function (l) { return l.first && !l.check; });
    var seen = 0, right = 0; for (var k in S.skills) { seen += S.skills[k].seen; right += S.skills[k].correct; }
    var solo = firsts.filter(function (l) { return !l.listen && l.fr !== undefined; }).slice(-10);
    var soloAvg = solo.length ? solo.reduce(function (a, l) { return a + l.fr; }, 0) / solo.length : null;
    var mode = st.supportMode(), modeTxt = { helper: 'Extra help', standard: 'Standard', independent: 'Independent' }[mode];
    var lc = st.latestCheck(), lvl = lc ? st.checkLevel(S.checks[lc]) : null;
    var h = alertsHTML() + '<div class="tiles">' +
      '<div class="tile"><b>' + passed + ' / ' + total + '</b><span>lessons passed' + (cleared > passed ? ' · ' + (cleared - passed) + ' moved on without passing' : '') + '</span></div>' +
      '<div class="tile"><b>Week ' + (info ? info.week : 1) + '</b><span>working in ' + esc(info ? info.meta.grade : 'Grade 2') + ' text</span></div>' +
      '<div class="tile"><b>' + (seen ? pct(right / seen) : '—') + '</b><span>right on first try (all lessons)</span></div>' +
      '<div class="tile"><b>' + (soloAvg === null ? '—' : pct(soloAvg)) + '</b><span>first try, read without Listen (last ' + (solo.length || 10) + ')</span></div>' +
      '<div class="tile"><b>' + st.weekDays() + ' / 5</b><span>reading days this week · ' + st.weeksHit() + ' full week' + (st.weeksHit() === 1 ? '' : 's') + '</span></div>' +
      '<div class="tile"><b>' + Math.round(S.totalMs / 60000) + ' min</b><span>active time in lessons</span></div></div>';
    h += '<div class="note"><b>Reading level, measured without help: </b>' + (lvl === null ? 'not measured yet. The first Reading Check sets the starting point (see the Growth tab).' : 'reads <b>' + LEVEL_TXT[lvl] + '</b> independently (Reading Check ' + lc + ', ' + dstr(S.checks[lc].t) + '). Lesson scores above include hints and second tries, so this is the number to watch.') + '</div>';
    var daysIn = S.profile ? Math.round((Date.now() - S.profile.created) / 86400000) + 1 : 0;
    if (cleared > 0 && daysIn >= 4) {
      var perWeek = cleared / daysIn * 7, left = total - cleared, wks = Math.max(1, Math.ceil(left / Math.max(perWeek, 0.5)));
      h += '<div class="note"><b>Pace:</b> about ' + perWeek.toFixed(1) + ' lessons a week. ' + (left ? 'At this pace the plan finishes in about ' + wks + ' more week' + (wks === 1 ? '' : 's') + '. (Goal: 5 a week.)' : 'The plan is complete!') + '</div>';
    }
    h += '<div class="note"><b>Support level: ' + modeTxt + '</b>' + (S.settings.support === 'auto' ? ' (set automatically from first-try results in the last 3 lessons)' : ' (set by you)') + '. ' +
      { helper: 'Hints remove a wrong answer and point to the right paragraph; Listen is always available.', standard: 'After a miss, a hint points to the right paragraph.', independent: 'Hints no longer point to the paragraph, and there are fewer stop-and-think checks.' }[mode] + '</div>';

    h += '<h2 class="sec">Skills</h2>';
    var any = false;
    Object.keys(C.SKILLS).forEach(function (id) {
      var sk = S.skills[id]; if (!sk || !sk.seen) return; any = true;
      var m = st.mastery(id), few = sk.seen < 6;
      var label = few ? 'Just started' : m >= 0.85 ? 'Strong' : m >= 0.65 ? 'Growing' : 'Needs practice', cls = few ? 'n' : m >= 0.85 ? 'g' : m >= 0.65 ? 'y' : 'r';
      h += '<div class="skill-row"><div class="skill-name">' + C.SKILLS[id].icon + ' ' + C.SKILLS[id].name + '</div><div class="bar"><div class="bar-fill ' + cls + '" style="width:' + Math.round(m * 100) + '%"></div></div>' +
        '<div class="skill-val ' + cls + '">' + label + ' · ' + sk.correct + '/' + sk.seen + ' right on first try' + (few ? '' : ' · last ' + sk.recent.length + ': ' + pct(m)) + '</div></div>';
      if (!few && m < 0.65) {
        var sugg = RQ.order.filter(function (sid) { return st.cleared(sid) && st.get(sid).data.questions.some(function (q) { return q.skill === id; }); }).slice(-2)
          .map(function (sid) { return '“' + st.get(sid).data.title + '”'; });
        h += '<p class="small tipline">Tip: ' + esc(C.SKILLS[id].tip) + (sugg.length ? ' Replay ' + esc(sugg.join(' or ')) + ' together.' : '') + '</p>';
      }
    });
    if (!any) h += '<p class="small">Skill results appear after the first lesson. Only first attempts count, so replays cannot inflate them.</p>';

    var weak = RQ.order.filter(function (sid) { var r = st.rec(sid); return r && (!r.passed || r.stars <= 1); });
    if (weak.length) {
      h += '<h2 class="sec">Worth a second look</h2><ul class="plain">' + weak.slice(-6).map(function (sid) {
        var i = st.get(sid), r = st.rec(sid);
        return '<li>Week ' + i.week + ', day ' + i.day + ': <b>' + esc(i.data.title) + '</b> — best ' + pct(r.best) + (r.passed ? '' : ' (not passed yet)') + '</li>';
      }).join('') + '</ul>';
    }
    h += lastLessonHTML();
    if (S.log.length) {
      h += '<h2 class="sec">Recent lessons</h2><table class="tbl"><tr><th>Date</th><th>Lesson</th><th>First try</th><th>Time</th></tr>' + S.log.slice(-10).reverse().map(function (l) {
        var i = st.get(l.sid), feel = { easy: '😊', ok: '🙂', hard: '😅' }[l.feel] || '';
        return '<tr><td>' + dstr(l.t) + '</td><td>' + esc(l.check ? 'Reading Check' : i ? i.data.title : l.sid) + (l.first ? '' : ' <span class="small">(replay)</span>') + (l.listen ? ' <span class="small">🔊</span>' : '') + ' ' + feel + '</td><td>' + pct(l.fr === undefined ? l.score : l.fr) + '</td><td>' + Math.max(1, Math.round(l.ms / 60000)) + ' min</td></tr>';
      }).join('') + '</table><p class="small">🔊 = Listen was used. Faces show how your child said the lesson felt.</p>';
    }
    if (S.journal.length) {
      h += '<h2 class="sec">Quest Journal</h2><ul class="plain">' + S.journal.slice(-6).reverse().map(function (j) {
        var i = st.get(j.sid); return '<li><span class="small">' + dstr(j.t) + (i ? ' · ' + esc(i.data.title) : '') + '</span><br>' + esc(j.text) + '</li>';
      }).join('') + '</ul>';
    }
    return h;
  }

  // ---------- growth: Reading Checks + fluency ----------
  function season() { var m = new Date().getMonth(); return m >= 7 && m <= 10 ? 0 : (m === 11 || m <= 1) ? 1 : 2; }
  function fluencyLevel() { var n = RQ.store.nextId(), w = n ? RQ.store.get(n).week : 12; return w <= 3 ? 2 : w <= 6 ? 3 : w <= 9 ? 4 : 5; }
  function chartHTML() {
    var S = RQ.S, forms = [1, 2, 3, 4].filter(function (n) { return S.checks[n]; });
    if (!forms.length) return '';
    var W = 300, H = 120, bw = 44, gap = (W - 4 * bw) / 5, h = '<svg class="chart" viewBox="0 0 ' + W + ' ' + (H + 34) + '" role="img" aria-label="Reading Check scores"><line x1="0" y1="' + H + '" x2="' + W + '" y2="' + H + '" stroke="#c5c9da"/>';
    [1, 2, 3, 4].forEach(function (n, i) {
      var x = gap + i * (bw + gap), c = S.checks[n], lbl = ['Start', 'Week 4', 'Week 8', 'Week 12'][i];
      if (c) { var bh = Math.max(3, Math.round((c.right / 15) * (H - 16))); h += '<rect x="' + x + '" y="' + (H - bh) + '" width="' + bw + '" height="' + bh + '" rx="5" fill="#5b5bf0"/><text x="' + (x + bw / 2) + '" y="' + (H - bh - 4) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#2b2d42">' + c.right + '/15</text>'; }
      else h += '<rect x="' + x + '" y="' + (H - 3) + '" width="' + bw + '" height="3" fill="#dfe3f1"/>';
      h += '<text x="' + (x + bw / 2) + '" y="' + (H + 16) + '" text-anchor="middle" font-size="11" fill="#5c6078">' + lbl + '</text>';
    });
    return h + '</svg>';
  }
  function growthTab() {
    var S = RQ.S, st = RQ.store, due = st.checkDue();
    var h = '<div class="note"><b>Reading Checks</b> are the honest measure of growth: three unseen texts (grade 2, grade 3 and grade 4–5 level) with 5 questions each, taken with no hints, no second tries and no Listen. One at the start, then after weeks 4, 8 and 12. Every check has the same levels and question types, so the scores can be compared. A check stops early if a text is clearly too hard.</div>';
    h += chartHTML();
    var rows = [1, 2, 3, 4].map(function (n) {
      var c = S.checks[n], when = n === 1 ? 'Start' : 'After week ' + C.CHECKS.after[n];
      if (!c) return '<tr><td>' + when + '</td><td colspan="3" class="small">' + (due === n ? 'Ready now: it is the next thing on your child\'s map.' : 'Not yet') + '</td></tr>';
      return '<tr><td>' + when + '<br><span class="small">' + dstr(c.t) + '</span></td><td>' + c.levels.map(function (l) { return (l.level === 5 ? '4–5' : l.level) + ': ' + (l.asked === false ? '—' : l.right + '/' + l.total); }).join('<br>') + '</td><td><b>' + c.right + '/15</b></td><td>' + LEVEL_TXT[st.checkLevel(c)] + '</td></tr>';
    }).join('');
    h += '<table class="tbl"><tr><th>Check</th><th>By level</th><th>Total</th><th>Reads independently</th></tr>' + rows + '</table>';
    var c1 = S.checks[1], lc = st.latestCheck();
    if (c1 && lc > 1) { var dlt = S.checks[lc].right - c1.right; h += '<div class="note"><b>Since the start:</b> ' + (dlt > 0 ? '+' + dlt + ' questions right out of 15.' : dlt === 0 ? 'the same score. Look at which level moved, and keep up the daily reading.' : dlt + ' out of 15. One check can swing a few points either way; look at the trend over two checks.') + '</div>'; }
    if (!window.RQ_CHECKS) h += '<p class="small">Reading Check content is not installed in this build.</p>';
    h += '<p class="small">“Reads independently” means 4 of 5 right at that level and at least 3 of 5 on the levels below. With only 5 questions per level this is a rough guide, not a test score.</p>';

    // fluency
    h += '<h2 class="sec">One-minute read (fluency)</h2><div class="note">Comprehension depends on reading the words smoothly. Every week or two, have your child read a passage aloud to you for one minute; you tap the words they miss. The app works out words correct per minute (WCPM).</div>';
    if (S.fluency.length) {
      h += '<table class="tbl"><tr><th>Date</th><th>Passage</th><th>WCPM</th><th>Accuracy</th></tr>' + S.fluency.slice(-6).reverse().map(function (f) {
        return '<tr><td>' + dstr(f.t) + '</td><td>Grade ' + f.level + '</td><td><b>' + f.wcpm + '</b></td><td>' + f.acc + '%</td></tr>';
      }).join('') + '</table>';
    }
    if (window.RQ_FLUENCY) {
      var lv = fluencyLevel();
      h += '<div class="set-row"><label>Start a one-minute read</label><div class="seg">' + [2, 3, 4, 5].map(function (l) {
        return '<button class="seg-btn' + (l === lv ? ' on' : '') + '" data-a="fluStart" data-l="' + l + '">Grade ' + l + (l === lv ? ' (suggested)' : '') + '</button>';
      }).join('') + '</div><p class="small">Typical mid-year scores (50th percentile, Hasbrouck &amp; Tindal 2017): grade 2: 84 · grade 3: 97 · grade 4: 120 · grade 5: 133. Under about 90% accuracy means the text is too hard to read alone.</p></div>';
    }
    return h;
  }

  var flu = null, fluTimer = null;
  function fluHTML() {
    var p = flu.p, h = '<div class="page parent"><div class="par-head"><h1 class="page-title">One-minute read</h1><button class="tool" data-a="fluQuit">Cancel</button></div>';
    if (flu.state === 'ready') h += '<div class="note"><b>Grown-up holds the device' + '</b> where both can see it. When your child starts reading aloud from the first word, tap <b>Start</b>. Tap any word they read wrong or skip (tap again to undo). Do not correct them; if they are stuck for 3 seconds, say the word and mark it. After one minute the app will ask for the last word they reached.</div>';
    if (flu.state === 'run') h += '<div class="flu-bar"><b id="flu-left">' + flu.left + '</b> seconds left · tap the words read wrong <button class="tool" data-a="fluEarly">Finished the whole passage</button></div>';
    if (flu.state === 'mark') h += '<div class="note warn"><b>Time!</b> Now tap the <b>last word</b> your child read.</div>';
    if (flu.state === 'ready') h += '<button class="btn big" data-a="fluGo">Start the minute</button>';
    h += '<div class="flu-text' + (flu.state === 'ready' ? ' dim' : '') + '"><h3>' + esc(p.title) + '</h3>';
    var wi = 0;
    p.passage.forEach(function (para) {
      h += '<p>' + para.split(/\s+/).filter(Boolean).map(function (tok) {
        var i = wi++; return '<span class="fw' + (flu.err[i] ? ' err' : '') + (flu.last === i ? ' last' : '') + '" data-a="fluWord" data-i="' + i + '">' + esc(tok) + '</span>';
      }).join(' ') + '</p>';
    });
    h += '</div>';
    if (flu.state === 'done') {
      var r = flu.res, norm = C.FLUENCY_NORMS[p.level][season()], s = ['fall', 'winter', 'spring'][season()];
      h += '<div class="note"><b>' + r.wcpm + ' words correct per minute</b>, ' + r.acc + '% accuracy on a grade ' + p.level + ' passage. A typical grade ' + p.level + ' reader in ' + s + ' reads about ' + norm + '. ' +
        (r.acc < 90 ? 'Accuracy under 90% means this level is too hard to read alone right now: use Listen freely, keep to one lesson a day, and read aloud together daily.' : r.wcpm < norm * 0.75 ? 'The words are right but slow. Rereading a favourite passage aloud a few times a week builds speed.' : 'That is a solid, smooth read for this level.') + '</div><button class="btn big" data-a="ptabGo" data-t="growth">Done</button>';
    }
    return h + '</div>';
  }
  RQ.screens.fluency = { render: fluHTML, leave: function () { clearInterval(fluTimer); } };
  RQ.actions.fluStart = function (el) {
    var lv = +el.getAttribute('data-l'), list = window.RQ_FLUENCY.filter(function (p) { return p.level === lv; });
    var done = RQ.S.fluency.filter(function (f) { return f.level === lv; }).length;
    flu = { p: list[done % list.length], state: 'ready', err: {}, last: -1, left: 60, used: 60 };
    RQ.show('fluency');
  };
  RQ.actions.fluGo = function () {
    flu.state = 'run'; flu.t0 = Date.now(); RQ.navAt = Date.now(); RQ.$('#app').innerHTML = fluHTML(); window.scrollTo(0, 0);
    fluTimer = setInterval(function () {
      flu.left = Math.max(0, 60 - Math.round((Date.now() - flu.t0) / 1000));
      var el = RQ.$('#flu-left'); if (el) el.textContent = flu.left;
      if (flu.left <= 0) { clearInterval(fluTimer); flu.state = 'mark'; RQ.sfx.star(2); RQ.$('#app').innerHTML = fluHTML(); window.scrollTo(0, 0); }
    }, 250);
  };
  function fluFinish() {
    var read = flu.last + 1, errs = 0; for (var i in flu.err) if (flu.err[i] && +i <= flu.last) errs++;
    var correct = Math.max(0, read - errs);
    flu.res = { wcpm: Math.round(correct * 60 / flu.used), acc: read ? Math.round(100 * correct / read) : 0 };
    RQ.store.addFluency({ id: flu.p.id, level: flu.p.level, wcpm: flu.res.wcpm, acc: flu.res.acc });
    flu.state = 'done'; RQ.$('#app').innerHTML = fluHTML(); window.scrollTo(0, document.body.scrollHeight);
  }
  RQ.actions.fluEarly = function () {
    clearInterval(fluTimer); flu.used = Math.max(5, Math.round((Date.now() - flu.t0) / 1000));
    flu.last = RQ.$$('.fw').length - 1; fluFinish();
  };
  RQ.actions.fluWord = function (el) {
    var i = +el.getAttribute('data-i');
    if (flu.state === 'run') { flu.err[i] = !flu.err[i]; el.classList.toggle('err', !!flu.err[i]); }
    else if (flu.state === 'mark') { flu.last = i; fluFinish(); }
  };
  RQ.actions.fluQuit = function () { clearInterval(fluTimer); ptab = 'growth'; RQ.show('parent'); };
  RQ.actions.ptabGo = function (el) { ptab = el.getAttribute('data-t'); RQ.show('parent'); };

  function planTab() {
    var st = RQ.store;
    var h = '<div class="note">Five lessons a week, about 15 minutes each. Each week teaches one reading skill and ends with a Guardian Challenge that also reviews earlier skills. Texts get longer and harder every week, from grade 2 to grade 5 and beyond. Reading Checks at the start and after weeks 4, 8 and 12 measure growth without help.</div><table class="tbl plan"><tr><th>Wk</th><th>Land &amp; skill</th><th>Text level</th><th>Passed</th></tr>';
    for (var n = 1; n <= 12; n++) {
      var m = C.WEEKS[n], ids = st.weekIds(n);
      var done = ids.filter(function (id) { return st.passed(id); }).length;
      h += '<tr><td>' + n + '</td><td><b>' + m.emoji + ' ' + esc(m.land) + '</b><br><span class="small">' + m.focus.slice(0, 3).map(function (f) { return C.SKILLS[f].name; }).join(', ') + (m.focus.length > 3 ? ', mixed review' : '') + '</span></td><td>' + esc(m.grade) + '<br><span class="small">' + m.words[0] + '–' + m.words[1] + ' words</span></td><td>' + (ids.length ? done + '/5' : '—') + '</td></tr>';
    }
    return h + '</table><div class="note"><b>How a child moves on:</b> a lesson is passed with 60% of the points <i>and</i> at least half the questions right on the first try. Otherwise the child sees the Power-Up card again, rereads and retries. After two tries the next lesson opens anyway, so nobody gets stuck, and the lesson is listed under “Worth a second look.” If three lessons in a row go badly, the app slows to one new lesson a day and offers easier comeback lessons first.</div>' +
      '<div class="note"><b>Inside every lesson:</b> a weekly strategy with guided practice · review of earlier words and missed questions · new words · reading in parts with stop-and-think checks · questions with look-back, hints and explanations · a fix-it round for anything missed · a retell prompt for you.</div>';
  }
  function settingsTab() {
    var S = RQ.S, s = S.settings;
    var h = '<div class="set-row"><label for="set-name">Child\'s name</label><input class="inp sm" id="set-name" maxlength="14" value="' + RQ.attr(S.profile.name) + '"></div>' +
      '<div class="set-row"><label>New lessons per day</label>' + seg('dailyLimit', [[1, '1'], [2, '2'], [3, '3'], [0, 'No limit']], s.dailyLimit) + '<p class="small">1 a day finishes in 12 weeks; 2 a day can finish in 8 or fewer. Replays and Word Pop are always open.</p></div>' +
      '<div class="set-row"><label>Support level</label>' + seg('support', [['auto', 'Auto'], ['helper', 'Extra help'], ['standard', 'Standard'], ['independent', 'Independent']], s.support) + '</div>' +
      '<div class="set-row"><label>Read-aloud (Listen buttons)</label>' + seg('readAloud', [[true, 'On'], [false, 'Off']], s.readAloud) + '</div>' +
      '<div class="set-row"><label>When can Listen read the passage?</label>' + seg('listenMode', [['auto', 'Read first, then Listen'], ['always', 'Any time']], s.listenMode) + '<p class="small">“Read first” applies from week 3: Listen wakes up once your child has had time to read the passage alone. Children on Extra help can always listen.</p></div>' +
      '<div class="set-row"><label>Read-aloud speed</label>' + seg('speechRate', [[0.7, 'Slow'], [0.85, 'Normal'], [1, 'Fast']], s.speechRate) + '</div>' +
      '<div class="set-row"><label>Text size</label>' + seg('textSize', [[0.9, 'S'], [1, 'M'], [1.15, 'L'], [1.3, 'XL']], s.textSize) + '</div>' +
      '<div class="set-row"><label>Sound effects</label>' + seg('sound', [[true, 'On'], [false, 'Off']], s.sound) + '</div>';
    if (window.Android && window.Android.setFocusLock) {
      var pinned = window.Android.isFocusLocked ? !!window.Android.isFocusLocked() : s.focusLock;
      h += '<div class="set-row"><label>Focus Lock</label>' + seg('focusLock', [[true, 'On'], [false, 'Off']], s.focusLock) + '<p class="small"><b>' + (pinned ? 'The app is pinned now.' : s.focusLock ? 'Not pinned yet: confirm the Android prompt.' : 'Off.') + '</b> Pins this app to the screen so your child cannot switch to other apps. Android asks you to confirm each time the app starts. To leave, hold Back and Overview together (your phone may ask for your PIN).</p></div>';
    }
    if (RQ.isWeb) {
      h += '<div class="set-row"><label>Backup of progress</label><p class="small">On the web version, progress is stored only in this browser. Clearing the browser\'s site data erases it, and it does not follow your child to another device. Save a backup file now and then.</p>' +
        '<button class="btn alt sm" data-a="backupSave">Save a backup file</button><label class="btn alt sm file-btn">Restore from a backup file<input type="file" id="backup-file" accept=".json,application/json" hidden></label></div>';
    }
    h += '<div class="set-row"><label>Reading Checks</label>' + seg('skipChecks', [[false, 'On'], [true, 'Skip']], s.skipChecks) + '<p class="small">Skipping removes the checks from your child\'s path. You lose the growth measure.</p></div>' +
      '<div class="set-row"><label>Unlock every lesson (for previewing)</label>' + seg('unlockAll', [[false, 'Off'], [true, 'On']], s.unlockAll) + '</div>' +
      '<div class="set-row"><button class="btn danger" data-a="resetAsk">Erase all progress</button></div>' +
      '<p class="small">This app collects nothing and never connects to the internet. Progress is stored only on this device.</p>';
    return h;
  }
  function tipsTab() {
    return '<ul class="tips">' +
      '<li><b>Same time, same place.</b> About 15 minutes a day, 5 days a week, beats one long weekend session. The weekly goal is 5 reading days; weekends off are fine.</li>' +
      '<li><b>Do the “Tell a grown-up” prompt.</b> Retelling out loud for one minute is the single most useful add-on. Ask “How do you know?” and have your child point to the sentence. The Progress tab shows the last passage and its answers so you can follow along.</li>' +
      '<li><b>Praise looking back and effort,</b> not being smart or fast. Strong test-takers reread.</li>' +
      '<li><b>Watch the Growth tab.</b> Reading Checks are taken without help, so they show real change. Lesson scores include hints.</li>' +
      '<li><b>Try the one-minute read</b> every week or two. If accuracy is under 90%, the words themselves are the barrier: read aloud together daily and let the app read passages (Listen: Any time).</li>' +
      '<li><b>Keep reading real books.</b> Twenty minutes of free-choice reading a day builds the stamina, vocabulary and knowledge no app can.</li>' +
      (RQ.isWeb ? '<li><b>Put it on the home screen.</b> In Chrome on Android: menu ⋮ → “Add to Home screen” (or “Install app”). On an iPad or iPhone in Safari: Share → “Add to Home Screen”. It then opens full screen like an app and works without internet. For fewer distractions on Android, turn on “App pinning” in the device settings and pin Reading Quest before handing it over.</li>' : '') +
      '<li><b>About the goal.</b> The texts climb from grade 2 to grade 5+. Children move at different speeds, and a three-grade jump in 12 weeks is not typical. If lessons go badly several times in a row, the app slows down by itself; let it, and replay earlier lessons together.</li></ul>';
  }
  RQ.screens.parent = {
    render: function () {
      var tabs = [['progress', 'Progress'], ['growth', 'Growth'], ['plan', 'Plan'], ['settings', 'Settings'], ['tips', 'Tips']];
      var body = ptab === 'progress' ? progressTab() : ptab === 'growth' ? growthTab() : ptab === 'plan' ? planTab() : ptab === 'settings' ? settingsTab() : tipsTab();
      return '<div class="page parent"><div class="par-head"><h1 class="page-title">' + esc(RQ.S.profile.name) + '\'s reading report</h1><button class="tool" data-a="go" data-to="map">Done</button></div>' +
        '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<button class="tab' + (t[0] === ptab ? ' on' : '') + '" role="tab" aria-selected="' + (t[0] === ptab) + '" data-a="ptab" data-t="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>' +
        '<div class="p-body">' + body + '</div></div>';
    },
    leave: function () { var n = RQ.$('#set-name'); if (n && n.value.trim() && RQ.S.profile) { RQ.S.profile.name = n.value.trim(); RQ.store.save(); } }
  };
  RQ.actions.ptab = function (el) { ptab = el.getAttribute('data-t'); RQ.show('parent'); };
  RQ.actions.set = function (el) {
    var k = el.getAttribute('data-k'), v = el.getAttribute('data-v');
    if (v === 'true') v = true; else if (v === 'false') v = false; else if (v !== '' && !isNaN(+v)) v = +v;
    RQ.S.settings[k] = v; RQ.store.save(); RQ.applySettings();
    if (k === 'focusLock' && window.Android && window.Android.setFocusLock) window.Android.setFocusLock(!!v);
    RQ.show('parent');
  };
  RQ.actions.backupSave = function () {
    try {
      var blob = new Blob([RQ.store.exportState()], { type: 'application/json' }), a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'reading-quest-' + RQ.S.profile.name.replace(/[^A-Za-z0-9]+/g, '-') + '-' + RQ.store.today() + '.json';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
      RQ.toast('Backup file saved to your downloads.');
    } catch (e) { RQ.toast('This browser could not save a file.'); }
  };
  var pendingBackup = null;
  document.addEventListener('change', function (ev) {
    var inp = ev.target; if (!inp || inp.id !== 'backup-file' || !inp.files || !inp.files[0]) return;
    var fr = new FileReader();
    fr.onload = function () {
      var o = null; try { o = JSON.parse(String(fr.result)); } catch (e) { o = null; }
      if (!o || !o.profile || !o.profile.petName || typeof o.sessions !== 'object') { RQ.toast('That is not a Reading Quest backup file.'); return; }
      pendingBackup = String(fr.result);
      var n = Object.keys(o.sessions).length;
      RQ.modal('<div class="m-emoji">📂</div><h2>Restore this backup?</h2><p>It holds the progress of <b>' + esc(o.profile.name) + '</b> (' + n + ' lesson' + (n === 1 ? '' : 's') + ' played). It will replace the progress now on this device.</p><button class="btn" data-a="closeModal">Cancel</button><button class="btn danger" data-a="backupRestore">Replace and restore</button>');
    };
    fr.readAsText(inp.files[0]);
  });
  RQ.actions.backupRestore = function () {
    RQ.closeModal();
    var n = RQ.$('#set-name'); if (n) n.parentNode.removeChild(n);
    if (pendingBackup && RQ.store.importState(pendingBackup)) { pendingBackup = null; RQ.applySettings(); ptab = 'progress'; RQ.show('parent'); RQ.toast('Progress restored.'); }
    else RQ.toast('The backup could not be restored.');
  };
  RQ.actions.resetAsk = function () {
    RQ.modal('<div class="m-emoji">⚠️</div><h2>Erase all progress?</h2><p>Stars, stickers, the pet, and the report will be deleted. This cannot be undone.</p><button class="btn" data-a="closeModal">Keep everything</button><button class="btn danger" data-a="resetYes">Erase</button>');
  };
  RQ.actions.resetYes = function () {
    RQ.closeModal();
    var n = RQ.$('#set-name'); if (n) n.remove();          // so leaving this screen does not write into the erased profile
    RQ.store.reset(); ptab = 'progress'; RQ.applySettings();
    if (window.Android && window.Android.setFocusLock) window.Android.setFocusLock(false);
    RQ.show('welcome');
  };
})();
