import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({ essential: true, analytics: false, marketing: false });

  useEffect(() => {
    const existing = getCookie('wh_cookie_consent');
    if (!existing) {
      // Small delay so it doesn't flash immediately on page load
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(existing) as CookiePreferences;
        setPrefs(parsed);
        // Fire event so tracking scripts know consent state
        window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: parsed }));
      } catch {
        /* invalid cookie, show banner */
        setShow(true);
      }
    }
  }, []);

  const savePreferences = (preferences: CookiePreferences) => {
    setCookie('wh_cookie_consent', JSON.stringify(preferences), 90);
    setPrefs(preferences);
    setShow(false);
    setShowPrefs(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: preferences }));
  };

  const acceptAll = () => savePreferences({ essential: true, analytics: true, marketing: true });
  const rejectNonEssential = () => savePreferences({ essential: true, analytics: false, marketing: false });
  const saveCustom = () => savePreferences(prefs);

  if (!show) return null;

  return (
    <>
      {/* Preferences Modal */}
      {showPrefs && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-label="Cookie preferences"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowPrefs(false)} />
          <div className="relative bg-surface-container-high rounded-xl p-8 max-w-md w-full shadow-2xl border border-outline-variant/20">
            <h2 className="font-headline italic text-2xl text-on-surface mb-6">Cookie Preferences</h2>

            {/* Essential */}
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/10">
              <div>
                <p className="font-label text-sm font-semibold text-on-surface">Essential Cookies</p>
                <p className="text-on-surface-variant text-xs mt-1">Required for the website to function. Cannot be disabled.</p>
              </div>
              <div className="w-12 h-6 bg-primary/30 rounded-full relative cursor-not-allowed opacity-60">
                <div className="absolute left-6 top-0.5 w-5 h-5 bg-primary rounded-full" />
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/10">
              <div>
                <p className="font-label text-sm font-semibold text-on-surface">Analytics</p>
                <p className="text-on-surface-variant text-xs mt-1">Google Analytics — helps us understand how visitors use the site.</p>
              </div>
              <button
                onClick={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                className={`w-12 h-6 rounded-full relative transition-colors ${prefs.analytics ? 'bg-primary' : 'bg-outline-variant'}`}
                role="switch"
                aria-checked={prefs.analytics}
                aria-label="Toggle analytics cookies"
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${prefs.analytics ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/10">
              <div>
                <p className="font-label text-sm font-semibold text-on-surface">Marketing</p>
                <p className="text-on-surface-variant text-xs mt-1">Meta Pixel — used for targeted advertising on Facebook and Instagram.</p>
              </div>
              <button
                onClick={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                className={`w-12 h-6 rounded-full relative transition-colors ${prefs.marketing ? 'bg-primary' : 'bg-outline-variant'}`}
                role="switch"
                aria-checked={prefs.marketing}
                aria-label="Toggle marketing cookies"
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${prefs.marketing ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={saveCustom}
                className="flex-1 bg-primary text-on-primary py-3 rounded-md font-label font-bold text-sm uppercase tracking-widest min-h-[44px]"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowPrefs(false)}
                className="px-6 py-3 text-on-surface-variant font-label text-sm hover:text-on-surface transition-colors min-h-[44px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out ${show ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="bg-footer-surface border-t border-outline-variant/20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <p className="text-footer-text-bright text-sm">
                  We use cookies to improve your experience and measure site performance.{' '}
                  <Link to="/cookies" className="text-primary underline underline-offset-4 hover:text-primary-container">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
                <button
                  onClick={acceptAll}
                  className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-label font-bold text-xs uppercase tracking-widest min-h-[44px] hover:scale-[1.02] transition-transform"
                >
                  Accept All
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="border border-footer-text text-footer-text-bright px-6 py-2.5 rounded-md font-label font-bold text-xs uppercase tracking-widest min-h-[44px] hover:bg-footer-surface-alt transition-colors"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowPrefs(true)}
                  className="text-primary px-6 py-2.5 font-label text-xs uppercase tracking-widest min-h-[44px] hover:underline underline-offset-4"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
