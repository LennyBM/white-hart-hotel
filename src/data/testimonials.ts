export interface Testimonial {
  quote: string;
  name: string;
  date: string;
  platform: 'tripadvisor' | 'booking' | 'google';
  rating: number;
  context?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'The steak cooked on volcanic hot rocks was an experience you must try. A perfect evening with welcoming staff from start to finish.',
    name: 'James L',
    date: 'February 2023',
    platform: 'tripadvisor',
    rating: 5,
    context: 'VINYL Restaurant',
  },
  {
    quote: 'Fabulous Sunday roast with multiple meat options, loads of vegetables, Yorkshires, stuffing and gorgeous gravy. Exceptional value and very friendly staff.',
    name: 'Vanessa W',
    date: 'March 2024',
    platform: 'tripadvisor',
    rating: 5,
    context: 'Sunday Carvery',
  },
  {
    quote: 'Room was warm, cosy and clean with a comfortable firm mattress. The food was wonderful — the macaroni cheese was a particular highlight.',
    name: 'Clare M',
    date: 'October 2024',
    platform: 'tripadvisor',
    rating: 5,
    context: 'Hotel Stay',
  },
  {
    quote: 'Anniversary dinner at VINYL was sublime. The rock slab cooking is unique, the decor is fantastic, and the service was perfectly paced and attentive.',
    name: 'Natalie P',
    date: 'October 2025',
    platform: 'tripadvisor',
    rating: 5,
    context: 'VINYL Restaurant',
  },
  {
    quote: 'A lovely old pub with bags of character. Friendly, welcoming staff and locals alike. Room was clean, comfortable, and great value.',
    name: 'Angela D',
    date: '2023',
    platform: 'tripadvisor',
    rating: 4,
    context: 'Hotel Stay',
  },
  {
    quote: 'Best value pub food we\'ve had. Very dog-friendly — our pets were made so welcome. Friendly service throughout. We\'ll definitely be back.',
    name: 'Sajeejitr',
    date: 'November 2024',
    platform: 'tripadvisor',
    rating: 5,
    context: 'Dog-Friendly Visit',
  },
  {
    quote: 'The sirloin on hot rock was one of the best steaks I\'ve had — you sear each bite to your exact preference. Very helpful and friendly staff.',
    name: 'Captain K',
    date: 'November 2024',
    platform: 'tripadvisor',
    rating: 5,
    context: 'Black Rock Grill',
  },
  {
    quote: 'Food was excellent and well priced. Staff are very friendly and helpful. A very comfortable stay at a good price.',
    name: 'Verified Guest',
    date: '2024',
    platform: 'booking',
    rating: 8,
    context: 'Hotel Stay',
  },
];
