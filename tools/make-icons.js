#!/usr/bin/env node
/* Renders the launcher icon PNGs (for Android 7.x, which has no adaptive icons). */
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7474FF"/><stop offset="1" stop-color="#4646D6"/></linearGradient></defs>
<rect x="10" y="10" width="88" height="88" rx="22" fill="url(#g)"/>
<path fill="#2F2FA8" d="M27,49 Q41,43 54,50 Q67,43 81,49 L81,80 Q67,74 54,81 Q41,74 27,80 Z"/>
<path fill="#FFFFFF" d="M29,46 Q42,40 54,47 L54,77 Q42,70 29,76 Z"/>
<path fill="#E4E7FF" d="M79,46 Q66,40 54,47 L54,77 Q66,70 79,76 Z"/>
<path stroke="#B9BEEA" stroke-width="1.6" stroke-linecap="round" fill="none" d="M34,53 Q43,49 50,53 M34,59 Q43,55 50,59 M34,65 Q43,61 50,65 M58,53 Q65,49 74,53 M58,59 Q65,55 74,59 M58,65 Q65,61 74,65"/>
<path fill="#FFC531" stroke="#E0A800" stroke-width="1" d="M54,22 L57.5,30.2 L66.4,31 L59.7,36.9 L61.7,45.6 L54,41 L46.3,45.6 L48.3,36.9 L41.6,31 L50.5,30.2 Z"/>
</svg>`;
(async () => {
  const b = await chromium.launch();
  const sizes = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
  for (const [d, px] of Object.entries(sizes)) {
    const p = await b.newPage({ viewport: { width: px, height: px } });
    await p.setContent(`<body style="margin:0;background:transparent">${svg.replace('<svg ', `<svg width="${px}" height="${px}" `)}</body>`);
    const dir = path.join(__dirname, '..', 'app', 'src', 'main', 'res', 'mipmap-' + d);
    fs.mkdirSync(dir, { recursive: true });
    await p.screenshot({ path: path.join(dir, 'ic_launcher.png'), omitBackground: true });
    await p.close();
  }
  // Web / home-screen icons
  const web = path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www', 'icons');
  fs.mkdirSync(web, { recursive: true });
  const full = svg.replace('<rect x="10" y="10" width="88" height="88" rx="22" fill="url(#g)"/>', '<rect x="0" y="0" width="108" height="108" fill="url(#g)"/>');
  for (const [name, px, art] of [['icon-192.png', 192, svg], ['icon-512.png', 512, svg], ['maskable-512.png', 512, full], ['apple-touch-icon.png', 180, full]]) {
    const pg = await b.newPage({ viewport: { width: px, height: px } });
    await pg.setContent(`<body style="margin:0;background:transparent">${art.replace('<svg ', `<svg width="${px}" height="${px}" `)}</body>`);
    await pg.screenshot({ path: path.join(web, name), omitBackground: true });
    await pg.close();
  }
  const p = await b.newPage({ viewport: { width: 512, height: 512 } });
  await p.setContent(`<body style="margin:0;background:transparent">${svg.replace('<svg ', '<svg width="512" height="512" ')}</body>`);
  fs.mkdirSync(path.join(__dirname, '..', 'build'), { recursive: true });
  await p.screenshot({ path: path.join(__dirname, '..', 'build', 'icon-512.png'), omitBackground: true });
  await b.close();
})();
