/* catalogue.js - anime.html: an IMDb-style chart.
   Top 10 rail, genre tiles, advanced filters (genre, type, minimum score,
   year range), sorting, list/grid views, and tabs for My Orbit and My ratings. */
(function () {
  'use strict';
  var A = window.AniOrbit;
  var results = document.getElementById('catalogue-grid');
  if (!A || !results) { return; }
  var $ = function (id) { return document.getElementById(id); };

  var state = { q: '', genre: 'All', type: 'All', min: 0, from: 0, to: 9999, sort: 'rank', view: 'list' };
  var chips = document.querySelectorAll('.chip[data-genre]');
  var tabs = document.querySelectorAll('.tab');
  var panels = { all: $('panel-all'), mine: $('panel-mine'), rated: $('panel-rated') };

  var sorters = {
    rank: function (a, b) { return A.rank(a.id) - A.rank(b.id); },
    popular: function (a, b) { return b.votes - a.votes; },
    newest: function (a, b) { return b.year - a.year; },
    oldest: function (a, b) { return a.year - b.year; },
    title: function (a, b) { return a.title.localeCompare(b.title); }
  };

  function matches(a) {
    var q = state.q.trim().toLowerCase();
    var hay = (a.title + ' ' + a.studio + ' ' + a.genres.join(' ') + ' ' + a.year + ' ' + a.blurb + ' ' +
      a.characters.map(function (c) { return c.name; }).join(' ')).toLowerCase();
    return (state.genre === 'All' || a.genres.indexOf(state.genre) !== -1) &&
      (state.type === 'All' || a.type === state.type) &&
      a.score >= state.min && a.year >= state.from && a.year <= state.to &&
      (!q || hay.indexOf(q) !== -1);
  }

  function emptyMsg(target, msg) { target.appendChild(A.el('p', 'empty-state', msg)); }

  /* ---------- Main results ---------- */
  function render() {
    var list = A.anime.filter(matches).sort(sorters[state.sort]);
    results.innerHTML = '';
    results.className = state.view === 'list' ? 'chart-list' : 'anime-grid';
    list.forEach(function (a) {
      results.appendChild(state.view === 'list' ? A.createRow(a) : A.createCard(a, { rank: A.rank(a.id) }));
    });
    if (!list.length) { emptyMsg(results, 'No anime matched those filters. Try a different word or press Clear filters.'); }
    var bits = [];
    if (state.genre !== 'All') { bits.push('in ' + state.genre); }
    if (state.type !== 'All') { bits.push('as ' + state.type.toLowerCase()); }
    if (state.min) { bits.push('scoring ' + state.min + '+'); }
    if (state.q.trim()) { bits.push('matching \u201C' + state.q.trim() + '\u201D'); }
    $('results-count').textContent = 'Showing ' + list.length + ' of ' + A.anime.length + ' titles' +
      (bits.length ? ' ' + bits.join(', ') : '') + '.';
  }

  /* ---------- Top 10 rail ---------- */
  function renderRail(mode) {
    var rail = $('top-rail');
    var list = (mode === 'popular' ? A.anime.slice().sort(sorters.popular) : A.ranked).slice(0, 10);
    rail.innerHTML = '';
    list.forEach(function (a, i) { rail.appendChild(A.createCard(a, { rank: i + 1 })); });
    document.querySelectorAll('[data-rail]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-rail') === mode);
    });
  }
  document.querySelectorAll('[data-rail]').forEach(function (b) {
    b.addEventListener('click', function () { renderRail(b.getAttribute('data-rail')); });
  });

  /* ---------- Genre (chips and tiles share one setter) ---------- */
  function setGenre(g) {
    state.genre = g;
    chips.forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-genre') === g); });
    render();
  }
  chips.forEach(function (c) { c.addEventListener('click', function () { setGenre(c.getAttribute('data-genre')); }); });

  var tileBox = $('genre-tiles');
  tileBox.querySelectorAll('[data-genre]').forEach(function (t) {
    var g = t.getAttribute('data-genre');
    var n = A.anime.filter(function (a) { return a.genres.indexOf(g) !== -1; }).length;
    t.querySelector('small').textContent = n + (n === 1 ? ' title' : ' titles');
    t.addEventListener('click', function (e) {
      e.preventDefault();
      setGenre(g);
      $('catalogue').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- Other filters ---------- */
  $('catalogue-search').addEventListener('input', function (e) { state.q = e.target.value; render(); });
  $('filter-type').addEventListener('change', function (e) { state.type = e.target.value; render(); });
  $('filter-min').addEventListener('change', function (e) { state.min = parseFloat(e.target.value) || 0; render(); });
  $('filter-from').addEventListener('input', function (e) { state.from = parseInt(e.target.value, 10) || 0; render(); });
  $('filter-to').addEventListener('input', function (e) { state.to = parseInt(e.target.value, 10) || 9999; render(); });
  $('catalogue-sort').addEventListener('change', function (e) { state.sort = e.target.value; render(); });
  $('clear-filters').addEventListener('click', function () {
    state = { q: '', genre: 'All', type: 'All', min: 0, from: 0, to: 9999, sort: 'rank', view: state.view };
    ['catalogue-search', 'filter-from', 'filter-to'].forEach(function (id) { $(id).value = ''; });
    $('filter-type').value = 'All'; $('filter-min').value = '0'; $('catalogue-sort').value = 'rank';
    setGenre('All');
  });

  document.querySelectorAll('[data-view]').forEach(function (b) {
    b.addEventListener('click', function () {
      state.view = b.getAttribute('data-view');
      document.querySelectorAll('[data-view]').forEach(function (o) { o.setAttribute('aria-pressed', o === b); });
      render();
    });
  });

  /* ---------- Tabs: All / My Orbit / My ratings ---------- */
  function renderMine() {
    var saved = A.watchlist.get(), grid = $('mine-grid');
    grid.innerHTML = '';
    A.ranked.filter(function (a) { return saved.indexOf(a.id) !== -1; })
      .forEach(function (a) { grid.appendChild(A.createRow(a)); });
    if (!grid.children.length) { emptyMsg(grid, 'Your orbit is empty. Tap the heart on any anime to save it here.'); }
    $('tab-mine').textContent = 'My Orbit (' + saved.length + ')';
  }
  function renderRated() {
    var all = A.ratings.all(), grid = $('rated-grid');
    grid.innerHTML = '';
    A.anime.filter(function (a) { return all[a.id]; })
      .sort(function (x, y) { return all[y.id] - all[x.id]; })
      .forEach(function (a) { grid.appendChild(A.createRow(a)); });
    if (!grid.children.length) { emptyMsg(grid, 'You have not rated anything yet. Press Rate on any title to start.'); }
    $('tab-rated').textContent = 'My ratings (' + Object.keys(all).length + ')';
  }
  function selectTab(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      panels[t.getAttribute('data-panel')].hidden = !on;
    });
    renderMine(); renderRated();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { selectTab(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n !== null) { var next = tabs[(n + tabs.length) % tabs.length]; next.focus(); selectTab(next); }
    });
  });
  document.addEventListener('aniorbit:watchlist', renderMine);
  document.addEventListener('aniorbit:ratings', renderRated);

  /* ---------- Start: read ?genre= and ?q= from the address ---------- */
  var params = new URLSearchParams(window.location.search);
  if (params.get('q')) { state.q = params.get('q'); $('catalogue-search').value = state.q; }
  renderRail('rated');
  renderMine(); renderRated();
  setGenre(params.get('genre') || 'All');
})();
