export interface WhEvent {
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  posterImage?: string;
  cta?: string;
  ctaLabel?: string;
  partnerLogo?: string;
  partnerName?: string;
  featured: boolean;
  past: boolean;
}

export const events: WhEvent[] = [
  {
    id: 'lppl-poker',
    slug: 'poker',
    title: 'Live Pub Poker League',
    date: 'Every Tuesday · 8pm',
    description:
      "Join the Live Pub Poker League every Tuesday night. Free to play, or a small buy-in to play for the cash prize — registration from 8pm, cards in the air at 8:30pm. Texas Hold'em format, part of the national LPPL circuit. New players always welcome.",
    image: '/images/event-poker.webp',
    imageAlt: 'Live Pub Poker League night at The White Hart Holsworthy — every Tuesday at 8pm',
    posterImage: '/images/poker-poster-full.webp',
    cta: '/whats-on/poker',
    ctaLabel: 'Learn More',
    partnerLogo: '/images/lppl-logo.png',
    partnerName: 'Live Pub Poker League',
    featured: true,
    past: false,
  },
  {
    id: 'steak-night',
    slug: 'steak-night',
    title: 'Black Rock Steak Night',
    date: 'Every Wednesday',
    description:
      'Sizzling steaks on the Black Rock Grill every Wednesday evening. Cook your prime cut to perfection at your table on volcanic stone.',
    image: '/images/event-steak.webp',
    imageAlt: 'Two steaks sizzling on Black Rock volcanic stone grills at The White Hart',
    cta: '/black-rock-grill',
    ctaLabel: 'Learn More',
    featured: true,
    past: false,
  },
  {
    id: 'pool-table',
    slug: 'pool',
    title: 'Pool Table & Darts',
    date: 'Open All Day · 70p per game',
    description:
      'Our downstairs bar has a full-size pool table (70p per game, 2 for £1) and dartboards free to use. Open to everyone — no booking, no league card needed. We also run pool and darts league teams.',
    image: '/images/event-pool.webp',
    imageAlt: 'Pool table in the downstairs bar at The White Hart Holsworthy',
    cta: '/whats-on/pool',
    ctaLabel: 'Learn More',
    featured: true,
    past: false,
  },
  {
    id: 'karaoke-party',
    slug: 'karaoke',
    title: 'Karaoke Party',
    date: 'First Saturday · Every Month · 9pm',
    description:
      'Belt it out in the bar every first Saturday. Free shot for every singer. No experience required — just courage. Food available from 6pm.',
    image: '/images/event-karaoke.webp',
    imageAlt: 'Karaoke night at The White Hart Holsworthy — first Saturday of every month',
    posterImage: '/images/karaoke-poster-full.webp',
    cta: '/whats-on/karaoke',
    ctaLabel: 'Learn More',
    featured: true,
    past: false,
  },
  {
    id: 'sunday-funday-darts',
    slug: 'pool',
    title: 'Sunday Funday Darts',
    date: 'Selected Sundays · Register from 12pm',
    description:
      'Our ever-popular Sunday Funday darts competition is a regular fixture — open to all, no league card needed. Register at the bar or through a league player on the day. Spaces are limited, so get your name down early.',
    image: '/images/event-pool.webp',
    imageAlt: 'Sunday Funday darts competition at The White Hart Holsworthy',
    cta: '/contact',
    ctaLabel: 'Enquire to Enter',
    featured: true,
    past: false,
  },
  {
    id: 'friday-draws',
    title: 'Friday Night Draws',
    date: 'Every Friday · From 5:30pm',
    description:
      "Two chances to win every Friday. Our '5@5' draw at 5:30pm puts 30 pints on the line, then 'Find the Landlord' at 6pm for the rolling cash jackpot — it climbs every week it isn't won. Be in the bar to play.",
    image: '/images/experience-bar.webp',
    imageAlt: 'Friday night draws in the bar at The White Hart Holsworthy',
    cta: '/whats-on',
    ctaLabel: 'See This Week',
    featured: true,
    past: false,
  },
  {
    id: 'world-cup-2026',
    title: 'FIFA World Cup 2026',
    subtitle: '14 Screens in VINYL',
    date: 'From 11 June 2026',
    description:
      'Watch every England game — and every match that matters — across 14 screens in VINYL. Hot dogs, 4-pint pitchers, and table service throughout. The biggest tournament in the world, in Holsworthy\'s biggest screen venue.',
    image: '/images/event-rugby.webp',
    imageAlt: 'World Cup 2026 screenings at The White Hart — 14 screens in VINYL',
    cta: '/contact',
    ctaLabel: 'Book Your Table',
    featured: true,
    past: false,
  },
];
