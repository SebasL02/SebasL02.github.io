/* index.js — Hero Slider + contador de estadísticas */

/* ══════════════════════════════════════
   HERO SLIDER
══════════════════════════════════════ */
const SLIDE_DURATION = 8000; // ms por slide
let currentSlide = 0;
let timer        = null;
let progressRaf  = null;
let progressStart= null;

const slides   = document.querySelectorAll('.slide');
const dots     = document.querySelectorAll('.sdot');
const bar      = document.getElementById('progressBar');

function goTo(index, immediate = false) {
  /* Quitar activo */
  slides[currentSlide]?.classList.remove('slide--active');
  dots[currentSlide]?.classList.remove('sdot--active');
  dots[currentSlide]?.setAttribute('aria-selected', 'false');

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide]?.classList.add('slide--active');
  dots[currentSlide]?.classList.add('sdot--active');
  dots[currentSlide]?.setAttribute('aria-selected', 'true');

  /* Reiniciar progreso */
  cancelAnimationFrame(progressRaf);
  if (bar) bar.style.width = '0%';
  clearTimeout(timer);

  if (!immediate) startProgress();
}

function startProgress() {
  progressStart = performance.now();

  function tick(now) {
    const elapsed = now - progressStart;
    const pct     = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
    if (bar) bar.style.width = pct + '%';

    if (pct < 100) {
      progressRaf = requestAnimationFrame(tick);
    } else {
      goTo(currentSlide + 1);
    }
  }
  progressRaf = requestAnimationFrame(tick);
}

/* Botones */
document.getElementById('sliderNext')?.addEventListener('click', () => goTo(currentSlide + 1));
document.getElementById('sliderPrev')?.addEventListener('click', () => goTo(currentSlide - 1));

/* Dots */
dots.forEach(dot => {
  dot.addEventListener('click', () => goTo(parseInt(dot.dataset.goto, 10)));
});

/* Teclado */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goTo(currentSlide + 1);
  if (e.key === 'ArrowLeft')  goTo(currentSlide - 1);
});

/* Touch swipe */
let touchStartX = 0;
const sliderEl = document.querySelector('.hero-slider');
sliderEl?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
sliderEl?.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goTo(currentSlide + (diff > 0 ? 1 : -1));
});

/* Pausar cuando la página no es visible */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(progressRaf);
  } else {
    startProgress();
  }
});

/* Iniciar */
goTo(0, false);

/* ══════════════════════════════════════
   CONTADOR DE ESTADÍSTICAS
══════════════════════════════════════ */
function animateCounter(el, target) {
  const dur = 1800;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const v = Math.round(target * ease);
    el.textContent = '+' + v.toLocaleString('es');
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el  = e.target;
    const val = parseInt(el.dataset.count, 10);
    if (!isNaN(val)) animateCounter(el, val);
    statsObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.sband-n[data-count]').forEach(el => statsObs.observe(el));
