import { Link } from 'react-router-dom';
import { SEOHead } from '../ui/SEOHead';

const QUICK_LINKS = [
  { label: 'Dining & Restaurant', to: '/dining', desc: 'Sunday Carvery, VINYL, Bar Food' },
  { label: 'Rooms', to: '/rooms', desc: 'Six boutique hotel rooms' },
  { label: "What's On", to: '/whats-on', desc: 'Poker, Pool, Karaoke & Events' },
  { label: 'Contact', to: '/contact', desc: 'Enquiries & Bookings' },
  { label: 'Our Story', to: '/our-story', desc: 'Est. 1591, Holsworthy' },
];

export function NotFoundPage() {
  return (
    <>
      <SEOHead page="notFound" />

      <section className="relative bg-surface min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center py-24 reveal-up">
          <p
            className="font-headline italic leading-none text-outline-variant/20 select-none pointer-events-none"
            style={{ fontSize: 'clamp(8rem, 30vw, 18rem)' }}
            aria-hidden="true"
          >
            404
          </p>

          <h1 className="font-headline italic text-4xl md:text-5xl text-on-surface -mt-8 md:-mt-12 mb-4">
            Page Not Found
          </h1>

          <p className="text-on-surface-variant text-lg max-w-md mx-auto leading-relaxed font-light mb-8">
            That page seems to have wandered off into the Devon countryside. Here are a few places to start instead:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10">
            {QUICK_LINKS.map(({ label, to, desc }) => (
              <Link
                key={to}
                to={to}
                className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 hover:border-primary/30 hover:bg-surface-container transition-colors"
              >
                <p className="font-label text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                  {label}
                </p>
                <p className="text-on-surface-variant text-xs font-light">{desc}</p>
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary transition-colors"
          >
            ← Return to homepage
          </Link>
        </div>
      </section>
    </>
  );
}
