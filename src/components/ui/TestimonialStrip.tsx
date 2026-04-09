import { testimonials, type Testimonial } from '../../data/testimonials';

function PlatformLogo({ platform }: { platform: Testimonial['platform'] }) {
  if (platform === 'tripadvisor') {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#34E0A1" />
        <circle cx="8.5" cy="12" r="3" fill="white" />
        <circle cx="8.5" cy="12" r="1.5" fill="#34E0A1" />
        <circle cx="15.5" cy="12" r="3" fill="white" />
        <circle cx="15.5" cy="12" r="1.5" fill="#34E0A1" />
        <path d="M12 6.5L9.5 9h5L12 6.5z" fill="white" />
      </svg>
    );
  }
  if (platform === 'booking') {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#003580" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">B</text>
      </svg>
    );
  }
  // google
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function Stars({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <svg key={i} className={`w-3 h-3 ${i < count ? 'text-[#D4A843]' : 'text-outline-variant/30'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialStrip() {
  const featured = testimonials.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-surface-container-low" aria-label="Guest reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 reveal">
          <p className="font-label uppercase tracking-[0.3em] text-primary text-[11px] mb-3">What Our Guests Say</p>
          <h2 className="font-headline italic text-3xl md:text-4xl text-on-surface">Real Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1} bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/10 flex flex-col justify-between`}
            >
              {t.context && (
                <p className="font-label uppercase tracking-[0.2em] text-primary text-[10px] mb-3">{t.context}</p>
              )}
              <blockquote className="font-headline italic text-lg md:text-xl text-on-surface leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PlatformLogo platform={t.platform} />
                  <div>
                    <p className="font-label text-xs font-bold text-on-surface">{t.name}</p>
                    <p className="font-label text-[10px] text-on-surface-variant">{t.date}</p>
                  </div>
                </div>
                <Stars count={Math.min(t.rating, 5)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
