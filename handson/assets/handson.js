
/* Hands-on guide: full video chapters, links into the full video, screenshot lightbox. */
(function () {
  'use strict';
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  var hv = $('#hv-video');
  function watch(t) {
    if (location.hash !== '#start' && location.hash !== '') location.hash = '#start';
    setTimeout(function () {
      var box = $('#watch'); if (box) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (!hv) return;
      function go() { try { hv.currentTime = t; } catch (e) {} hv.play().catch(function () {}); }
      if (hv.readyState >= 1) go(); else hv.addEventListener('loadedmetadata', function once() { hv.removeEventListener('loadedmetadata', once); go(); });
    }, 60);
  }
  document.addEventListener('click', function (e) {
    var w = e.target.closest && e.target.closest('[data-watch]');
    if (w) { e.preventDefault(); var v = document.querySelector('.lg-vslot video'); if (v) v.pause(); watch(parseFloat(w.getAttribute('data-watch')) || 0); return; }
    var c = e.target.closest && e.target.closest('[data-hv]');
    if (c && hv) { e.preventDefault(); hv.currentTime = parseFloat(c.getAttribute('data-hv')) || 0; hv.play().catch(function () {}); }
  });
  if (hv) {
    hv.addEventListener('timeupdate', function () {
      var t = hv.currentTime, on = null;
      $$('#hv-ch li').forEach(function (li) { if (+li.getAttribute('data-t') <= t + 0.05) on = li; });
      $$('#hv-ch li').forEach(function (li) { li.classList.toggle('on', li === on); });
    });
    window.addEventListener('hashchange', function () { if (location.hash && location.hash !== '#start') hv.pause(); });
  }
  // ------------------------------------------------------------------ lightbox
  var lb = $('.lg-lb'), img = lb && $('img', lb), cap = lb && $('figcaption', lb), set = [], idx = 0;
  function show(i) {
    idx = (i + set.length) % set.length;
    var a = set[idx], im = $('img', a), fc = a.closest('figure').querySelector('figcaption');
    img.src = a.getAttribute('href'); img.alt = im ? im.alt : '';
    cap.textContent = (idx + 1) + ' / ' + set.length + ' · ' + (fc ? fc.textContent.replace(/^\d+/, '') : '');
  }
  function open(a) { set = $$('a[data-lb="' + a.getAttribute('data-lb') + '"]'); lb.hidden = false; show(set.indexOf(a)); }
  function close() { lb.hidden = true; img.removeAttribute('src'); }
  if (lb) {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[data-lb]');
      if (a && !e.ctrlKey && !e.metaKey && !e.shiftKey) { e.preventDefault(); open(a); return; }
      var b = e.target.closest && e.target.closest('[data-lb-a]');
      if (b) { var k = b.getAttribute('data-lb-a'); if (k === 'close') close(); else if (k === 'prev') show(idx - 1); else show(idx + 1); return; }
      if (!lb.hidden && e.target === lb) close();
    });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') { close(); e.stopPropagation(); }
      else if (e.key === 'ArrowRight') { show(idx + 1); e.stopPropagation(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { show(idx - 1); e.stopPropagation(); e.preventDefault(); }
    }, true);
  }
})();
