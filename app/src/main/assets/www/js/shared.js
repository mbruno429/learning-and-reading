/* Shared text helpers — used by the app AND by tools/validate.js (Node). */
(function (root) {
  'use strict';

  // Split a paragraph into sentences. Deterministic; "evidence" answers must
  // exactly equal one of the strings this returns.
  function splitSentences(text) {
    if (text.indexOf('\n') >= 0) {
      // Poem stanza: every line is its own unit.
      return text.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
    }
    // Protect common abbreviations (same-length replacement keeps offsets valid).
    var prot = text.replace(/\b(Mr|Mrs|Ms|Dr|St|Jr|Sr)\./g, function (m) {
      return m.slice(0, -1) + '․';
    });
    var re = /[.!?]+["”’')\]]*\s+(?=["“‘(]?[A-Z0-9])/g;
    var out = [], start = 0, m;
    while ((m = re.exec(prot))) {
      var end = m.index + m[0].length;
      var s = text.slice(start, end).trim();
      if (s) out.push(s);
      start = end;
    }
    var last = text.slice(start).trim();
    if (last) out.push(last);
    // "I let go at the mailbox!" Maya called.  ->  keep the speech tag with its quote.
    var TAG = /^[A-Z][\w'’-]*( [A-Z][\w'’-]*){0,2} (said|asked|called|cried|shouted|yelled|whispered|replied|answered|grumbled|laughed|gasped|added|sighed|groaned|cheered|exclaimed|announced|declared|muttered|whined|begged|wondered|agreed|warned|teased|giggled|snapped|moaned|murmured|squealed|roared|explained|suggested|admitted|insisted|promised|called out|wanted to know)\b/;
    for (var i = out.length - 1; i > 0; i--) {
      if (/[!?]["”’]$/.test(out[i - 1]) && TAG.test(out[i])) { out[i - 1] = out[i - 1] + ' ' + out[i]; out.splice(i, 1); }
    }
    return out;
  }

  function isHeading(p) { return typeof p === 'string' && p.indexOf('## ') === 0; }

  function words(text) {
    return (text.match(/[A-Za-z0-9][A-Za-z0-9'’\-]*/g) || []);
  }

  function passageWordCount(passage) {
    var n = 0;
    passage.forEach(function (p) { if (!isHeading(p)) n += words(p).length; });
    return n;
  }

  // All tappable sentences of a passage: [{p: paragraphIndex, s: sentenceIndex, text}]
  function passageSentences(passage) {
    var out = [];
    passage.forEach(function (p, pi) {
      if (isHeading(p)) return;
      splitSentences(p).forEach(function (t, si) { out.push({ p: pi, s: si, text: t }); });
    });
    return out;
  }

  var api = {
    splitSentences: splitSentences,
    isHeading: isHeading,
    words: words,
    passageWordCount: passageWordCount,
    passageSentences: passageSentences
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RQShared = api;
})(typeof window !== 'undefined' ? window : this);
