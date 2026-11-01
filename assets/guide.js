/* Live demo guide · developer workshop mode. No dependencies, nothing leaves the browser except the optional GitHub API lookup. */
(function () {
  'use strict';
  var dataEl = document.getElementById('lg-data');
  if (!dataEl) return;
  var D = JSON.parse(dataEl.textContent);
  var KEY = { vals: 'ldg-vals', done: 'ldg-done', ticks: 'ldg-ticks', mode: 'ldg-mode', speed: 'ldg-speed', loop: 'ldg-loop', auto: 'ldg-auto', clock: 'ldg-clock' };
  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function mmss(t) { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ':' + ('0' + (t % 60)).slice(-2); }

  var steps = D.steps, byId = {};
  steps.forEach(function (s, i) { s.i = i; byId[s.id] = s; });
  var order = ['start'].concat(steps.map(function (s) { return s.id; }));
  var pages = {};
  $$('.lg-page').forEach(function (p) { pages[p.getAttribute('data-step')] = p; });

  // ------------------------------------------------------------------ your values
  var vals = lsGet(KEY.vals, {});
  function isDef(k) { return !String(vals[k] || '').trim(); }
  function val(k) { return isDef(k) ? D.defaults[k] : String(vals[k]).trim(); }
  function applyVals() {
    $$('.lg-v').forEach(function (el) {
      var k = el.getAttribute('data-v');
      el.textContent = val(k);
      el.classList.toggle('is-default', isDef(k));
      el.title = isDef(k) ? 'Example value: set yours in "Your values" on the Start page' : '';
    });
    $$('[data-href]').forEach(function (a) {
      a.href = a.getAttribute('data-href').replace(/\{\{([A-Z_]+)\}\}/g, function (m, k) { return encodeURIComponent(val(k)); });
    });
    $$('.lg-vals input[data-k]').forEach(function (inp) {
      var k = inp.getAttribute('data-k');
      if (document.activeElement !== inp) inp.value = vals[k] || '';
      inp.placeholder = D.defaults[k];
    });
  }
  document.addEventListener('input', function (e) {
    var inp = e.target.closest && e.target.closest('.lg-vals input[data-k]');
    if (!inp) return;
    vals[inp.getAttribute('data-k')] = inp.value;
    lsSet(KEY.vals, vals);
    applyVals();
  });
  var repoUrl = $('#lg-repo-url');
  if (repoUrl) repoUrl.addEventListener('change', function () {
    var m = /github\.com[/:]([^/\s]+)\/([^/\s#?]+?)(?:\.git)?(?:[/#?].*)?$/i.exec(repoUrl.value.trim()) || /^([\w.-]+)\/([\w.-]+)$/.exec(repoUrl.value.trim());
    var msg = $('.lg-vals .msg');
    if (m) { vals.OWNER = m[1]; vals.REPO = m[2]; lsSet(KEY.vals, vals); applyVals(); say(msg, 'Owner and repository set to ' + m[1] + '/' + m[2] + '.', 'ok'); }
    else say(msg, 'That does not look like a GitHub repository URL.', 'err');
  });
  function say(el, text, cls) { if (!el) return; el.textContent = text; el.className = 'msg' + (cls ? ' ' + cls : ''); }

  // Optional: read the public repository through the GitHub REST API (no token, 60 requests an hour per IP address).
  function gh(path) {
    var api = 'https://api.github.com/repos/' + encodeURIComponent(val('OWNER')) + '/' + encodeURIComponent(val('REPO'));
    return fetch(api + path, { headers: { Accept: 'application/vnd.github+json' } }).then(function (r) {
      if (!r.ok) { var e = new Error('HTTP ' + r.status); e.status = r.status; throw e; }
      return r.json();
    });
  }
  function detect(btn) {
    var msg = $('.lg-vals .msg');
    btn.disabled = true;
    say(msg, 'Reading ' + val('OWNER') + '/' + val('REPO') + ' from GitHub…');
    var found = [];
    function put(k, v, label) { if (v === undefined || v === null || v === '') return; vals[k] = String(v); found.push(label + ' ' + (typeof v === 'number' ? '#' + v : v)); }
    gh('/pulls?state=open&per_page=100').then(function (pulls) {
      pulls.sort(function (a, b) { return b.number - a.number; });
      function head(test) { for (var i = 0; i < pulls.length; i++) if (test(pulls[i].head.ref)) return pulls[i].number; return null; }
      put('PR_XSS', head(function (h) { return h === 'demo/not-found-message'; }), 'XSS pull request');
      put('PR_DEP', head(function (h) { return h === 'demo/add-date-helper'; }), 'dependency pull request');
      put('PR_PAGE', head(function (h) { return h.indexOf('copilot/') === 0; }) || head(function (h) { return h === 'fallback/agent-lookup-page'; }), 'page pull request');
      put('PR_API', head(function (h) { return !/^(demo\/|copilot\/)/.test(h) && h !== 'fallback/agent-lookup-page' && h !== 'solution'; }), 'API pull request');
      return gh('/issues?state=open&per_page=30');
    }).then(function (items) {
      var issues = items.filter(function (i) { return !i.pull_request; }).slice(0, 8);
      var i = 0;
      function next() {
        if (i >= issues.length) return null;
        var cand = issues[i++];
        return gh('/issues/' + cand.number + '/sub_issues?per_page=50').then(function (subs) {
          if (!subs.length) return next();
          put('I_PARENT', cand.number, 'feature issue');
          var left = subs.slice();
          function take(re) { for (var j = 0; j < left.length; j++) if (re.test(left[j].title)) return left.splice(j, 1)[0].number; return null; }
          var audit = take(/audit/i), api = take(/\bapi\b|endpoint/i), page = take(/page|lookup screen|\bui\b|front/i);
          put('I_API', api || (left[0] && left.shift().number), 'API sub-issue');
          put('I_PAGE', page || (left[0] && left.shift().number), 'page sub-issue');
          put('I_AUDIT', audit || (left[0] && left.shift().number), 'audit sub-issue');
          return null;
        }, function () { return next(); });
      }
      return next();
    }).then(function () {
      return gh('/environments/production').then(function (env) {
        var r = [];
        (env.protection_rules || []).forEach(function (p) { (p.reviewers || []).forEach(function (x) { if (x.reviewer) r.push(x.reviewer.login || x.reviewer.slug); }); });
        if (r[0]) put('APPROVER', r[0], 'approver');
      }, function () { /* no environment yet */ });
    }).then(function () {
      return gh('/deployments?environment=production&per_page=1').then(function (deps) {
        if (!deps.length) return null;
        return gh('/deployments/' + deps[0].id + '/statuses?per_page=10').then(function (st) {
          for (var k = 0; k < st.length; k++) {
            var m = /^https:\/\/([a-z0-9-]+)\.azurewebsites\.net/i.exec(st[k].environment_url || '');
            if (m) { put('APP', m[1], 'web app'); break; }
          }
        });
      }, function () { /* no deployments yet */ });
    }).then(function () {
      lsSet(KEY.vals, vals); applyVals();
      say(msg, found.length ? 'Found: ' + found.join(', ') + '.' : 'Nothing found yet: run the preparation steps first, or enter the values by hand.', found.length ? 'ok' : '');
    }).catch(function (e) {
      say(msg, e.status === 404 ? 'GitHub returned 404: the repository is private or the name is wrong. Enter the values by hand.' :
        e.status === 403 ? 'GitHub rate limit reached (60 requests an hour without a token). Try again later or enter the values by hand.' :
        'Could not reach GitHub (' + e.message + '). Enter the values by hand.', 'err');
    }).then(function () { btn.disabled = false; });
  }

  // ------------------------------------------------------------------ progress
  var done = lsGet(KEY.done, {}), ticks = lsGet(KEY.ticks, {});
  function renderDone() {
    var n = 0;
    steps.forEach(function (s) {
      var li = $('.lg-nav li[data-step="' + s.id + '"]');
      if (li) li.classList.toggle('done', !!done[s.id]);
      if (done[s.id]) n++;
    });
    var bar = $('.lg-progress .bar span'); if (bar) bar.style.inlineSize = Math.round(100 * n / steps.length) + '%';
    var tx = $('.lg-progress .txt'); if (tx) tx.textContent = n + ' of ' + steps.length + ' done';
    $$('[data-a="done-next"]').forEach(function (b) {
      var id = b.closest('.lg-page').getAttribute('data-step');
      b.textContent = done[id] ? 'Done ✓ · continue →' : 'Mark done and continue →';
    });
    $$('.lg-do > li[data-tick]').forEach(function (li) {
      var on = !!ticks[li.getAttribute('data-tick')];
      li.classList.toggle('ticked', on);
      var cb = $('input', li); if (cb) cb.checked = on;
    });
  }
  document.addEventListener('change', function (e) {
    var cb = e.target.closest && e.target.closest('.lg-do .tick input');
    if (cb) { var li = cb.closest('li'); var k = li.getAttribute('data-tick'); if (cb.checked) ticks[k] = 1; else delete ticks[k]; lsSet(KEY.ticks, ticks); renderDone(); }
  });

  // ------------------------------------------------------------------ mode
  var mode = lsGet(KEY.mode, 'presenter');
  function setMode(m) {
    mode = m === 'handson' ? 'handson' : 'presenter';
    lsSet(KEY.mode, mode);
    document.body.classList.toggle('mode-handson', mode === 'handson');
    document.body.classList.toggle('mode-presenter', mode === 'presenter');
    $$('[data-mode]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === mode)); });
    $$('details.lg-deep').forEach(function (d) { d.open = mode === 'handson'; });
  }

  // ------------------------------------------------------------------ demo clock
  var clock = lsGet(KEY.clock, { start: null, acc: 0 });
  function elapsed() { return clock.acc + (clock.start ? Date.now() - clock.start : 0); }
  function drawClock() {
    var box = $('.lg-clock'); if (!box) return;
    var ms = elapsed(); $('.tv', box).textContent = mmss(ms / 1000);
    $('[data-a="clock"]', box).textContent = clock.start ? 'Pause' : (ms ? 'Resume' : 'Start');
    var s = byId[cur], m = s && /^(\d+)\s*[–-]\s*(\d+)/.exec(s.minutes || '');
    box.classList.remove('ok', 'late', 'early');
    var tg = $('.tg', box);
    if (m && s.act !== 'prep' && s.act !== 'after') {
      var min = ms / 60000, lo = +m[1], hi = +m[2];
      tg.textContent = 'This step: minute ' + lo + '–' + hi;
      if (ms) box.classList.add(min < lo ? 'early' : min <= hi ? 'ok' : 'late');
    } else tg.textContent = 'Demo clock · 60 minutes';
  }
  setInterval(function () { if (clock.start) drawClock(); }, 1000);

  // ------------------------------------------------------------------ video
  var V = document.createElement('video');
  V.controls = true; V.preload = 'metadata'; V.muted = true; V.playsInline = true; V.setAttribute('playsinline', '');
  var wrap = document.createElement('div'); wrap.className = 'lg-vwrap'; wrap.appendChild(V);
  var endOv = document.createElement('div'); endOv.className = 'lg-vend';
  endOv.innerHTML = '<div>End of this step\'s clip</div><div class="r"><button type="button" data-a="replay">↺ Replay</button><button type="button" class="pri" data-a="next">Next step →</button></div>';
  wrap.appendChild(endOv);
  var clip = null, free = false, prog = false, tok = 0;
  var speed = lsGet(KEY.speed, 1), loop = lsGet(KEY.loop, false), auto = lsGet(KEY.auto, false);
  function seek(t) { prog = true; try { V.currentTime = t; } catch (e) { prog = false; } }
  function syncCtl() {
    $$('select[data-a="speed"]').forEach(function (s) { s.value = String(speed); });
    $$('input[data-a="loop"]').forEach(function (c) { c.checked = !!loop; });
    $$('input[data-a="auto"]').forEach(function (c) { c.checked = !!auto; });
  }
  function loadClip(s) {
    endOv.classList.remove('on'); free = false;
    clip = { start: s.start, end: s.end };
    var src = D.videos[s.src], my = ++tok;
    var err = $('.lg-verr', pages[s.id]); if (err) err.hidden = true;
    if (V.getAttribute('src') !== src.mp4) { V.setAttribute('poster', src.poster); V.setAttribute('src', src.mp4); V.load(); }
    function ready() { if (my !== tok) return; V.playbackRate = speed; seek(clip.start); if (auto) V.play().catch(function () {}); }
    if (V.readyState >= 1) ready(); else V.addEventListener('loadedmetadata', function once() { V.removeEventListener('loadedmetadata', once); ready(); });
  }
  V.addEventListener('timeupdate', function () {
    if (!clip) return;
    var t = V.currentTime;
    if (!free && !V.paused && t >= clip.end - 0.06) {
      if (loop) { seek(clip.start); } else { V.pause(); endOv.classList.add('on'); }
    }
    hiCap(t);
  });
  V.addEventListener('seeking', function () {
    if (prog) { prog = false; return; }
    endOv.classList.remove('on');
    if (clip && (V.currentTime < clip.start - 0.4 || V.currentTime > clip.end + 0.4)) free = true;
  });
  V.addEventListener('play', function () {
    endOv.classList.remove('on');
    if (clip && !free && (V.currentTime >= clip.end - 0.1 || V.currentTime < clip.start - 0.4)) seek(clip.start);
  });
  V.addEventListener('ended', function () { endOv.classList.add('on'); });
  V.addEventListener('error', function () {
    var p = pages[cur]; var err = p && $('.lg-verr', p); if (err) err.hidden = false;
  });
  function hiCap(t) {
    var list = pages[cur] && $('.lg-tx', pages[cur]); if (!list) return;
    var items = $$('li', list), on = null;
    items.forEach(function (li) { if (+li.getAttribute('data-t') <= t + 0.05) on = li; });
    items.forEach(function (li) { li.classList.toggle('on', li === on); });
    if (on && !V.paused) {
      var top = on.offsetTop - list.offsetTop;
      if (top < list.scrollTop || top + on.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = Math.max(0, top - 40);
    }
  }
  function playToggle() {
    if (!clip) return;
    if (V.paused) {
      if (free) { free = false; seek(clip.start); }
      else if (V.currentTime < clip.start - 0.4 || V.currentTime >= clip.end - 0.1) seek(clip.start);
      V.play().catch(function () {});
    } else V.pause();
  }

  // ------------------------------------------------------------------ navigation
  var cur = null;
  function fromHash() { var h = decodeURIComponent(location.hash.replace(/^#/, '')); if (h.indexOf('step-') === 0) h = h.slice(5); return pages[h] ? h : 'start'; }
  function go(id) {
    if (!pages[id]) id = 'start';
    if (cur === id) return;
    if (cur) pages[cur].hidden = true;
    pages[id].hidden = false; cur = id;
    $$('[data-nav]').forEach(function (a) { if (a.getAttribute('data-nav') === id) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current'); });
    var s = byId[id];
    $$('.lg-ch').forEach(function (c) { c.classList.toggle('cur', !!s && c.getAttribute('data-act') === s.act); });
    document.title = (s ? s.num + ' · ' + s.title : 'Live demo, step by step') + ' · Contoso × GitHub Workshop';
    if (s) { var slot = $('.lg-vslot', pages[id]); if (slot) { slot.appendChild(wrap); loadClip(s); } }
    else { V.pause(); clip = null; }
    $$('details.lg-deep', pages[id]).forEach(function (d) { d.open = mode === 'handson'; });
    window.scrollTo(0, 0);
    var h1 = $('h1', pages[id]); if (h1) h1.focus({ preventScroll: true });
    var rail = $('.lg-rail'); if (rail) rail.classList.remove('open');
    var link = rail && $('[data-nav="' + id + '"]', rail);
    if (rail && link) { var top = link.getBoundingClientRect().top - rail.getBoundingClientRect().top + rail.scrollTop; if (top < rail.scrollTop + 120 || top > rail.scrollTop + rail.clientHeight - 80) rail.scrollTop = Math.max(0, top - rail.clientHeight / 3); }
    drawClock();
  }
  function step(d) { var i = order.indexOf(cur) + d; if (i >= 0 && i < order.length) location.hash = order[i] === 'start' ? '#start' : '#step-' + order[i]; }
  window.addEventListener('hashchange', function () { go(fromHash()); });

  // ------------------------------------------------------------------ clicks
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-a],[data-mode]');
    if (!b) return;
    if (b.hasAttribute('data-mode')) { setMode(b.getAttribute('data-mode')); return; }
    var a = b.getAttribute('data-a');
    if (a === 'play') playToggle();
    else if (a === 'replay') { free = false; endOv.classList.remove('on'); seek(clip.start); V.play().catch(function () {}); }
    else if (a === 'next') step(1);
    else if (a === 'prev') step(-1);
    else if (a === 'done-next') { done[cur] = 1; lsSet(KEY.done, done); renderDone(); step(1); }
    else if (a === 'undone') { delete done[cur]; lsSet(KEY.done, done); renderDone(); }
    else if (a === 'seek') { if (!clip) return; free = false; endOv.classList.remove('on'); seek(+b.getAttribute('data-t')); V.play().catch(function () {}); }
    else if (a === 'copy') copy(b);
    else if (a === 'clock') { if (clock.start) { clock.acc += Date.now() - clock.start; clock.start = null; } else clock.start = Date.now(); lsSet(KEY.clock, clock); drawClock(); }
    else if (a === 'clock-reset') { clock = { start: null, acc: 0 }; lsSet(KEY.clock, clock); drawClock(); }
    else if (a === 'detect') detect(b);
    else if (a === 'vals-reset') { vals = {}; lsSet(KEY.vals, vals); applyVals(); say($('.lg-vals .msg'), 'Back to the example values.'); }
    else if (a === 'progress-reset') { done = {}; ticks = {}; lsSet(KEY.done, done); lsSet(KEY.ticks, ticks); renderDone(); }
    else if (a === 'help') $('.lg-help').classList.toggle('on');
    else if (a === 'rail') $('.lg-rail').classList.toggle('open');
    else if (a === 'print') { $$('details.lg-deep').forEach(function (d) { d.open = true; }); window.print(); }
  });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.matches && t.matches('select[data-a="speed"]')) { speed = +t.value || 1; V.playbackRate = speed; lsSet(KEY.speed, speed); syncCtl(); }
    else if (t.matches && t.matches('input[data-a="loop"]')) { loop = t.checked; lsSet(KEY.loop, loop); syncCtl(); }
    else if (t.matches && t.matches('input[data-a="auto"]')) { auto = t.checked; lsSet(KEY.auto, auto); syncCtl(); }
  });
  function copy(btn) {
    var code = btn.closest('.lg-code').querySelector('pre code');
    var text = code.innerText.replace(/\u00a0/g, ' ');
    function ok() { btn.textContent = 'Copied'; btn.classList.add('ok'); setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('ok'); }, 1400); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback); else fallback();
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) { /* ignore */ } document.body.removeChild(ta);
    }
  }

  // ------------------------------------------------------------------ keyboard
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var t = e.target, tag = t && t.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'VIDEO' || (t && t.isContentEditable)) return;
    var k = e.key;
    if (k === 'j' || k === 'ArrowRight') { step(1); e.preventDefault(); }
    else if (k === 'k' || k === 'ArrowLeft') { step(-1); e.preventDefault(); }
    else if (k === ' ' && byId[cur] && tag !== 'BUTTON' && tag !== 'A') { playToggle(); e.preventDefault(); }
    else if (k === 'r' && byId[cur]) { free = false; seek(clip.start); V.play().catch(function () {}); }
    else if (k === 'd' && byId[cur]) { if (done[cur]) delete done[cur]; else done[cur] = 1; lsSet(KEY.done, done); renderDone(); }
    else if (k === '?') $('.lg-help').classList.toggle('on');
    else if (k === 'Escape') { $('.lg-help').classList.remove('on'); $('.lg-rail').classList.remove('open'); }
  });

  // ------------------------------------------------------------------ start
  $$('.lg-page').forEach(function (p) { p.hidden = true; });
  applyVals(); renderDone(); syncCtl(); setMode(mode);
  go(fromHash());
})();
