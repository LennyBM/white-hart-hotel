import { SEOHead } from '../ui/SEOHead';
import { Link } from 'react-router-dom';
import { FlourishDivider } from '../ui/FlourishDivider';

export function TermsPage() {
  return (
    <>
      <SEOHead page="terms" />
      <main className="min-h-screen">
        {/* Hero — dark band with flourish + deer watermark */}
        <section className="band-dark-mesh relative overflow-hidden py-20 md:py-32 top-accent">
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center reveal-up">
              <FlourishDivider label="Legal" variant="light" className="mb-8" />
              <h1 className="font-headline italic text-white leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
                Terms of Service
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
                The terms and conditions governing your use of this website and our services.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-blush paper-texture relative overflow-hidden py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-on-surface-variant text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-10 text-on-surface-variant leading-relaxed">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the website of The White Hart Hotel ("we", "us", "our"), you accept and agree to
                be bound by these terms and conditions. If you do not agree with any part of these terms, please do not
                use our website. We reserve the right to update these terms at any time, and your continued use of the
                site constitutes acceptance of any changes.
              </p>
            </section>

            {/* Website Use */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Website Use</h2>
              <p className="mb-3">You agree to use this website only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the site in any way that breaches applicable local, national or international law</li>
                <li>Use the site to transmit unsolicited or unauthorised advertising or promotional material</li>
                <li>Attempt to gain unauthorised access to the site, server or any connected database</li>
                <li>Use any automated system to scrape or extract data from the website</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, photography and design, is the property of
                The White Hart Hotel or its licensors and is protected by copyright and intellectual property laws. You
                may not reproduce, distribute or use any content from this website without our prior written consent.
              </p>
            </section>

            {/* Booking Terms */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Booking Terms</h2>
              <p className="mb-3">Room and table bookings can be made in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-on-surface">By phone</strong> — call us on 01409 253475 to book directly</li>
                <li><strong className="text-on-surface">Online via Booking.com</strong> — bookings made through Booking.com are subject to their own terms and conditions</li>
              </ul>

              <h3 className="font-label text-lg font-semibold text-on-surface mb-2">Cancellation Policy</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Direct bookings require a minimum of 24 hours' notice for cancellation</li>
                <li>Bookings made through Booking.com are subject to the cancellation policy shown at the time of booking on the Booking.com platform</li>
              </ul>

              <h3 className="font-label text-lg font-semibold text-on-surface mb-2">Check-in & Check-out</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Check-in: from 2:00 pm</li>
                <li>Check-out: by 10:30 am</li>
              </ul>
              <p className="mt-3">
                Early check-in or late check-out may be available on request, subject to availability. Please contact
                us in advance to arrange.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Limitation of Liability</h2>
              <p className="mb-3">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We make no warranties or representations about the accuracy or completeness of the site content</li>
                <li>We shall not be liable for any indirect, incidental or consequential loss arising from your use of the website</li>
                <li>We do not guarantee that the website will be available at all times or free from errors</li>
              </ul>
              <p className="mt-3">
                Nothing in these terms excludes or limits our liability for death or personal injury caused by our
                negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded by law.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of England and
                Wales. Any disputes arising from or in connection with these terms shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-headline italic text-2xl text-on-surface mb-4">Contact</h2>
              <p className="mb-3">If you have any questions about these terms, please contact us:</p>
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
                For privacy-related queries, please see our{' '}
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
