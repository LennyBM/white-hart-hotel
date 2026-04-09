import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT } from '../../constants/contact';

const ROUTE_CTA: Record<string, { label: string; to: string }> = {
  '/rooms': { label: 'Book a Room', to: '/contact' },
  '/pop-up-bar': { label: 'Get a Quote', to: '/pop-up-bar#contact' },
  '/takeaway': { label: 'Order on Just Eat', to: CONTACT.justEat },
  '/menu': { label: 'Order Takeaway', to: '/takeaway' },
  '/black-rock-grill': { label: 'Book a Table', to: '/contact' },
  '/vinyl-menu': { label: 'Book VINYL · Fri & Sat', to: '/contact' },
};

const DEFAULT_CTA = { label: 'Book a Table', to: '/contact' };

export function MobileBottomBar() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  const hiddenPages = ['/contact'];

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (hiddenPages.includes(pathname)) return null;

  const cta = ROUTE_CTA[pathname] || DEFAULT_CTA;
  const isExternal = cta.to.startsWith('http');

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex border-t border-white/10" style={{ background: '#1A1713' }}>
        {/* Call */}
        <a
          href={CONTACT.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 text-white/60 hover:text-white transition-colors"
          style={{ minHeight: '56px', width: '60px' }}
          aria-label="Call The White Hart"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="font-label text-[9px] uppercase tracking-wide">Call</span>
        </a>

        {/* Primary CTA — takes remaining space */}
        {isExternal ? (
          <a
            href={cta.to}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center font-label font-bold text-sm uppercase tracking-widest"
            style={{ background: '#9E7C3C', color: '#fff', minHeight: '56px' }}
          >
            {cta.label}
          </a>
        ) : (
          <Link
            to={cta.to}
            className="flex-1 flex items-center justify-center font-label font-bold text-sm uppercase tracking-widest"
            style={{ background: '#9E7C3C', color: '#fff', minHeight: '56px' }}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  );
}
