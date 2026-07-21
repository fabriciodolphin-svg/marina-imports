document.querySelectorAll('[data-current-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
