import { SEOHead } from '../ui/SEOHead';
import { Link } from 'react-router-dom';
import { FlourishDivider } from '../ui/FlourishDivider';
import { DeerMotif } from '../ui/DeerMotif';

export function CookiesPage() {
  return (
    <>
      <SEOHead page="cookies" />
      <main className="min-h-screen">
        {/* Hero — dark band with flourish + deer watermark */}
        <section className="band-dark-mesh relative overflow-hidden py-20 md:py-32 top-accent">
          <DeerMotif className="absolute -top-10 -right-10 md:top-4 md:right-12 text-[#e6c487] opacity-[0.05]" size={340} />
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center reveal-up">
              <FlourishDivider label="Legal" variant="light" className="mb-8" />
              <h1 className="font-headline italic text-white leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
                Cookie Policy
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
                How we use cookies on The White Hart Hotel website.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-blush paper-texture relative overflow-hidden py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-on-surface-variant text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-10 text-on-surface-variant leading-relaxed">
            {/* What Are Cookies */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They are widely
                used to make websites work more efficiently, provide a better user experience, and supply information to
                the site owners. Some cookies are essential for the website to function, while others help us understand
                how visitors use the site or enable advertising features.
              </p>
            </section>

            {/* Essential Cookies */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Essential Cookies</h2>
              <p className="mb-4">
                These cookies are strictly necessary for the website to function and cannot be disabled.
              </p>
              <div className="overflow-x-auto rounded-lg border border-outline-variant/20">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-container-high text-on-surface">
                      <th className="text-left px-4 py-3 font-label font-semibold">Cookie Name</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Provider</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-on-surface">wh_cookie_consent</td>
                      <td className="px-4 py-3">The White Hart Hotel</td>
                      <td className="px-4 py-3">Stores your cookie consent preferences</td>
                      <td className="px-4 py-3">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Analytics Cookies */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Analytics Cookies</h2>
              <p className="mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting
                information anonymously. They are only set with your consent.
              </p>
              <div className="overflow-x-auto rounded-lg border border-outline-variant/20">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-container-high text-on-surface">
                      <th className="text-left px-4 py-3 font-label font-semibold">Cookie Name</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Provider</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-on-surface">_ga</td>
                      <td className="px-4 py-3">Google Analytics</td>
                      <td className="px-4 py-3">Distinguishes unique visitors by assigning a randomly generated ID</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-on-surface">_ga_*</td>
                      <td className="px-4 py-3">Google Analytics</td>
                      <td className="px-4 py-3">Maintains session state for GA4 property measurement</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Marketing Cookies */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Marketing Cookies</h2>
              <p className="mb-4">
                These cookies are used to track visitors across websites and display relevant advertisements. They are
                only set with your consent.
              </p>
              <div className="overflow-x-auto rounded-lg border border-outline-variant/20">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-container-high text-on-surface">
                      <th className="text-left px-4 py-3 font-label font-semibold">Cookie Name</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Provider</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 font-label font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-on-surface">_fbp</td>
                      <td className="px-4 py-3">Meta (Facebook)</td>
                      <td className="px-4 py-3">Tracks visits across websites for delivering targeted advertising on Facebook and Instagram</td>
                      <td className="px-4 py-3">3 months</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-on-surface">_fbc</td>
                      <td className="px-4 py-3">Meta (Facebook)</td>
                      <td className="px-4 py-3">Stores the last click identifier from a Facebook ad click-through</td>
                      <td className="px-4 py-3">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Manage Cookies */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">How to Manage Cookies</h2>
              <p className="mb-3">
                You can manage your cookie preferences at any time using the cookie banner on our website. You can also
                control cookies through your browser settings:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary-container">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary-container">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary-container">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary-container">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                Please note that disabling cookies may affect the functionality of this and other websites you visit.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Changes to This Policy</h2>
              <p>
                We may update this cookie policy from time to time to reflect changes in the cookies we use or for
                operational, legal or regulatory reasons. Please revisit this page regularly to stay informed about our
                use of cookies.
              </p>
            </section>

            {/* Manage Your Preferences */}
            <section className="mt-12 p-6 bg-surface-container-high rounded-xl">
              <h2 className="font-headline italic text-xl text-on-surface mb-3">Manage Your Preferences</h2>
              <p className="text-on-surface-variant text-sm mb-4">
                You can change your cookie preferences at any time by clicking the button below. This will clear your current choice and show the consent banner again.
              </p>
              <button
                onClick={() => {
                  document.cookie = 'wh_cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                  window.location.reload();
                }}
                className="bg-primary text-on-primary px-8 py-3 rounded-md font-label font-bold text-sm uppercase tracking-widest min-h-[44px] hover:scale-[1.02] transition-transform"
              >
                Reset Cookie Preferences
              </button>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Contact</h2>
              <p className="mb-3">If you have questions about our use of cookies, please contact us:</p>
              <address className="not-italic space-y-1">
                <p className="text-on-surface font-semibold">The White Hart Hotel</p>
                <p>3 Fore Street</p>
                <p>Holsworthy, Devon</p>
                <p>EX22 6EB</p>
                <p className="mt-2">
                  Email:{' '}
                  <a href="mailto:info@whiteharthotel.co.uk" className="text-primary underline underline-offset-4 hover:text-primary-container">
                    info@whiteharthotel.co.uk
                  </a>
                </p>
              </address>
              <p className="mt-4">
                For more information on how we handle your data, please see our{' '}
                <Link to="/privacy" className="text-primary underline underline-offset-4 hover:text-primary-container">Privacy Policy</Link>.
              </p>
            </section>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
