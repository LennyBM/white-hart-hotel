import { Link } from 'react-router-dom';
import { SEOHead } from '../ui/SEOHead';
import { SchemaOrg } from '../ui/SchemaOrg';
import { CTAButton } from '../ui/CTAButton';
import { ShareButton } from '../ui/ShareButton';
import { CONTACT } from '../../constants/contact';
import { events } from '../../data/events';

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
      <SEOHead page="whatsOn" />
      {featuredEvents.map((event) => (
        <SchemaOrg key={event.id} type="Event" data={{ name: event.title, description: event.description, image: `${CONTACT.siteUrl}${event.image}` }} />
      ))}

      {/* ══ HERO ══ */}
      <section className="relative bg-surface py-10 md:py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl space-y-4">
            <p className="font-label uppercase tracking-[0.3em] text-primary text-[10px] font-medium">Curated Happenings</p>
            <h1 className="font-headline italic text-on-surface leading-[1.05]" style={{ fontSize: 'clamp(2rem, 7vw, 5rem)' }}>
              Calendar &amp; Gatherings
            </h1>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light">
              Poker, pool, steak nights, karaoke and live music — there is always a reason to gather at The White Hart.
            </p>
            <p className="text-on-surface-variant text-sm">
              Bookings:{' '}
              <a href={CONTACT.phoneHref} className="text-primary font-medium hover:underline underline-offset-4">{CONTACT.phone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ THIS WEEK — quick nav strip ══ */}
      <section className="bg-surface border-b border-outline-variant/15 py-6 md:py-8">
        <div className="container mx-auto px-6">
          <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-4">This Week at The Hart</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { day: 'Tuesday', highlight: 'LPPL Poker Night', detail: '8pm · £10 buy-in · Texas Hold\'em', icon: '♠', to: '/whats-on/poker' },
              { day: 'Wednesday', highlight: 'Black Rock Steak Night', detail: 'Cook your steak on volcanic stone', icon: '🔥', to: '/black-rock-grill' },
              { day: 'Friday', highlight: 'VINYL Restaurant', detail: 'Fine dining from 6pm · Book ahead', icon: '♪', to: '/dining#vinyl' },
              { day: 'Saturday', highlight: 'Karaoke Party', detail: '1st Saturday of the month · 9pm', icon: '🎤', to: '/whats-on/karaoke' },
              { day: 'Sunday', highlight: 'Traditional Carvery', detail: '12–3:30pm · Adult £10.95 · Child £5.95', icon: '🍖', to: '/dining#carvery' },
            ].map(({ day, highlight, detail, icon, to }) => (
              <Link
                key={day}
                to={to}
                className="group flex items-start gap-3 p-4 rounded-xl border border-outline-variant/15 bg-surface-container/40 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <span className="text-xl leading-none mt-0.5 shrink-0">{icon}</span>
                <div className="min-w-0">
                  <p className="font-label uppercase tracking-widest text-[9px] text-primary font-semibold mb-0.5">{day}</p>
                  <p className="font-medium text-on-surface text-sm leading-snug group-hover:text-primary transition-colors">{highlight}</p>
                  <p className="text-on-surface-variant text-xs mt-0.5 leading-relaxed">{detail}</p>
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
