import { useState, useCallback } from 'react';
import { SEOHead } from '../ui/SEOHead';
import { CONTACT } from '../../constants/contact';
import { vinylMenuSections, type VinylMenuItem } from '../../data/vinylMenu';

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */
interface BasketItem {
  item: VinylMenuItem;
  qty: number;
}

type DietFilter = 'all' | 'v' | 'vg';

/* ─────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────── */
function formatPrice(p: number) {
  return `£${p.toFixed(2)}`;
}

function buildWhatsAppMessage(basket: BasketItem[], total: number): string {
  const lines = basket.map(
    ({ item, qty }) =>
      `• ${qty}x ${item.name} @ ${formatPrice(item.price)} = ${formatPrice(item.price * qty)}`
  );
  const msg = [
    'Hi! I\'d like to pre-order for my visit to VINYL @ The White Hart:',
    '',
    ...lines,
    '',
    `Total: ${formatPrice(total)}`,
    '',
    'Please can you confirm my table and time?',
  ].join('\n');
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/* ─────────────────────────────────────────────
   Dietary badge
   ───────────────────────────────────────────── */
function DietaryBadge({ tag }: { tag: 'v' | 'vg' }) {
  return tag === 'vg' ? (
    <span className="inline-block text-[10px] font-label font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container">
      Vegan
    </span>
  ) : (
    <span className="inline-block text-[10px] font-label font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container">
      Veg
    </span>
  );
}

/* ─────────────────────────────────────────────
   Menu item card
   ───────────────────────────────────────────── */
function MenuItemCard({
  item,
  qty,
  onAdd,
  onRemove,
}: {
  item: VinylMenuItem;
  qty: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-outline-variant/20 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-headline italic text-base text-on-surface leading-snug">
            {item.name}
          </h3>
          {item.dietary?.map((tag) => (
            <DietaryBadge key={tag} tag={tag} />
          ))}
        </div>
        {item.description && (
          <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
        )}
        <p className="text-primary font-semibold text-sm mt-1">{formatPrice(item.price)}</p>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 mt-1">
        {qty > 0 ? (
          <>
            <button
              onClick={onRemove}
              aria-label={`Remove one ${item.name}`}
              className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors text-sm font-bold"
            >
              −
            </button>
            <span className="w-5 text-center text-sm font-semibold text-on-surface tabular-nums">
              {qty}
            </span>
            <button
              onClick={onAdd}
              aria-label={`Add another ${item.name}`}
              className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary/90 transition-colors text-sm font-bold"
            >
              +
            </button>
          </>
        ) : (
          <button
            onClick={onAdd}
            aria-label={`Add ${item.name} to order`}
            className="text-xs font-label font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Basket panel (shared between desktop sidebar + mobile sheet)
   ───────────────────────────────────────────── */
function BasketContents({
  basket,
  total,
  onRemove,
  onClear,
}: {
  basket: BasketItem[];
  total: number;
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  const isEmpty = basket.length === 0;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-label uppercase tracking-widest text-xs text-primary font-semibold">
            Your Order
          </p>
          <h2 className="font-headline italic text-xl text-on-surface">Pre-order basket</h2>
        </div>
        {!isEmpty && (
          <button
            onClick={onClear}
            className="text-xs text-on-surface-variant hover:text-error transition-colors underline underline-offset-2"
          >
            Clear
          </button>
        )}
      </div>

      {isEmpty ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10 text-on-surface-variant">
          <svg
            className="w-10 h-10 mb-3 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <p className="text-sm">Tap <strong>Add</strong> on any dish to build your pre-order.</p>
        </div>
      ) : (
        <>
          <ul className="flex-1 overflow-y-auto divide-y divide-outline-variant/20 mb-4">
            {basket.map(({ item, qty }) => (
              <li key={item.id} className="flex justify-between items-center py-2.5 text-sm">
                <div>
                  <span className="text-on-surface font-medium">{qty}x {item.name}</span>
                  <span className="text-on-surface-variant ml-1 text-xs">
                    @ {formatPrice(item.price)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold tabular-nums">
                    {formatPrice(item.price * qty)}
                  </span>
                  <button
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="text-on-surface-variant hover:text-error transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-outline-variant/30 pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-label text-sm text-on-surface-variant uppercase tracking-wide">
                Estimated total
              </span>
              <span className="font-headline italic text-xl text-on-surface">
                {formatPrice(total)}
              </span>
            </div>

            <a
              href={buildWhatsAppMessage(basket, total)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white font-label font-semibold text-sm uppercase tracking-wider py-3 px-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </a>

            <p className="text-xs text-on-surface-variant/70 text-center leading-relaxed">
              Opens WhatsApp with your order pre-filled. We'll confirm your table and time.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
   ───────────────────────────────────────────── */
export default function VinylMenuPage() {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [filter, setFilter] = useState<DietFilter>('all');
  const [mobileBasketOpen, setMobileBasketOpen] = useState(false);

  /* basket mutations */
  const addItem = useCallback((item: VinylMenuItem) => {
    setBasket((prev) => {
      const existing = prev.find((b) => b.item.id === item.id);
      if (existing) {
        return prev.map((b) => b.item.id === item.id ? { ...b, qty: b.qty + 1 } : b);
      }
      return [...prev, { item, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setBasket((prev) =>
      prev
        .map((b) => b.item.id === id ? { ...b, qty: b.qty - 1 } : b)
        .filter((b) => b.qty > 0)
    );
  }, []);

  const removeAllOfItem = useCallback((id: string) => {
    setBasket((prev) => prev.filter((b) => b.item.id !== id));
  }, []);

  const clearBasket = useCallback(() => setBasket([]), []);

  const total = basket.reduce((sum, { item, qty }) => sum + item.price * qty, 0);
  const itemCount = basket.reduce((sum, { qty }) => sum + qty, 0);

  /* filter logic */
  const visibleSections = vinylMenuSections.map((section) => ({
    ...section,
    items:
      filter === 'all'
        ? section.items
        : section.items.filter((item) => item.dietary?.includes(filter)),
  })).filter((section) => section.items.length > 0);

  return (
    <>
      <SEOHead page="vinyl-menu" />

      {/* ── HERO ── */}
      <section className="bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-14 text-center">
          <p className="font-label uppercase tracking-[0.4em] text-primary text-[10px] font-semibold mb-2">
            Friday &amp; Saturday from 6 pm
          </p>
          <h1 className="font-headline italic text-on-surface leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
            VINYL
          </h1>
          <p className="font-headline italic text-on-surface-variant mt-1 mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
            @ The White Hart — Evening Menu
          </p>
          <p className="text-on-surface-variant text-sm max-w-md mx-auto leading-relaxed hidden md:block">
            Steak &middot; Ribs &middot; Burgers &middot; Pizza &middot; Black Rock Grill. Browse and pre-order via WhatsApp, or order at your table.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-on-surface-variant">
            <a href={CONTACT.phoneHref} className="text-primary font-medium hover:underline underline-offset-4">{CONTACT.phone}</a>
            <span className="text-outline-variant hidden md:inline">·</span>
            <span className="hidden md:inline">Holsworthy, Devon</span>
          </div>
        </div>
      </section>

      {/* ── BODY: menu + basket ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-12">
        <div className="flex gap-10 lg:gap-14 items-start">

          {/* ── LEFT: menu sections ── */}
          <div className="flex-1 min-w-0">

            {/* Diet filter pills */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {(
                [
                  { value: 'all', label: 'All dishes' },
                  { value: 'v', label: 'Vegetarian' },
                  { value: 'vg', label: 'Vegan' },
                ] as { value: DietFilter; label: string }[]
              ).map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={`px-4 py-1.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider transition-colors border ${
                    filter === value
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-transparent text-on-surface-variant border-outline-variant hover:border-primary/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Jump links */}
            <nav className="hidden sm:flex flex-wrap gap-x-4 gap-y-1 mb-10 pb-6 border-b border-outline-variant/20">
              {visibleSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-xs font-label text-on-surface-variant hover:text-primary transition-colors underline-offset-2 hover:underline"
                >
                  {section.title}
                </a>
              ))}
            </nav>

            {/* Sections */}
            {visibleSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-12 scroll-mt-20"
              >
                <div className="mb-4">
                  <h2 className="font-headline italic text-2xl sm:text-3xl text-on-surface">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="text-on-surface-variant text-sm mt-1 leading-relaxed italic">
                      {section.subtitle}
                    </p>
                  )}
                  <div className="w-10 h-px bg-primary/40 mt-3" />
                </div>

                <div>
                  {section.items.map((item) => {
                    const qty = basket.find((b) => b.item.id === item.id)?.qty ?? 0;
                    return (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        qty={qty}
                        onAdd={() => addItem(item)}
                        onRemove={() => removeItem(item.id)}
                      />
                    );
                  })}
                </div>
              </section>
            ))}

            {/* Sauces + sides note */}
            <div className="mt-4 p-5 rounded-xl bg-surface-container border border-outline-variant/20 text-sm text-on-surface-variant">
              <p className="font-semibold text-on-surface mb-1">Add a sauce</p>
              <p>Our own Jack Daniels BBQ &middot; Davidstow Cheese &middot; Peppercorn</p>
              <p className="font-semibold text-on-surface mt-3 mb-1">Sides</p>
              <p>Sliced mushrooms or onion &middot; Coleslaw (raw or cooked) &middot; 8" Garlic Bread &middot; Garlic Ciabatta</p>
              <p className="text-xs text-on-surface-variant/60 mt-3 italic">
                Please ask your server for side prices and sauce options on the night.
              </p>
            </div>

            <p className="mt-8 text-xs text-on-surface-variant/60 leading-relaxed">
              All prices include VAT. Menu available Friday &amp; Saturday evenings from 6 pm only. Please inform us of any allergies or dietary requirements before ordering.
            </p>
          </div>

          {/* ── RIGHT: desktop basket ── */}
          <aside className="hidden lg:flex flex-col w-80 xl:w-96 flex-shrink-0 sticky top-6">
            <div className="bg-surface-container-low rounded-2xl border border-outline-variant/20 p-6 shadow-sm min-h-[420px] flex flex-col">
              <BasketContents
                basket={basket}
                total={total}
                onRemove={removeAllOfItem}
                onClear={clearBasket}
              />
            </div>

            {/* Direct call fallback */}
            <p className="mt-4 text-center text-xs text-on-surface-variant">
              Prefer to call?{' '}
              <a href={CONTACT.phoneHref} className="text-primary hover:underline underline-offset-2 font-medium">
                {CONTACT.phone}
              </a>
            </p>
          </aside>
        </div>
      </div>

      {/* ── MOBILE: floating basket button ── */}
      {itemCount > 0 && (
        <div className="lg:hidden fixed bottom-6 left-0 right-0 px-4 z-40">
          <button
            onClick={() => setMobileBasketOpen(true)}
            className="w-full flex items-center justify-between bg-on-surface text-inverse-on-surface py-4 px-5 rounded-2xl shadow-lg"
          >
            <span className="flex items-center gap-2 font-label font-semibold text-sm">
              <span className="bg-primary text-on-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {itemCount}
              </span>
              View order
            </span>
            <span className="font-headline italic text-base">{formatPrice(total)}</span>
          </button>
        </div>
      )}

      {/* ── MOBILE: basket sheet ── */}
      {mobileBasketOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileBasketOpen(false)}
          />
          {/* sheet */}
          <div className="relative bg-surface rounded-t-3xl p-6 pb-10 max-h-[85vh] flex flex-col shadow-2xl">
            <button
              onClick={() => setMobileBasketOpen(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface"
              aria-label="Close basket"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <BasketContents
              basket={basket}
              total={total}
              onRemove={removeAllOfItem}
              onClear={clearBasket}
            />
          </div>
        </div>
      )}
    </>
  );
}
