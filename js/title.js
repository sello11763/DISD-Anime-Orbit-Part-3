/* title.js - behaviour for each page in /titles/: poster artwork, My Orbit
   button, rating button and the "More like this" row. */
(function () {
  'use strict';
  var A = window.AniOrbit;
  var id = document.body.getAttribute('data-title');
  var a = A && A.byId ? A.byId(id) : null;
  if (!a) { return; }

  var poster = document.getElementById('title-poster');
  if (a.poster && poster) {
    var img = A.posterImg(a, a.title + ' poster', false);
    img.sizes = '(max-width: 760px) 200px, 270px';
    poster.insertBefore(img, poster.firstChild);
  }

  var watch = document.getElementById('btn-watch');
  function paintWatch() {
    watch.textContent = A.watchlist.has(a.id) ? '\u2713 In My Orbit' : '+ Add to My Orbit';
    watch.setAttribute('aria-pressed', A.watchlist.has(a.id));
  }
  watch.addEventListener('click', function () { A.watchlist.toggle(a.id); });
  document.addEventListener('aniorbit:watchlist', paintWatch);
  paintWatch();

  var rate = document.getElementById('btn-rate');
  function paintRate() {
    var r = A.ratings.get(a.id);
    rate.textContent = r ? '\u2605 Your rating: ' + r + '/10' : '\u2606 Rate this';
  }
  rate.addEventListener('click', function () { A.openRate(a); });
  document.addEventListener('aniorbit:ratings', paintRate);
  paintRate();

  /* More like this: shared genres count double, shared moods count once */
  var similar = A.anime.filter(function (o) { return o.id !== a.id; }).map(function (o) {
    var g = o.genres.filter(function (x) { return a.genres.indexOf(x) !== -1; }).length;
    var m = o.moods.filter(function (x) { return a.moods.indexOf(x) !== -1; }).length;
    return { item: o, s: g * 2 + m };
  }).sort(function (x, y) { return y.s - x.s || y.item.score - x.item.score; }).slice(0, 6);
  var rail = document.getElementById('similar-rail');
  similar.forEach(function (x) { rail.appendChild(A.createCard(x.item)); });
})();
