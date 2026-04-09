import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const unrevealed = new Set<Element>();

    const initTimeout = setTimeout(() => {
      const elements = document.querySelectorAll(SELECTOR);
      if (!elements.length) return;

      elements.forEach((el) => {
        el.classList.add('will-reveal');
        unrevealed.add(el);
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              unrevealed.delete(entry.target);
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: '0px 0px 120px 0px' }
      );

      elements.forEach((el) => observer?.observe(el));
    }, 80);

    // Safety net: force-reveal after 3 seconds
    const safetyTimeout = setTimeout(() => {
      unrevealed.forEach((el) => el.classList.add('visible'));
    }, 3000);

    return () => {
      clearTimeout(initTimeout);
      clearTimeout(safetyTimeout);
      observer?.disconnect();
      document.querySelectorAll(SELECTOR).forEach((el) => {
        el.classList.remove('will-reveal', 'visible');
      });
    };
  }, [pathname]);
}
