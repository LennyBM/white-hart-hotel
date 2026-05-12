import { Link } from 'react-router-dom';
import { SEOHead } from '../ui/SEOHead';
import { SchemaOrg } from '../ui/SchemaOrg';
import { CTAButton } from '../ui/CTAButton';
import { ShareButton } from '../ui/ShareButton';
import { FlourishDivider } from '../ui/FlourishDivider';
import { CONTACT } from '../../constants/contact';
import { events } from '../../data/events';

/* Proper SVG icons for weekly events — no more emoji */
const icons = {
  spade: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-1.5 4-7 7-7 12a5 5 0 005.5 5c.5 0 1-.1 1.5-.3V22h0v-3.3c.5.2 1 .3 1.5.3a5 5 0 005.5-5c0-5-5.5-8-7-12z" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 0.7c-1.2 1.8-3 3.3-3 5.7 0 2.7 2.2 3.5 2.2 3.5s-1.3-2.6.4-4.5c0 0 .3 2.5 2.4 4 2.6 1.9 3.7 4 3.7 6.8 0 3.2-2.6 7.8-7.7 7.8S4 19.4 4 16.2c0-2.7 1.3-5.4 2.6-6.7 0 0-.6 3 1.4 3.3 0 0-1.6-1.4 0-4.5C9.3 5.8 11.1 3.1 13.5.7z" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3L9 5v11.4a3.5 3.5 0 10-2 3.15V7.66l10-2V14.4a3.5 3.5 0 10-2 3.15V3z" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 14.5a3.5 3.5 0 003.5-3.5V5a3.5 3.5 0 00-7 0v6a3.5 3.5 0 003.5 3.5z" />
      <path d="M19 11a1 1 0 00-2 0 5 5 0 01-10 0 1 1 0 00-2 0 7 7 0 006 6.92V20H8a1 1 0 100 2h8a1 1 0 100-2h-3v-2.08A7 7 0 0019 11z" />
    </svg>
  ),
  roast: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 7.5c0-2-1.5-3.5-3.5-3.5-1.3 0-2.4.7-3 1.7-.6-1-1.7-1.7-3-1.7-2 0-3.5 1.5-3.5 3.5 0 0.8.3 1.5.7 2.1C4 10.7 3 12 3 14v1h14v-1c0-2-1-3.3-2.2-4.4.4-.6.7-1.3.7-2.1z" />
      <path d="M3 16v2a2 2 0 002 2h10a2 2 0 002-2v-2H3z" />
      <circle cx="20" cy="10" r="1.5" />
      <circle cx="20" cy="13.5" r="1" />
    </svg>
  ),
  pool: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" />
      <path d="M3 12h2M19 12h2M12 3v2M12 19v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="6.5" cy="6.5" r="1.2" />
      <circle cx="17.5" cy="6.5" r="1.2" />
      <circle cx="6.5" cy="17.5" r="1.2" />
      <circle cx="17.5" cy="17.5" r="1.2" />
    </svg>
  ),
};

// Generate a Google Calendar link for a recurring weekly event
function calendarLink(title: string, detail: string): string {
  const encoded = encodeURIComponent;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encoded(title)}&details=${encoded(detail)}&recur=RRULE:FREQ=WEEKLY&location=${encoded('The White Hart Hotel, Fore Street, Holsworthy EX22 6EB')}`;
}

const RECURRING_CALENDAR_EVENTS = [
  { id: 'lppl-poker', day: 'Tuesday', calTitle: 'LPPL Poker Night @ The White Hart', calDetail: "£10 buy-in · 8pm start · Texas Hold'em" },
  { id: 'steak-night', day: 'Wednesday', calTitle: 'Black Rock Steak Night @ The White Hart', calDetail: 'Volcanic rock grill · Book a table: 01409 253475' },
  { id: 'karaoke-party', day: 'Saturday', calTitle: 'Karaoke Night @ The White Hart', calDetail: 'First Saturday of the month · 9pm · Free shot for every singer!' },
];

export function WhatsOnPage() {
  const featuredEvents = events.filter((e) => e.featured && !e.past);

  return (
    <>
      <SEOHead page="whatsOn" breadcrumbs={[{ name: "What's On", url: `/whats-on` }]} />
      {featuredEvents.map((event) => (
        <SchemaOrg key={event.id} type="Event" data={{ name: event.title, description: event.description, image: `${CONTACT.siteUrl}${event.image}` }} />
      ))}

      {/* ══ HERO — dark band, editorial framing ══ */}
      <section className="band-dark-mesh relative overflow-hidden py-20 md:py-28 top-accent">
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FlourishDivider label="Curated Happenings" variant="light" className="mb-7" />
            <h1
              className="font-headline italic text-white leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
            >
              Calendar &amp; Gatherings
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
              Poker, pool, steak nights, karaoke and live music — there&rsquo;s always a reason to gather at The White Hart.
            </p>
            <p className="text-white/60 text-sm mt-5 font-label">
              Bookings:{' '}
              <a href={CONTACT.phoneHref} className="text-[#e6c487] hover:text-white font-medium transition-colors">{CONTACT.phone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ THIS WEEK — depth cards with icon badges and chevron affordance ══ */}
      <section className="bg-blush paper-texture relative overflow-hidden py-14 md:py-20">
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-10">
            <FlourishDivider label="This Week at The Hart" className="mb-4" />
            <p className="text-on-surface-variant text-sm md:text-base font-light max-w-xl mx-auto">
              Tap any day below for full details and booking.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5 max-w-6xl mx-auto">
            {([
              { day: 'Tuesday', highlight: 'LPPL Poker Night', detail: "8pm · £10 buy-in · Texas Hold'em", icon: icons.spade, to: '/whats-on/poker', tint: 'rgba(30, 60, 40, 0.08)' },
              { day: 'Wednesday', highlight: 'Black Rock Steak Night', detail: 'Cook your steak on volcanic stone', icon: icons.flame, to: '/black-rock-grill', tint: 'rgba(186, 80, 40, 0.08)' },
              { day: 'Any Day', highlight: 'Pool Tables', detail: 'Free to play · All welcome', icon: icons.pool, to: '/whats-on/pool', tint: 'rgba(60, 100, 158, 0.08)' },
              { day: 'Friday', highlight: 'VINYL Restaurant', detail: 'Fine dining from 6pm · Book ahead', icon: icons.music, to: '/dining#vinyl', tint: 'rgba(158, 124, 60, 0.08)' },
              { day: 'Saturday', highlight: 'Karaoke Party', detail: '1st Saturday of the month · 9pm', icon: icons.mic, to: '/whats-on/karaoke', tint: 'rgba(227, 81, 160, 0.06)' },
              { day: 'Sunday', highlight: 'Traditional Carvery', detail: '12–3:30pm · Adult £10.95 · Child £5.95', icon: icons.roast, to: '/dining#carvery', tint: 'rgba(139, 94, 75, 0.08)' },
            ] as const).map(({ day, highlight, detail, icon, to, tint }) => (
              <Link
                key={day}
                to={to}
                className="group relative block rounded-2xl bg-surface border border-[#9E7C3C]/25 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#9E7C3C]/55 transition-all overflow-hidden"
                style={{ backgroundImage: `linear-gradient(180deg, ${tint} 0%, transparent 40%)` }}
              >
                {/* Top day label band */}
                <div className="px-5 pt-5 pb-3 border-b border-[#9E7C3C]/10">
                  <p className="font-label uppercase tracking-[0.2em] text-[10px] text-primary font-bold">{day}</p>
                </div>

                {/* Icon + content */}
                <div className="px-5 pt-4 pb-12">
                  <div className="w-11 h-11 rounded-xl bg-[#9E7C3C]/12 border border-[#9E7C3C]/20 flex items-center justify-center mb-3 text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:scale-105 transition-all">
                    <div className="w-5 h-5">{icon}</div>
                  </div>
                  <h3 className="font-headline italic text-on-surface text-xl leading-tight group-hover:text-primary transition-colors">
                    {highlight}
                  </h3>
                  <p className="text-on-surface-variant text-xs mt-2 leading-relaxed font-light">{detail}</p>
                </div>

                {/* Bottom "View details →" bar */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-[#9E7C3C]/6 border-t border-[#9E7C3C]/15 flex items-center justify-between">
                  <span className="font-label uppercase tracking-widest text-[9px] text-primary font-bold">View Details</span>
                  <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED EVENTS ══ */}
      <section className="bg-surface-container-low py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-10">
            <p className="font-label uppercase tracking-[0.3em] text-primary text-[10px] font-medium mb-2">What's On</p>
            <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>Weekly Highlights</h2>
          </div>

          <div className="space-y-4 md:space-y-5">
            {/* ── Hero card: first featured event ── */}
            {featuredEvents[0] && (
              <Link
                to={featuredEvents[0].cta || '/contact'}
                className="group relative overflow-hidden rounded-2xl block"
                style={{ height: 'clamp(320px, 45vw, 560px)' }}
              >
                <picture>
                  <source srcSet={featuredEvents[0].image} type="image/webp" />
                  <img
                    src={featuredEvents[0].image.replace('.webp', '.jpg')}
                    alt={featuredEvents[0].imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                    width={1400}
                    height={700}
                  />
                </picture>
                {/* Light gradient — image stays readable */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.1) 100%)' }} />
                {featuredEvents[0].partnerLogo && (
                  <div className="absolute top-5 right-5 z-20 bg-black/50 backdrop-blur-sm rounded-xl p-2.5">
                    <img src={featuredEvents[0].partnerLogo} alt={featuredEvents[0].partnerName} className="h-9 w-auto object-contain" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 z-10">
                  <span className="font-label uppercase tracking-[0.3em] text-primary text-xs mb-3 block">{featuredEvents[0].date}</span>
                  <h3 className="font-headline italic text-white leading-none mb-3" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>
                    {featuredEvents[0].title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl mb-5 font-light">
                    {featuredEvents[0].description}
                  </p>
                  {featuredEvents[0].ctaLabel && (
                    <span className="inline-flex items-center gap-2.5 bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label text-xs uppercase tracking-widest font-bold group-hover:bg-primary/90 transition-colors">
                      {featuredEvents[0].ctaLabel}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </div>
              </Link>
            )}

            {/* ── Supporting cards: remaining featured events ── */}
            {featuredEvents.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {featuredEvents.slice(1).map((event) => (
                  <Link
                    key={event.id}
                    to={event.cta || '/contact'}
                    className="group relative overflow-hidden rounded-2xl block"
                    style={{ height: 'clamp(240px, 28vw, 360px)' }}
                  >
                    <picture>
                      <source srcSet={event.image} type="image/webp" />
                      <img
                        src={event.image.replace('.webp', '.jpg')}
                        alt={event.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                        width={700}
                        height={500}
                      />
                    </picture>
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.05) 100%)' }} />
                    {event.partnerLogo && (
                      <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                        <img src={event.partnerLogo} alt={event.partnerName} className="h-7 w-auto object-contain" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <span className="font-label uppercase tracking-[0.25em] text-primary text-[10px] mb-1.5 block">{event.date}</span>
                      <h3 className="font-headline italic text-white text-xl md:text-2xl leading-tight mb-1.5">{event.title}</h3>
                      <p className="text-white/70 text-xs leading-relaxed line-clamp-2">{event.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ ADD TO CALENDAR ══ */}
      <section className="bg-surface py-10 md:py-14 border-y border-outline-variant/15">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <p className="font-label uppercase tracking-[0.3em] text-primary text-[10px] font-medium mb-2">Never Miss a Night</p>
            <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}>Add to Your Calendar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            {RECURRING_CALENDAR_EVENTS.map(({ id, day, calTitle, calDetail }) => {
              const ev = events.find(e => e.id === id);
              if (!ev) return null;
              return (
                <a
                  key={id}
                  href={calendarLink(calTitle, calDetail)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/15 bg-surface-container/50 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <svg className="w-5 h-5 text-primary/60 group-hover:text-primary shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-on-surface text-sm leading-snug">{ev.title}</p>
                    <p className="text-on-surface-variant text-[10px] font-label">{day}s</p>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="mt-6">
            <ShareButton title="What's On at The White Hart" text="Check out what's on at The White Hart, Holsworthy" className="text-on-surface-variant" />
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-surface-container-low py-10 md:py-16 mesh-warm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-headline italic text-on-surface mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Want to Host Your Own Event?
          </h2>
          <p className="text-on-surface-variant max-w-md mx-auto mb-6 text-sm font-light">
            From private dining to corporate gatherings, our historic rooms make the perfect backdrop.
          </p>
          <CTAButton to="/contact">Get in Touch</CTAButton>
        </div>
      </section>
    </>
  );
}
