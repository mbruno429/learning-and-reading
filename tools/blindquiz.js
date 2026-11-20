#!/usr/bin/env node
/* Prints a week's passages and questions WITHOUT the answer key (options shuffled), for blind review.
   Usage: node tools/blindquiz.js <week>          -> the quiz
          node tools/blindquiz.js <week> --key    -> the answer key, hints and explanations */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const WWW = path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www');
const arg = process.argv[2], showKey = process.argv.includes('--key');
const isCheck = /^check[1-4]$/.test(arg || ''), n = isCheck ? +arg.slice(5) : +arg;
const sb = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(WWW, 'content', isCheck ? arg + '.js' : 'week' + String(n).padStart(2, '0') + '.js'), 'utf8'), sb);
const wk = isCheck
  ? { sessions: sb.window.RQ_CHECKS[n].passages.map(p => ({ id: 'check' + n + 'L' + p.level, title: p.title, genre: p.genre, vocab: [], passage: p.passage, questions: p.questions, talk: '(Reading Check: no help, no pre-taught words)' })) }
  : sb.window.RQ_WEEKS[n];
function rng(seed) { let s = 2166136261; for (const c of seed) s = Math.imul(s ^ c.charCodeAt(0), 16777619) >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function shuffle(arr, seed) { const r = rng(seed), a = arr.map((v, i) => ({ v, i })); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const L = 'ABCDE';
function mini(label, m, seed) {
  const sh = shuffle(m.options, seed);
  if (showKey) console.log(`${label} KEY: ${L[sh.findIndex(o => o.i === 0)]} | ${m.say || m.why || ''}`);
  else { console.log(`\n${label} ${m.text ? 'TEXT: ' + m.text + '\n   ' : ''}${m.q}`); sh.forEach((o, k) => console.log(`   ${L[k]}) ${o.v}`)); }
}
if (wk.strategy && wk.strategy.practice) wk.strategy.practice.forEach((p, i) => mini(`GUIDED PRACTICE ${i + 1}`, p, 'prac' + n + i));
if (wk.strategy && !showKey) console.log(`STRATEGY LESSON: ${wk.strategy.name} — ${wk.strategy.tagline}\n  steps: ${wk.strategy.steps.join(' | ')}\n  example: ${wk.strategy.example.text} Q: ${wk.strategy.example.q} A: ${wk.strategy.example.a}`);
wk.sessions.forEach(s => {
  console.log(`\n================ ${s.id}${s.boss ? ' (BOSS)' : ''}: ${s.title} [${s.genre}] ================`);
  if (!showKey) {
    console.log('VOCAB: ' + s.vocab.map(v => `${v.word} = ${v.def} (e.g. ${v.ex})`).join(' | '));
    s.passage.forEach((p, i) => console.log(`[p${i}] ${p}`));
    console.log('TALK: ' + s.talk);
    if (s.purpose) console.log('PURPOSE LINE: ' + s.purpose);
  }
  (s.stops || []).forEach((x, i) => mini(`STOP-AND-THINK ${i + 1} (shown after [p${x.after}], before the rest is revealed)`, x, s.id + 'stop' + i));
  s.questions.forEach((q, qi) => {
    const tag = `Q${qi + 1} [${q.type}/${q.skill}${q.part ? '/part ' + q.part : ''}]`;
    if (q.type === 'mc' || q.type === 'multi') {
      const sh = shuffle(q.options, s.id + qi);
      const correct = sh.map((o, k) => (q.type === 'mc' ? o.i === 0 : o.i < q.correct) ? L[k] : '').join('');
      if (showKey) console.log(`${tag} KEY: ${correct} | hint: ${q.hint} | why: ${q.why}${q.para !== undefined ? ' | para p' + q.para : ''}`);
      else { console.log(`\n${tag} ${q.q}`); sh.forEach((o, k) => console.log(`   ${L[k]}) ${o.v}`)); }
    } else if (q.type === 'order') {
      const sh = shuffle(q.items, s.id + qi);
      if (showKey) console.log(`${tag} KEY: ${q.items.map(it => L[sh.findIndex(o => o.v === it)]).join(' > ')} | hint: ${q.hint} | why: ${q.why}`);
      else { console.log(`\n${tag} ${q.q}`); sh.forEach((o, k) => console.log(`   ${L[k]}) ${o.v}`)); }
    } else if (q.type === 'sort') {
      const sh = shuffle(q.items, s.id + qi);
      if (showKey) console.log(`${tag} KEY: ${sh.map((o, k) => L[k] + '=' + q.cats[o.v.c]).join(', ')} | hint: ${q.hint} | why: ${q.why}`);
      else { console.log(`\n${tag} ${q.q}\n   Sort each into: ${q.cats.join(' / ')}`); sh.forEach((o, k) => console.log(`   ${L[k]}) ${o.v.t}`)); }
    } else if (q.type === 'evidence') {
      if (showKey) console.log(`${tag} KEY: "${q.answer}" | hint: ${q.hint} | why: ${q.why}`);
      else console.log(`\n${tag} ${q.q}\n   (answer by quoting ONE sentence from the passage)`);
    }
  });
});
