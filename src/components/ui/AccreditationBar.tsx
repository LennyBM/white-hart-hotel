import { CONTACT } from '../../constants/contact';
import { OpenNowBadge } from './OpenNowBadge';

export function AccreditationBar() {
  return (
    <section className="py-5 bg-surface-container-low/50 border-y border-outline-variant/15" aria-label="Accreditations">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-6 md:gap-10 text-on-surface-variant overflow-x-auto scrollbar-hide">
          {/* Open Now */}
          <OpenNowBadge className="shrink-0" />

          <span className="w-px h-3.5 bg-outline-variant/40 shrink-0" />
          {/* Grade II Listed */}
          <a
            href={CONTACT.historicEngland}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors shrink-0"
          >
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v1h20V7L12 2zm0 2.26L18.18 7H5.82L12 4.26zM4 10v7h2v-7H4zm5 0v7h2v-7H9zm5 0v7h2v-7h-2zm5 0v7h2v-7h-2zM2 19v2h20v-2H2z" />
            </svg>
            <span className="font-label text-[11px] uppercase tracking-[0.15em] font-medium">Grade II Listed</span>
          </a>

          <span className="w-px h-3.5 bg-outline-variant/40 shrink-0" />

          <span className="font-headline italic text-primary text-sm shrink-0">Est. 1591</span>

          <span className="w-px h-3.5 bg-outline-variant/40 shrink-0" />

          {/* Food Hygiene — official green badge style */}
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="bg-[#2e7d32] text-white font-bold text-[9px] w-5 h-5 rounded-sm flex items-center justify-center leading-none">5</span>
            <span className="font-label text-[11px] uppercase tracking-[0.15em] font-medium">Food Hygiene</span>
          </span>

          <span className="w-px h-3.5 bg-outline-variant/40 shrink-0" />

          {/* Cask Marque — official amber/gold style */}
          <span className="flex items-center gap-1.5 shrink-0">
            <svg className="w-4 h-4 text-[#C68B2C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3h14a2 2 0 012 2v4a7 7 0 01-4.28 6.45L12 18l-4.72-2.55A7 7 0 013 9V5a2 2 0 012-2zm7 13.3l3.52-1.9A5 5 0 0019 9V5H5v4a5 5 0 003.48 4.77L12 16.3zM12 20v2m-3-1h6" />
            </svg>
            <span className="font-label text-[11px] uppercase tracking-[0.15em] font-medium">Cask Marque</span>
          </span>

          <span className="w-px h-3.5 bg-outline-variant/40 shrink-0" />

          {/* Free House */}
          <span className="flex items-center gap-1.5 shrink-0">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="font-label text-[11px] uppercase tracking-[0.15em] font-medium">Free House</span>
          </span>
        </div>
      </div>
    </section>
  );
}
