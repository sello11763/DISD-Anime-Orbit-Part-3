/* theme.js — runs in <head> before the page paints, so the saved theme
   (or the visitor's system preference) is applied without a flash. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var theme = null;
  try { theme = localStorage.getItem('aniorbit.theme'); } catch (e) { /* storage blocked */ }
  if (!theme) {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.setAttribute('data-theme', theme);
})();
