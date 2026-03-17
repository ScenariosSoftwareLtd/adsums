// Dropdown toggle
const ddEl = document.getElementById('calc-dropdown');
document.getElementById('dd-toggle').addEventListener('click', e => {
  e.stopPropagation();
  ddEl.classList.toggle('open');
});
document.addEventListener('click', () => ddEl.classList.remove('open'));
ddEl.addEventListener('click', e => e.stopPropagation());
