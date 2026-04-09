export interface VinylMenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  dietary?: ('v' | 'vg')[];
}

export interface VinylMenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: VinylMenuItem[];
}

export const vinylMenuSections: VinylMenuSection[] = [
  {
    id: 'starters',
    title: 'To Begin',
    items: [
      {
        id: 'sticky-bbq-ribs',
        name: 'Sticky BBQ Ribs',
        price: 8.95,
        description: 'Marinated in our own BBQ sauce',
      },
      {
        id: 'hot-wings-starter',
        name: 'Hot Wings',
        price: 7.50,
        description: 'Coated in a hot sauce with sweet chilli dip',
      },
      {
        id: 'bbq-wings-starter',
        name: 'BBQ Wings',
        price: 7.50,
        description: 'Marinated in our own BBQ sauce',
      },
      {
        id: 'brie-wedges',
        name: 'Deep Fried Brie Wedges',
        price: 9.50,
        description: 'Served with cranberry sauce',
        dietary: ['v'],
      },
      {
        id: 'garlic-bread-starter',
        name: '8" Garlic Bread',
        price: 5.50,
        description: 'Artisan bread with garlic & mozzarella',
        dietary: ['v'],
      },
      {
        id: 'nachos',
        name: 'Cheesey Nachos',
        price: 6.50,
        description: 'Corn tortillas, mozzarella & mild piquante peppers',
        dietary: ['v'],
      },
      {
        id: 'prawn-cocktail',
        name: 'Prawn Cocktail',
        price: 9.50,
        description: 'Served on a bed of mixed leaves with cocktail sauce',
      },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    subtitle:
      'All burgers come with coleslaw, beer battered onion rings and a choice of skin on chips, jacket potato or salad.',
    items: [
      {
        id: 'classic',
        name: 'Classic',
        price: 10.95,
        description: 'Homemade beef pattie in a brioche bun',
      },
      {
        id: 'cheeseburger',
        name: 'Cheeseburger',
        price: 11.95,
        description: 'Our homemade beef pattie topped with grated cheese in a brioche bun',
      },
      {
        id: 'the-tower',
        name: 'The Tower',
        price: 16.95,
        description: 'Two homemade beef patties with added bacon, grated cheese and a fried egg',
      },
      {
        id: 'chilli-burger',
        name: 'Chilli Burger',
        price: 14.50,
        description: 'A homemade beef pattie topped with our homemade beef chilli in a brioche bun',
      },
      {
        id: 'pig-burger',
        name: 'Pig Burger',
        price: 10.95,
        description: 'Home cooked pulled pork in a bar-b-q sauce, in a brioche bun',
      },
      {
        id: 'dirty-pig',
        name: 'Dirty Pig',
        price: 12.95,
        description:
          'Our homemade beef pattie with our home cooked BBQ pulled pork, topped with grated cheese in a brioche',
      },
      {
        id: 'cheesey-chick',
        name: 'Cheesey Chick',
        price: 11.95,
        description: 'Battered chicken burger topped with grated cheese in a brioche bun',
      },
      {
        id: 'super-chick',
        name: 'Super Chick',
        price: 13.95,
        description:
          'Battered chicken burger and bacon slices topped with grated cheese in a brioche bun',
      },
    ],
  },
  {
    id: 'black-rock',
    title: 'Black Rock Grill',
    subtitle:
      'All steaks sourced locally. Cooked on volcanic rock at your table at over 300°C — no fat or oil. Served with green salad, coleslaw, skin on chips, jacket potato or salad.',
    items: [
      { id: 'rump-4oz', name: 'Rump 4oz', price: 10.50 },
      { id: 'rump-8oz', name: 'Rump 8oz', price: 16.95 },
      { id: 'sirloin-8oz', name: 'Sirloin 8oz', price: 18.95 },
      { id: 'ribeye-10oz', name: 'Ribeye 10oz', price: 20.95 },
      { id: 'fillet-8oz', name: 'Fillet 8oz', price: 21.95 },
      { id: 'lamb-steak', name: 'Lamb Steak 8oz', price: 16.95 },
      { id: 'prawn-skewer-add', name: 'Add a King Prawn Skewer', price: 3.50 },
    ],
  },
  {
    id: 'fish',
    title: 'Fish',
    subtitle: 'Served with green salad, coleslaw, skin on chips, jacket potato or salad.',
    items: [
      {
        id: 'salmon-steak',
        name: 'Salmon Steak',
        price: 14.95,
        description: 'Baked salmon fillet served on a rock',
      },
      {
        id: 'prawn-skewers',
        name: 'Prawn Skewers',
        price: 15.95,
        description: 'King prawns with sliced peppers and onions',
      },
    ],
  },
  {
    id: 'veggie',
    title: 'Vegetarian / Vegan',
    subtitle: 'Served with green salad, coleslaw, skin on chips, jacket potato or salad.',
    items: [
      {
        id: 'veggie-skewers',
        name: 'Vegetarian Skewers',
        price: 9.00,
        description: 'Chunks of Quorn and vegetables on two skewers',
        dietary: ['v'],
      },
      {
        id: 'vegan-skewers',
        name: 'Vegan Skewers',
        price: 12.95,
        description:
          'Chunks of plant based Quorn with onions, peppers and mushrooms on two skewers',
        dietary: ['v', 'vg'],
      },
    ],
  },
  {
    id: 'essentials',
    title: 'In House Essentials',
    items: [
      {
        id: 'lasagne',
        name: 'Homemade Lasagne',
        price: 11.95,
        description:
          'Layers of local mince, pasta and tomato sauce with green salad garnish and garlic bread slices',
      },
      {
        id: 'chilli',
        name: 'Homemade Chilli',
        price: 10.95,
        description:
          'Locally sourced minced beef in a spicy tomato sauce, on a large bed of nachos, topped with grated cheese',
      },
      {
        id: 'mac-cheese',
        name: 'Mac & Cheese',
        price: 8.95,
        description: 'Our very own Mac & cheese recipe served up with garlic bread slices',
        dietary: ['v'],
      },
      {
        id: 'meaty-mac-cheese',
        name: 'Meaty Mac & Cheese',
        price: 12.95,
        description: 'Our Mac & Cheese topped with our BBQ pulled pork',
      },
    ],
  },
  {
    id: 'ribs',
    title: 'Ribs',
    subtitle:
      'Cooked in house and marinated in our own Jack Daniels BBQ sauce. Served with skin on chips or salad.',
    items: [
      { id: 'full-rack', name: 'Full Rack Ribs', price: 19.95 },
      { id: 'half-rack', name: 'Half Rack Ribs', price: 11.95 },
    ],
  },
  {
    id: 'wings',
    title: 'Wings',
    items: [
      {
        id: 'bbq-wings-6',
        name: 'House BBQ Wings x6',
        price: 9.95,
        description:
          'Tender chicken pieces cooked in our own Bar-b-q Jack Daniels sauce, with skin on chips or salad',
      },
      {
        id: 'bbq-wings-12',
        name: 'House BBQ Wings x12',
        price: 15.95,
        description:
          'Tender chicken pieces cooked in our own Bar-b-q Jack Daniels sauce, with skin on chips or salad',
      },
      {
        id: 'hot-wings-6',
        name: 'Hot Wings x6',
        price: 3.95,
        description: 'Coated in a hot sauce with sweet chilli dip',
      },
      {
        id: 'hot-wings-12',
        name: 'Hot Wings x12',
        price: 15.95,
        description: 'Coated in a hot sauce with sweet chilli dip',
      },
    ],
  },
  {
    id: 'pizzas',
    title: '12" Stone Baked Pizzas',
    subtitle:
      'Our artisan pizza bases are made using premium re-milled durum semolina, hand stretched and stone baked. Gluten free bases available — prepared in a kitchen that uses gluten.',
    items: [
      {
        id: 'rustic-classic',
        name: 'Rustic Classic',
        price: 11.00,
        description:
          'Rustic combination of oregano infused tomato sauce and creamy Fior di Latte mozzarella',
        dietary: ['v'],
      },
      {
        id: 'fully-loaded',
        name: 'Fully Loaded',
        price: 14.50,
        description:
          'Oregano infused tomato sauce, Fior di Latte mozzarella, Parmigiano Reggiano, Parma ham, topped with a dash of balsamic glaze',
      },
      {
        id: 'nice-spicy',
        name: 'Nice & Spicy',
        price: 14.50,
        description:
          "Oregano infused tomato sauce, Fior di Latte mozzarella, Calabrian 'Nduja sausage, Peppadew peppers, fiery Ventricina salami & sliced Roquito peppers",
      },
      {
        id: 'bbq-chicken-pizza',
        name: 'BBQ Chicken',
        price: 15.00,
        description:
          'Our very own BBQ Jack Daniels sauce base, Fior di Latte mozzarella, pulled seared chicken breast, sweet & sour red onions and speck ham',
      },
      {
        id: 'simply-salami',
        name: 'Simply Salami',
        price: 14.00,
        description:
          'Delicious cured Napoli salami with oregano infused tomato sauce and Fior di Latte mozzarella',
      },
      {
        id: 'garden-club',
        name: 'The Garden Club',
        price: 14.50,
        description:
          'Oregano infused tomato sauce, Fior di Latte mozzarella, sweet & sour red onion, Peppadew peppers, olives and pumpkin seeds, finished with peppery rocket',
        dietary: ['v'],
      },
    ],
  },
  {
    id: 'extras',
    title: 'Extras',
    items: [
      {
        id: 'garlic-bread',
        name: '8" Garlic Bread',
        price: 4.75,
        description: 'Baked artisan bread spread with garlic infused butter',
        dietary: ['v'],
      },
      {
        id: 'garlic-mozz-bread',
        name: '8" Garlic & Mozzarella Bread',
        price: 5.50,
        description:
          'Artisan bread baked with Fior di Latte mozzarella and spread with garlic butter',
        dietary: ['v'],
      },
    ],
  },
];
