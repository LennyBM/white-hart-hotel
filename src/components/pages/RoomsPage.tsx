import { useState } from 'react';
import { SEOHead } from '../ui/SEOHead';
import { SchemaOrg } from '../ui/SchemaOrg';
import { ReviewBadge } from '../ui/ReviewBadge';

import { CONTACT } from '../../constants/contact';
import { rooms, amenities } from '../../data/rooms';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function AmenityIcon({ icon }: { icon: string }) {
  const cls = 'w-5 h-5 text-primary';
  switch (icon) {
    case 'tv': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" /></svg>;
    case 'coffee': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>;
    case 'wifi': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>;
    default: return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>;
  }
}

const detailItems = [
  {
    id: 'amenities',
    title: 'In Every Room',
    content: (
      <div className="grid grid-cols-2 gap-3 pt-3">
        {amenities.map((a) => (
          <div key={`${a.icon}-${a.label}`} className="flex items-center gap-2">
            <AmenityIcon icon={a.icon} />
            <span className="text-on-surface text-sm">{a.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'breakfast',
    title: 'Full English Breakfast',
    content: (
      <div className="pt-3 space-y-2">
        <p className="text-on-surface-variant text-sm leading-relaxed">Locally sourced bacon, sausages, eggs and toast. Served 7:30–9:30 am.</p>
        <p className="text-primary font-medium text-sm">£9.50 per person — optional extra</p>
      </div>
    ),
  },
  {
    id: 'parking',
    title: 'Parking',
    content: (
      <ul className="pt-3 space-y-1.5 text-on-surface-variant text-sm">
        <li>• No on-site parking</li>
        <li>• Pay & Display car park, 2 min walk</li>
        <li>• Free parking 6 pm – 8 am</li>
      </ul>
    ),
  },
  {
    id: 'pets',
    title: 'Pet Friendly',
    content: <p className="pt-3 text-on-surface-variant text-sm">Well-behaved dogs welcome. Just let us know when you book.</p>,
  },
  {
    id: 'location',
    title: 'Central Holsworthy',
    content: <p className="pt-3 text-on-surface-variant text-sm">Right on Fore Street. Walk to shops, pubs and the famous Wednesday pannier market.</p>,
  },
];

function DetailsAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="space-y-2">
      {detailItems.map((item) => (
        <div key={item.id} className="border border-outline-variant/20 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full flex items-center justify-between px-5 py-4 bg-surface-container text-left"
            aria-expanded={open === item.id}
          >
            <span className="font-label text-sm font-semibold text-on-surface">{item.title}</span>
            <svg className={`w-4 h-4 text-primary transition-transform duration-200 flex-shrink-0 ${open === item.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === item.id && (
            <div className="px-5 pb-4 bg-surface-container-low">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const exploreItems = [
  { name: 'Bude & Widemouth Bay', distance: '9 miles', desc: 'Stunning surf beaches just 20 minutes away along the South West Coast Path.' },
  { name: 'RHS Garden Rosemoor', distance: '16 miles', desc: '65 acres of award-winning Royal Horticultural Society gardens.' },
  { name: 'Dartmoor National Park', distance: '25 miles', desc: 'Wild moorland, ancient tors and picture-postcard villages.' },
  { name: 'Holsworthy Market', distance: 'Town centre', desc: "Wednesday Pannier Market plus one of the UK's biggest weekly livestock markets." },
  { name: 'Roadford Lake', distance: '10 miles', desc: "Watersports, fishing and lakeside walks at Devon's largest reservoir." },
  { name: 'Launceston Castle', distance: '14 miles', desc: 'Dramatic Norman castle with panoramic views over the Cornish border.' },
];

export default function RoomsPage() {
  useScrollReveal();

  return (
    <>
      <SEOHead page="rooms" breadcrumbs={[{ name: "Rooms", url: `/rooms` }]} />
      <SchemaOrg type="Hotel" />

      {/* ══ HERO — exterior facade background, centred editorial content ══ */}
      <section className="relative h-[50vh] md:h-[66vh] min-h-[320px] md:min-h-[440px] flex items-center justify-center overflow-hidden">
        {/* Background image: the white hart exterior */}
        <picture>
          <source srcSet="/images/hero-exterior.webp" type="image/webp" />
          <img
            src="/images/hero-exterior.jpg"
            alt="The White Hart Hotel exterior on Fore Street, Holsworthy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 55%' }}
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </picture>

        {/* Darkening vignette for text legibility */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(14,10,6,0.35) 0%, rgba(14,10,6,0.78) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,10,6,0.55) 0%, rgba(14,10,6,0.25) 35%, rgba(14,10,6,0.35) 65%, rgba(14,10,6,0.85) 100%)',
          }}
        />

        {/* Top gold hairline */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #9E7C3C 20%, #e6c487 50%, #9E7C3C 80%, transparent 100%)',
          }}
        />

        {/* Centred editorial content with framed box */}
        <div className="relative z-10 w-full px-6 text-over-image">
          <div className="max-w-2xl mx-auto text-center">
            {/* Top flourish */}
            <div className="flex items-center justify-center gap-4 mb-6 hero-animate hero-animate-1">
              <div className="h-px bg-[#e6c487] w-10 md:w-20" />
              <p className="font-label uppercase tracking-[0.55em] text-[#e6c487] text-[11px] md:text-[12px] font-semibold whitespace-nowrap drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Est.&nbsp;1591
              </p>
              <div className="h-px bg-[#e6c487] w-10 md:w-20" />
            </div>

            <h1
              className="font-headline italic text-white leading-[1] drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] hero-animate hero-animate-2"
              style={{ fontSize: 'clamp(2.6rem, 8vw, 5.5rem)' }}
            >
              Historic Retreats
            </h1>

            {/* Subtitle */}
            <p className="mt-5 md:mt-7 text-white/90 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] hero-animate hero-animate-3">
              Six individually styled rooms in a Grade&nbsp;II listed coaching inn — at the heart of Holsworthy since 1591.
            </p>

            {/* Bottom flourish + CTAs */}
            <div className="mt-7 md:mt-9 flex flex-col items-center gap-5 hero-animate hero-animate-4">
              <div className="flex items-center gap-3">
                <div className="h-px bg-[#e6c487]/60 w-10" />
                <svg className="w-2.5 h-2.5 text-[#e6c487]" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M6 0l6 6-6 6-6-6z" />
                </svg>
                <div className="h-px bg-[#e6c487]/60 w-10" />
              </div>
              <a
                href="#book"
                className="inline-flex items-center gap-2 bg-[#e6c487] text-[#221E1A] px-7 py-3.5 rounded-md font-label font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors shadow-xl"
              >
                Check Availability
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReviewBadge />

      {/* ══ ROOMS GRID ══ */}
      <section className="bg-surface-container-low py-10 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-14 reveal">
            <div className="space-y-2">
              <p className="font-label uppercase tracking-[0.3em] text-primary text-[10px] font-medium">Rooms &amp; Rates</p>
              <h2 className="font-headline italic text-on-surface leading-tight" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>Rooms of Character</h2>
              <p className="text-on-surface-variant text-sm">From <span className="text-primary font-medium">£58</span> / night</p>
            </div>
            <div className="glass-card luminous-border bg-surface-container rounded-xl px-5 py-3 text-center md:text-right flex-shrink-0 reveal reveal-d1">
              <p className="font-label uppercase tracking-widest text-[10px] text-primary font-bold mb-1">Book Direct for Best Price</p>
              <a href={CONTACT.phoneHref} className="text-on-surface font-headline italic text-lg hover:text-primary transition-colors">{CONTACT.phone}</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {rooms.map((room, i) => (
              <article key={room.id} className={`reveal reveal-d${Math.min(i + 1, 6)} group bg-surface-container rounded-xl overflow-hidden glass-card-hover`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={room.image} alt={room.imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={600} height={400} />
                  {room.featured && (
                    <div className="absolute top-3 left-3 bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest font-bold">Signature Attic</div>
                  )}
                </div>
                <div className="p-4 md:p-5 space-y-2">
                  <h3 className="font-headline italic text-xl text-on-surface">{room.name}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">{room.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {room.features.map((f) => (
                      <span key={f} className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
                    <span className="text-on-surface-variant text-xs">Sleeps {room.sleeps} · {room.bedType}</span>
                    <p className="text-primary font-medium text-sm">£{room.price}<span className="text-on-surface-variant font-normal text-xs">/night</span></p>
                  </div>
                  <a href="#book" className="block w-full text-center bg-primary/10 text-primary py-2.5 rounded-md font-label text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 min-h-[44px] flex items-center justify-center">
                    Book This Room
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPLORE DEVON — horizontal scroll on mobile ══ */}
      <section className="py-10 md:py-20 bg-surface-container">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-headline italic text-on-surface mb-2" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>Explore Devon</h2>
          <p className="text-on-surface-variant text-sm mb-6">Holsworthy is the perfect base for North Devon and the Cornwall border.</p>
          {/* Mobile: horizontal scroll */}
          <div className="mobile-scroll md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {exploreItems.map((place) => (
              <div key={place.name} className="mobile-scroll-item w-[72vw] md:w-auto bg-surface-container-high p-4 md:p-5 rounded-xl flex-shrink-0">
                <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-1">{place.distance}</p>
                <h3 className="font-headline italic text-base mb-1">{place.name}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DETAILS — accordion on mobile, grid on desktop ══ */}
      <section className="bg-surface-container-lowest py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-12">
            <p className="font-label uppercase tracking-[0.3em] text-primary text-[10px] font-medium mb-3">Everything You Need</p>
            <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>The Details</h2>
          </div>
          {/* Mobile accordion */}
          <div className="md:hidden">
            <DetailsAccordion />
          </div>
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="md:col-span-2 lg:col-span-2 glass-card luminous-border bg-surface-container rounded-2xl p-8">
              <p className="font-label uppercase tracking-widest text-xs text-primary font-medium mb-5">In Every Room</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {amenities.map((amenity) => (
                  <div key={`${amenity.icon}-${amenity.label}`} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0">
                      <AmenityIcon icon={amenity.icon} />
                    </div>
                    <span className="text-on-surface text-sm font-medium">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container rounded-2xl p-7">
              <h3 className="font-headline italic text-xl text-on-surface mb-2">Full English Breakfast</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-3">Locally sourced bacon, sausages, eggs and toast. Served 7:30–9:30 am.</p>
              <p className="text-primary font-medium text-sm">£9.50 per person — optional extra</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-7">
              <h3 className="font-headline italic text-xl text-on-surface mb-2">Parking</h3>
              <ul className="space-y-1.5 text-on-surface-variant text-sm">
                <li>• No on-site parking</li>
                <li>• Pay & Display, 2 min walk</li>
                <li>• Free parking 6 pm – 8 am</li>
              </ul>
            </div>
            <div className="bg-surface-container rounded-2xl p-7 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" /></svg>
              </div>
              <div>
                <h3 className="font-headline italic text-xl text-on-surface mb-1">Pet Friendly</h3>
                <p className="text-on-surface-variant text-sm">Well-behaved dogs welcome.</p>
              </div>
            </div>
            <div className="bg-surface-container rounded-2xl p-7">
              <h3 className="font-headline italic text-xl text-on-surface mb-2">Central Holsworthy</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Right on Fore Street. Walk to shops, pubs and the famous Wednesday market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PACKAGES ══ */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline italic text-on-surface mb-6 md:mb-10 text-center" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Make It Special</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { emoji: '🍽️', title: 'Dinner, Bed & Breakfast', desc: 'Add a two-course dinner to your stay.' },
              { emoji: '🥂', title: 'Celebration Package', desc: 'Birthdays, anniversaries, proposals.' },
            ].map((p) => (
              <div key={p.title} className="glass-card bg-surface-container p-5 rounded-xl text-center">
                <p className="text-2xl mb-3">{p.emoji}</p>
                <h3 className="font-headline italic text-lg mb-2">{p.title}</h3>
                <p className="text-on-surface-variant text-sm mb-3">{p.desc}</p>
                <a href={CONTACT.phoneHref} className="text-primary font-label text-xs uppercase tracking-widest font-bold">Call to Book</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOOKING ══ */}
      <section id="book" className="bg-surface-container-lowest py-14 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12 reveal">
            <p className="font-label uppercase tracking-[0.3em] text-primary text-[10px] font-medium mb-3">Book Your Stay</p>
            <h2 className="font-headline italic text-on-surface leading-tight mb-3" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>
              Check Availability &amp; Book
            </h2>
            <p className="text-on-surface-variant text-sm font-light max-w-md mx-auto">
              Book directly for the best available rate — no middlemen, no booking fees.
            </p>
          </div>

          {/* Direct booking options — always visible, guaranteed to work */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 reveal reveal-d1">
            <a
              href={CONTACT.phoneHref}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-lg"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div className="text-center">
                <p className="font-label uppercase tracking-widest text-xs font-bold mb-1">Call to Book</p>
                <p className="font-headline italic text-lg leading-tight">{CONTACT.phone}</p>
                <p className="text-on-primary/70 text-xs mt-1">Best rate guaranteed</p>
              </div>
            </a>

            <a
              href={CONTACT.emailHref}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface border border-outline-variant/20 hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
            >
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div className="text-center">
                <p className="font-label uppercase tracking-widest text-xs font-bold text-on-surface mb-1">Email Us</p>
                <p className="font-headline italic text-base text-primary leading-tight">{CONTACT.email}</p>
                <p className="text-on-surface-variant text-xs mt-1">We reply same day</p>
              </div>
            </a>

            <a
              href={CONTACT.bookingCom}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface border border-outline-variant/20 hover:border-[#003580]/30 hover:bg-[#003580]/5 transition-all shadow-sm"
            >
              <svg className="w-7 h-7 text-[#003580]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.4 8.3c-.4-.5-1-.8-1.8-.8H12V5h-2v12h2v-4h3.6c.8 0 1.4-.3 1.8-.8.4-.5.6-1.1.6-1.9v-1c0-.8-.2-1.5-.6-2zM16 13.2c0 .4-.1.7-.3.9-.2.2-.5.3-.9.3H12V9.5h2.8c.4 0 .7.1.9.3.2.2.3.5.3.9v2.5z" />
              </svg>
              <div className="text-center">
                <p className="font-label uppercase tracking-widest text-xs font-bold text-on-surface mb-1">Booking.com</p>
                <p className="text-on-surface-variant text-xs leading-tight">Check availability &amp; book online</p>
                <p className="text-[#003580] text-xs mt-1 font-medium">Book via Booking.com →</p>
              </div>
            </a>
          </div>

          {/* Inline widget — shown as bonus if it works */}
          <details className="reveal reveal-d2">
            <summary className="cursor-pointer text-center font-label uppercase tracking-widest text-xs text-on-surface-variant hover:text-primary transition-colors py-3 select-none">
              Try online booking widget ↓
            </summary>
            <div className="mt-4 rounded-2xl overflow-hidden border border-outline-variant/15 shadow-lg bg-white">
              <iframe
                src={CONTACT.bookingWidget}
                title="Book a room at The White Hart Hotel"
                className="w-full border-0"
                style={{ minHeight: '700px' }}
                loading="lazy"
                allow="payment"
              />
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
