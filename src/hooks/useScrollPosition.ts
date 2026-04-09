import { useState, useEffect } from 'react';

export function useScrollPosition(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    handler(); // Check initial state
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
