#!/usr/bin/env node
/* Prints a tally of the lesson content: questions by type and skill, new-item counts. */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www', 'content');
const sb = { window: {} };
fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), sb));
const W = sb.window.RQ_WEEKS;
let q = 0, words = 0, stops = 0, practice = 0, idx = 0;
const types = {}, skills = {}, sortAt = [];
for (let n = 1; n <= 12; n++) {
  practice += (W[n].strategy.practice || []).length;
  for (const s of W[n].sessions) {
    stops += (s.stops || []).length;
    words += s.passage.join(' ').split(/\s+/).length;
    for (const x of s.questions) {
      q++; types[x.type] = (types[x.type] || 0) + 1; skills[x.skill] = (skills[x.skill] || 0) + 1;
      if (x.type === 'sort' && !sortAt.includes(idx)) sortAt.push(idx);
    }
    idx++;
  }
}
console.log('lessons', idx, '| passage words', words, '| questions', q, JSON.stringify(types));
console.log('by skill', JSON.stringify(skills));
console.log('stop-and-think checks', stops, '| guided practice items', practice, '| lessons with a sort question (index):', sortAt.join(','));
const C = sb.window.RQ_CHECKS || {};
console.log('Reading Check forms', Object.keys(C).length, '| fluency passages', (sb.window.RQ_FLUENCY || []).length);
if (process.argv[2]) {
  const s = W[+process.argv[2]].sessions.find(s => s.questions.some(x => x.type === 'sort')) || W[+process.argv[2]].sessions[0];
  console.log('\nSAMPLE', s.id, s.title, '\nPURPOSE', s.purpose, '\nSTOPS', JSON.stringify(s.stops, null, 1), '\nSORT', JSON.stringify(s.questions.find(x => x.type === 'sort') || null, null, 1), '\nPRACTICE', JSON.stringify(W[+process.argv[2]].strategy.practice, null, 1));
}
