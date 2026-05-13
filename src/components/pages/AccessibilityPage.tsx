import { SEOHead } from '../ui/SEOHead';
import { FlourishDivider } from '../ui/FlourishDivider';
import { CONTACT } from '../../constants/contact';

export function AccessibilityPage() {
  return (
    <>
      <SEOHead page="accessibility" />
      <main className="min-h-screen">
        <section className="band-dark-mesh relative overflow-hidden py-20 md:py-32 top-accent">
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center reveal-up">
              <FlourishDivider label="Legal" variant="light" className="mb-8" />
              <h1 className="font-headline italic text-white leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
                Accessibility Statement
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
                Our commitment to making this website accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blush paper-texture relative overflow-hidden py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-on-surface-variant text-sm mb-12">Last updated: May 2026</p>

            <div className="space-y-10 text-on-surface-variant leading-relaxed">

              <section>
                <h2 className="font-headline italic text-2xl text-on-surface mb-4">Our Commitment</h2>
                <p>
                  The White Hart Hotel is committed to making our website accessible in accordance with the
                  Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 and the
                  Equality Act 2010. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
                </p>
              </section>

              <section>
                <h2 className="font-headline italic text-2xl text-on-surface mb-4">Conformance Status</h2>
                <p className="mb-3">
                  This website is <strong className="text-on-surface">partially conformant</strong> with WCAG 2.2 Level AA.
                  Partially conformant means that some content does not fully conform to the accessibility standard.
                </p>
                <p>
                  We are actively working to improve accessibility across the site. The following areas do not yet
                  fully meet the standard:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Some images may lack detailed alt text descriptions</li>
                  <li>Booking widget content (hosted by a third-party provider) may have limited accessibility</li>
                  <li>Some older PDF documents linked from the site may not be fully accessible</li>
                  <li>Video content does not currently have captions</li>
                </ul>
              </section>

              <section>
                <h2 className="font-headline italic text-2xl text-on-surface mb-4">What We Have Done</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Semantic HTML5 structure with appropriate heading hierarchy throughout</li>
                  <li>All interactive elements are keyboard navigable</li>
                  <li>Colour contrast meets or exceeds WCAG 2.2 AA minimums on core content</li>
                  <li>Focus indicators visible on all interactive elements</li>
                  <li>Descriptive alt text on product and venue images</li>
                  <li>Responsive design tested at 320px through 1920px viewport widths</li>
                  <li>No content flashes more than three times per second</li>
                  <li>Reduced-motion preferences respected via <code>prefers-reduced-motion</code></li>
                </ul>
              </section>

              <section>
                <h2 className="font-headline italic text-2xl text-on-surface mb-4">Requesting Accessible Formats</h2>
                <p className="mb-3">
                  If you need information from this website in a different format — large print, audio, accessible PDF
                  or plain text — please contact us:
                </p>
                <address className="not-italic space-y-1">
                  <p className="text-on-surface font-semibold">The White Hart Hotel</p>
                  <p>3 Fore Street, Holsworthy, Devon, EX22 6EB</p>
                  <p className="mt-2">
                    Email:{' '}
                    <a href={`mailto:${CONTACT.email}`} className="text-primary underline underline-offset-4 hover:text-primary-container">
                      {CONTACT.email}
                    </a>
                  </p>
                  <p>
                    Telephone:{' '}
                    <a href={CONTACT.phoneHref} className="text-primary underline underline-offset-4 hover:text-primary-container">
                      {CONTACT.phone}
                    </a>
                  </p>
                </address>
                <p className="mt-3">We aim to respond to accessibility requests within 5 working days.</p>
              </section>

              <section>
                <h2 className="font-headline italic text-2xl text-on-surface mb-4">Enforcement</h2>
                <p>
                  If you are not satisfied with our response to an accessibility complaint, you can contact the
                  Equality Advisory and Support Service (EASS):
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Website: <a href="https://www.equalityadvisoryservice.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary-container">equalityadvisoryservice.com</a></li>
                  <li>Telephone: 0808 800 0082</li>
                </ul>
              </section>

              <section>
                <h2 className="font-headline italic text-2xl text-on-surface mb-4">Technical Information</h2>
                <p>
                  This website is built using React with TypeScript and Tailwind CSS and is served as a static single-page
                  application from Netlify. The booking widget at <em>/rooms</em> is provided by Booking Directly, a third-party
                  service whose accessibility is subject to their own policies.
                </p>
              </section>

              <section>
                <h2 className="font-headline italic text-2xl text-on-surface mb-4">Assessment Approach</h2>
                <p>
                  We assessed the accessibility of this website using automated testing tools and manual review.
                  This statement was last reviewed in May 2026. We commit to reviewing and updating it annually or
                  following any significant change to the site.
                </p>
              </section>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
