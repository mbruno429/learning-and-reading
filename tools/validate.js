#!/usr/bin/env node
/* Validates lesson content.
   Usage: node tools/validate.js                 -> everything (12 weeks, Reading Checks, fluency passages)
          node tools/validate.js 3 4             -> only weeks 3 and 4
          node tools/validate.js check1 fluency  -> only Reading Check form 1 and the fluency passages */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const WWW = path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www');
const shared = require(path.join(WWW, 'js', 'shared.js'));
const { SKILLS, WEEKS, GENRES, CHECKS, FLUENCY_BANDS } = require(path.join(WWW, 'js', 'curriculum.js'));

function syllables(word) {
  let w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 1;
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|[^td]ed|[^laeiouy]e)$/, m => m[0]);
  w = w.replace(/^y/, '');
  const m = w.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}
function fkGrade(passage) {
  let sents = 0, wc = 0, syl = 0;
  passage.forEach(p => {
    if (shared.isHeading(p)) return;
    sents += shared.splitSentences(p).length;
    shared.words(p).forEach(w => { wc++; syl += syllables(w); });
  });
  if (!sents || !wc) return 0;
  return 0.39 * (wc / sents) + 11.8 * (syl / wc) - 15.59;
}
function load(file, key) {
  const f = path.join(WWW, 'content', file);
  if (!fs.existsSync(f)) return null;
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f });
  return sandbox.window[key];
}
const wc = s => shared.words(String(s || '')).length;
let totalErr = 0, totalWarn = 0;
function report(errs, warns) {
  warns.forEach(w => console.log('  warn  ' + w));
  errs.forEach(e => console.log('  ERROR ' + e));
  if (!errs.length) console.log('  OK');
  totalErr += errs.length; totalWarn += warns.length;
}

// One question. opts: {week, sentences, passage, vocabWords, test (Reading Check: no hint needed)}
// Returns {longest: bool, mc: bool}
function checkQuestion(q, qid, o, E, W) {
  const out = { mc: false, longest: false };
  if (!SKILLS[q.skill]) E(qid, `bad skill "${q.skill}"`);
  if (!q.q || wc(q.q) < 3) E(qid, 'missing question text');
  if (!o.test && (!q.hint || wc(q.hint) < 4)) E(qid, 'missing hint');
  if (!q.why || wc(q.why) < 4) E(qid, 'missing why (explanation)');
  if (q.para !== undefined) {
    if (!Number.isInteger(q.para) || q.para < 0 || q.para >= o.passage.length) E(qid, `para ${q.para} out of range`);
    else if (shared.isHeading(o.passage[q.para])) E(qid, `para ${q.para} is a heading`);
  }
  if (q.type === 'mc') {
    out.mc = true;
    const opts = q.options;
    if (!Array.isArray(opts) || opts.length < 3 || opts.length > 4) { E(qid, 'mc needs 3-4 options'); return out; }
    if (o.week >= 3 && opts.length !== 4) E(qid, 'mc needs exactly 4 options from week 3 on');
    if (new Set(opts.map(x => String(x).trim().toLowerCase())).size !== opts.length) E(qid, 'duplicate options');
    if (/all of the above|none of the above|both a and b/i.test(opts.join('|'))) E(qid, 'no "all/none of the above" options');
    const lens = opts.map(x => String(x).length);
    out.longest = lens[0] > Math.max(...lens.slice(1));
    // word-meaning questions must not ask about a word that was just pre-taught (from week 3 on)
    if (q.skill === 'vocab' && o.week >= 3 && o.vocabWords) {
      const quoted = (q.q.match(/["“]([A-Za-z][A-Za-z'’-]*)["”]/g) || []).map(x => x.replace(/["“”]/g, '').toLowerCase());
      quoted.forEach(t => o.vocabWords.forEach(v => {
        const stem = v.length > 5 ? v.slice(0, v.length - 2) : v;
        if (t === v || (t.indexOf(stem) === 0 && t.length <= v.length + 3)) E(qid, `word-meaning question asks about the pre-taught word "${v}". Swap "${v}" out of this lesson's vocab list for another useful word from the passage (or retarget the question)`);
      }));
    }
  } else if (q.type === 'multi') {
    if (o.week < 5) E(qid, 'multi questions start in week 5');
    if (!Array.isArray(q.options) || q.options.length !== 5) E(qid, 'multi needs exactly 5 options');
    if (q.correct !== 2) E(qid, 'multi needs correct: 2 (the first two options are the right ones)');
    if (!/TWO/.test(q.q || '')) E(qid, 'multi question text must say "Choose TWO"');
  } else if (q.type === 'order') {
    if (!Array.isArray(q.items) || q.items.length < 3 || q.items.length > 5) E(qid, 'order needs 3-5 items');
    (q.items || []).forEach(it => { if (wc(it) > 14) E(qid, `order item too long: "${it}"`); });
  } else if (q.type === 'evidence') {
    if (o.week < 3) E(qid, 'evidence questions start in week 3');
    const hits = o.sentences.filter(x => x.text === q.answer);
    if (hits.length !== 1) E(qid, `evidence answer must exactly equal ONE passage sentence (found ${hits.length}). Answer: "${q.answer}"`);
  } else if (q.type === 'sort') {
    if (o.week < 7) E(qid, 'sort questions start in week 7');
    if (!Array.isArray(q.cats) || q.cats.length < 2 || q.cats.length > 3) E(qid, 'sort needs 2-3 cats (category names)');
    else {
      q.cats.forEach(c => { if (wc(c) > 4) E(qid, `sort category name too long: "${c}"`); });
      if (!Array.isArray(q.items) || q.items.length < 4 || q.items.length > 6) E(qid, 'sort needs 4-6 items');
      else {
        const used = new Set();
        q.items.forEach(it => {
          if (!it || typeof it.t !== 'string' || !Number.isInteger(it.c) || it.c < 0 || it.c >= q.cats.length) E(qid, 'sort item needs {t: text, c: category index}');
          else { used.add(it.c); if (wc(it.t) > 14) E(qid, `sort item too long: "${it.t}"`); }
        });
        if (used.size !== q.cats.length) E(qid, 'every sort category needs at least one item');
      }
    }
  } else {
    E(qid, `bad type "${q.type}"`);
  }
  return out;
}

function checkMini(m, id, E, what) {
  if (!m || !m.q || !Array.isArray(m.options) || m.options.length !== 3) { E(id, `${what} needs {q, options[3] (correct first)}`); return; }
  if (new Set(m.options.map(x => String(x).trim().toLowerCase())).size !== 3) E(id, `${what} has duplicate options`);
}

function checkWeek(n) {
  const meta = WEEKS[n];
  const errs = [], warns = [];
  const E = (id, msg) => errs.push(`[${id}] ${msg}`);
  const W = (id, msg) => warns.push(`[${id}] ${msg}`);
  const all = load('week' + String(n).padStart(2, '0') + '.js', 'RQ_WEEKS');
  const wk = all && all[n];
  console.log(`\n=== Week ${n}: ${meta.land} — focus: ${meta.focus.join(', ')} ===`);
  if (!wk) { console.log('  MISSING content file'); totalErr++; return; }

  const st = wk.strategy;
  if (!st || !st.name || !st.icon || !st.tagline || !Array.isArray(st.steps) || st.steps.length < 3 || st.steps.length > 4 ||
      !st.example || !st.example.text || !st.example.q || !st.example.a) {
    E('strategy', 'needs {name, icon, tagline, steps[3-4], example{text,q,a}}');
  } else if (!Array.isArray(st.practice) || st.practice.length !== 2) {
    E('strategy', 'needs practice: exactly 2 guided "you try" items {text, q, options[3] (correct first), why}');
  } else {
    st.practice.forEach((p, i) => {
      checkMini(p, `strategy practice ${i + 1}`, E, 'practice item');
      if (!p.text || wc(p.text) < 8 || wc(p.text) > 70) E(`strategy practice ${i + 1}`, 'text must be a mini-passage of 8-70 words');
      if (!p.why || wc(p.why) < 4) E(`strategy practice ${i + 1}`, 'missing why');
    });
  }
  if (!Array.isArray(wk.sessions) || wk.sessions.length !== 5) { E('week', 'needs exactly 5 sessions'); }

  const genres = {};
  let mcAll = 0, longAll = 0;
  (wk.sessions || []).forEach((s, i) => {
    const id = `w${n}d${i + 1}`;
    if (s.id !== id) E(id, `id should be "${id}" (got ${s.id})`);
    const boss = i === 4;
    if (!!s.boss !== boss) E(id, 'boss flag must be true on day 5 only');
    if (!s.title) E(id, 'missing title');
    if (!GENRES[s.genre]) E(id, `bad genre "${s.genre}"`);
    genres[s.genre] = (genres[s.genre] || 0) + 1;
    if (!s.sticker || !s.sticker.emoji || !s.sticker.name) E(id, 'missing sticker {emoji,name}');
    if (!s.talk || wc(s.talk) < 6) E(id, 'missing talk prompt');
    if (!Array.isArray(s.passage) || !s.passage.length) { E(id, 'missing passage'); return; }
    s.passage.forEach((p, pi) => { if (typeof p !== 'string' || !p.trim()) E(id, `passage[${pi}] must be a non-empty string`); });

    const words = shared.passageWordCount(s.passage);
    const fk = fkGrade(s.passage);
    const lo = meta.words[0], hi = Math.round(meta.words[1] * (boss ? 1.2 : 1));
    if (words < lo || words > hi) E(id, `passage is ${words} words; allowed ${lo}-${hi}`);
    if (s.genre !== 'poem') {
      if (fk < meta.fk[0] || fk > meta.fk[1]) E(id, `readability FK ${fk.toFixed(1)}; allowed ${meta.fk[0]}-${meta.fk[1]} (adjust sentence length / word difficulty)`);
    }
    const text = s.passage.join(' ').toLowerCase();
    const sentences = shared.passageSentences(s.passage);

    // purpose line shown above the passage
    if (!s.purpose || !/^Read to find out/.test(s.purpose) || wc(s.purpose) < 6 || wc(s.purpose) > 18) E(id, 'needs purpose: one line of 6-18 words starting "Read to find out ..." (must not give away an answer)');

    // stop-and-think checks while reading
    const needStops = n <= 4 ? 1 : 2;
    const body = s.passage.map((p, pi) => pi).filter(pi => !shared.isHeading(s.passage[pi]));
    if (!Array.isArray(s.stops) || s.stops.length !== needStops) E(id, `needs exactly ${needStops} stops (stop-and-think checks): {after: paragraphIndex, q, options[3] (correct first), say}`);
    else {
      let prev = -1;
      s.stops.forEach((x, k) => {
        const sid = `${id} stop${k + 1}`;
        checkMini(x, sid, E, 'stop');
        if (!Number.isInteger(x.after) || body.indexOf(x.after) < 0) E(sid, `after must be the index of a (non-heading) paragraph; got ${x.after}`);
        else if (x.after === body[body.length - 1]) E(sid, 'after must not be the last paragraph (the stop comes in the middle of the reading)');
        else if (x.after <= prev) E(sid, 'stops must be in reading order');
        prev = x.after;
        if (!x.say || wc(x.say) < 3 || wc(x.say) > 30) E(sid, 'needs say: a short confirming sentence (3-30 words) shown after the right answer');
      });
    }

    // vocab
    if (!Array.isArray(s.vocab) || s.vocab.length !== meta.vocab) E(id, `needs exactly ${meta.vocab} vocab words`);
    const vocabWords = (s.vocab || []).map(v => String(v.word || '').toLowerCase());
    (s.vocab || []).forEach(v => {
      if (!v.word || !v.def || !v.ex) { E(id, 'vocab needs {word, def, ex}'); return; }
      const w = v.word.toLowerCase();
      const stem = w.length > 5 ? w.slice(0, w.length - 2) : w.slice(0, Math.max(3, w.length - 1));
      if (text.indexOf(stem) < 0) E(id, `vocab word "${v.word}" does not appear in the passage`);
      if (wc(v.def) > 14) E(id, `vocab def for "${v.word}" too long (${wc(v.def)} words, max 14)`);
      if (v.def.toLowerCase().indexOf(w) >= 0) E(id, `vocab def for "${v.word}" uses the word itself`);
    });

    // questions
    const qs = s.questions || [];
    const want = boss ? 8 : meta.q;
    if (qs.length < want || qs.length > want + 1) E(id, `needs ${want} or ${want + 1} questions (has ${qs.length})`);
    let focusCount = 0;
    qs.forEach((q, qi) => {
      const qid = `${id} q${qi + 1}`;
      if (meta.focus.indexOf(q.skill) >= 0) focusCount++;
      if (q.part !== undefined && q.part !== 'A' && q.part !== 'B') E(qid, 'part must be "A" or "B"');
      if (q.part === 'B' && (qi === 0 || qs[qi - 1].part !== 'A')) E(qid, 'Part B must directly follow a Part A question');
      if (q.part && n < 7) E(qid, 'Part A/B questions start in week 7');
      const r = checkQuestion(q, qid, { week: n, sentences, passage: s.passage, vocabWords }, E, W);
      if (r.mc) { mcAll++; if (r.longest) longAll++; }
    });
    const needFocus = boss ? 3 : 2;
    if (focusCount < needFocus) E(id, `needs at least ${needFocus} questions on the focus skill(s) (${meta.focus.join('/')}); has ${focusCount}`);
    const types = new Set(qs.map(q => q.type));
    if (n >= 3 && boss && !types.has('evidence')) W(id, 'boss session should include an evidence question');

    console.log(`  ${id}${boss ? ' BOSS' : '     '} ${String(words).padStart(4)}w  FK ${fk.toFixed(1).padStart(4)}  ${s.genre.padEnd(8)} q:${qs.length} [${qs.map(q => q.type[0] + ':' + q.skill).join(' ')}]  "${s.title}"`);
  });

  if (mcAll) {
    const share = longAll / mcAll;
    console.log(`  correct answer is the single longest option in ${longAll}/${mcAll} multiple-choice questions (${Math.round(share * 100)}%)`);
    if (share > 0.4) E('week', `answer-length cue: the correct option is the single longest in ${Math.round(share * 100)}% of mc questions (max 40%). Lengthen a distractor or tighten the key on ${Math.ceil(longAll - 0.4 * mcAll)} more questions`);
    if (share < 0.12) W('week', 'correct option is almost never the longest; aim for roughly 25-35%');
  }
  const fict = (genres.fiction || 0) + (genres.fable || 0) + (genres.poem || 0);
  const nonf = (genres.info || 0) + (genres.bio || 0) + (genres.howto || 0) + (genres.letter || 0) + (genres.opinion || 0);
  if (fict < 2 || nonf < 2) W('week', `genre balance: ${fict} literary / ${nonf} informational (want at least 2 of each)`);
  report(errs, warns);
}

function checkForm(n) {
  const errs = [], warns = [];
  const E = (id, msg) => errs.push(`[${id}] ${msg}`);
  const W = (id, msg) => warns.push(`[${id}] ${msg}`);
  console.log(`\n=== Reading Check ${n} (${n === 1 ? 'start of the program' : 'after week ' + CHECKS.after[n]}) ===`);
  const all = load('check' + n + '.js', 'RQ_CHECKS');
  const form = all && all[n];
  if (!form) { console.log('  MISSING content file'); totalErr++; return; }
  if (!Array.isArray(form.passages) || form.passages.length !== CHECKS.levels.length) { E('form', `needs exactly ${CHECKS.levels.length} passages (levels ${CHECKS.levels.map(l => l.level).join(', ')} in that order)`); report(errs, warns); return; }
  let mc = 0, longest = 0;
  form.passages.forEach((p, pi) => {
    const L = CHECKS.levels[pi], id = `check${n} L${L.level}`;
    if (p.level !== L.level) E(id, `passage ${pi + 1} must have level: ${L.level}`);
    if (!p.title) E(id, 'missing title');
    if (!GENRES[p.genre] || p.genre === 'poem') E(id, `bad genre "${p.genre}"`);
    if (!Array.isArray(p.passage) || !p.passage.length) { E(id, 'missing passage'); return; }
    const words = shared.passageWordCount(p.passage), fk = fkGrade(p.passage);
    if (words < L.words[0] || words > L.words[1]) E(id, `passage is ${words} words; allowed ${L.words[0]}-${L.words[1]}`);
    if (fk < L.fk[0] || fk > L.fk[1]) E(id, `readability FK ${fk.toFixed(1)}; allowed ${L.fk[0]}-${L.fk[1]}`);
    const sentences = shared.passageSentences(p.passage);
    const qs = p.questions || [], bp = CHECKS.blueprint[L.level];
    if (qs.length !== 5) E(id, `needs exactly 5 questions (has ${qs.length})`);
    qs.forEach((q, qi) => {
      const qid = `${id} q${qi + 1}`;
      if (bp[qi] && bp[qi].split('|').indexOf(q.skill) < 0) E(qid, `skill must be ${bp[qi]} (blueprint), got ${q.skill}`);
      if (q.skill === 'sequence' && q.type !== 'order') E(qid, 'the sequence question must be type "order"');
      if (q.skill === 'evidence' && q.type !== 'evidence') E(qid, 'the evidence question must be type "evidence" (tap the sentence)');
      if (L.level === 5 && qi === 4 && q.type !== 'multi') E(qid, 'question 5 of the level-5 passage must be type "multi" (Choose TWO)');
      if (q.part) E(qid, 'no Part A/B in Reading Checks');
      if (q.type === 'sort') E(qid, 'no sort questions in Reading Checks');
      const r = checkQuestion(q, qid, { week: L.level === 2 ? 4 : 12, sentences, passage: p.passage, test: true }, E, W);
      if (r.mc) { mc++; if (r.longest) longest++; }
    });
    console.log(`  L${L.level} ${String(words).padStart(4)}w  FK ${fk.toFixed(1).padStart(4)}  ${String(p.genre).padEnd(8)} [${qs.map(q => q.type[0] + ':' + q.skill).join(' ')}]  "${p.title}"`);
  });
  if (mc && longest / mc > 0.4) E('form', `answer-length cue: correct option is the single longest in ${longest}/${mc} mc questions (max 40%)`);
  report(errs, warns);
}

function checkFluency() {
  const errs = [], warns = [];
  const E = (id, msg) => errs.push(`[${id}] ${msg}`);
  console.log('\n=== Fluency passages (one-minute read-aloud checks) ===');
  const list = load('fluency.js', 'RQ_FLUENCY');
  if (!Array.isArray(list)) { console.log('  MISSING content file'); totalErr++; return; }
  const per = {};
  list.forEach((p, i) => {
    const id = p.id || 'fluency ' + i;
    if (!p.id || !p.title || !FLUENCY_BANDS[p.level] || !Array.isArray(p.passage)) { E(id, 'needs {id, level (2-5), title, passage[]}'); return; }
    per[p.level] = (per[p.level] || 0) + 1;
    const words = shared.passageWordCount(p.passage), fk = fkGrade(p.passage), b = FLUENCY_BANDS[p.level];
    if (words < 200 || words > 270) E(id, `passage is ${words} words; allowed 200-270`);
    if (fk < b[0] || fk > b[1]) E(id, `readability FK ${fk.toFixed(1)}; allowed ${b[0]}-${b[1]}`);
    if (p.passage.some(x => shared.isHeading(x) || x.indexOf('\n') >= 0)) E(id, 'plain paragraphs only (no headings, no line breaks)');
    console.log(`  ${id.padEnd(6)} L${p.level} ${String(words).padStart(4)}w  FK ${fk.toFixed(1).padStart(4)}  "${p.title}"`);
  });
  [2, 3, 4, 5].forEach(l => { if ((per[l] || 0) < 2) E('fluency', `needs at least 2 passages at level ${l}`); });
  report(errs, warns);
}

const args = process.argv.slice(2);
const weeks = args.map(Number).filter(Boolean);
const forms = args.map(a => (/^check([1-4])$/.exec(a) || [])[1]).filter(Boolean).map(Number);
const allMode = !args.length;
(allMode ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] : weeks).forEach(checkWeek);
(allMode ? [1, 2, 3, 4] : forms).forEach(checkForm);
if (allMode || args.indexOf('fluency') >= 0) checkFluency();
console.log(`\n${totalErr} error(s), ${totalWarn} warning(s)`);
process.exit(totalErr ? 1 : 0);
