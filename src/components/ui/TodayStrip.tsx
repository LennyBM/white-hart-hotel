import { Link } from 'react-router-dom';

interface DayEvent {
  label: string;
  detail: string;
  to: string;
}

const DAILY_EVENTS: Record<number, DayEvent> = {
  0: { label: 'Sunday Carvery', detail: '12–3:30pm · Adult £10.95 · Child £5.95', to: '/dining#carvery' },
  1: { label: 'Food served all day', detail: 'Lunch 11am–2:30pm · Dinner from 6pm', to: '/menu' },
  2: { label: 'LPPL Poker Night', detail: '8pm · £10 buy-in · Texas Hold\'em', to: '/whats-on' },
  3: { label: 'Black Rock Steak Night', detail: 'Cook your steak on volcanic rock at 300°C', to: '/black-rock-grill' },
  4: { label: 'Food served all day', detail: 'Lunch 11am–2:30pm · Dinner from 6pm', to: '/menu' },
  5: { label: 'VINYL opens tonight', detail: 'From 6pm · Steaks, pizza, ribs & DJ sets', to: '/vinyl-menu' },
  6: { label: 'VINYL + Karaoke tonight', detail: 'VINYL from 6pm · Karaoke 9pm · Free shot per singer', to: '/whats-on' },
};

export function TodayStrip() {
  const day = new Date().getDay();
  const event = DAILY_EVENTS[day];

  return (
    <Link
      to={event.to}
      className="block bg-primary/8 border-b border-primary/15 hover:bg-primary/12 transition-colors"
      aria-label={`Today: ${event.label}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-label text-[9px] uppercase tracking-[0.3em] text-primary font-bold shrink-0">Tonight</span>
          <span className="w-px h-3 bg-primary/30 shrink-0" />
          <span className="font-headline italic text-on-surface text-sm shrink-0">{event.label}</span>
          <span className="text-on-surface-variant text-xs truncate">· {event.detail}</span>
        </div>
        <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
