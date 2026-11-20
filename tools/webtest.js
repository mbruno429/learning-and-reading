#!/usr/bin/env node
/* Checks the hosted (browser) version: served over http from a sub-path like GitHub Pages, offline after first load, backup and restore. */
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const WWW = path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www');
const BASE = '/learning-and-reading/';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json' };
const assert = (c, m) => { if (!c) { console.error('FAIL: ' + m); process.exitCode = 1; } else console.log('ok   ' + m); };
(async () => {
  let online = true;
  const server = http.createServer((req, res) => {
    if (!online) { req.socket.destroy(); return; }
    let u = decodeURIComponent(req.url.split('?')[0]);
    if (u.indexOf(BASE) !== 0) { res.writeHead(404); res.end(); return; }
    u = u.slice(BASE.length) || 'index.html';
    const f = path.join(WWW, u);
    if (f.indexOf(WWW) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end('nope'); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); res.end(fs.readFileSync(f));
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const url = 'http://127.0.0.1:' + server.address().port + BASE;
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 412, height: 915 }, acceptDownloads: true });
  const p = await ctx.newPage();
  const errors = [], missing = [];
  p.on('pageerror', e => errors.push(e.message));
  p.on('response', r => { if (r.status() >= 400) missing.push(r.url()); });
  await p.goto(url + '?fast=1');
  assert(await p.evaluate(() => RQ.isWeb === true && RQ.current.name === 'welcome'), 'the hosted page boots from a sub-path');
  assert(missing.length === 0, 'every file loads (no 404s)' + (missing.length ? ': ' + missing.join(', ') : ''));
  const man = await p.evaluate(async () => { const r = await fetch(document.querySelector('link[rel=manifest]').href); const m = await r.json(); const icons = await Promise.all(m.icons.map(i => fetch(new URL(i.src, r.url)).then(x => x.ok))); return { name: m.name, display: m.display, start: m.start_url, icons }; });
  assert(man.name === 'Reading Quest' && man.display === 'standalone' && man.start === './' && man.icons.every(Boolean), 'home-screen manifest and its icons are served');
  await p.evaluate(() => navigator.serviceWorker.ready);
  await p.waitForFunction(() => navigator.serviceWorker.controller !== null, null, { timeout: 15000 });
  const cached = await p.evaluate(async () => { const k = (await caches.keys()).filter(x => x.indexOf('rq-') === 0); const c = await caches.open(k[0]); return (await c.keys()).length; });
  assert(cached > 30, 'the offline cache holds the whole app (' + cached + ' files)');
  // make some progress, then go offline and reload
  await p.evaluate(() => { RQ.S.profile = { name: 'Sam', petName: 'Zuzu', petColor: '#38b6ff', created: Date.now() }; RQ.S.settings.skipChecks = true; RQ.S.gems = 42; RQ.store.save(); });
  online = false;
  await p.reload();
  assert(await p.evaluate(() => RQ.current.name === 'map' && RQ.S.gems === 42 && !!window.RQ_WEEKS[12] && !!window.RQ_CHECKS[4]), 'with the network gone the app still opens, with progress and all lessons');
  await p.evaluate(() => RQ.startSession('w1d1'));
  assert(await p.evaluate(() => RQ._state().ss.step === 'strategy'), 'a lesson starts offline');
  // browser back inside a lesson asks before leaving, and does not leave the site
  await p.goBack().catch(() => {});
  await p.waitForTimeout(300);
  assert(await p.evaluate(() => !!document.querySelector('#modal') && location.pathname.indexOf('/learning-and-reading/') === 0), 'the browser back button inside a lesson asks first and stays on the site');
  await p.evaluate(() => { RQ.closeModal(); RQ.show('parent'); RQ.actions.ptab({ getAttribute: () => 'settings' }); });
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('[data-a=backupSave]')]);
  const file = await dl.path(), name = dl.suggestedFilename();
  const saved = JSON.parse(fs.readFileSync(file, 'utf8'));
  assert(/^reading-quest-Sam-\d{4}-\d\d-\d\d\.json$/.test(name) && saved.gems === 42 && saved.profile.name === 'Sam', 'backup file downloads with the progress in it (' + name + ')');
  // wipe, then restore from the file
  await p.evaluate(() => { RQ.store.reset(); RQ.S.profile = { name: 'New', petName: 'Pip', petColor: '#ff7a59', created: Date.now() }; RQ.store.save(); RQ.show('parent'); RQ.actions.ptab({ getAttribute: () => 'settings' }); });
  await p.setInputFiles('#backup-file', file);
  await p.waitForSelector('[data-a=backupRestore]');
  assert(await p.evaluate(() => document.querySelector('#modal').textContent.includes('Sam')), 'restore shows whose backup it is before replacing anything');
  await p.click('[data-a=backupRestore]');
  assert(await p.evaluate(() => RQ.S.profile.name === 'Sam' && RQ.S.gems === 42 && JSON.parse(localStorage.getItem('rq_state_v1')).gems === 42), 'restore brings the progress back and saves it');
  const bad = path.join(require('os').tmpdir(), 'rq-bad-' + process.pid + '.json'); fs.writeFileSync(bad, '{"hello":1}');
  await p.evaluate(() => { RQ.show('parent'); RQ.actions.ptab({ getAttribute: () => 'settings' }); });
  await p.setInputFiles('#backup-file', bad); await p.waitForTimeout(300);
  assert(await p.evaluate(() => !document.querySelector('#modal') && RQ.S.profile.name === 'Sam'), 'a file that is not a backup is refused');
  assert(errors.length === 0, 'no script errors' + (errors.length ? ': ' + errors.join('; ') : ''));
  await b.close(); server.close();
})().catch(e => { console.error(e); process.exit(1); });
