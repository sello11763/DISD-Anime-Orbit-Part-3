/* slideshow.js - homepage hero poster slideshow.
   The centre poster is the active slide with the previous and next posters
   peeking in at the sides. Features: previous/next buttons, dots, keyboard
   arrows, swipe, autoplay that pauses on hover/focus and has a pause button,
   and no autoplay for visitors who prefer reduced motion. */
(function () {
  'use strict';
  var root = document.querySelector('.slideshow');
  if (!root) { return; }

  var slides = Array.prototype.slice.call(root.querySelectorAll('.slide'));
  var track = root.querySelector('.slides');
  var n = slides.length, current = 0, timer = null, userPaused = false, hovering = false;
  var DELAY = 4500;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) { userPaused = true; }   // never start moving on its own

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) { e.className = cls; }
    if (text !== undefined) { e.textContent = text; }
    return e;
  }

  /* ---------- Build controls and caption ---------- */
  var caption = el('p', 'slide-caption');
  var capTitle = el('strong'), capMeta = el('span'), capLink = el('a', 'slide-link', 'View details');
  caption.appendChild(capTitle); caption.appendChild(capMeta); caption.appendChild(capLink);

  var controls = el('div', 'slide-controls');
  var prev = el('button', 'slide-btn', '\u2039'); prev.type = 'button'; prev.setAttribute('aria-label', 'Previous poster');
  var next = el('button', 'slide-btn', '\u203A'); next.type = 'button'; next.setAttribute('aria-label', 'Next poster');
  var dotsBox = el('div', 'slide-dots');
  var dots = slides.map(function (s, i) {
    var d = el('button', 'slide-dot'); d.type = 'button';
    d.setAttribute('aria-label', 'Show poster ' + (i + 1) + ': ' + s.getAttribute('data-title'));
    d.addEventListener('click', function () { go(i); });
    dotsBox.appendChild(d);
    return d;
  });
  var toggle = el('button', 'slide-btn slide-toggle'); toggle.type = 'button';
  controls.appendChild(prev); controls.appendChild(dotsBox); controls.appendChild(next); controls.appendChild(toggle);
  root.appendChild(caption); root.appendChild(controls);

  /* ---------- Show one slide (others position themselves around it) ---------- */
  function render() {
    slides.forEach(function (s, i) {
      var d = ((i - current + n + Math.floor(n / 2)) % n) - Math.floor(n / 2);   // shortest circular distance
      var abs = Math.min(Math.abs(d), 2);
      s.style.setProperty('--o', Math.max(-2, Math.min(2, d)));
      s.style.setProperty('--abs', abs);
      var active = d === 0;
      s.classList.toggle('is-active', active);
      s.classList.toggle('is-far', abs === 2);   // too far from the centre to be clicked
      s.setAttribute('aria-hidden', active ? 'false' : 'true');
      s.querySelector('a').tabIndex = active ? 0 : -1;
    });
    dots.forEach(function (d, i) { d.setAttribute('aria-current', i === current ? 'true' : 'false'); });
    var s = slides[current];
    capTitle.textContent = s.getAttribute('data-title');
    capMeta.textContent = s.getAttribute('data-meta');
    capLink.href = s.querySelector('a').getAttribute('href');
    capLink.setAttribute('aria-label', 'View details for ' + s.getAttribute('data-title'));
  }

  function go(i) { current = (i + n) % n; render(); restart(); }

  /* ---------- Autoplay (always pausable) ---------- */
  function playing() { return !userPaused && !hovering && !document.hidden; }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function start() {
    stop();
    if (playing()) { timer = setInterval(function () { current = (current + 1) % n; render(); }, DELAY); }
    var paused = userPaused;
    toggle.textContent = paused ? '\u25B6' : '\u275A\u275A';
    toggle.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    caption.setAttribute('aria-live', paused ? 'polite' : 'off');   // only announce changes the visitor causes
  }
  function restart() { start(); }

  toggle.addEventListener('click', function () { userPaused = !userPaused; start(); });
  prev.addEventListener('click', function () { go(current - 1); });
  next.addEventListener('click', function () { go(current + 1); });
  root.addEventListener('mouseenter', function () { hovering = true; start(); });
  root.addEventListener('mouseleave', function () { hovering = false; start(); });
  root.addEventListener('focusin', function () { hovering = true; start(); });
  root.addEventListener('focusout', function () { hovering = false; start(); });
  document.addEventListener('visibilitychange', start);

  /* Clicking a side poster brings it to the centre; the centre poster opens its page */
  slides.forEach(function (s, i) {
    s.querySelector('a').addEventListener('click', function (e) {
      if (!s.classList.contains('is-active')) { e.preventDefault(); go(i); }
    });
  });

  root.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { go(current - 1); }
    if (e.key === 'ArrowRight') { go(current + 1); }
  });

  /* Swipe on touch screens */
  var startX = null;
  track.addEventListener('pointerdown', function (e) { startX = e.clientX; });
  track.addEventListener('pointerup', function (e) {
    if (startX === null) { return; }
    var dx = e.clientX - startX; startX = null;
    if (Math.abs(dx) > 40) { go(current + (dx < 0 ? 1 : -1)); }
  });

  render(); start();
})();
