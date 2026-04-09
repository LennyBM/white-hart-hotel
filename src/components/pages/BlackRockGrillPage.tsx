import { SEOHead } from '../ui/SEOHead';
import { CTAButton } from '../ui/CTAButton';
import { CONTACT } from '../../constants/contact';

const steaks = [
  { cut: '4oz Rump Steak', price: '£9.50' },
  { cut: '8oz Rump Steak', price: '£15.95' },
  { cut: '8oz Sirloin Steak', price: '£17.95' },
  { cut: '10oz Ribeye', price: '£19.95', highlight: true },
  { cut: '8oz Fillet Steak', price: '£20.95' },
  { cut: 'Lamb Steak', price: '£15.95' },
];

const fish = [
  { name: 'Salmon Steak', description: 'Baked salmon fillet served on a rock', price: '£13.95' },
  { name: 'Prawn Skewers', description: 'King prawns with sliced peppers and onions', price: '£14.95' },
];

const veggie = [
  { name: 'Vegetable Skewers (x2)', description: 'Chunks of plant based Quorn and vegetables on two skewers', price: '£8.00' },
  { name: 'Quorn Chunk Skewers (x2)', description: 'Quorn, mushrooms & peppers', price: '£11.95' },
];

const sauces = [
  { name: 'Jack Daniels BBQ', price: '£2.75' },
  { name: 'Honey & Mustard', price: '£2.50' },
  { name: 'Davidstow Cheddar', price: '£2.75' },
  { name: 'Peppercorn', price: '£2.50' },
];

const sides = [
  { name: 'Sliced Mushrooms', price: 'Raw £1.50 / Cooked £2.50' },
  { name: 'Sliced Onions', price: 'Raw £1.50 / Cooked £2.50' },
  { name: 'Fresh Tomato', price: 'Raw £1.00 / Cooked £1.50' },
  { name: 'Beer Battered Onion Rings', price: '£2.95' },
  { name: 'Add a King Prawn Skewer', price: '£3.50' },
];

export default function BlackRockGrillPage() {
  return (
    <>
      <SEOHead page="black-rock-grill" />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden dark-section">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/dining-blackrock.webp" type="image/webp" />
            <img src="/images/dining-blackrock.webp" alt="Black Rock Grill at The White Hart" className="w-full h-full object-cover opacity-30" loading="eager" fetchPriority="high" width={1920} height={1080} />
          </picture>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(6,4,2,0.7) 0%, rgba(6,4,2,0.5) 50%, rgba(6,4,2,0.85) 100%)' }} />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-16 md:py-28">
          <div className="max-w-2xl">
            <p className="font-label uppercase tracking-[0.45em] text-[#c9a96e] text-[10px] mb-4">Volcanic Rock · 300°C</p>
            <div className="flex items-end gap-4 mb-6">
              <h1 className="font-headline italic text-[#F5F1EA] leading-tight" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
                Black Rock Grill
              </h1>
            </div>
            <p className="text-[#F5F1EA]/70 text-base md:text-lg leading-relaxed font-light mb-2">
              A healthier and tastier way to cook your personal choice of meal at your table. Black rock grill is cooked on a volcanic rock at over 300° — no fat, no oil — allowing you to cook your meal to perfection exactly how you like it.
            </p>
            <p className="text-[#c9a96e]/70 text-sm font-light mb-8">
              All our meat is sourced locally from <strong className="text-[#c9a96e]">Swannacott Manor Meats</strong>. All served with chips, jacket potato or side salad.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px bg-[#c9a96e]/30 flex-1 max-w-[60px]" />
              <p className="text-[#F5F1EA]/40 font-label uppercase tracking-[0.4em] text-[9px]">Cook it just how you like it</p>
              <div className="h-px bg-[#c9a96e]/30 flex-1 max-w-[60px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="bg-surface-container-low py-10 md:py-16 border-b border-outline-variant/15">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[
              { step: '01', title: 'Choose your cut', body: 'Pick your steak, fish or vegetarian option from the menu below.' },
              { step: '02', title: 'The rock arrives', body: 'Your volcanic rock arrives superheated to over 300°C — handle with care, it will burn if touched.' },
              { step: '03', title: 'Cook to perfection', body: 'Simply cut one or two bite-size portions and lay them on the rock to sear. You control the cook.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-4">
                <p className="font-headline italic text-primary/30 text-3xl leading-none shrink-0">{step}</p>
                <div>
                  <p className="font-medium text-on-surface text-sm mb-1">{title}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
            <span className="text-red-600 text-xs font-label uppercase tracking-widest font-bold">⚠ Caution</span>
            <p className="text-red-700 text-xs">Ensure poultry and fish are cooked right through. The rocks have been super heated — they <strong>will</strong> burn if touched.</p>
          </div>
        </div>
      </section>

      {/* ══ STEAKS ══ */}
      <section className="bg-surface py-10 md:py-16 border-b border-outline-variant/15">
        <div className="container mx-auto px-6">
          <h2 className="font-headline italic text-on-surface mb-2" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>Meat</h2>
          <p className="text-on-surface-variant text-sm font-light mb-8">All sourced locally from Swannacott Manor Meats</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {steaks.map(({ cut, price, highlight }) => (
              <div key={cut} className={`flex justify-between items-center p-4 rounded-xl border ${highlight ? 'border-primary/30 bg-primary/5' : 'border-outline-variant/15 bg-surface-container/50'}`}>
                <div>
                  {highlight && <p className="text-primary text-[9px] font-label uppercase tracking-widest mb-0.5">★ Most popular</p>}
                  <p className="font-medium text-on-surface text-sm">{cut}</p>
                </div>
                <p className="font-headline italic text-primary text-lg shrink-0 ml-4">{price}</p>
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant/60 text-xs mt-4 font-label">Add a King Prawn Skewer to any steak — <span className="text-primary">£3.50</span></p>
        </div>
      </section>

      {/* ══ FISH ══ */}
      <section className="bg-surface-container-low py-10 md:py-14 border-b border-outline-variant/15">
        <div className="container mx-auto px-6">
          <h2 className="font-headline italic text-on-surface mb-8" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>Fish</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {fish.map(({ name, description, price }) => (
              <div key={name} className="flex justify-between items-start p-4 rounded-xl border border-outline-variant/15 bg-surface/80">
                <div className="flex-1">
                  <p className="font-medium text-on-surface text-sm">{name}</p>
                  <p className="text-on-surface-variant text-xs mt-0.5">{description}</p>
                </div>
                <p className="font-headline italic text-primary text-lg ml-4 shrink-0">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VEGETARIAN / VEGAN ══ */}
      <section className="bg-surface py-10 md:py-14 border-b border-outline-variant/15">
        <div className="container mx-auto px-6">
          <h2 className="font-headline italic text-on-surface mb-2" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>Vegetarian / Vegan</h2>
          <p className="text-on-surface-variant text-sm font-light mb-8">All racks served with green salad, coleslaw, skin on chips, jacket potato or salad</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {veggie.map(({ name, description, price }) => (
              <div key={name} className="flex justify-between items-start p-4 rounded-xl border border-outline-variant/15 bg-surface-container/50">
                <div className="flex-1">
                  <p className="font-medium text-on-surface text-sm">{name}</p>
                  <p className="text-on-surface-variant text-xs mt-0.5">{description}</p>
                </div>
                <p className="font-headline italic text-primary text-lg ml-4 shrink-0">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SAUCES & SIDES ══ */}
      <section className="bg-surface-container-low py-10 md:py-14 border-b border-outline-variant/15">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-3xl">
            <div>
              <h2 className="font-headline italic text-on-surface mb-6" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Sauces</h2>
              <div className="space-y-3">
                {sauces.map(({ name, price }) => (
                  <div key={name} className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                    <p className="text-on-surface text-sm">{name}</p>
                    <p className="font-headline italic text-primary">{price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-headline italic text-on-surface mb-6" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Extras</h2>
              <div className="space-y-3">
                {sides.map(({ name, price }) => (
                  <div key={name} className="flex justify-between items-start py-2 border-b border-outline-variant/10 gap-4">
                    <p className="text-on-surface text-sm">{name}</p>
                    <p className="font-headline italic text-primary text-right text-sm shrink-0">{price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] mb-3">Available Every Day</p>
          <h2 className="font-headline italic text-on-surface mb-3" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>
            Ready to cook your perfect steak?
          </h2>
          <p className="text-on-surface-variant text-sm font-light mb-6">
            Walk in or book ahead — call <a href={CONTACT.phoneHref} className="text-primary hover:underline underline-offset-4">{CONTACT.phone}</a>
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <CTAButton to="/contact" variant="primary">Book a Table</CTAButton>
            <CTAButton to="/menu" variant="outline">Full Food Menu</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
