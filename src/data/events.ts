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
    title: 'LPPL League Poker',
    date: 'Every Tuesday · 8pm',
    description:
      "Join the League Poker Players League every Tuesday night. £10 buy-in, Texas Hold'em format. Part of the national LPPL circuit — earn points, climb the leaderboard, qualify for regional finals.",
    image: '/images/event-poker.webp',
    imageAlt: 'LPPL League Poker night at The White Hart Holsworthy — every Tuesday at 8pm',
    posterImage: '/images/poker-poster-full.webp',
    cta: '/whats-on/poker',
    ctaLabel: 'Learn More',
    partnerLogo: '/images/lppl-logo.png',
    partnerName: 'LPPL League Poker',
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
];
