export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  dietary?: string[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const barMenu: MenuSection[] = [
  {
    title: 'Homemade Classics',
    items: [
      { name: 'Steak & Ale Pie', price: 10.95, description: 'Homemade with rich gravy and flaky pastry' },
      { name: 'Lasagne', price: 10.95 },
      { name: 'Mac & Cheese with Garlic Bread', price: 8.95, dietary: ['v'] },
      { name: 'Chilli & Nachos', price: 9.95 },
      { name: 'Homemade Chilli & Rice', price: 11.95 },
      { name: 'Vegetable Chilli', price: 9.95, dietary: ['v', 'vg'] },
    ],
  },
  {
    title: 'Pub Favourites',
    items: [
      { name: 'Breaded Scampi & Chips', price: 12.50 },
      { name: 'Hunters Chicken', price: 11.50 },
    ],
  },
  {
    title: 'Burgers',
    items: [
      { name: 'Classic Burger', price: 9.95, description: 'Served in a brioche bun' },
      { name: 'Cheeseburger', price: 10.50 },
      { name: 'Tower Burger', price: 14.95 },
      { name: 'Pig Burger', price: 10.50 },
      { name: 'Dirty Pig', price: 10.95 },
      { name: 'Chicken Burger', price: 10.50 },
      { name: 'Cheesy Chick', price: 10.95 },
      { name: 'Super Chick', price: 11.95 },
      { name: 'Veggie Burger', price: 9.95, dietary: ['v'] },
    ],
  },
  {
    title: 'Ribs & Wings',
    items: [
      { name: 'Half Rack Ribs', price: 12.95 },
      { name: 'Full Rack Ribs', price: 19.95 },
      { name: '10 BBQ or Hot Wings', price: 12.95 },
    ],
  },
  {
    title: 'Sides',
    items: [
      { name: 'Skin-On Chips', price: 2.75 },
      { name: 'Loaded Cheesy Chips', price: 5.00 },
      { name: 'Loaded BBQ Pork Fries', price: 8.00 },
      { name: 'Onion Rings', price: 2.95 },
      { name: 'Coleslaw', price: 1.25 },
    ],
  },
  {
    title: "Children's Menu",
    items: [
      { name: 'Nuggets & Chips', price: 5.50 },
      { name: 'Sausage & Chips', price: 5.50 },
      { name: 'Fish Fingers & Chips', price: 5.50 },
    ],
  },
];

export const pizzaMenu: MenuSection[] = [
  {
    title: '12" Stone-Baked Pizzas',
    items: [
      { name: 'Rustic Classic', price: 11.00, description: 'Margherita base with mozzarella & tomato' },
      { name: 'Simple Salami', price: 14.00 },
      { name: 'BBQ Chicken', price: 15.00 },
      { name: 'Fully Loaded', price: 14.50 },
      { name: 'Nice & Spicy', price: 14.50 },
      { name: 'Garden Club', price: 14.50, dietary: ['v'] },
    ],
  },
];

export const dessertMenu: MenuSection[] = [
  {
    title: 'Desserts',
    items: [
      { name: "Farmer Tom's Ice Cream (120ml)", price: 2.50 },
      { name: "Farmer Tom's Ice Cream (1L)", price: 6.50 },
      { name: 'Banoffee Cheesecake', price: 3.95 },
      { name: 'Alabama Chocolate Fudge Cake', price: 3.95 },
    ],
  },
];

export interface MenuHighlight {
  title: string;
  description: string;
  image?: string;
}

export const barHighlights: MenuHighlight[] = [
  {
    title: 'Sunday Carvery',
    description: 'Locally sourced meats, crisp roast potatoes, and our signature rich marrow gravy. Booking advisable.',
  },
  {
    title: 'Black Rock Grill',
    description: 'Prime cuts of West Country beef, seared to perfection on volcanic rocks at your table.',
  },
  {
    title: 'Stone-Baked 12" Pizzas',
    description: 'Charred crust, premium toppings, curated flavour profiles. Gluten-free bases available.',
  },
];

export const barFavourites = [
  'Homemade Steak & Ale Pie',
  'Home-cooked Ham & Free-range Eggs',
  'Bubble & Squeak',
];

export const vinylTracklist = [
  { side: 'SIDE A', title: 'Stone-Baked Pizzas', description: 'Charred crust, premium toppings, curated flavour profiles.' },
  { side: 'SIDE B', title: 'Sharing Plates & Mains', description: 'Small plates designed for the social diner and the music lover.' },
  { side: 'REMIX', title: 'Cocktails & Drinks', description: 'House-infused spirits and craft cocktails.' },
];

export const weeklyEvents = [
  { day: 'Wednesday', event: 'Steak Night' },
  { day: 'Thursday', event: 'Pensioner Lunch Specials' },
  { day: 'Friday', event: 'VINYL Opens from 6pm' },
  { day: 'Saturday', event: 'VINYL + Live DJ Sets' },
  { day: 'Sunday', event: 'Sunday Carvery (booking essential)' },
];
