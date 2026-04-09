import { SEOHead } from '../ui/SEOHead';
import { CTAButton } from '../ui/CTAButton';
import { CONTACT } from '../../constants/contact';

export default function KaraokePage() {
  return (
    <>
      <SEOHead page="karaoke" />

      {/* ══ HERO — rich magenta/amber stage-lights ambient ══ */}
      <section className="relative min-h-[54vh] md:min-h-[62vh] flex items-end overflow-hidden bg-[#0e0b08]">
        <div
          className="absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 25% 85%, rgba(227, 81, 160, 0.22) 0%, transparent 55%),' +
              'radial-gradient(ellipse at 75% 15%, rgba(230, 196, 135, 0.22) 0%, transparent 55%),' +
              'radial-gradient(ellipse at 50% 50%, rgba(40, 15, 40, 0.4) 0%, transparent 70%),' +
              'linear-gradient(180deg, #0e0b08 0%, #17101a 60%, #0a0508 100%)',
          }}
        />
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute top-[10%] right-[10%] text-[#e6c487]/[0.06] text-[260px] leading-none select-none">🎤</span>
        </div>
        <div className="relative z-10 container mx-auto px-6 pb-14 md:pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-[#e6c487]/10 backdrop-blur-sm border border-[#e6c487]/30 px-4 py-2 rounded-full mb-6">
              <span className="text-[#e6c487] text-base">🎤</span>
              <span className="font-label text-[11px] uppercase tracking-widest text-[#e6c487] font-semibold">First Saturday · 9pm</span>
            </div>
            <h1 className="font-headline italic text-white leading-[0.95] mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" style={{ fontSize: 'clamp(2.4rem, 8vw, 5.5rem)' }}>
              Karaoke Party
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed font-light max-w-xl">
              The biggest night of the month. The first Saturday of every month the bar becomes a stage — grab a mic, pick a song, and the whole room sings along. Free shot for every singer.
            </p>
          </div>
        </div>
      </section>

      {/* ══ KEY DETAILS STRIP ══ */}
      <section className="bg-surface border-b border-outline-variant/15 py-6 md:py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'When', value: 'First Saturday' },
              { label: 'Start Time', value: '9:00 PM' },
              { label: 'Entry', value: 'Free' },
              { label: 'Food From', value: '6:00 PM' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="font-label uppercase tracking-widest text-[9px] text-primary font-semibold mb-1">{label}</p>
                <p className="font-headline italic text-on-surface text-lg md:text-xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT + POSTER ══ */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-2">The Night</p>
                <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                  Free shot for every singer
                </h2>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Make a night of it. Book a table from 6pm for food, stick around for the show, and get up to the mic when the song list opens at 9pm. No booking needed to sing — just put your name down on the night.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Bring a group, bring a solo act, bring no ambition at all — the point is the atmosphere. The White Hart on karaoke night is the warmest, loudest, most welcoming bar in Holsworthy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: 'Every First Saturday', body: 'Runs on the first Saturday of every month. No sign-up, no fee — just turn up and grab the mic.' },
                  { title: 'Free Shot Per Singer', body: "Every singer gets a free shot on the house. One song, one drink, one moment of glory." },
                  { title: 'Full Song List', body: 'Thousands of tracks — from crowd classics to deep cuts. Something for everyone, whatever your range.' },
                  { title: 'Eat First', body: 'Our kitchen serves until 8:30pm. Book a table for dinner, then move through to the bar when the show kicks off.' },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-surface rounded-xl p-5 border border-outline-variant/15">
                    <p className="font-label uppercase tracking-widest text-[10px] text-primary font-semibold mb-2">{title}</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">{body}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <CTAButton href={CONTACT.phoneHref} variant="primary">Book a Table</CTAButton>
                <CTAButton to="/contact" variant="outline">General Enquiry</CTAButton>
              </div>
            </div>

            {/* Poster — tall format looks right here */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/15 shadow-lg bg-surface">
                <picture>
                  <source srcSet="/images/karaoke-poster-full.webp" type="image/webp" />
                  <img
                    src="/images/karaoke-poster-full.jpg"
                    alt="Karaoke Party at The White Hart Hotel — first Saturday of every month poster"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    width={1200}
                    height={1697}
                  />
                </picture>
              </div>
              <p className="text-center text-on-surface-variant text-xs mt-4 font-label uppercase tracking-widest">
                Karaoke Party · Monthly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-3">See You Saturday</p>
          <h2 className="font-headline italic text-on-surface mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            What are you singing?
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base font-light max-w-lg mx-auto mb-6">
            The White Hart Hotel, 3 Fore Street, Holsworthy EX22 6EB. Food from 6pm — mic opens at 9pm.
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
