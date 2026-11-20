#!/usr/bin/env node
/* Checks the JavaScript side of the Android bridge (read-aloud, back button, saved place, double taps) with a fake window.Android. */
const { chromium } = require('playwright');
const path = require('path');
const base = 'file://' + path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www', 'index.html');
const assert = (c, m) => { if (!c) { console.error('FAIL: ' + m); process.exitCode = 1; } else console.log('ok   ' + m); };
(async () => {
  const b = await chromium.launch();
  const mkPage = async (fastMode, android) => {
    const p = await b.newPage({ viewport: { width: 412, height: 915 } });
    p.errors = []; p.on('pageerror', e => p.errors.push(e.message));
    await p.addInitScript(android => {
      window.__spoken = []; window.__lock = null; window.__native = '';
      window.Android = {
        canSpeak: () => android !== 'mute',
        speak: (text, id, rate) => { window.__spoken.push({ text, rate }); if (android === 'dead') return; setTimeout(() => { window.RQ_ttsRange(id, 0, 4); window.RQ_ttsDone(id); if (android === 'twice') window.RQ_ttsDone(id); }, 30); },
        stopSpeaking: () => {}, setFocusLock: on => { window.__lock = on; }, isFocusLocked: () => !!window.__lock,
        saveState: j => { window.__native = j; }, loadState: () => window.__native, fontScale: () => 1.3
      };
    }, android || 'ok');
    await p.goto(base + (fastMode ? '?fast=1' : ''));
    return p;
  };
  const setup = p => p.evaluate(() => { RQ.S.profile = { name: 'Sam', petName: 'Zuzu', petColor: '#38b6ff', created: Date.now() }; RQ.S.settings.skipChecks = true; RQ.S.seenStrategy[1] = true; RQ.store.save(); RQ.show('map'); });

  let p = await mkPage(true);
  assert(await p.evaluate(() => RQ.S.settings.textSize) === 1.3, 'first run picks larger text when the device font size is large');
  assert(await p.evaluate(() => window.RQ_back()) === false, 'back on welcome screen lets Android leave the app');
  await setup(p);
  assert(await p.evaluate(() => JSON.parse(window.__native).profile.name) === 'Sam', 'every save also goes to the native copy');
  assert(await p.evaluate(() => window.RQ_back()) === false, 'back on map lets Android leave the app');
  await p.evaluate(() => RQ.show('pet'));
  assert(await p.evaluate(() => window.RQ_back()) === true && await p.evaluate(() => RQ.current.name) === 'map', 'back on pet page returns to map');
  await p.evaluate(() => RQ.startSession('w1d1'));
  await p.click('[data-a=say]'); await p.waitForTimeout(100);
  assert((await p.evaluate(() => window.__spoken.length)) === 1, 'word card speaks through the bridge');
  for (let i = 0; i < 3; i++) await p.click('[data-a=wordNext]');
  const n = await p.evaluate(() => document.querySelectorAll('#passage .sent').length);
  await p.evaluate(() => { window.__spoken = []; });
  await p.click('#listen-btn');
  await p.waitForFunction(() => document.querySelector('#listen-btn').textContent.includes('again'), null, { timeout: 15000 });
  const spoken = await p.evaluate(() => window.__spoken);
  assert(spoken.length === n && n > 2, `Listen reads the ${n} sentences shown so far, in order`);
  assert(spoken[0].rate === 0.85, 'speech rate is passed to Android');
  assert(await p.evaluate(() => document.querySelectorAll('.speaking').length) === 0, 'highlight is cleared when reading ends');
  assert(await p.evaluate(() => RQ._state().ss.usedListen) === true, 'lesson remembers that Listen was used');
  // pausing the app in the middle of Listen
  await p.evaluate(() => { window.Android.speak = (t, id) => { window.__hang = id; }; });
  await p.click('#listen-btn'); await p.waitForTimeout(50);
  await p.evaluate(() => window.RQ_pause());
  assert(await p.evaluate(() => document.querySelector('#listen-btn').textContent.includes('Listen') && !document.querySelector('.speaking')), 'pausing the app stops Listen and resets its button');
  await p.evaluate(() => window.RQ_resume());
  await p.click('#passage .vw');
  assert(await p.evaluate(() => !!document.querySelector('#modal .tip-word')), 'tapping a dotted word shows its meaning');
  assert(await p.evaluate(() => window.RQ_back()) === true && await p.evaluate(() => !document.querySelector('#modal')), 'back closes the pop-up');
  // stop-and-think, then questions, then leave and come back
  await p.waitForSelector('#stop-card .opts:not(.locked)');
  const ok = await p.evaluate(() => RQ._state().ss.stop.opts.findIndex(o => o.ok));
  await p.click(`#stop-card .opt[data-i="${(ok + 1) % 3}"]`);
  assert(await p.evaluate(() => !RQ._state().ss.stop.done && !!document.querySelector('#stop-card .fb.retry')), 'a wrong stop-and-think answer asks the child to reread');
  await p.click(`#stop-card .opt[data-i="${ok}"]`); await p.click('[data-a=stopNext]');
  await p.waitForSelector('#done-read:not([aria-disabled])'); await p.click('#done-read');
  const pick = async () => { const i = await p.evaluate(() => RQ._state().cur.opts.findIndex(o => o.ok)); await p.click(`.opt[data-i="${i}"]`); await p.click('#check-btn'); };
  await pick(); await p.click('#next-btn');
  assert(await p.evaluate(() => window.RQ_back()) === true && await p.evaluate(() => !!document.querySelector('#modal')), 'back inside a lesson asks before leaving');
  await p.click('[data-a=quitYes]');
  assert(await p.evaluate(() => RQ.S.inProgress && RQ.S.inProgress.id === 'w1d1' && RQ.S.inProgress.points.length === 1), 'leaving a lesson saves the place');
  assert(await p.evaluate(() => document.querySelector('.today').textContent.includes('Keep going')), 'the map offers to keep going');
  await p.reload();
  await p.evaluate(() => RQ.startSession('w1d1'));
  assert(await p.evaluate(() => RQ._state().ss.step === 'quiz' && RQ._state().ss.qIdx === 1), 'after restarting the app the lesson resumes at question 2');
  await p.evaluate(() => { RQ.show('parent'); RQ.actions.ptab({ getAttribute: () => 'settings' }); });
  await p.click('[data-k=focusLock][data-v=true]');
  assert(await p.evaluate(() => window.__lock) === true, 'Focus Lock setting calls Android.setFocusLock(true)');
  await p.click('[data-k=textSize][data-v="1.15"]');
  assert(await p.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--ts').trim()) === '1.15', 'text size setting applies');
  await p.click('[data-a=resetAsk]'); await p.click('[data-a=resetYes]');
  assert(await p.evaluate(() => RQ.current.name === 'welcome' && window.__lock === false && !RQ.S.profile), 'erase all progress returns to the welcome screen and releases Focus Lock');
  assert(p.errors.length === 0, 'no script errors' + (p.errors.length ? ': ' + p.errors.join('; ') : ''));
  await p.close();

  // a voice that never answers must not hang Listen forever (watchdog), and no voice hides Listen
  p = await mkPage(true, 'mute'); await setup(p);
  await p.evaluate(() => RQ.startSession('w1d1'));
  for (let i = 0; i < 3; i++) await p.click('[data-a=wordNext]');
  assert(await p.evaluate(() => !document.querySelector('#listen-btn') && !!document.querySelector('.reader-tools')), 'no speech engine: Listen is hidden but the dotted-word tip stays');
  await p.close();
  p = await mkPage(true, 'twice'); await setup(p);
  await p.evaluate(() => RQ.startSession('w1d1'));
  for (let i = 0; i < 3; i++) await p.click('[data-a=wordNext]');
  const n2 = await p.evaluate(() => document.querySelectorAll('#passage .sent').length);
  await p.click('#listen-btn');
  await p.waitForFunction(() => document.querySelector('#listen-btn').textContent.includes('again'), null, { timeout: 15000 });
  assert((await p.evaluate(() => window.__spoken.length)) === n2 && p.errors.length === 0, 'a voice that reports "done" twice does not skip sentences');
  await p.close();

  // real timing (no fast mode): double taps must not skip things
  p = await mkPage(false); await setup(p);
  await p.evaluate(() => RQ.startSession('w1d1'));
  await p.waitForTimeout(500);
  await p.dblclick('[data-a=wordNext]');
  assert(await p.evaluate(() => RQ._state().ss.wordIdx) === 1, 'a double tap on "Next word" moves one card, not two');
  await p.evaluate(() => { const s = RQ._state().ss; s.step = 'quiz'; s.readDone = true; RQ.actions.doneRead(document.body); });
  await p.waitForTimeout(400);
  const i0 = await p.evaluate(() => RQ._state().cur.opts.findIndex(o => o.ok));
  await p.click(`.opt[data-i="${i0}"]`); await p.waitForTimeout(400);
  await p.dblclick('#check-btn');
  assert(await p.evaluate(() => RQ._state().ss.qIdx === 0 && RQ._state().cur.done && !!document.querySelector('.fb.ok')), 'a double tap on Check does not skip the explanation');
  assert(p.errors.length === 0, 'no script errors with real timing' + (p.errors.length ? ': ' + p.errors.join('; ') : ''));
  await p.close();

  // leaving and coming back must never hand back a first try or count a quiz twice
  p = await mkPage(true); await setup(p);
  const toQuiz = async (id, fresh) => {
    await p.evaluate(({ id, fresh }) => RQ.startSession(id, { fresh }), { id, fresh: !!fresh });
    for (let i = 0; i < 40; i++) {
      const st = await p.evaluate(() => { const s = RQ._state().ss; return { step: s.step, stop: s.stop ? { done: s.stop.done, ok: s.stop.opts.findIndex(o => o.ok) } : null }; });
      if (st.step === 'quiz') return;
      if (st.step === 'strategy') await p.click('[data-a=strategyDone]');
      else if (st.step === 'words') await p.click('[data-a=wordNext]');
      else if (st.step === 'read') {
        if (st.stop && !st.stop.done) { await p.waitForSelector('#stop-card .opts:not(.locked)'); await p.click(`#stop-card .opt[data-i="${st.stop.ok}"]`); }
        else if (st.stop) await p.click('[data-a=stopNext]');
        else { await p.waitForSelector('#done-read:not([aria-disabled])'); await p.click('#done-read'); }
      } else await p.waitForTimeout(50);
    }
  };
  const ans = async right => {
    const st = await p.evaluate(() => { const c = RQ._state().cur; return { type: c.q.type, opts: c.opts && c.opts.map(o => ({ ok: o.ok, state: o.state })), order: c.items && c.q.type === 'order' ? c.items.map(i => i.i) : null }; });
    if (st.type === 'order') { let seq = st.order.map((o, i) => ({ o, i })).sort((x, y) => x.o - y.o).map(x => x.i); if (!right) seq = [seq[1], seq[0], ...seq.slice(2)]; for (const i of seq) await p.click(`.bank-item[data-i="${i}"]`); }
    else await p.click(`.opt[data-i="${st.opts.findIndex(o => (right ? o.ok : !o.ok) && !o.state)}"]`);
    await p.click('#check-btn');
  };
  await toQuiz('w1d2');
  await ans(true); await p.click('#next-btn');
  await ans(false);                                             // first try on question 2 is now used
  await p.reload(); await p.evaluate(() => RQ.startSession('w1d2'));
  assert(await p.evaluate(() => RQ._state().ss.qIdx === 1 && RQ._state().cur.tries === 1), 'reloading after a wrong first try does not give the first try back');
  await ans(true);
  assert(await p.evaluate(() => JSON.stringify(RQ._state().ss.points)) === '[1,0.5]', 'the question then scores as a second try');
  await p.click('#next-btn');
  for (let i = 2; i < 5; i++) { await ans(true); await p.click('#next-btn'); }
  assert(await p.evaluate(() => !!RQ._state().ss.fix && RQ._state().ss.points.length === 5), 'fix-it round starts after the last question');
  await p.reload(); await p.evaluate(() => RQ.startSession('w1d2'));
  assert(await p.evaluate(() => { const s = RQ._state().ss; return s.step === 'quiz' && !!s.fix && s.points.length === 5; }), 'reloading in the fix-it round returns to the fix-it round, not to a second quiz');
  const gems0 = await p.evaluate(() => RQ.S.gems);
  await ans(true); await p.click('#next-btn');
  const r1 = await p.evaluate(() => ({ step: RQ._state().ss.step, pts: RQ._state().ss.points.length, log: RQ.S.log.length, seen: Object.values(RQ.S.skills).reduce((a, k) => a + k.seen, 0), fixed: !!RQ._state().ss.reward.fixedAll }));
  assert(r1.step === 'results' && r1.pts === 5 && r1.log === 1 && r1.seen === 5 && r1.fixed, 'the lesson is recorded once, with 5 answers');
  // replaying for the fix-it gem pays nothing
  const g1 = await p.evaluate(() => RQ.S.gems);
  await toQuiz('w1d2', true);
  await ans(false); await ans(true); await p.click('#next-btn');
  for (let i = 1; i < 5; i++) { await ans(true); await p.click('#next-btn'); }
  await ans(true); await p.click('#next-btn');
  assert(await p.evaluate(() => RQ._state().ss.step === 'results') && await p.evaluate(() => RQ.S.gems) === g1, 'replaying a passed lesson and fixing a miss earns no gems');
  // an unfinished new lesson keeps its saved place when an old lesson is replayed
  await toQuiz('w1d3'); await ans(false); await ans(false); await p.click('#next-btn');
  await p.evaluate(() => { RQ.actions.quit(); RQ.actions.quitYes(); RQ.startSession('w1d2', { fresh: true }); RQ.actions.quit(); RQ.actions.quitYes(); });
  assert(await p.evaluate(() => RQ.S.inProgress && RQ.S.inProgress.id === 'w1d3' && RQ.S.inProgress.points.length === 1), 'replaying an old lesson does not wipe the saved place of an unfinished one');
  assert(p.errors.length === 0, 'no script errors in leave-and-resume' + (p.errors.length ? ': ' + p.errors.join('; ') : ''));
  void gems0;
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
