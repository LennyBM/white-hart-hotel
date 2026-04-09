export interface PopUpService {
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export const popUpServices: PopUpService[] = [
  {
    title: 'Festival Scale Logistics',
    description: 'High-volume service without compromising on quality. We specialise in rapid-pour systems and diverse menus for thousands of attendees.',
    icon: 'festival',
  },
  {
    title: 'Weddings',
    description: 'Bespoke cocktail menus, champagne arrivals, and rustic wooden bars to match your Devon wedding theme.',
    badge: 'As featured on Hitched & WeddingWire',
    icon: 'wedding',
  },
  {
    title: 'Equipment Hire',
    description: 'Just the gear? Full bar equipment from draught pumps to glassware and premium garnish kits.',
    icon: 'equipment',
  },
  {
    title: 'The Southwest Coverage',
    description: 'Operating across Devon and Cornwall \u2014 from Holsworthy and Bude to Exeter and Torquay. We bring the full White Hart experience to any location, backed by an established business with a permanent base on Fore Street.',
    icon: 'map',
  },
];

export const equipmentItems = [
  { label: 'Decor Kits', note: 'Available now' },
  { label: 'Glassware', note: '1,000+ pieces' },
  { label: 'Ice Systems', note: '24h delivery' },
  { label: 'Power Units', note: 'Silent running' },
];

export const eventTypes = ['Wedding', 'Festival', 'Corporate', 'Private Party', 'Other'];
