import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../ui/SEOHead';
import { SchemaOrg } from '../ui/SchemaOrg';
import { SectionHeading } from '../ui/SectionHeading';
import { CTAButton } from '../ui/CTAButton';
import { TestimonialStrip } from '../ui/TestimonialStrip';
import { ReviewBadge } from '../ui/ReviewBadge';
import { AccreditationBar } from '../ui/AccreditationBar';
import { DeerMotif } from '../ui/DeerMotif';
import { openingHours, kitchenNote } from '../../data/openingHours';
import { CONTACT } from '../../constants/contact';

const marqueeItems = [
  'Est. 1591', 'Holsworthy · Devon', 'CAMRA Certified', 'Black Rock Grill',
  'Stone Baked Pizza', 'Sunday Carvery', 'VINYL Fri & Sat', 'Live DJ Sets',
  'Boutique Rooms', 'Jack Daniels Wings', 'Four Centuries of Welcome',
];

// Dynamic hero status line — answers "is this the right place right now?"
function useHeroStatus() {
  return useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun
    const hour = now.getHours();
    const min = now.getMinutes();
    const time = hour + min / 60;

    const isOpen = time >= 11 && time < (day === 5 || day === 6 ? 24 : day === 0 ? 22.5 : 23);
    const isFriSat = day === 5 || day === 6;
    const isVinylNight = isFriSat && time >= 18;
    const isSundayCarvery = day === 0 && time >= 11 && time < 15.5;
    const isSteak = day === 3 && isOpen;
    const isPoker = day === 2 && time >= 18;

    const parts: string[] = [];
    if (isOpen) parts.push('Open now');
    else parts.push('Opens 11am');
    if (isSundayCarvery) parts.push('Carvery until 3:30pm');
    else if (isVinylNight) parts.push('VINYL open from 6pm');
    else if (isSteak) parts.push('Steak Night tonight');
    else if (isPoker) parts.push('Poker 8pm · £10 entry');
    else if (time < 14.5 && isOpen) parts.push('Food until 2:30pm');
    else if (time >= 18 && isOpen) parts.push('Dinner until 8:30pm');
    parts.push('Free parking nearby');

    return parts.join(' · ');
  }, []);
}

function HoursAccordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      {/* Mobile: accordion */}
      <div className="md:hidden border border-outline-variant/20 rounded-xl overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 bg-surface-container text-left"
          aria-expanded={open}
        >
          <span className="font-label uppercase tracking-[0.2em] text-primary text-xs font-bold">Opening Hours</span>
          <svg className={`w-4 h-4 text-on-surface-variant transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="px-5 py-4 bg-surface-container-low space-y-3">
            {openingHours.map((entry) => (
              <div key={entry.days} className="flex justify-between text-sm">
                <span className={`font-headline italic ${entry.highlight ? 'text-primary' : 'text-on-surface'}`}>{entry.days}</span>
                <span className="text-on-surface-variant">{entry.hours}</span>
              </div>
            ))}
            <p className="text-xs italic text-on-surface-variant/70 pt-1">{kitchenNote}</p>
          </div>
        )}
      </div>
      {/* Desktop: full card */}
      <div className="hidden md:block bg-surface-container glass-card luminous-border rounded-2xl p-10 border border-outline-variant/20 shadow-xl">
        <h3 className="font-label uppercase tracking-[0.2em] text-primary text-xs mb-8">Opening Hours</h3>
        <div className="space-y-5">
          {openingHours.map((entry, i) => (
            <div key={entry.days} className={`flex justify-between items-baseline ${i < openingHours.length - 1 ? 'border-b border-outline-variant/10 pb-4' : ''}`}>
              <span className={`font-headline italic text-xl ${entry.highlight ? 'text-primary' : 'text-on-surface'}`}>{entry.days}</span>
              <span className="font-body text-on-surface-variant text-sm">{entry.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/15">
          <p className="text-sm italic text-on-surface-variant text-center leading-relaxed">{kitchenNote}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const heroStatus = useHeroStatus();

  return (
    <>
      <SEOHead page="home" />

      {/* ══ 1 · HERO ══ */}
      <section className="relative h-[92vh] md:h-screen w-full overflow-hidden flex items-center justify-center" aria-label="Welcome to The White Hart Hotel">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-exterior.webp" type="image/webp" />
            <img
              src="/images/hero-exterior.jpg"
              alt="The White Hart Hotel, a historic 16th century coaching inn in Holsworthy, Devon"
              className="w-full h-full object-cover scale-[1.06]"
              style={{ objectPosition: 'center 72%' }}
              loading="eager"
              fetchPriority="high"
              width={1920}
              height={1080}
            />
          </picture>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,3,2,0.92) 0%, rgba(4,3,2,0.50) 30%, rgba(4,3,2,0.28) 55%, rgba(4,3,2,0.82) 100%)' }} />
        </div>

        {/* Centred editorial content */}
        <div className="relative z-10 text-center px-6 w-full text-over-image">
          <div className="flex items-center justify-center gap-3 md:gap-5 mb-5 md:mb-7 hero-animate hero-animate-1">
            <div className="h-px bg-[#e6c487] w-10 md:w-24" />
            <p className="font-label uppercase tracking-[0.5em] text-[#f4d9a5] text-[11px] md:text-[13px] font-semibold whitespace-nowrap">
              Est.&nbsp;1591&nbsp;·&nbsp;Holsworthy,&nbsp;Devon
            </p>
            <div className="h-px bg-[#e6c487] w-10 md:w-24" />
          </div>

          <h1
            className="font-headline italic text-white leading-[0.88] tracking-tight hero-text-shadow hero-animate hero-animate-2"
            style={{ fontSize: 'clamp(3.6rem, 15vw, 14rem)' }}
          >
            The White Hart
          </h1>

          <div className="flex flex-col items-center gap-3 md:gap-4 mt-5 md:mt-7 hero-animate hero-animate-3">
            <div className="h-px bg-[#e6c487]/60 w-10 md:w-16" />
            <p className="font-label uppercase tracking-[0.4em] text-white/85 text-[11px] md:text-[13px] font-medium">
              Hotel&nbsp;·&nbsp;Bar&nbsp;·&nbsp;Restaurant&nbsp;·&nbsp;VINYL
            </p>
          </div>
        </div>

        {/* Dynamic status line — answers "is this the right place right now?" */}
        <div className="absolute bottom-24 md:bottom-28 left-0 right-0 z-10 flex justify-center px-6 text-over-image">
          <p className="font-label text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-white/80 font-medium text-center">{heroStatus}</p>
        </div>

        {/* Scroll cue — more obvious */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 scroll-indicator text-center">
          <p className="font-label text-[9px] uppercase tracking-[0.3em] text-white/70 mb-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">Scroll</p>
          <svg className="w-6 h-6 text-white mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ══ 2 · ACCREDITATION (trust before anything else) ══ */}
      <AccreditationBar />

      {/* ══ 3 · QUICK-ACTION STRIP (answer the job in one tap) ══ */}
      <div className="bg-surface border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-outline-variant/15">
          {[
            {
              label: 'Food Menu',
              sub: 'See all dishes & prices',
              to: '/menu',
              // Fork + knife crossed — editorial dining icon
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 2v10a2 2 0 002 2v8" />
                  <path d="M11 2v6" />
                  <path d="M9 2v6" />
                  <path d="M15 14V3a3 3 0 013 3v8a2 2 0 01-2 2h-1v5" />
                </svg>
              ),
            },
            {
              label: 'Book a Table',
              sub: CONTACT.phone,
              href: CONTACT.phoneHref,
              // Classic phone receiver — elegant line weight
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              ),
            },
            {
              label: 'Rooms',
              sub: 'From £58/night',
              to: '/rooms',
              // Bed — clean hotel iconography
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 4v16" />
                  <path d="M2 8h18a2 2 0 012 2v10" />
                  <path d="M2 17h20" />
                  <path d="M6 8v9" />
                  <circle cx="8" cy="12" r="1.5" />
                </svg>
              ),
            },
            {
              label: 'Takeaway',
              sub: 'Collection & delivery',
              to: '/takeaway',
              // Takeaway bag with handle — premium line icon
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              ),
            },
          ].map(({ icon, label, sub, to, href }) => {
            const inner = (
              <div className="group flex flex-col items-center justify-center gap-2 py-6 px-4 text-center hover:bg-surface-container transition-colors">
                <span className="text-primary transition-transform duration-500 group-hover:-translate-y-0.5">{icon}</span>
                <p className="font-label font-bold text-xs uppercase tracking-[0.15em] text-on-surface mt-1">{label}</p>
                <p className="font-label text-[10px] text-on-surface-variant">{sub}</p>
              </div>
            );
            return href
              ? <a key={label} href={href}>{inner}</a>
              : <Link key={label} to={to!}>{inner}</Link>;
          })}
        </div>
      </div>

      {/* ══ 4 · MARQUEE ══ */}
      <div className="overflow-hidden border-b border-outline-variant/25 bg-surface-container-low py-3" aria-hidden="true">
        <div className="marquee-track select-none">
          {[0, 1].map((pass) => (
            <span key={pass} className="flex">
              {marqueeItems.map((item) => (
                <span key={`${item}-${pass}`} className="flex items-center gap-5 px-5 font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/65 whitespace-nowrap">
                  {item}<span className="text-primary/35 text-[8px]">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ══ 5 · DINING SHOWCASE (menu is #1 most visited on any food site) ══ */}
      <section className="py-10 md:py-20 bg-surface" aria-label="Food and Dining">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-5 reveal-left">
              <SectionHeading label="Open Every Day" title="Food & Drink" />
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                From a proper pub lunch to a Friday night VINYL experience — home cooked, locally sourced and served with a genuine welcome. Sunday Carvery from 12pm. Black Rock Grill every day.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Sunday Carvery', detail: 'Adult £10.95', to: '/dining#carvery' },
                  { label: 'Black Rock Grill', detail: 'Steaks from £9.50', to: '/black-rock-grill' },
                  { label: 'Stone Baked Pizzas', detail: 'From £11.00', to: '/menu#pizzas' },
                  { label: 'VINYL Fri & Sat', detail: 'From 6pm', to: '/vinyl-menu' },
                ].map(({ label, detail, to }) => (
                  <Link key={label} to={to} className="group bg-surface-container-low rounded-xl p-4 border border-outline-variant/15 hover:border-primary/30 hover:bg-primary/5 transition-all">
                    <p className="font-medium text-on-surface text-sm">{label}</p>
                    <p className="text-primary text-xs font-label mt-0.5">{detail}</p>
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <CTAButton to="/menu" variant="primary">View Full Menu</CTAButton>
                <CTAButton to="/contact" variant="outline">Book a Table</CTAButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 reveal-right">
              {[
                { src: '/images/dining-carvery.webp', alt: 'Sunday Carvery at The White Hart', label: 'Sunday Carvery' },
                { src: '/images/dining-blackrock.webp', alt: 'Black Rock Grill at The White Hart', label: 'Black Rock Grill' },
                { src: '/images/dining-pizza.webp', alt: 'Stone baked pizza at The White Hart', label: 'Stone Baked Pizza' },
                { src: '/images/dining-vinyl-interior.webp', alt: 'VINYL restaurant interior', label: 'VINYL' },
              ].map(({ src, alt, label }) => (
                <div key={label} className="relative aspect-square rounded-xl overflow-hidden group">
                  <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={400} height={400} />
                  <div className="absolute inset-0 image-overlay" />
                  <p className="absolute bottom-2 left-3 font-headline italic text-white text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6 · VINYL BREAK (biggest differentiator — show it early) ══ */}
      <div className="relative h-[38vh] md:h-[55vh] min-h-[220px] md:min-h-[340px] overflow-hidden">
        <picture>
          <source srcSet="/images/dining-vinyl-interior.webp" type="image/webp" />
          <img src="/images/dining-vinyl-interior.jpg" alt="VINYL restaurant interior at The White Hart" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        </picture>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-label uppercase tracking-[0.5em] text-white/40 text-[9px] mb-3">Friday &amp; Saturday from 6pm</p>
          <p className="font-headline italic text-white hero-text-shadow" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)', lineHeight: 0.88 }}>VINYL</p>
          <p className="font-headline italic text-white/50 mt-1.5" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.5rem)' }}>@ The White Hart</p>
          <p className="text-white/40 text-xs font-label mt-2 max-w-xs">Steaks · Ribs · Burgers · Pizza · DJ Sets</p>
          <Link to="/vinyl-menu" className="mt-6 font-label uppercase tracking-[0.3em] text-[10px] text-[#e6c487] border border-[#e6c487]/35 px-5 py-2.5 rounded-full hover:border-[#e6c487]/75 transition-all duration-300">
            View the Menu
          </Link>
        </div>
      </div>

      {/* ══ 7 · SOCIAL PROOF (convert after interest is established) ══ */}
      <TestimonialStrip />
      <ReviewBadge />

      {/* ══ 8 · ROOMS (secondary commercial offering) ══ */}
      <section className="py-10 md:py-20 bg-surface-container-low" aria-label="Boutique Rooms">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="grid grid-cols-2 gap-3 reveal-left order-2 lg:order-1">
              {[
                { src: '/images/room-hart.webp', name: 'The Hart Room' },
                { src: '/images/room-merchants.webp', name: "Merchant's Room" },
                { src: '/images/room-attic.webp', name: 'The Attic' },
                { src: '/images/room-snug.webp', name: 'The Snug' },
              ].map(({ src, name }) => (
                <Link
                  key={name}
                  to="/rooms#book"
                  className="relative aspect-square rounded-xl overflow-hidden group block"
                  aria-label={`View ${name} and book`}
                >
                  <img src={src} alt={`${name} at The White Hart Hotel`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={400} height={400} />
                  <div className="absolute inset-0 image-overlay" />
                  <p className="absolute bottom-2 left-3 font-headline italic text-white text-xs">{name}</p>
                  <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-primary/90 text-on-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </span>
                </Link>
              ))}
            </div>
            <div className="space-y-5 reveal-right order-1 lg:order-2">
              <SectionHeading label="Stay With Us" title="Boutique Rooms" />
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Six characterful rooms in a historic coaching inn. Wake up to a proper Devon breakfast, walk to the market square, and come back to a pint at the bar. Simple pleasures, done well.
              </p>
              <div className="flex gap-4">
                <div className="bg-surface rounded-xl p-4 text-center border border-outline-variant/15 flex-1">
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">From</p>
                  <p className="font-headline italic text-primary text-2xl">£58</p>
                  <p className="font-label text-[10px] text-on-surface-variant">per night</p>
                </div>
                <div className="bg-surface rounded-xl p-4 text-center border border-outline-variant/15 flex-1">
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Rooms</p>
                  <p className="font-headline italic text-primary text-2xl">6</p>
                  <p className="font-label text-[10px] text-on-surface-variant">all en-suite</p>
                </div>
                <div className="bg-surface rounded-xl p-4 text-center border border-outline-variant/15 flex-1">
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Breakfast</p>
                  <p className="font-headline italic text-primary text-2xl">✓</p>
                  <p className="font-label text-[10px] text-on-surface-variant">optional extra</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <CTAButton to="/rooms" variant="primary">See All Rooms</CTAButton>
                <CTAButton to="/contact" variant="outline">Book Direct</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9 · 1591 BREAK (heritage story for engaged scrollers) ══ */}
      <div className="dark-section relative overflow-hidden py-16 md:py-28">
        {/* Gradient wash to frame the watermark */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0) 60%)' }}
        />
        {/* Giant 1591 watermark — stronger gold, gradient text */}
        <p
          className="font-headline italic text-center select-none pointer-events-none leading-none absolute inset-0 flex items-center justify-center"
          style={{
            fontSize: 'clamp(7rem, 32vw, 28rem)',
            letterSpacing: '-0.04em',
            background: 'linear-gradient(180deg, rgba(230,196,135,0.38) 0%, rgba(201,169,110,0.22) 50%, rgba(158,124,60,0.1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 80px rgba(201,169,110,0.08)',
          }}
          aria-hidden="true"
        >
          1591
        </p>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-4 md:py-8">
          <p className="font-label uppercase tracking-[0.55em] text-[#e6c487]/90 text-[11px] mb-5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
            Continuously serving since
          </p>
          <p
            className="font-headline italic leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            style={{ fontSize: 'clamp(1.7rem, 5vw, 4.2rem)' }}
          >
            Four centuries of welcome.
          </p>
          <div className="w-16 h-px bg-[#e6c487]/50 mt-7 mb-7" />
          <CTAButton to="/our-story" variant="outline" className="border-[#e6c487]/60 text-white bg-black/25 backdrop-blur-sm hover:bg-[#e6c487]/20 hover:border-[#e6c487] text-xs px-6 py-3">
            Our Story
          </CTAButton>
        </div>
      </div>

      {/* ══ 10 · OUR STORY (brand depth for committed scrollers) ══ */}
      <section className="py-10 md:py-28 px-6 md:px-8 bg-surface-container-lowest relative overflow-hidden" aria-label="Our Story">
        <DeerMotif className="absolute top-10 right-10 text-on-surface hidden md:block" size={260} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="relative reveal-left">
            <div className="aspect-[3/2] md:aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl shadow-xl relative z-10 img-zoom">
              <picture>
                <source srcSet="/images/story-interior.webp" type="image/webp" />
                <img src="/images/story-interior.jpg" alt="The historic interior of The White Hart Hotel" className="w-full h-full object-cover" loading="lazy" width={640} height={800} />
              </picture>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-64 bg-surface-container-high z-0 hidden md:block rounded-2xl" aria-hidden="true" />
          </div>
          <div className="space-y-5 md:space-y-8 reveal-right">
            <SectionHeading label="Four Centuries of Welcome" title="Our Story" />
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-light">
              The White Hart dates back to 1591 — the hart on our facade to the reign of Richard&nbsp;II. In 1982, Richard and Annette Hutchings purchased the hotel; in 2005, their son Jon and wife Tam took over. Jon — a former Royal Navy serviceman and the current Mayor of Holsworthy — has dedicated his life to both the hotel and the town. Four decades on, the Hutchings family remains at the heart of Holsworthy.
            </p>
            <Link to="/our-story" className="inline-flex items-center text-primary font-label uppercase tracking-widest text-xs md:text-sm group link-slide">
              Discover the Legacy
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 11 · PLAN YOUR VISIT (committed users ready to act) ══ */}
      <section className="py-10 md:py-20 px-6 md:px-8 bg-surface-container-low border-t border-outline-variant/10" aria-label="Plan Your Visit">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline italic text-on-surface mb-6 md:mb-10" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
            Plan Your Visit
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="w-full md:max-w-xs space-y-3 reveal-left">
              <a href={CONTACT.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-on-surface hover:text-primary transition-colors text-sm">
                <svg className="w-4 h-4 mr-3 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {CONTACT.address.street}, {CONTACT.address.town}, {CONTACT.address.postcode}
              </a>
              <a href={CONTACT.phoneHref} className="flex items-center text-on-surface hover:text-primary transition-colors text-sm">
                <svg className="w-4 h-4 mr-3 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT.phone}
              </a>
              <div className="pt-2">
                <CTAButton to="/contact" variant="primary" className="text-xs px-6 py-3">Book a Table</CTAButton>
              </div>
            </div>
            <div className="w-full md:flex-1 reveal-right">
              <HoursAccordion />
            </div>
          </div>
        </div>
      </section>

      <SchemaOrg type="LocalBusiness" />
    </>
  );
}
