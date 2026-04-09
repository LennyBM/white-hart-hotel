import { CONTACT } from '../../constants/contact';

export function ReviewBadge() {
  return (
    <div className="py-4 bg-surface-container border-y border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto scrollbar-hide">
          {/* Booking.com */}
          <a href={CONTACT.bookingCom} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#003580" />
              <text x="12" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">B</text>
            </svg>
            <span className="font-label text-[11px] text-on-surface"><strong>7.2</strong>/10</span>
            <span className="font-label text-[10px] text-on-surface-variant">283 reviews</span>
          </a>

          <span className="w-px h-3.5 bg-outline-variant/40 shrink-0" />

          {/* TripAdvisor */}
          <a href={CONTACT.tripadvisor} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="#34E0A1" />
              <circle cx="8.5" cy="12" r="3" fill="white" />
              <circle cx="8.5" cy="12" r="1.5" fill="#34E0A1" />
              <circle cx="15.5" cy="12" r="3" fill="white" />
              <circle cx="15.5" cy="12" r="1.5" fill="#34E0A1" />
              <path d="M12 6.5L9.5 9h5L12 6.5z" fill="white" />
            </svg>
            <span className="font-label text-[11px] text-on-surface"><strong>3.8</strong>/5</span>
            <span className="font-label text-[10px] text-on-surface-variant">59 reviews</span>
          </a>

          <span className="w-px h-3.5 bg-outline-variant/40 shrink-0" />

          {/* Google */}
          <a href={CONTACT.googleMapsLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-center gap-0.5">
              {[1,2,3,4].map(i => (
                <svg key={i} className="w-2.5 h-2.5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </a>

          <span className="w-px h-3.5 bg-outline-variant/40 shrink-0" />

          {/* Food Hygiene */}
          <span className="flex items-center gap-1.5 shrink-0">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#2e7d32" />
              <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">5</text>
            </svg>
            <span className="font-label text-[11px] text-on-surface font-medium">Food Hygiene</span>
          </span>
        </div>
      </div>
    </div>
  );
}
