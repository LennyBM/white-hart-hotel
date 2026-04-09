import { SEOHead } from '../ui/SEOHead';
import { CTAButton } from '../ui/CTAButton';
import { CONTACT } from '../../constants/contact';

const popularItems = [
  { name: 'White Hart Tower Burger', desc: 'Two beef patties, bacon, Davidstow cheddar, fried egg', price: '£16.50', tag: 'Best Seller' },
  { name: '10oz Ribeye Steak', desc: 'Locally sourced from Swannacott Manor Meats', price: '£19.95', tag: 'Black Rock' },
  { name: 'BBQ Chicken Pizza', desc: '12" stone baked with Jack Daniels sauce & speck ham', price: '£15.00', tag: 'Pizza' },
  { name: 'Hunters Chicken', desc: 'Bacon, Davidstow cheddar & Hickory BBQ sauce', price: '£12.95', tag: 'Favourite' },
  { name: 'Dirty Pig Burger', desc: 'BBQ pulled pork & beef pattie in a brioche bun', price: '£12.50', tag: 'Burger' },
  { name: 'Homemade Lasagne', desc: 'Layers of local mince and pasta with garlic bread', price: '£11.95', tag: 'Classic' },
];

const JustEatLogo = ({ className = 'h-6 w-auto' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="180" height="48" rx="6" fill="#FF8000" />
    <text x="90" y="32" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1">JUST EAT</text>
  </svg>
);

export default function TakeawayPage() {
  return (
    <>
      <SEOHead page="takeaway" />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/dining-pizza.webp" type="image/webp" />
            <img
              src="/images/dining-pizza.jpg"
              alt="Stone-baked pizza from The White Hart Holsworthy"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1920}
              height={1080}
            />
          </picture>
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(6,4,2,0.92) 0%, rgba(6,4,2,0.75) 50%, rgba(6,4,2,0.45) 100%)' }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-[#FF8000]/15 border border-[#FF8000]/40 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <JustEatLogo className="h-4 w-auto" />
              <span className="font-label text-[11px] uppercase tracking-widest text-white font-semibold">
                Delivery Available Now
              </span>
            </div>
            <h1 className="font-headline italic text-white leading-tight mb-4" style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)' }}>
              Takeaway &amp; Delivery
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl">
              The full White Hart menu — pub classics, Tower Burgers, 12" stone-baked pizzas, Black Rock steaks — delivered to your door within a 3-mile radius of Holsworthy, or ready for collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT.justEat}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#FF8000] text-white px-7 py-4 rounded-lg font-label font-bold text-sm uppercase tracking-widest hover:bg-[#E67300] transition-colors shadow-xl shadow-[#FF8000]/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                </svg>
                Order on Just Eat
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white px-7 py-4 rounded-lg font-label font-bold text-sm uppercase tracking-widest hover:bg-white/15 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {CONTACT.phone}
              </a>
            </div>
            <p className="text-white/50 text-xs mt-5 font-light">
              Delivery 6pm – 8:30pm · Collection welcome throughout service · 3-mile radius
            </p>
          </div>
        </div>
      </section>

      {/* ══ PRIMARY ORDER BAND — JUST EAT FEATURE ══ */}
      <section className="bg-[#FF8000] py-8 md:py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-5 text-center md:text-left">
              <JustEatLogo className="h-10 md:h-12 w-auto shrink-0" />
              <div>
                <p className="text-white font-headline italic text-xl md:text-2xl leading-tight">
                  Order the full menu online
                </p>
                <p className="text-white/85 text-xs md:text-sm font-light mt-0.5">
                  Live order tracking · Card payment · Delivery within 3 miles
                </p>
              </div>
            </div>
            <a
              href={CONTACT.justEat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#FF8000] px-7 py-3.5 rounded-lg font-label font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-colors shrink-0 shadow-lg"
            >
              Order Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══ HOW TO ORDER ══ */}
      <section className="bg-surface-container-low py-12 md:py-16 border-b border-outline-variant/15">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-2">How It Works</p>
            <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Three ways to order
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {/* Just Eat - Featured */}
            <a
              href={CONTACT.justEat}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-surface rounded-2xl p-7 border-2 border-[#FF8000] flex flex-col hover:shadow-xl hover:shadow-[#FF8000]/10 transition-all"
            >
              <div className="absolute -top-3 left-6 bg-[#FF8000] text-white px-3 py-1 rounded-full font-label text-[9px] uppercase tracking-widest font-bold">
                Recommended
              </div>
              <div className="mb-4">
                <JustEatLogo className="h-8 w-auto" />
              </div>
              <h3 className="font-headline italic text-on-surface text-xl mb-2">Delivery via Just Eat</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light flex-1 mb-5">
                Browse the full menu, pay online, and track your order in real time. Delivered within a 3-mile radius of Holsworthy.
              </p>
              <span className="inline-flex items-center justify-center gap-2 bg-[#FF8000] text-white py-3 px-5 rounded-lg font-label text-xs uppercase tracking-widest font-bold group-hover:bg-[#E67300] transition-colors">
                Order on Just Eat
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            {/* Phone */}
            <a
              href={CONTACT.phoneHref}
              className="group bg-surface rounded-2xl p-7 border border-outline-variant/20 flex flex-col hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-headline italic text-on-surface text-xl mb-2">Call Us Directly</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light flex-1 mb-5">
                Ring {CONTACT.phone} and we'll take your order over the phone. Perfect for collection or if you have questions about the menu.
              </p>
              <span className="inline-flex items-center justify-center gap-2 border border-outline-variant text-on-surface py-3 px-5 rounded-lg font-label text-xs uppercase tracking-widest font-bold group-hover:border-primary group-hover:text-primary transition-colors">
                {CONTACT.phone}
              </span>
            </a>

            {/* Collection */}
            <div className="bg-surface rounded-2xl p-7 border border-outline-variant/20 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                </svg>
              </div>
              <h3 className="font-headline italic text-on-surface text-xl mb-2">Collection</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light flex-1 mb-5">
                Order by phone or online, then collect from Fore Street. A quick walk away and your food will be ready when you arrive.
              </p>
              <span className="inline-flex items-center justify-center gap-2 text-on-surface-variant py-3 px-5 font-label text-xs uppercase tracking-widest font-medium">
                3 Fore Street, EX22 6EB
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ POPULAR ITEMS ══ */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="font-label uppercase tracking-[0.35em] text-primary text-[10px] font-medium mb-2">Customer Favourites</p>
            <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Popular for Takeaway</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
            {popularItems.map(({ name, desc, price, tag }) => (
              <div key={name} className="flex justify-between items-start p-5 rounded-xl border border-outline-variant/15 bg-surface-container/50 gap-3 hover:border-primary/30 transition-colors">
                <div className="flex-1 min-w-0">
                  <span className="inline-block font-label text-[9px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-1.5">{tag}</span>
                  <p className="font-medium text-on-surface text-sm leading-snug">{name}</p>
                  <p className="text-on-surface-variant text-xs mt-1 leading-relaxed">{desc}</p>
                </div>
                <p className="font-headline italic text-primary text-lg shrink-0">{price}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton to="/menu" variant="primary">View Full Menu</CTAButton>
            <a
              href={CONTACT.justEat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF8000] text-white px-8 py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:bg-[#E67300] transition-colors min-h-[44px]"
            >
              <JustEatLogo className="h-4 w-auto" />
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* ══ INFO STRIP ══ */}
      <section className="bg-surface-container-low border-t border-outline-variant/15 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {[
              { label: 'Collection from', value: '3 Fore Street, Holsworthy EX22 6EB' },
              { label: 'Delivery Hours', value: 'Sun–Sat · 6pm – 8:30pm' },
              { label: 'Order By Phone', value: CONTACT.phone },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-label uppercase tracking-widest text-[10px] text-primary font-medium mb-1.5">{label}</p>
                <p className="text-on-surface text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
