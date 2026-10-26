/* Demo scenarios for the Contoso workshop. Simulated walkthroughs: interfaces are simplified
   and AI output is illustrative. Steps follow GitHub Docs and Microsoft Learn as cited on the site. */
(function () {
  'use strict';
  var K = window.ReplayKit, esc = K.esc;
  var D = window.DEMOS = window.DEMOS || [];
  var ICONS = {"app-registrations": "<svg aria-hidden=\"true\" id=\"rpa-app-registrations-a76a0103-ce03-4d58-859d-4c27e02925d2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><defs><linearGradient id=\"rpa-app-registrations-efeb8e96-2af0-4681-9a6a-45f9b0262f19\" x1=\"-6518.78\" y1=\"1118.86\" x2=\"-6518.78\" y2=\"1090.06\" gradientTransform=\"matrix(0.5, 0, 0, -0.5, 3267.42, 559.99)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#5ea0ef\" /><stop offset=\"0.18\" stop-color=\"#589eed\" /><stop offset=\"0.41\" stop-color=\"#4897e9\" /><stop offset=\"0.66\" stop-color=\"#2e8ce1\" /><stop offset=\"0.94\" stop-color=\"#0a7cd7\" /><stop offset=\"1\" stop-color=\"#0078d4\" /></linearGradient></defs><path d=\"M5.67,10.61H10v4.32H5.67Zm-5-5.76H5V.53H1.23a.6.6,0,0,0-.6.6Zm.6,10.08H5V10.61H.63v3.72A.6.6,0,0,0,1.23,14.93Zm-.6-5H5V5.57H.63Zm10.08,5h3.72a.6.6,0,0,0,.6-.6V10.61H10.71Zm-5-5H10V5.57H5.67Zm5,0H15V5.57H10.71Zm0-9.36V4.85H15V1.13a.6.6,0,0,0-.6-.6Zm-5,4.32H10V.53H5.67Z\" fill=\"url(#rpa-app-registrations-efeb8e96-2af0-4681-9a6a-45f9b0262f19)\" /><polygon points=\"17.37 10.7 17.37 15.21 13.5 17.47 13.5 12.96 17.37 10.7\" fill=\"#32bedd\" /><polygon points=\"17.37 10.7 13.5 12.97 9.63 10.7 13.5 8.44 17.37 10.7\" fill=\"#9cebff\" /><polygon points=\"13.5 12.97 13.5 17.47 9.63 15.21 9.63 10.7 13.5 12.97\" fill=\"#50e6ff\" /><polygon points=\"9.63 15.21 13.5 12.96 13.5 17.47 9.63 15.21\" fill=\"#9cebff\" /><polygon points=\"17.37 15.21 13.5 12.96 13.5 17.47 17.37 15.21\" fill=\"#50e6ff\" /></svg>", "app-services": "<svg aria-hidden=\"true\" id=\"rpa-app-services-b70acf0a-34b4-4bdf-9024-7496043ff915\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><defs><radialGradient id=\"rpa-app-services-e2cf8746-c9a8-4eee-86c2-4951983c6032\" cx=\"13428.81\" cy=\"3518.86\" r=\"56.67\" gradientTransform=\"translate(-2005.33 -518.83) scale(0.15)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.18\" stop-color=\"#5ea0ef\" /><stop offset=\"1\" stop-color=\"#0078d4\" /></radialGradient><linearGradient id=\"rpa-app-services-bdd213dd-d313-473c-8ff4-0133fd3a9033\" x1=\"4.4\" y1=\"11.48\" x2=\"4.37\" y2=\"7.53\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ccc\" /><stop offset=\"1\" stop-color=\"#fcfcfc\" /></linearGradient><linearGradient id=\"rpa-app-services-afcc63c5-3649-4476-a742-bcb53a569f3c\" x1=\"10.13\" y1=\"15.45\" x2=\"10.13\" y2=\"11.9\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ccc\" /><stop offset=\"1\" stop-color=\"#fcfcfc\" /></linearGradient><linearGradient id=\"rpa-app-services-bd873f0b-9954-4aa5-a3df-9f4c64e8729d\" x1=\"14.18\" y1=\"11.15\" x2=\"14.18\" y2=\"7.38\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ccc\" /><stop offset=\"1\" stop-color=\"#fcfcfc\" /></linearGradient></defs><title>Icon-web-41</title><path id=\"rpa-app-services-ee75dd06-1aca-4f76-9d11-d05a284020ad\" d=\"M14.21,15.72A8.5,8.5,0,0,1,3.79,2.28l.09-.06a8.5,8.5,0,0,1,10.33,13.5\" fill=\"url(#rpa-app-services-e2cf8746-c9a8-4eee-86c2-4951983c6032)\" /><path d=\"M6.69,7.23A13,13,0,0,1,15.6,3.65a8.47,8.47,0,0,0-1.49-1.44,14.34,14.34,0,0,0-4.69,1.1A12.54,12.54,0,0,0,5.34,6.13,2.76,2.76,0,0,1,6.69,7.23Z\" fill=\"#fff\" opacity=\"0.6\" /><path d=\"M2.48,10.65a17.86,17.86,0,0,0-.83,2.62,7.82,7.82,0,0,0,.62.92c.18.23.35.44.55.65A17.94,17.94,0,0,1,3.9,11.37,2.76,2.76,0,0,1,2.48,10.65Z\" fill=\"#fff\" opacity=\"0.6\" /><path d=\"M3.46,6.11a12,12,0,0,1-.69-2.94,8.15,8.15,0,0,0-1.1,1.45A12.69,12.69,0,0,0,2.24,7,2.69,2.69,0,0,1,3.46,6.11Z\" fill=\"#f2f2f2\" opacity=\"0.55\" /><circle cx=\"4.38\" cy=\"8.68\" r=\"2.73\" fill=\"url(#rpa-app-services-bdd213dd-d313-473c-8ff4-0133fd3a9033)\" /><path d=\"M8.36,13.67A1.77,1.77,0,0,1,8.9,12.4a11.88,11.88,0,0,1-2.53-1.86,2.74,2.74,0,0,1-1.49.83,13.1,13.1,0,0,0,1.45,1.28A12.12,12.12,0,0,0,8.38,13.9,1.79,1.79,0,0,1,8.36,13.67Z\" fill=\"#f2f2f2\" opacity=\"0.55\" /><path d=\"M14.66,13.88a12,12,0,0,1-2.76-.32.41.41,0,0,1,0,.11,1.75,1.75,0,0,1-.51,1.24,13.69,13.69,0,0,0,3.42.24A8.21,8.21,0,0,0,16,13.81,11.5,11.5,0,0,1,14.66,13.88Z\" fill=\"#f2f2f2\" opacity=\"0.55\" /><circle cx=\"10.13\" cy=\"13.67\" r=\"1.78\" fill=\"url(#rpa-app-services-afcc63c5-3649-4476-a742-bcb53a569f3c)\" /><path d=\"M12.32,8.93a1.83,1.83,0,0,1,.61-1A25.5,25.5,0,0,1,8.47,3.79a16.91,16.91,0,0,1-2-2.92,7.64,7.64,0,0,0-1.09.42A18.14,18.14,0,0,0,7.53,4.47,26.44,26.44,0,0,0,12.32,8.93Z\" fill=\"#f2f2f2\" opacity=\"0.7\" /><circle cx=\"14.18\" cy=\"9.27\" r=\"1.89\" fill=\"url(#rpa-app-services-bd873f0b-9954-4aa5-a3df-9f4c64e8729d)\" /><path d=\"M17.35,10.54,17,10.37l0,0-.3-.16-.06,0L16.38,10l-.07,0L16,9.8a1.76,1.76,0,0,1-.64.92c.12.08.25.15.38.22l.08.05.35.19,0,0,.86.45h0a8.63,8.63,0,0,0,.29-1.11Z\" fill=\"#f2f2f2\" opacity=\"0.55\" /><circle cx=\"4.38\" cy=\"8.68\" r=\"2.73\" fill=\"url(#rpa-app-services-bdd213dd-d313-473c-8ff4-0133fd3a9033)\" /><circle cx=\"10.13\" cy=\"13.67\" r=\"1.78\" fill=\"url(#rpa-app-services-afcc63c5-3649-4476-a742-bcb53a569f3c)\" /></svg>", "app-service-plans": "<svg aria-hidden=\"true\" id=\"rpa-app-service-plans-fca2105f-c039-4f34-bd65-8ab95d4ecdb9\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><defs><linearGradient id=\"rpa-app-service-plans-a773af38-43e4-4fd2-9485-f8aac63ca91b\" x1=\"5.57\" y1=\"17.5\" x2=\"5.57\" y2=\"0.5\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.05\" stop-color=\"#949494\" /><stop offset=\"0.36\" stop-color=\"#979797\" /><stop offset=\"0.54\" stop-color=\"#9f9f9f\" /><stop offset=\"0.69\" stop-color=\"#adadad\" /><stop offset=\"0.73\" stop-color=\"#b3b3b3\" /></linearGradient><linearGradient id=\"rpa-app-service-plans-b4779ae6-74a5-486d-8aad-cd011859785a\" x1=\"10.56\" y1=\"6.02\" x2=\"10.56\" y2=\"19.71\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.18\" stop-color=\"#5ea0ef\" /><stop offset=\"1\" stop-color=\"#0078d4\" /></linearGradient></defs><title>Icon-web-46</title><path d=\"M10.56,16.93a.56.56,0,0,1-.57.57H1.14a.56.56,0,0,1-.56-.57V1.07A.56.56,0,0,1,1.14.5H10a.56.56,0,0,1,.57.57Z\" fill=\"url(#rpa-app-service-plans-a773af38-43e4-4fd2-9485-f8aac63ca91b)\" /><path d=\"M2,6.46A1.08,1.08,0,0,1,3.13,5.38h5A1.08,1.08,0,0,1,9.18,6.46h0A1.08,1.08,0,0,1,8.1,7.55h-5A1.09,1.09,0,0,1,2,6.46Z\" fill=\"#003067\" /><path d=\"M2,3.24A1.09,1.09,0,0,1,3.13,2.15h5A1.08,1.08,0,0,1,9.18,3.24h0A1.08,1.08,0,0,1,8.1,4.32h-5A1.08,1.08,0,0,1,2,3.24Z\" fill=\"#003067\" /><circle cx=\"3.17\" cy=\"3.24\" r=\"0.73\" fill=\"#50e6ff\" /><circle cx=\"3.17\" cy=\"6.46\" r=\"0.73\" fill=\"#50e6ff\" /><path d=\"M17.42,14.38a3.12,3.12,0,0,0-2.67-3,3.93,3.93,0,0,0-4-3.8,4,4,0,0,0-3.83,2.66A3.7,3.7,0,0,0,3.7,13.83,3.77,3.77,0,0,0,7.56,17.5l.34,0h6.26l.17,0A3.15,3.15,0,0,0,17.42,14.38Z\" fill=\"url(#rpa-app-service-plans-b4779ae6-74a5-486d-8aad-cd011859785a)\" /><rect width=\"18\" height=\"18\" fill=\"none\" /></svg>", "app-insights": "<svg aria-hidden=\"true\" id=\"rpa-app-insights-b6f6d99e-f330-481d-836f-ea58cc42217f\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><defs><radialGradient id=\"rpa-app-insights-a7a1c431-6c6d-4a8f-9a69-8da437e5b0c5\" cx=\"9\" cy=\"7.35\" r=\"6.42\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#b77af4\" /><stop offset=\"0.21\" stop-color=\"#b378f2\" /><stop offset=\"0.43\" stop-color=\"#a672ed\" /><stop offset=\"0.65\" stop-color=\"#9267e4\" /><stop offset=\"0.88\" stop-color=\"#7559d8\" /><stop offset=\"1\" stop-color=\"#624fd0\" /></radialGradient><linearGradient id=\"rpa-app-insights-ec0c4f0d-5c8e-4882-96a1-89d61808eb49\" x1=\"9.02\" y1=\"3.91\" x2=\"9.08\" y2=\"11.49\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#f2f2f2\" /><stop offset=\"0.23\" stop-color=\"#f1f1f2\" stop-opacity=\"0.99\" /><stop offset=\"0.37\" stop-color=\"#ededf1\" stop-opacity=\"0.95\" /><stop offset=\"0.48\" stop-color=\"#e7e5f0\" stop-opacity=\"0.89\" /><stop offset=\"0.58\" stop-color=\"#dedbee\" stop-opacity=\"0.81\" /><stop offset=\"0.67\" stop-color=\"#d3ceeb\" stop-opacity=\"0.7\" /><stop offset=\"0.76\" stop-color=\"#c4bee8\" stop-opacity=\"0.57\" /><stop offset=\"0.84\" stop-color=\"#b4abe5\" stop-opacity=\"0.41\" /><stop offset=\"0.92\" stop-color=\"#a095e1\" stop-opacity=\"0.22\" /><stop offset=\"0.99\" stop-color=\"#8b7ddc\" stop-opacity=\"0.02\" /><stop offset=\"1\" stop-color=\"#897bdc\" stop-opacity=\"0\" /></linearGradient></defs><title>Icon-manage-310</title><path d=\"M10.23,17.39l.81-.87V14.2H7v2.32l.81.87A.32.32,0,0,0,8,17.5h2A.32.32,0,0,0,10.23,17.39Z\" fill=\"#cecece\" /><path d=\"M9,.5A5.89,5.89,0,0,0,3.09,7.07c.27,2.47,2.62,3.62,3.29,6.75a.49.49,0,0,0,.47.38h4.3a.49.49,0,0,0,.47-.38c.67-3.13,3-4.28,3.29-6.75A5.89,5.89,0,0,0,9,.5ZM7,14.2\" fill=\"url(#rpa-app-insights-a7a1c431-6c6d-4a8f-9a69-8da437e5b0c5)\" /><path d=\"M11.46,3.79a1.4,1.4,0,0,0-1.35,1.44V6H8V5.23A1.41,1.41,0,0,0,6.59,3.79,1.4,1.4,0,0,0,5.24,5.23,1.41,1.41,0,0,0,6.59,6.68h.64v6a.36.36,0,0,0,.72,0v-6h2.16v6a.36.36,0,1,0,.72,0v-6h.63a1.4,1.4,0,0,0,1.35-1.45A1.4,1.4,0,0,0,11.46,3.79ZM7.23,6H6.55a.74.74,0,0,1-.68-.77.74.74,0,0,1,.68-.77.74.74,0,0,1,.68.77Zm4.28,0h-.68V5.19a.68.68,0,1,1,1.35,0A.73.73,0,0,1,11.51,6Z\" fill=\"url(#rpa-app-insights-ec0c4f0d-5c8e-4882-96a1-89d61808eb49)\" /><polygon points=\"6.96 15.8 11.04 15.01 11.04 14.56 6.96 15.36 6.96 15.8\" fill=\"#999\" /><polygon points=\"11.04 16.11 11.04 15.67 6.96 16.48 6.96 16.52 7.27 16.86 11.04 16.11\" fill=\"#999\" /></svg>", "resource-groups": "<svg aria-hidden=\"true\" id=\"rpa-resource-groups-a685cc8c-32ba-4d54-91da-3a125cb58ded\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><title>Icon-general-7</title><g><g><path d=\"M.5,15.08a.16.16,0,0,0,.08.14l1.16.65L3.7,17a.17.17,0,0,0,.23-.06l.66-1.12a.16.16,0,0,0-.06-.21l-2.3-1.3a.17.17,0,0,1-.08-.14V3.85a.16.16,0,0,1,.08-.14l2.3-1.3a.16.16,0,0,0,.06-.21L3.93,1.08A.17.17,0,0,0,3.7,1L1.78,2.11l-1.2.67a.16.16,0,0,0-.08.14V15.08Z\" fill=\"#949494\" /><path d=\"M2.14,3.77l.06-.06,2.3-1.3a.14.14,0,0,0,.06-.21L3.9,1.08A.15.15,0,0,0,3.68,1L1.75,2.11.56,2.78s-.05,0-.06.06l.9.51Z\" fill=\"#a3a3a3\" /><path d=\"M4.5,15.59l-2.3-1.3a.22.22,0,0,1-.07-.09l-1.62,1,.05,0,1.15.65,2,1.11a.15.15,0,0,0,.22-.06l.66-1.12A.14.14,0,0,0,4.5,15.59Z\" fill=\"#a3a3a3\" /></g><path d=\"M17.5,15.08a.16.16,0,0,1-.08.14l-1.16.65L14.3,17a.17.17,0,0,1-.23-.06l-.66-1.12a.16.16,0,0,1,.06-.21l2.3-1.3a.17.17,0,0,0,.08-.14V3.85a.16.16,0,0,0-.08-.14l-2.3-1.3a.16.16,0,0,1-.06-.21l.66-1.12A.17.17,0,0,1,14.3,1l1.92,1.09,1.2.67a.16.16,0,0,1,.08.14V15.08Z\" fill=\"#949494\" /><path d=\"M15.86,3.77l-.06-.06-2.3-1.3a.14.14,0,0,1-.06-.21l.66-1.12A.15.15,0,0,1,14.32,1l1.93,1.09,1.19.67s0,0,.06.06l-.9.51Z\" fill=\"#a3a3a3\" /><path d=\"M13.5,15.59l2.3-1.3a.22.22,0,0,0,.07-.09l1.62,1,0,0-1.15.65-2,1.11a.15.15,0,0,1-.22-.06l-.66-1.12A.14.14,0,0,1,13.5,15.59Z\" fill=\"#a3a3a3\" /><polygon points=\"14.31 5.93 14.31 12.07 8.99 15.16 8.99 9.01 14.31 5.93\" fill=\"#32bedd\" /><polygon points=\"14.31 5.93 9 9.02 3.68 5.93 9 2.84 14.31 5.93\" fill=\"#9cebff\" /><polygon points=\"8.99 9.02 8.99 15.16 3.68 12.07 3.68 5.93 8.99 9.02\" fill=\"#50e6ff\" /><polygon points=\"3.68 12.07 8.99 9.01 8.99 15.16 3.68 12.07\" fill=\"#9cebff\" /><polygon points=\"14.31 12.07 8.99 9.01 8.99 15.16 14.31 12.07\" fill=\"#50e6ff\" /></g></svg>"};

  /* ---------------- shared pieces ---------------- */
  function title(kicker, html, sub, meta) { return { name: 'Intro', chapter: 'Intro', dur: 4.6, html: K.title({ kicker: kicker, html: html, sub: sub, meta: meta }), steps: [] }; }
  function ci(kind) { return '<span class="ci ' + kind + '">' + (kind === 'ok' ? '✓' : kind === 'bad' ? '✕' : kind === 'run' ? '•' : '') + '</span>'; }
  function tl(k, html, hidden) { return '<div class="tl' + (hidden === false ? '' : ' hid') + '"' + K.k(k) + '><span class="dot"></span>' + html + '</div>'; }
  function side(rows) {
    return '<div class="gh-side">' + rows.map(function (r) { return '<div class="sec"' + K.k(r.k) + '><div class="h">' + r.h + (r.gear ? '<span>⚙</span>' : '') + '</div>' + r.v + '</div>'; }).join('') + '</div>';
  }
  var GH_STEPS = [
    ['Issues &amp; Projects', 'Requirement → feature issue → sub-issues → board'],
    ['GitHub Copilot', 'Agent mode in VS Code builds the API; the cloud agent builds the page on a <code>copilot/</code> branch'],
    ['Pull requests', 'Copilot code review, then human review (CODEOWNERS)'],
    ['Security gates', 'Push protection · CodeQL + Copilot Autofix · dependency review'],
    ['Ruleset on main', 'Required approvals, status checks and code scanning results'],
    ['GitHub Actions', 'CI/CD workflow: build and test, then deploy job'],
    ['Environment "production"', 'Required reviewer approves; the job requests a short-lived OIDC token']
  ];
  var AZ = [
    ['app-registrations', 'Microsoft Entra ID', 'App registration with a federated credential that trusts only <code>environment:production</code>'],
    ['app-services', 'Azure App Service', 'Web app, Linux, Node.js LTS. The identity has <i>Website Contributor</i> on this app only'],
    ['app-service-plans', 'App Service plan', 'Linux plan hosting the web app'],
    ['app-insights', 'Application Insights', 'Optional: telemetry for the live app'],
    ['resource-groups', 'Resource group', 'Holds every demo resource; delete it after the workshop']
  ];
  function arch(active) {
    var h = '<div class="ar' + (active ? ' focus' : '') + '"><div class="hd"><h2>Demo architecture</h2>' +
      (active ? '<span class="stp">' + (active === 'az' ? 'Hand-off to Azure' : 'Step ' + active + ' of 7') + '</span>' : '<span class="stp">7 steps on GitHub · 1 hand-off to Azure</span>') + '</div><div class="grid">';
    h += '<div class="lane"><div class="lt">GitHub · contoso/contoso-order-desk</div><div class="bx">';
    GH_STEPS.forEach(function (s, i) { var n = i + 1; h += '<div class="b' + (active === n ? ' on' : '') + '" data-k="s' + n + '"><span class="nm">' + n + '</span><div><strong>' + s[0] + '</strong>' + s[1] + '</div></div>'; });
    h += '</div></div><div class="br2' + (active === 'az' ? ' on' : '') + '" data-k="bridge"><span>OIDC token → federated credential · no stored cloud secret</span></div>';
    h += '<div class="lane az"><div class="lt">Microsoft Azure · rg-contoso-order-desk</div><div class="bx">';
    AZ.forEach(function (a, i) { h += '<div class="b' + (active === 'az' && i < 2 ? ' on' : '') + '" data-k="a' + (i + 1) + '"><span class="ic">' + (ICONS[a[0]] || '') + '</span><div><strong>' + a[1] + '</strong>' + a[2] + '</div></div>'; });
    h += '</div></div></div><div class="prog">';
    for (var i = 1; i <= 7; i++) h += '<i class="' + ((active === 'az' || (typeof active === 'number' && i < active)) ? 'done' : (active === i ? 'on' : '')) + '"></i>';
    return h + '</div></div>';
  }
  function stepCard(n, cap) {
    return { name: GH_STEPS[n - 1][0].replace('&amp;', '&'), chapter: n + ' · ' + GH_STEPS[n - 1][0].replace('&amp;', '&').replace(/"/g, ''), key: 's' + n, dur: 3.4, html: arch(n),
      steps: [{ t: 0.15, cap: '<b>Step ' + n + '</b> · ' + cap }] };
  }
  var COPILOT_HEAD = '<div class="gh-head" style="padding-bottom:10px"><div class="gh-top"><span class="gh-logo"></span><b>Copilot</b><span class="pill">github.com/copilot</span></div></div>';
  var APPJS = "import express from 'express';\nimport { readFileSync } from 'node:fs';\nimport { fileURLToPath } from 'node:url';\nimport { isValidOrderId } from './validation.js';\n\nconst dataFile = fileURLToPath(new URL('../data/orders.json', import.meta.url));\nconst publicDir = fileURLToPath(new URL('../public', import.meta.url));\nconst orders = JSON.parse(readFileSync(dataFile, 'utf8'));\n\nexport const app = express();\napp.disable('x-powered-by');\napp.use(express.static(publicDir));\n\napp.get('/health', (req, res) => {\n  res.json({ status: 'ok', orders: orders.length });\n});";
  var ROUTE = "\napp.get('/api/orders/:orderId', (req, res) => {\n  const { orderId } = req.params;\n  if (!isValidOrderId(orderId)) {\n    return res.status(400).json({ error: 'Order numbers look like ORD-123456' });\n  }\n  const order = orders.find((o) => o.id === orderId);\n  if (!order) {\n    return res.status(404).json({ error: 'Order not found' });\n  }\n  const { id, status, lastUpdated, estimatedDelivery } = order;\n  res.json({ id, status, lastUpdated, estimatedDelivery });\n});";
  var TREE = [
    { t: '.github', d: 1 }, { t: 'copilot-instructions.md', i: 1 }, { t: 'workflows', d: 1, i: 1 },
    { t: 'data', d: 1 }, { t: 'orders.json', i: 1 },
    { t: 'public', d: 1 }, { t: 'index.html', i: 1 },
    { t: 'src', d: 1 }, { t: 'app.js', i: 1, on: 1 }, { t: 'server.js', i: 1 }, { t: 'validation.js', i: 1, n: 1, k: 'fval', hid: 1 },
    { t: 'test', d: 1 }, { t: 'health.test.js', i: 1 }, { t: 'orders.test.js', i: 1, n: 1, k: 'ftest', hid: 1 },
    { t: 'package.json' }, { t: 'README.md' }
  ];

  /* =====================================================================
     LIVE DEMO · From business requirement to production (7 steps)
     ===================================================================== */
  var S = [];
  S.push(title('Session 5 · Live demo · Contoso Order Desk', 'From business requirement to <em>production</em>',
    'One requirement, seven steps on GitHub, one trusted hand-off to Azure. Each step below is a simulated walkthrough of what you will do live.',
    ['Simulated walkthrough', '≈ 3.5 minutes', 'Steps from GitHub Docs and Microsoft Learn']));
  S.push({ name: 'Architecture', chapter: 'Architecture', dur: 7, html: arch(0), steps: [
    { t: 0.2, cap: 'Seven steps on GitHub, then one trusted hand-off to Azure.' },
    { t: 2.6, focus: 's1', dur: 1.4, pad: 4 }, { t: 3.4, cap: 'Follow the requirement from step 1 to step 7.' },
    { t: 4.6, focus: 'bridge', dur: 2.2, pad: 4 }, { t: 4.8, cap: 'GitHub reaches Azure with a short-lived OIDC token: <b>no stored cloud secret</b>.' }
  ] });

  /* ---- Step 1: Issues & Projects ---- */
  S.push(stepCard(1, 'Issues &amp; Projects: turn the business requirement into a planned, tracked issue.'));
  S.push({ name: 'Copilot drafts the issue', dur: 13.5, html: K.gh({ url: 'github.com/copilot', head: COPILOT_HEAD, body:
    '<div class="cp-chat" style="max-width:940px;margin:0 auto">' +
    '<div class="q hid" data-k="u1"><div>In contoso/contoso-order-desk, create a feature issue from this requirement using our Feature request form, with sub-issues for the API, the agent page and an audit log. <span class="pill">Requirement: Order Desk (pasted)</span></div></div>' +
    '<div class="hid" data-k="r1"><div style="font-size:13.5px;margin:4px 0">Here is a draft that follows the <b>Feature request</b> form:</div>' +
    '<div class="draft" data-k="draft"><div class="t">[Feature]: Order Desk – look up order status by order number</div><div class="kv">Type: Feature · Label: enhancement · Project: Order Desk</div>' +
    '<div style="font-size:13px;margin-top:6px"><b>Acceptance criteria</b><ul style="margin:2px 0 0;padding-left:20px"><li>A valid order number shows status and estimated delivery date</li><li data-k="ac2">An unknown<span data-k="ac2x"></span> order number shows a clear "not found" message</li><li>Payment details are never shown</li><li>Every lookup is recorded for audit</li></ul></div></div>' +
    '<div class="draft" style="padding:4px 0"><div class="kv" style="padding:4px 12px">Sub-issues (3)</div>' +
    '<div class="subi"><span class="icon-o"></span>Order lookup API</div><div class="subi"><span class="icon-o"></span>Agent lookup page</div><div class="subi"><span class="icon-o"></span>Audit log of every lookup</div></div>' +
    '<div style="margin-top:6px"><span class="gbtn pri" data-k="create">Create issue</span> <span class="gbtn">Edit</span></div></div></div>' +
    '<div class="inpt" data-k="box" style="position:absolute;left:22px;right:22px;bottom:14px;min-height:46px;padding-right:90px"><span data-k="in" style="white-space:pre-wrap"></span><span class="ph" data-k="ph">Ask Copilot</span><span class="gbtn blue" data-k="send" style="position:absolute;right:8px;bottom:7px">Send</span></div>' }),
    steps: [
      { t: 0.1, cap: 'Paste the requirement into Copilot on GitHub.com and ask for an issue.' },
      { t: 0.5, click: 'box' },
      { t: 0.9, type: 'in', str: 'In contoso/contoso-order-desk, create a feature issue from this requirement using our Feature request form, with sub-issues for the API, the agent page and an audit log.', cps: 95 },
      { t: 3.2, click: 'send' }, { t: 3.4, el: 'in', text: '' }, { t: 3.4, show: ['u1', 'ph'] },
      { t: 3.9, show: 'r1' }, { t: 3.9, lines: 'r1', dur: 2.2 },
      { t: 4.1, cap: 'Copilot maps it to the repository\'s issue form and drafts three sub-issues <b>(public preview)</b>.' },
      { t: 6.9, zoom: 'draft', s: 1.35 },
      { t: 7.6, focus: 'ac2', dur: 2.6, pad: 3 }, { t: 7.7, cap: 'People own the requirement: tighten the wording before you create it.' },
      { t: 8.2, type: 'ac2x', str: ' or mistyped', cps: 18 },
      { t: 10.8, zoom: null },
      { t: 12.2, click: 'create' }
    ] });
  S.push({ name: 'Issue #12 with sub-issues', dur: 7, html: K.gh({ tab: 'Issues', url: 'github.com/contoso/contoso-order-desk/issues/12', body:
    '<h1 class="gh-title">[Feature]: Order Desk – look up order status by order number <span class="no">#12</span></h1>' +
    '<div class="gh-meta"><span class="st-open">● Open</span><b>presenter</b> opened this issue now</div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="gh-box"><div class="hd"><span class="av">P</span><b>presenter</b> commented</div><div class="bd"><h4 style="margin-top:0">Business problem</h4>Agents search several systems to answer "where is my order?" calls.<h4>Acceptance criteria</h4><ul><li>A valid order number shows status and estimated delivery date</li><li>An unknown or mistyped order number shows a clear "not found" message</li><li>Payment details are never shown · every lookup is recorded for audit</li></ul></div></div>' +
    '<div class="gh-box" data-k="subs"><div class="hd">Sub-issues <span class="pill">0 of 3</span></div><div class="subi"><span class="icon-o"></span>Order lookup API <span class="pill">#13</span></div><div class="subi"><span class="icon-o"></span>Agent lookup page <span class="pill">#14</span></div><div class="subi"><span class="icon-o"></span>Audit log of every lookup <span class="pill">#15</span></div></div></div>' +
    side([{ h: 'Assignees', v: 'No one' }, { h: 'Labels', v: '<span class="lbl enh">enhancement</span>' }, { h: 'Type', v: '<span class="lbl feat">Feature</span>' }, { h: 'Projects', k: 'proj', v: 'Order Desk · <b>In progress</b>' }, { h: 'Development', v: 'No branches or pull requests' }]) + '</div>' }),
    steps: [{ t: 0.1, cap: 'The issue is created with its type, label, project and three sub-issues.' }, { t: 1.6, focus: 'subs', dur: 2.4 }, { t: 4.3, focus: 'proj', dur: 2.2 }] });
  S.push({ name: 'Project board', dur: 6, html: K.gh({ tab: 'Projects', url: 'github.com/orgs/contoso/projects/1', body:
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><b style="font-size:18px">Order Desk</b><span class="pill">Board</span><span class="pill">Table</span><span class="pill">Roadmap</span></div>' +
    '<div class="board"><div class="col"><div class="h"><span class="icon-o" style="border-color:#8c959f"></span>Todo <span class="pill">3</span></div><div class="card2">Order lookup API<div class="s">#13 · sub-issue of #12</div></div><div class="card2">Agent lookup page<div class="s">#14 · sub-issue of #12</div></div><div class="card2">Audit log of every lookup<div class="s">#15 · sub-issue of #12</div></div></div>' +
    '<div class="col"><div class="h"><span class="icon-o" style="border-color:#bf8700"></span>In progress <span class="pill">1</span></div><div class="card2" data-k="c12">[Feature]: Order Desk – look up order status by order number<div class="s">#12 · Feature</div></div></div>' +
    '<div class="col"><div class="h"><span class="icon-done"></span>Done <span class="pill">0</span></div></div></div>' }),
    steps: [{ t: 0.1, cap: 'Stakeholders follow progress on the project board without reading code.' }, { t: 1.4, move: 'c12' }] });

  /* ---- Step 2: GitHub Copilot ---- */
  S.push(stepCard(2, 'GitHub Copilot: agent mode builds the API while the cloud agent builds the page.'));
  S.push({ name: 'Agent mode builds the API', dur: 19.5, html: K.vscode({ branch: 'feature/order-lookup-api', file: 'app.js', tree: TREE, mode: 'Plan', edScroll: true, term: '<div data-k="tcmd" class="t-p"></div><div data-k="tout"><div class="t-d">▶ orders API</div><div class="t-g">  ✔ returns the order for a valid id (8.1ms)</div><div class="t-g">  ✔ returns 400 for an invalid id (1.2ms)</div><div class="t-g">  ✔ returns 404 for an unknown id (0.9ms)</div><div class="t-g">✔ tests 7 · pass 7 · fail 0</div></div>', termHidden: true,
    code: K.code(APPJS, { lang: 'js', add: [4] }) + '<div data-k="newl">' + K.code(ROUTE, { lang: 'js', start: 16, add: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] }) + '</div>',
    chat: K.u('Plan the order lookup API from issue #13: GET /api/orders/:orderId with 400 and 404 handling. List files and tests.', 'u1') +
      K.c('<div><b>Plan</b></div><div>1. <code>src/validation.js</code>: <code>isValidOrderId()</code></div><div>2. <code>src/app.js</code>: route returning 200, 400 or 404</div><div>3. <code>test/orders.test.js</code>: one test per response</div><div class="warn">No files changed yet.</div>', 'c1') +
      K.u('Implement the plan. Then run npm test and fix any failures.', 'u2') +
      K.c('<div>' + K.file('src/validation.js', 5, 0) + '</div><div>' + K.file('src/app.js', 14, 0) + '</div><div>' + K.file('test/orders.test.js', 34, 0) + '</div><div>' + K.approve('npm test', 'ap1', 'allow1') + '</div>', 'c2') +
      K.c('<span class="ok">✔</span> All 7 tests pass. Review the changes, then commit.', 'c3') }),
    steps: [
      { t: 0.1, cap: '<b>Plan mode</b> first: Copilot researches and proposes a plan without changing files.' },
      { t: 0.5, click: 'inbox' },
      { t: 0.8, type: 'in', str: 'Plan the order lookup API from issue #13: GET /api/orders/:orderId with 400 and 404 handling. List files and tests.', cps: 80 },
      { t: 2.6, click: 'send' }, { t: 2.8, el: 'in', text: '' }, { t: 2.8, show: 'u1' },
      { t: 3.1, show: 'c1' }, { t: 3.1, lines: 'c1b', dur: 2 },
      { t: 5.6, click: 'mode' }, { t: 5.9, el: 'mode', text: 'Agent ▾' }, { t: 5.9, el: 'mode', rm: 'pl' }, { t: 5.9, el: 'mode', add: 'ag' }, { t: 5.9, el: 'mode2', text: 'Agent' },
      { t: 6.0, cap: 'Then <b>Agent mode</b> implements it: edits files, runs commands, checks its own work.' },
      { t: 6.4, click: 'inbox' },
      { t: 6.7, type: 'in', str: 'Implement the plan. Then run npm test and fix any failures.', cps: 60 },
      { t: 7.9, click: 'send' }, { t: 8.1, el: 'in', text: '' }, { t: 8.1, show: 'u2' },
      { t: 8.4, show: 'c2' }, { t: 8.4, lines: 'c2b', dur: 2.4 },
      { t: 8.7, show: ['fval', 'ftest'] }, { t: 8.8, lines: 'newl', dur: 2.6 },
      { t: 9.6, zoom: 'ed', s: 1.25 }, { t: 12.2, zoom: null },
      { t: 12.0, cap: 'You approve each command before it runs.' },
      { t: 13.0, click: 'allow1' },
      { t: 13.3, show: 'term' }, { t: 13.4, type: 'tcmd', str: '$ npm test', cps: 25 }, { t: 14.1, lines: 'tout', dur: 1.6 },
      { t: 16.2, show: 'c3' }, { t: 16.3, cap: 'Tests pass. You review the diff before anything is committed.' }
    ] });
  S.push({ name: 'Cloud agent takes issue #14', dur: 13.5, html: K.gh({ tab: 'Issues', url: 'github.com/contoso/contoso-order-desk/issues/14', body:
    '<h1 class="gh-title">Agent lookup page <span class="no">#14</span></h1><div class="gh-meta"><span class="st-open">● Open</span>Sub-issue of #12 · Order Desk</div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="gh-box"><div class="hd"><span class="av">P</span><b>presenter</b> commented</div><div class="bd">Build the page agents use to look up an order. Use <code>GET /api/orders/:orderId</code>. Show a clear message for unknown order numbers. Keyboard accessible. Add tests.</div></div>' +
    tl('tl1', '<span class="av cp">C</span><b>Copilot</b> was assigned by <b>presenter</b>') + tl('tl2', '<span class="av cp">C</span><b>Copilot</b> started work · <span class="gbtn" data-k="vs">View session</span>') +
    tl('tl3', '<span class="av cp">C</span><b>Copilot</b> opened draft pull request <b>#16 Build the agent lookup page</b> on <code>copilot/agent-lookup-page</code>') + '</div>' +
    side([{ h: 'Assignees', gear: 1, k: 'asg', v: '<span data-k="asgv">No one – <span style="color:#0969da">assign yourself</span></span>' }, { h: 'Labels', v: '<span class="lbl enh">enhancement</span>' }, { h: 'Projects', v: 'Order Desk · Todo' }, { h: 'Development', v: '<span data-k="dev">No branches or pull requests</span>' }]) + '</div>' +
    '<div class="pop hid" data-k="pop" style="right:30px;top:118px"><div class="it" style="font-weight:600;border-top:0">Assign up to 10 people to this issue</div><div class="it on" data-k="pcop"><span class="av cp">C</span><b>Copilot</b></div><div class="it"><span class="av">P</span>presenter</div><div class="it"><span class="av ap">A</span>approver</div></div>' +
    '<div class="modal hid" data-k="dlg"><div class="dlg"><div class="hd">Assign Copilot to issue #14</div><div class="bd">Optional prompt<div class="inpt big" style="margin-top:6px"><span data-k="dprompt" style="white-space:pre-wrap"></span></div><div style="margin-top:8px;font-size:12.5px;color:#59636e">Repository: contoso/contoso-order-desk · Base branch: main</div></div><div class="ft"><span class="gbtn">Cancel</span><span class="gbtn pri" data-k="dassign">Assign</span></div></div></div>' +
    '<div class="modal hid" data-k="sess"><div class="dlg" style="width:640px"><div class="hd">Session · Build the agent lookup page</div><div class="bd" data-k="sl">' +
    '<div class="slog"><div class="it">' + ci('ok') + 'Read issue #14 and .github/copilot-instructions.md</div><div class="it">' + ci('ok') + 'Ran Copilot setup steps: npm ci</div><div class="it">' + ci('ok') + 'Created public/index.html, public/app.js, public/styles.css</div><div class="it">' + ci('ok') + 'Added test/page.test.js · ran npm test: 9 passed</div><div class="it">' + ci('ok') + 'Pushed 3 signed commits to copilot/agent-lookup-page</div></div></div></div></div>' }),
    steps: [
      { t: 0.1, cap: 'Meanwhile, assign the page (issue #14) to the <b>Copilot cloud agent</b>.' },
      { t: 0.8, click: 'asg' }, { t: 1.0, show: 'pop' },
      { t: 2.0, click: 'pcop' }, { t: 2.2, hide: 'pop' }, { t: 2.2, show: 'dlg' },
      { t: 2.6, type: 'dprompt', str: 'Plain HTML, CSS and JavaScript in public/. Use GET /api/orders/:orderId. Keyboard accessible. Add tests.', cps: 85 },
      { t: 4.4, click: 'dassign' }, { t: 4.6, hide: 'dlg' }, { t: 4.6, show: 'tl1' }, { t: 4.6, el: 'asgv', html: '<span class="av cp">C</span> Copilot' },
      { t: 5.1, show: 'tl2' }, { t: 5.2, cap: 'It works in its own cloud environment, on a <b>copilot/</b> branch, and opens a draft pull request.' },
      { t: 6.4, show: 'tl3' }, { t: 6.4, el: 'dev', html: '<b>#16</b> Build the agent lookup page (draft)' },
      { t: 7.6, click: 'vs' }, { t: 7.9, show: 'sess' }, { t: 7.9, lines: 'sl', dur: 0.1 },
      { t: 8.0, cap: 'The session log shows every step. Commits are signed and co-authored by the requester.' }
    ] });

  /* ---- Step 3: Pull requests ---- */
  S.push(stepCard(3, 'Pull requests: Copilot reviews first, then a code owner decides.'));
  var PR17_HEAD = '<h1 class="gh-title">Add order lookup API <span class="no">#17</span></h1><div class="gh-meta"><span class="st-open" data-k="prst">⇄ Open</span><b>presenter</b> wants to merge 3 commits into <code>main</code> from <code>feature/order-lookup-api</code></div>' +
    '<div class="gh-sub"><span class="on">Conversation</span><span>Commits 3</span><span>Checks 4</span><span>Files changed 4</span></div>';
  S.push({ name: 'Copilot code review', dur: 11, html: K.gh({ tab: 'Pull requests', url: 'github.com/contoso/contoso-order-desk/pull/17', body: PR17_HEAD +
    '<div class="gh-cols"><div class="gh-main"><div class="cmt"><div class="hd"><span class="av">P</span><b>presenter</b> commented · summary by Copilot</div><div class="bd">Adds <code>GET /api/orders/:orderId</code> with validation (400) and not-found (404) responses, plus tests. Fixes #13.</div></div>' +
    '<div class="cmt hid" data-k="rev"><div class="hd"><span class="av cp">C</span><b>Copilot</b> reviewed · Copilot reviewed 4 of 4 changed files and generated 1 comment</div><div class="bd" data-k="revb"><div><b>src/app.js</b> line 18</div><div>Order numbers pasted by agents can include surrounding spaces. Trim the value before validating so <code>ORD-100232 </code> is accepted.</div>' +
    '<div class="sugg"><div class="h">Suggested change</div><div class="d">-  const { orderId } = req.params;</div><div class="a">+  const orderId = req.params.orderId.trim();</div></div><div style="margin-top:6px"><span class="gbtn pri" data-k="cs">Commit suggestion</span> <span class="gbtn">Add suggestion to batch</span></div></div></div>' +
    tl('tlcs', '<span class="av">P</span><b>presenter</b> committed the suggestion · <code>Trim order ID before validating</code>') + '</div>' +
    side([{ h: 'Reviewers', k: 'revs', v: '<div><span class="av cp">C</span> Copilot <span data-k="cpst" class="pill">requested</span></div><div style="margin-top:4px"><span class="av">O</span> @contoso/order-desk-maintainers <span class="pill">Code owner</span></div>' }, { h: 'Assignees', v: 'presenter' }, { h: 'Development', v: 'Fixes #13 Order lookup API' }]) + '</div>' }),
    steps: [
      { t: 0.1, cap: 'The ruleset requests a <b>Copilot code review</b> automatically on every pull request.' },
      { t: 0.6, focus: 'revs', dur: 2.2 },
      { t: 2.0, show: 'rev' }, { t: 2.0, lines: 'revb', dur: 1.4 }, { t: 2.0, el: 'cpst', text: 'commented' },
      { t: 2.3, cap: 'In seconds, Copilot leaves a <b>Comment</b> review with a suggested change.' },
      { t: 3.6, zoom: 'rev', s: 1.3 }, { t: 7.0, zoom: null },
      { t: 6.0, click: 'cs' }, { t: 6.3, show: 'tlcs' }, { t: 6.3, el: 'cs', add: 'hid' },
      { t: 7.4, cap: 'Copilot\'s review doesn\'t count toward required approvals. People decide.' }
    ] });
  S.push({ name: 'Code owner approves', dur: 9.5, html: K.gh({ tab: 'Pull requests', url: 'github.com/contoso/contoso-order-desk/pull/17/files', body: PR17_HEAD.replace('<span class="on">Conversation</span><span>Commits 3</span><span>Checks 4</span><span>Files changed 4</span>', '<span>Conversation</span><span>Commits 4</span><span>Checks 4</span><span class="on">Files changed 4</span>') +
    '<div class="banner blue"><span class="av ap">A</span><div><b>approver</b>: your review was requested as a member of <b>@contoso/order-desk-maintainers</b> (code owner)</div><span class="gbtn pri" data-k="rc" style="margin-left:auto">Review changes ▾</span></div>' +
    '<div class="gh-box"><div class="diffh">src/app.js</div>' + K.code("app.get('/api/orders/:orderId', (req, res) => {\n  const orderId = req.params.orderId.trim();\n  if (!isValidOrderId(orderId)) {\n    return res.status(400).json({ error: 'Order numbers look like ORD-123456' });\n  }", { lang: 'js', start: 17, add: [17, 18, 19, 20, 21] }) + '</div>' +
    '<div class="pop hid" data-k="rvp" style="right:30px;top:178px;width:380px"><div class="it" style="border-top:0;font-weight:600">Finish your review</div><div style="padding:8px 12px"><div class="inpt" style="min-height:52px"><span data-k="rvt"></span></div></div><div class="it">○ Comment</div><div class="it on">● Approve</div><div class="it">○ Request changes</div><div style="padding:8px 12px;text-align:right"><span class="gbtn pri" data-k="sub">Submit review</span></div></div>' +
    '<div class="merge ok hid" data-k="mok">' + ci('ok') + '<div><b>Changes approved</b><div style="color:#59636e;font-size:12.5px">1 approving review by reviewers with write access · code owner review satisfied</div></div></div>' }),
    steps: [
      { t: 0.1, cap: '<b>CODEOWNERS</b> routes the review to the right team. A code owner reviews the diff.' },
      { t: 1.6, click: 'rc' }, { t: 1.8, show: 'rvp' },
      { t: 2.3, type: 'rvt', str: 'Validation, 400 and 404 are covered. Approving.', cps: 40 },
      { t: 4.4, click: 'sub' }, { t: 4.6, hide: 'rvp' }, { t: 4.7, show: 'mok' },
      { t: 4.9, cap: 'A different person approves. The person who asked Copilot for work can\'t approve its pull request.' },
      { t: 5.6, focus: 'mok', dur: 3 }
    ] });

  /* ---- Step 4: Security gates ---- */
  S.push(stepCard(4, 'Security gates: push protection, CodeQL with Copilot Autofix, and dependency review.'));
  S.push({ name: 'Push protection', dur: 10.5, html: K.term({ title: 'Terminal — contoso-order-desk (demo/push-protection)', body:
    '<div data-k="c1" class="t-p"></div><div class="hid t-d" data-k="o1">[demo/push-protection 4f2c9a1] Add Order Desk configuration\n 1 file changed, 1 insertion(+)</div><div data-k="c2" class="t-p"></div>' +
    '<div data-k="out"><div class="t-r">remote: error: GH013: Repository rule violations found for refs/heads/demo/push-protection.</div><div class="t-r">remote: - Push cannot contain secrets</div><div class="t-y">remote:   —— Contoso demo token (custom pattern) ——————————</div><div class="t-y">remote:    locations:  commit 4f2c9a1 · path config.env:1</div><div class="t-d">remote:    (?) To push, remove the secret from the commit, or request a bypass.</div><div class="t-r"> ! [remote rejected] demo/push-protection -> demo/push-protection (push declined due to repository rule violations)</div></div>' }),
    steps: [
      { t: 0.1, cap: '<b>Push protection</b>: a developer commits a made-up Contoso token by mistake.' },
      { t: 0.4, type: 'c1', str: '$ git add config.env && git commit -m "Add Order Desk configuration"', cps: 60 },
      { t: 1.8, show: 'o1' },
      { t: 2.3, type: 'c2', str: '$ git push -u origin demo/push-protection', cps: 45 },
      { t: 3.4, lines: 'out', dur: 1.6 },
      { t: 3.6, cap: 'The push is blocked before the secret reaches GitHub. The message names the file and line.' },
      { t: 5.2, zoom: 'out', s: 1.1 }, { t: 9.6, zoom: null },
      { t: 7.4, cap: 'Fix: remove the secret, amend the commit, push again. No bypass needed.' }
    ] });
  var XSS = "  const id = req.query.id;\n  const order = orders.find((o) => o.id === id);\n  if (!order) {\n    return res.send(`<p>No order found for ${id}</p>`);\n  }";
  S.push({ name: 'CodeQL and Copilot Autofix', dur: 13.5, html: K.gh({ tab: 'Pull requests', scroll: true, url: 'github.com/contoso/contoso-order-desk/pull/18/files', body:
    '<h1 class="gh-title" style="font-size:20px">Show not-found message <span class="no">#18</span></h1><div class="gh-sub"><span>Conversation</span><span>Checks</span><span class="on">Files changed 1</span></div>' +
    '<div class="gh-box" style="max-width:900px"><div class="diffh">src/app.js</div>' + K.code(XSS, { lang: 'js', start: 31, add: [31, 32, 33, 34, 35] }) +
    '<div class="annot" data-k="ann" style="margin:6px 12px"><div class="h">Code scanning · CodeQL · <span class="sev h">High</span> Reflected cross-site scripting</div><div style="font-size:13px">Cross-site scripting vulnerability due to a user-provided value.</div></div>' +
    '<div class="cmt hid" data-k="afx" style="margin:6px 12px"><div class="hd"><span class="av cp">C</span><b>Copilot Autofix for CodeQL</b></div><div class="bd" data-k="afxb"><div>Encode the user-provided value before writing it into the HTML response.</div><div class="sugg"><div class="h">Suggested fix · src/app.js, package.json</div><div class="a">+ import escapeHtml from \'escape-html\';</div><div class="d">-     return res.send(`&lt;p&gt;No order found for ${id}&lt;/p&gt;`);</div><div class="a">+     return res.send(`&lt;p&gt;No order found for ${escapeHtml(id)}&lt;/p&gt;`);</div><div class="a">+   "escape-html": "^1.0.3"</div></div><div style="margin-top:6px"><span class="gbtn pri" data-k="cfx">Commit fix</span> <span class="gbtn">Edit</span> <span class="gbtn">Dismiss suggestion</span></div></div></div></div>' +
    '<div class="gh-box" data-k="chk" style="max-width:900px"><div class="chk" data-k="chk1">' + ci('bad') + '<b>Code scanning results / CodeQL</b><span class="r">1 new alert including 1 high severity security vulnerability</span></div></div>' }),
    steps: [
      { t: 0.1, cap: '<b>CodeQL</b> runs on the pull request and flags reflected cross-site scripting on the changed line.' },
      { t: 0.8, focus: 'ann', dur: 2.6 },
      { t: 3.4, show: 'afx' }, { t: 3.4, lines: 'afxb', dur: 1.4 },
      { t: 3.6, cap: '<b>Copilot Autofix</b> proposes a fix. Review it like any other change.' },
      { t: 4.6, zoom: 'afx', s: 1.22 }, { t: 8.0, zoom: null },
      { t: 8.4, click: 'cfx' }, { t: 8.7, el: 'cfx', text: 'Fix committed' },
      { t: 9.6, el: 'chk1', html: ci('ok') + '<b>Code scanning results / CodeQL</b><span class="r">No new alerts</span>' },
      { t: 9.7, cap: 'The check reruns and passes. Autofix needs no Copilot licence (Code Security on private repos).' },
      { t: 10.2, focus: 'chk', dur: 2.6 }
    ] });
  S.push({ name: 'Dependency review', dur: 8.5, html: K.gh({ tab: 'Pull requests', url: 'github.com/contoso/contoso-order-desk/pull/19', body:
    '<h1 class="gh-title" style="font-size:20px">Add date helper dependency <span class="no">#19</span></h1><div class="gh-meta"><span class="st-open">⇄ Open</span>Adds <code>lodash@4.17.15</code></div>' +
    '<div class="gh-box"><div class="chk">' + ci('ok') + '<b>build</b><span class="r">Successful in 41s</span></div><div class="chk" data-k="dr">' + ci('bad') + '<b>Dependency Review</b><span class="r">Failing: vulnerable package added</span></div>' +
    '<div style="padding:4px 14px 10px 38px;font-size:12.5px;color:#59636e" data-k="drd"><div>lodash@4.17.15 · Prototype Pollution in lodash · <span class="sev h">high</span></div><div>lodash@4.17.15 · Command Injection in lodash · <span class="sev h">high</span></div></div></div>' +
    '<div class="merge bad" data-k="mb">' + ci('bad') + '<div><b>Merging is blocked</b><div style="color:#59636e;font-size:12.5px">Required status check "Dependency Review" has failed</div></div><span class="gbtn" style="margin-left:auto">Close pull request</span></div>' }),
    steps: [
      { t: 0.1, cap: '<b>Dependency review</b> fails the pull request that adds a package with known vulnerabilities.' },
      { t: 1.0, focus: 'dr', dur: 2.4 },
      { t: 3.8, focus: 'mb', dur: 3.4 }, { t: 3.9, cap: 'The check is required, so the vulnerable package can\'t merge.' }
    ] });

  /* ---- Step 5: Ruleset on main ---- */
  S.push(stepCard(5, 'Ruleset on main: one set of rules for people and agents alike.'));
  S.push({ name: 'Protect main', dur: 8.5, html: K.gh({ tab: 'Settings', url: 'github.com/contoso/contoso-order-desk/settings/rules', body:
    '<div class="set"><div class="nav"><div>General</div><div>Collaborators and teams</div><div class="grp">Code and automation</div><div>Branches</div><div class="on">Rules › Rulesets</div><div>Actions</div><div>Environments</div><div>Pages</div><div class="grp">Security</div><div>Advanced Security</div><div>Copilot</div></div>' +
    '<div style="flex:1"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><b style="font-size:18px">Protect main</b><span class="lbl" style="background:#dafbe1;color:#1a7f37">Active</span><span class="pill">Target: default branch</span></div>' +
    '<div class="gh-box" data-k="rules"><div class="rule">' + ci('ok') + '<div><b>Require a pull request before merging</b><div class="s">1 required approval · review from Code Owners · dismiss stale approvals</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Require status checks to pass</b><div class="s">build · Dependency Review</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Require code scanning results</b><div class="s">CodeQL · security alerts: High or higher</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Automatically request Copilot code review</b><div class="s">Review new pushes</div></div></div>' +
    '<div class="rule">' + ci('ok') + '<div><b>Block force pushes</b></div></div></div></div></div>' }),
    steps: [{ t: 0.1, cap: 'One <b>ruleset</b> on <b>main</b>: required reviews, status checks and code scanning results.' }, { t: 0.4, lines: 'rules', dur: 2.6 }, { t: 3.6, focus: 'rules', dur: 4.2 }, { t: 3.8, cap: 'The same rules apply to every change, whether a person or an agent wrote it.' }] });
  S.push({ name: 'Merge', dur: 8.5, html: K.gh({ tab: 'Pull requests', url: 'github.com/contoso/contoso-order-desk/pull/17', body: PR17_HEAD +
    '<div class="gh-box"><div class="chk">' + ci('ok') + '<b>build</b><span class="r">Successful in 38s</span></div><div class="chk">' + ci('ok') + '<b>Dependency Review</b><span class="r">No vulnerable packages</span></div><div class="chk">' + ci('ok') + '<b>Code scanning results / CodeQL</b><span class="r">No new alerts</span></div></div>' +
    '<div class="merge ok" data-k="mbox">' + ci('ok') + '<div style="flex:1"><b>Changes approved</b> · <b>All checks have passed</b><div style="color:#59636e;font-size:12.5px">This branch has no conflicts with the base branch</div></div><span class="gbtn pri" data-k="sq">Squash and merge</span></div>' +
    '<div class="merge hid" data-k="merged" style="border-color:#8250df;margin-top:10px"><span class="ci" style="background:#8250df">✓</span><div><b>Pull request successfully merged and closed</b><div style="color:#59636e;font-size:12.5px">Fixes #13 closed the sub-issue Order lookup API</div></div></div>' }),
    steps: [
      { t: 0.1, cap: 'With approvals and required checks satisfied, the merge box opens.' },
      { t: 2.6, click: 'sq' }, { t: 2.9, el: 'prst', html: '⇄ Merged' }, { t: 2.9, el: 'prst', rm: 'st-open' }, { t: 2.9, el: 'prst', add: 'st-merged' }, { t: 2.9, show: 'merged' }, { t: 2.9, el: 'sq', add: 'hid' },
      { t: 3.1, cap: 'Squash and merge. <b>Fixes #13</b> closes the sub-issue on the project board.' }
    ] });

  /* ---- Step 6: GitHub Actions ---- */
  S.push(stepCard(6, 'GitHub Actions: the merge triggers CI/CD — build and test, then deploy.'));
  function runPage(extra) {
    return K.gh({ tab: 'Actions', url: 'github.com/contoso/contoso-order-desk/actions/runs/23', body:
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><span data-k="runst">' + ci('run') + '</span><b style="font-size:18px">CI/CD · Merge pull request #17 from feature/order-lookup-api</b><span class="pill">main</span></div>' +
      '<div class="gh-box"><div class="wf"><div class="job" data-k="jb"><span data-k="jbi">' + ci('run') + '</span><div><b>build</b><div class="s" data-k="jbs">In progress</div></div></div><span class="arrow2">→</span><div class="job" data-k="jd"><span data-k="jdi">' + ci('wait') + '</span><div><b>deploy</b><div class="s" data-k="jds">Waiting · production</div></div></div></div></div>' + (extra || '') });
  }
  S.push({ name: 'Build and test', dur: 12.5, html: runPage('<div class="gh-box steps2" data-k="bsteps"><div class="hd">build</div><div class="chk">' + ci('ok') + 'Set up job</div><div class="chk">' + ci('ok') + 'Run actions/checkout@v6</div><div class="chk">' + ci('ok') + 'Use Node.js 24.x</div><div class="chk">' + ci('ok') + 'npm ci</div><div class="chk">' + ci('ok') + 'npm test<span class="r">tests 7 · pass 7 · fail 0</span></div><div class="chk">' + ci('ok') + 'Upload artifact for deployment job</div></div>'),
    steps: [
      { t: 0.1, cap: 'The <b>CI/CD</b> workflow runs on the merge to main: build and test first.' },
      { t: 0.6, lines: 'bsteps', dur: 5 },
      { t: 6.2, el: 'jbi', html: ci('ok') }, { t: 6.2, el: 'jbs', text: 'Success · 38s' },
      { t: 6.6, el: 'jds', text: 'Waiting for review · production' }, { t: 6.6, focus: 'jd', dur: 4.6 },
      { t: 6.8, cap: 'The deploy job waits: the <b>production</b> environment requires a reviewer.' }
    ] });

  /* ---- Step 7: Environment production ---- */
  S.push(stepCard(7, 'Environment "production": a reviewer approves, the job authenticates with OIDC.'));
  S.push({ name: 'Approve and deploy', dur: 18, html: runPage(
    '<div class="banner" data-k="ban"><b>production</b>&nbsp;is waiting for review · presenter\'s deployment needs approval to start<span class="gbtn" data-k="rd" style="margin-left:auto">Review deployments</span></div>' +
    '<div class="gh-box steps2 hid" data-k="dsteps"><div class="hd">deploy · environment: production</div><div class="chk">' + ci('ok') + 'Download artifact from build job</div><div class="chk">' + ci('ok') + 'Az CLI login (OIDC)<span class="r">azure/login · client-id, tenant-id, subscription-id</span></div><div class="chk">' + ci('ok') + 'Deploy to Azure WebApp<span class="r">contoso-order-desk-demo</span></div></div>' +
    '<div class="log hid" data-k="dlog" style="max-width:820px"><div class="dim">Run azure/login · federated token requested from GitHub OIDC provider</div><div class="ok">Login successful.</div><div class="dim">Run azure/webapps-deploy · package: .</div><div class="ok">App Service Application URL: https://contoso-order-desk-demo.azurewebsites.net</div></div>' +
    '<div class="modal hid" data-k="rdm"><div class="dlg"><div class="hd">Review pending deployments</div><div class="bd"><div style="display:flex;gap:8px;align-items:center"><span class="ci ok">✓</span><b>production</b><span class="pill">required reviewer: approver</span></div><div class="inpt" style="margin-top:10px;min-height:52px"><span data-k="rdt"></span></div></div><div class="ft"><span class="gbtn danger">Reject</span><span class="gbtn pri" data-k="ad">Approve and deploy</span></div></div></div>'),
    steps: [
      { t: 0, el: 'jbi', html: ci('ok') }, { t: 0, el: 'jbs', text: 'Success · 38s' }, { t: 0, el: 'jds', text: 'Waiting for review · production' },
      { t: 0.1, cap: 'The <b>approver</b> reviews the pending deployment to <b>production</b>.' },
      { t: 1.2, click: 'rd' }, { t: 1.5, show: 'rdm' },
      { t: 2.0, type: 'rdt', str: 'Approved for the Contoso demo.', cps: 32 },
      { t: 3.6, click: 'ad' }, { t: 3.9, hide: ['rdm', 'ban'] },
      { t: 4.0, el: 'jdi', html: ci('run') }, { t: 4.0, el: 'jds', text: 'In progress · production' },
      { t: 4.1, show: 'dsteps' }, { t: 4.1, lines: 'dsteps', dur: 4.5 }, { t: 5.0, show: 'dlog' }, { t: 5.0, lines: 'dlog', dur: 4.6 },
      { t: 4.4, cap: 'The job requests a <b>short-lived OIDC token</b>. No cloud password is stored in GitHub.' },
      { t: 6.0, zoom: 'dlog', s: 1.4 }, { t: 11.4, zoom: null },
      { t: 9.8, el: 'jdi', html: ci('ok') }, { t: 9.8, el: 'jds', text: 'Success · contoso-order-desk-demo.azurewebsites.net' }, { t: 9.8, el: 'runst', html: ci('ok') },
      { t: 10.0, cap: 'Deployed to <b>Azure App Service</b>. The run records who approved and which commit shipped.' },
      { t: 12.2, focus: 'jd', dur: 4 }
    ] });
  S.push({ name: 'Hand-off to Azure', chapter: 'Azure', key: 'az', dur: 6.5, html: arch('az'), steps: [
    { t: 0.1, cap: 'Azure trusts tokens only from the <b>production</b> environment of this repository…' },
    { t: 3.2, cap: '…and that identity can deploy to this one web app (<b>Website Contributor</b>).' }, { t: 3.0, focus: 'a2', dur: 3, pad: 4 } ] });

  /* ---- Live app ---- */
  function app(extra) {
    return K.browser({ url: 'https://contoso-order-desk-demo.azurewebsites.net', body: '<div class="app"><div class="bar"><i></i>Contoso Order Desk</div><div class="in"><div style="color:#667085;margin-bottom:8px">Look up an order by its number</div>' +
      '<div class="row"><div class="field" data-k="f"><span data-k="fv"></span></div><span class="go" data-k="go">Look up</span></div>' + (extra || '') + '</div></div>' });
  }
  S.push({ name: 'Live app', chapter: 'Live app', key: 'app', dur: 12, html: app(
    '<div class="res hid" data-k="r1"><h3>ORD-100232 <span class="badge2">Out for delivery</span></h3><div class="k">Estimated delivery</div><div class="v">3 Nov 2026</div><div class="k">Last updated</div><div class="v">3 Nov 2026, 06:40 UTC</div></div>' +
    '<div class="res err hid" data-k="r2"><h3>We couldn\'t find order ORD-999999</h3>Check the number and try again.</div>'),
    steps: [
      { t: 0.1, cap: 'The Order Desk is live. An agent looks up an order.' },
      { t: 0.6, click: 'f' }, { t: 0.9, type: 'fv', str: 'ORD-100232', cps: 14 }, { t: 2.0, click: 'go' }, { t: 2.3, show: 'r1' },
      { t: 2.5, focus: 'r1', dur: 3 },
      { t: 6.0, el: 'fv', text: '' }, { t: 6.0, hide: 'r1' }, { t: 6.1, click: 'f' }, { t: 6.4, type: 'fv', str: 'ORD-999999', cps: 14 }, { t: 7.5, click: 'go' }, { t: 7.8, show: 'r2' },
      { t: 7.9, cap: 'Unknown numbers get a clear message, exactly as the acceptance criteria asked.' }
    ] });
  S.push({ name: 'Recap', chapter: 'Recap', dur: 8, html: K.end({ title: 'Requirement to production, on one platform', points: [
    'Copilot drafted the issue; agent mode and the cloud agent built the code',
    'Copilot code review, a code owner and the ruleset decided what merged',
    'Push protection, CodeQL with Copilot Autofix and dependency review caught issues early',
    'An approved, OIDC-authenticated deployment shipped it to Azure App Service'],
    src: 'GitHub Docs and Microsoft Learn, listed on the Session 5 page' }), steps: [] });
  D.push({ id: 'live-demo', session: 5, label: 'Live demo', title: 'From business requirement to production', scenes: S });

  /* =====================================================================
     SESSION 6 · Agentic software development
     ===================================================================== */
  var LOOP = [
    ['hu', 'Human', 'Specify', 'Issue, acceptance criteria, instructions, custom agent'],
    ['ag', 'Agent', 'Research &amp; plan', 'Reads the repository and writes an implementation plan'],
    ['ag', 'Agent', 'Implement', 'Edits, runs tests and linters in a cloud environment'],
    ['ag', 'Agent', 'Self-check', 'CodeQL, secret scanning, dependency check, Copilot code review'],
    ['hu', 'Human', 'Review &amp; merge', 'Steer with comments, approve, merge, deploy']
  ];
  var GUARDS = ['Only users with write access can trigger it', 'Pushes only to its copilot/ branch', 'Draft PRs need human review', 'Workflows wait for approval', 'Firewall on by default', 'Signed commits + session logs', 'Audit log: actor:Copilot'];
  function loop(active, guardsOn) {
    var h = '<div class="lp' + (active ? ' focus' : '') + '"><h2>The agentic loop</h2><div class="sub">People specify and decide. The agent researches, plans, implements and checks its own work.</div><div class="row">';
    LOOP.forEach(function (n, i) {
      h += (i ? '<div class="ar2">→</div>' : '') + '<div class="nd ' + n[0] + (active === i + 1 ? ' on' : '') + '" data-k="n' + (i + 1) + '"><span class="tag">' + (i + 1) + ' · ' + n[1] + '</span><b>' + n[2] + '</b>' + n[3] + '</div>';
    });
    h += '</div><div class="gr"><div class="t">Guardrails built into the platform</div><div class="chips" data-k="guards">' + GUARDS.map(function (g) { return '<span' + (guardsOn ? ' class="on"' : '') + '>' + esc(g) + '</span>'; }).join('') + '</div></div><div class="prog">';
    for (var i = 1; i <= 5; i++) h += '<i class="' + (active && i < active ? 'done' : (active === i ? 'on' : '')) + '"></i>';
    return h + '</div></div>';
  }
  function loopCard(n, cap) {
    return { name: LOOP[n - 1][2].replace('&amp;', '&'), chapter: n + ' · ' + LOOP[n - 1][2].replace('&amp;', '&'), key: 'n' + n, dur: 3.4, html: loop(n), steps: [{ t: 0.15, cap: '<b>' + LOOP[n - 1][1] + '</b> · ' + cap }] };
  }
  var A = [];
  A.push(title('Session 6 · Agentic software development', 'Delegate work to an <em>agent</em>, stay in control',
    'The Copilot cloud agent researches, plans, implements and checks its own work. People specify, steer, review and merge.',
    ['Simulated walkthrough', '≈ 2.5 minutes', 'Steps from GitHub Docs']));
  A.push({ name: 'The agentic loop', chapter: 'Overview', dur: 7, html: loop(0), steps: [
    { t: 0.2, cap: 'Assistive AI suggests. <b>Agentic</b> AI takes a task and works toward the goal.' },
    { t: 3.4, cap: 'Humans at both ends, and guardrails the platform enforces.' }, { t: 3.6, focus: 'guards', dur: 3, pad: 6 } ] });

  A.push(loopCard(1, 'Specify: write the issue like a brief to a new teammate.'));
  A.push({ name: 'A good brief', dur: 11, html: K.gh({ tab: 'Issues', url: 'github.com/contoso/contoso-order-desk/issues/15', body:
    '<h1 class="gh-title">Audit log of every lookup <span class="no">#15</span></h1><div class="gh-meta"><span class="st-open">● Open</span>Sub-issue of #12 · Order Desk</div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="gh-box"><div class="hd"><span class="av">P</span><b>presenter</b> commented</div><div class="bd" data-k="brief">' +
    '<div data-k="bp"><h4 style="margin-top:0">Problem</h4>Contoso must be able to show who looked up which order, and when.</div>' +
    '<div data-k="bac"><h4>Acceptance criteria</h4><ul><li>Record order ID, agent user ID, timestamp and result for every lookup</li><li>Never log customer contact details</li><li>Keep records for 90 days</li><li>Tests cover 200, 400 and 404 lookups</li></ul></div>' +
    '<div data-k="bh"><h4>Hints</h4>Lookups are handled in <code>src/app.js</code>. Follow <code>.github/copilot-instructions.md</code>.</div></div></div></div>' +
    side([{ h: 'Copilot also reads', k: 'reads', v: '<div><code>.github/copilot-instructions.md</code></div><div><code>.github/instructions/*.instructions.md</code></div><div><code>AGENTS.md</code></div><div><code>.github/agents/*.agent.md</code></div>' }, { h: 'Labels', v: '<span class="lbl enh">enhancement</span>' }, { h: 'Projects', v: 'Order Desk · Todo' }]) + '</div>' }),
    steps: [
      { t: 0.1, cap: 'A clear problem, testable acceptance criteria and hints about which files to change.' },
      { t: 0.8, focus: 'bac', dur: 3.4 }, { t: 4.6, focus: 'bh', dur: 2.4 },
      { t: 7.2, focus: 'reads', dur: 3.4 }, { t: 7.3, cap: 'The agent also reads the repository\'s instruction files and custom agent profiles.' }
    ] });

  A.push(loopCard(2, 'Research and plan: start the task from the Agents tab, then steer it.'));
  A.push({ name: 'Start a task', dur: 12, html: K.gh({ tab: 'Agents', url: 'github.com/contoso/contoso-order-desk/agents', body:
    '<div style="max-width:900px;margin:0 auto"><div style="font-size:20px;font-weight:600;margin-bottom:10px">Start a task</div><div class="ag-box"><div class="inpt big" data-k="tbox" style="border:0;padding:0"><span data-k="tin" style="white-space:pre-wrap"></span><span class="ph" data-k="tph">Describe a task for an agent…</span></div>' +
    '<div class="ag-row"><span class="ag-sel">contoso/contoso-order-desk</span><span class="ag-sel">main</span><span class="ag-sel" data-k="agsel">Copilot ▾</span><span class="ag-sel">Auto</span><span class="gbtn pri" data-k="start" style="margin-left:auto">Start task</span></div></div>' +
    '<div class="pop hid" data-k="agpop" style="left:420px;top:210px;width:320px"><div class="it" style="border-top:0;font-weight:600">Agent</div><div class="it on" data-k="agc"><span class="av cp">C</span>Copilot</div><div class="it"><span class="av">A</span>Claude <span class="pill">Public preview</span></div><div class="it"><span class="av">O</span>Codex <span class="pill">Public preview</span></div><div class="it"><span class="av ap">T</span>test-coverage-improver <span class="pill">custom agent</span></div></div>' +
    '<div style="margin-top:16px;font-size:13px;color:#59636e">Recent sessions</div><div class="gh-box" style="margin-top:6px"><div class="chk">' + ci('ok') + 'Build the agent lookup page<span class="r">Pull request #16 · merged</span></div></div></div>' }),
    steps: [
      { t: 0.1, cap: 'The <b>Agents tab</b> starts and tracks agent tasks for the repository.' },
      { t: 0.8, click: 'agsel' }, { t: 1.0, show: 'agpop' },
      { t: 1.2, cap: 'Pick Copilot, a third-party agent <b>(public preview)</b> or one of your custom agents.' },
      { t: 3.4, click: 'agc' }, { t: 3.6, hide: 'agpop' },
      { t: 3.9, click: 'tbox' },
      { t: 4.2, ph: 'tph', type: 'tin', str: 'Research how order lookups flow through src/ and write an implementation plan for #15: record every lookup (order ID, agent user ID, timestamp, result) without logging customer contact details. Don\'t open a pull request yet.', cps: 75 },
      { t: 4.3, cap: 'Ask for research and a plan first. A task started here works on a branch before any pull request.' },
      { t: 4.4, zoom: 'tbox', s: 1.3 }, { t: 9.9, zoom: null },
      { t: 10.8, click: 'start' }
    ] });
  A.push({ name: 'Steer the session', dur: 14.5, html: K.gh({ tab: 'Agents', url: 'github.com/contoso/contoso-order-desk/agents/sessions/42', body:
    '<div class="sess"><div><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="spin" style="border-color:rgba(31,35,40,.15);border-top-color:#0969da" data-k="sp"></span><b style="font-size:16px">Plan the audit log for #15</b><span class="pill">copilot/audit-log-plan</span></div>' +
    '<div class="slog" data-k="log"><div class="it">' + ci('ok') + 'Read issue #15 and .github/copilot-instructions.md</div><div class="it">' + ci('ok') + 'Read src/app.js · found GET /api/orders/:orderId</div><div class="it">' + ci('ok') + 'Searched for places that log request data</div><div class="it">' + ci('run') + 'Drafting the implementation plan…</div></div>' +
    '<div class="m u hid" data-k="steer" style="background:#ddf4ff;color:#1f2328;margin-top:10px"><div class="who" style="color:#0969da">You · steering</div>Add a note about retention.</div>' +
    '<div class="slog hid" data-k="ack" style="margin-top:8px"><div class="it">' + ci('ok') + 'Got it — adding a retention section to the plan.</div></div>' +
    '<div class="inpt" data-k="sbox" style="margin-top:10px"><span data-k="sin"></span><span class="ph" data-k="sph">Steer the session…</span></div></div>' +
    '<div><div class="plan hid" data-k="plan"><h4>Implementation plan · #15</h4><ol data-k="pl"><li><code>src/audit.js</code>: append-only <code>recordLookup()</code>; no customer contact fields</li><li>Call it from <code>GET /api/orders/:orderId</code> for 200, 400 and 404</li><li>Agent user ID from the authenticated request</li><li data-k="ret"><b>Retention</b>: keep 90 days, configurable with <code>AUDIT_RETENTION_DAYS</code></li><li><code>test/audit.test.js</code>: one test per result</li></ol></div></div></div>' }),
    steps: [
      { t: 0.1, cap: 'The session log shows what the agent reads and does, live.' },
      { t: 0.3, lines: 'log', dur: 2.5 }, { t: 0.4, zoom: 'log', s: 1.3 }, { t: 6.0, zoom: null }, { t: 7.0, zoom: 'plan', s: 1.45 },
      { t: 3.4, click: 'sbox' }, { t: 3.7, ph: 'sph', type: 'sin', str: 'Add a note about retention.', cps: 28 },
      { t: 3.8, cap: 'Steer a running session. Each steering message uses AI credits.' },
      { t: 5.0, el: 'sin', text: '' }, { t: 5.0, show: ['steer', 'sph'] }, { t: 5.7, show: 'ack' },
      { t: 6.6, show: 'plan' }, { t: 6.6, lines: 'pl', dur: 2.6 },
      { t: 6.8, cap: 'The plan comes back for review before any code changes.' },
      { t: 9.4, focus: 'ret', dur: 3 }, { t: 9.4, el: 'sp', add: 'hid' }
    ] });

  A.push(loopCard(3, 'Implement: the agent edits, tests and commits in its own cloud environment.'));
  A.push({ name: 'Implement', dur: 11, html: K.gh({ tab: 'Agents', url: 'github.com/contoso/contoso-order-desk/agents/sessions/42', body:
    '<div style="max-width:860px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><b style="font-size:16px">Implement the audit log for #15</b><span class="pill">copilot/audit-log</span><span class="pill">Session limit: 59 min</span></div>' +
    '<div class="m u" style="background:#ddf4ff;color:#1f2328;margin-bottom:10px"><div class="who" style="color:#0969da">You</div>Looks good. Implement the plan and open a draft pull request.</div>' +
    '<div class="slog" data-k="ilog"><div class="it">' + ci('ok') + 'Ran Copilot setup steps: npm ci</div><div class="it">' + ci('ok') + 'Created src/audit.js (+31)</div><div class="it">' + ci('ok') + 'Updated src/app.js (+6 −1)</div><div class="it">' + ci('ok') + 'Added test/audit.test.js (+42)</div><div class="it">' + ci('ok') + 'Ran npm test · 12 passed</div><div class="it">' + ci('ok') + 'Committed and pushed to copilot/audit-log</div></div></div>' }),
    steps: [
      { t: 0.1, cap: 'It works in a temporary cloud environment, prepared by <b>copilot-setup-steps.yml</b>.' },
      { t: 0.4, lines: 'ilog', dur: 6 }, { t: 0.5, zoom: 'ilog', s: 1.25 },
      { t: 6.6, cap: 'One repository, one branch, one pull request per task. Sessions run for up to 59 minutes.' }
    ] });

  A.push(loopCard(4, 'Self-check: before asking for review, the agent checks its own changes.'));
  A.push({ name: 'Self-check', dur: 11.5, html: K.gh({ tab: 'Agents', url: 'github.com/contoso/contoso-order-desk/agents/sessions/42', body:
    '<div style="max-width:860px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><b style="font-size:16px">Validation before review</b><span class="pill">copilot/audit-log</span></div>' +
    '<div class="slog" data-k="vlog"><div class="it">' + ci('ok') + '<div><b>CodeQL</b> · no new security alerts in the changed code</div></div><div class="it">' + ci('ok') + '<div><b>Secret scanning</b> · no secrets found</div></div><div class="it">' + ci('ok') + '<div><b>Dependency check</b> · new dependencies checked against the GitHub Advisory Database (none added)</div></div><div class="it">' + ci('ok') + '<div><b>Copilot code review</b> · 1 suggestion, applied: store timestamps in UTC</div></div><div class="it">' + ci('ok') + '<div>Opened draft pull request <b>#20 Add audit log of every lookup</b> and requested review from <b>presenter</b></div></div></div>' +
    '<div class="banner blue" style="margin-top:12px" data-k="fw">Internet access from the agent\'s environment goes through a firewall that is on by default.</div></div>' }),
    steps: [
      { t: 0.1, cap: 'By default it runs <b>CodeQL</b>, <b>secret scanning</b> and a <b>dependency check</b> on its own code…' },
      { t: 0.4, lines: 'vlog', dur: 5 }, { t: 0.5, zoom: 'vlog', s: 1.2 }, { t: 7.0, zoom: null },
      { t: 3.6, cap: '…and gets a <b>Copilot code review</b>, then fixes what it finds. No GHAS licence needed for these checks.' },
      { t: 7.4, focus: 'fw', dur: 3.6 }, { t: 7.5, cap: 'Hidden characters are filtered from its input, and its internet access is restricted.' }
    ] });

  A.push(loopCard(5, 'Review and merge: people stay in charge of what ships.'));
  A.push({ name: 'Review the agent\'s PR', dur: 15, html: K.gh({ tab: 'Pull requests', url: 'github.com/contoso/contoso-order-desk/pull/20', body:
    '<h1 class="gh-title">Add audit log of every lookup <span class="no">#20</span></h1><div class="gh-meta"><span class="st-draft" data-k="prs">⇄ Draft</span><b>Copilot</b> wants to merge 2 commits into <code>main</code> from <code>copilot/audit-log</code></div>' +
    '<div class="banner" data-k="wfb">Workflows are waiting for approval from a user with write access<span class="gbtn" data-k="arw" style="margin-left:auto">Approve and run workflows</span></div>' +
    '<div class="gh-cols"><div class="gh-main"><div class="cmt"><div class="hd"><span class="av cp">C</span><b>Copilot</b> · Fixes #15</div><div class="bd">Adds <code>recordLookup()</code> for every order lookup (200, 400, 404). No customer contact fields are logged. Retention: 90 days. <span class="ver">Verified</span> · co-authored by presenter · <span style="color:#0969da">View session</span></div></div>' +
    '<div class="cmt hid" data-k="mc"><div class="hd"><span class="av">P</span><b>presenter</b> commented</div><div class="bd" data-k="mct"></div></div>' +
    tl('tlc', '<span class="av cp">C</span><b>Copilot</b> pushed 1 commit · <code>Use ISO 8601 UTC timestamps in audit records</code> <span class="ver">Verified</span>') +
    tl('tlr', '<span class="av">P</span><b>presenter</b> marked this pull request as ready for review') +
    tl('tla', '<span class="av ap">A</span><b>approver</b> approved these changes') +
    '<div class="inpt" data-k="cbox" style="margin-top:8px"><span data-k="cin"></span><span class="ph" data-k="cph">Add a comment</span></div></div>' +
    side([{ h: 'Reviewers', v: '<div><span class="av ap">A</span> approver</div>' }, { h: 'Checks', k: 'ck', v: '<span data-k="ckv">' + ci('wait') + ' Waiting for approval</span>' }]) + '</div>' }),
    steps: [
      { t: 0.1, cap: 'Actions workflows on the agent\'s pull request wait until a person approves them.' },
      { t: 1.0, click: 'arw' }, { t: 1.3, hide: 'wfb' }, { t: 1.6, el: 'ckv', html: ci('ok') + ' 4 checks passed' },
      { t: 2.6, click: 'cbox' }, { t: 2.9, ph: 'cph', type: 'cin', str: '@copilot Use ISO 8601 UTC timestamps in the audit records.', cps: 40 },
      { t: 3.0, cap: 'Iterate by mentioning <b>@copilot</b>: it pushes new commits to the same branch.' },
      { t: 4.9, el: 'mct', text: '@copilot Use ISO 8601 UTC timestamps in the audit records.' }, { t: 4.9, show: ['mc', 'cph'] }, { t: 4.9, el: 'cin', text: '' },
      { t: 6.3, show: 'tlc' },
      { t: 7.6, show: 'tlr' }, { t: 7.7, cap: 'Copilot can\'t mark it ready, approve or merge. A person does.' }, { t: 7.7, el: 'prs', html: '⇄ Open' }, { t: 7.7, el: 'prs', rm: 'st-draft' }, { t: 7.7, el: 'prs', add: 'st-open' },
      { t: 9.6, show: 'tla' }, { t: 9.7, cap: 'And the person who asked for the work can\'t approve it: a second person does.' },
      { t: 10.0, focus: 'tla', dur: 3.5 }
    ] });
  A.push({ name: 'Audit trail', chapter: 'Governance', dur: 10, html: K.gh({ head: '<div class="gh-head" style="padding-bottom:10px"><div class="gh-top"><span class="gh-logo"></span><b>Contoso</b> enterprise · Audit log</div></div>', url: 'github.com/enterprises/contoso/audit-log', body:
    '<div class="inpt" style="margin-bottom:12px"><span data-k="aq"></span></div>' +
    '<div class="audit hid" data-k="arows"><div class="r"><span>When</span><span>Event (simplified)</span><span>Agent fields</span></div>' +
    '<div class="r"><span>Today 15:52</span><span>Pull request #20 opened in contoso-order-desk</span><span><code>actor_is_agent: true</code></span></div>' +
    '<div class="r"><span>Today 15:49</span><span>Commits pushed to copilot/audit-log</span><span><code>agent_session_id: 42</code></span></div>' +
    '<div class="r"><span>Today 15:31</span><span>Agent session started from the Agents tab</span><span><code>user: presenter</code></span></div></div>' +
    '<div style="margin-top:12px;font-size:13px;color:#59636e">Audit events are kept for 180 days. Stream them to your SIEM for longer retention.</div>' }),
    steps: [
      { t: 0.1, cap: 'Agent activity lands in the enterprise <b>audit log</b>. Filter it with <b>actor:Copilot</b>.' },
      { t: 0.6, type: 'aq', str: 'actor:Copilot repo:contoso/contoso-order-desk', cps: 30 },
      { t: 2.4, show: 'arows' }, { t: 2.4, lines: 'arows', dur: 1.8 },
      { t: 4.6, cap: 'Fields like <b>actor_is_agent</b> and <b>agent_session_id</b> tie every action to a session and a person.' }
    ] });
  A.push({ name: 'Recap', chapter: 'Recap', dur: 8, html: K.end({ title: 'Delegate the work, keep the decisions', points: [
    'The Agents tab starts, steers and tracks agent tasks',
    'Plan first, then implement on a copilot/ branch in a cloud environment',
    'Self-checks, then human review: the agent can\'t approve or merge',
    'Policies, firewall, budgets and the audit log keep agents governed'],
    src: 'Copilot cloud agent, Risks and mitigations, Agent management, Audit log events for agents' }), steps: [] });
  D.push({ id: 'agentic', session: 6, label: 'Session 6', title: 'Delegate work to an agent, stay in control', scenes: A });
})();
