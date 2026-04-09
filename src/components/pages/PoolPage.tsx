import { SEOHead } from '../ui/SEOHead';
import { CTAButton } from '../ui/CTAButton';
import { CONTACT } from '../../constants/contact';

export default function PoolPage() {
  return (
    <>
      <SEOHead page="pool" />

      {/* ══ HERO ══ */}
      <section className="relative min-h-[56vh] md:min-h-[66vh] flex items-end overflow-hidden bg-[#0e0b08]">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/event-pool.webp" type="image/webp" />
            <img
              src="/images/event-pool.jpg"
              alt="Pool table in the downstairs bar at The White Hart Holsworthy"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1920}
              height={1080}
            />
          </picture>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,3,2,0.95) 0%, rgba(4,3,2,0.55) 45%, rgba(4,3,2,0.25) 100%)' }} />
        </div>
        <div className="relative z-10 container mx-auto px-6 pb-14 md:pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <span className="text-primary text-base">●</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-white font-semibold">Downstairs Bar · 70p per game · 2 for £1</span>
            </div>
            <h1 className="font-headline italic text-white leading-[0.95] mb-5" style={{ fontSize: 'clamp(2.4rem, 8vw, 5.5rem)' }}>
              Pool &amp; Darts
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed font-light max-w-xl">
              The downstairs table is open to everyone. Rack up a frame with a pint — 70p per game or 2 games for £1. Dartboards free to use. We also run pool and darts league teams, and new players are always welcome.
            </p>
          </div>
        </div>
      </section>

      {/* ══ KEY DETAILS STRIP ══ */}
      <section className="bg-surface border-b border-outline-variant/15 py-6 md:py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Where', value: 'Downstairs Bar' },
              { label: 'Pool', value: '70p · 2 for £1' },
              { label: 'Darts', value: 'Free to use' },
              { label: 'Anyone Welcome', value: 'No booking' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="font-label uppercase tracking-widest text-[9px] text-primary font-semibold mb-1">{label}</p>
                <p className="font-headline italic text-on-surface text-lg md:text-xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT + IMAGE ══ */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-2">The Downstairs Bar</p>
                <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                  A proper locals' room
                </h2>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Whitewashed brick, a brass pool light, dart boards on the wall, and a full bar in the corner — the downstairs room is the beating heart of the White Hart's pub side. Walk in any day and you'll find regulars, visitors, and new faces leaning on cues and talking tactics.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                The pool table is 70p per game or 2 games for £1 — no booking, no waiting list, just grab a cue and rack up. Dartboards are free to use all day. We've always been dog-friendly, always been welcoming, and always had a cue ready for anyone who fancies a game.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: 'Pop In Any Time', body: 'Open to everyone during pub hours. No booking, no league card, no membership — just a cue, a pint and a frame.' },
                  { title: 'Pool Table Coins', body: '70p per game or 2 games for £1. Pay at the bar, grab your chalk, and the table is yours.' },
                  { title: 'League Nights', body: 'We field pool and darts teams in the local leagues. New players always welcome — come down on a league night to meet the captains.' },
                  { title: 'Dogs & Families', body: 'Well-behaved dogs welcome. Children allowed with adults during the day. Perfect for a quiet afternoon frame.' },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-surface rounded-xl p-5 border border-outline-variant/15">
                    <p className="font-label uppercase tracking-widest text-[10px] text-primary font-semibold mb-2">{title}</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">{body}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <CTAButton href={CONTACT.phoneHref} variant="primary">Ask About League Nights</CTAButton>
                <CTAButton to="/contact" variant="outline">Private Hire Enquiry</CTAButton>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <picture>
                  <source srcSet="/images/event-pool.webp" type="image/webp" />
                  <img
                    src="/images/event-pool.jpg"
                    alt="The downstairs pool room at The White Hart with full-size table and whitewashed brick walls"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-3">Come Down</p>
          <h2 className="font-headline italic text-on-surface mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            Rack 'em up
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base font-light max-w-lg mx-auto mb-6">
            Pop down the stairs at The White Hart, 3 Fore Street, Holsworthy. Or give us a ring to ask about league nights and team fixtures.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton href={CONTACT.phoneHref} variant="primary">{CONTACT.phone}</CTAButton>
            <CTAButton to="/whats-on" variant="outline">All Events</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
