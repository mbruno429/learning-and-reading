#!/usr/bin/env node
/* Checks the progression rules and saved-state handling. */
const { chromium } = require('playwright');
const path = require('path');
const url = 'file://' + path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www', 'index.html') + '?fast=1';
const assert = (c, m) => { if (!c) { console.error('FAIL: ' + m); process.exitCode = 1; } else console.log('ok   ' + m); };
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  const errors = []; p.on('pageerror', e => errors.push(e.message));
  await p.goto(url);
  const r = await p.evaluate(() => {
    const st = RQ.store, out = {};
    RQ.S.profile = { name: 'T', petName: 'P', petColor: '#38b6ff', created: Date.now() };
    const res = (id, score, fr, extra) => st.recordSession(id, Object.assign({ score, firstRate: fr === undefined ? score : fr, perQ: st.get(id).data.questions.map((q, i) => ({ skill: q.skill, first: i < Math.round((fr === undefined ? score : fr) * st.get(id).data.questions.length) })), missed: [], ms: 600000, readMs: 60000, words: 130, usedListen: false }, extra || {}));
    const pad = n => (n < 10 ? '0' : '') + n, iso = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
    const daysAgo = n => iso(new Date(Date.now() - n * 86400000));
    out.count = RQ.order.length;
    out.hasChecks = !!window.RQ_CHECKS && [1, 2, 3, 4].every(n => window.RQ_CHECKS[n]);
    // Reading Check comes first for a new child
    out.checkFirst = st.checkDue() === 1 && !st.unlocked('w1d1');
    st.recordCheck(1, { levels: [{ level: 2, right: 4, total: 5 }, { level: 3, right: 3, total: 5 }, { level: 5, right: 1, total: 5 }], right: 8, total: 15, ms: 600000 });
    out.afterCheck = st.checkDue() === 0 && st.unlocked('w1d1') && st.checkLevel(RQ.S.checks[1]) === 2;
    RQ.S.weeks = {}; RQ.S.daily = { day: '', newDone: 0, gameGems: 0 };       // the check counted as today's reading; start clean
    out.lockedAtStart = !st.unlocked('w1d2');
    // pass rule: 60% of points AND half right on the first try
    const a = res('w1d1', 0.7, 0.4);
    out.halfCreditCannotPass = !a.passed && a.stars === 0;
    out.failKeepsDaily = !st.unlocked('w1d2') && !st.dailyLocked('w1d1');
    const a2 = res('w1d1', 0.5, 0.4);
    out.movedOn = a2.movedOn && st.unlocked('w1d2') && !st.passed('w1d1');
    const c = res('w1d2', 1, 1);
    out.pass = c.passed && c.stars === 3 && c.newSticker && c.solo && c.mastered;
    out.hatched = st.petStage() === 1;
    out.dailyLocked = st.dailyLocked('w1d3') && st.unlocked('w1d3');
    out.skillsOnlyFirstTry = RQ.S.skills.detail.seen === st.get('w1d1').data.questions.filter(q => q.skill === 'detail').length + st.get('w1d2').data.questions.filter(q => q.skill === 'detail').length;
    const again = res('w1d2', 1, 1);
    out.replayNoDoubleGems = again.gems === 0 && !again.newSticker && !again.solo;
    out.readingDay = st.weekDays() === 1 && a.dayNew && !c.dayNew;
    // clock moved back must not reset the daily limit
    const real = RQ.S.daily.day; RQ.S.daily.day = iso(new Date(Date.now() + 86400000)); st.rollDaily();
    out.noRollBack = RQ.S.daily.newDone === 2; RQ.S.daily.day = real;
    // next day
    RQ.S.daily.day = daysAgo(1);
    for (const w in RQ.S.vocab) RQ.S.vocab[w].due = daysAgo(1);
    out.newDayUnlocks = !st.dailyLocked('w1d3');
    out.dueWords = st.dueVocab().length;
    // missed questions come back later, only ones with a proof paragraph
    const d3 = res('w1d3', 0.8, 0.8, { missed: [0, 1] });
    out.missedSaved = Object.keys(RQ.S.missed).length === 2 && st.dueMissed().length === 0;
    for (const k in RQ.S.missed) RQ.S.missed[k].due = daysAgo(0);
    const dm = st.dueMissed(2);
    out.missedDue = dm.length === 2 && dm[0].q.type === 'mc';
    st.gradeMissed(dm[0].key, true); st.gradeMissed(dm[0].key, true);
    out.missedClears = !RQ.S.missed[dm[0].key];
    // support level from first-try results
    RQ.S.daily.newDone = 0; res('w1d4', 1, 1); RQ.S.daily.newDone = 0; res('w1d5', 1, 1);
    out.independent = st.supportMode() === 'independent';
    out.weekDone = !!st.weekCleared(1);
    RQ.S.daily.newDone = 0; res('w2d1', 0.3, 0.2); res('w2d1', 0.3, 0.2); RQ.S.daily.newDone = 0; res('w2d2', 0.3, 0.2); res('w2d2', 0.3, 0.2); RQ.S.daily.newDone = 0; res('w2d3', 0.4, 0.3);
    out.helper = st.supportMode() === 'helper';
    out.struggling = st.struggling() && st.dailyLimit() === 1;
    RQ.S.sessions['w1d1'].last = Date.now() - 3 * 86400000;
    out.comeback = st.comeback() === 'w1d1';
    out.listenFirst = st.listenFirst(5) === true;      // helper mode may always listen
    RQ.S.settings.support = 'standard';
    out.listenAfter = st.listenFirst(5) === false && st.listenFirst(2) === true;
    RQ.S.settings.support = 'auto';
    // weekly goal: 5 different days in one week
    RQ.S.weeks = {}; const wk = Object.keys((() => { st.recordCheck(9, { levels: [], right: 0, total: 0, ms: 0 }); delete RQ.S.checks[9]; return RQ.S.weeks; })())[0];
    RQ.S.weeks[wk] = ['a', 'b', 'c', 'd'].map((x, i) => daysAgo(i + 1)).filter(d => d !== st.today()).slice(0, 4);
    RQ.S.sessions['w2d3'].tries = 2; RQ.S.daily.newDone = 0;
    const g = res('w2d4', 1, 1);
    out.weekGoal = g.weekGoal && g.weekDays === 5 && st.weeksHit() === 1;
    // Reading Check 2 is due once week 4 is done, and holds week 5 until taken
    RQ.order.filter(id => st.get(id).week <= 4).forEach(id => { RQ.S.sessions[id] = { best: 1, stars: 3, tries: 1, passed: true, first: 1, last: 1 }; });
    out.check2 = st.checkDue() === 2 && !st.unlocked('w5d1');
    RQ.S.settings.skipChecks = true; out.skipChecks = st.checkDue() === 0 && st.unlocked('w5d1'); RQ.S.settings.skipChecks = false;
    // a lesson left half-way
    st.saveProgress({ id: 'w5d1', step: 'quiz', points: [1, 0.5], perQ: [{ skill: 'detail', first: true }, { skill: 'detail', first: false }], missed: [1] });
    out.progress = !!st.getProgress('w5d1') && !st.getProgress('w5d2');
    out.next = st.nextId();
    return out;
  });
  assert(r.count === 60, '60 lessons are loaded');
  assert(r.hasChecks, 'all four Reading Check forms are loaded');
  assert(r.checkFirst, 'a new child gets the Reading Check before lesson 1');
  assert(r.afterCheck, 'after the check lesson 1 opens; level is the highest with 4/5 (and 3/5 below)');
  assert(r.lockedAtStart, 'lesson 2 starts locked');
  assert(r.halfCreditCannotPass, 'second-try half credit alone cannot pass a lesson (needs half right on the first try)');
  assert(r.failKeepsDaily, 'a failed first try does not use up the daily lesson');
  assert(r.movedOn, 'after two tries the next lesson opens anyway (no sticker)');
  assert(r.pass, 'a perfect unaided lesson gives 3 stars, sticker, solo bonus and "mastered"');
  assert(r.hatched, 'the pet hatches after the first cleared lesson');
  assert(r.dailyLocked, 'the daily limit (2) holds the third lesson until tomorrow');
  assert(r.skillsOnlyFirstTry, 'only first attempts feed the skill report');
  assert(r.replayNoDoubleGems, 'replaying a 3-star lesson the same day gives no gems, sticker or solo bonus');
  assert(r.readingDay, 'the first lesson of a day counts one reading day; later ones do not');
  assert(r.noRollBack, 'turning the device clock back does not reset the daily limit');
  assert(r.newDayUnlocks, 'a new day opens the next lesson');
  assert(r.dueWords >= 3, 'words from finished lessons come back for review (' + r.dueWords + ' due)');
  assert(r.missedSaved, 'missed questions are scheduled for a later day, not the same day');
  assert(r.missedDue, 'due missed questions are offered again (multiple choice with a proof paragraph)');
  assert(r.missedClears, 'a missed question right twice, days apart, leaves the review list');
  assert(r.independent, 'three strong lessons switch support to Independent');
  assert(r.weekDone, 'week 1 counts as finished');
  assert(r.helper, 'three weak lessons switch support to Extra help');
  assert(r.struggling, 'three weak lessons in a row slow the pace to one new lesson a day');
  assert(r.comeback, 'an earlier lesson without 3 stars is offered as a comeback');
  assert(r.listenFirst && r.listenAfter, 'Listen: always for Extra help and weeks 1-2, after reading otherwise');
  assert(r.weekGoal, 'the fifth reading day in a week reaches the weekly goal');
  assert(r.check2, 'Reading Check 2 is due after week 4 and comes before week 5');
  assert(r.skipChecks, 'a parent can skip Reading Checks');
  assert(r.progress, 'a lesson left half-way is remembered');
  assert(r.next === 'w5d1', 'next lesson pointer (' + r.next + ')');

  // ---- saved state: corrupt data, older shapes, native copy ----
  const boot = async (ls, native) => {
    const pg = await b.newPage(); const errs = []; pg.on('pageerror', e => errs.push(e.message));
    await pg.addInitScript(({ ls, native }) => {
      if (ls !== null) try { localStorage.setItem('rq_state_v1', ls); } catch (e) { }
      if (native !== undefined) { window.__saved = []; window.Android = { loadState: () => native, saveState: j => window.__saved.push(j), canSpeak: () => false, speak: () => {} }; }
    }, { ls, native });
    await pg.goto(url);
    const info = await pg.evaluate(() => { try { if (RQ.S.profile) { RQ.show('pet'); RQ.show('parent'); } RQ.show(RQ.S.profile ? 'map' : 'welcome'); } catch (e) { return { err: e.message }; } return { screen: RQ.current.name, name: RQ.S.profile && RQ.S.profile.name, gems: RQ.S.gems, saved: window.__saved ? window.__saved.length : -1 }; });
    await pg.close();
    return Object.assign(info, { errs });
  };
  let s = await boot('{not json', undefined);
  assert(s.screen === 'welcome' && !s.errs.length && !s.err, 'unreadable saved data starts fresh instead of crashing');
  s = await boot('[1,2,3]', undefined);
  assert(s.screen === 'welcome' && !s.errs.length && !s.err, 'saved data of the wrong shape starts fresh');
  s = await boot(JSON.stringify({ v: 1, profile: { name: 'Old', petName: 'Zed', petColor: '#38b6ff', created: 1 }, pet: { hat: '' }, streak: { count: 2 }, settings: { sound: false }, gems: 7, sessions: {}, log: 'x' }), undefined);
  assert(s.screen === 'map' && s.name === 'Old' && s.gems === 7 && !s.errs.length && !s.err, 'saved data from the first version loads, with missing parts filled in');
  const mk = (name, savedAt) => JSON.stringify({ v: 2, profile: { name, petName: 'Zed', petColor: '#38b6ff', created: 1 }, savedAt });
  s = await boot(mk('Browser', 100), mk('Native', 200));
  assert(s.name === 'Native', 'the newer of the two saved copies wins (native copy newer)');
  s = await boot(mk('Browser', 300), mk('Native', 200));
  assert(s.name === 'Browser', 'the newer of the two saved copies wins (browser copy newer)');
  s = await boot(null, mk('Native', 200));
  assert(s.name === 'Native' && s.screen === 'map', 'progress comes back from the native copy when browser storage was wiped');
  assert(errors.length === 0, 'no script errors' + (errors.length ? ': ' + errors.join('; ') : ''));
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
