import { SEOHead } from '../ui/SEOHead';
import { CTAButton } from '../ui/CTAButton';
import { ShareButton } from '../ui/ShareButton';
import { FlourishDivider } from '../ui/FlourishDivider';
import { CONTACT } from '../../constants/contact';
import { pubMenuSections } from '../../data/pubMenu';

const jumpNav = [
  { id: 'burgers', label: 'Burgers' },
  { id: 'pub-classics', label: 'Classics' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'loaded-fries', label: 'Loaded Fries' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'jacket-potatoes', label: 'Jackets' },
  { id: 'salads', label: 'Salads' },
  { id: 'omelette', label: 'Omelette' },
  { id: 'curry', label: 'Curry' },
  { id: 'kids', label: 'Kids' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'sides', label: 'Sides' },
  { id: 'hot-drinks', label: 'Hot Drinks' },
  { id: 'soft-drinks', label: 'Drinks' },
];

function priceString(price: string | { cup?: string; mug?: string }): string {
  if (typeof price === 'string') return price;
  if ('cup' in price && 'mug' in price) return `${price.cup} / ${price.mug}`;
  return '';
}

function priceLabel(price: string | { cup?: string; mug?: string }): string | null {
  if (typeof price !== 'string' && 'cup' in price) return 'Cup / Mug';
  return null;
}

export default function MenuPage() {
  return (
    <>
      <SEOHead page="menu" breadcrumbs={[{ name: "Food Menu", url: `/menu` }]} />

      {/* ══ HERO — dark band with editorial framing ══ */}
      <section className="band-dark-mesh relative overflow-hidden py-20 md:py-28 top-accent">
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FlourishDivider label="Open All Day" variant="light" className="mb-7" />
            <h1
              className="font-headline italic text-white leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
            >
              Food Menu
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
              Served every day. Lunch 11am&ndash;2:30pm &middot; Dinner 6pm&ndash;8:30pm Mon&ndash;Sat.
              Sunday? Join us for the{' '}
              <a href="/dining#carvery" className="text-[#e6c487] hover:text-white underline underline-offset-4 decoration-1">
                Carvery from 12&ndash;3:30pm
              </a>
              .
            </p>

            {/* Info chips */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-label">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white/80 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <svg className="w-3.5 h-3.5 text-[#e6c487]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call to order:
                <a href={CONTACT.phoneHref} className="text-[#e6c487] font-medium hover:text-white transition-colors">{CONTACT.phone}</a>
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white/80 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-sm bg-[#2e7d32] text-white text-[9px] font-bold">5</span>
                Food Hygiene Rating
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <CTAButton to="/contact" variant="primary">Book a Table</CTAButton>
              <CTAButton to="/vinyl-menu" variant="outline">VINYL Evening Menu</CTAButton>
              <ShareButton
                title="The White Hart Food Menu"
                text="Check out the menu at The White Hart, Holsworthy"
                className="text-white/70 hover:text-[#e6c487]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ JUMP NAV ══ */}
      <div className="sticky top-0 z-30 bg-surface border-b border-outline-variant/20 overflow-x-auto">
        <div className="flex gap-0 px-4 min-w-max">
          {jumpNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-4 py-3 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ══ MENU SECTIONS ══ */}
      <div className="bg-surface">
        {pubMenuSections.map((section, sIdx) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-10 md:py-14 border-b border-outline-variant/15 ${sIdx % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'}`}
          >
            <div className="container mx-auto px-6">
              {/* Section header */}
              <div className="mb-6 md:mb-8">
                <h2 className="font-headline italic text-on-surface" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-on-surface-variant text-sm mt-1 font-light max-w-xl">{section.subtitle}</p>
                )}
                {section.note && (
                  <p className="text-primary/70 text-xs font-label italic mt-2">{section.note}</p>
                )}
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {section.items.map((item) => {
                  const label = priceLabel(item.price);
                  const displayPrice = priceString(item.price);
                  return (
                    <div
                      key={item.name}
                      className={`flex justify-between items-start gap-4 p-4 rounded-xl border transition-colors ${
                        item.highlight
                          ? 'border-primary/25 bg-primary/5'
                          : 'border-outline-variant/15 bg-surface-container/50'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {item.highlight && (
                            <span className="text-primary text-[9px] font-label uppercase tracking-widest shrink-0">★ Favourite</span>
                          )}
                        </div>
                        <p className="font-medium text-on-surface text-sm leading-snug">{item.name}</p>
                        {item.description && (
                          <p className="text-on-surface-variant text-xs mt-0.5 leading-relaxed">{item.description}</p>
                        )}
                        {label && (
                          <p className="text-on-surface-variant/50 text-[10px] mt-1 font-label">{label}</p>
                        )}
                      </div>
                      <p className="font-headline italic text-primary text-base shrink-0">{displayPrice}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* ══ ALLERGEN & ORDERING FOOTER ══ */}
        <section className="py-10 md:py-14 bg-surface-container">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Allergen notice */}
              <div className="bg-surface rounded-xl p-6 border border-outline-variant/20">
                <p className="font-label uppercase tracking-widest text-xs text-primary font-medium mb-3">Allergens</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  We monitor the presence of nuts and gluten in all of our products. Please ask at the bar for our allergen list. All weights are approximate uncooked. Fish and poultry dishes may contain bones. We accept card payments. Prices include VAT.
                </p>
              </div>
              {/* Order options */}
              <div className="bg-surface rounded-xl p-6 border border-outline-variant/20">
                <p className="font-label uppercase tracking-widest text-xs text-primary font-medium mb-3">Order &amp; Delivery</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                  Dine in, collect, or get it delivered locally within a 3-mile radius of Holsworthy.
                </p>
                <div className="flex flex-wrap gap-3">
                  {/* Phone — primary */}
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2.5 bg-primary text-on-primary px-5 py-3 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity shadow-sm"
                    aria-label={`Call ${CONTACT.phone} to order`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {CONTACT.phone}
                  </a>
                  {/* Just Eat — official orange with inline house icon */}
                  <a
                    href={CONTACT.justEat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#FF8000] text-white px-5 py-3 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:bg-[#E67300] transition-colors shadow-sm shadow-[#FF8000]/15"
                    aria-label="Order on Just Eat"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                      <path d="M16 3L3 14v15h9v-9h8v9h9V14L16 3zm-2 13h4v2h-4v-2zm-2-3a4 4 0 018 0v1h-2v-1a2 2 0 00-4 0v1h-2v-1z" />
                    </svg>
                    Order on Just Eat
                  </a>
                </div>
              </div>
            </div>

            {/* VINYL upsell */}
            <div className="mt-6 relative overflow-hidden rounded-2xl dark-section p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-label uppercase tracking-[0.4em] text-[#c9a96e]/70 text-[10px] mb-2">Friday & Saturday · From 6pm</p>
                <p className="font-headline italic text-[#F5F1EA]" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                  Looking for the VINYL menu?
                </p>
                <p className="text-[#F5F1EA]/55 text-sm mt-1">
                  Steaks, ribs, burgers, pizzas and DJ sets — a different experience entirely.
                </p>
              </div>
              <CTAButton to="/vinyl-menu" variant="outline" className="border-[#c9a96e]/40 text-[#F5F1EA] hover:bg-white/10 shrink-0">
                View VINYL Menu
              </CTAButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
