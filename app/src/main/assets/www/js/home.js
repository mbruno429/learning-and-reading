/* Welcome flow, the quest map, the pet page and the sticker book. */
(function () {
  'use strict';
  var RQ = window.RQ, esc = RQ.esc, C = window.RQCurriculum;

  RQ.navHTML = function (active) {
    var items = [['map', '🗺️', 'Quest'], ['pet', '🐲', 'Pet'], ['stickers', '📒', 'Stickers'], ['game', '🎈', 'Word Pop'], ['gate', '👪', 'Grown-ups']];
    return '<nav class="nav">' + items.map(function (it) {
      return '<button class="nav-btn' + (it[0] === active ? ' on' : '') + '" data-a="go" data-to="' + it[0] + '"' + (it[0] === active ? ' aria-current="page"' : '') + '><span class="nav-ico" aria-hidden="true">' + it[1] + '</span><span>' + it[2] + '</span></button>';
    }).join('') + '</nav>';
  };
  RQ.actions.go = function (el) { RQ.sfx.tap(); RQ.show(el.getAttribute('data-to')); };

  RQ.topbarHTML = function () {
    var S = RQ.S, st = RQ.store;
    return '<header class="topbar"><button class="pet-chip" data-a="go" data-to="pet" aria-label="My pet ' + RQ.attr(S.profile.petName) + '">' + RQ.petSVG() + '<span>' + esc(S.profile.petName) + '</span></button>' +
      '<div class="stats"><span class="stat" aria-label="' + st.weekDays() + ' of 5 reading days this week">📅 ' + Math.min(st.weekDays(), 7) + '/5</span><span class="stat" aria-label="' + st.totalStars() + ' stars">⭐ ' + st.totalStars() + '</span><span class="stat" aria-label="' + S.gems + ' gems">💎 ' + S.gems + '</span></div></header>';
  };

  // ================= WELCOME =================
  var ob = { step: 0, name: '', petName: '', color: RQ.PET_COLORS[0] };
  var PET_NAMES = ['Ember', 'Pebble', 'Zuzu', 'Comet', 'Mango', 'Pixel'];
  var COLOR_NAMES = ['Orange', 'Blue', 'Green', 'Purple', 'Pink', 'Gold'];
  RQ.screens.welcome = {
    render: function () {
      var h = '<div class="welcome step' + ob.step + '">';
      if (ob.step === 0) {
        h += '<div class="logo-big">📖✨</div><h1 class="title">Reading Quest</h1>' +
          '<p class="sub">A 12-week adventure to become a super reader!</p>' +
          '<div class="egg-row">' + RQ.petSVG({ stage: 0, color: '#ff7a59' }) + '</div>' +
          '<button class="btn big" data-a="obNext">Start my quest!</button>';
      } else if (ob.step === 1) {
        h += '<h1 class="title sm">What is your name?</h1>' +
          '<input id="ob-name" class="inp" maxlength="14" placeholder="Type your name" aria-label="Your name" autocapitalize="words" enterkeyhint="next" value="' + RQ.attr(ob.name) + '" autocomplete="off">' +
          '<button class="btn big" data-a="obNext">Next</button>';
      } else if (ob.step === 2) {
        h += '<h1 class="title sm">Pick your egg!</h1><p class="sub">Something amazing is inside. It hatches after your first lesson.</p>' +
          '<div class="egg-row" id="ob-egg">' + RQ.petSVG({ stage: 0, color: ob.color }) + '</div>' +
          '<div class="swatches">' + RQ.PET_COLORS.map(function (c, i) {
            return '<button class="swatch' + (c === ob.color ? ' on' : '') + '" style="background:' + c + '" data-a="obColor" data-c="' + c + '" aria-label="' + COLOR_NAMES[i] + '" aria-pressed="' + (c === ob.color) + '"></button>';
          }).join('') + '</div>' +
          '<input id="ob-pet" class="inp" maxlength="12" placeholder="Name your pet" aria-label="Pet name" autocapitalize="words" enterkeyhint="done" value="' + RQ.attr(ob.petName) + '" autocomplete="off">' +
          '<div class="chips">' + PET_NAMES.map(function (n) { return '<button class="chip" data-a="obPetName" data-n="' + n + '">' + n + '</button>'; }).join('') + '</div>' +
          '<button class="btn big" data-a="obNext">Next</button>';
      } else {
        h += '<h1 class="title sm">How to play</h1><div class="how">' +
          '<div class="how-row"><span>📖</span><p><b>Read</b> a short story or true text.</p></div>' +
          '<div class="how-row"><span>🔎</span><p><b>Answer</b> the questions. Look back in the text. It is not cheating. It is smart!</p></div>' +
          '<div class="how-row"><span>⭐</span><p><b>Win</b> stars, gems, and stickers. Your pet grows as you read!</p></div>' +
          '<div class="how-row"><span>📅</span><p><b>Read 5 days a week</b> to reach your weekly goal.</p></div></div>' +
          '<button class="btn big" data-a="obDone">Let\'s go!</button>';
      }
      return h + '</div>';
    },
    enter: function () {
      var inp = RQ.$('#ob-name') || RQ.$('#ob-pet');
      if (inp) inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); inp.blur(); RQ.actions.obNext(); } });
    }
  };
  function obGrab() {
    var n = RQ.$('#ob-name'); if (n) ob.name = n.value.trim();
    var p = RQ.$('#ob-pet'); if (p) ob.petName = p.value.trim();
  }
  RQ.actions.obNext = function () { obGrab(); RQ.sfx.tap(); ob.step++; RQ.show('welcome'); };
  RQ.actions.obColor = function (el) { obGrab(); ob.color = el.getAttribute('data-c'); RQ.sfx.pop(); RQ.show('welcome'); };
  RQ.actions.obPetName = function (el) { ob.petName = el.getAttribute('data-n'); RQ.$('#ob-pet').value = ob.petName; RQ.sfx.pop(); };
  RQ.actions.obDone = function () {
    RQ.S.profile = { name: ob.name || 'Explorer', petName: ob.petName || 'Ember', petColor: ob.color, created: Date.now() };
    ob = { step: 0, name: '', petName: '', color: RQ.PET_COLORS[0] };
    RQ.store.save(); RQ.sfx.fanfare(); RQ.show('map');
  };

  // ================= MAP =================
  function nodeHTML(id, i) {
    var st = RQ.store, info = st.get(id), r = st.rec(id);
    var cls = 'node n' + (i % 5), face, sub = '', label = info.data.boss ? 'Guardian: ' + info.meta.guardian.name : info.data.title, state = '';
    var isNext = st.nextId() === id;
    if (info.data.boss) cls += ' boss';
    if (!st.unlocked(id)) { cls += ' locked'; face = info.data.boss ? info.meta.guardian.emoji : '🔒'; state = ', locked'; }
    else if (st.dailyLocked(id)) { cls += ' sleep'; face = '💤'; state = ', opens tomorrow'; }
    else if (st.passed(id)) { cls += ' done'; face = info.data.sticker.emoji; sub = RQ.starsHTML(r.stars, 'mini') + (r.mastered ? '<span class="crown" aria-hidden="true">👑</span>' : ''); state = ', ' + r.stars + ' of 3 stars'; }
    else {
      cls += isNext ? ' current' : ' open';
      face = info.data.boss ? info.meta.guardian.emoji : String(info.day);
      if (isNext) sub = '<span class="go-tag">GO!</span>';
    }
    return '<button class="' + cls + '" data-a="node" data-id="' + id + '" aria-label="' + RQ.attr(label + state) + '"><span class="node-face">' + face + '</span>' + sub +
      '<span class="node-title">' + esc(label) + '</span></button>';
  }
  function weekLine() {
    var n = RQ.store.weekDays();
    return '<div class="week-line">' + RQ.weekDotsHTML(n) + '<span>' + (n >= 5 ? 'Weekly goal reached! 🎉' : n + ' of 5 reading days this week') + '</span></div>';
  }
  function todayHTML() {
    var st = RQ.store, S = RQ.S, next = st.nextId(), nextInfo = next && st.get(next), due = st.checkDue();
    var prog = S.inProgress && st.getProgress(S.inProgress.id) ? st.get(S.inProgress.id) : null;
    var back = st.comeback(), backInfo = back && st.get(back);
    var h = '<div class="today card">';
    if (due) {
      h += '<div class="today-pet">' + RQ.petSVG() + '</div><div class="today-txt"><p class="bubble">' + (due === 1 ? 'First, show me how you read!' : 'Time to show how much you have grown!') + '</p>' +
        '<div class="today-next">Next: <b>Reading Check</b></div><button class="btn big" data-a="startCheck" data-n="' + due + '">Start 🧭</button></div>';
    } else if (!next) {
      h += '<div class="today-txt"><h2>You finished the whole quest! 🏆</h2><p>You are a Master Reader. Come back to any lesson to earn more stars.</p>' +
        (backInfo ? '<button class="btn alt" data-a="node" data-id="' + back + '">⭐ ' + esc(backInfo.data.title) + '</button>' : '') + '</div>';
    } else if (prog) {
      h += '<div class="today-pet">' + RQ.petSVG() + '</div><div class="today-txt"><p class="bubble">I saved your place!</p>' +
        '<div class="today-next">Keep going: <b>' + esc(prog.data.title) + '</b></div><button class="btn big" data-a="node" data-id="' + prog.id + '">Keep reading 📖</button></div>';
    } else if (st.dailyLocked(next)) {
      h += '<div class="today-pet">' + RQ.petSVG({ mood: 'sleep' }) + '</div><div class="today-txt"><h2>Great reading today!</h2><p>Your next adventure opens tomorrow.</p>' +
        (backInfo ? '<button class="btn alt" data-a="node" data-id="' + back + '">⭐ Comeback quest: ' + esc(backInfo.data.title) + '</button>'
          : st.knownWords().length >= 4 ? '<button class="btn alt" data-a="go" data-to="game">🎈 Play Word Pop</button>'
            : '<button class="btn alt" data-a="go" data-to="pet">🐲 Visit ' + esc(S.profile.petName) + '</button>') + '</div>';
    } else if (st.struggling() && backInfo) {
      h += '<div class="today-pet">' + RQ.petSVG() + '</div><div class="today-txt"><p class="bubble">Let\'s warm up with one you know. You can win more stars!</p>' +
        '<button class="btn big" data-a="node" data-id="' + back + '">⭐ ' + esc(backInfo.data.title) + '</button>' +
        '<button class="btn alt sm" data-a="node" data-id="' + next + '">Or start: ' + esc(nextInfo.data.title) + '</button></div>';
    } else {
      h += '<div class="today-pet">' + RQ.petSVG() + '</div><div class="today-txt"><p class="bubble">' + esc(RQ.petSay('greet')) + '</p>' +
        '<div class="today-next">Next: <b>' + esc(nextInfo.data.title) + '</b></div>' +
        '<button class="btn big" data-a="node" data-id="' + next + '">' + (st.rec(next) ? 'Try again' : 'Start reading') + ' 📖</button></div>';
    }
    return h + '</div>' + weekLine();
  }

  RQ.screens.map = {
    render: function () {
      var st = RQ.store, S = RQ.S, next = st.nextId();
      var nextInfo = next && st.get(next);
      var curWeek = nextInfo ? nextInfo.week : 12;
      var h = RQ.topbarHTML() + '<div class="map-scroll">' + todayHTML();
      st.weeksAvailable().forEach(function (n) {
        var m = C.WEEKS[n], sk = C.SKILLS[m.focus[0]];
        var ids = st.weekIds(n);
        var done = ids.filter(function (id) { return st.passed(id); }).length;
        if (n > curWeek && !S.settings.unlockAll) {
          h += '<section class="land fog" id="land-' + n + '"><span class="land-emoji">' + m.emoji + '</span><div><div class="land-week">Week ' + n + '</div><h2>' + esc(m.land) + '</h2></div><span class="fog-lock">🔒</span></section>';
          return;
        }
        h += '<section class="land" id="land-' + n + '" style="--c1:' + m.c1 + ';--c2:' + m.c2 + '">' +
          '<div class="land-head"><span class="land-emoji">' + m.emoji + '</span><div class="land-names"><div class="land-week">Week ' + n + ' · ' + done + '/5</div><h2>' + esc(m.land) + '</h2>' +
          '<div class="land-focus">' + sk.icon + ' ' + esc(m.title) + '</div></div>' +
          '<button class="powerup" data-a="strategy" data-week="' + n + '">⚡ Power-Up</button></div>' +
          '<div class="path">' + ids.map(nodeHTML).join('') + '</div></section>';
      });
      return h + '<div class="map-end">🌟</div></div>' + RQ.navHTML('map');
    },
    enter: function () { /* the map opens at the Today card, which always holds the next thing to do */ }
  };

  RQ.actions.node = function (el) {
    var id = el.getAttribute('data-id'), st = RQ.store;
    if (!st.unlocked(id)) {
      RQ.sfx.wrong(); el.classList.add('shake'); setTimeout(function () { el.classList.remove('shake'); }, 500);
      RQ.toast(st.checkDue() ? 'Do the Reading Check first!' : 'Finish the lesson before this one first!'); return;
    }
    if (st.dailyLocked(id)) {
      RQ.sfx.tap();
      RQ.modal('<div class="m-emoji">💤</div><h2>Opens tomorrow!</h2><p>You did your reading for today. Super job! Come back tomorrow for a new adventure.</p><button class="btn" data-a="closeModal">OK</button>');
      return;
    }
    RQ.sfx.tap();
    RQ.startSession(id);
  };
  RQ.actions.startCheck = function (el) { RQ.sfx.tap(); RQ.startCheck(+el.getAttribute('data-n')); };

  RQ.strategyHTML = function (week, btn) {
    var W = window.RQ_WEEKS[week], s = W.strategy;
    var read = s.name + '. ' + s.tagline + ' ' + s.steps.map(function (x, i) { return 'Step ' + (i + 1) + '. ' + x; }).join(' ');
    return '<div class="strategy"><div class="st-icon">' + s.icon + '</div><div class="st-kicker">Reading Power-Up</div><h2>' + esc(s.name) +
      (RQ.S.settings.readAloud && RQ.tts.available() ? ' <button class="say" data-a="say" aria-label="Read aloud" data-t="' + RQ.attr(read) + '">🔊</button>' : '') + '</h2><p class="st-tag">' + esc(s.tagline) + '</p>' +
      '<ol class="st-steps">' + s.steps.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>' +
      '<div class="st-ex"><div class="st-ex-h">Watch me try</div><p class="st-ex-text">' + esc(s.example.text) + '</p><p><b>' + esc(s.example.q) + '</b></p>' +
      '<p class="st-ex-a" id="st-ans" hidden>✅ ' + esc(s.example.a) + '</p><button class="btn alt sm" id="st-reveal" data-a="stReveal">What do you think? Tap to see.</button></div>' + btn + '</div>';
  };
  RQ.actions.stReveal = function (el) { RQ.sfx.pop(); var a = RQ.$('#st-ans'); if (a) a.hidden = false; el.remove(); };
  RQ.actions.strategy = function (el) {
    RQ.sfx.tap();
    RQ.modal(RQ.strategyHTML(+el.getAttribute('data-week'), '<button class="btn sticky" data-a="closeModal">Got it!</button>'), 'tall');
  };

  // ================= PET =================
  function friendsHTML() {
    var st = RQ.store, h = '';
    st.weeksAvailable().forEach(function (n) {
      var ids = st.weekIds(n), boss = ids[ids.length - 1], m = C.WEEKS[n], won = boss && st.passed(boss);
      h += '<div class="friend' + (won ? ' got' : '') + '" aria-label="' + RQ.attr(won ? m.guardian.name : 'Not met yet') + '"><span class="friend-emoji">' + (won ? m.guardian.emoji : '❔') + '</span><span class="friend-name">' + (won ? esc(m.guardian.name) : 'Week ' + n) + '</span></div>';
    });
    return h;
  }
  RQ.screens.pet = {
    render: function () {
      var S = RQ.S, st = RQ.store, n = st.clearedCount(), stage = st.petStage(), nextAt = st.STAGES[stage + 1];
      var h = RQ.topbarHTML() + '<div class="page"><div class="pet-stage card"><button class="pet-big" data-a="petTap" aria-label="Pet ' + RQ.attr(S.profile.petName) + '">' + RQ.petSVG() + '</button>' +
        '<p class="bubble pet-says" id="pet-says" hidden></p><h1>' + esc(S.profile.petName) + '</h1><div class="pet-rank">' + st.STAGE_NAMES[stage] + '</div>';
      if (nextAt) {
        var prev = st.STAGES[stage], pct = Math.round(100 * (n - prev) / (nextAt - prev));
        h += '<div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div><p class="note-kid">' + (nextAt - n) + ' more lesson' + (nextAt - n === 1 ? '' : 's') + ' until ' + esc(S.profile.petName) + (stage === 0 ? ' hatches!' : ' grows!') + '</p>';
      } else h += '<p class="note-kid">Fully grown. What a team!</p>';
      h += '</div><h2 class="sec">Guardian friends</h2><div class="friends">' + friendsHTML() + '</div>' +
        '<h2 class="sec">Pet Shop <span class="gem-count">💎 ' + S.gems + '</span></h2><div class="shop">';
      RQ.HATS.forEach(function (hat) {
        var owned = S.pet.owned.indexOf(hat.id) >= 0, on = S.pet.hat === hat.id;
        h += '<button class="shop-item' + (on ? ' on' : '') + (owned ? ' owned' : '') + '" data-a="hat" data-id="' + hat.id + '"><span class="shop-emoji">' + hat.emoji + '</span><span class="shop-name">' + hat.name + '</span>' +
          '<span class="shop-cost">' + (on ? 'Wearing' : owned ? 'Wear' : '💎 ' + hat.cost) + '</span></button>';
      });
      h += '</div>' + (stage === 0 ? '<p class="note-kid center">Hats fit after the egg hatches.</p>' : '') + '</div>' + RQ.navHTML('pet');
      return h;
    }
  };
  RQ.actions.petTap = function (el) {
    RQ.sfx.pop(); el.classList.remove('boing'); void el.offsetWidth; el.classList.add('boing');
    var b = RQ.$('#pet-says'); if (b && RQ.store.petStage() > 0) { b.hidden = false; b.textContent = RQ.petSay('pet'); }
  };
  RQ.actions.hat = function (el) {
    var S = RQ.S, id = el.getAttribute('data-id'), hat;
    RQ.HATS.forEach(function (h) { if (h.id === id) hat = h; });
    if (S.pet.owned.indexOf(id) >= 0) { S.pet.hat = S.pet.hat === id ? '' : id; RQ.sfx.pop(); }
    else if (S.gems >= hat.cost) { S.gems -= hat.cost; S.pet.owned.push(id); S.pet.hat = id; RQ.sfx.coin(); RQ.confetti(40); }
    else { RQ.sfx.wrong(); RQ.toast('You need ' + (hat.cost - S.gems) + ' more gems. Keep reading!'); return; }
    RQ.store.save(); RQ.show('pet');
  };

  // ================= STICKERS =================
  RQ.screens.stickers = {
    render: function () {
      var st = RQ.store, got = 0;
      var body = '';
      st.weeksAvailable().forEach(function (n) {
        var m = C.WEEKS[n];
        body += '<h2 class="sec">' + m.emoji + ' ' + esc(m.land) + '</h2><div class="sticker-grid">';
        st.weekIds(n).forEach(function (id) {
          var info = st.get(id);
          if (st.passed(id)) { got++; body += '<button class="sticker got" data-a="stickerTap" data-id="' + id + '"><span class="sticker-emoji">' + info.data.sticker.emoji + '</span><span class="sticker-name">' + esc(info.data.sticker.name) + '</span>' + RQ.starsHTML(st.rec(id).stars, 'mini') + '</button>'; }
          else body += '<div class="sticker" aria-label="Sticker not won yet"><span class="sticker-emoji q">?</span><span class="sticker-name">???</span></div>';
        });
        body += '</div>';
      });
      return RQ.topbarHTML() + '<div class="page"><h1 class="page-title">Sticker Book <span class="pill">' + got + ' / ' + RQ.order.length + '</span></h1>' + body + '</div>' + RQ.navHTML('stickers');
    }
  };
  RQ.actions.stickerTap = function (el) {
    var info = RQ.store.get(el.getAttribute('data-id'));
    RQ.sfx.pop(); el.classList.remove('boing'); void el.offsetWidth; el.classList.add('boing');
    RQ.toast('From “' + RQ.pretty(info.data.title) + '”');
  };
})();
