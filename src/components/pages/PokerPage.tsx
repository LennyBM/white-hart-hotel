import { SEOHead } from '../ui/SEOHead';
import { CTAButton } from '../ui/CTAButton';
import { CONTACT } from '../../constants/contact';

export default function PokerPage() {
  return (
    <>
      <SEOHead page="poker" />

      {/* ══ HERO — no poster crop, rich dark mesh instead ══ */}
      <section className="relative min-h-[54vh] md:min-h-[62vh] flex items-end overflow-hidden bg-[#0e0b08]">
        {/* Layered dark green felt-table ambient background */}
        <div
          className="absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 20% 80%, rgba(30, 60, 40, 0.35) 0%, transparent 55%),' +
              'radial-gradient(ellipse at 80% 20%, rgba(158, 124, 60, 0.18) 0%, transparent 55%),' +
              'radial-gradient(ellipse at 50% 50%, rgba(40, 25, 10, 0.4) 0%, transparent 70%),' +
              'linear-gradient(180deg, #0e0b08 0%, #15100a 60%, #0a0805 100%)',
          }}
        />
        {/* Subtle card-suit decoration */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[12%] left-[8%] text-[#e6c487]/[0.06] text-[280px] leading-none font-serif select-none">♠</span>
          <span className="absolute bottom-[18%] right-[6%] text-[#e6c487]/[0.04] text-[220px] leading-none font-serif select-none">♣</span>
        </div>
        <div className="relative z-10 container mx-auto px-6 pb-14 md:pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-[#e6c487]/10 backdrop-blur-sm border border-[#e6c487]/30 px-4 py-2 rounded-full mb-6">
              <span className="text-[#e6c487] text-base">♠</span>
              <span className="font-label text-[11px] uppercase tracking-widest text-[#e6c487] font-semibold">Every Tuesday · 8pm</span>
            </div>
            <h1 className="font-headline italic text-white leading-[0.95] mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" style={{ fontSize: 'clamp(2.4rem, 8vw, 5.5rem)' }}>
              LPPL League Poker
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed font-light max-w-xl">
              Holsworthy's home of Texas Hold'em. Join the League Poker Players League every Tuesday — £10 buy-in, proper tournament format, and a seat at the table for anyone who fancies their luck.
            </p>
          </div>
        </div>
      </section>

      {/* ══ KEY DETAILS STRIP ══ */}
      <section className="bg-surface border-b border-outline-variant/15 py-6 md:py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'When', value: 'Every Tuesday' },
              { label: 'Start Time', value: '8:00 PM' },
              { label: 'Buy-In', value: '£10' },
              { label: 'Format', value: "Texas Hold'em" },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="font-label uppercase tracking-widest text-[9px] text-primary font-semibold mb-1">{label}</p>
                <p className="font-headline italic text-on-surface text-lg md:text-xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT / POSTER ══ */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-2">About the League</p>
                <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                  Part of the national LPPL circuit
                </h2>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                The League Poker Players League (LPPL) is one of the UK's largest amateur poker networks. Every Tuesday night the White Hart becomes a tournament venue — proper chips, proper cards, proper prize pools.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Earn league points with every tournament you play, climb the national leaderboard, and qualify for regional and national finals. New players are always welcome — the format is friendly, the stakes are low, and the community is built around good company and sharp card play.
              </p>

              {/* What to expect */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: 'Beginners Welcome', body: 'No experience needed — the regulars will talk you through the format if it\'s your first time.' },
                  { title: 'League Points', body: 'Every tournament contributes to your national LPPL ranking. Play to win, or play for fun.' },
                  { title: 'Fully Licensed Bar', body: 'Draught real ales, spirits and soft drinks available throughout the tournament.' },
                  { title: 'Food Available', body: 'Our kitchen serves until 8:30pm — grab a pie, burger or pizza before the deal.' },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-surface rounded-xl p-5 border border-outline-variant/15">
                    <p className="font-label uppercase tracking-widest text-[10px] text-primary font-semibold mb-2">{title}</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">{body}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <CTAButton href={CONTACT.phoneHref} variant="primary">Call to Register</CTAButton>
                <CTAButton to="/contact" variant="outline">General Enquiry</CTAButton>
              </div>
            </div>

            {/* Poster — shown in full, vertical-friendly */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/15 shadow-lg bg-surface">
                <picture>
                  <source srcSet="/images/poker-poster-full.webp" type="image/webp" />
                  <img
                    src="/images/poker-poster-full.jpg"
                    alt="LPPL Poker Tuesdays at The White Hart Hotel poster"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    width={1200}
                    height={1700}
                  />
                </picture>
              </div>
              <p className="text-center text-on-surface-variant text-xs mt-4 font-label uppercase tracking-widest">
                Official LPPL Tuesday Night Poster
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LOCATION + CTA ══ */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-3">Find Us</p>
          <h2 className="font-headline italic text-on-surface mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            See you at the tables
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base font-light max-w-lg mx-auto mb-6">
            The White Hart Hotel, 3 Fore Street, Holsworthy EX22 6EB. Tournament starts 8pm sharp — arrive from 7:30pm to register.
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
