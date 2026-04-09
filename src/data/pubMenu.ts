export interface MenuItem {
  name: string;
  description?: string;
  price: string | { cup?: string; mug?: string; small?: string; large?: string };
  highlight?: boolean; // regulars' favourite
  note?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
}

export const pubMenuSections: MenuSection[] = [
  {
    id: 'burgers',
    title: 'Burgers',
    subtitle: 'All served in a brioche bun with mixed lettuce, homemade coleslaw, onion rings & chips',
    items: [
      { name: 'Classic Beef Burger', description: 'Homemade 6oz meat pattie', price: '£10.50' },
      { name: 'Cheese Burger', description: 'Homemade 6oz meat pattie with Davidstow cheddar', price: '£11.50' },
      { name: 'Chicken Burger', description: 'Breaded buttermilk chicken breast', price: '£10.50' },
      { name: 'Super Chick', description: 'Breaded buttermilk chicken breast with Davidstow cheddar', price: '£13.50' },
      { name: 'Breaded Vegetable Burger', price: '£9.50' },
      { name: 'White Hart Tower Burger', description: 'Two homemade beef patties with bacon, Davidstow cheddar and a fried egg', price: '£16.50', highlight: true },
      { name: 'Pulled Pork', description: 'Cooked in our very own Jack Daniels BBQ sauce', price: '£10.50' },
      { name: 'Dirty Pig', description: 'BBQ Pulled pork & a meat pattie', price: '£12.50' },
    ],
  },
  {
    id: 'pub-classics',
    title: 'Pub Classics',
    note: 'Highlighted dishes are our regulars\' favourites',
    items: [
      { name: 'Bubble & Squeak, Ham & Eggs', description: 'Home cooked ham and home made bubble & squeak', price: '£11.50' },
      { name: 'Ham, Eggs & Chips', description: 'Home cooked ham, two eggs and chips', price: '£11.50' },
      { name: 'Homemade Lasagne', description: 'Layers of local mince and pasta served with garlic bread', price: '£11.95', highlight: true },
      { name: 'Homemade Chilli', description: 'On a bed of rice with nachos', price: '£10.95', highlight: true },
      { name: 'Homemade Chilli & Nachos', description: 'A large helping of nachos topped with chilli and Davidstow cheddar', price: '£9.95' },
      { name: 'Hunters Chicken', description: 'Layers of bacon and chicken breast topped with Davidstow cheddar & Hickory Bar B Q sauce', price: '£12.95', highlight: true },
      { name: 'Sausage Egg and Chips', description: 'Pork & Beef with two fried eggs and chips', price: '£10.50' },
      { name: 'Homemade Pie of the Day', description: 'See specials board, served with chips & peas', price: '£10.95' },
      { name: 'All Day Breakfast', description: '2 bacon, 2 sausages, 2 hash browns, 2 fried eggs, tomato & toast', price: '£9.95' },
      { name: 'Battered Cod', description: 'Battered Cod served with lemon, peas and chips', price: '£11.50' },
      { name: 'Scampi', description: 'Whole tail Scampi (10 pieces) with peas & chips', price: '£13.95' },
    ],
  },
  {
    id: 'pizzas',
    title: '12" Stone Baked Pizzas',
    subtitle: 'Our artisan pizza bases are made using premium pre-milled durum semolina, hand stretched and stone baked',
    items: [
      { name: 'Rustic Classic', description: 'Rustic combination of oregano infused tomato sauce and creamy Fior di Latte mozzarella', price: '£11.00' },
      { name: 'Fully Loaded', description: 'Oregano infused tomato sauce, Fior di Latte mozzarella, Parmigiano Reggiano, Parma ham — topped with a dash of balsamic glaze', price: '£14.50' },
      { name: 'Nice & Spicy', description: 'Oregano infused tomato sauce, Fior di Latte mozzarella, Calabrian \'Nduja sausage, Peppadew peppers, fiery Ventrica salami & sliced Roquito peppers', price: '£14.50' },
      { name: 'BBQ Chicken', description: 'Our own BBQ Jack Daniels sauce base, Fior di Latte mozzarella, pulled seared chicken breast, sweet & sour red onions and speck ham', price: '£15.00' },
      { name: 'Simply Salami', description: 'Delicious cured Napoli salami with oregano infused tomato sauce and Fior di Latte mozzarella', price: '£14.00' },
      { name: 'The Garden Club', description: 'A vegetarian celebration with oregano infused tomato sauce, Fior di Latte mozzarella, sweet & sour red onion, Peppadew peppers, olives and pumpkin seeds — finished with peppery rocket', price: '£14.50' },
      { name: '8" Garlic Bread', price: '£4.75' },
      { name: '8" Garlic Bread with Mozzarella', price: '£5.50' },
    ],
  },
  {
    id: 'loaded-fries',
    title: 'Loaded Fries',
    items: [
      { name: 'BBQ Pulled Pork', price: '£8.00' },
      { name: 'Hunters', description: 'Chicken, bacon & BBQ sauce', price: '£11.95' },
      { name: 'Cheesy Bacon', price: '£7.00' },
      { name: 'Chilli Cheese', price: '£9.00' },
      { name: 'Cheesy Fries', price: '£5.50' },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    subtitle: 'Thick white sliced bread, served with nachos',
    items: [
      { name: 'Home Cooked Ham', price: '£5.75' },
      { name: 'Atlantic Prawns', price: '£9.25' },
      { name: 'Davidstow Cheddar', price: '£5.50' },
      { name: 'Bacon', price: '£6.50' },
      { name: 'Tuna & Mayonnaise', price: '£7.00' },
      { name: 'White Hart Triple Club', price: '£10.50', highlight: true },
    ],
  },
  {
    id: 'jacket-potatoes',
    title: 'Jacket Potatoes',
    subtitle: 'Served with a salad garnish — choose your filling',
    items: [
      { name: 'Baked Beans', price: '£7.50' },
      { name: 'Homemade Chilli', price: '£9.50' },
      { name: 'Tuna & Mayonnaise', price: '£7.95' },
      { name: 'Davidstow Cheddar', price: '£7.95' },
      { name: 'Cheese & Beans', price: '£8.95' },
      { name: 'Atlantic Prawns', price: '£10.50' },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    subtitle: 'Generous green salad, tomato, onion, Branston Pickle, homemade coleslaw and a slice of thick white bloomer',
    items: [
      { name: 'Davidstow Cheddar', price: '£10.95' },
      { name: 'Home Cooked Ham', price: '£10.95' },
      { name: 'Atlantic Prawns', price: '£12.50' },
      { name: 'Chicken and Bacon', price: '£12.50' },
    ],
  },
  {
    id: 'omelette',
    title: 'Three Egg Omelette',
    subtitle: 'With choice of chips or salad — choose your filling',
    items: [
      { name: 'Home Cooked Ham & Cheese', price: '£9.50' },
      { name: 'Davidstow Cheddar', price: '£9.00' },
      { name: 'Atlantic Prawns', price: '£9.50' },
      { name: 'Mushroom', price: '£9.00' },
    ],
  },
  {
    id: 'curry',
    title: 'Curry',
    subtitle: 'With rice & poppadum',
    items: [
      { name: 'Chicken Korma', price: 'See board' },
      { name: 'Chicken Madras', price: 'See board' },
      { name: 'Prawn Korma', price: 'See board' },
      { name: 'Prawn Madras', price: 'See board' },
      { name: 'Vegetable Korma', price: 'See board' },
      { name: 'Vegetable Madras', price: 'See board' },
    ],
  },
  {
    id: 'kids',
    title: "Children's Menu",
    subtitle: 'For under 12s — includes a free colouring set',
    items: [
      { name: '4oz Steak and Chips', price: '£9.50' },
      { name: 'Sausage, Egg and Chips', price: '£5.00' },
      { name: 'Chicken Nuggets and Chips', price: '£6.00' },
      { name: 'Ham, Egg and Chips', price: '£5.00' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'Dunstaple Farm ice cream — locally made near Holsworthy',
    note: 'Flavours: Clotted Cream Vanilla · Double Choc · Strawberry · Cheesecake · Toffee Fudge',
    items: [
      { name: '3 Scoop Ice Cream', price: '£3.75' },
      { name: '4 Scoop Ice Cream', price: '£4.75' },
      { name: '5 Scoop Ice Cream', price: '£5.75' },
      { name: 'Kids Trio', description: 'Sweets, ice cream & dip', price: '£4.95' },
      { name: 'Chocolate Nirvana', description: 'To share — thin pizza base smothered in Nutella, topped with chocolate brownie, granola and chocolate sauce', price: '£7.95', highlight: true },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      { name: 'Portion of Chips', price: '£2.95' },
      { name: 'Homemade Coleslaw', price: '£1.75' },
      { name: 'Bread & Butter (2 slices)', price: '£1.50' },
      { name: 'Crispy Side Salad', price: '£4.95' },
      { name: 'Naan Bread', price: '£1.50' },
      { name: 'Beer Battered Onion Rings', price: '£2.95' },
      { name: 'Fried Egg', price: '£1.50' },
      { name: '8" Garlic Bread', price: '£4.75' },
      { name: '8" Garlic Bread with Mozzarella', price: '£5.50' },
      { name: 'Garlic Ciabatta', price: '£2.25' },
      { name: 'Poppadum', price: '£1.25' },
      { name: 'Toast & Butter', price: '£1.95' },
      { name: 'Garden Peas', price: '£1.50' },
      { name: 'Heinz Baked Beans', price: '£2.00' },
      { name: 'Side of Nachos', price: '£1.75' },
    ],
  },
  {
    id: 'hot-drinks',
    title: 'Hot Drinks',
    items: [
      { name: 'Espresso', price: '£2.00' },
      { name: 'Americano', price: { cup: '£2.00', mug: '£3.25' } },
      { name: 'Café Latte', price: { cup: '£2.00', mug: '£3.25' } },
      { name: 'Cappuccino', price: { cup: '£2.00', mug: '£3.25' } },
      { name: 'Café Mocha', price: { cup: '£2.00', mug: '£3.25' } },
      { name: 'Pot of Tea for One', price: { cup: '£2.50', mug: '£2.00' } },
      { name: 'Hot Chocolate', price: { cup: '£2.30', mug: '£3.75' } },
    ],
  },
  {
    id: 'soft-drinks',
    title: 'Soft Drinks',
    items: [
      { name: 'Pepsi Max (16oz)', price: '£2.25' },
      { name: 'Pepsi Max (Pint)', price: '£3.50' },
      { name: 'Orange Juice (½ Pint)', price: '£1.95' },
      { name: 'Lemonade (Pint)', price: '£3.50' },
      { name: 'J2O Apple & Raspberry', price: '£2.95' },
      { name: 'Fever Tree Ginger Ale', price: '£2.75' },
      { name: 'Britvic Pineapple (200ml)', price: '£2.00' },
      { name: 'Still Water', price: '£1.50' },
      { name: 'Appetiser', price: '£2.75' },
    ],
  },
  {
    id: 'alcohol-free',
    title: 'Alcohol Free',
    items: [
      { name: 'Becks Zero', price: '£3.00' },
      { name: 'Doombar Zero', price: '£4.00' },
      { name: 'Thatchers Zero', price: '£4.95' },
      { name: 'Guinness 0.0', price: '£4.80' },
    ],
  },
];
