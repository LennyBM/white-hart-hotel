import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT } from '../../constants/contact';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { MobileMenu } from './MobileMenu';

const HERO_PAGES = ['/', '/dining', '/rooms', '/whats-on', '/pop-up-bar'];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollPosition(50);
  const { pathname } = useLocation();
  const isHeroPage = HERO_PAGES.includes(pathname);
  const showSolid = scrolled || !isHeroPage;

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolid ? 'glass-nav-solid shadow-lg' : 'glass-nav'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="text-2xl font-headline italic text-primary tracking-tight" aria-label="The White Hart Hotel — home">
              The White Hart
            </Link>

            {/* Desktop Nav — show all NAV_LINKS including Contact */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.to || pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-label text-sm tracking-wide transition-colors duration-300 pb-0.5 ${
                      isActive
                        ? 'text-primary border-b-2 border-primary/50'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Call Us — visible from lg (1024px) with phone number */}
              <a
                href={CONTACT.phoneHref}
                className="hidden lg:flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-label uppercase tracking-widest text-xs"
              >
                <span>Call Us</span>
                <span className="normal-case tracking-normal">{CONTACT.phone}</span>
              </a>

              {/* Book a Room — links to booking widget on rooms page */}
              <Link
                to="/rooms#book"
                className="hidden md:inline-flex border-2 border-primary text-primary px-5 py-2 rounded-md font-label font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-primary/10"
              >
                Book a Room
              </Link>

              {/* Book a Table — links to /contact */}
              <Link
                to="/contact"
                className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded-md font-label font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-primary-container btn-shimmer"
              >
                Book a Table
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
