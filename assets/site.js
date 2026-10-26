/* Contoso × GitHub workshop: shared page behaviour (no dependencies). */
(function () {
  'use strict';
  var d = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* storage blocked */ } }
  };
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function fmt(s) {
    s = Math.max(0, Math.floor(s));
    return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
  }
  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  /* ---------- facilitator notes toggle ---------- */
  function facToggle() {
    var b = $('.fac-toggle');
    if (!b) return;
    function label() {
      var off = d.classList.contains('fac-off');
      b.setAttribute('aria-pressed', off ? 'false' : 'true');
      $('.lbl', b).textContent = off ? 'Facilitator notes: off' : 'Facilitator notes: on';
    }
    label();
    b.addEventListener('click', function () {
      d.classList.toggle('fac-off');
      store.set('contoso-ws-fac', d.classList.contains('fac-off') ? 'off' : 'on');
      label();
    });
  }

  /* ---------- copy buttons on code blocks ---------- */
  function copyButtons() {
    $$('figure.code').forEach(function (f) {
      var cap = $('figcaption', f), pre = $('pre', f);
      if (!cap || !pre) return;
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'copy'; btn.textContent = 'Copy';
      btn.addEventListener('click', function () {
        var p = (navigator.clipboard && navigator.clipboard.writeText) ? navigator.clipboard.writeText(pre.innerText) : Promise.reject(new Error('no clipboard'));
        p.then(function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1500); },
          function () { btn.textContent = 'Copy failed'; });
      });
      cap.appendChild(btn);
    });
  }

  /* ---------- persistent checklists ---------- */
  function checklists() {
    $$('.check input[type=checkbox][data-k]').forEach(function (cb) {
      var k = 'contoso-ws-ck-' + cb.getAttribute('data-k');
      if (store.get(k) === '1') cb.checked = true;
      function upd() { var li = cb.closest('li'); if (li) li.classList.toggle('done', cb.checked); }
      upd();
      cb.addEventListener('change', function () { store.set(k, cb.checked ? '1' : '0'); upd(); });
    });
  }

  /* ---------- demo videos ---------- */
  var players = {};
  function videos() {
    $$('.vdemo').forEach(function (sec) {
      var id = sec.getAttribute('data-demo');
      var box = $('.vd-player', sec);
      var v = $('video', sec);
      var btns = $$('.vd-ch button[data-t]', sec);
      var marks = $$('[data-seek^="' + id + '@"]');
      var api = { section: sec, video: v, fallback: false };
      players[id] = api;

      function current(t) {
        var idx = -1;
        btns.forEach(function (b, i) { if (t + 0.05 >= parseFloat(b.getAttribute('data-t'))) idx = i; });
        btns.forEach(function (b, i) { b.setAttribute('aria-current', i === idx ? 'true' : 'false'); });
        var chap = idx >= 0 ? btns[idx].getAttribute('data-t') : null;
        marks.forEach(function (m) { m.classList.toggle('playing', chap !== null && m.getAttribute('data-seek') === id + '@' + chap && api.active); });
      }
      function toFallback() {
        if (api.fallback) return;
        api.fallback = true;
        box.innerHTML = '<iframe title="' + esc(sec.getAttribute('data-title') || 'Demo replay') + '" src="replay.html?demo=' + encodeURIComponent(id) + '&amp;embed=1" allow="fullscreen" allowfullscreen></iframe>';
        var note = $('.vd-note', sec);
        if (note) note.textContent = 'The MP4 file is not available here, so the interactive replay is shown instead. It plays the same simulated walkthrough.';
      }
      api.seek = function (t, play) {
        api.active = true;
        if (api.fallback || !v) {
          var f = $('iframe', box);
          if (f) f.src = 'replay.html?demo=' + encodeURIComponent(id) + '&embed=1&autoplay=1&t=' + t;
          return;
        }
        try { v.currentTime = t + 0.04; } catch (e) { /* not seekable yet */ }
        if (play) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        current(t);
      };
      btns.forEach(function (b) {
        b.addEventListener('click', function () { api.seek(parseFloat(b.getAttribute('data-t')), true); });
      });
      if (v) {
        v.addEventListener('timeupdate', function () { current(v.currentTime); });
        v.addEventListener('play', function () { api.active = true; current(v.currentTime); });
        v.addEventListener('error', toFallback);
        var src = $('source', v);
        if (src) src.addEventListener('error', toFallback);
        if (v.networkState === 3) toFallback();
      }
      current(0);
    });

    $$('[data-seek]').forEach(function (el) {
      var parts = el.getAttribute('data-seek').split('@');
      var id = parts[0], t = parseFloat(parts[1]);
      if (!players[id] || isNaN(t)) return;
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      var name = (el.querySelector('b') || el).textContent.trim();
      el.setAttribute('aria-label', 'Play the demo video from ' + name + ' (' + fmt(t) + ')');
      el.setAttribute('title', 'Play this step in the demo video');
      var tag = document.createElement('span');
      tag.className = 'seek-t'; tag.setAttribute('aria-hidden', 'true'); tag.textContent = '▶ ' + fmt(t);
      el.appendChild(tag);
      function go() {
        var p = players[id];
        p.section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        p.seek(t, true);
      }
      el.addEventListener('click', function (e) { if (e.target.closest('a')) return; go(); });
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }

  /* ---------- knowledge checks ---------- */
  function quizzes() {
    $$('.quiz[data-quiz]').forEach(function (qz) {
      var key = 'contoso-ws-qz-' + qz.getAttribute('data-quiz');
      var qs = $$('.q', qz);
      var score = $('.qz-score', qz);
      var saved = {};
      try { saved = JSON.parse(store.get(key) || '{}') || {}; } catch (e) { saved = {}; }

      function tally() {
        var answered = 0, right = 0;
        qs.forEach(function (q) { if (q.classList.contains('done')) { answered++; if (!q.classList.contains('miss')) right++; } });
        if (answered < qs.length) score.textContent = answered + ' of ' + qs.length + ' answered';
        else score.textContent = right + ' of ' + qs.length + ' correct' + (right === qs.length ? ' · well done' : '');
        score.classList.toggle('all', answered === qs.length && right === qs.length);
      }
      function answer(q, i, persist) {
        var a = parseInt(q.getAttribute('data-a'), 10);
        var opts = $$('.opts button', q);
        opts.forEach(function (b, j) {
          b.disabled = true;
          b.setAttribute('aria-pressed', j === i ? 'true' : 'false');
          if (j === a) b.classList.add('right');
          if (j === i && i !== a) b.classList.add('wrong');
        });
        q.classList.add('done');
        q.classList.toggle('miss', i !== a);
        var lead = $('.why b', q);
        if (lead) lead.textContent = i === a ? 'Correct. ' : 'Not quite. ';
        if (persist) { saved[q.getAttribute('data-n')] = i; store.set(key, JSON.stringify(saved)); }
        tally();
      }
      qs.forEach(function (q) {
        $$('.opts button', q).forEach(function (b, i) {
          b.addEventListener('click', function () { if (!q.classList.contains('done')) answer(q, i, true); });
        });
        var s = saved[q.getAttribute('data-n')];
        if (typeof s === 'number') answer(q, s, false);
      });
      var reset = $('[data-reset]', qz);
      if (reset) reset.addEventListener('click', function () {
        saved = {}; store.del(key);
        qs.forEach(function (q) {
          q.classList.remove('done', 'miss');
          $$('.opts button', q).forEach(function (b) { b.disabled = false; b.classList.remove('right', 'wrong'); b.removeAttribute('aria-pressed'); });
        });
        tally();
      });
      tally();
    });
  }

  /* ---------- facilitator session timer ---------- */
  function timer() {
    var el = $('.stimer[data-sid]');
    if (!el) return;
    var key = 'contoso-ws-tm-' + el.getAttribute('data-sid');
    var total = parseFloat(el.getAttribute('data-mins')) * 60;
    var tv = $('.tv', el), bar = $('.bar i', el), go = $('[data-act=go]', el), rs = $('[data-act=reset]', el);
    var st = { run: false, acc: 0, at: 0 };
    try { st = JSON.parse(store.get(key) || 'null') || st; } catch (e) { /* keep default */ }
    var tick = null;
    function elapsed() { return st.acc + (st.run ? (Date.now() - st.at) / 1000 : 0); }
    function draw() {
      var e = elapsed(), left = total - e;
      tv.textContent = left >= 0 ? fmt(left) : '+' + fmt(-left);
      bar.style.inlineSize = Math.min(100, (e / total) * 100) + '%';
      el.classList.toggle('warn', left >= 0 && left <= total * 0.2);
      el.classList.toggle('over', left < 0);
      go.textContent = st.run ? 'Pause' : (e > 0 ? 'Resume' : 'Start');
      go.setAttribute('aria-label', (st.run ? 'Pause' : 'Start') + ' the session timer');
    }
    function save() { store.set(key, JSON.stringify(st)); }
    function loop() { clearInterval(tick); if (st.run) tick = setInterval(draw, 500); }
    go.addEventListener('click', function () {
      if (st.run) { st.acc = elapsed(); st.run = false; } else { st.at = Date.now(); st.run = true; }
      save(); draw(); loop();
    });
    rs.addEventListener('click', function () { st = { run: false, acc: 0, at: 0 }; save(); draw(); loop(); });
    draw(); loop();
  }

  /* ---------- session progress ---------- */
  function progress() {
    var key = 'contoso-ws-done';
    var done = [];
    try { done = JSON.parse(store.get(key) || '[]') || []; } catch (e) { done = []; }
    function paint() {
      $$('.sidebar a[href]').forEach(function (a) {
        var f = a.getAttribute('href');
        var t = $('.done-tick', a);
        if (done.indexOf(f) >= 0 && !t) { t = document.createElement('span'); t.className = 'done-tick'; t.textContent = '✓'; t.setAttribute('aria-label', 'done'); a.appendChild(t); }
        if (done.indexOf(f) < 0 && t) t.remove();
      });
      var ap = $('.agenda-progress');
      if (ap) {
        var n = parseInt(ap.getAttribute('data-total'), 10) || 7;
        var c = done.filter(function (f) { return /^0\d-/.test(f); }).length;
        $('.pb i', ap).style.inlineSize = Math.round((c / n) * 100) + '%';
        $('.lbl', ap).textContent = c + ' of ' + n + ' sessions marked as done on this device';
      }
    }
    var b = $('.mark-done');
    if (b) {
      var f = b.getAttribute('data-file');
      var on = function () { return done.indexOf(f) >= 0; };
      var lbl = function () { b.setAttribute('aria-pressed', on() ? 'true' : 'false'); b.textContent = on() ? '✓ Session marked as done' : 'Mark this session as done'; };
      lbl();
      b.addEventListener('click', function () {
        if (on()) done.splice(done.indexOf(f), 1); else done.push(f);
        store.set(key, JSON.stringify(done)); lbl(); paint();
      });
    }
    var r = $('[data-progress-reset]');
    if (r) r.addEventListener('click', function () { done = []; store.del(key); paint(); });
    paint();
  }

  /* ---------- use-case canvas (Session 7) ---------- */
  function canvas() {
    var root = $('.ucc');
    if (!root) return;
    var key = 'contoso-ws-ucc';
    var form = $('form', root), list = $('.ucc-list', root), plot = $('.ucc-plot', root), status = $('.status', root);
    var items = [];
    try { items = JSON.parse(store.get(key) || '[]') || []; } catch (e) { items = []; }
    var Q = {
      s: 'Start here', b: 'Strategic bets', w: 'Quick wins', a: 'Avoid for now'
    };
    function quad(it) { var hv = it.value >= 3, hf = it.feas >= 3; return hv && hf ? 's' : hv ? 'b' : hf ? 'w' : 'a'; }
    function say(t) { status.textContent = t; clearTimeout(say.t); say.t = setTimeout(function () { status.textContent = ''; }, 3000); }
    function save() { store.set(key, JSON.stringify(items)); }
    $$('input[type=range]', form).forEach(function (r) {
      var o = $('output[for="' + r.id + '"]', form);
      var upd = function () { if (o) o.textContent = r.value; };
      r.addEventListener('input', upd); upd();
    });
    function render() {
      if (!items.length) {
        list.innerHTML = '<p class="empty">No use cases yet. Add the first idea from the room above; it stays in this browser until you clear it.</p>';
      } else {
        var rows = items.map(function (it, i) {
          var q = quad(it);
          var sub = [it.lens, it.team, it.owner ? 'Owner: ' + it.owner : ''].filter(Boolean).map(esc).join(' · ');
          return '<tr><td>' + (i + 1) + '</td><td><b>' + esc(it.title) + '</b><br><span class="small muted">' + sub + '</span></td><td>' + it.value + ' / ' + it.feas +
            '</td><td><span class="qd ' + q + '">' + Q[q] + '</span></td><td><button class="x" type="button" data-del="' + i + '" aria-label="Remove ' + esc(it.title) + '">×</button></td></tr>';
        }).join('');
        list.innerHTML = '<div class="tablewrap"><table><thead><tr><th>#</th><th>Use case</th><th>Score</th><th>Quadrant</th><th><span class="visually-hidden">Remove</span></th></tr></thead><tbody>' + rows + '</tbody></table></div>';
      }
      // plot: x = feasibility, y = value, 1..5
      var S = 400, P = 44, span = S - P - 16;
      var I = 22;
      function px(f) { return P + I + ((f - 1) / 4) * (span - 2 * I); }
      function py(v) { return 16 + I + (1 - (v - 1) / 4) * (span - 2 * I); }
      var mid = px(3), midy = py(3);
      var svg = '<svg viewBox="0 0 ' + S + ' ' + S + '" role="img" aria-label="Use cases plotted by business value and feasibility">' +
        '<rect x="' + P + '" y="16" width="' + span + '" height="' + span + '" rx="10" fill="var(--surface)" stroke="var(--border)"/>' +
        '<rect x="' + mid + '" y="16" width="' + (P + span - mid) + '" height="' + (midy - 16) + '" fill="var(--ok-soft)"/>' +
        '<line x1="' + mid + '" y1="16" x2="' + mid + '" y2="' + (16 + span) + '" stroke="var(--border)" stroke-dasharray="4 4"/>' +
        '<line x1="' + P + '" y1="' + midy + '" x2="' + (P + span) + '" y2="' + midy + '" stroke="var(--border)" stroke-dasharray="4 4"/>' +
        '<g font-size="12" font-weight="700" fill="var(--muted)">' +
        '<text x="' + (P + 8) + '" y="34">Strategic bets</text>' +
        '<text x="' + (P + span - 8) + '" y="34" text-anchor="end" fill="var(--ok)">Start here</text>' +
        '<text x="' + (P + 8) + '" y="' + (16 + span - 10) + '">Avoid for now</text>' +
        '<text x="' + (P + span - 8) + '" y="' + (16 + span - 10) + '" text-anchor="end">Quick wins</text></g>' +
        '<text x="' + (P + span / 2) + '" y="' + (S - 6) + '" text-anchor="middle" font-size="12.5" fill="var(--muted)">Feasibility →</text>' +
        '<text transform="translate(14 ' + (16 + span / 2) + ') rotate(-90)" text-anchor="middle" font-size="12.5" fill="var(--muted)">Business value →</text>';
      for (var k = 1; k <= 5; k++) {
        svg += '<text x="' + px(k) + '" y="' + (16 + span + 16) + '" text-anchor="middle" font-size="11" fill="var(--muted)">' + k + '</text>' +
          '<text x="' + (P - 8) + '" y="' + (py(k) + 4) + '" text-anchor="end" font-size="11" fill="var(--muted)">' + k + '</text>';
      }
      var seen = {};
      items.forEach(function (it, i) {
        var c = it.feas + ':' + it.value; var n = seen[c] = (seen[c] || 0) + 1;
        var off = (n - 1) * 9;
        var x = px(it.feas) + (n > 1 ? off : 0), y = py(it.value) - (n > 1 ? off : 0);
        svg += '<g class="dot"><title>' + esc((i + 1) + '. ' + it.title + ' · value ' + it.value + ', feasibility ' + it.feas) + '</title>' +
          '<circle cx="' + x + '" cy="' + y + '" r="12" fill="var(--accent)" stroke="var(--bg)" stroke-width="2"/>' +
          '<text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--on-accent)">' + (i + 1) + '</text></g>';
      });
      plot.innerHTML = svg + '</svg>';
      $$('[data-del]', list).forEach(function (b) {
        b.addEventListener('click', function () { items.splice(parseInt(b.getAttribute('data-del'), 10), 1); save(); render(); say('Removed.'); });
      });
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var g = function (n) { var x = form.elements[n]; return x ? x.value.trim() : ''; };
      if (!g('title')) { form.elements.title.focus(); return; }
      items.push({ title: g('title'), team: g('team'), lens: g('lens'), pain: g('pain'), measure: g('measure'), capability: g('capability'), effort: g('effort'), owner: g('owner'),
        value: parseInt(g('value'), 10) || 3, feas: parseInt(g('feas'), 10) || 3 });
      save(); render();
      ['title', 'team', 'pain', 'measure', 'capability', 'owner'].forEach(function (n) { if (form.elements[n]) form.elements[n].value = ''; });
      form.elements.title.focus();
      say('Added. ' + items.length + ' use case' + (items.length === 1 ? '' : 's') + ' on the canvas.');
    });
    function rowsFor() {
      return items.map(function (it, i) {
        return [i + 1, it.title, it.team, it.lens, it.pain, it.measure, it.capability, it.effort, it.owner, it.value, it.feas, Q[quad(it)]];
      });
    }
    var HEAD = ['#', 'Use case', 'Team / application', 'Lens', 'Pain today', 'How we would measure success', 'Capability', 'Effort', 'Owner', 'Value (1-5)', 'Feasibility (1-5)', 'Quadrant'];
    $('[data-act=md]', root).addEventListener('click', function () {
      if (!items.length) { say('Nothing to copy yet.'); return; }
      var cell = function (x) { return String(x === undefined ? '' : x).replace(/\|/g, '\\|').replace(/\n/g, ' '); };
      var md = '| ' + HEAD.join(' | ') + ' |\n|' + HEAD.map(function () { return ' --- '; }).join('|') + '|\n' +
        rowsFor().map(function (r) { return '| ' + r.map(cell).join(' | ') + ' |'; }).join('\n') + '\n';
      var p = (navigator.clipboard && navigator.clipboard.writeText) ? navigator.clipboard.writeText(md) : Promise.reject(new Error('no clipboard'));
      p.then(function () { say('Copied as a Markdown table. Paste it into the meeting notes or a GitHub issue.'); }, function () { say('Copy is blocked in this browser. Use Download CSV instead.'); });
    });
    $('[data-act=csv]', root).addEventListener('click', function () {
      if (!items.length) { say('Nothing to download yet.'); return; }
      var cell = function (x) { x = String(x === undefined ? '' : x); return /[",\n]/.test(x) ? '"' + x.replace(/"/g, '""') + '"' : x; };
      var csv = '\ufeff' + [HEAD].concat(rowsFor()).map(function (r) { return r.map(cell).join(','); }).join('\r\n');
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
      a.download = 'contoso-use-cases.csv';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      say('Downloaded contoso-use-cases.csv.');
    });
    $('[data-act=sample]', root).addEventListener('click', function () {
      items = items.concat([
        { title: 'Unit tests for the order service', team: 'Example only', lens: 'Developer productivity', value: 3, feas: 5, effort: 'S', owner: '', pain: '', measure: 'Coverage and time per change', capability: 'Copilot agent mode, cloud agent' },
        { title: 'Upgrade a legacy .NET app', team: 'Example only', lens: 'Application modernization', value: 5, feas: 3, effort: 'L', owner: '', pain: '', measure: 'Upgrade lead time', capability: 'GitHub Copilot modernization, cloud agent' },
        { title: 'Turn on push protection everywhere', team: 'Example only', lens: 'Secure development', value: 4, feas: 4, effort: 'S', owner: '', pain: '', measure: 'Secrets blocked vs leaked', capability: 'Secret Protection' }
      ]);
      save(); render(); say('Added three examples. Remove them before the real discussion.');
    });
    $('[data-act=clear]', root).addEventListener('click', function () {
      if (!items.length) return;
      if (!window.confirm('Remove all ' + items.length + ' use cases from this browser?')) return;
      items = []; save(); render(); say('Canvas cleared.');
    });
    render();
  }

  /* ---------- resources filter ---------- */
  function filter() {
    var box = $('.rfilter input');
    if (!box) return;
    var cnt = $('.rfilter .cnt');
    var rows = $$('main .content li, main .content tbody tr').filter(function (r) { return !r.closest('.pager, .toc, .crumbs, .sources'); });
    rows.forEach(function (r) {
      var card = r.closest('.card'), h = card ? card.querySelector('h3') : null;
      r.setAttribute('data-txt', ((h ? h.textContent + ' ' : '') + r.textContent).toLowerCase());
    });
    function run() {
      var q = box.value.trim().toLowerCase();
      var terms = q.split(/\s+/).filter(Boolean);
      var shown = 0;
      rows.forEach(function (r) {
        var ok = !terms.length || terms.every(function (t) { return r.getAttribute('data-txt').indexOf(t) >= 0; });
        r.classList.toggle('rf-hide', !ok);
        if (ok) shown++;
      });
      $$('main .content .card, main .content .tablewrap').forEach(function (c) {
        var items = $$('li, tbody tr', c);
        if (!items.length) return;
        c.classList.toggle('rf-hide', items.every(function (i) { return i.classList.contains('rf-hide'); }));
      });
      cnt.textContent = terms.length ? shown + ' of ' + rows.length + ' entries match' : rows.length + ' entries';
    }
    box.addEventListener('input', run);
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape') { box.value = ''; run(); } });
    run();
  }

  function init() {
    facToggle(); copyButtons(); checklists(); videos(); quizzes(); timer(); progress(); canvas(); filter();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
