/* main.js - shared behaviour used on every page:
   theme toggle, scroll-reveal animation, accordion, image lightbox,
   the watchlist ("My Orbit") and ratings stores, rankings, and the reusable
   poster / card / chart-row builders used by the catalogue and title pages. */
(function () {
  'use strict';
  window.AniOrbit = window.AniOrbit || {};
  var A = window.AniOrbit;

  /* Pages inside /titles/ set data-root="../" on <html> so paths still work */
  A.root = document.documentElement.getAttribute('data-root') || '';
  A.titleUrl = function (id) { return A.root + 'titles/' + id + '.html'; };

  /* ---------- Small helpers ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text !== undefined) { n.textContent = text; }   // textContent keeps injected text safe
    return n;
  }
  A.el = el;
  A.fmtVotes = function (n) { return n >= 1000 ? (n / 1000).toFixed(1) + 'K' : String(n); };

  /* Listen for an event, and stop listening once the element has left the page */
  function watch(evt, node, fn) {
    function handler() {
      if (!node.isConnected) { document.removeEventListener(evt, handler); return; }
      fn();
    }
    document.addEventListener(evt, handler);
  }

  /* ---------- Stores (saved in the visitor's own browser) ---------- */
  function read(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked */ }
  }

  A.watchlist = {
    get: function () { return read('aniorbit.watchlist', []); },
    has: function (id) { return A.watchlist.get().indexOf(id) !== -1; },
    toggle: function (id) {
      var list = A.watchlist.get(), i = list.indexOf(id);
      if (i === -1) { list.push(id); } else { list.splice(i, 1); }
      write('aniorbit.watchlist', list);
      document.dispatchEvent(new CustomEvent('aniorbit:watchlist'));
      return i === -1;
    }
  };

  A.ratings = {
    all: function () { return read('aniorbit.ratings', {}); },
    get: function (id) { return A.ratings.all()[id] || 0; },
    set: function (id, n) {
      var all = A.ratings.all();
      if (n) { all[id] = n; } else { delete all[id]; }
      write('aniorbit.ratings', all);
      document.dispatchEvent(new CustomEvent('aniorbit:ratings'));
    }
  };

  /* ---------- Rankings (global, like a "Top rated" chart) ---------- */
  if (A.anime) {
    A.ranked = A.anime.slice().sort(function (x, y) { return y.score - x.score || y.votes - x.votes; });
    A.rank = function (id) {
      for (var i = 0; i < A.ranked.length; i++) { if (A.ranked[i].id === id) { return i + 1; } }
      return 0;
    };
    A.byId = function (id) {
      for (var i = 0; i < A.anime.length; i++) { if (A.anime[i].id === id) { return A.anime[i]; } }
      return null;
    };
  }

  /* ---------- Theme toggle ---------- */
  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) { return; }
    function paint() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.textContent = dark ? '\u2600' : '\u263E';
      btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('aniorbit.theme', next); } catch (e) { /* ignore */ }
      paint();
    });
    paint();
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll('main .section .container > *');
    if (!('IntersectionObserver' in window)) { return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    items.forEach(function (n) { n.classList.add('reveal'); io.observe(n); });
  }

  /* ---------- Accordion ---------- */
  function initAccordion() {
    document.querySelectorAll('.accordion').forEach(function (acc) {
      var triggers = acc.querySelectorAll('.accordion-trigger');
      triggers.forEach(function (t) {
        t.addEventListener('click', function () {
          var open = t.getAttribute('aria-expanded') === 'true';
          triggers.forEach(function (o) {
            o.setAttribute('aria-expanded', 'false');
            document.getElementById(o.getAttribute('aria-controls')).hidden = true;
          });
          if (!open) {
            t.setAttribute('aria-expanded', 'true');
            document.getElementById(t.getAttribute('aria-controls')).hidden = false;
          }
        });
      });
    });
  }

  /* ---------- Lightbox for images marked data-lightbox ---------- */
  function initLightbox() {
    var imgs = Array.prototype.slice.call(document.querySelectorAll('img[data-lightbox]'));
    if (!imgs.length) { return; }
    var dlg = document.createElement('dialog');
    dlg.setAttribute('aria-label', 'Image viewer');
    dlg.innerHTML = '<figure class="lightbox-box"><button class="close-btn" aria-label="Close image">\u2715</button>' +
      '<button class="lightbox-nav prev" aria-label="Previous image">\u2039</button>' +
      '<img alt=""><figcaption></figcaption>' +
      '<button class="lightbox-nav next" aria-label="Next image">\u203A</button></figure>';
    document.body.appendChild(dlg);
    var big = dlg.querySelector('img'), cap = dlg.querySelector('figcaption'), index = 0;
    function show(i) {
      index = (i + imgs.length) % imgs.length;
      big.src = imgs[index].currentSrc || imgs[index].src;
      big.alt = imgs[index].alt;
      cap.textContent = imgs[index].alt + '  (' + (index + 1) + ' of ' + imgs.length + ')';
    }
    imgs.forEach(function (img, i) {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.addEventListener('click', function () { show(i); dlg.showModal(); });
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter') { show(i); dlg.showModal(); } });
    });
    dlg.querySelector('.close-btn').addEventListener('click', function () { dlg.close(); });
    dlg.querySelector('.prev').addEventListener('click', function () { show(index - 1); });
    dlg.querySelector('.next').addEventListener('click', function () { show(index + 1); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) { dlg.close(); } });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(index - 1); }
      if (e.key === 'ArrowRight') { show(index + 1); }
    });
  }

  /* ---------- Rating dialog (1 to 10 stars, saved locally) ---------- */
  var rateDlg;
  A.openRate = function (a) {
    if (!rateDlg) {
      rateDlg = document.createElement('dialog');
      rateDlg.setAttribute('aria-labelledby', 'rate-title');
      document.body.appendChild(rateDlg);
      rateDlg.addEventListener('click', function (e) { if (e.target === rateDlg) { rateDlg.close(); } });
    }
    rateDlg.innerHTML = '';
    var box = el('div', 'modal-box rate-box');
    var close = el('button', 'close-btn', '\u2715');
    close.setAttribute('aria-label', 'Close rating');
    close.addEventListener('click', function () { rateDlg.close(); });
    var head = el('div', 'modal-head');
    head.style.setProperty('--h', a.hue);
    var h = el('h2', null, 'Rate ' + a.title); h.id = 'rate-title';
    head.appendChild(h);
    head.appendChild(el('p', null, 'Tap a star to rate from 1 to 10.'));
    var stars = el('div', 'star-row'), label = el('p', 'star-label');
    stars.setAttribute('role', 'group'); stars.setAttribute('aria-label', 'Rating from 1 to 10');
    var current = A.ratings.get(a.id);
    function paint(n) {
      Array.prototype.forEach.call(stars.children, function (s, i) { s.classList.toggle('on', i < n); });
      label.textContent = n ? 'Your rating: ' + n + ' / 10' : 'Not rated yet';
    }
    for (var i = 1; i <= 10; i++) {
      (function (n) {
        var s = el('button', 'star', '\u2605');
        s.type = 'button';
        s.setAttribute('aria-label', n + ' out of 10');
        s.addEventListener('mouseenter', function () { paint(n); });
        s.addEventListener('focus', function () { paint(n); });
        s.addEventListener('click', function () { A.ratings.set(a.id, n); rateDlg.close(); });
        stars.appendChild(s);
      })(i);
    }
    stars.addEventListener('mouseleave', function () { paint(A.ratings.get(a.id)); });
    var actions = el('div', 'modal-actions');
    if (current) {
      var rm = el('button', 'btn btn-outline', 'Remove my rating');
      rm.type = 'button';
      rm.addEventListener('click', function () { A.ratings.set(a.id, 0); rateDlg.close(); });
      actions.appendChild(rm);
    }
    var body = el('div', 'modal-content'); body.appendChild(stars); body.appendChild(label);
    box.appendChild(close); box.appendChild(head); box.appendChild(body); box.appendChild(actions);
    rateDlg.appendChild(box);
    paint(current);
    rateDlg.showModal();
  };

  /* ---------- Reusable pieces ---------- */
  /* Poster <img> with a 300 px copy for small screens (srcset + sizes) when one exists */
  A.posterImg = function (a, alt, lazy) {
    var img = el('img');
    var base = A.root + 'images/posters/' + a.poster.replace('.webp', '');
    img.src = base + '.webp';
    if (a.posterW) {
      img.srcset = base + '-300.webp 300w, ' + base + '.webp ' + a.posterW + 'w';
      img.sizes = '(max-width: 760px) 150px, 200px';
    }
    img.alt = alt || '';
    if (lazy) { img.loading = 'lazy'; }
    return img;
  };

  A.poster = function (a, tag) {
    var p = el(tag || 'div', 'poster');
    p.style.setProperty('--h', a.hue);
    if (tag === 'a') {
      p.href = A.titleUrl(a.id);
      p.setAttribute('aria-hidden', 'true');   // the title link next to the poster already names this card
      p.tabIndex = -1;
    }
    if (a.poster) { p.appendChild(A.posterImg(a, '', true)); }
    p.appendChild(el('span', 'poster-year', String(a.year)));
    p.appendChild(el('span', 'poster-title', a.title));
    return p;
  };

  function bookmark(a, inline) {
    var b = el('button', 'heart-btn' + (inline ? ' inline' : ''), '\u2665');
    b.type = 'button';
    function paint() {
      var on = A.watchlist.has(a.id);
      b.setAttribute('aria-pressed', on);
      b.setAttribute('aria-label', (on ? 'Remove ' : 'Add ') + a.title + (on ? ' from' : ' to') + ' My Orbit');
    }
    b.addEventListener('click', function () { A.watchlist.toggle(a.id); });
    watch('aniorbit:watchlist', b, paint);
    paint();
    return b;
  }
  A.bookmark = bookmark;

  function rateButton(a) {
    var b = el('button', 'rate-btn');
    b.type = 'button';
    function paint() {
      var r = A.ratings.get(a.id);
      b.textContent = r ? '\u2605 ' + r + '/10' : '\u2606 Rate';
      b.classList.toggle('rated', !!r);
      b.setAttribute('aria-label', r ? 'Your rating for ' + a.title + ' is ' + r + ' out of 10. Change it.' : 'Rate ' + a.title);
    }
    b.addEventListener('click', function () { A.openRate(a); });
    watch('aniorbit:ratings', b, paint);
    paint();
    return b;
  }
  A.rateButton = rateButton;

  /* Poster card: used for rails, grid view, mood picks and "more like this" */
  A.createCard = function (a, opts) {
    opts = opts || {};
    var card = el('article', 'anime-card');
    card.appendChild(A.poster(a, 'a'));
    card.appendChild(el('span', 'score-badge', '\u2605 ' + a.score.toFixed(1)));
    if (opts.rank) { card.appendChild(el('span', 'rank-badge', String(opts.rank))); }
    card.appendChild(bookmark(a));
    var body = el('div', 'anime-body');
    var t = el('a', 'anime-title', a.title); t.href = A.titleUrl(a.id);
    body.appendChild(t);
    body.appendChild(el('p', 'anime-meta', a.year + '  \u2022  ' + a.type));
    if (opts.blurb) { body.appendChild(el('p', 'anime-blurb', a.blurb)); }
    body.appendChild(rateButton(a));
    card.appendChild(body);
    return card;
  };

  /* Chart row: used for the list view (similar to an IMDb "Top rated" chart) */
  A.createRow = function (a) {
    var row = el('article', 'chart-row');
    row.appendChild(el('span', 'row-rank', '#' + A.rank(a.id)));
    row.appendChild(A.poster(a, 'a'));
    var body = el('div', 'row-body');
    var h = el('h3'); var link = el('a', null, a.title); link.href = A.titleUrl(a.id); h.appendChild(link);
    body.appendChild(h);
    body.appendChild(el('p', 'anime-meta', a.year + '  \u2022  ' + a.type + '  \u2022  ' + a.episodes + '  \u2022  ' + a.studio));
    body.appendChild(el('p', 'row-blurb', a.blurb));
    var tags = el('div', 'tag-row');
    a.genres.forEach(function (g) { tags.appendChild(el('span', 'tag', g)); });
    body.appendChild(tags);
    var side = el('div', 'row-side');
    var score = el('p', 'row-score'); score.appendChild(el('span', 'star-icon', '\u2605'));
    score.appendChild(document.createTextNode(' ' + a.score.toFixed(1)));
    score.appendChild(el('small', null, A.fmtVotes(a.votes) + ' ratings'));
    side.appendChild(score);
    side.appendChild(rateButton(a));
    side.appendChild(bookmark(a, true));
    row.appendChild(body); row.appendChild(side);
    return row;
  };

  document.addEventListener('DOMContentLoaded', function () {
    initTheme(); initReveal(); initAccordion(); initLightbox();
  });
})();
