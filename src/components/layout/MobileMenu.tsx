import { useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT } from '../../constants/contact';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const prevPathname = useRef(pathname);

  // Close on route change (but not on initial mount)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      onClose();
    }
    prevPathname.current = pathname;
  }, [pathname, onClose]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-label="Navigation menu"
      aria-modal={isOpen}
      className={`fixed inset-0 z-[55] lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop — full black for readability */}
      <div
        className="absolute inset-0 bg-[#221E1A]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu content */}
      <div
        ref={menuRef}
        className={`relative z-10 flex flex-col items-center justify-center h-full px-8 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : '-translate-y-4'
        }`}
      >
        {/* Close button at top right */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-3 min-w-[44px] min-h-[44px] text-white/60 hover:text-[#e6c487] transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-headline italic text-3xl transition-colors duration-300 ${
                  isActive ? 'text-[#e6c487]' : 'text-white hover:text-[#e6c487]'
                }`}
                onClick={handleLinkClick}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Quick sub-links */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 max-w-xs">
          {[
            { label: 'Black Rock Grill', to: '/black-rock-grill' },
            { label: 'VINYL Menu', to: '/vinyl-menu' },
            { label: 'Poker', to: '/whats-on/poker' },
            { label: 'Pool & Darts', to: '/whats-on/pool' },
            { label: 'Karaoke', to: '/whats-on/karaoke' },
            { label: 'Our Story', to: '/our-story' },
            { label: 'Pop Up Bar', to: '/pop-up-bar' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className="text-[#A09889] hover:text-[#e6c487] transition-colors text-xs font-label tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={CONTACT.phoneHref}
            className="bg-primary text-on-primary px-10 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase min-h-[44px] flex items-center"
          >
            Call {CONTACT.phone}
          </a>
          <a
            href={CONTACT.emailHref}
            className="text-[#A09889] font-label text-sm tracking-wide hover:text-[#e6c487] transition-colors"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
