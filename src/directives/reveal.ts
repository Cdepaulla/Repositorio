import { DirectiveOptions } from 'vue';

/**
 * v-reveal — faz o elemento entrar deslizando quando chega na viewport.
 * Respeita prefers-reduced-motion e não faz nada se o elemento já está visível.
 */
const Reveal: DirectiveOptions = {
  inserted(el) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver !== 'function') return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        el.style.opacity = '1';
        el.style.transform = 'none';
        io.unobserve(el);
      });
    }, { threshold: 0.08 });

    io.observe(el);
  }
};

export default Reveal;
