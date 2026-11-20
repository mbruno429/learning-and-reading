#!/usr/bin/env node
/* Drives the app in headless Chromium like a child would.
   Usage: node tools/playtest.js [outDir] [lessonsToPlay] [accuracy 0..1]
   Env: START (first lesson index), VW/VH (viewport), DPR, SNAP_ALL=1, CHECKS=0 (skip the Reading Checks) */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const out = process.argv[2] || path.join(__dirname, '..', 'build', 'playtest');
const COUNT = +(process.argv[3] || 3);
const ACC = +(process.argv[4] || 1);
const W = +(process.env.VW || 412), H = +(process.env.VH || 915);
const START = +(process.env.START || 0);
const DO_CHECKS = process.env.CHECKS !== '0';
fs.mkdirSync(out, { recursive: true });
const url = 'file://' + path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www', 'index.html') + '?fast=1';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: +(process.env.DPR || 1) });
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  let shot = 0;
  const snap = async name => { await page.waitForTimeout(350); await page.screenshot({ path: path.join(out, String(++shot).padStart(2, '0') + '-' + name + '.png') }); };
  const click = sel => page.click(sel);
  const state = () => page.evaluate(() => {
    const { ss, cur } = RQ._state();
    return { step: ss.step, test: !!ss.test, fix: !!ss.fix, qIdx: ss.qIdx, done: !!(cur && cur.done), type: cur && cur.q.type, stop: ss.stop ? { done: ss.stop.done, ok: ss.stop.opts.findIndex(o => o.ok) } : null,
      prac: ss.prac ? { done: ss.prac.done, ok: ss.prac.opts.findIndex(o => o.ok) } : null, warm: ss.warm ? { kind: ss.warm.list[ss.warm.i] && ss.warm.list[ss.warm.i].kind, done: ss.warm.done, ok: (ss.warm.opts || []).findIndex(o => o.ok) } : null };
  });

  await page.goto(url);
  await snap('welcome');
  await click('[data-a=obNext]');
  await page.fill('#ob-name', 'Sam'); await click('[data-a=obNext]');
  await click('.swatch:nth-child(2)'); await click('.chip:nth-child(3)'); await snap('egg');
  await click('[data-a=obNext]'); await snap('how');
  await click('[data-a=obDone]'); await snap('map');
  await page.evaluate(() => { RQ.S.settings.dailyLimit = 0; RQ.store.save(); });

  async function answer(correct) {
    const st = await page.evaluate(() => {
      const { cur } = RQ._state(); const q = cur.q;
      return { type: q.type, opts: cur.opts && cur.opts.map(o => ({ ok: o.ok, state: o.state })), order: cur.items && q.type === 'order' ? cur.items.map(i => i.i) : null,
        sort: q.type === 'sort' ? cur.items.map((it, i) => ({ c: it.c, locked: !!cur.lockedOK[i] })) : null, ncat: q.cats ? q.cats.length : 0, answer: cur.ansKey };
    });
    if (st.type === 'mc') {
      const idx = st.opts.findIndex(o => (correct ? o.ok : !o.ok) && !o.state);
      await click(`.opt[data-i="${idx}"]`);
    } else if (st.type === 'multi') {
      const good = st.opts.map((o, i) => o.ok ? i : -1).filter(i => i >= 0), bad = st.opts.map((o, i) => o.ok ? -1 : i).filter(i => i >= 0);
      for (const i of (correct ? good : [good[0], bad[0]])) await click(`.opt[data-i="${i}"]`);
    } else if (st.type === 'order') {
      let seq = st.order.map((orig, i) => ({ orig, i })).sort((a, b) => a.orig - b.orig).map(x => x.i);
      if (!correct) seq = [seq[1], seq[0], ...seq.slice(2)];
      for (const i of seq) await click(`.bank-item[data-i="${i}"]`);
    } else if (st.type === 'sort') {
      let flipped = false;
      for (let i = 0; i < st.sort.length; i++) {
        if (st.sort[i].locked) continue;
        let c = st.sort[i].c;
        if (!correct && !flipped) { c = (c + 1) % st.ncat; flipped = true; }
        await click(`.sort-cat[data-i="${i}"][data-c="${c}"]`);
      }
    } else if (st.type === 'evidence') {
      const n = await page.evaluate(({ ans, correct }) => {
        const els = [...document.querySelectorAll('#ev-passage .sent')];
        const i = els.findIndex(e => ((e.dataset.p + ':' + e.dataset.s) === ans) === correct && !e.classList.contains('bad'));
        if (i < 0) return i;
        els[i].scrollIntoView({ block: 'center' }); els[i].click(); return i;
      }, { ans: st.answer, correct });
      if (n < 0) throw new Error('evidence sentence not found');
    }
    await click('#check-btn');
    return st.type;
  }

  // Plays whatever lesson or Reading Check is on screen until its result screen.
  async function playThrough(tag, acc, snaps) {
    const seen = {};
    const once = async name => { if (snaps && !seen[name]) { seen[name] = 1; await snap(tag + '-' + name); } };
    for (let guard = 0; guard < 220; guard++) {
      const s = await state();
      if (s.step === 'checkintro') { await once('check-intro'); await click('[data-a=checkStart]'); }
      else if (s.step === 'strategy') { await once('strategy'); await click('[data-a=strategyDone]'); }
      else if (s.step === 'practice') {
        if (!s.prac.done) { await once('practice'); await click(`.opt[data-i="${s.prac.ok}"]`); } else await click('[data-a=pracNext]');
      }
      else if (s.step === 'warmup') {
        if (!s.warm.done) { await once('warmup-' + s.warm.kind); await click(`.opt[data-i="${s.warm.ok}"]`); }
        else if (s.warm.kind === 'again') await click('[data-a=warmNext]');
        else await page.waitForTimeout(90);
      }
      else if (s.step === 'words') { await once('words'); await click('[data-a=wordNext]'); }
      else if (s.step === 'read') {
        if (s.stop && !s.stop.done) {
          await page.waitForSelector('#stop-card .opts:not(.locked)');
          await once('read-stop');
          if (Math.random() > acc) { const wrong = (s.stop.ok + 1) % 3; await click(`#stop-card .opt[data-i="${wrong}"]`); }
          await click(`#stop-card .opt[data-i="${s.stop.ok}"]`);
        } else if (s.stop && s.stop.done) await click('[data-a=stopNext]');
        else { await once('read'); await page.waitForSelector('#done-read:not([aria-disabled])'); await click('#done-read'); }
      }
      else if (s.step === 'quiz') {
        if (s.done) { await page.waitForSelector('#next-btn:not([disabled])'); await click('[data-a=nextQ]'); continue; }
        const good = Math.random() < acc;
        const t = await answer(good);
        if (s.test) continue;                                   // Reading Check: no feedback, moves on by itself
        const after = await state();
        if (good) await once('q-' + t + '-correct' + (s.fix ? '-fixit' : ''));
        else {
          await once('q-' + t + '-retry');
          if (!after.done) await answer(Math.random() < 0.5);
        }
      }
      else if (s.step === 'results' || s.step === 'checkdone') { if (snaps) { await page.waitForTimeout(600); await snap(tag + '-results'); } return; }
    }
    throw new Error('did not finish: ' + tag);
  }

  const hasChecks = await page.evaluate(() => !!window.RQ_CHECKS);
  async function maybeCheck(snaps) {
    const due = await page.evaluate(() => RQ.store.checkDue());
    if (!due) return;
    if (!DO_CHECKS) { await page.evaluate(() => { RQ.S.settings.skipChecks = true; RQ.store.save(); }); return; }
    await page.evaluate(n => RQ.startCheck(n), due);
    await playThrough('check' + due, Math.max(ACC, 0.5), snaps);
    await page.evaluate(() => RQ.show('map'));
  }
  if (START) await page.evaluate(() => { RQ.S.settings.unlockAll = true; RQ.store.save(); });
  else if (hasChecks) await maybeCheck(true);

  const order = await page.evaluate(() => RQ.order);
  for (let i = START; i < Math.min(START + COUNT, order.length); i++) {
    await page.evaluate(id => RQ.startSession(id, { fresh: true }), order[i]);
    await playThrough(order[i], ACC, i < START + 2 || !!process.env.SNAP_ALL);
    await page.evaluate(() => RQ.show('map'));
    if (!START && hasChecks) await maybeCheck(false);
  }
  await snap('map-after');
  await page.evaluate(() => RQ.show('pet')); await snap('pet');
  await page.evaluate(() => RQ.show('stickers')); await snap('stickers');
  await page.evaluate(() => RQ.show('game')); await snap('game-intro');
  if (await page.$('[data-a=gameStart]')) { await click('[data-a=gameStart]'); await snap('game-play'); }
  for (const t of ['progress', 'growth', 'plan', 'settings', 'tips']) {
    await page.evaluate(t => { RQ.show('parent'); RQ.actions.ptab({ getAttribute: () => t }); }, t); await snap('parent-' + t);
  }
  const summary = await page.evaluate(() => ({ cleared: RQ.store.clearedCount(), passed: RQ.store.passedCount(), stars: RQ.store.totalStars(), gems: RQ.S.gems, checks: Object.keys(RQ.S.checks).map(n => n + ':' + RQ.S.checks[n].right + '/15'), mode: RQ.store.supportMode(), stage: RQ.store.petStage(), words: Object.keys(RQ.S.vocab).length, missed: Object.keys(RQ.S.missed).length }));
  console.log(JSON.stringify(summary));
  console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'no page errors');
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
