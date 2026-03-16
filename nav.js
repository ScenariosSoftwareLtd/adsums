/* ============================================================
   AdSums — nav.js
   Shared navigation logic. Include on every page.
   ============================================================ */

(function () {
  const ddEl = document.getElementById('calc-dropdown');
  if (!ddEl) return;

  document.getElementById('dd-toggle').addEventListener('click', e => {
    e.stopPropagation();
    ddEl.classList.toggle('open');
  });

  document.addEventListener('click', () => ddEl.classList.remove('open'));
  ddEl.addEventListener('click', e => e.stopPropagation());

  // Mark the current page active in the dropdown
  const current = document.querySelector('.dd-item.current');
  if (current) current.setAttribute('aria-current', 'page');
})();
