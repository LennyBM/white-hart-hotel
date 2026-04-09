import { CONTACT } from './contact';

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string;
}

const BASE_URL = CONTACT.siteUrl;
const OG_IMAGE = `${BASE_URL}/images/hero-exterior.jpg`;

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'The White Hart Hotel | Historic Pub, Restaurant & Hotel in Holsworthy, Devon',
    description:
      'The White Hart Hotel — a historic family-run pub, restaurant and hotel in Holsworthy, Devon, dating back to 1591. Dine, stay and celebrate in the heart of Devon.',
    canonical: BASE_URL,
    ogImage: OG_IMAGE,
    keywords: 'pub Holsworthy, hotel Holsworthy Devon, restaurant Holsworthy, White Hart Hotel, historic pub Devon, EX22, accommodation Holsworthy',
  },
  dining: {
    title: 'Dining at The White Hart | Traditional Bar & VINYL Restaurant, Holsworthy',
    description:
      'Enjoy traditional Devon pub food in our historic bar or experience VINYL — our Friday & Saturday restaurant with stone-baked pizzas, sharing plates and DJ sets.',
    canonical: `${BASE_URL}/dining`,
    ogImage: OG_IMAGE,
    keywords: 'dining Holsworthy, food Holsworthy Devon, pub food Holsworthy, Sunday carvery Holsworthy, restaurant Devon, stone baked pizza Holsworthy',
  },
  rooms: {
    title: 'Rooms at The White Hart Hotel | Boutique Accommodation in Holsworthy, Devon',
    description:
      'Six uniquely characterful rooms in our historic coaching inn. Book direct for the best price. Call 01409 253475.',
    canonical: `${BASE_URL}/rooms`,
    ogImage: OG_IMAGE,
    keywords: 'hotel rooms Holsworthy, accommodation Holsworthy Devon, bed and breakfast Holsworthy, boutique hotel Devon, EX22 6EB, stay Holsworthy',
  },
  whatsOn: {
    title: "What's On at The White Hart | Poker, Pool, Karaoke & Steak Nights, Holsworthy",
    description:
      'Weekly events at The White Hart: LPPL Poker Tuesdays, Black Rock Steak Night Wednesdays, Pool & Darts, and Karaoke on the first Saturday of every month.',
    canonical: `${BASE_URL}/whats-on`,
    ogImage: OG_IMAGE,
    keywords: "what's on Holsworthy, events Holsworthy Devon, live music Holsworthy, poker night Devon, karaoke Holsworthy, steak night Devon",
  },
  popUpBar: {
    title: 'Pop Up Bar Company | Mobile Bar Hire for Weddings & Events, Devon & Cornwall',
    description:
      'Bespoke mobile bar hire for weddings, festivals and private events across Devon and Cornwall. Professional service from The White Hart Hotel team.',
    canonical: `${BASE_URL}/pop-up-bar`,
    ogImage: OG_IMAGE,
    keywords: 'mobile bar hire Devon, pop up bar Cornwall, wedding bar hire Devon, event bar hire, mobile bar wedding south west England',
  },
  ourStory: {
    title: 'Our Story | The History of The White Hart Hotel, Holsworthy Since 1591',
    description:
      'Discover the rich history of The White Hart Hotel — from its origins in 1591 to the Hutchings family today. Four centuries of Devon hospitality.',
    canonical: `${BASE_URL}/our-story`,
    ogImage: OG_IMAGE,
    keywords: 'White Hart Hotel history, historic pub Devon, 1591 coaching inn, Holsworthy history, Grade II listed pub Devon',
  },
  contact: {
    title: 'Contact The White Hart Hotel | Holsworthy, Devon',
    description:
      'Get in touch with The White Hart Hotel, Holsworthy. Call 01409 253475 or email info@whiteharthotel.co.uk. Find us on Fore Street, EX22 6EB.',
    canonical: `${BASE_URL}/contact`,
    ogImage: OG_IMAGE,
    keywords: 'contact White Hart Hotel, Holsworthy pub phone number, Fore Street Holsworthy, EX22 6EB',
  },
  privacy: {
    title: 'Privacy Policy | The White Hart Hotel, Holsworthy',
    description: 'How The White Hart Hotel collects, uses, and protects your personal data under UK GDPR.',
    canonical: `${BASE_URL}/privacy`,
    ogImage: OG_IMAGE,
  },
  terms: {
    title: 'Terms of Service | The White Hart Hotel, Holsworthy',
    description: 'Terms and conditions for using The White Hart Hotel website and services.',
    canonical: `${BASE_URL}/terms`,
    ogImage: OG_IMAGE,
  },
  cookies: {
    title: 'Cookie Policy | The White Hart Hotel, Holsworthy',
    description: 'Information about cookies used on The White Hart Hotel website.',
    canonical: `${BASE_URL}/cookies`,
    ogImage: OG_IMAGE,
  },
  notFound: {
    title: '404 — Page Not Found | The White Hart Hotel, Holsworthy',
    description: 'This page could not be found. Return to The White Hart Hotel homepage.',
    canonical: `${BASE_URL}/404`,
    ogImage: OG_IMAGE,
  },
  takeaway: {
    title: 'Takeaway & Delivery | The White Hart, Holsworthy — Order via Just Eat',
    description:
      'Order takeaway from The White Hart, Holsworthy. Full menu available for collection or delivery within a 3-mile radius. Order via Just Eat or call 01409 253475.',
    canonical: `${BASE_URL}/takeaway`,
    ogImage: OG_IMAGE,
    keywords: 'takeaway Holsworthy, food delivery Holsworthy Devon, Just Eat Holsworthy, pizza delivery EX22, pub takeaway Devon',
  },
  'black-rock-grill': {
    title: 'Black Rock Grill | Cook Your Steak at 300°C — The White Hart, Holsworthy',
    description:
      'Experience the Black Rock Grill at The White Hart. Cook your own steak on volcanic rock at over 300°C. Locally sourced from Swannacott Manor Meats. Steaks from £9.50.',
    canonical: `${BASE_URL}/black-rock-grill`,
    ogImage: OG_IMAGE,
    keywords: 'black rock grill Holsworthy, steak Holsworthy Devon, volcanic rock steak, steak night Devon, cook your own steak, Swannacott Manor Meats',
  },
  menu: {
    title: 'Food Menu | The White Hart Hotel, Holsworthy — Open All Day',
    description:
      'Full food menu at The White Hart, Holsworthy. Pub classics, burgers, stone-baked pizzas, kids menu and more. Served lunch & dinner daily. Delivery via Just Eat.',
    canonical: `${BASE_URL}/menu`,
    ogImage: OG_IMAGE,
    keywords: 'menu Holsworthy pub, food menu Devon, pub food EX22, burgers Holsworthy, pizza Holsworthy, kids menu Devon pub',
  },
  'vinyl-menu': {
    title: 'VINYL Evening Menu | Steaks, Burgers, Pizza & More — White Hart, Holsworthy',
    description:
      'Browse the full VINYL @ The White Hart menu. Stone-baked pizzas, Black Rock steaks, burgers, ribs and more. Available Friday & Saturday from 6pm.',
    canonical: `${BASE_URL}/vinyl-menu`,
    ogImage: OG_IMAGE,
    keywords: 'VINYL restaurant Holsworthy, evening menu Devon pub, steak night Holsworthy Friday Saturday, pizza Holsworthy',
  },
  news: {
    title: 'News from The Hart | The White Hart Hotel, Holsworthy',
    description: "The latest news, events and seasonal updates from The White Hart Hotel in Holsworthy, Devon.",
    canonical: `${BASE_URL}/news`,
    ogImage: OG_IMAGE,
    keywords: 'White Hart Hotel news, Holsworthy pub events, Devon pub news',
  },
  poker: {
    title: 'LPPL Poker Nights | Every Tuesday at The White Hart, Holsworthy',
    description:
      "Join the League Poker Players League every Tuesday night at The White Hart Hotel. £10 buy-in, Texas Hold'em format. New players always welcome.",
    canonical: `${BASE_URL}/whats-on/poker`,
    ogImage: `${BASE_URL}/images/event-poker.jpg`,
    keywords: 'poker night Holsworthy, LPPL poker Devon, Texas Hold\'em Devon, pub poker night EX22, poker league Devon',
  },
  pool: {
    title: 'Pool & Darts | The White Hart Hotel, Holsworthy',
    description:
      'Pool table in our downstairs bar — 70p per game or 2 games for £1. Dartboards free to use. Open to everyone, no booking needed. Pool and darts league teams welcome.',
    canonical: `${BASE_URL}/whats-on/pool`,
    ogImage: `${BASE_URL}/images/event-pool.jpg`,
    keywords: 'pool table Holsworthy, darts Holsworthy Devon, pool league Devon, pub pool EX22, snooker Holsworthy',
  },
  karaoke: {
    title: 'Karaoke Party | First Saturday Every Month — The White Hart, Holsworthy',
    description:
      'Karaoke Party at The White Hart, Holsworthy. First Saturday of every month from 9pm. Free shot for every singer. Food available from 6pm.',
    canonical: `${BASE_URL}/whats-on/karaoke`,
    ogImage: `${BASE_URL}/images/event-karaoke.jpg`,
    keywords: 'karaoke Holsworthy, karaoke night Devon, karaoke pub EX22, karaoke Saturday Holsworthy',
  },
};
