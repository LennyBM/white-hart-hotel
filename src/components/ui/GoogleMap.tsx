import { useState, useEffect, useRef } from 'react';
import { CONTACT } from '../../constants/contact';

export function GoogleMap({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-lg ${className}`}>
      {visible ? (
        <iframe
          src={CONTACT.googleMapsEmbed}
          className="w-full h-full border-0 brightness-75 contrast-125 invert-[0.9] hue-rotate-180"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The White Hart Hotel location on Google Maps"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-surface-container">
          <p className="font-label text-sm text-on-surface-variant">Loading map&hellip;</p>
        </div>
      )}
      <a
        href={CONTACT.googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-primary text-on-primary px-4 py-2 rounded-md font-label text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform"
      >
        Get Directions
      </a>
    </div>
  );
}
