import { Link } from 'react-router-dom';
import { SEOHead } from '../ui/SEOHead';
import { SchemaOrg } from '../ui/SchemaOrg';
import { SectionHeading } from '../ui/SectionHeading';
import { CTAButton } from '../ui/CTAButton';
import { DeerMotif } from '../ui/DeerMotif';
import { CONTACT } from '../../constants/contact';
import { barHighlights, vinylTracklist, barFavourites } from '../../data/menuHighlights';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ───────────────────────────────────────────
   Dining Page — The Bar + VINYL Restaurant
   ─────────────────────────────────────────── */

export default function DiningPage() {
  useScrollReveal();

  return (
    <>
      <SEOHead page="dining" />
      <SchemaOrg type="Restaurant" />

      {/* ════════════════════════════════════
          ZONE 1 — THE BAR
          ════════════════════════════════════ */}
      <section className="relative bg-surface-container-low overflow-hidden">
        {/* Heritage deer motif — top-right, faint */}
        <div className="absolute top-12 right-12 opacity-5 pointer-events-none select-none">
          <DeerMotif size={360} className="text-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* ── Left column: Copy ── */}
            <div className="lg:col-span-5 space-y-5 md:space-y-8 reveal">
              <SectionHeading
                label="Traditional Comfort"
                title="The Bar"
                subtitle="The heart and hearth of Holsworthy. Locals, visitors and well-behaved dogs gather here for award-worthy home cooking, West Country ales and a warm welcome that stretches back four centuries."
              />

              {/* Serving times */}
              <div className="space-y-3 reveal reveal-d1">
                <h3 className="font-label uppercase tracking-widest text-xs text-primary font-medium">
                  Kitchen Serving Times
                </h3>
                <div className="flex flex-col gap-1 text-on-surface-variant text-sm leading-relaxed">
                  <p>
                    <span className="font-medium text-on-surface">Lunch</span>{' '}
                    11 am &ndash; 2:30 pm
                  </p>
                  <p>
                    <span className="font-medium text-on-surface">Dinner</span>{' '}
                    6 pm &ndash; 8:30 pm
                  </p>
                  <p className="text-xs text-on-surface-variant/70 italic mt-1">
                    No kitchen Sunday evening
                  </p>
                  <p className="text-sm text-on-surface-variant mt-3">
                    Reservations:{' '}
                    <a
                      href={CONTACT.phoneHref}
                      className="text-primary font-medium hover:underline underline-offset-4"
                    >
                      {CONTACT.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 reveal reveal-d2">
                <CTAButton to="/contact" variant="primary">
                  Book a Table
                </CTAButton>
                <CTAButton
                  to="/contact"
                  variant="outline"
                  ariaLabel="Book a table at VINYL restaurant"
                  className="btn-glow"
                >
                  Book VINYL
                </CTAButton>
              </div>

              {/* Popular dishes callout */}
              <div className="border-t border-outline-variant/20 pt-6 reveal reveal-d3">
                <p className="font-label uppercase tracking-[0.25em] text-primary text-[10px] font-medium mb-5">
                  Locals' Favourites
                </p>
                <div className="space-y-3">
                  {barFavourites.map((dish, i) => (
                    <div key={dish} className="flex items-baseline gap-3">
                      <span className="font-headline italic text-primary/60 text-lg">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-headline italic text-on-surface text-lg">{dish}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cask Marque */}
              <div className="mt-6 flex items-center gap-2.5 text-on-surface-variant reveal">
                <svg className="w-4 h-4 text-[#C68B2C]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                </svg>
                <p className="font-label text-sm">
                  <span className="text-primary font-semibold">Cask Marque Certified</span>
                  <span className="text-on-surface-variant"> — Sharp's Doom Bar plus rotating West Country guest ales</span>
                </p>
              </div>
            </div>

            {/* ── Right column: Images ── */}
            <div className="lg:col-span-7 reveal-right">
              {/* Mobile: single wide image */}
              <Link to="/dining#carvery" className="lg:hidden group relative rounded-xl overflow-hidden aspect-[16/9] block">
                <img src="/images/dining-carvery.webp" alt={barHighlights[0].description} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={450} />
                <div className="absolute inset-0 image-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-over-image">
                  <p className="font-label uppercase tracking-widest text-[10px] text-primary-fixed-dim mb-0.5">Every Sunday</p>
                  <h3 className="font-headline italic text-lg text-white">{barHighlights[0].title}</h3>
                </div>
              </Link>
              {/* Desktop: 3-image grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <Link to="/dining#carvery" className="row-span-2 group relative rounded-2xl overflow-hidden glass-card glass-card-hover block">
                  <img src="/images/dining-carvery.webp" alt={barHighlights[0].description} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={600} height={800} />
                  <div className="absolute inset-0 image-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-over-image">
                    <p className="font-label uppercase tracking-widest text-xs text-primary-fixed-dim mb-1">Every Sunday</p>
                    <h3 className="font-headline italic text-xl text-white">{barHighlights[0].title}</h3>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2">{barHighlights[0].description}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">
                      View Details
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </span>
                  </div>
                </Link>
                <Link to="/black-rock-grill" className="group relative rounded-2xl overflow-hidden aspect-[4/3] glass-card glass-card-hover block">
                  <img src="/images/dining-blackrock.webp" alt={barHighlights[1].description} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={600} />
                  <div className="absolute inset-0 image-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-over-image">
                    <h3 className="font-headline italic text-lg text-white">{barHighlights[1].title}</h3>
                    <span className="mt-1 inline-flex items-center gap-1 font-label text-[9px] uppercase tracking-widest text-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </span>
                  </div>
                </Link>
                <Link to="/menu" className="group relative rounded-2xl overflow-hidden aspect-[4/3] glass-card glass-card-hover block">
                  <img src="/images/dining-pizza.webp" alt={barHighlights[2].description} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={600} />
                  <div className="absolute inset-0 image-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-over-image">
                    <h3 className="font-headline italic text-lg text-white">{barHighlights[2].title}</h3>
                    <span className="mt-1 inline-flex items-center gap-1 font-label text-[9px] uppercase tracking-widest text-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity">
                      View Menu <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          WEEKLY SCHEDULE STRIP
          ════════════════════════════════════ */}
      <section className="py-5 md:py-10 px-4 md:px-8 bg-surface-container relative mesh-warm border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-label uppercase tracking-[0.2em] text-primary text-[10px] mb-4 text-center">Weekly at The White Hart</h3>
          {/* Horizontal scroll on mobile, flex-wrap on desktop */}
          <div className="mobile-scroll md:flex md:flex-wrap md:justify-center md:gap-10 px-1">
            {[
              { day: 'Tue', event: 'Poker Night 8pm', icon: '♠️', to: '/whats-on/poker' },
              { day: 'Wed', event: 'Steak Night', icon: '🥩', to: '/black-rock-grill' },
              { day: 'Thu', event: 'Pensioner Lunch', icon: '🍽️', to: '/menu' },
              { day: 'Fri', event: 'VINYL Opens 6pm', icon: '🎵', to: '/vinyl-menu' },
              { day: 'Sat', event: 'VINYL + Karaoke', icon: '🎤', to: '/whats-on/karaoke' },
              { day: 'Sun', event: 'Carvery 12–3:30', icon: '🍖', to: '/dining#carvery' },
            ].map((item) => (
              <Link key={item.day} to={item.to} className="mobile-scroll-item text-center min-w-[80px] md:min-w-0 group hover:opacity-75 transition-opacity">
                <span className="text-xl block mb-1">{item.icon}</span>
                <p className="font-headline italic text-base text-on-surface group-hover:text-primary transition-colors">{item.day}</p>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">{item.event}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SUNDAY CARVERY (highest weekly revenue — goes above VINYL)
          ════════════════════════════════════ */}
      <section id="carvery" className="bg-surface py-10 md:py-20 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <picture>
                <source srcSet="/images/dining-carvery.webp" type="image/webp" />
                <img src="/images/dining-carvery.webp" alt="Sunday Carvery at The White Hart Holsworthy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={600} />
              </picture>
              <div className="absolute inset-0 image-overlay" />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-4 py-2 rounded-lg">
                <p className="font-label uppercase tracking-widest text-[10px] font-bold">Every Sunday</p>
                <p className="font-headline italic text-lg leading-tight">12 – 3:30pm</p>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-3">Every Sunday · 12–3:30pm</p>
                <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>Traditional Sunday Carvery</h2>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Devon's favourite Sunday ritual. Fresh-carved roasts with all the trimmings — proper roast potatoes, seasonal vegetables and generous Yorkshire puddings. No booking necessary, but advised.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 bg-surface-container-low rounded-xl p-4 text-center border border-outline-variant/20">
                  <p className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant mb-1">Adult</p>
                  <p className="font-headline italic text-primary text-3xl">£10.95</p>
                </div>
                <div className="flex-1 bg-surface-container-low rounded-xl p-4 text-center border border-outline-variant/20">
                  <p className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant mb-1">Child</p>
                  <p className="font-headline italic text-primary text-3xl">£5.95</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <CTAButton to="/contact" variant="primary">Reserve Your Carvery</CTAButton>
                <CTAButton to="/menu" variant="outline">Full Menu</CTAButton>
              </div>
              <p className="text-on-surface-variant/60 text-xs font-label">No kitchen Sunday evening · Booking advised but not essential</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          KIDS MENU
          ════════════════════════════════════ */}
      <section className="bg-surface-container-low py-10 md:py-14 border-y border-outline-variant/15 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-2">Under 12s</p>
              <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>Children's Menu</h2>
              <p className="text-on-surface-variant text-sm mt-1 font-light">Every child gets a free colouring set with their meal</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: '4oz Steak & Chips', price: '£9.50' },
              { name: 'Sausage, Egg & Chips', price: '£5.00' },
              { name: 'Chicken Nuggets & Chips', price: '£6.00' },
              { name: 'Ham, Egg & Chips', price: '£5.00' },
            ].map(({ name, price }) => (
              <div key={name} className="bg-surface rounded-xl p-4 text-center border border-outline-variant/15">
                <p className="font-medium text-on-surface text-sm mb-2">{name}</p>
                <p className="font-headline italic text-primary text-xl">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          ZONE 2 — VINYL RESTAURANT
          ════════════════════════════════════ */}
      <section className="dark-section relative overflow-hidden">
        {/* Vinyl record rings — visible on dark bg */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full border border-[#c9a96e]/8" />
          <div className="absolute -top-32 -left-32 w-[380px] h-[380px] rounded-full border border-[#c9a96e]/6" />
          <div className="absolute -top-32 -left-32 w-[260px] h-[260px] rounded-full border border-[#c9a96e]/5" />
          <div className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full border border-[#c9a96e]/8" />
          <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full border border-[#c9a96e]/6" />
          <div className="absolute -bottom-40 -right-40 w-[340px] h-[340px] rounded-full border border-[#c9a96e]/5" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-24 relative">
          {/* VINYL hero headline */}
          <div className="text-center mb-8 md:mb-14 reveal">
            <p className="font-label uppercase tracking-[0.5em] text-[#c9a96e]/60 text-[11px] font-medium mb-5">
              Friday &amp; Saturday from 6 pm
            </p>
            <h2
              className="font-headline italic text-[#F5F1EA] leading-none tracking-tight hero-text-shadow"
              style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
            >
              VINYL
            </h2>
            <p className="font-headline italic text-[#F5F1EA]/45 mt-3" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
              Restaurant &amp; Groove
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* ── The Tracklist ── */}
            <div className="reveal-left">
              <div className="rounded-2xl p-8 lg:p-10 space-y-8 border border-[#c9a96e]/12 bg-white/3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div>
                  <p className="font-label uppercase tracking-widest text-[11px] text-[#c9a96e] font-semibold mb-2">
                    The Tracklist
                  </p>
                  <div className="w-10 h-px bg-[#c9a96e]/30" />
                </div>

                {vinylTracklist.map((track, i) => (
                  <div key={track.side} className={`reveal reveal-d${i + 1} space-y-2`}>
                    <p className="font-label uppercase tracking-widest text-[10px] text-[#c9a96e]/55 font-bold">
                      {track.side}
                    </p>
                    <h3 className="font-headline italic text-2xl text-[#F5F1EA]">
                      {track.title}
                    </h3>
                    <p className="text-[#F5F1EA]/55 text-sm leading-relaxed">
                      {track.description}
                    </p>
                    {i < vinylTracklist.length - 1 && (
                      <div className="border-b border-[#c9a96e]/10 pt-4" />
                    )}
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 pl-6 border-l-2 border-[#c9a96e]/30 reveal reveal-d4">
                <p className="font-headline italic text-lg text-[#F5F1EA]/50 leading-relaxed">
                  "Where the needle hits the groove and the glass meets the table."
                </p>
              </blockquote>

              {/* Live DJ callout */}
              <div className="mt-8 flex items-center gap-4 rounded-xl px-6 py-4 border border-[#c9a96e]/12 reveal reveal-d5" style={{ background: 'rgba(201,169,110,0.05)' }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-[#c9a96e]/20">
                  <svg className="w-5 h-5 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V4.875A2.25 2.25 0 0117.122 2.67l3.45.99a.75.75 0 01.528.72v3.87M9 9v10.969" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F5F1EA] font-medium text-sm">Live DJ Sets Every Saturday</p>
                  <p className="text-[#F5F1EA]/45 text-xs mt-0.5">Vinyl-only selectors &mdash; soul, funk &amp; groove</p>
                </div>
              </div>
            </div>

            {/* ── VINYL interior image — hidden on mobile ── */}
            <div className="hidden lg:block reveal-right space-y-8">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="/images/dining-vinyl-interior.webp"
                  alt="VINYL restaurant interior with moody lighting and vinyl record decor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>

              {/* Book CTAs */}
              <div className="text-center reveal reveal-d2 space-y-4">
                <CTAButton to="/contact" variant="primary">
                  Book a Table
                </CTAButton>
                <div>
                  <CTAButton to="/vinyl-menu" variant="outline" className="border-[#c9a96e]/30 text-[#F5F1EA] hover:bg-[#c9a96e]/10 hover:border-[#c9a96e]/60">
                    View the Menu
                  </CTAButton>
                </div>
                <p className="text-[#F5F1EA]/40 text-sm pt-1">
                  Call us:{' '}
                  <a href={CONTACT.phoneHref} className="text-[#c9a96e] hover:underline underline-offset-4">
                    {CONTACT.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FOOD DELIVERY CALLOUT — premium split card
          ════════════════════════════════════ */}
      <section className="bg-surface-container py-10 md:py-16 reveal">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 bg-surface">
            {/* Image side */}
            <div className="md:col-span-2 relative min-h-[220px] md:min-h-0">
              <picture>
                <source srcSet="/images/dining-pizza.webp" type="image/webp" />
                <img
                  src="/images/dining-pizza.jpg"
                  alt="The White Hart takeaway — stone-baked pizza"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={600}
                />
              </picture>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%)' }} />
            </div>
            {/* Content side */}
            <div className="md:col-span-3 p-7 md:p-10 flex flex-col justify-center">
              <p className="font-label uppercase tracking-[0.3em] text-primary text-[10px] font-medium mb-2">Collection &amp; Delivery</p>
              <h2 className="font-headline italic text-on-surface mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}>Fancy a Night In?</h2>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light mb-6">
                The full menu — burgers, stone-baked pizzas, Black Rock steaks, pub classics — delivered within 3 miles of Holsworthy, or ready for collection.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT.justEat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#FF8000] text-white px-5 py-3 rounded-lg font-label font-bold text-xs uppercase tracking-widest hover:bg-[#E67300] transition-colors shadow-sm shadow-[#FF8000]/20"
                >
                  {/* Official-style Just Eat house icon */}
                  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                    <path d="M16 3L3 14v15h9v-9h8v9h9V14L16 3zm-2 13h4v2h-4v-2zm-2-3a4 4 0 018 0v1h-2v-1a2 2 0 00-4 0v1h-2v-1z" />
                  </svg>
                  Order on Just Eat
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary text-xs font-label font-medium transition-colors px-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Or call {CONTACT.phone}
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-outline-variant/15 flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] font-label uppercase tracking-widest text-on-surface-variant/70">
                <span>Delivery 6pm – 8:30pm</span>
                <span className="text-primary/40">·</span>
                <span>3-mile radius</span>
                <span className="text-primary/40">·</span>
                <span>Collection welcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
