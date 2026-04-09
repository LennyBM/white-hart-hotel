export interface OpeningHoursEntry {
  days: string;
  hours: string;
  highlight?: boolean;
}

export const openingHours: OpeningHoursEntry[] = [
  { days: 'Monday – Thursday', hours: '11am – 11pm' },
  { days: 'Friday – Saturday', hours: '11am – Midnight' },
  { days: 'Sunday', hours: '11am – 10:30pm', highlight: true },
];

export const kitchenNote = 'Kitchen closes at 8:30pm daily. No kitchen Sunday evening.';
