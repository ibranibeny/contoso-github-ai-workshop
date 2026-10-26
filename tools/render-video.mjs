#!/usr/bin/env node
// Render a workshop demo replay to MP4, frame by frame, with headless Chrome (DevTools protocol) and ffmpeg.
// Usage: node tools/render-video.mjs --demo live-demo --out videos/live-demo.mp4 [--poster videos/live-demo.jpg]
//        [--fps 25] [--scale 1.5] [--chrome /path/to/chrome] [--ffmpeg ffmpeg] [--frames 2,30.5] [--framesDir out/]
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
  if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : 'true']);
  return acc;
}, []));
const here = dirname(fileURLToPath(import.meta.url));
const site = resolve(args.site || join(here, '..'));
const demo = args.demo || 'live-demo';
const fps = Number(args.fps || 25);
const scale = Number(args.scale || 1.5);
const chrome = args.chrome || process.env.CHROME || 'google-chrome';
const ffmpeg = args.ffmpeg || process.env.FFMPEG || 'ffmpeg';
const port = 9300 + Math.floor(Math.random() * 500);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const WS = globalThis.WebSocket || (await import('ws')).default;

const profile = mkdtempSync(join(tmpdir(), 'rp-chrome-'));
const browser = spawn(chrome, ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--hide-scrollbars', '--mute-audio',
  '--allow-file-access-from-files', '--font-render-hinting=none', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
  '--window-size=1280,720', 'about:blank'], { stdio: ['ignore', 'ignore', 'ignore'] });

async function devtools(path) {
  for (let i = 0; i < 100; i++) {
    try { return await (await fetch(`http://127.0.0.1:${port}${path}`)).json(); } catch { await sleep(200); }
  }
  throw new Error('Chrome DevTools endpoint did not start');
}
const page = (await devtools('/json/list')).find((t) => t.type === 'page');
const ws = new WS(page.webSocketDebuggerUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
let seq = 0; const pending = new Map();
ws.onmessage = (ev) => {
  const m = JSON.parse(typeof ev.data === 'string' ? ev.data : ev.data.toString());
  if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.rej(new Error(JSON.stringify(m.error))) : p.res(m.result); }
};
const send = (method, params = {}) => new Promise((res, rej) => { const id = ++seq; pending.set(id, { res, rej }); ws.send(JSON.stringify({ id, method, params })); });
const evaluate = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails).slice(0, 400));
  return r.result.value;
};

try {
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 720, deviceScaleFactor: scale, mobile: false });
  const url = pathToFileURL(join(site, 'replay.html')).href + `?demo=${encodeURIComponent(demo)}&render=1`;
  await send('Page.navigate', { url });
  let total = 0;
  for (let i = 0; i < 100 && !total; i++) { await sleep(150); total = await evaluate('window.__rp ? window.__rp.total : 0').catch(() => 0); }
  if (!total) throw new Error(`Demo "${demo}" did not load`);
  await evaluate('document.fonts ? document.fonts.ready.then(() => true) : true');
  const shot = async (t) => {
    await evaluate(`window.__rp.renderAt(${t.toFixed(4)})`);
    const r = await send('Page.captureScreenshot', { format: 'jpeg', quality: 92, clip: { x: 0, y: 0, width: 1280, height: 720, scale: 1 } });
    return Buffer.from(r.data, 'base64');
  };

  if (args.frames) {
    const dir = resolve(args.framesDir || '.'); mkdirSync(dir, { recursive: true });
    for (const t of String(args.frames).split(',').map(Number)) {
      writeFileSync(join(dir, `${demo}-${t.toFixed(1)}.jpg`), await shot(t));
    }
    console.log(`frames written to ${dir}`);
  } else {
    if (args.poster) { mkdirSync(dirname(resolve(args.poster)), { recursive: true }); writeFileSync(resolve(args.poster), await shot(Number(args.posterAt || 1.6))); }
    const out = resolve(args.out || join(site, 'videos', `${demo}.mp4`));
    mkdirSync(dirname(out), { recursive: true });
    const enc = spawn(ffmpeg, ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
      '-c:v', 'libx264', '-preset', args.preset || 'medium', '-crf', String(args.crf || 21), '-tune', 'animation', '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((res, rej) => enc.on('close', (c) => (c === 0 ? res() : rej(new Error(`ffmpeg exited with ${c}`)))));
    const frames = Math.ceil(total * fps);
    const t0 = Date.now();
    for (let i = 0; i < frames; i++) {
      const buf = await shot(i / fps);
      if (!enc.stdin.write(buf)) await new Promise((r) => enc.stdin.once('drain', r));
      if (i % (fps * 20) === 0) console.log(`${demo}: ${Math.round((i / frames) * 100)}% (${i}/${frames}) after ${Math.round((Date.now() - t0) / 1000)} s`);
    }
    enc.stdin.end();
    await done;
    console.log(`${demo}: wrote ${out} (${frames} frames, ${total.toFixed(1)} s) in ${Math.round((Date.now() - t0) / 1000)} s`);
  }
} finally {
  try { ws.close(); } catch { /* ignore */ }
  browser.kill('SIGKILL');
}
process.exit(0);
