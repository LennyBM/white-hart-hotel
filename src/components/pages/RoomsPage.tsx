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
      <SEOHead page="rooms" />
      <SchemaOrg type="Hotel" />

      {/* ══ HERO — shorter on mobile ══ */}
      <section className="relative h-[42vh] md:h-[58vh] min-h-[240px] md:min-h-[360px] flex items-end overflow-hidden">
        <img src="/images/room-holsworthy.webp" alt="Boutique room at The White Hart Hotel" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchPriority="high" width={1920} height={1080} />
        <div className="absolute inset-0 image-overlay-heavy" />
        <div className="relative max-w-7xl mx-auto px-6 pb-8 md:pb-14 w-full text-over-image">
          <p className="font-label uppercase tracking-[0.3em] text-primary text-[10px] font-medium mb-2">Est. 1591</p>
          <h1 className="font-headline italic text-white leading-tight" style={{ fontSize: 'clamp(2rem, 7vw, 5rem)' }}>Historic Retreats</h1>
          <p className="text-white/65 text-sm md:text-base max-w-md mt-2 font-light hidden md:block">Six individually styled rooms in a 17th-century coaching inn.</p>
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

      {/* ══ BOOKING WIDGET ══ */}
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
          <div className="rounded-2xl overflow-hidden border border-outline-variant/15 shadow-lg bg-white reveal reveal-d1">
            <iframe
              src={CONTACT.bookingWidget}
              title="Book a room at The White Hart Hotel"
              className="w-full border-0"
              style={{ minHeight: '700px' }}
              loading="lazy"
              allow="payment"
            />
          </div>
          <p className="text-center text-on-surface-variant text-xs mt-6">
            Prefer to speak to someone? Call{' '}
            <a href={CONTACT.phoneHref} className="text-primary font-semibold hover:underline underline-offset-4">
              {CONTACT.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
