// Dropdown toggle
const ddEl = document.getElementById('calc-dropdown');
document.getElementById('dd-toggle').addEventListener('click', e => {
  e.stopPropagation();
  ddEl.classList.toggle('open');
});
document.addEventListener('click', () => ddEl.classList.remove('open'));
ddEl.addEventListener('click', e => e.stopPropagation());

// Mobile hamburger menu
(function(){
  const hamburger = document.getElementById('nav-hamburger');
  if (!hamburger) return;
  const pill = document.querySelector('.nav-pill');

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function toggle() {
    const open = hamburger.classList.toggle('open');
    pill.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);
})();
