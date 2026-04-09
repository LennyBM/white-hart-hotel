export interface Room {
  id: string;
  name: string;
  description: string;
  bedType: string;
  sleeps: number;
  price: number;
  features: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const rooms: Room[] = [
  {
    id: 'attic-retreat',
    name: 'The Attic Retreat',
    description: 'Accessible via the quirky winding staircase, this spacious attic room offers a unique character experience with exposed beams and skylight views.',
    bedType: 'Double + Single',
    sleeps: 3,
    price: 65,
    features: ['En-suite shower', 'Exposed beams', 'Skylight', 'Smart TV'],
    image: '/images/room-attic.webp',
    imageAlt: 'The Attic Retreat at The White Hart — double and single beds with sloped ceilings and striped wallpaper',
    featured: true,
  },
  {
    id: 'merchants-room',
    name: "The Merchant's Room",
    description: 'Spacious and bright with views over Fore Street and traditional period features. Our most popular room for couples.',
    bedType: 'Double + Single',
    sleeps: 3,
    price: 75,
    features: ['En-suite shower', 'Street views', 'Period features', 'Smart TV'],
    image: '/images/room-merchants.webp',
    imageAlt: 'The Merchant\'s Room — spacious double room with window overlooking Fore Street',
  },
  {
    id: 'the-snug',
    name: 'The Snug',
    description: 'Our cosy double-only room, perfect for a romantic getaway or solo traveller in the heart of Devon.',
    bedType: 'Double Only',
    sleeps: 2,
    price: 58,
    features: ['En-suite shower', 'Compact & cosy', 'Smart TV'],
    image: '/images/room-snug.webp',
    imageAlt: 'The Snug — cosy double room with floral feature wallpaper at The White Hart',
  },
  {
    id: 'bakers-suite',
    name: "The Baker's Suite",
    description: 'A generous family-style room with ample space, ideal for families or those wanting extra room to spread out.',
    bedType: 'Double + Single',
    sleeps: 3,
    price: 75,
    features: ['En-suite shower', 'Extra floor space', 'Family friendly', 'Smart TV'],
    image: '/images/room-bakers.webp',
    imageAlt: 'The Baker\'s Suite — spacious room with double and single beds, grey walls, window light',
  },
  {
    id: 'hart-room',
    name: 'The Hart Room',
    description: 'Featuring original floorboards and thoughtful modern updates. Heritage charm with every comfort.',
    bedType: 'Double + Single',
    sleeps: 3,
    price: 65,
    features: ['En-suite shower', 'Original floorboards', 'Heritage details', 'Smart TV'],
    image: '/images/room-hart.webp',
    imageAlt: 'The Hart Room — twin beds with white linen and wooden headboards at The White Hart',
  },
  {
    id: 'holsworthy-suite',
    name: 'The Holsworthy Suite',
    description: 'Our most flexible room, blending antique style with everyday function. Plenty of space for longer stays.',
    bedType: 'Double + Single',
    sleeps: 3,
    price: 85,
    features: ['En-suite shower', 'Antique furnishings', 'Extra storage', 'Smart TV'],
    image: '/images/room-holsworthy.webp',
    imageAlt: 'The Holsworthy Suite — double room with floral wallpaper, leather headboard and period furniture',
  },
];

export const amenities = [
  { icon: 'tv', label: 'Smart TV' },
  { icon: 'coffee', label: 'Tea & Coffee' },
  { icon: 'wifi', label: 'Free WiFi' },
  { icon: 'wind', label: 'Cooling Fan' },
  { icon: 'shirt', label: 'Iron & Board' },
  { icon: 'wind', label: 'Hairdryer' },
  { icon: 'gamepad', label: 'Billiards & Darts' },
  { icon: 'dog', label: 'Pet Friendly' },
];

export const hotelFacilities = [
  'Free WiFi throughout',
  'Bar with real ales (Cask Marque certified)',
  'VINYL Restaurant (Fri-Sat)',
  'Sunday Carvery',
  'Function room & ballroom',
  'Downstairs bar with pool table',
  'Pool & darts teams (leagues welcome)',
  'Sports TV',
  'Express check-in/check-out',
  'Dog friendly',
  'Family friendly',
  'Non-smoking throughout',
  'Card payments only',
];

export const breakfastInfo = {
  name: 'Full English Breakfast',
  price: 9.50,
  times: '7:30am – 9:30am',
  note: 'Available as an optional extra — not included with room rate.',
};
