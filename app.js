
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('navLinks');

btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn?.setAttribute('aria-expanded', 'false');
}));
