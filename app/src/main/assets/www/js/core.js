/* UI plumbing: screen router, click actions, sounds, read-aloud, confetti, modals, the pet drawing. */
(function () {
  'use strict';
  var RQ = window.RQ = window.RQ || {};

  // attr: plain HTML escaping. esc: the same, plus curly quotes for anything a child reads.
  RQ.attr = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  RQ.pretty = function (s) {
    return String(s == null ? '' : s)
      .replace(/(^|[\s(\[\u2014-])"/g, '$1\u201c').replace(/"/g, '\u201d')
      .replace(/(^|[\s(\[\u201c])'/g, '$1\u2018').replace(/'/g, '\u2019');
  };
  RQ.esc = function (s) { return RQ.attr(RQ.pretty(s)); };
  RQ.$ = function (sel, root) { return (root || document).querySelector(sel); };
  RQ.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  RQ.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  RQ.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

  // ---------- screens + actions ----------
  RQ.screens = {};
  RQ.actions = {};
  RQ.current = { name: '', params: null };
  RQ.show = function (name, params) {
    RQ.tts.stop();
    RQ.$$('.toast').forEach(function (t) { t.parentNode.removeChild(t); });
    if (RQ.current.name && RQ.screens[RQ.current.name] && RQ.screens[RQ.current.name].leave) RQ.screens[RQ.current.name].leave();
    RQ.current = { name: name, params: params || {} };
    RQ.navAt = Date.now();
    var app = RQ.$('#app');
    app.className = 'screen-' + name;
    app.innerHTML = RQ.screens[name].render(params || {});
    window.scrollTo(0, 0);
    // Screen readers and keyboards start from the top of the new screen.
    var head = app.querySelector('h1, h2');
    if (head) { head.setAttribute('tabindex', '-1'); try { head.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
    if (RQ.screens[name].enter) RQ.screens[name].enter(params || {});
  };
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest ? ev.target.closest('[data-a]') : null;
    if (!el || el.disabled || el.classList.contains('disabled')) return;
    // A second tap landing on the button that just appeared in the same spot is ignored.
    if (!window.RQ_FAST && el.classList.contains('btn') && Date.now() - RQ.navAt < 350) return;
    var fn = RQ.actions[el.getAttribute('data-a')];
    if (fn) { RQ.sfx.unlock(); fn(el, ev); }
  });
  // Tap-a-sentence and dotted words also work from a keyboard or switch.
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    var el = ev.target;
    if (el && el.getAttribute && el.getAttribute('role') === 'button' && el.tagName !== 'BUTTON' && el.getAttribute('data-a')) { ev.preventDefault(); el.click(); }
  });
  RQ.navAt = 0;
  RQ.reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // ---------- sound effects (synthesised, no audio files) ----------
  var actx = null;
  function ctx() {
    if (!actx) { var AC = window.AudioContext || window.webkitAudioContext; if (AC) try { actx = new AC(); } catch (e) { actx = null; } }
    return actx;
  }
  function tone(freq, start, dur, type, vol) {
    var c = ctx(); if (!c || !RQ.S.settings.sound) return;
    var o = c.createOscillator(), g = c.createGain(), t0 = c.currentTime + start;
    o.type = type || 'sine'; o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.18, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(c.destination); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  RQ.sfx = {
    unlock: function () { var c = ctx(); if (c && c.state === 'suspended') c.resume(); },
    tap: function () { tone(520, 0, 0.06, 'triangle', 0.08); },
    correct: function () { tone(660, 0, 0.12, 'triangle'); tone(880, 0.1, 0.2, 'triangle'); },
    wrong: function () { tone(220, 0, 0.18, 'sine', 0.14); tone(180, 0.12, 0.22, 'sine', 0.12); },
    pop: function () { tone(900, 0, 0.07, 'sine', 0.14); },
    star: function (i) { tone([784, 988, 1175][i || 0], 0, 0.3, 'triangle', 0.2); },
    fanfare: function () { [523, 659, 784, 1047, 784, 1047].forEach(function (f, i) { tone(f, i * 0.12, 0.25, 'triangle', 0.18); }); },
    coin: function () { tone(1200, 0, 0.08, 'square', 0.06); tone(1600, 0.07, 0.15, 'square', 0.06); }
  };

  // ---------- read-aloud ----------
  // Android: native TextToSpeech through the JS bridge. Browser: Web Speech API.
  var ttsSeq = 0, ttsCb = {}, ttsRange = {}, ttsWatch = {}, listCancel = null;
  window.RQ_ttsDone = function (id) { var cb = ttsCb[id]; delete ttsCb[id]; delete ttsRange[id]; clearTimeout(ttsWatch[id]); delete ttsWatch[id]; if (cb) cb(); };
  window.RQ_ttsRange = function (id, start, end) { var cb = ttsRange[id]; if (cb) cb(start, end); };
  RQ.tts = {
    available: function () {
      if (window.Android && window.Android.speak) return window.Android.canSpeak ? !!window.Android.canSpeak() : true;
      return !!window.speechSynthesis;
    },
    speak: function (text, done, onRange) {
      var id = String(++ttsSeq);
      ttsCb[id] = done || function () {};
      if (onRange) ttsRange[id] = onRange;
      var rate = RQ.S.settings.speechRate || 0.85;
      // If the voice never reports back (engine died), move on rather than hang.
      ttsWatch[id] = setTimeout(function () { window.RQ_ttsDone(id); }, 4000 + text.length * 220 / rate);
      if (window.Android && window.Android.speak) { window.Android.speak(text, id, rate); return; }
      if (window.speechSynthesis) {
        var u = new SpeechSynthesisUtterance(text); u.rate = rate; u.lang = 'en-US';
        u.onend = u.onerror = function () { window.RQ_ttsDone(id); };
        u.onboundary = function (e) { if (e.name === 'word' || !e.name) window.RQ_ttsRange(id, e.charIndex, e.charIndex + (e.charLength || 1)); };
        window.speechSynthesis.speak(u); return;
      }
      setTimeout(function () { window.RQ_ttsDone(id); }, 400);
    },
    // Speak a list one by one. onEach(i) as each starts; onEnd when all are read; onCancel if stopped from outside
    // (app paused, screen left); onRange(i, start, end) as each word is spoken, where the voice supports it.
    speakList: function (items, onEach, onEnd, onCancel, onRange) {
      var stopped = false, i = 0;
      function next() {
        if (stopped) return;
        if (i >= items.length) { listCancel = null; if (onEnd) onEnd(); return; }
        var k = i++;
        if (onEach) onEach(k);
        RQ.tts.speak(items[k], next, onRange ? function (a, b) { if (!stopped) onRange(k, a, b); } : null);
      }
      listCancel = function () { if (stopped) return; stopped = true; listCancel = null; if (onCancel) onCancel(); };
      next();
      return function () { stopped = true; listCancel = null; RQ.tts.stop(); };
    },
    stop: function () {
      for (var k in ttsWatch) clearTimeout(ttsWatch[k]);
      ttsCb = {}; ttsRange = {}; ttsWatch = {};
      var c = listCancel; listCancel = null; if (c) c();
      RQ.tts.markWord(null);
      try { if (window.Android && window.Android.stopSpeaking) window.Android.stopSpeaking(); else if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) { /* ignore */ }
    },
    // Highlight the word being spoken (characters start..end of the element's text). No DOM changes needed.
    markWord: function (el, start, end) {
      if (!window.CSS || !CSS.highlights || !window.Highlight) return;
      if (!el) { CSS.highlights.delete('rq-word'); return; }
      try {
        var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), pos = 0, node, range = document.createRange(), s0 = false;
        while ((node = walker.nextNode())) {
          var len = node.nodeValue.length;
          if (!s0 && start < pos + len) { range.setStart(node, Math.max(0, start - pos)); s0 = true; }
          if (s0 && end <= pos + len) { range.setEnd(node, Math.max(0, end - pos)); CSS.highlights.set('rq-word', new Highlight(range)); return; }
          pos += len;
        }
      } catch (e) { /* ignore */ }
    }
  };

  // ---------- confetti ----------
  RQ.confetti = function (n) {
    if (RQ.reduceMotion) return;
    var cv = document.createElement('canvas'); cv.className = 'confetti';
    cv.width = window.innerWidth; cv.height = window.innerHeight;
    document.body.appendChild(cv);
    var g = cv.getContext('2d'), cols = ['#ff5d8f', '#ffd54f', '#38b6ff', '#7ed957', '#b15cff', '#ff7a59'];
    var ps = []; n = n || 90;
    for (var i = 0; i < n; i++) ps.push({ x: cv.width / 2 + (Math.random() - 0.5) * 120, y: cv.height * 0.35, vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 13 - 3, s: 5 + Math.random() * 7, c: cols[i % cols.length], r: Math.random() * 6 });
    var t0 = Date.now();
    (function frame() {
      var el = Date.now() - t0;
      g.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(function (p) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.38; p.vx *= 0.99; p.r += 0.2;
        g.save(); g.translate(p.x, p.y); g.rotate(p.r); g.fillStyle = p.c; g.globalAlpha = Math.max(0, 1 - el / 2600);
        g.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); g.restore();
      });
      if (el < 2600) requestAnimationFrame(frame); else cv.remove();
    })();
  };

  // ---------- modal + toast ----------
  RQ.modal = function (html, cls) {
    RQ.closeModal();
    var d = document.createElement('div'); d.className = 'modal-wrap'; d.id = 'modal';
    d.innerHTML = '<div class="modal ' + (cls || '') + '">' + html + '</div>';
    document.body.appendChild(d);
  };
  RQ.closeModal = function () { var m = RQ.$('#modal'); if (m) m.remove(); };
  RQ.actions.closeModal = function () { RQ.closeModal(); };
  RQ.toast = function (msg) {
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('out'); }, 1900);
    setTimeout(function () { t.remove(); }, 2400);
  };

  // ---------- the pet ----------
  function shade(hex, amt) {
    var n = parseInt(hex.slice(1), 16), r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
    r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  RQ.PET_COLORS = ['#ff7a59', '#38b6ff', '#7ed957', '#b15cff', '#ff5d8f', '#f2a900'];
  RQ.HATS = [
    { id: 'bow', emoji: '🎀', name: 'Bow', cost: 8 }, { id: 'flower', emoji: '🌸', name: 'Flower', cost: 12 },
    { id: 'cap', emoji: '🧢', name: 'Cap', cost: 18 }, { id: 'sunhat', emoji: '👒', name: 'Sun Hat', cost: 25 },
    { id: 'tophat', emoji: '🎩', name: 'Top Hat', cost: 35 }, { id: 'shades', emoji: '🕶️', name: 'Cool Shades', cost: 45 },
    { id: 'phones', emoji: '🎧', name: 'Headphones', cost: 55 }, { id: 'grad', emoji: '🎓', name: 'Scholar Cap', cost: 70 },
    { id: 'crown', emoji: '👑', name: 'Crown', cost: 100 }
  ];
  // stage 0 = egg ... 4 = fully grown. mood: 'happy' | 'wow' | 'sleep'
  RQ.petSVG = function (opts) {
    opts = opts || {};
    var st = RQ.S, color = opts.color || (st.profile && st.profile.petColor) || RQ.PET_COLORS[0];
    var stage = opts.stage === undefined ? RQ.store.petStage() : opts.stage;
    var hatId = opts.hat === undefined ? st.pet.hat : opts.hat;
    var dark = shade(color, -45), light = shade(color, 70), mood = opts.mood || 'happy';
    var svg = '<svg class="pet pet-s' + stage + '" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
    svg += '<ellipse cx="100" cy="184" rx="52" ry="8" fill="rgba(0,0,0,.12)"/>';
    if (stage === 0) {
      svg += '<g class="pet-body"><path d="M100 30 C60 30 42 92 42 126 C42 162 68 180 100 180 C132 180 158 162 158 126 C158 92 140 30 100 30Z" fill="' + light + '" stroke="' + dark + '" stroke-width="4"/>' +
        '<circle cx="78" cy="88" r="11" fill="' + color + '"/><circle cx="122" cy="118" r="15" fill="' + color + '"/><circle cx="84" cy="146" r="9" fill="' + color + '"/><circle cx="116" cy="64" r="7" fill="' + color + '"/>' +
        '<path d="M62 70 Q70 48 90 42" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none" opacity=".7"/></g>';
    } else {
      var k = [0, 0.72, 0.84, 0.94, 1][stage];
      svg += '<g class="pet-body" transform="translate(100 180) scale(' + k + ') translate(-100 -180)">';
      if (stage >= 2) { // wings
        var ws = stage >= 4 ? 1.35 : stage === 3 ? 1.1 : 0.75;
        svg += '<g transform="translate(100 112) scale(' + ws + ') translate(-100 -112)">' +
          '<path class="wing wl" d="M62 112 C30 84 16 96 12 122 C28 114 38 126 44 134 C50 122 58 122 64 128Z" fill="' + light + '" stroke="' + dark + '" stroke-width="3"/>' +
          '<path class="wing wr" d="M138 112 C170 84 184 96 188 122 C172 114 162 126 156 134 C150 122 142 122 136 128Z" fill="' + light + '" stroke="' + dark + '" stroke-width="3"/></g>';
      }
      svg += '<path d="M138 158 C170 160 178 138 166 128 C168 144 152 146 140 142Z" fill="' + color + '" stroke="' + dark + '" stroke-width="3"/>'; // tail
      svg += '<ellipse cx="100" cy="140" rx="44" ry="40" fill="' + color + '" stroke="' + dark + '" stroke-width="4"/>';
      svg += '<ellipse cx="100" cy="150" rx="26" ry="25" fill="' + light + '"/>';
      svg += '<ellipse cx="78" cy="178" rx="13" ry="7" fill="' + dark + '"/><ellipse cx="122" cy="178" rx="13" ry="7" fill="' + dark + '"/>';
      if (stage >= 3) svg += '<path d="M76 48 L70 26 L88 42Z M124 48 L130 26 L112 42Z" fill="#fff3c4" stroke="' + dark + '" stroke-width="3" stroke-linejoin="round"/>';
      else svg += '<circle cx="76" cy="44" r="7" fill="' + dark + '"/><circle cx="124" cy="44" r="7" fill="' + dark + '"/>';
      svg += '<circle cx="100" cy="82" r="46" fill="' + color + '" stroke="' + dark + '" stroke-width="4"/>';
      if (stage >= 4) svg += '<path d="M100 36 l5 11 12 1 -9 8 3 12 -11 -6 -11 6 3 -12 -9 -8 12 -1Z" fill="#ffd54f" stroke="#e0a800" stroke-width="2"/>';
      svg += '<ellipse cx="72" cy="98" rx="9" ry="6" fill="#ff9aa2" opacity=".7"/><ellipse cx="128" cy="98" rx="9" ry="6" fill="#ff9aa2" opacity=".7"/>';
      if (mood === 'sleep') {
        svg += '<path d="M72 82 q10 8 20 0 M108 82 q10 8 20 0" stroke="#2b2d42" stroke-width="4" fill="none" stroke-linecap="round"/>';
      } else {
        svg += '<g class="eyes"><ellipse cx="82" cy="80" rx="11" ry="13" fill="#fff"/><ellipse cx="118" cy="80" rx="11" ry="13" fill="#fff"/>' +
          '<circle cx="84" cy="82" r="6.5" fill="#2b2d42"/><circle cx="120" cy="82" r="6.5" fill="#2b2d42"/><circle cx="86" cy="79" r="2.2" fill="#fff"/><circle cx="122" cy="79" r="2.2" fill="#fff"/></g>';
      }
      svg += mood === 'wow'
        ? '<ellipse cx="100" cy="106" rx="8" ry="9" fill="#7a1f2b"/>'
        : '<path d="M88 102 Q100 116 112 102" stroke="#2b2d42" stroke-width="4" fill="' + (mood === 'happy' ? '#ff6b81' : 'none') + '" stroke-linecap="round" stroke-linejoin="round"/>';
      svg += '<circle cx="95" cy="93" r="1.8" fill="' + dark + '"/><circle cx="105" cy="93" r="1.8" fill="' + dark + '"/>';
      var hat = null; RQ.HATS.forEach(function (h) { if (h.id === hatId) hat = h; });
      if (hat) {
        var side = hat.id === 'bow' || hat.id === 'flower', y = hat.id === 'shades' ? 92 : hat.id === 'phones' ? 62 : side ? 46 : 50, fs = hat.id === 'shades' ? 54 : hat.id === 'phones' ? 64 : 50;
        svg += '<text x="' + (side ? 128 : 100) + '" y="' + y + '" font-size="' + (side ? 34 : fs) + '" text-anchor="middle">' + hat.emoji + '</text>';
      }
      svg += '</g>';
    }
    return svg + '</svg>';
  };

  RQ.petSay = function (kind) {
    var name = (RQ.S.profile && RQ.S.profile.name) || 'Explorer';
    var lines = {
      correct: ['Yes! You found it!', 'Great reading!', 'You proved it!', 'Sharp eyes, ' + name + '!', 'Nailed it!', 'That is the one!'],
      retry: ['Not yet. Look back in the text!', 'So close! Check the text again.', 'Good try! The answer is hiding in the passage.', 'Readers look back. You can do it!'],
      reveal: ['Now you know! Let\'s keep going.', 'Tricky one! Read why, then on we go.', 'Good effort. Every miss makes you smarter.'],
      pet: ['That tickles!', 'Read with me today?', 'I love our reading time.', 'Hee hee!', 'You are my favorite reader, ' + name + '.'],
      greet: ['Ready for a reading adventure, ' + name + '?', 'I saved you a spot on the trail!', 'Let\'s find some answers today!', 'I get stronger every time you read!']
    };
    return RQ.pick(lines[kind] || lines.greet);
  };

  RQ.starsHTML = function (n, cls) {
    var h = '<span class="stars ' + (cls || '') + '">';
    for (var i = 0; i < 3; i++) h += '<span class="star' + (i < n ? ' on' : '') + '">★</span>';
    return h + '</span>';
  };
})();
