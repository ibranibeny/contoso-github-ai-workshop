/* Contoso workshop demo replays: timeline engine, mock-UI helpers and player.
   Every frame is computed from a time value, so the same timeline plays in the browser
   and renders frame-by-frame to video. */
(function () {
  'use strict';
  var W = 1280, H = 720;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function ease(p) { return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; }
  function fmt(t) { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); }

  /* ---------- syntax highlighting for mock editors ---------- */
  var KW = {
    js: 'import export from const let var function return if else for while new await async throw try catch class extends of in true false null undefined typeof default',
    yaml: 'true false null',
    sh: 'git echo npm cd export',
    json: 'true false null'
  };
  function hl(line, lang) {
    if (!lang || lang === 'none' || lang === 'md') return esc(line);
    var kw = (KW[lang] || '').split(' ');
    var cmt = (lang === 'js') ? /^\/\/.*$/ : /^#.*$/;
    var out = '', i = 0, m;
    var re = /(\/\/.*$|#.*$)|('(?:[^'\\]|\\.)*'?|"(?:[^"\\]|\\.)*"?|`(?:[^`\\]|\\.)*`?)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$-]*)/g;
    while ((m = re.exec(line))) {
      out += esc(line.slice(i, m.index));
      var tok = m[0];
      if (m[1] && cmt.test(tok)) out += '<span class="tk-c">' + esc(tok) + '</span>';
      else if (m[1]) { out += esc(tok); }
      else if (m[2]) out += '<span class="tk-s">' + esc(tok) + '</span>';
      else if (m[3]) out += '<span class="tk-n">' + esc(tok) + '</span>';
      else if (m[4]) {
        var next = line.slice(m.index + tok.length);
        if (kw.indexOf(tok) >= 0) out += '<span class="tk-k">' + esc(tok) + '</span>';
        else if (lang === 'yaml' && /^\s*:/.test(next)) out += '<span class="tk-p">' + esc(tok) + '</span>';
        else if (lang === 'json' && /^"?\s*:/.test(next)) out += '<span class="tk-p">' + esc(tok) + '</span>';
        else if (/^\s*\(/.test(next)) out += '<span class="tk-f">' + esc(tok) + '</span>';
        else out += esc(tok);
      }
      i = m.index + tok.length;
      if (tok.length === 0) re.lastIndex++;
    }
    return out + esc(line.slice(i));
  }

  /* ---------- mock UI helpers (return HTML strings) ---------- */
  var K = {};
  K.esc = esc;
  K.k = function (key) { return key ? ' data-k="' + key + '"' : ''; };
  K.code = function (src, o) {
    o = o || {};
    var lines = String(src).replace(/\n$/, '').split('\n');
    var start = o.start || 1, html = '';
    lines.forEach(function (ln, idx) {
      var n = start + idx, cls = 'cl';
      if (o.add && o.add.indexOf(n) >= 0) cls += ' add';
      if (o.del && o.del.indexOf(n) >= 0) cls += ' del';
      if (o.sel && o.sel.indexOf(n) >= 0) cls += ' sel';
      var key = o.k ? ' data-k="' + o.k + n + '"' : '';
      var hidden = (o.hide && o.hide.indexOf(n) >= 0) ? ' hid' : '';
      html += '<div class="' + cls + hidden + '"' + key + '><span class="n">' + n + '</span><span>' + (hl(ln, o.lang || 'js') || ' ') + '</span></div>';
    });
    return html;
  };
  K.tree = function (items) {
    return items.map(function (it) {
      var cls = 'f' + (it.d ? ' d' : '') + (it.i ? ' i' + it.i : '') + (it.on ? ' on' : '') + (it.n ? ' new' : '') + (it.hid ? ' hid' : '');
      return '<div class="' + cls + '"' + K.k(it.k) + '>' + (it.d ? '▾ ' : '') + esc(it.t) + '</div>';
    }).join('');
  };
  K.vscode = function (o) {
    return '<div class="w vsc' + (o.full ? ' full' : '') + '"><div class="tbar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">' + esc(o.title || 'contoso-order-desk — Visual Studio Code') + '</span></div>' +
      '<div class="vs-body"><div class="vs-act"><b class="on"></b><b></b><b></b><b></b></div>' +
      '<div class="vs-side"' + K.k(o.sideKey) + '>' + (o.side || ('<div class="sh">EXPLORER · CONTOSO-ORDER-DESK</div>' + K.tree(o.tree || []))) + '</div>' +
      '<div class="vs-main"><div class="vs-tabs"' + K.k('tabs') + '>' + (o.tabs || '<span class="on">' + esc(o.file || '') + '</span>') + '</div>' +
      '<div class="vs-ed" data-k="ed"' + (o.edScroll ? ' data-autoscroll="1"' : '') + '>' + (o.code || '') + '</div>' +
      (o.term !== undefined ? '<div class="vs-term' + (o.termHidden ? ' hid' : '') + '" data-k="term"><div class="th">TERMINAL</div><div class="tb2" data-k="tb" data-autoscroll="1">' + (o.term || '') + '</div></div>' : '') +
      '</div>' +
      (o.chat !== undefined ? '<div class="vs-chat"><div class="ch">CHAT<span class="sp"></span><span class="mode' + (o.mode === 'Agent' ? ' ag' : o.mode === 'Plan' ? ' pl' : '') + '" data-k="mode">' + esc(o.mode || 'Ask') + ' ▾</span></div>' +
        '<div class="msgs" data-k="msgs" data-autoscroll="1">' + (o.chat || '') + '</div>' +
        '<div class="inp" data-k="inbox"><span class="pi" data-k="in" style="white-space:pre-wrap">' + (o.inText ? esc(o.inText) : '') + '</span>' + (o.inText ? '' : '<span class="ph" data-k="ph">Ask Copilot or type / for commands</span>') +
        '<div class="bar"><span class="mode' + (o.mode === 'Agent' ? ' ag' : o.mode === 'Plan' ? ' pl' : '') + '" data-k="mode2">' + esc(o.mode || 'Ask') + '</span><span>Auto</span><span class="send" data-k="send">➤</span></div></div></div>' : '') +
      '</div><div class="vs-sb"><span>⎇ ' + esc(o.branch || 'main') + '</span><span>✓ 0 problems</span><span style="margin-left:auto">Copilot</span></div></div>';
  };
  K.u = function (text, key, hidden) {
    return '<div class="m u' + (hidden !== false ? ' hid' : '') + '"' + K.k(key) + '><div class="who">You</div>' + esc(text) + '</div>';
  };
  K.c = function (html, key, hidden) {
    return '<div class="m c' + (hidden !== false ? ' hid' : '') + '"' + K.k(key) + '><div class="who"><i></i>GitHub Copilot</div><div' + K.k(key ? key + 'b' : '') + '>' + html + '</div></div>';
  };
  K.file = function (name, add, del, key) {
    return '<div class="file"' + K.k(key) + '><span>' + esc(name) + '</span><span class="pl">+' + add + '</span>' + (del ? '<span class="mi">−' + del + '</span>' : '') + '</div>';
  };
  K.approve = function (cmd, key, btnKey) {
    return '<div class="appr"' + K.k(key) + '><div class="q">Run command in terminal?</div><pre>' + esc(cmd) + '</pre><span class="vbtn"' + K.k(btnKey) + '>Allow</span><span class="vbtn sec">Skip</span></div>';
  };
  K.term = function (o) {
    return '<div class="w term' + (o.full ? ' full' : '') + '"><div class="tbar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">' + esc(o.title || 'Terminal — contoso-order-desk') + '</span></div><div class="tbody" data-k="tb" data-autoscroll="1">' + (o.body || '') + '</div></div>';
  };
  K.gh = function (o) {
    var tabs = ['Code', 'Issues', 'Pull requests', 'Agents', 'Actions', 'Projects', 'Security and quality', 'Settings'];
    return '<div class="w gh' + (o.full ? ' full' : '') + '"><div class="tbar"><span class="dots"><i></i><i></i><i></i></span><span class="url">' + esc(o.url || 'github.com/contoso/contoso-order-desk') + '</span></div>' +
      (o.head !== undefined ? o.head : '<div class="gh-head"><div class="gh-top"><span class="gh-logo"></span><span>contoso</span>/<b>' + esc(o.repo || 'contoso-order-desk') + '</b><span class="pill">Private</span></div>' +
      '<div class="gh-tabs">' + tabs.map(function (t) { return '<span' + (t === o.tab ? ' class="on"' : '') + '>' + esc(t) + '</span>'; }).join('') + '</div></div>') +
      '<div class="gh-body"' + K.k('body') + (o.scroll ? ' data-autoscroll="1"' : '') + '>' + (o.body || '') + '</div></div>';
  };
  K.browser = function (o) {
    return '<div class="w br' + (o.full ? ' full' : '') + '"><div class="tbar"><span class="dots"><i></i><i></i><i></i></span><span class="url">' + esc(o.url) + '</span></div>' + (o.body || '') + '</div>';
  };
  K.title = function (o) {
    return '<div class="tc"><div class="k">' + esc(o.kicker || '') + '</div><h1>' + (o.html || esc(o.title)) + '</h1>' + (o.sub ? '<p>' + esc(o.sub) + '</p>' : '') +
      '<div class="meta">' + (o.meta || []).map(function (m) { return '<span>' + esc(m) + '</span>'; }).join('') + '</div></div>';
  };
  K.end = function (o) {
    return '<div class="tc"><div class="k">' + esc(o.kicker || 'What you saw') + '</div><h1 style="font-size:40px">' + esc(o.title) + '</h1><ul>' +
      (o.points || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
      (o.src ? '<div class="src">Sources: ' + esc(o.src) + '. Simulated walkthrough: interfaces simplified, AI output illustrative.</div>' : '') + '</div>';
  };

  /* ---------- timeline ---------- */
  var CURSOR_SVG = '<svg viewBox="0 0 24 24"><path d="M4 2l14 9-6.2 1.3L15 20l-3 1.4-3.2-7.4L4 18z" fill="#fff" stroke="#1f2328" stroke-width="1.6" stroke-linejoin="round"/></svg>';
  var MOVE = 0.75, ZOOM_T = 0.8;

  function prepare(demo) {
    if (demo._prepared) return demo;
    var t = 0;
    demo.scenes.forEach(function (sc, i) {
      sc.start = t; sc.dur = sc.dur || 6; sc.end = t + sc.dur; t = sc.end; sc.index = i;
      sc.steps = (sc.steps || []).slice().sort(function (a, b) { return a.t - b.t; });
    });
    demo.total = t;
    demo._prepared = true;
    return demo;
  }
  function sceneAt(demo, t) {
    for (var i = 0; i < demo.scenes.length; i++) if (t < demo.scenes[i].end) return demo.scenes[i];
    return demo.scenes[demo.scenes.length - 1];
  }
  function q(root, key) { return key ? root.querySelector('[data-k="' + key + '"]') : null; }
  function each(v, fn) { (Array.isArray(v) ? v : [v]).forEach(fn); }

  function Engine(stage, demo, scaleFn) {
    this.stage = stage; this.demo = prepare(demo); this.scaleFn = scaleFn || function () { return 1; };
    this.scene = stage.querySelector('.rp-scene');
    this.cap = stage.querySelector('.rp-cap');
    this.chap = stage.querySelector('.rp-chapter');
    this.fade = stage.querySelector('.rp-fade');
    this.cur = null;
    this.cache = {};
  }
  Engine.prototype.rect = function (el) {
    if (!el) return null;
    var s = this.scaleFn();
    var r = el.getBoundingClientRect(), b = this.scene.getBoundingClientRect();
    return { x: (r.left - b.left) / s, y: (r.top - b.top) / s, w: r.width / s, h: r.height / s };
  };
  Engine.prototype.center = function (key, cacheKey) {
    var r = this.rect(q(this.scene, key));
    if (r && (r.w > 0 || r.h > 0)) {
      var c = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
      if (cacheKey) this.cache[cacheKey] = c;
      return c;
    }
    return cacheKey && this.cache[cacheKey] ? { x: this.cache[cacheKey].x, y: this.cache[cacheKey].y } : null;
  };
  Engine.prototype.render = function (t) {
    var demo = this.demo; t = clamp(t, 0, demo.total - 0.001);
    var sc = sceneAt(demo, t), lt = t - sc.start, root = this.scene, self = this;
    if (this.cur !== sc) { this.cur = sc; }
    root.style.transform = 'none';
    root.innerHTML = sc.html + '<div class="rp-focus hid"></div><div class="rp-ripple hid"></div><div class="rp-cursor hid">' + CURSOR_SVG + '</div>';
    var caption = '', steps = sc.steps;
    // lines: hide children of elements that will be revealed later
    steps.forEach(function (st) {
      if (st.lines) {
        var el = q(root, st.lines); if (!el) return;
        var kids = Array.prototype.slice.call(el.children);
        var n = lt < st.t ? 0 : Math.floor(clamp((lt - st.t) / (st.dur || 1), 0, 1) * kids.length + (lt >= st.t ? 1 : 0));
        kids.forEach(function (k, i) { if (i >= n) k.classList.add('hid'); });
      }
    });
    steps.forEach(function (st) {
      if (st.t > lt) return;
      var p = lt - st.t;
      if (st.cap !== undefined) caption = st.cap;
      if (st.show) each(st.show, function (k) { var e = q(root, k); if (e) e.classList.remove('hid'); });
      if (st.hide) each(st.hide, function (k) { var e = q(root, k); if (e) e.classList.add('hid'); });
      if (st.add) { var e1 = q(root, st.el); if (e1) e1.classList.add.apply(e1.classList, st.add.split(' ')); }
      if (st.rm) { var e2 = q(root, st.el); if (e2) e2.classList.remove.apply(e2.classList, st.rm.split(' ')); }
      if (st.html !== undefined) { var e3 = q(root, st.el); if (e3) e3.innerHTML = st.html; }
      if (st.text !== undefined) { var e4 = q(root, st.el); if (e4) e4.textContent = st.text; }
      if (st.type) {
        var e5 = q(root, st.type);
        if (e5) {
          var cps = st.cps || 34, n = Math.min(st.str.length, Math.floor(p * cps) + 1);
          e5.textContent = st.str.slice(0, n);
          if (n < st.str.length || p < (st.str.length / cps) + 0.6) {
            if ((lt * 2) % 2 < 1.25) { var c = document.createElement('span'); c.className = 'caret'; e5.appendChild(c); }
          }
          var ph = q(root, st.ph || 'ph'); if (ph && (st.type === 'in' || st.ph)) ph.classList.add('hid');
        }
      }
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-autoscroll]'), function (el) { el.scrollTop = el.scrollHeight; });
    Array.prototype.forEach.call(root.querySelectorAll('.spin'), function (el) { el.style.transform = 'rotate(' + Math.round(lt * 540) % 360 + 'deg)'; });

    // cursor
    var cursorSteps = steps.filter(function (s) { return s.click || s.move; });
    var curEl = root.querySelector('.rp-cursor'), rip = root.querySelector('.rp-ripple');
    var prev = { x: 980, y: 560 }, pos = null;
    for (var i = 0; i < cursorSteps.length; i++) {
      var cs = cursorSteps[i], tgt = this.center(cs.click || cs.move, sc.index + ':' + i);
      if (!tgt) continue;
      if (cs.dx) tgt.x += cs.dx; if (cs.dy) tgt.y += cs.dy;
      var mv = cs.mv || MOVE;
      if (lt < cs.t - mv) { break; }
      if (lt < cs.t) { var pp = ease((lt - (cs.t - mv)) / mv); pos = { x: prev.x + (tgt.x - prev.x) * pp, y: prev.y + (tgt.y - prev.y) * pp }; break; }
      pos = tgt; prev = tgt;
      if (cs.click && lt - cs.t < 0.45) {
        var rp = (lt - cs.t) / 0.45, rad = 8 + 22 * rp;
        rip.classList.remove('hid');
        rip.style.left = (tgt.x - rad) + 'px'; rip.style.top = (tgt.y - rad) + 'px';
        rip.style.width = rip.style.height = (rad * 2) + 'px'; rip.style.opacity = String(1 - rp);
      }
    }
    if (pos) { curEl.classList.remove('hid'); curEl.style.left = pos.x + 'px'; curEl.style.top = pos.y + 'px'; }

    // focus ring
    var fe = root.querySelector('.rp-focus');
    steps.forEach(function (st) {
      if (st.focus && lt >= st.t && lt <= st.t + (st.dur || 2.5)) {
        var r = self.rect(q(root, st.focus)); if (!r) return;
        var pad = st.pad || 6, a = Math.min(1, (lt - st.t) / 0.3, (st.t + (st.dur || 2.5) - lt) / 0.3);
        fe.classList.remove('hid');
        fe.style.left = (r.x - pad) + 'px'; fe.style.top = (r.y - pad) + 'px';
        fe.style.width = (r.w + pad * 2) + 'px'; fe.style.height = (r.h + pad * 2) + 'px'; fe.style.opacity = String(a);
      }
    });

    // camera
    var cam = { s: 1, x: 0, y: 0 }, from = { s: 1, x: 0, y: 0 };
    steps.forEach(function (st) {
      if (st.zoom === undefined || st.t > lt) return;
      var to = { s: 1, x: 0, y: 0 };
      if (st.zoom) {
        var c = self.center(st.zoom, sc.index + ':z' + st.t);
        if (c) {
          var s = st.s || 1.6;
          to = { s: s, x: clamp(W / 2 - c.x * s, W - W * s, 0), y: clamp(H / 2 - (c.y + (st.oy || 0)) * s, H - H * s, 0) };
        }
      }
      from = cam;
      var zp = ease(clamp((lt - st.t) / ZOOM_T, 0, 1));
      cam = { s: from.s + (to.s - from.s) * zp, x: from.x + (to.x - from.x) * zp, y: from.y + (to.y - from.y) * zp };
    });
    root.style.transform = 'translate(' + cam.x + 'px,' + cam.y + 'px) scale(' + cam.s + ')';

    if (this.cap) this.cap.innerHTML = caption;
    if (this.chap) this.chap.textContent = (demo.label ? demo.label + ' · ' : '') + (sc.name || '');
    if (this.fade) this.fade.style.opacity = String(sc.index === 0 ? 0 : clamp(1 - lt / 0.35, 0, 1) * 0.85);
    return sc;
  };

  /* ---------- player ---------- */
  function stageHTML() {
    return '<div class="rp-stage"><div class="rp-scene"></div><div class="rp-fade" style="position:absolute;inset:0;background:#0b0f19;opacity:0;pointer-events:none;z-index:25"></div>' +
      '<div class="rp-badge">Simulated walkthrough</div><div class="rp-chapter"></div><div class="rp-cap"></div></div>';
  }
  function mount(container, demo, opts) {
    opts = opts || {};
    prepare(demo);
    if (opts.render) {
      container.innerHTML = stageHTML();
      var stage0 = container.querySelector('.rp-stage');
      var eng0 = new Engine(stage0, demo, function () { return 1; });
      eng0.render(0);
      return { total: demo.total, renderAt: function (t) { eng0.render(t); return true; }, chapters: chapters(demo) };
    }
    container.innerHTML = '<div class="rp-wrap"><div class="rp-viewport">' + stageHTML() + '<button class="rp-big" type="button" aria-label="Play"><span></span></button></div>' +
      '<div class="rp-ctrl"><button class="rp-btn rp-play" type="button" aria-label="Play">▶</button>' +
      '<button class="rp-btn rp-prev" type="button" aria-label="Previous chapter">⟨</button><button class="rp-btn rp-next" type="button" aria-label="Next chapter">⟩</button>' +
      '<span class="rp-time">0:00 / ' + fmt(demo.total) + '</span><div class="rp-bar" role="slider" aria-label="Seek" tabindex="0"><div class="rp-fill"></div></div>' +
      '<select class="rp-sel" aria-label="Speed"><option value="0.75">0.75×</option><option value="1" selected>1×</option><option value="1.5">1.5×</option><option value="2">2×</option></select>' +
      '<button class="rp-btn rp-fs" type="button" aria-label="Full screen">⛶</button></div><div class="rp-chaps"></div></div>';
    var wrap = container.querySelector('.rp-wrap'), vp = wrap.querySelector('.rp-viewport'), stage = wrap.querySelector('.rp-stage');
    var bar = wrap.querySelector('.rp-bar'), fill = wrap.querySelector('.rp-fill'), time = wrap.querySelector('.rp-time');
    var playBtn = wrap.querySelector('.rp-play'), big = wrap.querySelector('.rp-big'), sel = wrap.querySelector('.rp-sel'), chaps = wrap.querySelector('.rp-chaps');
    var scale = 1;
    function fit() { scale = vp.clientWidth / W; stage.style.setProperty('--rp-scale', scale); wrap.style.setProperty('--rp-scale', scale); }
    fit();
    if (window.ResizeObserver) new ResizeObserver(fit).observe(vp); else window.addEventListener('resize', fit);
    var eng = new Engine(stage, demo, function () { return scale; });
    var chapList = chapters(demo);
    chapList.forEach(function (ch) {
      var mk = document.createElement('div'); mk.className = 'rp-mark'; mk.style.left = (ch.start / demo.total * 100) + '%'; bar.appendChild(mk);
      var b = document.createElement('button'); b.type = 'button'; b.textContent = ch.name; b.addEventListener('click', function () { seek(ch.start + 0.01); if (!playing) play(); }); chaps.appendChild(b);
    });
    var t = 0, playing = false, last = 0, speed = 1, raf = 0, lastChap = -1;
    function draw() {
      var sc = eng.render(t);
      fill.style.width = (t / demo.total * 100) + '%';
      time.textContent = fmt(t) + ' / ' + fmt(demo.total);
      var ci = chapterIndex(chapList, t);
      Array.prototype.forEach.call(chaps.children, function (b, i) { b.classList.toggle('on', i === ci); });
      if (opts.onChapter && ci !== lastChap) { lastChap = ci; opts.onChapter(ci, chapList[ci]); }
    }
    function frame(now) {
      if (!playing) return;
      var dt = Math.min(0.1, (now - last) / 1000); last = now;
      t += dt * speed;
      if (t >= demo.total) { t = demo.total - 0.001; pause(); big.style.display = ''; }
      draw();
      if (playing) raf = requestAnimationFrame(frame);
    }
    function play() { if (t >= demo.total - 0.05) t = 0; playing = true; big.style.display = 'none'; playBtn.textContent = '❚❚'; playBtn.setAttribute('aria-label', 'Pause'); last = performance.now(); raf = requestAnimationFrame(frame); }
    function pause() { playing = false; cancelAnimationFrame(raf); playBtn.textContent = '▶'; playBtn.setAttribute('aria-label', 'Play'); }
    function seek(v) { t = clamp(v, 0, demo.total - 0.001); draw(); }
    playBtn.addEventListener('click', function () { playing ? pause() : play(); });
    big.addEventListener('click', play);
    sel.addEventListener('change', function () { speed = parseFloat(sel.value) || 1; });
    bar.addEventListener('click', function (e) { var r = bar.getBoundingClientRect(); seek((e.clientX - r.left) / r.width * demo.total); });
    bar.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') seek(t + 5); if (e.key === 'ArrowLeft') seek(t - 5); });
    wrap.querySelector('.rp-prev').addEventListener('click', function () { var ci = chapterIndex(chapList, t); var i = ci - (t - chapList[ci].start < 1.5 ? 1 : 0); seek(chapList[Math.max(0, i)].start + 0.01); });
    wrap.querySelector('.rp-next').addEventListener('click', function () { var ci = chapterIndex(chapList, t); var n = chapList[ci + 1]; if (n) seek(n.start + 0.01); });
    wrap.querySelector('.rp-fs').addEventListener('click', function () { if (document.fullscreenElement) document.exitFullscreen(); else if (vp.requestFullscreen) vp.requestFullscreen(); });
    vp.addEventListener('dblclick', function () { if (vp.requestFullscreen && !document.fullscreenElement) vp.requestFullscreen(); });
    document.addEventListener('fullscreenchange', fit);
    wrap.addEventListener('keydown', function (e) { if (e.key === ' ' && e.target.tagName !== 'SELECT') { e.preventDefault(); playing ? pause() : play(); } });
    seek(opts.start || 1.2);
    if (opts.autoplay) play();
    return { play: play, pause: pause, seek: function (v) { seek(v); }, chapters: chapList, total: demo.total, playChapter: function (i) { if (chapList[i]) { seek(chapList[i].start + 0.01); play(); } } };
  }
  function chapters(demo) {
    prepare(demo);
    var out = [];
    demo.scenes.forEach(function (sc) { if (sc.chapter || out.length === 0) out.push({ name: sc.chapter || sc.name, start: sc.start, key: sc.key || '' }); });
    return out;
  }
  function chapterIndex(list, t) { var i = 0; for (var j = 0; j < list.length; j++) if (t >= list[j].start - 0.001) i = j; return i; }

  window.ReplayKit = K;
  window.Replay = {
    mount: mount,
    get: function (id) { return (window.DEMOS || []).filter(function (d) { return d.id === id; })[0]; },
    list: function () { return (window.DEMOS || []).map(function (d) { prepare(d); return { id: d.id, title: d.title, session: d.session, label: d.label, total: d.total, chapters: chapters(d) }; }); },
    fmt: fmt
  };
})();
