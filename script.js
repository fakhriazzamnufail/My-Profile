document.documentElement.classList.add("js-enabled");

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeColorMeta = document.getElementById('themeColorMeta');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const scrollProgress = document.getElementById('scrollProgress');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

function setTheme(theme, persist = true) {
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', nextTheme === 'light' ? '#f5f8fc' : '#080d18');
  }
  if (themeToggle) {
    const target = nextTheme === 'dark' ? 'terang' : 'gelap';
    themeToggle.setAttribute('aria-label', `Aktifkan mode ${target}`);
    themeToggle.setAttribute('title', `Aktifkan mode ${target}`);
  }
  if (persist) {
    try { localStorage.setItem('fakhri-theme', nextTheme); }
    catch (_) { /* Tema tetap berfungsi meski localStorage tidak tersedia. */ }
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
  });
  setTheme(root.dataset.theme, false);
}

function closeMenu(returnFocus = false) {
  if (!menuToggle || !navLinks) return;
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Buka menu');
  if (returnFocus) menuToggle.focus();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Buka menu' : 'Tutup menu');
    navLinks.classList.toggle('open', !isOpen);
  });
  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) closeMenu(true);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMenu();
  });
}

function updateScrollProgress() {
  if (!scrollProgress) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
