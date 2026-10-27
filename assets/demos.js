/* Demo videos for the Contoso workshop, recorded as a simulated screen capture of each demo.
   Interfaces are simplified re-creations and AI output is illustrative.
   Steps follow GitHub Docs and Microsoft Learn as cited on the session pages. */
(function () {
  'use strict';
  var K = window.ReplayKit, esc = K.esc;
  var D = window.DEMOS = window.DEMOS || [];
  var ICONS = {"app-registrations": "<svg aria-hidden=\"true\" id=\"rpa-app-registrations-a76a0103-ce03-4d58-859d-4c27e02925d2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><defs><linearGradient id=\"rpa-app-registrations-efeb8e96-2af0-4681-9a6a-45f9b0262f19\" x1=\"-6518.78\" y1=\"1118.86\" x2=\"-6518.78\" y2=\"1090.06\" gradientTransform=\"matrix(0.5, 0, 0, -0.5, 3267.42, 559.99)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#5ea0ef\" /><stop offset=\"0.18\" stop-color=\"#589eed\" /><stop offset=\"0.41\" stop-color=\"#4897e9\" /><stop offset=\"0.66\" stop-color=\"#2e8ce1\" /><stop offset=\"0.94\" stop-color=\"#0a7cd7\" /><stop offset=\"1\" stop-color=\"#0078d4\" /></linearGradient></defs><path d=\"M5.67,10.61H10v4.32H5.67Zm-5-5.76H5V.53H1.23a.6.6,0,0,0-.6.6Zm.6,10.08H5V10.61H.63v3.72A.6.6,0,0,0,1.23,14.93Zm-.6-5H5V5.57H.63Zm10.08,5h3.72a.6.6,0,0,0,.6-.6V10.61H10.71Zm-5-5H10V5.57H5.67Zm5,0H15V5.57H10.71Zm0-9.36V4.85H15V1.13a.6.6,0,0,0-.6-.6Zm-5,4.32H10V.53H5.67Z\" fill=\"url(#rpa-app-registrations-efeb8e96-2af0-4681-9a6a-45f9b0262f19)\" /><polygon points=\"17.37 10.7 17.37 15.21 13.5 17.47 13.5 12.96 17.37 10.7\" fill=\"#32bedd\" /><polygon points=\"17.37 10.7 13.5 12.97 9.63 10.7 13.5 8.44 17.37 10.7\" fill=\"#9cebff\" /><polygon points=\"13.5 12.97 13.5 17.47 9.63 15.21 9.63 10.7 13.5 12.97\" fill=\"#50e6ff\" /><polygon points=\"9.63 15.21 13.5 12.96 13.5 17.47 9.63 15.21\" fill=\"#9cebff\" /><polygon points=\"17.37 15.21 13.5 12.96 13.5 17.47 17.37 15.21\" fill=\"#50e6ff\" /></svg>", "app-services": "<svg aria-hidden=\"true\" id=\"rpa-app-services-b70acf0a-34b4-4bdf-9024-7496043ff915\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><defs><radialGradient id=\"rpa-app-services-e2cf8746-c9a8-4eee-86c2-4951983c6032\" cx=\"13428.81\" cy=\"3518.86\" r=\"56.67\" gradientTransform=\"translate(-2005.33 -518.83) scale(0.15)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.18\" stop-color=\"#5ea0ef\" /><stop offset=\"1\" stop-color=\"#0078d4\" /></radialGradient><linearGradient id=\"rpa-app-services-bdd213dd-d313-473c-8ff4-0133fd3a9033\" x1=\"4.4\" y1=\"11.48\" x2=\"4.37\" y2=\"7.53\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ccc\" /><stop offset=\"1\" stop-color=\"#fcfcfc\" /></linearGradient><linearGradient id=\"rpa-app-services-afcc63c5-3649-4476-a742-bcb53a569f3c\" x1=\"10.13\" y1=\"15.45\" x2=\"10.13\" y2=\"11.9\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ccc\" /><stop offset=\"1\" stop-color=\"#fcfcfc\" /></linearGradient><linearGradient id=\"rpa-app-services-bd873f0b-9954-4aa5-a3df-9f4c64e8729d\" x1=\"14.18\" y1=\"11.15\" x2=\"14.18\" y2=\"7.38\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ccc\" /><stop offset=\"1\" stop-color=\"#fcfcfc\" /></linearGradient></defs><title>Icon-web-41</title><path id=\"rpa-app-services-ee75dd06-1aca-4f76-9d11-d05a284020ad\" d=\"M14.21,15.72A8.5,8.5,0,0,1,3.79,2.28l.09-.06a8.5,8.5,0,0,1,10.33,13.5\" fill=\"url(#rpa-app-services-e2cf8746-c9a8-4eee-86c2-4951983c6032)\" /><path d=\"M6.69,7.23A13,13,0,0,1,15.6,3.65a8.47,8.47,0,0,0-1.49-1.44,14.34,14.34,0,0,0-4.69,1.1A12.54,12.54,0,0,0,5.34,6.13,2.76,2.76,0,0,1,6.69,7.23Z\" fill=\"#fff\" opacity=\"0.6\" /><path d=\"M2.48,10.65a17.86,17.86,0,0,0-.83,2.62,7.82,7.82,0,0,0,.62.92c.18.23.35.44.55.65A17.94,17.94,0,0,1,3.9,11.37,2.76,2.76,0,0,1,2.48,10.65Z\" fill=\"#fff\" opacity=\"0.6\" /><path d=\"M3.46,6.11a12,12,0,0,1-.69-2.94,8.15,8.15,0,0,0-1.1,1.45A12.69,12.69,0,0,0,2.24,7,2.69,2.69,0,0,1,3.46,6.11Z\" fill=\"#f2f2f2\" opacity=\"0.55\" /><circle cx=\"4.38\" cy=\"8.68\" r=\"2.73\" fill=\"url(#rpa-app-services-bdd213dd-d313-473c-8ff4-0133fd3a9033)\" /><path d=\"M8.36,13.67A1.77,1.77,0,0,1,8.9,12.4a11.88,11.88,0,0,1-2.53-1.86,2.74,2.74,0,0,1-1.49.83,13.1,13.1,0,0,0,1.45,1.28A12.12,12.12,0,0,0,8.38,13.9,1.79,1.79,0,0,1,8.36,13.67Z\" fill=\"#f2f2f2\" opacity=\"0.55\" /><path d=\"M14.66,13.88a12,12,0,0,1-2.76-.32.41.41,0,0,1,0,.11,1.75,1.75,0,0,1-.51,1.24,13.69,13.69,0,0,0,3.42.24A8.21,8.21,0,0,0,16,13.81,11.5,11.5,0,0,1,14.66,13.88Z\" fill=\"#f2f2f2\" opacity=\"0.55\" /><circle cx=\"10.13\" cy=\"13.67\" r=\"1.78\" fill=\"url(#rpa-app-services-afcc63c5-3649-4476-a742-bcb53a569f3c)\" /><path d=\"M12.32,8.93a1.83,1.83,0,0,1,.61-1A25.5,25.5,0,0,1,8.47,3.79a16.91,16.91,0,0,1-2-2.92,7.64,7.64,0,0,0-1.09.42A18.14,18.14,0,0,0,7.53,4.47,26.44,26.44,0,0,0,12.32,8.93Z\" fill=\"#f2f2f2\" opacity=\"0.7\" /><circle cx=\"14.18\" cy=\"9.27\" r=\"1.89\" fill=\"url(#rpa-app-services-bd873f0b-9954-4aa5-a3df-9f4c64e8729d)\" /><path d=\"M17.35,10.54,17,10.37l0,0-.3-.16-.06,0L16.38,10l-.07,0L16,9.8a1.76,1.76,0,0,1-.64.92c.12.08.25.15.38.22l.08.05.35.19,0,0,.86.45h0a8.63,8.63,0,0,0,.29-1.11Z\" fill=\"#f2f2f2\" opacity=\"0.55\" /><circle cx=\"4.38\" cy=\"8.68\" r=\"2.73\" fill=\"url(#rpa-app-services-bdd213dd-d313-473c-8ff4-0133fd3a9033)\" /><circle cx=\"10.13\" cy=\"13.67\" r=\"1.78\" fill=\"url(#rpa-app-services-afcc63c5-3649-4476-a742-bcb53a569f3c)\" /></svg>", "app-service-plans": "<svg aria-hidden=\"true\" id=\"rpa-app-service-plans-fca2105f-c039-4f34-bd65-8ab95d4ecdb9\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><defs><linearGradient id=\"rpa-app-service-plans-a773af38-43e4-4fd2-9485-f8aac63ca91b\" x1=\"5.57\" y1=\"17.5\" x2=\"5.57\" y2=\"0.5\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.05\" stop-color=\"#949494\" /><stop offset=\"0.36\" stop-color=\"#979797\" /><stop offset=\"0.54\" stop-color=\"#9f9f9f\" /><stop offset=\"0.69\" stop-color=\"#adadad\" /><stop offset=\"0.73\" stop-color=\"#b3b3b3\" /></linearGradient><linearGradient id=\"rpa-app-service-plans-b4779ae6-74a5-486d-8aad-cd011859785a\" x1=\"10.56\" y1=\"6.02\" x2=\"10.56\" y2=\"19.71\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.18\" stop-color=\"#5ea0ef\" /><stop offset=\"1\" stop-color=\"#0078d4\" /></linearGradient></defs><title>Icon-web-46</title><path d=\"M10.56,16.93a.56.56,0,0,1-.57.57H1.14a.56.56,0,0,1-.56-.57V1.07A.56.56,0,0,1,1.14.5H10a.56.56,0,0,1,.57.57Z\" fill=\"url(#rpa-app-service-plans-a773af38-43e4-4fd2-9485-f8aac63ca91b)\" /><path d=\"M2,6.46A1.08,1.08,0,0,1,3.13,5.38h5A1.08,1.08,0,0,1,9.18,6.46h0A1.08,1.08,0,0,1,8.1,7.55h-5A1.09,1.09,0,0,1,2,6.46Z\" fill=\"#003067\" /><path d=\"M2,3.24A1.09,1.09,0,0,1,3.13,2.15h5A1.08,1.08,0,0,1,9.18,3.24h0A1.08,1.08,0,0,1,8.1,4.32h-5A1.08,1.08,0,0,1,2,3.24Z\" fill=\"#003067\" /><circle cx=\"3.17\" cy=\"3.24\" r=\"0.73\" fill=\"#50e6ff\" /><circle cx=\"3.17\" cy=\"6.46\" r=\"0.73\" fill=\"#50e6ff\" /><path d=\"M17.42,14.38a3.12,3.12,0,0,0-2.67-3,3.93,3.93,0,0,0-4-3.8,4,4,0,0,0-3.83,2.66A3.7,3.7,0,0,0,3.7,13.83,3.77,3.77,0,0,0,7.56,17.5l.34,0h6.26l.17,0A3.15,3.15,0,0,0,17.42,14.38Z\" fill=\"url(#rpa-app-service-plans-b4779ae6-74a5-486d-8aad-cd011859785a)\" /><rect width=\"18\" height=\"18\" fill=\"none\" /></svg>", "app-insights": "<svg aria-hidden=\"true\" id=\"rpa-app-insights-b6f6d99e-f330-481d-836f-ea58cc42217f\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><defs><radialGradient id=\"rpa-app-insights-a7a1c431-6c6d-4a8f-9a69-8da437e5b0c5\" cx=\"9\" cy=\"7.35\" r=\"6.42\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#b77af4\" /><stop offset=\"0.21\" stop-color=\"#b378f2\" /><stop offset=\"0.43\" stop-color=\"#a672ed\" /><stop offset=\"0.65\" stop-color=\"#9267e4\" /><stop offset=\"0.88\" stop-color=\"#7559d8\" /><stop offset=\"1\" stop-color=\"#624fd0\" /></radialGradient><linearGradient id=\"rpa-app-insights-ec0c4f0d-5c8e-4882-96a1-89d61808eb49\" x1=\"9.02\" y1=\"3.91\" x2=\"9.08\" y2=\"11.49\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#f2f2f2\" /><stop offset=\"0.23\" stop-color=\"#f1f1f2\" stop-opacity=\"0.99\" /><stop offset=\"0.37\" stop-color=\"#ededf1\" stop-opacity=\"0.95\" /><stop offset=\"0.48\" stop-color=\"#e7e5f0\" stop-opacity=\"0.89\" /><stop offset=\"0.58\" stop-color=\"#dedbee\" stop-opacity=\"0.81\" /><stop offset=\"0.67\" stop-color=\"#d3ceeb\" stop-opacity=\"0.7\" /><stop offset=\"0.76\" stop-color=\"#c4bee8\" stop-opacity=\"0.57\" /><stop offset=\"0.84\" stop-color=\"#b4abe5\" stop-opacity=\"0.41\" /><stop offset=\"0.92\" stop-color=\"#a095e1\" stop-opacity=\"0.22\" /><stop offset=\"0.99\" stop-color=\"#8b7ddc\" stop-opacity=\"0.02\" /><stop offset=\"1\" stop-color=\"#897bdc\" stop-opacity=\"0\" /></linearGradient></defs><title>Icon-manage-310</title><path d=\"M10.23,17.39l.81-.87V14.2H7v2.32l.81.87A.32.32,0,0,0,8,17.5h2A.32.32,0,0,0,10.23,17.39Z\" fill=\"#cecece\" /><path d=\"M9,.5A5.89,5.89,0,0,0,3.09,7.07c.27,2.47,2.62,3.62,3.29,6.75a.49.49,0,0,0,.47.38h4.3a.49.49,0,0,0,.47-.38c.67-3.13,3-4.28,3.29-6.75A5.89,5.89,0,0,0,9,.5ZM7,14.2\" fill=\"url(#rpa-app-insights-a7a1c431-6c6d-4a8f-9a69-8da437e5b0c5)\" /><path d=\"M11.46,3.79a1.4,1.4,0,0,0-1.35,1.44V6H8V5.23A1.41,1.41,0,0,0,6.59,3.79,1.4,1.4,0,0,0,5.24,5.23,1.41,1.41,0,0,0,6.59,6.68h.64v6a.36.36,0,0,0,.72,0v-6h2.16v6a.36.36,0,1,0,.72,0v-6h.63a1.4,1.4,0,0,0,1.35-1.45A1.4,1.4,0,0,0,11.46,3.79ZM7.23,6H6.55a.74.74,0,0,1-.68-.77.74.74,0,0,1,.68-.77.74.74,0,0,1,.68.77Zm4.28,0h-.68V5.19a.68.68,0,1,1,1.35,0A.73.73,0,0,1,11.51,6Z\" fill=\"url(#rpa-app-insights-ec0c4f0d-5c8e-4882-96a1-89d61808eb49)\" /><polygon points=\"6.96 15.8 11.04 15.01 11.04 14.56 6.96 15.36 6.96 15.8\" fill=\"#999\" /><polygon points=\"11.04 16.11 11.04 15.67 6.96 16.48 6.96 16.52 7.27 16.86 11.04 16.11\" fill=\"#999\" /></svg>", "resource-groups": "<svg aria-hidden=\"true\" id=\"rpa-resource-groups-a685cc8c-32ba-4d54-91da-3a125cb58ded\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><title>Icon-general-7</title><g><g><path d=\"M.5,15.08a.16.16,0,0,0,.08.14l1.16.65L3.7,17a.17.17,0,0,0,.23-.06l.66-1.12a.16.16,0,0,0-.06-.21l-2.3-1.3a.17.17,0,0,1-.08-.14V3.85a.16.16,0,0,1,.08-.14l2.3-1.3a.16.16,0,0,0,.06-.21L3.93,1.08A.17.17,0,0,0,3.7,1L1.78,2.11l-1.2.67a.16.16,0,0,0-.08.14V15.08Z\" fill=\"#949494\" /><path d=\"M2.14,3.77l.06-.06,2.3-1.3a.14.14,0,0,0,.06-.21L3.9,1.08A.15.15,0,0,0,3.68,1L1.75,2.11.56,2.78s-.05,0-.06.06l.9.51Z\" fill=\"#a3a3a3\" /><path d=\"M4.5,15.59l-2.3-1.3a.22.22,0,0,1-.07-.09l-1.62,1,.05,0,1.15.65,2,1.11a.15.15,0,0,0,.22-.06l.66-1.12A.14.14,0,0,0,4.5,15.59Z\" fill=\"#a3a3a3\" /></g><path d=\"M17.5,15.08a.16.16,0,0,1-.08.14l-1.16.65L14.3,17a.17.17,0,0,1-.23-.06l-.66-1.12a.16.16,0,0,1,.06-.21l2.3-1.3a.17.17,0,0,0,.08-.14V3.85a.16.16,0,0,0-.08-.14l-2.3-1.3a.16.16,0,0,1-.06-.21l.66-1.12A.17.17,0,0,1,14.3,1l1.92,1.09,1.2.67a.16.16,0,0,1,.08.14V15.08Z\" fill=\"#949494\" /><path d=\"M15.86,3.77l-.06-.06-2.3-1.3a.14.14,0,0,1-.06-.21l.66-1.12A.15.15,0,0,1,14.32,1l1.93,1.09,1.19.67s0,0,.06.06l-.9.51Z\" fill=\"#a3a3a3\" /><path d=\"M13.5,15.59l2.3-1.3a.22.22,0,0,0,.07-.09l1.62,1,0,0-1.15.65-2,1.11a.15.15,0,0,1-.22-.06l-.66-1.12A.14.14,0,0,1,13.5,15.59Z\" fill=\"#a3a3a3\" /><polygon points=\"14.31 5.93 14.31 12.07 8.99 15.16 8.99 9.01 14.31 5.93\" fill=\"#32bedd\" /><polygon points=\"14.31 5.93 9 9.02 3.68 5.93 9 2.84 14.31 5.93\" fill=\"#9cebff\" /><polygon points=\"8.99 9.02 8.99 15.16 3.68 12.07 3.68 5.93 8.99 9.02\" fill=\"#50e6ff\" /><polygon points=\"3.68 12.07 8.99 9.01 8.99 15.16 3.68 12.07\" fill=\"#9cebff\" /><polygon points=\"14.31 12.07 8.99 9.01 8.99 15.16 14.31 12.07\" fill=\"#50e6ff\" /></g></svg>"};

  /* ---------------- shared pieces ---------------- */
  function ci(kind) { return '<span class="ci ' + kind + '">' + (kind === 'ok' ? '✓' : kind === 'bad' ? '✕' : kind === 'run' ? '•' : '') + '</span>'; }
  function tl(k, html, hidden) { return '<div class="tl' + (hidden === false ? '' : ' hid') + '"' + K.k(k) + '><span class="dot"></span>' + html + '</div>'; }
  function side(rows) {
    return '<div class="gh-side">' + rows.map(function (r) { return '<div class="sec"' + K.k(r.k) + '><div class="h">' + r.h + (r.gear ? '<span>⚙</span>' : '') + '</div>' + r.v + '</div>'; }).join('') + '</div>';
  }
  function steps(n, total) { return function (chap) { var m = /^(\d+) · (.*)$/.exec(chap || ''); return m ? 'Step ' + m[1] + ' of ' + total + ' · ' + m[2] : chap; }; }
  function gh(o) { o.page = o.page || 'contoso/contoso-order-desk'; return K.gh(o); }
  var REPO_HEAD = null;
  var COPILOT_HEAD = '<div class="gh-head" style="padding-bottom:10px"><div class="gh-top"><span class="gh-logo"></span><b>Copilot</b><span class="pill">github.com/copilot</span></div></div>';
  var TREE = [
    { t: '.github', d: 1 }, { t: 'agents', d: 1, i: 1 }, { t: 'copilot-instructions.md', i: 1 }, { t: 'workflows', d: 1, i: 1 },
    { t: 'data', d: 1 }, { t: 'orders.json', i: 1 },
    { t: 'public', d: 1 }, { t: 'index.html', i: 1 },
    { t: 'src', d: 1 }, { t: 'legacy', d: 1, i: 1 }, { t: 'delivery-estimate.js', i: 2 }, { t: 'regions.json', i: 2 }, { t: 'app.js', i: 1 }, { t: 'server.js', i: 1 }, { t: 'validation.js', i: 1, k: 'fval' },
    { t: 'test', d: 1 }, { t: 'health.test.js', i: 1 }, { t: 'orders.test.js', i: 1 },
    { t: 'package.json' }, { t: 'README.md' }
  ];
  function tree(opts) {
    opts = opts || {};
    return TREE.map(function (it) {
      var c = {}; for (var k in it) c[k] = it[k];
      if (opts.on && it.t === opts.on) c.on = 1;
      if (opts.hideVal && it.t === 'validation.js') c.hid = 1;
      return c;
    }).concat(opts.extra || []);
  }
  function vmenu(key, items, style) {
    return '<div class="vmenu hid"' + K.k(key) + ' style="' + (style || '') + '">' + items.map(function (it) {
      return '<div class="it' + (it.on ? ' on' : '') + '"' + K.k(it.k) + '><b>' + esc(it.t) + '</b><small>' + esc(it.s || '') + '</small></div>';
    }).join('') + '</div>';
  }
  var MODES = [{ t: 'Ask', s: 'Answers, no file changes', k: 'mAsk' }, { t: 'Edit', s: 'Edits the files you choose', k: 'mEdit' }, { t: 'Agent', s: 'Plans, edits, runs commands', k: 'mAgent' }, { t: 'Plan', s: 'Read-only research and a plan', k: 'mPlan' }];
  function setMode(t, m) {
    var cls = m === 'Agent' ? 'ag' : m === 'Plan' ? 'pl' : '';
    return [{ t: t, el: 'mode', text: m + ' ▾' }, { t: t, el: 'mode2', text: m }, { t: t, el: 'mode', rm: 'ag' }, { t: t, el: 'mode', rm: 'pl' }, { t: t, el: 'mode2', rm: 'ag' }, { t: t, el: 'mode2', rm: 'pl' }]
      .concat(cls ? [{ t: t, el: 'mode', add: cls }, { t: t, el: 'mode2', add: cls }] : []);
  }
  function send(t, inKey, showKeys) {
    return [{ t: t, click: 'send' }, { t: t + 0.2, el: inKey || 'in', text: '' }, { t: t + 0.2, show: ['ph'].concat(showKeys || []) }];
  }

  /* =====================================================================
     SESSION 3 · Accelerating Developer Productivity with GitHub Copilot
     ===================================================================== */
  var LEGACY = "// Delivery rules ported from the 2019 order system.\nexport function estimateDelivery(order, today = new Date()) {\n  const days = order.express ? 1 : order.region === 'remote' ? 6 : 3;\n  const d = new Date(today);\n  let added = 0;\n  while (added < days) {\n    d.setDate(d.getDate() + 1);\n    const day = d.getDay();\n    if (day !== 0 && day !== 6) added++;\n  }\n  return d.toISOString().slice(0, 10);\n}\n\nexport function isLate(order, today = new Date()) {\n  return order.status !== 'Delivered' &&\n    order.estimatedDelivery < today.toISOString().slice(0, 10);\n}";
  var TESTS = "import { test } from 'node:test';\nimport assert from 'node:assert/strict';\nimport { estimateDelivery } from '../src/legacy/delivery-estimate.js';\n\nconst tue = new Date('2026-10-27T09:00:00Z');\nconst fri = new Date('2026-10-30T09:00:00Z');\n\ntest('standard orders take 3 business days', () => {\n  assert.equal(estimateDelivery({}, tue), '2026-10-30');\n});\n\ntest('express orders arrive the next business day', () => {\n  assert.equal(estimateDelivery({ express: true }, tue), '2026-10-28');\n});";
  var TESTS2 = "\n\ntest('express on a Friday skips the weekend', () => {\n  assert.equal(estimateDelivery({ express: true }, fri), '2026-11-02');\n});\n\ntest('remote regions take 6 business days', () => {\n  assert.equal(estimateDelivery({ region: 'remote' }, tue), '2026-11-04');\n});\n\ntest('unknown region falls back to standard', () => {\n  assert.equal(estimateDelivery({ region: 'mars' }, tue), '2026-10-30');\n});";
  function codeChat(o) {
    return K.vscode({ branch: o.branch || 'main', file: o.file, tabs: o.tabs, tree: o.tree || tree({ on: o.on }), mode: o.mode || 'Ask', edScroll: o.edScroll, term: o.term, termHidden: o.termHidden,
      code: o.code, chat: (o.chat || '') + (o.menu || ''), inText: o.inText });
  }
  var C = [];
  // 1 · Choose a mode
  C.push({ name: 'Copilot Chat in VS Code', chapter: '1 · Choose a mode', app: 'code', dur: 9, html: codeChat({ file: 'delivery-estimate.js', on: 'delivery-estimate.js', code: K.code(LEGACY),
    menu: vmenu('mm', MODES, 'right:14px;bottom:96px') }),
    steps: [
      { t: 0.2, cap: 'The presenter opens an unfamiliar module and the <b>Copilot Chat</b> view in VS Code.' },
      { t: 1.6, click: 'mode2' }, { t: 1.9, show: 'mm' },
      { t: 2.2, cap: 'Pick the mode for the task: <b>Ask</b>, <b>Edit</b>, <b>Agent</b> or <b>Plan</b>.' },
      { t: 2.4, zoom: 'mm', s: 1.45 }, { t: 6.4, zoom: null },
      { t: 6.9, click: 'mAsk' }, { t: 7.2, hide: 'mm' }
    ] });
  // 2 · Understand code (Ask)
  C.push({ name: 'Explain the code', chapter: '2 · Understand code (Ask)', app: 'code', cut: true, dur: 21, html: codeChat({ file: 'delivery-estimate.js', on: 'delivery-estimate.js', code: K.code(LEGACY),
    chat: K.u('Explain the files in this directory. #src/legacy', 'u1') +
      K.c('<div><span class="ref">Used 2 references</span></div><div><b>src/legacy</b> holds the delivery rules ported from the 2019 order system:</div><ul class="ul"><li><code>estimateDelivery(order, today)</code> adds business days: 1 for express, 6 for remote regions, otherwise 3. Weekends are skipped.</li><li><code>isLate()</code> compares the estimate with today\'s date.</li><li><code>regions.json</code> maps postcodes to <i>standard</i> or <i>remote</i>.</li></ul><div class="warn">Note: dates are counted in local time but returned with <code>toISOString()</code>, so results can shift by a day near midnight UTC.</div>', 'c1') }),
    steps: [
      { t: 0.2, cap: '<b>Ask</b> mode explains code without changing any files.' },
      { t: 0.6, click: 'inbox' },
      { t: 0.9, type: 'in', str: 'Explain the files in this directory. #src/legacy', cps: 30 },
      ].concat(send(3.0, 'in', ['u1']), [
      { t: 3.6, show: 'c1' }, { t: 3.6, lines: 'c1b', dur: 4 },
      { t: 5.0, zoom: 'c1', s: 1.55 }, { t: 12.4, zoom: null },
      { t: 8.2, cap: 'It even flags a time-zone edge case. The developer reads the code to confirm it.' },
      { t: 13.2, focus: 'ed', dur: 0.1 },
      { t: 15.0, cap: 'Reading and understanding code is most of a developer\'s day. Copilot helps there first.' }
    ]) });
  // 3 · Generate tests (/tests)
  C.push({ name: 'Generate unit tests', chapter: '3 · Generate tests (/tests)', app: 'code', cut: true, dur: 33, html: codeChat({ file: 'delivery-estimate.js',
    tabs: '<span data-k="tab1" class="on">delivery-estimate.js</span><span data-k="tab2" class="hid">delivery-estimate.test.js</span>',
    tree: tree({ on: 'delivery-estimate.js', extra: [] }), edScroll: true,
    code: '<div data-k="src">' + K.code(LEGACY, { k: 'L' }) + '</div><div data-k="tst" class="hid">' + K.code(TESTS, { lang: 'js' }) + '<div data-k="tst2" class="hid">' + K.code(TESTS2, { lang: 'js', start: 15 }) + '</div></div>',
    term: '<div data-k="tcmd" class="t-p"></div><div data-k="tout" class="hid"><div class="t-g">✔ standard orders take 3 business days (0.6ms)</div><div class="t-g">✔ express orders arrive the next business day (0.2ms)</div><div class="t-g">✔ express on a Friday skips the weekend (0.2ms)</div><div class="t-g">✔ remote regions take 6 business days (0.2ms)</div><div class="t-g">✔ unknown region falls back to standard (0.1ms)</div><div class="t-d">ℹ tests 5 · pass 5 · fail 0</div></div>', termHidden: true,
    chat: K.u('/tests Generate unit tests for this function.', 'u1') +
      K.c('<div>Here are tests using the built-in Node.js test runner, as the repository instructions ask:</div><pre class="cb" data-k="cb1">test(\'standard orders take 3 business days\', …)\ntest(\'express orders arrive the next business day\', …)</pre><div class="cb-act"><span class="vbtn sec">Copy</span><span class="vbtn" data-k="ins">Insert into New File</span></div>', 'c1') +
      K.u('Add failure and edge cases.', 'u2') +
      K.c('<div>Added three cases: a Friday express order, a remote region and an unknown region.</div><pre class="cb">test(\'express on a Friday skips the weekend\', …)\ntest(\'remote regions take 6 business days\', …)\ntest(\'unknown region falls back to standard\', …)</pre>', 'c2') }),
    steps: [
      { t: 0.2, cap: 'Select the function, then ask for tests with <b>/tests</b>.' },
      { t: 0.6, move: 'L2' }, { t: 1.0, el: 'L2', add: 'sel' }, { t: 1.2, el: 'L3', add: 'sel' }, { t: 1.4, el: 'L4', add: 'sel' }, { t: 1.6, el: 'L5', add: 'sel' }, { t: 1.8, el: 'L6', add: 'sel' }, { t: 2.0, el: 'L7', add: 'sel' }, { t: 2.2, el: 'L8', add: 'sel' }, { t: 2.4, el: 'L9', add: 'sel' }, { t: 2.6, el: 'L10', add: 'sel' }, { t: 2.8, el: 'L11', add: 'sel' }, { t: 3.0, el: 'L12', add: 'sel' },
      { t: 3.4, click: 'inbox' },
      { t: 3.7, type: 'in', str: '/tests Generate unit tests for this function.', cps: 30 },
      ].concat(send(5.6, 'in', ['u1']), [
      { t: 6.2, show: 'c1' }, { t: 6.2, lines: 'c1b', dur: 2 },
      { t: 8.6, click: 'inbox' }, { t: 8.9, type: 'in', str: 'Add failure and edge cases.', cps: 26 },
      ]).concat(send(10.2, 'in', ['u2']), [
      { t: 10.3, cap: 'A follow-up adds failure and edge cases. The developer reviews each one.' },
      { t: 10.8, show: 'c2' }, { t: 10.8, lines: 'c2b', dur: 2 },
      { t: 13.6, click: 'ins' }, { t: 14.0, hide: 'src' }, { t: 14.0, show: ['tst', 'tst2', 'tab2'] }, { t: 14.0, el: 'tab1', rm: 'on' }, { t: 14.0, el: 'tab2', add: 'on' },
      { t: 14.1, lines: 'tst', dur: 3 },
      { t: 14.3, cap: 'The tests go into a new file: <b>test/delivery-estimate.test.js</b>.' },
      { t: 15.0, zoom: 'ed', s: 1.3, oy: -40 }, { t: 21.0, zoom: null },
      { t: 21.6, show: 'term' }, { t: 21.8, type: 'tcmd', str: '$ node --test test/delivery-estimate.test.js', cps: 30 },
      { t: 23.6, show: 'tout' }, { t: 23.6, lines: 'tout', dur: 2 },
      { t: 23.8, cap: 'Run them yourself. You validate before you accept: <b>5 of 5 pass</b>.' },
      { t: 25.6, zoom: 'term', s: 1.5 }, { t: 31.0, zoom: null }
    ]) });
  // 4 · Plan, then Agent
  var APPJS = "import express from 'express';\nimport { readFileSync } from 'node:fs';\nimport { isValidOrderId } from './validation.js';\n\nexport const app = express();\nconst orders = JSON.parse(readFileSync(new URL('../data/orders.json', import.meta.url)));\n\napp.get('/api/orders/:orderId', (req, res) => {\n  const { orderId } = req.params;";
  var APPJS_ADD = "  if (!isValidOrderId(orderId)) {\n    return res.status(400).json({ error: 'Order numbers look like ORD-123456' });\n  }";
  var APPJS_REST = "  const order = orders.find((o) => o.id === orderId);\n  if (!order) return res.status(404).json({ error: 'Order not found' });\n  res.json(order);\n});\n\napp.get('/api/orders/:orderId/history', (req, res) => {\n  const { orderId } = req.params;";
  var APPJS_ADD2 = "  if (!isValidOrderId(orderId)) {\n    return res.status(400).json({ error: 'Invalid order number. Please check and try again!!' });\n  }";
  C.push({ name: 'Plan, then Agent', chapter: '4 · Plan, then Agent', app: 'code', cut: true, dur: 40, html: codeChat({ file: 'app.js', on: 'app.js', mode: 'Ask', edScroll: true,
    tabs: '<span class="on">app.js</span>',
    code: K.code(APPJS) + '<div data-k="a1" class="hid">' + K.code(APPJS_ADD, { start: 10, add: [10, 11, 12] }) + '</div>' + K.code(APPJS_REST, { start: 10 }) +
      '<div data-k="a2" class="hid"><div class="hunk" data-k="hk"><span class="vbtn sec" data-k="undo">Undo</span><span class="vbtn">Keep</span></div>' + K.code(APPJS_ADD2, { start: 17, add: [17, 18, 19] }) + '</div>',
    term: '<div data-k="tcmd" class="t-p"></div><div data-k="tout" class="hid"><div class="t-d">▶ order number validation</div><div class="t-g">  ✔ accepts ORD-100232 (0.4ms)</div><div class="t-g">  ✔ rejects 12345 with 400 (1.1ms)</div><div class="t-g">  ✔ rejects ORD-12 with 400 (0.6ms)</div><div class="t-d">ℹ tests 12 · pass 12 · fail 0</div></div>', termHidden: true,
    chat: K.u('Plan adding input validation for order numbers (ORD- plus six digits) to every route. List files and tests to change.', 'u1') +
      K.c('<div><b>Plan</b> · 2 routes take an order number</div><ol class="ul"><li><code>src/validation.js</code>: reuse <code>isValidOrderId()</code></li><li><code>src/app.js</code>: return 400 with a JSON error on both routes</li><li><code>test/validation.test.js</code>: valid, too short, wrong prefix</li></ol><div class="warn">Read-only research. No files changed.</div>', 'c1') +
      K.u('Implement the plan.', 'u2') +
      K.c('<div>' + K.file('src/app.js', 6, 0) + '</div><div>' + K.file('test/validation.test.js', 28, 0) + '</div><div>' + K.approve('npm test', 'ap1', 'allow1') + '</div>', 'c2') +
      K.c('<span class="ok">✔</span> 12 tests pass. Review the changes in the editor.', 'c3'),
    menu: vmenu('mm', MODES, 'right:14px;bottom:96px') }),
    steps: [
      { t: 0.2, cap: 'For a bigger change, plan first: switch to <b>Plan</b> mode.' },
      { t: 0.8, click: 'mode2' }, { t: 1.1, show: 'mm' }, { t: 1.9, click: 'mPlan' }, { t: 2.2, hide: 'mm' }
      ].concat(setMode(2.2, 'Plan'), [
      { t: 2.6, click: 'inbox' },
      { t: 2.9, type: 'in', str: 'Plan adding input validation for order numbers (ORD- plus six digits) to every route. List files and tests to change.', cps: 60 },
      ]).concat(send(5.2, 'in', ['u1']), [
      { t: 5.8, show: 'c1' }, { t: 5.8, lines: 'c1b', dur: 2.6 },
      { t: 6.0, cap: 'The plan lists the files and tests to change. Nothing is edited yet.' },
      { t: 6.6, zoom: 'c1', s: 1.5 }, { t: 11.6, zoom: null },
      { t: 12.2, cap: 'Approve the plan and switch to <b>Agent</b> mode to do the work.' },
      { t: 12.6, click: 'mode2' }, { t: 12.9, show: 'mm' }, { t: 13.6, click: 'mAgent' }, { t: 13.9, hide: 'mm' }
      ]).concat(setMode(13.9, 'Agent'), [
      { t: 14.3, click: 'inbox' }, { t: 14.6, type: 'in', str: 'Implement the plan.', cps: 22 },
      ]).concat(send(15.8, 'in', ['u2']), [
      { t: 16.3, show: 'c2' }, { t: 16.3, lines: 'c2b', dur: 1.6 },
      { t: 16.6, show: ['a1', 'a2'] }, { t: 16.6, lines: 'a1', dur: 1 }, { t: 17.2, lines: 'a2', dur: 1 },
      { t: 16.8, cap: 'Agent mode edits the files, then asks before running <b>npm test</b>.' },
      { t: 19.2, click: 'allow1' },
      { t: 19.5, show: 'term' }, { t: 19.6, type: 'tcmd', str: '$ npm test', cps: 20 }, { t: 20.3, show: 'tout' }, { t: 20.3, lines: 'tout', dur: 1.6 },
      { t: 22.2, show: 'c3' },
      { t: 23.0, cap: 'The developer reviews the diff. This second error message breaks the team\'s style…' },
      { t: 23.4, zoom: 'a2', s: 1.6 }, { t: 30.0, zoom: null },
      { t: 26.6, click: 'undo' }, { t: 27.0, hide: 'a2' },
      { t: 27.2, cap: '…so <b>Undo</b> drops that edit. The developer stays in control of every change.' }
    ]) });
  // 5 · Team instructions
  var INSTR = "# Contoso Order Desk: instructions for GitHub Copilot\n\n## Tech stack\n- Node.js 24, Express 5, ES modules (import/export).\n- Tests use the built-in Node.js test runner (node --test).\n  Do not add other test frameworks.\n\n## Coding standards\n- Validate every request parameter. Order numbers match ORD- followed by six digits.\n- Return errors as JSON { \"error\": \"<message>\" } with the correct HTTP status code.\n\n## Security\n- Never commit secrets, keys or connection strings.\n- Do not log customer email addresses or phone numbers.";
  C.push({ name: 'Team instructions', chapter: '5 · Team instructions', app: 'code', cut: true, dur: 23, html: codeChat({ file: 'copilot-instructions.md', on: 'copilot-instructions.md', mode: 'Ask',
    code: '<div data-k="ins">' + K.code(INSTR, { lang: 'md', k: 'I' }) + '</div>',
    chat: K.u('Log the customer\'s email address with every order lookup so we can follow up.', 'u1') +
      K.c('<div><span class="ref">Used 1 reference: .github/copilot-instructions.md</span></div><div>Your repository instructions say <b>not to log customer email addresses or phone numbers</b>, so I won\'t add that.</div><div style="margin-top:6px">Instead, I can log the order ID, the agent\'s user ID and the result, and the team can look up contact details in the CRM when they need to follow up.</div>', 'c1') }),
    steps: [
      { t: 0.2, cap: 'The team writes its standards once, in <b>.github/copilot-instructions.md</b>.' },
      { t: 0.8, zoom: 'ins', s: 1.35, oy: 40 }, { t: 6.6, zoom: null },
      { t: 3.0, focus: 'I15', dur: 3.2, pad: 2 },
      { t: 7.0, cap: 'Every Copilot surface reads the file. Watch what happens with a risky request.' },
      { t: 7.4, click: 'inbox' },
      { t: 7.7, type: 'in', str: 'Log the customer\'s email address with every order lookup so we can follow up.', cps: 45 },
      ].concat(send(9.8, 'in', ['u1']), [
      { t: 10.4, show: 'c1' }, { t: 10.4, lines: 'c1b', dur: 2.4 },
      { t: 11.0, zoom: 'c1', s: 1.55 }, { t: 21.0, zoom: null },
      { t: 12.0, cap: 'Copilot cites the instructions and proposes a safer alternative.' }
    ]) });
  // 6 · Copilot CLI
  C.push({ name: 'Copilot CLI', chapter: '6 · Copilot CLI', app: 'term', dur: 40, html: K.term({ title: 'Ubuntu · contoso-order-desk', body:
    '<div class="t-d">~/contoso-order-desk <span class="t-c">(fix/weekend-delivery)</span></div><div data-k="c0" class="t-p"></div>' +
    '<div class="cli hid" data-k="ban"><div class="t-b">GitHub Copilot CLI</div><div class="t-d">Working in ~/contoso-order-desk · Model: Auto · Type /help for commands</div></div>' +
    '<div class="cli-in hid" data-k="p1"><span class="t-c">❯ </span><span data-k="q1"></span></div>' +
    '<div class="hid" data-k="r1"><div class="t-d">● Fetching the latest workflow run for fix/weekend-delivery (GitHub MCP server)</div><div class="t-d">● Reading the failed job log: test (ubuntu-latest)</div><div>  <span class="t-r">✖ express on a Friday skips the weekend</span></div><div class="t-d">    expected \'2026-11-02\', actual \'2026-10-31\'</div></div>' +
    '<div class="cli-box fit hid" data-k="ask"><div>Copilot wants to run: <span class="t-b">node --test test/delivery-estimate.test.js</span></div><div class="opt on" data-k="o1">❯ 1. Yes</div><div class="opt">  2. Yes, and don\'t ask again for this command in this session</div><div class="opt">  3. No, and tell Copilot what to do differently (Esc)</div></div>' +
    '<div class="fit hid" data-k="r2"><div class="t-r">  ✖ 1 of 5 tests failed</div><div>● The weekend check in <span class="t-b">src/legacy/delivery-estimate.js</span> uses <span class="t-y">||</span>,</div><div>  so Saturdays and Sundays are counted. It should be <span class="t-y">&amp;&amp;</span>.</div><div class="t-d">● Edited src/legacy/delivery-estimate.js (+1 −1) · reran the tests: 5 passed</div></div>' +
    '<div class="cli-in hid" data-k="p2"><span class="t-c">❯ </span><span data-k="q2"></span></div>' +
    '<div class="fit hid" data-k="diff"><div class="t-b">src/legacy/delivery-estimate.js</div><div class="t-d">@@ -8,7 +8,7 @@</div><div class="t-r">-    if (day !== 0 || day !== 6) added++;</div><div class="t-g">+    if (day !== 0 &amp;&amp; day !== 6) added++;</div></div>' }),
    steps: [
      { t: 0.2, cap: 'In the terminal: <b>Copilot CLI</b>, on a branch where CI is failing.' },
      { t: 0.6, type: 'c0', str: '$ copilot', cps: 12 }, { t: 1.6, show: 'ban' },
      { t: 2.2, show: 'p1' }, { t: 2.4, type: 'q1', str: 'My CI is failing on this branch. Fetch the workflow logs and fix the problem.', cps: 40 },
      { t: 4.6, cap: 'It reads the failed workflow log through the built-in <b>GitHub MCP server</b>.' },
      { t: 5.0, show: 'r1' }, { t: 5.0, lines: 'r1', dur: 3 },
      { t: 8.6, show: 'ask' }, { t: 8.7, cap: 'Before it runs a command, Copilot asks for approval.' },
      { t: 9.0, zoom: 'ask', s: 1.35 }, { t: 14.0, zoom: null },
      { t: 12.6, el: 'o1', add: 'pick' },
      { t: 13.2, hide: 'ask' }, { t: 13.4, show: 'r2' }, { t: 13.4, lines: 'r2', dur: 3 },
      { t: 14.4, cap: 'It finds the bug: <b>||</b> instead of <b>&amp;&amp;</b> counts weekends. It fixes it and reruns the tests.' },
      { t: 15.0, zoom: 'r2', s: 1.3 }, { t: 22.0, zoom: null },
      { t: 22.6, show: 'p2' }, { t: 22.8, type: 'q2', str: '/diff', cps: 8 },
      { t: 23.8, show: 'diff' }, { t: 23.8, lines: 'diff', dur: 1.6 },
      { t: 24.0, cap: '<b>/diff</b> shows exactly what changed. Nothing is committed or pushed until the developer decides.' },
      { t: 25.0, zoom: 'diff', s: 1.5 }, { t: 33.0, zoom: null },
      { t: 33.4, cap: 'Understand, test, plan, delegate and fix: Copilot across a developer\'s day.' }
    ] });
  D.push({ id: 'copilot', session: 3, label: 'Session 3', title: 'Accelerating Developer Productivity with GitHub Copilot', desk: true, fade: 0.15, clock: '13:48', stepLabel: steps(0, 6), scenes: C });

  /* =====================================================================
     SESSION 4 · Building Security into the Developer Workflow
     ===================================================================== */
  var SETNAV = '<div class="nav"><div>General</div><div>Collaborators and teams</div><div class="grp">Code and automation</div><div>Branches</div><div data-k="navRules">Rules</div><div>Actions</div><div>Environments</div><div class="grp">Security</div><div data-k="navAS" class="on">Advanced Security</div><div>Deploy keys</div><div>Secrets and variables</div><div class="grp">Integrations</div><div>Copilot</div></div>';
  var B = [];
  // 1 · Custom pattern
  B.push({ name: 'Custom pattern', chapter: '1 · Custom pattern', app: 'edge', dur: 25, html: gh({ tab: 'Settings', page: 'Advanced Security · contoso/contoso-order-desk', url: 'github.com/contoso/contoso-order-desk/settings/security_analysis', body:
    '<div class="set">' + SETNAV + '<div style="flex:1;min-width:0">' +
    '<div data-k="list"><div style="font-size:20px;margin-bottom:10px">Advanced Security</div>' +
    '<div class="gh-box"><div class="rule">' + ci('ok') + '<div><b>Secret Protection</b><div class="s">Secret scanning alerts for this repository</div></div><span class="pill" style="margin-left:auto">Enabled</span></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Push protection</b><div class="s">Block commits that contain supported secrets</div></div><span class="pill" style="margin-left:auto">Enabled</span></div></div>' +
    '<div style="display:flex;align-items:center;margin:16px 0 8px"><b>Custom patterns</b><span class="gbtn" data-k="newp" style="margin-left:auto">New pattern</span></div><div class="gh-box"><div class="chk" style="color:#59636e">No custom patterns yet.</div></div></div>' +
    '<div class="hid" data-k="form"><div style="font-size:20px;margin-bottom:12px">New custom pattern</div>' +
    '<div class="fld"><label>Pattern name</label><div class="inpt" data-k="f1"><span data-k="v1"></span></div></div>' +
    '<div class="fld"><label>Secret format</label><div class="inpt mono" data-k="f2"><span data-k="v2"></span></div></div>' +
    '<div class="fld"><label>Test string</label><div class="inpt mono big" data-k="f3"><span data-k="v3"></span><span class="hid" data-k="v3m">ORDER_DESK_API_KEY=<mark>contoso_demo_0123456789abcdef0123456789abcdef</mark></span></div><div class="s hid" data-k="m1" style="color:#1a7f37;font-size:12.5px;margin-top:4px">1 match</div></div>' +
    '<div style="display:flex;gap:8px;align-items:center"><span class="gbtn" data-k="dry">Save and dry run</span><span class="gbtn pri hid" data-k="pub">Publish pattern</span><span class="s hid" data-k="dres" style="font-size:12.5px;color:#59636e">Dry run complete · 0 matches in this repository</span></div>' +
    '<div class="gh-box hid" data-k="pp" style="margin-top:14px"><div class="rule"><span data-k="ppi">' + ci('wait') + '</span><div><b>Push protection</b><div class="s" data-k="pps">Block pushes that contain this secret</div></div><span class="gbtn pri" data-k="en" style="margin-left:auto">Enable</span></div></div>' +
    '</div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'Set-up first: a <b>custom pattern</b> for a made-up Contoso token. Never demo with a real credential.' },
      { t: 1.6, click: 'newp' }, { t: 1.9, hide: 'list' }, { t: 1.9, show: 'form' },
      { t: 2.4, click: 'f1' }, { t: 2.6, type: 'v1', str: 'Contoso demo token', cps: 22 },
      { t: 3.6, click: 'f2' }, { t: 3.8, type: 'v2', str: 'contoso_demo_[a-z0-9]{32}', cps: 22 },
      { t: 5.2, click: 'f3' }, { t: 5.4, type: 'v3', str: 'ORDER_DESK_API_KEY=contoso_demo_0123456789abcdef0123456789abcdef', cps: 40 },
      { t: 7.2, el: 'v3', text: '' }, { t: 7.2, show: ['v3m', 'm1'] },
      { t: 7.4, cap: 'The test string confirms the format matches before anything is published.' },
      { t: 7.6, zoom: 'f3', s: 1.5 }, { t: 11.6, zoom: null },
      { t: 12.0, click: 'dry' }, { t: 12.4, show: 'dres' }, { t: 12.4, show: 'pub' },
      { t: 12.6, cap: '<b>Save and dry run</b>, then <b>Publish pattern</b>.' },
      { t: 14.6, click: 'pub' }, { t: 14.9, hide: ['pub', 'dres', 'dry'] }, { t: 15.0, show: 'pp' },
      { t: 15.2, cap: 'Now enable <b>push protection</b> for the new pattern.' },
      { t: 17.0, click: 'en' }, { t: 17.3, el: 'en', add: 'hid' }, { t: 17.3, el: 'ppi', html: ci('ok') }, { t: 17.3, el: 'pps', text: 'Enabled · pushes containing this secret are blocked' },
      { t: 17.6, focus: 'pp', dur: 4.6 }
    ] });
  // 2 · Push protection
  B.push({ name: 'Push protection', chapter: '2 · Push protection', app: 'term', dur: 37, html: K.term({ title: 'Ubuntu · contoso-order-desk', body:
    '<div class="t-d">~/contoso-order-desk <span class="t-c">(main)</span></div>' +
    '<div data-k="c1" class="t-p"></div><div class="hid t-d" data-k="o1">Switched to a new branch \'demo/push-protection\'</div>' +
    '<div data-k="c2" class="t-p"></div>' +
    '<div data-k="c3" class="t-p"></div><div class="hid t-d" data-k="o3">[demo/push-protection 4f2c9a1] Add Order Desk configuration\n 1 file changed, 1 insertion(+)</div>' +
    '<div data-k="c4" class="t-p"></div>' +
    '<div class="fit hid" data-k="o4"><div class="t-r">remote: error: GH013: Repository rule violations found for refs/heads/demo/push-protection.</div><div class="t-y">remote: - GITHUB PUSH PROTECTION</div><div class="t-y">remote:   Resolve the following violations before pushing again</div><div class="t-y">remote:   - Push cannot contain secrets</div><div class="t-y">remote:     —— Contoso demo token ——————————————————</div><div class="t-y">remote:      locations:</div><div class="t-y">remote:        - commit: 4f2c9a1</div><div class="t-y">remote:          path: config.env:1</div><div class="t-r"> ! [remote rejected] demo/push-protection -&gt; demo/push-protection (push declined due to repository rule violations)</div></div>' +
    '<div data-k="c5" class="t-p"></div><div class="hid t-d" data-k="o5">rm \'config.env\'</div>' +
    '<div data-k="c6" class="t-p"></div><div class="hid t-d" data-k="o6">[demo/push-protection 7be0d13] Ignore local configuration\n 1 file changed, 1 insertion(+)</div>' +
    '<div data-k="c7" class="t-p"></div>' +
    '<div class="fit hid" data-k="o7"><div class="t-d">To github.com:contoso/contoso-order-desk.git</div><div class="t-g"> * [new branch]      demo/push-protection -&gt; demo/push-protection</div><div class="t-d">branch \'demo/push-protection\' set up to track \'origin/demo/push-protection\'.</div></div>' }),
    steps: [
      { t: 0.2, cap: 'A developer adds a configuration file with the made-up token…' },
      { t: 0.5, type: 'c1', str: '$ git switch -c demo/push-protection', cps: 40 }, { t: 1.6, show: 'o1' },
      { t: 2.0, type: 'c2', str: '$ echo "ORDER_DESK_API_KEY=contoso_demo_0123456789abcdef0123456789abcdef" > config.env', cps: 55 },
      { t: 4.0, type: 'c3', str: '$ git add config.env && git commit -m "Add Order Desk configuration"', cps: 50 }, { t: 5.6, show: 'o3' },
      { t: 6.2, type: 'c4', str: '$ git push -u origin demo/push-protection', cps: 40 },
      { t: 7.6, show: 'o4' }, { t: 7.6, lines: 'o4', dur: 1.6 },
      { t: 7.8, cap: '…and <b>push protection</b> blocks the push. The secret never reaches GitHub.' },
      { t: 9.4, zoom: 'o4', s: 1.3 }, { t: 15.6, zoom: null },
      { t: 11.4, cap: 'The message names the secret type, the commit and the file and line.' },
      { t: 16.0, cap: 'No bypass needed: take the file out of the commit, ignore it, and push again.' },
      { t: 16.4, type: 'c5', str: '$ git rm --cached config.env && echo "config.env" >> .gitignore', cps: 50 }, { t: 18.0, show: 'o5' },
      { t: 18.6, type: 'c6', str: '$ git add .gitignore && git commit --amend -m "Ignore local configuration"', cps: 50 }, { t: 20.4, show: 'o6' },
      { t: 21.2, type: 'c7', str: '$ git push -u origin demo/push-protection', cps: 40 },
      { t: 22.6, show: 'o7' }, { t: 22.6, lines: 'o7', dur: 1 },
      { t: 23.0, cap: 'The clean push goes through.' },
      { t: 23.6, zoom: 'o7', s: 1.4 }, { t: 30.0, zoom: null },
      { t: 30.4, cap: 'A bypass would need a reason, and creates an alert and an audit log entry.' }
    ] });
  // 3 · Code scanning + Copilot Autofix
  var XSS = "app.get('/orders/lookup', (req, res) => {\n  const id = req.query.id;\n  const order = orders.find((o) => o.id === id);\n  if (!order) {\n    return res.send(`<p>No order found for ${id}</p>`);\n  }\n  res.json(order);\n});";
  B.push({ name: 'CodeQL and Copilot Autofix', chapter: '3 · Code scanning + Autofix', app: 'edge', dur: 30, html: gh({ tab: 'Pull requests', page: 'Show not-found message #18', url: 'github.com/contoso/contoso-order-desk/pull/18', scroll: true, body:
    '<h1 class="gh-title">Show not-found message <span class="no">#18</span></h1><div class="gh-meta"><span class="st-open">⇄ Open</span><b>presenter</b> wants to merge 1 commit into <code>main</code> from <code>demo/not-found-message</code></div>' +
    '<div class="gh-sub"><span data-k="tConv" class="on">Conversation</span><span>Commits 1</span><span>Checks 3</span><span data-k="tFiles">Files changed 1</span></div>' +
    '<div data-k="conv"><div class="gh-box" data-k="chk"><div class="chk">' + ci('ok') + '<b>build</b><span class="r">Successful in 36s</span></div><div class="chk">' + ci('ok') + '<b>Dependency Review</b><span class="r">No vulnerable packages</span></div><div class="chk" data-k="cq">' + ci('bad') + '<b>Code scanning results / CodeQL</b><span class="r">1 new alert including 1 high severity security vulnerability</span></div></div>' +
    '<div class="merge bad">' + ci('bad') + '<div><b>Merging is blocked</b><div style="color:#59636e;font-size:12.5px">Code scanning found a new high severity alert</div></div></div></div>' +
    '<div class="hid" data-k="files"><div class="gh-box" style="max-width:980px"><div class="diffh">src/app.js</div>' + K.code(XSS, { lang: 'js', start: 30, add: [30, 31, 32, 33, 34, 35, 36, 37] }) +
    '<div class="annot" data-k="ann" style="margin:6px 12px"><div class="h">Code scanning · CodeQL · <span class="sev h">High</span> Reflected cross-site scripting</div><div style="font-size:13px">Cross-site scripting vulnerability due to a user-provided value.</div></div>' +
    '<div class="cmt hid" data-k="afx" style="margin:6px 12px"><div class="hd"><span class="av cp">C</span><b>Copilot Autofix for CodeQL</b></div><div class="bd" data-k="afxb"><div>Encode the user-provided value before writing it into the HTML response.</div><div class="sugg"><div class="h">Suggested fix · src/app.js, package.json</div><div class="a">+ import escapeHtml from \'escape-html\';</div><div class="d">-     return res.send(`&lt;p&gt;No order found for ${id}&lt;/p&gt;`);</div><div class="a">+     return res.send(`&lt;p&gt;No order found for ${escapeHtml(id)}&lt;/p&gt;`);</div><div class="a">+   "escape-html": "^1.0.3"</div></div><div style="margin-top:6px"><span class="gbtn pri" data-k="cfx">Commit fix</span> <span class="gbtn">Edit</span> <span class="gbtn">Dismiss suggestion</span></div></div></div></div>' +
    '<div class="gh-box" style="max-width:980px"><div class="chk" data-k="chk2">' + ci('run') + '<b>Code scanning results / CodeQL</b><span class="r" data-k="chk2r">Waiting for the fix</span></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'A pull request adds a handler with a deliberate flaw. <b>CodeQL</b> runs on it automatically.' },
      { t: 1.0, focus: 'cq', dur: 3 },
      { t: 4.4, click: 'tFiles' }, { t: 4.7, hide: 'conv' }, { t: 4.7, show: 'files' }, { t: 4.7, el: 'tConv', rm: 'on' }, { t: 4.7, el: 'tFiles', add: 'on' },
      { t: 4.9, cap: 'The alert sits on the changed line: <b>reflected cross-site scripting</b>.' },
      { t: 5.4, zoom: 'ann', s: 1.35 }, { t: 9.0, zoom: null },
      { t: 9.4, show: 'afx' }, { t: 9.4, lines: 'afxb', dur: 1.6 },
      { t: 9.6, cap: '<b>Copilot Autofix</b> proposes a fix. Review it like any other change.' },
      { t: 10.4, zoom: 'afx', s: 1.3 }, { t: 17.4, zoom: null },
      { t: 17.8, click: 'cfx' }, { t: 18.1, el: 'cfx', text: 'Fix committed' },
      { t: 18.4, el: 'chk2r', text: 'In progress' },
      { t: 21.4, el: 'chk2', html: ci('ok') + '<b>Code scanning results / CodeQL</b><span class="r">No new alerts</span>' },
      { t: 21.6, cap: 'CodeQL reruns and the alert closes. Autofix needs no Copilot licence.' },
      { t: 22.0, focus: 'chk2', dur: 5 }
    ] });
  // 4 · Dependency review
  B.push({ name: 'Dependency review', chapter: '4 · Dependency review', app: 'edge', dur: 19, html: gh({ tab: 'Pull requests', page: 'Add date helper dependency #19', url: 'github.com/contoso/contoso-order-desk/pull/19', body:
    '<h1 class="gh-title">Add date helper dependency <span class="no">#19</span></h1><div class="gh-meta"><span class="st-open">⇄ Open</span>Adds <code>lodash@4.17.15</code> to <code>package.json</code></div>' +
    '<div class="gh-box"><div class="chk">' + ci('ok') + '<b>build</b><span class="r">Successful in 41s</span></div><div class="chk" data-k="dr">' + ci('bad') + '<b>Dependency Review</b><span class="r">Failing after 9s · <span style="color:#0969da" data-k="det">Details</span></span></div>' +
    '<div class="fit hid" data-k="drd" style="padding:6px 14px 10px 38px;font-size:13px"><div style="margin-bottom:4px"><b>Dependency review found 2 vulnerable packages</b></div><div class="dep"><span>lodash@4.17.15</span><span>Prototype Pollution in lodash</span><span class="sev h">high</span></div><div class="dep"><span>lodash@4.17.15</span><span>Command Injection in lodash</span><span class="sev h">high</span></div></div></div>' +
    '<div class="merge bad" data-k="mb">' + ci('bad') + '<div><b>Merging is blocked</b><div style="color:#59636e;font-size:12.5px">Required status check "Dependency Review" has failed</div></div><span class="gbtn" data-k="close" style="margin-left:auto">Close pull request</span></div>' }),
    steps: [
      { t: 0.2, cap: 'Another pull request adds an old package version with published advisories.' },
      { t: 1.4, click: 'det' }, { t: 1.7, show: 'drd' }, { t: 1.7, lines: 'drd', dur: 1.2 },
      { t: 1.9, cap: '<b>Dependency review</b> lists the vulnerable package and its advisories in the pull request.' },
      { t: 2.6, zoom: 'drd', s: 1.3 }, { t: 9.0, zoom: null },
      { t: 9.4, focus: 'mb', dur: 4 }, { t: 9.5, cap: 'The check is required, so the package can\'t merge.' },
      { t: 14.0, click: 'close' }, { t: 14.3, el: 'close', text: 'Closed' }
    ] });
  // 5 · Dependabot
  B.push({ name: 'Dependabot alerts', chapter: '5 · Dependabot', app: 'edge', dur: 21, html: gh({ repo: 'contoso-returns-portal', tab: 'Security and quality', page: 'Dependabot alerts · contoso/contoso-returns-portal', url: 'github.com/contoso/contoso-returns-portal/security/dependabot', body:
    '<div class="set"><div class="nav"><div>Overview</div><div class="grp">Vulnerability alerts</div><div class="on">Dependabot</div><div>Code scanning</div><div>Secret scanning</div></div><div style="flex:1;min-width:0">' +
    '<div data-k="alist"><div style="font-size:20px;margin-bottom:10px">Dependabot alerts</div><div class="gh-box"><div class="chk" style="background:#f6f8fa;color:#59636e">2 Open · 0 Closed</div>' +
    '<div class="chk" data-k="al1"><span class="sh-ic"></span><div><b>Command Injection in lodash</b><div style="color:#59636e;font-size:12.5px">#7 opened 3 days ago · package-lock.json</div></div><span class="sev h" style="margin-left:auto">High</span></div>' +
    '<div class="chk"><span class="sh-ic"></span><div><b>Prototype Pollution in lodash</b><div style="color:#59636e;font-size:12.5px">#6 opened 3 days ago · package-lock.json</div></div><span class="sev h" style="margin-left:auto">High</span></div></div></div>' +
    '<div class="hid" data-k="adet"><div style="font-size:20px;margin-bottom:6px">Command Injection in lodash <span class="no" style="color:#59636e">#7</span></div><div class="gh-meta"><span class="st-open">Open</span>Opened 3 days ago on lodash (npm) · package-lock.json</div>' +
    '<div class="gh-box"><div class="chk"><b style="width:160px">Package</b>lodash (npm)</div><div class="chk"><b style="width:160px">Affected versions</b>&lt; 4.17.21</div><div class="chk"><b style="width:160px">Patched version</b>4.17.21</div></div>' +
    '<div style="display:flex;gap:8px;align-items:center"><span class="gbtn pri" data-k="cdu">Create Dependabot security update</span><span class="gbtn">Assign to Copilot</span></div>' +
    '<div class="banner blue hid" data-k="dpr" style="margin-top:12px">Dependabot opened pull request <b>&nbsp;#42 Bump lodash from 4.17.15 to 4.17.21</b></div></div>' +
    '</div></div>' }),
    steps: [
      { t: 0.2, cap: 'On an older Contoso app, <b>Dependabot alerts</b> flag the same vulnerable package.' },
      { t: 1.4, focus: 'al1', dur: 2.6 },
      { t: 4.4, click: 'al1' }, { t: 4.7, hide: 'alist' }, { t: 4.7, show: 'adet' },
      { t: 5.0, cap: 'The alert shows the affected versions and the first patched version.' },
      { t: 8.6, click: 'cdu' }, { t: 9.0, el: 'cdu', text: 'Creating pull request…' },
      { t: 10.6, show: 'dpr' }, { t: 10.6, el: 'cdu', add: 'hid' },
      { t: 10.8, cap: 'Dependabot opens a pull request to the minimum patched version. Alerts can also be assigned to Copilot.' },
      { t: 11.2, zoom: 'dpr', s: 1.45 }, { t: 18.6, zoom: null }
    ] });
  // 6 · Rulesets and security overview
  B.push({ name: 'Ruleset on main', chapter: '6 · Rulesets and overview', app: 'edge', dur: 12, html: gh({ tab: 'Settings', page: 'Rulesets · contoso/contoso-order-desk', url: 'github.com/contoso/contoso-order-desk/settings/rules/1', body:
    '<div class="set">' + SETNAV.replace('<div data-k="navRules">Rules</div>', '<div data-k="navRules" class="on">Rules › Rulesets</div>').replace('<div data-k="navAS" class="on">', '<div data-k="navAS">') +
    '<div style="flex:1"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><b style="font-size:18px">Protect main</b><span class="lbl" style="background:#dafbe1;color:#1a7f37">Active</span><span class="pill">Target: default branch</span></div>' +
    '<div class="gh-box" data-k="rules"><div class="rule">' + ci('ok') + '<div><b>Require a pull request before merging</b><div class="s">1 required approval · review from Code Owners</div></div></div>' +
    '<div class="rule" data-k="r2">' + ci('ok') + '<div><b>Require status checks to pass</b><div class="s">build · Dependency Review</div></div></div>' +
    '<div class="rule" data-k="r3">' + ci('ok') + '<div><b>Require code scanning results</b><div class="s">CodeQL · security alerts: High or higher</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Block force pushes</b></div></div></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'A <b>ruleset</b> on main makes the gates mandatory: required checks and code scanning results.' },
      { t: 0.4, lines: 'rules', dur: 2 }, { t: 2.8, focus: 'r2', dur: 3.6 }, { t: 6.6, focus: 'r3', dur: 4.6 },
      { t: 6.8, cap: 'The same rules apply whether a person or an agent wrote the code.' }
    ] });
  B.push({ name: 'Security overview', app: 'edge', cut: true, dur: 13, html: gh({ page: 'Security overview · Contoso', url: 'github.com/orgs/contoso/security/overview', head: '<div class="gh-head"><div class="gh-top"><span class="gh-logo"></span><b>contoso</b></div><div class="gh-tabs"><span>Overview</span><span>Repositories</span><span>Projects</span><span>Packages</span><span class="on">Security</span><span>Insights</span><span>Settings</span></div></div>', body:
    '<div style="font-size:20px;margin-bottom:12px">Security overview</div>' +
    '<div class="ov" data-k="ov"><div class="ovc"><div class="k">Open alerts</div><div class="n">7</div><div class="s">across 20 repositories</div></div><div class="ovc"><div class="k">Critical and high</div><div class="n" style="color:#cf222e">2</div><div class="s">both Dependabot · lodash</div></div><div class="ovc" data-k="ovpp"><div class="k">Push protection, 30 days</div><div class="n">3</div><div class="s">blocked pushes · 0 bypasses</div></div><div class="ovc"><div class="k">Code scanning coverage</div><div class="n">18 / 20</div><div class="s">repositories with CodeQL</div></div></div>' +
    '<div class="gh-box" style="margin-top:14px"><div class="chk" style="background:#f6f8fa;font-weight:600;color:#59636e">Alerts by repository</div><div class="chk"><b>contoso-returns-portal</b><span class="r">2 Dependabot · fix PR #42 open</span></div><div class="chk"><b>contoso-order-desk</b><span class="r">0 open · 1 fixed today with Copilot Autofix</span></div><div class="chk"><b>contoso-loyalty-api</b><span class="r">5 code scanning · medium</span></div></div>' }),
    steps: [
      { t: 0.2, cap: '<b>Security overview</b> shows risk and coverage across the organization.' },
      { t: 0.4, lines: 'ov', dur: 1.6 },
      { t: 3.4, focus: 'ovpp', dur: 3.6 }, { t: 3.5, cap: 'Including push protection blocks and bypasses. Every gate you saw today reports here.' },
      { t: 7.6, zoom: 'ov', s: 1.25 }, { t: 12.0, zoom: null }
    ] });
  D.push({ id: 'security', session: 4, label: 'Session 4', title: 'Building Security into the Developer Workflow', desk: true, fade: 0.15, clock: '14:16', stepLabel: steps(0, 6), scenes: B });

  /* =====================================================================
     SESSION 5 · Live Demo: From Business Requirement to Production
     ===================================================================== */
  var APP_JS = "import express from 'express';\nimport { readFileSync } from 'node:fs';\nimport { fileURLToPath } from 'node:url';\nimport { isValidOrderId } from './validation.js';\n\nconst dataFile = fileURLToPath(new URL('../data/orders.json', import.meta.url));\nconst publicDir = fileURLToPath(new URL('../public', import.meta.url));\nconst orders = JSON.parse(readFileSync(dataFile, 'utf8'));\n\nexport const app = express();\napp.disable('x-powered-by');\napp.use(express.static(publicDir));\n\napp.get('/health', (req, res) => {\n  res.json({ status: 'ok', orders: orders.length });\n});";
  var ROUTE = "\napp.get('/api/orders/:orderId', (req, res) => {\n  const { orderId } = req.params;\n  if (!isValidOrderId(orderId)) {\n    return res.status(400).json({ error: 'Order numbers look like ORD-123456' });\n  }\n  const order = orders.find((o) => o.id === orderId);\n  if (!order) {\n    return res.status(404).json({ error: 'Order not found' });\n  }\n  const { id, status, lastUpdated, estimatedDelivery } = order;\n  res.json({ id, status, lastUpdated, estimatedDelivery });\n});";
  var LTREE = [
    { t: '.github', d: 1 }, { t: 'copilot-instructions.md', i: 1, k: 'fins' }, { t: 'workflows', d: 1, i: 1 },
    { t: 'data', d: 1 }, { t: 'orders.json', i: 1 },
    { t: 'public', d: 1 }, { t: 'index.html', i: 1 },
    { t: 'src', d: 1 }, { t: 'app.js', i: 1, on: 1 }, { t: 'server.js', i: 1 }, { t: 'validation.js', i: 1, n: 1, k: 'fval', hid: 1 },
    { t: 'test', d: 1 }, { t: 'health.test.js', i: 1 }, { t: 'orders.test.js', i: 1, n: 1, k: 'ftest', hid: 1 },
    { t: 'package.json' }, { t: 'README.md' }
  ];
  var REQ = 'In contoso/contoso-order-desk, create a feature issue from the requirement below using our Feature request form. Write testable acceptance criteria, and create sub-issues for: (1) the order lookup API, (2) the agent lookup page, (3) an audit log of every lookup.';
  var L = [];
  // ---- 1 · Issues & Projects
  L.push({ name: 'Copilot drafts the issue', chapter: '1 · Issues & Projects', app: 'edge', dur: 17, html: gh({ page: 'Copilot · GitHub', fav: 'cp', url: 'github.com/copilot', head: COPILOT_HEAD, body:
    '<div class="cp-chat" style="max-width:980px;margin:0 auto">' +
    '<div class="q hid" data-k="u1"><div>' + esc(REQ) + ' <span class="pill">Requirement: Order Desk (pasted)</span></div></div>' +
    '<div class="hid" data-k="r1"><div style="font-size:13.5px;margin:4px 0">Here is a draft that follows the <b>Feature request</b> form:</div>' +
    '<div class="draft" data-k="draft"><div class="t">[Feature]: Order Desk – look up order status by order number</div><div class="kv">Type: Feature · Label: enhancement · Project: Order Desk</div>' +
    '<div style="font-size:13px;margin-top:6px"><b>Acceptance criteria</b><ul style="margin:2px 0 0;padding-left:20px"><li>A valid order number shows status and estimated delivery date</li><li data-k="ac2">An unknown<span data-k="ac2x"></span> order number shows a clear "not found" message</li><li>Payment details are never shown</li><li>Every lookup is recorded for audit</li></ul></div></div>' +
    '<div class="draft" style="padding:4px 0"><div class="kv" style="padding:4px 12px">Sub-issues (3)</div>' +
    '<div class="subi"><span class="icon-o"></span>Order lookup API</div><div class="subi"><span class="icon-o"></span>Agent lookup page</div><div class="subi"><span class="icon-o"></span>Audit log of every lookup</div></div>' +
    '<div style="margin-top:6px"><span class="gbtn pri" data-k="create">Create issue</span> <span class="gbtn">Edit</span></div></div></div>' +
    '<div class="inpt" data-k="box" style="position:absolute;left:22px;right:22px;bottom:14px;min-height:46px;padding-right:90px"><span data-k="in" style="white-space:pre-wrap"></span><span class="ph" data-k="ph">Ask Copilot</span><span class="gbtn blue" data-k="send" style="position:absolute;right:8px;bottom:7px">Send</span></div>' }),
    steps: [
      { t: 0.2, cap: 'The presenter pastes the business requirement into <b>Copilot on GitHub.com</b>.' },
      { t: 0.6, click: 'box' },
      { t: 0.9, ph: 'ph', type: 'in', str: REQ, cps: 110 },
      { t: 3.4, click: 'send' }, { t: 3.6, el: 'in', text: '' }, { t: 3.6, show: ['u1', 'ph'] },
      { t: 4.1, show: 'r1' }, { t: 4.1, lines: 'r1', dur: 2.2 },
      { t: 4.3, cap: 'Copilot maps it to the repository\'s issue form and drafts three sub-issues <b>(public preview)</b>.' },
      { t: 7.0, zoom: 'draft', s: 1.3 },
      { t: 7.8, focus: 'ac2', dur: 2.8, pad: 3 }, { t: 7.9, cap: 'People own the requirement: the presenter tightens one criterion by hand.' },
      { t: 8.4, type: 'ac2x', str: ' or mistyped', cps: 18 },
      { t: 11.4, zoom: null },
      { t: 12.6, click: 'create' }, { t: 13.0, cap: 'Create the issue.' }
    ] });
  L.push({ name: 'Issue #12', app: 'edge', cut: true, dur: 8, html: gh({ tab: 'Issues', page: '[Feature]: Order Desk #12', url: 'github.com/contoso/contoso-order-desk/issues/12', body:
    '<h1 class="gh-title">[Feature]: Order Desk – look up order status by order number <span class="no">#12</span></h1>' +
    '<div class="gh-meta"><span class="st-open">● Open</span><b>presenter</b> opened this issue now</div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="gh-box"><div class="hd"><span class="av">P</span><b>presenter</b> commented</div><div class="bd"><h4 style="margin-top:0">Business problem</h4>Agents search several systems to answer "where is my order?" calls.<h4>Acceptance criteria</h4><ul><li>A valid order number shows status and estimated delivery date</li><li>An unknown or mistyped order number shows a clear "not found" message</li><li>Payment details are never shown · every lookup is recorded for audit</li></ul></div></div>' +
    '<div class="gh-box" data-k="subs"><div class="hd">Sub-issues <span class="pill">0 of 3</span></div><div class="subi"><span class="icon-o"></span>Order lookup API <span class="pill">#13</span></div><div class="subi"><span class="icon-o"></span>Agent lookup page <span class="pill">#14</span></div><div class="subi"><span class="icon-o"></span>Audit log of every lookup <span class="pill">#15</span></div></div></div>' +
    side([{ h: 'Assignees', v: 'No one' }, { h: 'Labels', v: '<span class="lbl enh">enhancement</span>' }, { h: 'Type', k: 'type', v: '<span class="lbl feat">Feature</span>' }, { h: 'Projects', k: 'proj', v: 'Order Desk · Todo' }, { h: 'Development', v: 'No branches or pull requests' }]) + '</div>' }),
    steps: [{ t: 0.2, cap: 'Issue #12 arrives with its type, label, project and three sub-issues.' }, { t: 1.4, focus: 'subs', dur: 2.6 }, { t: 4.4, focus: 'type', dur: 1.6 }, { t: 6.0, focus: 'proj', dur: 1.8 }] });
  L.push({ name: 'Project board', app: 'edge', cut: true, dur: 7, html: gh({ tab: 'Projects', page: 'Order Desk · Project', url: 'github.com/orgs/contoso/projects/1', body:
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><b style="font-size:18px">Order Desk</b><span class="pill">Board</span><span class="pill">Table</span><span class="pill">Roadmap</span></div>' +
    '<div class="board"><div class="col"><div class="h"><span class="icon-o" style="border-color:#8c959f"></span>Todo <span class="pill" data-k="nTodo">4</span></div><div class="card2" data-k="c12a">[Feature]: Order Desk – look up order status by order number<div class="s">#12 · Feature</div></div><div class="card2">Order lookup API<div class="s">#13 · sub-issue of #12</div></div><div class="card2">Agent lookup page<div class="s">#14 · sub-issue of #12</div></div><div class="card2">Audit log of every lookup<div class="s">#15 · sub-issue of #12</div></div></div>' +
    '<div class="col" data-k="colIP"><div class="h"><span class="icon-o" style="border-color:#bf8700"></span>In progress <span class="pill" data-k="nIP">0</span></div><div class="card2 hid" data-k="c12b">[Feature]: Order Desk – look up order status by order number<div class="s">#12 · Feature</div></div></div>' +
    '<div class="col"><div class="h"><span class="icon-done"></span>Done <span class="pill">0</span></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'On the <b>Project board</b>, the presenter moves the feature to <b>In progress</b>.' },
      { t: 1.0, click: 'c12a' }, { t: 1.8, move: 'colIP' },
      { t: 2.6, hide: 'c12a' }, { t: 2.6, show: 'c12b' }, { t: 2.6, el: 'nTodo', text: '3' }, { t: 2.6, el: 'nIP', text: '1' },
      { t: 3.0, cap: 'Stakeholders follow progress here without reading code.' }
    ] });
  L.push({ name: 'Delegate the page to Copilot', app: 'edge', cut: true, dur: 13, html: gh({ tab: 'Issues', page: 'Agent lookup page #14', url: 'github.com/contoso/contoso-order-desk/issues/14', body:
    '<h1 class="gh-title">Agent lookup page <span class="no">#14</span></h1><div class="gh-meta"><span class="st-open">● Open</span>Sub-issue of #12 · Order Desk</div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="gh-box"><div class="hd"><span class="av">P</span><b>presenter</b> commented</div><div class="bd">Build the page agents use to look up an order. Use <code>GET /api/orders/:orderId</code>. Show a clear message for unknown order numbers. Keyboard accessible. Add tests.</div></div>' +
    tl('tl1', '<span class="av cp">C</span><b>Copilot</b> was assigned by <b>presenter</b>') + tl('tl2', '<span class="av cp">C</span><b>Copilot</b> started work on behalf of <b>presenter</b> · <span class="gbtn">View session</span>') +
    tl('tl3', '<span class="av cp">C</span><b>Copilot</b> opened draft pull request <b>#16 Build the agent lookup page</b> on <code>copilot/agent-lookup-page</code>') + '</div>' +
    side([{ h: 'Assignees', gear: 1, k: 'asg', v: '<span data-k="asgv">No one – <span style="color:#0969da">assign yourself</span></span>' }, { h: 'Labels', v: '<span class="lbl enh">enhancement</span>' }, { h: 'Projects', v: 'Order Desk · Todo' }, { h: 'Development', v: '<span data-k="dev">No branches or pull requests</span>' }]) + '</div>' +
    '<div class="pop hid" data-k="pop" style="right:30px;top:118px"><div class="it" style="font-weight:600;border-top:0">Assign up to 10 people to this issue</div><div class="it on" data-k="pcop"><span class="av cp">C</span><b>Copilot</b></div><div class="it"><span class="av">P</span>presenter</div><div class="it"><span class="av ap">A</span>approver</div></div>' +
    '<div class="modal hid" data-k="dlg"><div class="dlg"><div class="hd">Assign Copilot to issue #14</div><div class="bd">Optional prompt<div class="inpt big" style="margin-top:6px"><span data-k="dprompt" style="white-space:pre-wrap"></span></div><div style="margin-top:8px;font-size:12.5px;color:#59636e">Repository: contoso/contoso-order-desk · Base branch: main</div></div><div class="ft"><span class="gbtn">Cancel</span><span class="gbtn pri" data-k="dassign">Assign</span></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'The presenter delegates the page (issue #14) to the <b>Copilot cloud agent</b>, so it is ready later.' },
      { t: 0.8, click: 'asg' }, { t: 1.0, show: 'pop' },
      { t: 1.9, click: 'pcop' }, { t: 2.1, hide: 'pop' }, { t: 2.1, show: 'dlg' },
      { t: 2.5, type: 'dprompt', str: 'Build the agent lookup page in public/ with plain HTML, CSS and JavaScript. Code against GET /api/orders/:orderId (200, 400, 404). Keyboard accessible. Add tests.', cps: 95 },
      { t: 4.6, click: 'dassign' }, { t: 4.8, hide: 'dlg' }, { t: 4.8, show: 'tl1' }, { t: 4.8, el: 'asgv', html: '<span class="av cp">C</span> Copilot' },
      { t: 5.4, show: 'tl2' }, { t: 5.5, cap: 'Copilot starts work in its own cloud environment on a <b>copilot/</b> branch.' },
      { t: 7.4, show: 'tl3' }, { t: 7.4, el: 'dev', html: '<b>#16</b> Build the agent lookup page (draft)' },
      { t: 7.6, cap: 'A draft pull request appears on the issue. The presenter moves on and checks it later.' }
    ] });
  // ---- 2 · GitHub Copilot (agent mode in VS Code)
  L.push({ name: 'Repository rules', chapter: '2 · GitHub Copilot', app: 'code', dur: 6, html: K.vscode({ branch: 'feature/order-lookup-api', file: 'copilot-instructions.md', tree: LTREE.map(function (x) { var c = {}; for (var k in x) c[k] = x[k]; c.on = x.t === 'copilot-instructions.md' ? 1 : 0; return c; }), mode: 'Plan',
    code: K.code("# Contoso Order Desk: instructions for GitHub Copilot\n\n## Tech stack\n- Node.js 24, Express 5, ES modules (import/export).\n- Tests use the built-in Node.js test runner (node --test).\n\n## Coding standards\n- Validate every request parameter. Order numbers match ORD- followed by six digits.\n- Return errors as JSON { \"error\": \"<message>\" } with the correct HTTP status code.\n\n## Security\n- Never build HTML or queries by concatenating user input; encode output.\n- Do not log customer email addresses or phone numbers.", { lang: 'md' }),
    chat: '' }),
    steps: [{ t: 0.2, cap: 'In VS Code, on branch <b>feature/order-lookup-api</b>: these are Contoso\'s rules, and every Copilot surface reads them.' }, { t: 0.6, zoom: 'ed', s: 1.25, oy: -60 }, { t: 5.4, zoom: null }] });
  L.push({ name: 'Plan, then Agent', app: 'code', cut: true, dur: 21, html: K.vscode({ branch: 'feature/order-lookup-api', file: 'app.js', tree: LTREE, mode: 'Plan', edScroll: true, term: '<div data-k="tcmd" class="t-p"></div><div data-k="tout"><div class="t-d">▶ orders API</div><div class="t-g">  ✔ returns the order for a valid id (8.1ms)</div><div class="t-g">  ✔ returns 400 for an invalid id (1.2ms)</div><div class="t-g">  ✔ returns 404 for an unknown id (0.9ms)</div><div class="t-g">✔ tests 7 · pass 7 · fail 0</div></div>', termHidden: true,
    code: K.code(APP_JS, { lang: 'js', add: [4] }) + '<div data-k="newl">' + K.code(ROUTE, { lang: 'js', start: 16, add: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] }) + '</div>',
    chat: K.u('Plan the order lookup API from issue #13: GET /api/orders/:orderId returns id, status, lastUpdated and estimatedDelivery; 400 when the ID doesn\'t match ORD- plus six digits; 404 with a JSON error for unknown IDs. List the files you will change and the tests you will add.', 'u1') +
      K.c('<div><b>Plan</b></div><div>1. <code>src/validation.js</code>: <code>isValidOrderId()</code></div><div>2. <code>src/app.js</code>: route returning 200, 400 or 404</div><div>3. <code>test/orders.test.js</code>: one test per response</div><div class="warn">No files changed yet.</div>', 'c1') +
      K.u('Implement the plan. Then run npm test and fix any failures.', 'u2') +
      K.c('<div>' + K.file('src/validation.js', 5, 0) + '</div><div>' + K.file('src/app.js', 14, 0) + '</div><div>' + K.file('test/orders.test.js', 34, 0) + '</div><div>' + K.approve('npm test', 'ap1', 'allow1') + '</div>', 'c2') +
      K.c('<span class="ok">✔</span> All 7 tests pass. Review the changes, then commit.', 'c3') }),
    steps: [
      { t: 0.2, cap: '<b>Plan mode</b> first: Copilot researches and proposes a plan without changing files.' },
      { t: 0.5, click: 'inbox' },
      { t: 0.8, type: 'in', str: 'Plan the order lookup API from issue #13: GET /api/orders/:orderId returns id, status, lastUpdated and estimatedDelivery; 400 when the ID doesn\'t match ORD- plus six digits; 404 with a JSON error for unknown IDs. List the files you will change and the tests you will add.', cps: 140 },
      { t: 3.0, click: 'send' }, { t: 3.2, el: 'in', text: '' }, { t: 3.2, show: ['u1', 'ph'] },
      { t: 3.5, show: 'c1' }, { t: 3.5, lines: 'c1b', dur: 2 },
      { t: 6.0, click: 'mode' }].concat(setMode(6.3, 'Agent'), [
      { t: 6.4, cap: 'Then <b>Agent mode</b> implements it: it edits files, runs commands and checks its own work.' },
      { t: 6.8, click: 'inbox' },
      { t: 7.1, type: 'in', str: 'Implement the plan. Then run npm test and fix any failures.', cps: 60 },
      { t: 8.3, click: 'send' }, { t: 8.5, el: 'in', text: '' }, { t: 8.5, show: ['u2', 'ph'] },
      { t: 8.8, show: 'c2' }, { t: 8.8, lines: 'c2b', dur: 2.4 },
      { t: 9.1, show: ['fval', 'ftest'] }, { t: 9.2, lines: 'newl', dur: 2.6 },
      { t: 10.0, zoom: 'ed', s: 1.25 }, { t: 12.6, zoom: null },
      { t: 12.4, cap: 'The presenter approves each command before it runs.' },
      { t: 13.4, click: 'allow1' },
      { t: 13.7, show: 'term' }, { t: 13.8, type: 'tcmd', str: '$ npm test', cps: 25 }, { t: 14.5, lines: 'tout', dur: 1.6 },
      { t: 16.6, show: 'c3' }, { t: 16.7, cap: 'Tests pass. The presenter reviews the diff like a senior engineer before committing.' }
    ]) });
  L.push({ name: 'Commit and push', app: 'code', cut: true, dur: 13, html: K.vscode({ branch: 'feature/order-lookup-api', file: 'app.js', mode: 'Agent', code: K.code(APP_JS, { lang: 'js', add: [4] }) + K.code(ROUTE, { lang: 'js', start: 16 }),
    side: '<div class="sh">SOURCE CONTROL</div><div class="scm"><div class="cmsg" data-k="cm"><span data-k="cmt"></span><span class="ph" data-k="cmph">Message (Ctrl+Enter to commit)</span><span class="spark" data-k="spark" title="Generate commit message">✦</span></div>' +
      '<div class="vbtn wide" data-k="commit">✓ Commit</div><div class="vbtn wide hid" data-k="sync">↻ Sync Changes 1↑</div><div class="sh2" data-k="chg">CHANGES <span class="pill2">4</span></div><div data-k="files"><div class="f">app.js <span class="mk">src · M</span></div><div class="f">validation.js <span class="mk">src · U</span></div><div class="f">orders.test.js <span class="mk">test · U</span></div><div class="f">package.json <span class="mk">M</span></div></div></div>',
    chat: '' }) + '<div class="toast hid" data-k="toast"><div>Create a pull request for <b>feature/order-lookup-api</b>?</div><div style="margin-top:8px;text-align:right"><span class="vbtn" data-k="cpr">Create Pull Request</span><span class="vbtn sec">Don\'t show again</span></div></div>',
    steps: [
      { t: 0.2, cap: 'In <b>Source Control</b>, Copilot drafts the commit message from the diff.' },
      { t: 0.8, click: 'spark' }, { t: 1.2, ph: 'cmph', type: 'cmt', str: 'Add order lookup API with validation and tests (#13)', cps: 40 },
      { t: 1.6, zoom: 'cm', s: 1.45 }, { t: 5.2, zoom: null },
      { t: 5.6, click: 'commit' }, { t: 5.9, hide: ['commit', 'files', 'chg'] }, { t: 5.9, show: 'sync' }, { t: 5.9, el: 'cmt', text: '' }, { t: 5.9, show: 'cmph' },
      { t: 6.0, cap: 'Commit, then push the branch.' },
      { t: 7.0, click: 'sync' }, { t: 7.4, hide: 'sync' }, { t: 7.6, show: 'toast' },
      { t: 8.4, click: 'cpr' }, { t: 8.8, cap: 'Open the pull request on GitHub.' }
    ] });
  L.push({ name: 'Open the pull request', app: 'edge', dur: 12, html: gh({ tab: 'Pull requests', page: 'Open a pull request · contoso/contoso-order-desk', url: 'github.com/contoso/contoso-order-desk/compare/main...feature/order-lookup-api', body:
    '<div style="font-size:20px;margin-bottom:8px">Open a pull request</div><div class="gh-meta"><span class="pill">base: main</span>←<span class="pill">compare: feature/order-lookup-api</span><span style="color:#1a7f37">✓ Able to merge</span></div>' +
    '<div class="gh-box" style="max-width:980px"><div class="bd"><div class="inpt" style="margin-bottom:8px">Add order lookup API</div><div class="mdbar"><span class="on">Write</span><span>Preview</span><span class="cpbtn" data-k="cpb">✦ Copilot ▾</span></div><div class="pop hid" data-k="cpp" style="left:auto;right:8px;top:86px;width:220px"><div class="it on" data-k="sum">Summary</div><div class="it">Outline</div></div>' +
    '<div class="inpt big" data-k="desc" style="min-height:150px"><span data-k="dsc"></span></div>' +
    '<div style="margin-top:10px;text-align:right"><span class="gbtn pri" data-k="crt">Create pull request</span></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'Copilot writes the pull request summary from the changes.' },
      { t: 1.0, click: 'cpb' }, { t: 1.3, show: 'cpp' }, { t: 2.0, click: 'sum' }, { t: 2.3, hide: 'cpp' },
      { t: 2.6, type: 'dsc', str: '## Summary\nAdds GET /api/orders/:orderId. Returns 400 when the ID does not match ORD- plus six digits and 404 with a JSON error for unknown orders.\n\n## Tests\n7 tests with the Node.js test runner.\n\nFixes #13', cps: 120 },
      { t: 3.0, zoom: 'desc', s: 1.35 }, { t: 8.6, zoom: null },
      { t: 6.4, cap: '<b>Fixes #13</b> links the pull request to the sub-issue, which closes when it merges.' },
      { t: 9.6, click: 'crt' }, { t: 9.9, el: 'crt', text: 'Creating…' }
    ] });
  // ---- 3 · Pull requests
  var PR17_HEAD = '<h1 class="gh-title">Add order lookup API <span class="no">#17</span></h1><div class="gh-meta"><span class="st-open" data-k="prst">⇄ Open</span><b>presenter</b> wants to merge 3 commits into <code>main</code> from <code>feature/order-lookup-api</code></div>' +
    '<div class="gh-sub"><span class="on">Conversation</span><span>Commits 3</span><span>Checks 4</span><span>Files changed 4</span></div>';
  L.push({ name: 'Copilot code review', chapter: '3 · Pull requests', app: 'edge', dur: 12, html: gh({ tab: 'Pull requests', page: 'Add order lookup API #17', url: 'github.com/contoso/contoso-order-desk/pull/17', body: PR17_HEAD +
    '<div class="gh-cols"><div class="gh-main"><div class="cmt"><div class="hd"><span class="av">P</span><b>presenter</b> commented · summary by Copilot</div><div class="bd">Adds <code>GET /api/orders/:orderId</code> with validation (400) and not-found (404) responses, plus tests. Fixes #13.</div></div>' +
    '<div class="cmt hid" data-k="rev"><div class="hd"><span class="av cp">C</span><b>Copilot</b> reviewed · Copilot reviewed 4 of 4 changed files and generated 1 comment</div><div class="bd" data-k="revb"><div><b>src/app.js</b> line 18</div><div>Order numbers pasted by agents can include surrounding spaces. Trim the value before validating so <code>ORD-100232 </code> is accepted.</div>' +
    '<div class="sugg"><div class="h">Suggested change</div><div class="d">-  const { orderId } = req.params;</div><div class="a">+  const orderId = req.params.orderId.trim();</div></div><div style="margin-top:6px"><span class="gbtn pri" data-k="cs">Commit suggestion</span> <span class="gbtn">Add suggestion to batch</span></div></div></div>' +
    tl('tlcs', '<span class="av">P</span><b>presenter</b> committed the suggestion · <code>Trim order ID before validating</code>') + '</div>' +
    side([{ h: 'Reviewers', k: 'revs', v: '<div><span class="av cp">C</span> Copilot <span data-k="cpst" class="pill">requested</span></div><div style="margin-top:4px"><span class="av">O</span> @contoso/order-desk-maintainers <span class="pill">Code owner</span></div>' }, { h: 'Assignees', v: 'presenter' }, { h: 'Development', v: 'Fixes #13 Order lookup API' }]) + '</div>' }),
    steps: [
      { t: 0.2, cap: 'The ruleset requests a <b>Copilot code review</b> on the new pull request automatically.' },
      { t: 0.8, focus: 'revs', dur: 2 },
      { t: 2.2, show: 'rev' }, { t: 2.2, lines: 'revb', dur: 1.4 }, { t: 2.2, el: 'cpst', text: 'commented' },
      { t: 2.5, cap: 'Copilot leaves a <b>Comment</b> review with a suggested change.' },
      { t: 3.6, zoom: 'rev', s: 1.3 }, { t: 7.6, zoom: null },
      { t: 6.6, click: 'cs' }, { t: 6.9, show: 'tlcs' }, { t: 6.9, el: 'cs', add: 'hid' },
      { t: 8.0, cap: 'Copilot\'s review doesn\'t count toward required approvals. People decide.' }
    ] });
  L.push({ name: 'The cloud agent\'s pull request', app: 'edge', cut: true, dur: 19, html: gh({ tab: 'Pull requests', who: 'A', page: 'Build the agent lookup page #16', url: 'github.com/contoso/contoso-order-desk/pull/16', body:
    '<h1 class="gh-title">Build the agent lookup page <span class="no">#16</span></h1><div class="gh-meta"><span class="st-draft">⇄ Draft</span><b>Copilot</b> wants to merge 3 commits into <code>main</code> from <code>copilot/agent-lookup-page</code></div>' +
    '<div class="banner" data-k="wfb">Workflows awaiting approval: this pull request was opened by Copilot<span class="gbtn" data-k="arw" style="margin-left:auto">Approve and run workflows</span></div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="cmt"><div class="hd"><span class="av cp">C</span><b>Copilot</b> · Fixes #14</div><div class="bd">Adds <code>public/index.html</code>, <code>app.js</code> and <code>styles.css</code>: a keyboard-accessible lookup form with clear not-found messages. 9 tests. <span class="ver">Verified</span> · co-authored by presenter · <span style="color:#0969da" data-k="vs">View session</span></div></div>' +
    '<div class="cmt hid" data-k="mc"><div class="hd"><span class="av ap">A</span><b>approver</b> commented</div><div class="bd" data-k="mct"></div></div>' +
    tl('tlc', '<span class="av cp">C</span><b>Copilot</b> pushed 1 commit · <code>Format estimated delivery as 5 Nov 2026</code> <span class="ver">Verified</span>') +
    '<div class="inpt" data-k="cbox" style="margin-top:8px"><span data-k="cin"></span><span class="ph" data-k="cph">Add a comment</span></div></div>' +
    side([{ h: 'Reviewers', v: '<div><span class="av ap">A</span> approver</div>' }, { h: 'Checks', k: 'ck', v: '<span data-k="ckv">' + ci('wait') + ' Waiting for approval</span>' }]) + '</div>' +
    '<div class="modal hid" data-k="sess"><div class="dlg" style="width:660px"><div class="hd">Session · Build the agent lookup page</div><div class="bd" data-k="sl">' +
    '<div class="slog"><div class="it">' + ci('ok') + 'Read issue #14 and .github/copilot-instructions.md</div><div class="it">' + ci('ok') + 'Ran Copilot setup steps: npm ci</div><div class="it">' + ci('ok') + 'Created public/index.html, public/app.js, public/styles.css</div><div class="it">' + ci('ok') + 'Added test/page.test.js · ran npm test: 9 passed</div><div class="it">' + ci('ok') + 'Checked its own changes: CodeQL, secret scanning, dependency check</div><div class="it">' + ci('ok') + 'Pushed 3 signed commits to copilot/agent-lookup-page</div></div></div><div class="ft"><span class="gbtn" data-k="sclose">Close</span></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'Meanwhile, the cloud agent\'s draft pull request is ready. <b>View session</b> shows its work.' },
      { t: 1.0, click: 'vs' }, { t: 1.3, show: 'sess' }, { t: 1.3, lines: 'sl', dur: 0.1 },
      { t: 1.5, cap: 'What it read, what it ran, and the checks it ran on its own code.' },
      { t: 2.0, zoom: 'sess', s: 1.2 }, { t: 6.4, zoom: null },
      { t: 6.8, click: 'sclose' }, { t: 7.0, hide: 'sess' },
      { t: 7.2, cap: 'In a second browser profile, the <b>approver</b> approves the waiting workflows.' },
      { t: 8.0, click: 'arw' }, { t: 8.3, hide: 'wfb' }, { t: 8.6, el: 'ckv', html: ci('ok') + ' 4 checks passed' },
      { t: 9.4, click: 'cbox' }, { t: 9.7, ph: 'cph', type: 'cin', str: '@copilot Show the estimated delivery date in a friendly format such as "5 Nov 2026", and add a test for it.', cps: 55 },
      { t: 10.0, cap: 'Iterate with a comment: <b>@copilot</b> pushes a new commit to the same pull request.' },
      { t: 12.0, el: 'mct', text: '@copilot Show the estimated delivery date in a friendly format such as "5 Nov 2026", and add a test for it.' }, { t: 12.0, show: ['mc', 'cph'] }, { t: 12.0, el: 'cin', text: '' },
      { t: 14.0, show: 'tlc' }, { t: 14.2, focus: 'tlc', dur: 3 }
    ] });
  L.push({ name: 'Code owner approves', app: 'edge', cut: true, dur: 10, html: gh({ tab: 'Pull requests', who: 'A', page: 'Add order lookup API #17', url: 'github.com/contoso/contoso-order-desk/pull/17/files', body: PR17_HEAD.replace('<span class="on">Conversation</span><span>Commits 3</span><span>Checks 4</span><span>Files changed 4</span>', '<span>Conversation</span><span>Commits 4</span><span>Checks 4</span><span class="on">Files changed 4</span>') +
    '<div class="banner blue"><span class="av ap">A</span><div><b>approver</b>: your review was requested as a member of <b>@contoso/order-desk-maintainers</b> (code owner)</div><span class="gbtn pri" data-k="rc" style="margin-left:auto">Review changes ▾</span></div>' +
    '<div class="gh-box"><div class="diffh">src/app.js</div>' + K.code("app.get('/api/orders/:orderId', (req, res) => {\n  const orderId = req.params.orderId.trim();\n  if (!isValidOrderId(orderId)) {\n    return res.status(400).json({ error: 'Order numbers look like ORD-123456' });\n  }", { lang: 'js', start: 17, add: [17, 18, 19, 20, 21] }) + '</div>' +
    '<div class="pop hid" data-k="rvp" style="right:30px;top:178px;width:380px"><div class="it" style="border-top:0;font-weight:600">Finish your review</div><div style="padding:8px 12px"><div class="inpt" style="min-height:52px"><span data-k="rvt"></span></div></div><div class="it">○ Comment</div><div class="it on">● Approve</div><div class="it">○ Request changes</div><div style="padding:8px 12px;text-align:right"><span class="gbtn pri" data-k="sub">Submit review</span></div></div>' +
    '<div class="merge ok hid" data-k="mok">' + ci('ok') + '<div><b>Changes approved</b><div style="color:#59636e;font-size:12.5px">1 approving review by reviewers with write access · code owner review satisfied</div></div></div>' }),
    steps: [
      { t: 0.2, cap: '<b>CODEOWNERS</b> routes the API review to the right team. The approver reviews the diff.' },
      { t: 1.6, click: 'rc' }, { t: 1.8, show: 'rvp' },
      { t: 2.3, type: 'rvt', str: 'Validation, 400 and 404 are covered. Approving.', cps: 40 },
      { t: 4.4, click: 'sub' }, { t: 4.6, hide: 'rvp' }, { t: 4.7, show: 'mok' },
      { t: 4.9, cap: 'A different person approves. The person who asked Copilot for work can\'t approve its pull request.' },
      { t: 5.6, focus: 'mok', dur: 3.6 }
    ] });
  // ---- 4 · Security gates
  var XSS2 = "  const id = req.query.id;\n  const order = orders.find((o) => o.id === id);\n  if (!order) {\n    return res.send(`<p>No order found for ${id}</p>`);\n  }";
  L.push({ name: 'CodeQL and Copilot Autofix', chapter: '4 · Security gates', app: 'edge', dur: 15, html: gh({ tab: 'Pull requests', page: 'Show not-found message #18', scroll: true, url: 'github.com/contoso/contoso-order-desk/pull/18/files', body:
    '<h1 class="gh-title" style="font-size:20px">Show not-found message <span class="no">#18</span></h1><div class="gh-sub"><span>Conversation</span><span>Checks</span><span class="on">Files changed 1</span></div>' +
    '<div class="gh-box" style="max-width:980px"><div class="diffh">src/app.js</div>' + K.code(XSS2, { lang: 'js', start: 31, add: [31, 32, 33, 34, 35] }) +
    '<div class="annot" data-k="ann" style="margin:6px 12px"><div class="h">Code scanning · CodeQL · <span class="sev h">High</span> Reflected cross-site scripting</div><div style="font-size:13px">Cross-site scripting vulnerability due to a user-provided value.</div></div>' +
    '<div class="cmt hid" data-k="afx" style="margin:6px 12px"><div class="hd"><span class="av cp">C</span><b>Copilot Autofix for CodeQL</b></div><div class="bd" data-k="afxb"><div>Encode the user-provided value before writing it into the HTML response.</div><div class="sugg"><div class="h">Suggested fix · src/app.js, package.json</div><div class="a">+ import escapeHtml from \'escape-html\';</div><div class="d">-     return res.send(`&lt;p&gt;No order found for ${id}&lt;/p&gt;`);</div><div class="a">+     return res.send(`&lt;p&gt;No order found for ${escapeHtml(id)}&lt;/p&gt;`);</div><div class="a">+   "escape-html": "^1.0.3"</div></div><div style="margin-top:6px"><span class="gbtn pri" data-k="cfx">Commit fix</span> <span class="gbtn">Edit</span> <span class="gbtn">Dismiss suggestion</span></div></div></div></div>' +
    '<div class="gh-box" data-k="chk" style="max-width:980px"><div class="chk" data-k="chk1">' + ci('bad') + '<b>Code scanning results / CodeQL</b><span class="r">1 new alert including 1 high severity security vulnerability</span></div></div>' }),
    steps: [
      { t: 0.2, cap: 'A pull request opened before the session: <b>CodeQL</b> flags reflected cross-site scripting.' },
      { t: 0.8, focus: 'ann', dur: 2.4 },
      { t: 3.4, show: 'afx' }, { t: 3.4, lines: 'afxb', dur: 1.4 },
      { t: 3.6, cap: '<b>Copilot Autofix</b> proposes a fix. The presenter reviews it, then commits it.' },
      { t: 4.4, zoom: 'afx', s: 1.25 }, { t: 9.0, zoom: null },
      { t: 9.4, click: 'cfx' }, { t: 9.7, el: 'cfx', text: 'Fix committed' },
      { t: 11.2, el: 'chk1', html: ci('ok') + '<b>Code scanning results / CodeQL</b><span class="r">No new alerts</span>' },
      { t: 11.3, cap: 'The check reruns and the alert closes.' }, { t: 11.6, focus: 'chk', dur: 3 }
    ] });
  L.push({ name: 'Dependency review', app: 'edge', cut: true, dur: 9, html: gh({ tab: 'Pull requests', page: 'Add date helper dependency #19', url: 'github.com/contoso/contoso-order-desk/pull/19', body:
    '<h1 class="gh-title" style="font-size:20px">Add date helper dependency <span class="no">#19</span></h1><div class="gh-meta"><span class="st-open">⇄ Open</span>Adds <code>lodash@4.17.15</code></div>' +
    '<div class="gh-box"><div class="chk">' + ci('ok') + '<b>build</b><span class="r">Successful in 41s</span></div><div class="chk" data-k="dr">' + ci('bad') + '<b>Dependency Review</b><span class="r">Failing: vulnerable package added</span></div>' +
    '<div style="padding:4px 14px 10px 38px;font-size:12.5px;color:#59636e"><div>lodash@4.17.15 · Prototype Pollution in lodash · <span class="sev h">high</span></div><div>lodash@4.17.15 · Command Injection in lodash · <span class="sev h">high</span></div></div></div>' +
    '<div class="merge bad" data-k="mb">' + ci('bad') + '<div><b>Merging is blocked</b><div style="color:#59636e;font-size:12.5px">Required status check "Dependency Review" has failed</div></div><span class="gbtn" data-k="close" style="margin-left:auto">Close pull request</span></div>' }),
    steps: [
      { t: 0.2, cap: '<b>Dependency review</b> fails the pull request that adds a package with known advisories.' },
      { t: 0.8, focus: 'dr', dur: 2.6 },
      { t: 3.6, focus: 'mb', dur: 3 }, { t: 3.7, cap: 'The merge is blocked, so the presenter closes it.' },
      { t: 6.8, click: 'close' }, { t: 7.1, el: 'close', text: 'Closed' }
    ] });
  // ---- 5 · Ruleset on main
  L.push({ name: 'Protect main', chapter: '5 · Ruleset on main', app: 'edge', dur: 9, html: gh({ tab: 'Settings', page: 'Rulesets · contoso/contoso-order-desk', url: 'github.com/contoso/contoso-order-desk/settings/rules/1', body:
    '<div class="set"><div class="nav"><div>General</div><div>Collaborators and teams</div><div class="grp">Code and automation</div><div>Branches</div><div class="on">Rules › Rulesets</div><div>Actions</div><div>Environments</div><div>Pages</div><div class="grp">Security</div><div>Advanced Security</div><div>Copilot</div></div>' +
    '<div style="flex:1"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><b style="font-size:18px">Protect main</b><span class="lbl" style="background:#dafbe1;color:#1a7f37">Active</span><span class="pill">Target: default branch</span></div>' +
    '<div class="gh-box" data-k="rules"><div class="rule">' + ci('ok') + '<div><b>Require a pull request before merging</b><div class="s">1 required approval · review from Code Owners · dismiss stale approvals</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Require status checks to pass</b><div class="s">build · Dependency Review</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Require code scanning results</b><div class="s">CodeQL · security alerts: High or higher</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Automatically request Copilot code review</b><div class="s">Review new pushes</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Block force pushes</b></div></div></div></div></div>' }),
    steps: [{ t: 0.2, cap: 'Every gate so far is enforced by one <b>ruleset</b> on main.' }, { t: 0.4, lines: 'rules', dur: 2.4 }, { t: 3.2, focus: 'rules', dur: 5 }, { t: 3.4, cap: 'The same rules apply whether a person or an agent wrote the change.' }] });
  L.push({ name: 'Merge', app: 'edge', cut: true, dur: 8.5, html: gh({ tab: 'Pull requests', page: 'Add order lookup API #17', url: 'github.com/contoso/contoso-order-desk/pull/17', body: PR17_HEAD +
    '<div class="gh-box"><div class="chk">' + ci('ok') + '<b>build</b><span class="r">Successful in 38s</span></div><div class="chk">' + ci('ok') + '<b>Dependency Review</b><span class="r">No vulnerable packages</span></div><div class="chk">' + ci('ok') + '<b>Code scanning results / CodeQL</b><span class="r">No new alerts</span></div></div>' +
    '<div class="merge ok" data-k="mbox">' + ci('ok') + '<div style="flex:1"><b>Changes approved</b> · <b>All checks have passed</b><div style="color:#59636e;font-size:12.5px">This branch has no conflicts with the base branch</div></div><span class="gbtn pri" data-k="sq">Squash and merge</span></div>' +
    '<div class="merge hid" data-k="merged" style="border-color:#8250df;margin-top:10px"><span class="ci" style="background:#8250df">✓</span><div><b>Pull request successfully merged and closed</b><div style="color:#59636e;font-size:12.5px">Fixes #13 closed the sub-issue Order lookup API</div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'With approvals and required checks satisfied, the merge box opens.' },
      { t: 2.4, click: 'sq' }, { t: 2.7, el: 'prst', html: '⇄ Merged' }, { t: 2.7, el: 'prst', rm: 'st-open' }, { t: 2.7, el: 'prst', add: 'st-merged' }, { t: 2.7, show: 'merged' }, { t: 2.7, el: 'sq', add: 'hid' },
      { t: 2.9, cap: '<b>Squash and merge</b>. The page pull request (#16) is merged the same way.' }
    ] });
  // ---- 6 · GitHub Actions
  function runPage(extra, who) {
    return gh({ tab: 'Actions', who: who, page: 'CI/CD · contoso/contoso-order-desk', url: 'github.com/contoso/contoso-order-desk/actions/runs/23', body:
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><span data-k="runst">' + ci('run') + '</span><b style="font-size:18px">CI/CD · Merge pull request #17 from feature/order-lookup-api</b><span class="pill">main</span></div>' +
      '<div class="gh-box"><div class="wf"><div class="job" data-k="jb"><span data-k="jbi">' + ci('run') + '</span><div><b>build</b><div class="s" data-k="jbs">In progress</div></div></div><span class="arrow2">→</span><div class="job" data-k="jd"><span data-k="jdi">' + ci('wait') + '</span><div><b>deploy</b><div class="s" data-k="jds">Waiting · production</div></div></div></div></div>' + (extra || '') });
  }
  L.push({ name: 'Build and test', chapter: '6 · GitHub Actions', app: 'edge', dur: 12, html: runPage('<div class="gh-box steps2" data-k="bsteps"><div class="hd">build</div><div class="chk">' + ci('ok') + 'Set up job</div><div class="chk">' + ci('ok') + 'Run actions/checkout@v6</div><div class="chk">' + ci('ok') + 'Use Node.js 24.x</div><div class="chk">' + ci('ok') + 'npm ci</div><div class="chk">' + ci('ok') + 'npm test<span class="r">tests 16 · pass 16 · fail 0</span></div><div class="chk">' + ci('ok') + 'Upload artifact for deployment job</div></div>'),
    steps: [
      { t: 0.2, cap: 'The merge to main starts the <b>CI/CD</b> workflow: build and test first.' },
      { t: 0.6, lines: 'bsteps', dur: 5 },
      { t: 6.0, el: 'jbi', html: ci('ok') }, { t: 6.0, el: 'jbs', text: 'Success · 38s' },
      { t: 6.4, el: 'jds', text: 'Waiting for review · production' }, { t: 6.4, focus: 'jd', dur: 4.6 },
      { t: 6.6, cap: 'The deploy job waits: the <b>production</b> environment requires a reviewer.' }
    ] });
  // ---- 7 · Environment production
  L.push({ name: 'Approve and deploy', chapter: '7 · Environment production', app: 'edge', dur: 17, html: runPage(
    '<div class="banner" data-k="ban"><b>production</b>&nbsp;is waiting for review · presenter\'s deployment needs approval to start<span class="gbtn" data-k="rd" style="margin-left:auto">Review deployments</span></div>' +
    '<div class="gh-box steps2 hid" data-k="dsteps"><div class="hd">deploy · environment: production</div><div class="chk">' + ci('ok') + 'Download artifact from build job</div><div class="chk">' + ci('ok') + 'Az CLI login (OIDC)<span class="r">azure/login · client-id, tenant-id, subscription-id</span></div><div class="chk">' + ci('ok') + 'Deploy to Azure WebApp<span class="r">contoso-order-desk-demo</span></div></div>' +
    '<div class="log hid" data-k="dlog" style="max-width:820px"><div class="dim">Run azure/login · federated token requested from GitHub OIDC provider</div><div class="ok">Login successful.</div><div class="dim">Run azure/webapps-deploy · package: .</div><div class="ok">App Service Application URL: https://contoso-order-desk-demo.azurewebsites.net</div></div>' +
    '<div class="modal hid" data-k="rdm"><div class="dlg"><div class="hd">Review pending deployments</div><div class="bd"><div style="display:flex;gap:8px;align-items:center"><span class="ci ok">✓</span><b>production</b><span class="pill">required reviewer: approver</span></div><div class="inpt" style="margin-top:10px;min-height:52px"><span data-k="rdt"></span></div></div><div class="ft"><span class="gbtn danger">Reject</span><span class="gbtn pri" data-k="ad">Approve and deploy</span></div></div></div>', 'A'),
    steps: [
      { t: 0, el: 'jbi', html: ci('ok') }, { t: 0, el: 'jbs', text: 'Success · 38s' }, { t: 0, el: 'jds', text: 'Waiting for review · production' },
      { t: 0.2, cap: 'The <b>approver</b> reviews the pending deployment. The presenter can\'t approve their own.' },
      { t: 1.2, click: 'rd' }, { t: 1.5, show: 'rdm' },
      { t: 2.0, type: 'rdt', str: 'Approved for the Contoso demo.', cps: 32 },
      { t: 3.6, click: 'ad' }, { t: 3.9, hide: ['rdm', 'ban'] },
      { t: 4.0, el: 'jdi', html: ci('run') }, { t: 4.0, el: 'jds', text: 'In progress · production' },
      { t: 4.1, show: 'dsteps' }, { t: 4.1, lines: 'dsteps', dur: 4.5 }, { t: 5.0, show: 'dlog' }, { t: 5.0, lines: 'dlog', dur: 4.6 },
      { t: 4.4, cap: 'The job requests a <b>short-lived OIDC token</b>. No cloud password is stored in GitHub.' },
      { t: 6.0, zoom: 'dlog', s: 1.4 }, { t: 11.4, zoom: null },
      { t: 9.8, el: 'jdi', html: ci('ok') }, { t: 9.8, el: 'jds', text: 'Success · contoso-order-desk-demo.azurewebsites.net' }, { t: 9.8, el: 'runst', html: ci('ok') },
      { t: 10.0, cap: 'Deployed. The run records who approved and which commit shipped.' },
      { t: 12.0, focus: 'jd', dur: 4 }
    ] });
  // ---- Azure
  function portal(o) {
    return K.browser({ page: o.page, url: o.url, fav: 'az', cls: 'azp', body:
      '<div class="az"><div class="az-top"><span class="az-menu">☰</span><span class="az-brand">Microsoft Azure</span><span class="az-search">Search resources, services, and docs (G+/)</span><span class="az-user">presenter@contoso.com</span></div>' +
      '<div class="az-crumb">' + o.crumb + '</div>' +
      '<div class="az-head"><span class="az-ic">' + (ICONS[o.icon] || '') + '</span><div><div class="az-t">' + o.title + '</div><div class="az-s">' + o.sub + '</div></div></div>' +
      '<div class="az-wrap"><div class="az-nav">' + o.nav.map(function (n) { return n.charAt(0) === '#' ? '<div class="g">' + esc(n.slice(1)) + '</div>' : n.charAt(0) === '*' ? '<div class="on">' + esc(n.slice(1)) + '</div>' : '<div>' + esc(n) + '</div>'; }).join('') + '</div><div class="az-main">' + o.main + '</div></div></div>' });
  }
  L.push({ name: 'Federated credential', chapter: 'Azure', app: 'edge', dur: 10, html: portal({ page: 'contoso-order-desk-deploy · Microsoft Azure', url: 'portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/Credentials', icon: 'app-registrations',
    crumb: 'Home › App registrations › contoso-order-desk-deploy', title: 'contoso-order-desk-deploy | Certificates &amp; secrets', sub: 'App registration · Microsoft Entra ID',
    nav: ['Overview', 'Quickstart', '#Manage', 'Branding & properties', 'Authentication', '*Certificates & secrets', 'Token configuration', 'API permissions', 'Owners', 'Roles and administrators'],
    main: '<div class="az-tabs"><span>Certificates (0)</span><span>Client secrets (0)</span><span class="on">Federated credentials (1)</span></div>' +
      '<div class="az-note">No client secrets: GitHub Actions signs in with a federated credential instead.</div>' +
      '<div class="az-tbl" data-k="fc"><div class="r h"><span>Name</span><span>Subject identifier</span></div><div class="r"><span>github-production</span><span><code>repo:contoso/contoso-order-desk:environment:production</code></span></div></div>' +
      '<div class="az-tbl" style="margin-top:10px" data-k="fc2"><div class="r h"><span>Issuer</span><span>Audience</span></div><div class="r"><span><code>https://token.actions.githubusercontent.com</code></span><span><code>api://AzureADTokenExchange</code></span></div></div>' }),
    steps: [
      { t: 0.2, cap: 'In the Azure portal: the app registration has <b>no client secret</b>, only a federated credential.' },
      { t: 1.2, focus: 'fc', dur: 3.6 },
      { t: 4.6, cap: 'It trusts tokens only from the <b>production</b> environment of this one repository.' }, { t: 5.0, focus: 'fc2', dur: 4.4 }
    ] });
  L.push({ name: 'App Service access', app: 'edge', cut: true, dur: 10, html: portal({ page: 'contoso-order-desk-demo · Microsoft Azure', url: 'portal.azure.com/#@contoso.onmicrosoft.com/resource/subscriptions/…/resourceGroups/rg-contoso-order-desk/providers/Microsoft.Web/sites/contoso-order-desk-demo/users', icon: 'app-services',
    crumb: 'Home › rg-contoso-order-desk › contoso-order-desk-demo', title: 'contoso-order-desk-demo | Access control (IAM)', sub: 'App Service · Web app · Linux, Node 24 LTS',
    nav: ['Overview', 'Activity log', '*Access control (IAM)', 'Tags', 'Diagnose and solve problems', '#Deployment', 'Deployment slots', 'Deployment Center', '#Settings', 'Environment variables', 'Configuration'],
    main: '<div class="az-tabs"><span>Check access</span><span class="on">Role assignments</span><span>Roles</span></div>' +
      '<div class="az-tbl" data-k="ra"><div class="r h"><span>Name</span><span>Type</span><span>Role</span><span>Scope</span></div><div class="r"><span>contoso-order-desk-deploy</span><span>App</span><span><b>Website Contributor</b></span><span>This resource</span></div></div>' +
      '<div class="az-ess" data-k="ess" style="margin-top:14px"><div><span>Status</span><b style="color:#107c10">Running</b></div><div><span>Default domain</span><b>contoso-order-desk-demo.azurewebsites.net</b></div><div><span>Resource group</span><b>rg-contoso-order-desk</b></div></div>' }),
    steps: [
      { t: 0.2, cap: 'That identity has <b>Website Contributor</b> on this one web app, and nothing else.' },
      { t: 1.0, focus: 'ra', dur: 4.4 },
      { t: 6.4, focus: 'ess', dur: 3.2 }, { t: 6.5, cap: 'The web app is running the new release.' }
    ] });
  // ---- Live app
  function app(extra) {
    return K.browser({ page: 'Contoso Order Desk', url: 'contoso-order-desk-demo.azurewebsites.net', body: '<div class="app"><div class="bar"><i></i>Contoso Order Desk</div><div class="in"><div style="color:#667085;margin-bottom:8px">Look up an order by its number</div>' +
      '<div class="row"><div class="field" data-k="f"><span data-k="fv"></span></div><span class="go" data-k="go">Look up</span></div>' + (extra || '') + '</div></div>' });
  }
  L.push({ name: 'Use the app', chapter: 'Live app', app: 'edge', dur: 17, html: app(
    '<div class="res hid" data-k="r1"><h3>ORD-100232 <span class="badge2">Out for delivery</span></h3><div class="k">Estimated delivery</div><div class="v">3 Nov 2026</div><div class="k">Last updated</div><div class="v">3 Nov 2026, 06:40 UTC</div></div>' +
    '<div class="res err hid" data-k="r2"><h3>We couldn\'t find order ORD-999999</h3>Check the number and try again.</div>' +
    '<div class="res err hid" data-k="r3"><h3>Order numbers look like ORD-123456</h3>The API rejected "12345" before looking anything up.</div>'),
    steps: [
      { t: 0.2, cap: 'The Order Desk is live on <b>Azure App Service</b>. An agent looks up an order.' },
      { t: 0.6, click: 'f' }, { t: 0.9, type: 'fv', str: 'ORD-100232', cps: 14 }, { t: 2.0, click: 'go' }, { t: 2.3, show: 'r1' },
      { t: 2.5, focus: 'r1', dur: 2.6 },
      { t: 5.6, el: 'fv', text: '' }, { t: 5.6, hide: 'r1' }, { t: 5.7, click: 'f' }, { t: 6.0, type: 'fv', str: 'ORD-999999', cps: 14 }, { t: 7.1, click: 'go' }, { t: 7.4, show: 'r2' },
      { t: 7.5, cap: 'An unknown number gets a clear message, as the acceptance criteria asked…' },
      { t: 10.6, el: 'fv', text: '' }, { t: 10.6, hide: 'r2' }, { t: 10.7, click: 'f' }, { t: 11.0, type: 'fv', str: '12345', cps: 12 }, { t: 11.8, click: 'go' }, { t: 12.1, show: 'r3' },
      { t: 12.2, cap: '…and an invalid format is rejected by the API\'s validation.' }
    ] });
  // ---- Close the loop
  L.push({ name: 'Close the loop', chapter: 'Close the loop', app: 'edge', dur: 9, html: gh({ tab: 'Projects', page: 'Order Desk · Project', url: 'github.com/orgs/contoso/projects/1', body:
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><b style="font-size:18px">Order Desk</b><span class="pill">Board</span><span class="pill">Table</span><span class="pill">Roadmap</span></div>' +
    '<div class="board"><div class="col"><div class="h"><span class="icon-o" style="border-color:#8c959f"></span>Todo <span class="pill">1</span></div><div class="card2" data-k="c15">Audit log of every lookup<div class="s">#15 · sub-issue of #12</div></div></div>' +
    '<div class="col"><div class="h"><span class="icon-o" style="border-color:#bf8700"></span>In progress <span class="pill">1</span></div><div class="card2">[Feature]: Order Desk – look up order status by order number<div class="s">#12 · Feature · 2 of 3 sub-issues done</div></div></div>' +
    '<div class="col" data-k="done"><div class="h"><span class="icon-done"></span>Done <span class="pill">2</span></div><div class="card2">Order lookup API<div class="s">#13 · closed by #17</div></div><div class="card2">Agent lookup page<div class="s">#14 · closed by #16</div></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'Back to the business: the board shows what shipped, without reading code.' },
      { t: 1.0, focus: 'done', dur: 3.4 },
      { t: 4.8, focus: 'c15', dur: 3.6 }, { t: 4.9, cap: 'The audit log (#15) is still open: the next session hands it to an agent.' }
    ] });
  D.push({ id: 'live-demo', session: 5, label: 'Session 5', title: 'Live Demo: From Business Requirement to Production', desk: true, fade: 0.15, clock: '14:47',
    stepLabel: function (chap) { var m = /^(\d+) · (.*)$/.exec(chap || ''); return m ? 'Step ' + m[1] + ' of 7 · ' + m[2] : chap === 'Azure' ? 'Azure · trusted hand-off' : chap; }, scenes: L });

  /* =====================================================================
     SESSION 6 · The Next Evolution: Agentic Software Development
     ===================================================================== */
  var AGENT_MD = "---\nname: test-coverage-improver\ndescription: Finds untested code paths in Contoso Order Desk and adds focused tests without changing production code.\ntools: [\"read\", \"search\", \"edit\"]\n---\nYou improve test coverage for Contoso Order Desk.\n\n- Read .github/copilot-instructions.md and test/ before writing anything.\n- Add tests only under test/. Never modify files under src/ or public/.\n- For each endpoint, cover success, invalid input (400) and not found (404).";
  var G = [];
  // 1 · Specify
  G.push({ name: 'A good brief', chapter: '1 · Specify', app: 'edge', dur: 15, html: gh({ tab: 'Issues', page: 'Audit log of every lookup #15', url: 'github.com/contoso/contoso-order-desk/issues/15', body:
    '<h1 class="gh-title">Audit log of every lookup <span class="no">#15</span></h1><div class="gh-meta"><span class="st-open">● Open</span>Sub-issue of #12 · Order Desk</div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="gh-box"><div class="hd"><span class="av">P</span><b>presenter</b> commented</div><div class="bd" data-k="brief">' +
    '<div data-k="bp"><h4 style="margin-top:0">Problem</h4>Contoso must be able to show who looked up which order, and when.</div>' +
    '<div data-k="bac"><h4>Acceptance criteria</h4><ul><li>Record order ID, agent user ID, timestamp and result for every lookup</li><li>Never log customer contact details</li><li>Keep records for 90 days</li><li>Tests cover 200, 400 and 404 lookups</li></ul></div>' +
    '<div data-k="bh"><h4>Hints</h4>Lookups are handled in <code>src/app.js</code>. Follow <code>.github/copilot-instructions.md</code>.</div></div></div></div>' +
    side([{ h: 'Copilot also reads', k: 'reads', v: '<div><code>.github/copilot-instructions.md</code></div><div><code>.github/instructions/*.instructions.md</code></div><div><code>AGENTS.md</code></div><div><code>.github/agents/*.agent.md</code></div>' }, { h: 'Labels', v: '<span class="lbl enh">enhancement</span>' }, { h: 'Projects', v: 'Order Desk · Todo' }]) + '</div>' }),
    steps: [
      { t: 0.2, cap: 'The open sub-issue from the live demo: the presenter writes it like a brief to a new teammate.' },
      { t: 1.0, focus: 'bp', dur: 2.4 }, { t: 3.6, focus: 'bac', dur: 3.6 },
      { t: 3.7, cap: 'A clear problem, testable acceptance criteria…' },
      { t: 7.4, focus: 'bh', dur: 2.6 }, { t: 7.5, cap: '…and hints about which files to change.' },
      { t: 10.4, focus: 'reads', dur: 4.2 }, { t: 10.5, cap: 'The agent also reads the repository\'s instruction files and custom agent profiles.' }
    ] });
  G.push({ name: 'A custom agent', app: 'edge', cut: true, dur: 9, html: gh({ tab: 'Code', page: 'test-coverage-improver.agent.md', url: 'github.com/contoso/contoso-order-desk/blob/main/.github/agents/test-coverage-improver.agent.md', body:
    '<div class="gh-meta" style="font-size:14px"><b>contoso-order-desk</b> / .github / agents / <b>test-coverage-improver.agent.md</b></div>' +
    '<div class="gh-box" style="max-width:1000px" data-k="amd"><div class="hd">11 lines · Custom agent profile</div>' + K.code(AGENT_MD, { lang: 'md' }) + '</div>' }),
    steps: [
      { t: 0.2, cap: 'A <b>custom agent</b> profile encodes how Contoso wants a job done, with its own instructions and tools.' },
      { t: 1.0, zoom: 'amd', s: 1.3, oy: -20 }, { t: 7.8, zoom: null }
    ] });
  // 2 · Research & plan
  G.push({ name: 'Start a task', chapter: '2 · Research & plan', app: 'edge', dur: 13, html: gh({ tab: 'Agents', page: 'Agents · contoso/contoso-order-desk', url: 'github.com/contoso/contoso-order-desk/agents', body:
    '<div style="max-width:940px;margin:0 auto"><div style="font-size:20px;font-weight:600;margin-bottom:10px">Start a task</div><div class="ag-box"><div class="inpt big" data-k="tbox" style="border:0;padding:0"><span data-k="tin" style="white-space:pre-wrap"></span><span class="ph" data-k="tph">Describe a task for an agent…</span></div>' +
    '<div class="ag-row"><span class="ag-sel">contoso/contoso-order-desk</span><span class="ag-sel">main</span><span class="ag-sel" data-k="agsel">Copilot ▾</span><span class="ag-sel">Auto</span><span class="gbtn pri" data-k="start" style="margin-left:auto">Start task</span></div></div>' +
    '<div class="pop hid" data-k="agpop" style="left:440px;top:210px;width:330px"><div class="it" style="border-top:0;font-weight:600">Agent</div><div class="it on" data-k="agc"><span class="av cp">C</span>Copilot</div><div class="it"><span class="av">A</span>Claude <span class="pill">Public preview</span></div><div class="it"><span class="av">O</span>Codex <span class="pill">Public preview</span></div><div class="it"><span class="av ap">T</span>test-coverage-improver <span class="pill">custom agent</span></div></div>' +
    '<div style="margin-top:16px;font-size:13px;color:#59636e">Recent sessions</div><div class="gh-box" style="margin-top:6px"><div class="chk">' + ci('ok') + 'Build the agent lookup page<span class="r">Pull request #16 · merged</span></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'The <b>Agents tab</b> starts and tracks agent tasks for the repository.' },
      { t: 0.8, click: 'agsel' }, { t: 1.0, show: 'agpop' },
      { t: 1.2, cap: 'Pick Copilot, a third-party agent <b>(public preview)</b> or a custom agent.' },
      { t: 3.4, click: 'agc' }, { t: 3.6, hide: 'agpop' },
      { t: 3.9, click: 'tbox' },
      { t: 4.2, ph: 'tph', type: 'tin', str: 'Research how order lookups flow through src/ and write an implementation plan for #15: record every lookup (order ID, agent user ID, timestamp, result) without logging customer contact details. Don\'t open a pull request yet.', cps: 80 },
      { t: 4.3, cap: 'Ask for research and a plan first, before any code changes.' },
      { t: 4.4, zoom: 'tbox', s: 1.3 }, { t: 10.2, zoom: null },
      { t: 11.0, click: 'start' }
    ] });
  G.push({ name: 'Steer the session', app: 'edge', cut: true, dur: 15, html: gh({ tab: 'Agents', page: 'Plan the audit log for #15 · Agents', url: 'github.com/contoso/contoso-order-desk/agents/sessions/42', body:
    '<div class="sess"><div><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="spin" style="border-color:rgba(31,35,40,.15);border-top-color:#0969da" data-k="sp"></span><b style="font-size:16px">Plan the audit log for #15</b><span class="pill">copilot/audit-log-plan</span></div>' +
    '<div class="slog" data-k="log"><div class="it">' + ci('ok') + 'Read issue #15 and .github/copilot-instructions.md</div><div class="it">' + ci('ok') + 'Read src/app.js · found GET /api/orders/:orderId</div><div class="it">' + ci('ok') + 'Searched for places that log request data</div><div class="it">' + ci('run') + 'Drafting the implementation plan…</div></div>' +
    '<div class="m u hid" data-k="steer" style="background:#ddf4ff;color:#1f2328;margin-top:10px"><div class="who" style="color:#0969da">You · steering</div>Add a note about retention.</div>' +
    '<div class="slog hid" data-k="ack" style="margin-top:8px"><div class="it">' + ci('ok') + 'Got it — adding a retention section to the plan.</div></div>' +
    '<div class="inpt" data-k="sbox" style="margin-top:10px"><span data-k="sin"></span><span class="ph" data-k="sph">Steer the session…</span></div></div>' +
    '<div><div class="plan hid" data-k="plan"><h4>Implementation plan · #15</h4><ol data-k="pl"><li><code>src/audit.js</code>: append-only <code>recordLookup()</code>; no customer contact fields</li><li>Call it from <code>GET /api/orders/:orderId</code> for 200, 400 and 404</li><li>Agent user ID from the authenticated request</li><li data-k="ret"><b>Retention</b>: keep 90 days, configurable with <code>AUDIT_RETENTION_DAYS</code></li><li><code>test/audit.test.js</code>: one test per result</li></ol></div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'The session log shows what the agent reads and does, live.' },
      { t: 0.3, lines: 'log', dur: 2.5 }, { t: 0.4, zoom: 'log', s: 1.3 }, { t: 6.0, zoom: null }, { t: 7.0, zoom: 'plan', s: 1.45 },
      { t: 3.4, click: 'sbox' }, { t: 3.7, ph: 'sph', type: 'sin', str: 'Add a note about retention.', cps: 28 },
      { t: 3.8, cap: 'The presenter steers the running session. Each steering message uses AI credits.' },
      { t: 5.0, el: 'sin', text: '' }, { t: 5.0, show: ['steer', 'sph'] }, { t: 5.7, show: 'ack' },
      { t: 6.6, show: 'plan' }, { t: 6.6, lines: 'pl', dur: 2.6 },
      { t: 6.8, cap: 'The plan comes back for review before any code changes.' },
      { t: 9.4, focus: 'ret', dur: 3 }, { t: 9.4, el: 'sp', add: 'hid' }
    ] });
  // 3 · Implement
  G.push({ name: 'Implement', chapter: '3 · Implement', app: 'edge', dur: 12, html: gh({ tab: 'Agents', page: 'Implement the audit log for #15 · Agents', url: 'github.com/contoso/contoso-order-desk/agents/sessions/42', body:
    '<div style="max-width:880px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="spin" style="border-color:rgba(31,35,40,.15);border-top-color:#0969da" data-k="sp2"></span><b style="font-size:16px">Implement the audit log for #15</b><span class="pill">copilot/audit-log</span><span class="pill">Session limit: 59 min</span></div>' +
    '<div class="m u" style="background:#ddf4ff;color:#1f2328;margin-bottom:10px"><div class="who" style="color:#0969da">You</div>Looks good. Implement the plan and open a draft pull request.</div>' +
    '<div class="slog" data-k="ilog"><div class="it">' + ci('ok') + 'Ran Copilot setup steps: npm ci</div><div class="it">' + ci('ok') + 'Created src/audit.js (+31)</div><div class="it">' + ci('ok') + 'Updated src/app.js (+6 −1)</div><div class="it">' + ci('ok') + 'Added test/audit.test.js (+42)</div><div class="it">' + ci('ok') + 'Ran npm test · 12 passed</div><div class="it">' + ci('ok') + 'Committed and pushed to copilot/audit-log</div></div></div>' }),
    steps: [
      { t: 0.2, cap: 'Approved. The agent works in a temporary cloud environment prepared by <b>copilot-setup-steps.yml</b>.' },
      { t: 0.4, lines: 'ilog', dur: 6 }, { t: 0.5, zoom: 'ilog', s: 1.25 },
      { t: 6.6, cap: 'One repository, one branch, one pull request per task. A session runs for up to 59 minutes.' }
    ] });
  // 4 · Self-check
  G.push({ name: 'Self-check', chapter: '4 · Self-check', app: 'edge', cut: true, dur: 12, html: gh({ tab: 'Agents', page: 'Implement the audit log for #15 · Agents', url: 'github.com/contoso/contoso-order-desk/agents/sessions/42', body:
    '<div style="max-width:880px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><b style="font-size:16px">Validation before review</b><span class="pill">copilot/audit-log</span></div>' +
    '<div class="slog" data-k="vlog"><div class="it">' + ci('ok') + '<div><b>CodeQL</b> · no new security alerts in the changed code</div></div><div class="it">' + ci('ok') + '<div><b>Secret scanning</b> · no secrets found</div></div><div class="it">' + ci('ok') + '<div><b>Dependency check</b> · new dependencies checked against the GitHub Advisory Database (none added)</div></div><div class="it">' + ci('ok') + '<div><b>Copilot code review</b> · 1 suggestion, applied: store timestamps in UTC</div></div><div class="it">' + ci('ok') + '<div>Opened draft pull request <b>#20 Add audit log of every lookup</b> and requested review from <b>presenter</b></div></div></div>' +
    '<div class="banner blue" style="margin-top:12px" data-k="fw">Internet access from the agent\'s environment goes through a firewall that is on by default.</div></div>' }),
    steps: [
      { t: 0.2, cap: 'Before asking for review, it runs <b>CodeQL</b>, <b>secret scanning</b> and a <b>dependency check</b> on its own code…' },
      { t: 0.4, lines: 'vlog', dur: 5 }, { t: 0.5, zoom: 'vlog', s: 1.2 }, { t: 7.0, zoom: null },
      { t: 3.6, cap: '…gets a <b>Copilot code review</b> and fixes what it finds. No GHAS licence is needed for these checks.' },
      { t: 7.4, focus: 'fw', dur: 4 }, { t: 7.5, cap: 'Its internet access is restricted by a firewall, and hidden characters are filtered from its input.' }
    ] });
  // 5 · Review & merge
  G.push({ name: 'Review the agent\'s pull request', chapter: '5 · Review & merge', app: 'edge', dur: 20, html: gh({ tab: 'Pull requests', page: 'Add audit log of every lookup #20', url: 'github.com/contoso/contoso-order-desk/pull/20', body:
    '<h1 class="gh-title">Add audit log of every lookup <span class="no">#20</span></h1><div class="gh-meta"><span class="st-draft" data-k="prs">⇄ Draft</span><b>Copilot</b> wants to merge 3 commits into <code>main</code> from <code>copilot/audit-log</code></div>' +
    '<div class="banner" data-k="wfb">Workflows awaiting approval: this pull request was opened by Copilot<span class="gbtn" data-k="arw" style="margin-left:auto">Approve and run workflows</span></div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="cmt"><div class="hd"><span class="av cp">C</span><b>Copilot</b> · Fixes #15</div><div class="bd">Adds <code>recordLookup()</code> for every order lookup (200, 400, 404). No customer contact fields are logged. Retention: 90 days. <span class="ver">Verified</span> · co-authored by presenter · <span style="color:#0969da">View session</span></div></div>' +
    '<div class="cmt hid" data-k="mc"><div class="hd"><span class="av">P</span><b>presenter</b> commented</div><div class="bd" data-k="mct"></div></div>' +
    tl('tlc', '<span class="av cp">C</span><b>Copilot</b> pushed 1 commit · <code>Use ISO 8601 UTC timestamps in audit records</code> <span class="ver">Verified</span>') +
    tl('tlr', '<span class="av">P</span><b>presenter</b> marked this pull request as ready for review') +
    tl('tla', '<span class="av ap">A</span><b>approver</b> approved these changes') +
    '<div class="merge ok hid" data-k="mg" style="margin-top:8px">' + ci('ok') + '<div style="flex:1"><b>Changes approved</b> · <b>All checks have passed</b></div><span class="gbtn pri" data-k="sq">Squash and merge</span></div>' +
    '<div class="merge hid" data-k="merged" style="border-color:#8250df;margin-top:8px"><span class="ci" style="background:#8250df">✓</span><div><b>Pull request successfully merged and closed</b><div style="color:#59636e;font-size:12.5px">Fixes #15 closed the sub-issue Audit log of every lookup</div></div></div>' +
    '<div class="inpt" data-k="cbox" style="margin-top:8px"><span data-k="cin"></span><span class="ph" data-k="cph">Add a comment</span></div></div>' +
    side([{ h: 'Reviewers', v: '<div><span class="av ap">A</span> approver</div>' }, { h: 'Checks', k: 'ck', v: '<span data-k="ckv">' + ci('wait') + ' Waiting for approval</span>' }]) + '</div>' }),
    steps: [
      { t: 0.2, cap: 'Actions workflows on the agent\'s pull request wait until a person with write access approves them.' },
      { t: 1.0, click: 'arw' }, { t: 1.3, hide: 'wfb' }, { t: 1.6, el: 'ckv', html: ci('ok') + ' 4 checks passed' },
      { t: 2.6, click: 'cbox' }, { t: 2.9, ph: 'cph', type: 'cin', str: '@copilot Use ISO 8601 UTC timestamps in the audit records.', cps: 40 },
      { t: 3.0, cap: 'The presenter iterates by mentioning <b>@copilot</b>: it pushes new commits to the same branch.' },
      { t: 4.9, el: 'mct', text: '@copilot Use ISO 8601 UTC timestamps in the audit records.' }, { t: 4.9, show: ['mc', 'cph'] }, { t: 4.9, el: 'cin', text: '' },
      { t: 6.3, show: 'tlc' },
      { t: 7.6, show: 'tlr' }, { t: 7.7, cap: 'The presenter marks it ready. Copilot can\'t mark it ready, approve or merge.' }, { t: 7.7, el: 'prs', html: '⇄ Open' }, { t: 7.7, el: 'prs', rm: 'st-draft' }, { t: 7.7, el: 'prs', add: 'st-open' },
      { t: 9.8, show: 'tla' }, { t: 9.9, cap: 'A second person approves: the one who asked for the work can\'t.' },
      { t: 10.2, focus: 'tla', dur: 3 },
      { t: 13.6, show: 'mg' }, { t: 14.6, click: 'sq' }, { t: 14.9, hide: 'mg' }, { t: 14.9, show: 'merged' }, { t: 14.9, el: 'prs', html: '⇄ Merged' }, { t: 14.9, el: 'prs', rm: 'st-open' }, { t: 14.9, el: 'prs', add: 'st-merged' },
      { t: 15.1, cap: 'Merged by a person. The same ruleset and checks applied as for any human change.' }
    ] });
  // 6 · Audit log
  G.push({ name: 'Audit trail', chapter: '6 · Audit log', app: 'edge', dur: 11, html: gh({ page: 'Audit log · Contoso enterprise', head: '<div class="gh-head" style="padding-bottom:10px"><div class="gh-top"><span class="gh-logo"></span><b>Contoso</b> enterprise · Audit log</div></div>', url: 'github.com/enterprises/contoso/settings/audit-log', body:
    '<div class="inpt" data-k="aqb" style="margin-bottom:12px"><span data-k="aq"></span><span class="ph" data-k="aph">Search audit logs</span></div>' +
    '<div class="audit hid" data-k="arows" style="max-width:980px"><div class="r"><span>When</span><span>Event (simplified)</span><span>Agent fields</span></div>' +
    '<div class="r"><span>Today 16:02</span><span>Pull request #20 merged by approver</span><span><code>actor: approver</code></span></div>' +
    '<div class="r"><span>Today 15:58</span><span>Pull request #20 opened in contoso-order-desk</span><span><code>actor_is_agent: true</code></span></div>' +
    '<div class="r"><span>Today 15:55</span><span>Commits pushed to copilot/audit-log</span><span><code>agent_session_id: 42</code></span></div>' +
    '<div class="r"><span>Today 15:51</span><span>Agent session started from the Agents tab</span><span><code>user: presenter</code></span></div></div>' +
    '<div style="margin-top:12px;font-size:13px;color:#59636e">Audit events are kept for 180 days. Stream them to your SIEM for longer retention.</div>' }),
    steps: [
      { t: 0.2, cap: 'Agent activity lands in the enterprise <b>audit log</b>. Filter it with <b>actor:Copilot</b>.' },
      { t: 0.6, click: 'aqb' }, { t: 0.8, ph: 'aph', type: 'aq', str: 'actor:Copilot repo:contoso/contoso-order-desk', cps: 30 },
      { t: 2.6, show: 'arows' }, { t: 2.6, lines: 'arows', dur: 1.8 },
      { t: 4.8, cap: 'Fields like <b>actor_is_agent</b> and <b>agent_session_id</b> tie every agent action to a session and a person.' },
      { t: 5.2, zoom: 'arows', s: 1.25 }, { t: 10.4, zoom: null }
    ] });
  D.push({ id: 'agentic', session: 6, label: 'Session 6', title: 'The Next Evolution: Agentic Software Development', desk: true, fade: 0.15, clock: '15:51', stepLabel: steps(0, 6), scenes: G });
})();
