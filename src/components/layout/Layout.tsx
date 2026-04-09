import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

import { MobileBottomBar } from '../ui/MobileBottomBar';
import { ScrollReset } from '../ui/ScrollReset';
import { Analytics } from '../ui/Analytics';
import { CookieConsent } from '../ui/CookieConsent';
import { TodayStrip } from '../ui/TodayStrip';
import { SchemaOrg } from '../ui/SchemaOrg';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-[76px] md:bottom-8 right-20 md:right-6 z-40 w-11 h-11 rounded-full bg-surface-container-high text-on-surface shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-on-primary border border-outline-variant/20 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export function Layout() {
  useScrollReveal();

  return (
    <>
      {/* Site-wide Organization schema — Google Knowledge Panel */}
      <SchemaOrg type="Organization" />

      <ScrollReset />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      {/* Spacer pushes TodayStrip below the fixed header (h-16 mobile, h-20 desktop) */}
      <div className="h-16 md:h-20" aria-hidden="true" />
      <TodayStrip />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />

      <Analytics />
      <CookieConsent />
      <MobileBottomBar />
      <ScrollToTop />
    </>
  );
}
