export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: '1591',
    title: 'The Earliest Record',
    description: "The White Hart dates back to 1591 — the earliest record we've found, though parts of the building may be even older. The hart (deer) on our facade is original, a 'lodged' (sitting) white hart dating back to Richard II, who gave houses this symbol to show he used them as a residence. The building is thought to be the site of the original ancient manor house for Haroldsworthy (worthy = farm).",
    image: '/images/history-facade.webp',
    imageAlt: 'The White Hart Hotel facade showing the white hart deer statue, balcony, and entrance on Fore Street',
  },
  {
    year: '1800s',
    title: 'A Grade II Listed Coaching Inn',
    description: "The current building dates to the early-mid 19th century, built on the site of the earlier inn. Historic England describes it as rendered over brick with incised pilaster quoins and a slate roof concealed behind a parapet with three finials. The double-fronted plan includes a ballroom and service wing at the rear — a model of a recumbent white hart sits on a plinth above the porch with console brackets flanking the doorway.",
    image: '/images/history-building.webp',
    imageAlt: 'The White Hart decorated for St George\'s Day with England flags and bunting on the balcony',
  },
  {
    year: '1950s',
    title: 'Horses, Ostlers & Service Bells',
    description: "Horses were still stabled at the rear of the hotel. A local man, Mr Trace, was the Ostler — the person responsible for looking after guests' horses. The original service bells still hang in the foyer today, once connected to every room for room service. In those days, the White Hart was the centre of the community — the place where business was done, deals were struck, and news was shared.",
    image: '/images/history-bells.webp',
    imageAlt: 'The Sunday carvery serving station at The White Hart with roast meats and vegetables',
  },
  {
    year: '1982',
    title: 'The Hutchings Family Arrives',
    description: "On 7th November 1982, Richard and Annette Hutchings — along with their children Jon and Jo — completed the purchase of The White Hart. The hotel had been closed for over a year, and with Carnival night just seven days away, it was a monumental job to get open. But with the help of friends and family, the White Hart reopened in time for Carnival — and the Carnival Queen was crowned on the hotel's balcony, a tradition that continues to this day.",
    image: '/images/history-carnival.webp',
    imageAlt: 'The Hutchings family celebrating 30 years at The White Hart Hotel in 2012 — three generations together',
  },
  {
    year: '2005',
    title: 'Jon & Tam Take the Helm',
    description: "On 7th November 2005, Jon and Tam Hutchings completed the purchase of The White Hart from Jon's parents, Richard and Annette. A new chapter began — the same family values, the same warm welcome, but with fresh ideas and energy for the years ahead.",
    image: '/images/history-building.webp',
    imageAlt: 'The White Hart Hotel decorated for St George\'s Day with England flags on the balcony',
  },
  {
    year: '2008',
    title: 'The Pop Up Bar Company is Born',
    description: "Originally known as 'Event barZ', the Pop Up Bar Company launched from The White Hart in 2008, bringing professional mobile bar hire to weddings, festivals, and events across Devon and Cornwall. It quickly grew to become the South West's leading mobile bar service — all operated from the hotel on Fore Street.",
    image: '/images/history-popup.webp',
    imageAlt: 'Pop Up Bar Company festival setup with branded tents and deckchairs in a Devon field',
  },
  {
    year: 'Present Day',
    title: 'At the Heart of Holsworthy',
    description: "Now in its 44th year under the Hutchings family, The White Hart continues to evolve. Jon — a former Royal Navy serviceman, former Torridge District Councillor, and the current Mayor of Holsworthy — runs the hotel with his wife Tam. Post-covid, they launched the VINYL restaurant, bringing stone-baked pizzas, sharing plates, and live DJ sets to the town. Jon's commitment to Holsworthy extends far beyond the hotel: from campaigning to save the community hospital beds, to founding Holsworthy Mutual Aid during the pandemic, to organising St Peter's Fair and the Mayor's Charity Match Day. The Carnival Queen is still crowned on the White Hart's balcony — just as she has been since 1982.",
    image: '/images/history-today.webp',
    imageAlt: 'The VINYL restaurant at The White Hart — tables set for dinner with booth seating',
  },
];
