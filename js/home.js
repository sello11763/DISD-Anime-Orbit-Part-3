/* home.js — homepage only: the "Mood Orbit" recommender and featured picks.
   Content is built dynamically from js/data.js. */
(function () {
  'use strict';
  var A = window.AniOrbit;
  var picker = document.getElementById('mood-picker');
  var results = document.getElementById('mood-results');
  var status = document.getElementById('mood-status');
  var featured = document.getElementById('featured-grid');
  if (!A || !A.anime) { return; }

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function showMood(key) {
    var picks = shuffle(A.anime.filter(function (a) { return a.moods.indexOf(key) !== -1; })).slice(0, 3);
    results.innerHTML = '';
    picks.forEach(function (a) { results.appendChild(A.createCard(a, { blurb: true })); });
    status.textContent = 'Feeling ' + A.moods[key].label.toLowerCase() + '? ' + A.moods[key].blurb +
      ' Here are ' + picks.length + ' picks. Tap the same mood again for a fresh set.';
  }

  if (picker) {
    Object.keys(A.moods).forEach(function (key) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'mood-btn'; b.textContent = A.moods[key].label;
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () {
        picker.querySelectorAll('.mood-btn').forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        showMood(key);
      });
      picker.appendChild(b);
    });
    var surprise = document.createElement('button');
    surprise.type = 'button'; surprise.className = 'btn btn-primary'; surprise.textContent = 'Surprise me';
    surprise.addEventListener('click', function () {
      var a = A.anime[Math.floor(Math.random() * A.anime.length)];
      window.location.href = A.titleUrl(a.id);   // jump to a random title page
    });
    picker.appendChild(surprise);
  }

  if (featured) {
    A.ranked.slice(0, 3).forEach(function (a, i) {
      featured.appendChild(A.createCard(a, { rank: i + 1, blurb: true }));
    });
  }
})();
