// Interacciones del sitio de El Lobo: menú móvil, carrusel de reseñas, carrito de prueba, boletín y avisos.
(function () {
  const toastEl = document.querySelector('[data-toast]');
  let toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2600);
  }

  // Menú móvil
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.getElementById('menu-movil');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Carrusel de reseñas
  document.querySelectorAll('[data-carrusel]').forEach((root) => {
    const track = root.querySelector('[data-track]');
    const slides = [...root.querySelectorAll('[data-slide]')];
    const dots = [...root.querySelectorAll('[data-dot]')];
    let i = 0, timer;
    const perView = () => (innerWidth >= 1024 ? 3 : innerWidth >= 640 ? 2 : 1);
    function go(n) {
      const max = Math.max(0, slides.length - perView());
      i = (n + slides.length) % slides.length;
      const offset = Math.min(i, max);
      const step = slides[0].getBoundingClientRect().width + 24;
      track.style.transform = `translateX(${-offset * step}px)`;
      slides.forEach((s, k) => s.classList.toggle('is-destacada', k === i));
      dots.forEach((d, k) => d.classList.toggle('is-activo', k === i));
    }
    const next = () => go(i + 1);
    const start = () => { stop(); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(next, 5000); };
    const stop = () => clearInterval(timer);
    root.querySelector('[data-next]')?.addEventListener('click', () => { next(); start(); });
    root.querySelector('[data-prev]')?.addEventListener('click', () => { go(i - 1); start(); });
    dots.forEach((d, k) => d.addEventListener('click', () => { go(k); start(); }));
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    addEventListener('resize', () => go(i));
    go(0); start();
  });

  // Carrito de prueba (Tienda)
  const countEl = document.querySelector('[data-cart-count]');
  let count = 0;
  try { count = Number(localStorage.getItem('ellobo-carrito') || 0); } catch (e) {}
  function paintCount() {
    if (!countEl) return;
    countEl.textContent = count;
    countEl.classList.toggle('hidden', count === 0);
    countEl.classList.toggle('flex', count > 0);
  }
  paintCount();
  document.querySelectorAll('[data-add-cart]').forEach((b) => b.addEventListener('click', () => {
    count += 1;
    try { localStorage.setItem('ellobo-carrito', String(count)); } catch (e) {}
    paintCount();
    toast('Agregado al carrito: ' + b.dataset.name);
  }));

  // Boletín
  document.querySelectorAll('[data-boletin]').forEach((f) => f.addEventListener('submit', (ev) => {
    ev.preventDefault();
    f.querySelector('[data-boletin-ok]')?.classList.remove('hidden');
    f.reset();
  }));

  // "Quiero que me avisen" (app)
  document.querySelectorAll('[data-avisame]').forEach((b) => b.addEventListener('click', () => {
    toast('¡Gracias! Te avisaremos cuando la app esté lista.');
  }));
})();
