import { SEOHead } from '../ui/SEOHead';
import { Link } from 'react-router-dom';
import { FlourishDivider } from '../ui/FlourishDivider';

export function PrivacyPage() {
  return (
    <>
      <SEOHead page="privacy" />
      <main className="min-h-screen">
        {/* Hero — dark band with flourish + deer watermark */}
        <section className="band-dark-mesh relative overflow-hidden py-20 md:py-32 top-accent">
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center reveal-up">
              <FlourishDivider label="Legal" variant="light" className="mb-8" />
              <h1 className="font-headline italic text-white leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
                Privacy Policy
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
                How The White Hart Hotel collects, uses, and protects your personal data under UK GDPR.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-blush paper-texture relative overflow-hidden py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-on-surface-variant text-sm mb-12">Last updated: May 2026</p>

          <div className="space-y-10 text-on-surface-variant leading-relaxed">
            {/* Intro */}
            <p>
              The White Hart Hotel ("we", "us", "our") is committed to protecting your personal data. This privacy
              policy explains how we collect, use, store and protect information when you use our website and services,
              in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018,
              and the Data (Use and Access) Act 2025 (DUAA).
            </p>

            {/* What Data We Collect */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">What Data We Collect</h2>
              <p className="mb-3">We may collect and process the following personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number and message content when you submit an enquiry through our contact form (processed via Netlify Forms)</li>
                <li>Booking details when you make a reservation by phone or through Booking.com</li>
                <li>Device and browser information, IP address, pages visited, and interaction data collected through cookies and analytics tools</li>
                <li>Any information you voluntarily provide to us via email or in person</li>
              </ul>
            </section>

            {/* Lawful Basis */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Lawful Basis for Processing</h2>
              <p className="mb-3">Under UK GDPR Article 6, we rely on the following lawful bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-on-surface">Legitimate interest</strong> — responding to enquiries, operating our website, and basic analytics to understand visitor behaviour</li>
                <li><strong className="text-on-surface">Consent</strong> — where you have accepted marketing cookies (GA4, Meta Pixel)</li>
                <li><strong className="text-on-surface">Contract</strong> — processing booking information necessary to fulfil a reservation</li>
                <li><strong className="text-on-surface">Legal obligation</strong> — where we are required by law to retain records</li>
              </ul>
            </section>

            {/* How We Use It */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">How We Use It</h2>
              <p className="mb-3">We use your personal data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to enquiries submitted through our contact form</li>
                <li>Process and manage room and table bookings</li>
                <li>Measure website performance using privacy-first analytics (Plausible Analytics — no cookies, no personal data)</li>
                <li>Improve our website and understand how visitors use it (via Google Analytics GA4, only with your consent)</li>
                <li>Deliver relevant advertising on social media platforms (via Meta Pixel, only with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Cookies & Tracking */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Cookies & Tracking</h2>
              <p className="mb-3">
                Our website uses cookies to ensure essential functionality, measure site performance and, with your
                consent, support marketing efforts. We use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-on-surface">Essential cookies</strong> — required for the website to function correctly, including storing your cookie consent preference</li>
                <li><strong className="text-on-surface">Google Analytics (GA4)</strong> — collects anonymised usage data to help us understand how visitors interact with the site (only active with your consent)</li>
                <li><strong className="text-on-surface">Meta Pixel</strong> — tracks conversions and enables targeted advertising on Facebook and Instagram (only active with your consent)</li>
              </ul>
              <p className="mt-3">
                For full details about the cookies we use, please see our{' '}
                <Link to="/cookies" className="text-primary underline underline-offset-4 hover:text-primary-container">Cookie Policy</Link>.
              </p>
            </section>

            {/* Third Parties */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Third Parties</h2>
              <p className="mb-3">We may share your data with the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-on-surface">Netlify</strong> — hosts our website and processes contact form submissions (USA, covered by EU-US Data Privacy Framework adequacy decision)</li>
                <li><strong className="text-on-surface">Plausible Analytics</strong> — privacy-first website analytics; no cookies, no personal data collected; data processed in the EU</li>
                <li><strong className="text-on-surface">Google Analytics (GA4)</strong> — website analytics (with consent; data may be processed in the USA under Google's Standard Contractual Clauses)</li>
                <li><strong className="text-on-surface">Meta (Facebook/Instagram)</strong> — advertising pixel (with consent; data may be processed in the USA under Meta's Standard Contractual Clauses)</li>
                <li><strong className="text-on-surface">Booking Directly</strong> — online booking widget; their own privacy policy applies to reservation data</li>
                <li><strong className="text-on-surface">Booking.com</strong> — if you book through their platform, their own privacy policy applies</li>
              </ul>
              <p className="mt-3">We do not sell your personal data to any third party.</p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary for the purposes outlined in this policy.
                Contact form submissions are retained for up to 12 months. Analytics data is retained in accordance
                with Google Analytics default retention settings (14 months). You may request deletion of your data at
                any time.
              </p>
            </section>

            {/* Your Rights Under UK GDPR */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Your Rights Under UK GDPR</h2>
              <p className="mb-3">Under the UK General Data Protection Regulation, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
                <li>Lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary-container">ico.org.uk</a></li>
              </ul>
            </section>

            {/* Contact for Data Requests */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Contact for Data Requests</h2>
              <p className="mb-3">
                To exercise any of your rights or for questions about this privacy policy, please contact us:
              </p>
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
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
