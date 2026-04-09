# Website Structure & Information Architecture
## White Hart Hotel, Holsworthy — Complete Briefing Document, 2026

---

## Executive Summary

The right website structure for a pub/hotel business serves three simultaneous masters: the user (can they find what they need quickly?), the search engine (are pages properly themed and interconnected?), and the business (does the structure drive towards the conversion goals?). This document provides a complete website structure, page-by-page content specification, navigation design, and URL architecture.

---

## 1. Core User Journeys

Before designing structure, understand who visits and why:

**Journey 1: The Accommodation Seeker**
Search → Homepage → Rooms page → Individual room → Book → Confirmation

**Journey 2: The Food Visitor**
Search "pub food holsworthy" → Food page → Menu → Book a table → Confirmation

**Journey 3: The Event Planner**
Search "function room holsworthy" → Events/Private Hire page → Enquiry form

**Journey 4: The Wedding Researcher**
Search "wedding venue holsworthy" → Weddings page → Gallery → Enquiry

**Journey 5: The Local Regular**
Direct visit → Homepage → What's On → Menu → Book a table

**Journey 6: The Tourist Planning a Trip**
Search "things to do holsworthy" → Local Area guide → Homepage → Rooms → Book

The site structure must serve all 6 journeys without friction.

---

## 2. Full Recommended Sitemap

### PRIMARY NAVIGATION (Main Menu)

```
HOME
├── STAY
│   ├── Our Rooms (overview page)
│   ├── [Room 1 Name] (individual page)
│   ├── [Room 2 Name] (individual page)
│   ├── [Room 3 Name] (individual page)
│   └── [Room N Name] (individual page)
│
├── EAT & DRINK
│   ├── Food Menu
│   ├── Drinks Menu
│   ├── Sunday Lunch
│   └── Specials Board
│
├── EVENTS
│   ├── What's On (events calendar)
│   ├── Private Hire
│   ├── Weddings
│   ├── Christmas & Celebrations
│   └── Corporate / Away Days
│
├── EXPLORE (Local Area)
│   ├── Things to Do in Holsworthy
│   ├── Local Walks & Cycling
│   ├── Beaches & Coast
│   ├── Dartmoor Day Trips
│   └── Getting Here
│
└── ABOUT
    ├── Our Story
    ├── The Team
    ├── Our Suppliers
    ├── Gallery
    ├── Press & Awards
    └── Contact Us
```

### FOOTER NAVIGATION (Secondary)
```
BOOK         LEGAL            CONNECT
Book a Room  Privacy Policy   Facebook
Book a Table Cookie Policy    Instagram
Gift Vouchers T&Cs            TripAdvisor
              Accessibility   Google Maps
QUICK LINKS
Rooms        FAQs
Menu         Directions
Events       Jobs
Weddings
```

---

## 3. Page-by-Page Content Specification

### HOME PAGE

**Purpose:** Conversion gateway. Must serve all visitor types and direct them to their journey.

**Sections (in order):**

1. **Hero** — Best hotel/pub image, primary headline, 2 CTAs (Book Room / Book Table)
2. **Trust bar** — Google rating, TripAdvisor badge, "Est. [year]", key stats
3. **Rooms intro** — 2-3 sentence intro + CTA to rooms, thumbnail image
4. **Food intro** — 2-3 sentence intro + CTA to menu, food image
5. **Events/Private Hire intro** — 2-3 sentence intro + CTA
6. **Why White Hart** — USP bullets: local food, dog friendly, free parking, etc.
7. **Recent reviews** — 3 Google/TripAdvisor reviews, star ratings
8. **What's On preview** — Next 3 upcoming events
9. **Local area teaser** — "Explore Devon from our door" with image grid + link
10. **About/Story snippet** — Short human intro + team photo + link to About
11. **Gift vouchers promo** — Banner or section
12. **Find Us / Map** — Embedded Google map, address, phone, hours
13. **Footer** — Full links, legal, social

**SEO requirements:**
- H1: Contains "White Hart Hotel Holsworthy" + value proposition
- Schema: LodgingBusiness, FoodEstablishment, LocalBusiness

---

### STAY / ROOMS OVERVIEW PAGE

**Purpose:** Help users find the right room and initiate a booking.

**Sections:**
1. Hero image of best room, H1: "Rooms & Accommodation — White Hart Hotel Holsworthy"
2. Introductory copy (2 paragraphs): Overall hotel offer, what makes rooms special
3. Booking widget — prominent, "Check availability for your dates"
4. Room cards — One card per room with: name, hero photo, 2-3 sentence description, bed type, max occupancy, price from, [Book This Room] CTA
5. Amenities list — All-hotel amenities: free parking, WiFi, en-suite, dog friendly, etc.
6. Policies — Check-in/out times, cancellation, pet policy, accessibility info
7. Trust section — Review quotes specifically about rooms
8. FAQ — 5 most common room-related questions

**SEO requirements:**
- H1: "Hotel Rooms in Holsworthy, Devon"
- Schema: LodgingBusiness with room details
- Internal links: To each individual room page

---

### INDIVIDUAL ROOM PAGES (One per room)

**Purpose:** Convert a browser into a booker for this specific room.

**URL structure:** `/stay/[room-name]` e.g. `/stay/the-garden-room`

**Sections:**
1. Full-width hero photo of room
2. Room name as H1
3. Photo gallery (minimum 6 photos: wide shot, bathroom, view, details)
4. Emotive room description (3-4 paragraphs — see copywriting guide)
5. Room details table: Bed type, max occupancy, floor, bathroom type, views
6. Amenities checklist: En-suite, WiFi, TV, tea/coffee, hairdryer, iron, etc.
7. Booking widget or "Book This Room" CTA
8. "Best for" section: "This room is ideal for... couples seeking a quiet retreat / business travellers / dog owners"
9. "You might also like" — Links to 2 other rooms
10. Reviews mentioning this room (if any)

**SEO requirements:**
- H1: "[Room Name] — White Hart Hotel Holsworthy"
- Schema: HotelRoom within parent LodgingBusiness
- Alt text on all images

---

### EAT & DRINK — FOOD MENU PAGE

**Purpose:** Showcase food quality, encourage table booking, assist dietary planning.

**Sections:**
1. Hero food image, H1: "Our Food — White Hart Hotel, Holsworthy"
2. Menu intro copy (sourcing philosophy, local produce)
3. Serving times — clearly displayed in a styled box
4. Dietary filter buttons: All | Vegetarian | Vegan | Gluten-Free
5. Menu sections with H2s: Starters | Mains | Puddings | Children's | Bar Snacks
6. Each dish: Name, description, allergen indicators, price
7. "Allergens and dietary info" section — link to allergen PDF or inline table
8. CTA after each section: "Fancy it? Book a table" button
9. Specials note: "We also run weekly specials — ask the team or check our Facebook"
10. Full-page footer CTA: "Reserve your table"

**SEO requirements:**
- H1: "Pub Food Menu — White Hart Hotel Holsworthy Devon"
- Schema: FoodEstablishment, Menu, MenuItem
- HTML menu (NOT PDF-only)

---

### SUNDAY LUNCH PAGE

**Purpose:** Capture high-value Sunday lunch trade (often the highest-revenue service).

**URL:** `/eat-drink/sunday-lunch`

**Sections:**
1. Hero image of Sunday roast
2. H1: "Sunday Lunch at the White Hart, Holsworthy"
3. Copy: What makes the Sunday lunch special, sourcing, tradition
4. Menu details: Roast options (with prices), Yorkshire puddings, veg, gravy details
5. Booking CTA: "Book your Sunday table — we fill up fast"
6. Times: What time Sunday lunch is served, last orders
7. Reviews: Specific Sunday lunch review quotes
8. FAQ: "Can I bring my dog?", "Do I need to book?", "Can you cater for large groups?"

---

### DRINKS MENU PAGE

**Purpose:** Showcase the drinks offer, particularly real ales and local drinks.

**Sections:**
1. Intro copy: Bar philosophy, real ales, local drinks
2. Cask ales currently on (with tasting notes)
3. Craft beers and keg
4. Wines (by glass and bottle)
5. Spirits and cocktails
6. Soft drinks and hot drinks
7. Note about allergens/sulphites in wine
8. "Our suppliers" — name local breweries and cider producers

---

### WHAT'S ON / EVENTS CALENDAR PAGE

**Purpose:** Drive repeat visits and event bookings.

**Sections:**
1. H1: "What's On at the White Hart Holsworthy"
2. Events calendar (visual calendar format or list with images)
3. Each event: Date, name, description, time, ticket/booking info, image
4. Filter: Regular events | Live music | Quiz | Sport | Family
5. "Don't miss" section: Next 3 featured events
6. Newsletter sign-up: "Get our events newsletter — never miss a night at the Hart"
7. CTA for private hire: "Want to host your own event? See our Private Hire page"

**Schema:** Event markup on each event listing

---

### PRIVATE HIRE / FUNCTIONS PAGE

**Purpose:** Generate function room enquiries.

**Sections:**
1. Hero: Function room dressed for an event
2. H1: "Private Hire & Functions — White Hart Hotel Holsworthy"
3. Intro copy: What we offer, types of events hosted
4. Capacities: Sit-down dinner: X, Standing: Y, Boardroom: Z
5. What's included: Tables, chairs, AV, kitchen access, bar arrangement, etc.
6. Catering options: In-house menus, external caterers welcome, etc.
7. Photo gallery of past events
8. Testimonials from past private hire clients
9. "Perfect for:" section — birthdays, wakes, corporate, baby showers, etc.
10. Pricing guide or "packages from £X" (reduces barrier to enquiry)
11. Enquiry form: Name, event type, date, approx numbers, requirements
12. FAQ: "Can I bring an outside cake?", "Is there a hire fee?", "What about AV equipment?"

---

### WEDDINGS PAGE

**Purpose:** Generate wedding enquiries (high-value, high-commitment conversions).

**Sections:**
1. Full-width wedding photography hero
2. H1: "Weddings at the White Hart, Holsworthy, Devon"
3. Emotional intro copy: Why White Hart for a wedding
4. Key facts box: Licence type, max capacity, accommodation rooms available for wedding party
5. Wedding gallery (essential — brides research visually)
6. What we offer: Civil ceremony, reception, wedding breakfast packages
7. Sample package details (with prices if possible — package pricing reduces no-shows to enquiries)
8. Catering: Menu options, tasting session offer
9. Accommodation: "How many rooms for the wedding party"
10. Preferred suppliers: Local florists, photographers, musicians, cake makers
11. Testimonials from previous couples
12. Contact form: Dedicated wedding enquiry form
13. "Download our wedding brochure" — PDF capture with email

---

### LOCAL AREA / EXPLORE PAGE

**Purpose:** SEO traffic from area searches + value for visiting guests.

**Sections:**
1. H1: "Exploring Devon from White Hart Hotel, Holsworthy"
2. Intro: Why Holsworthy makes a great base
3. Section per activity type: Walks | Coast | Dartmoor | Cycling | Attractions | Markets
4. Each suggestion: Name, distance from hotel, brief description, what makes it special
5. Downloadable walking map (PDF) — high value for walkers
6. "How to get here" section with embedded map
7. Seasonal highlights: What's special in each season

---

### ABOUT / OUR STORY PAGE

**Purpose:** Build trust and emotional connection.

**Sections:**
1. Hero: Owner/team photo in the pub
2. H1: "About the White Hart Hotel, Holsworthy"
3. Story: History of the building + current owners' story
4. Team section: Named staff with photos and short bios
5. Values: What we care about (food provenance, community, etc.)
6. Our suppliers: Named local farms, breweries, producers
7. Community: How we're embedded in Holsworthy (sponsorships, events, etc.)
8. Timeline / key milestones (if historically interesting)
9. Press & awards section
10. CTA to rooms and food

---

### CONTACT PAGE

**Purpose:** Direct contact for all enquiries, drive towards phone/email.

**Sections:**
1. H1: "Find Us — White Hart Hotel, Holsworthy"
2. Address, phone, email — large, clear, click-to-call/email
3. Embedded Google Map (full-width)
4. Opening hours — all services (bar, food, accommodation check-in)
5. Directions by car (from key nearby towns)
6. Parking information
7. Public transport options (if any)
8. Contact form: Name, email, enquiry type, message
9. Accessibility information

**Schema:** LocalBusiness with full address, geo coordinates, openingHours

---

### FAQ PAGE

**Purpose:** Reduce support queries + capture voice search + schema FAQ markup

**Questions to cover:**
- What are your check-in and check-out times?
- Do you allow dogs?
- Is there parking at the White Hart Hotel?
- What time do you serve food?
- Do I need to book a table?
- Can I book a room for just one night?
- Is there WiFi?
- Are you wheelchair accessible?
- Do you host weddings?
- Can I hire the function room for a private event?
- What's included in the room rate?
- Do you do gift vouchers?
- Is there a carvery/Sunday lunch?
- How far are you from the coast?
- How far are you from Dartmoor?

---

## 4. URL Structure

**Principles:**
- Short, descriptive, keyword-inclusive
- No dates in URLs (content becomes stale)
- Lowercase, hyphens not underscores
- Logical hierarchy

**Recommended URL structure:**

| Page | URL |
|------|-----|
| Home | `/` |
| Rooms overview | `/stay/` |
| Room 1 | `/stay/garden-room/` |
| Room 2 | `/stay/market-room/` |
| Food menu | `/eat-drink/food-menu/` |
| Sunday lunch | `/eat-drink/sunday-lunch/` |
| Drinks menu | `/eat-drink/drinks-menu/` |
| Events calendar | `/events/` |
| Private hire | `/events/private-hire/` |
| Weddings | `/events/weddings/` |
| Christmas | `/events/christmas/` |
| Local area | `/explore/` |
| Walks | `/explore/walks-near-holsworthy/` |
| About | `/about/` |
| Team | `/about/our-team/` |
| Suppliers | `/about/our-suppliers/` |
| Contact | `/contact/` |
| FAQ | `/faq/` |
| Gift vouchers | `/gift-vouchers/` |
| Blog | `/blog/` |
| Blog post | `/blog/[post-slug]/` |

---

## 5. Internal Linking Strategy

Internal links help users navigate and tell search engines what's important.

### Key Internal Linking Rules
- Every page should have at least 3-5 internal links to other pages
- Homepage links to all main sections
- Rooms page links to each individual room
- Each room page links to 2 other rooms ("You might also like")
- Food page links to Sunday Lunch, Drinks, Events
- Events links to Private Hire, Weddings, What's On
- Every page links back to homepage (via logo/breadcrumb)
- Blog posts should link to relevant service pages (a walking guide links to rooms)
- Local area pages link to rooms (converting informational to transactional)

### Breadcrumb Structure
On all pages below the top level:
`Home > Stay > The Garden Room`

---

## 6. Navigation Design

### Primary Navigation (Desktop)
Maximum 5 items: `Stay | Eat & Drink | Events | Explore | About`
CTA button in nav: `[Book Now]` — always visible, distinct colour

### Mobile Navigation
Hamburger menu with same structure
Sticky header with logo, phone number (click-to-call), and "Book" button
Sticky bottom bar: `[📞 Call] [🛏 Room] [🍽 Table]`

### Mega Menu (optional, desktop only)
Stay: hover to show room names
Eat & Drink: hover to show: Food Menu | Sunday Lunch | Drinks | Specials
Events: hover to show: What's On | Private Hire | Weddings | Christmas
This helps users jump directly to what they need

---

## 7. Blog/News Section

### Why Worth Having
- Attracts long-tail SEO traffic (local area searches, seasonal queries)
- Signals to Google the site is actively maintained
- Provides shareable social content
- Builds loyalty with regular readers

### Blog Post Templates
- **Event recap posts:** "Last Night's Quiz — The Results" (quick, community-building)
- **Area guide posts:** "5 Best Walks from Holsworthy" (SEO value)
- **Seasonal posts:** "Our Christmas Menu Has Landed" (conversion)
- **Behind the scenes:** "Where Our Food Comes From" (trust)
- **News posts:** "We're Now Open for Breakfast on Weekends" (announcement)

### Minimum viable blog output: 2 posts/month

---

## 8. Page Speed Architecture Recommendations

**Images:** WebP format, lazy loading for below-fold, explicit width/height attributes
**Booking widget:** Load asynchronously so it doesn't block page render
**Fonts:** Load 2 fonts maximum, use font-display: swap
**Scripts:** Load third-party scripts (analytics, chat widgets) deferred
**CSS:** Critical CSS inlined, rest deferred
**Hosting:** UK-based hosting or Cloudflare CDN with UK edge nodes

---

*Document prepared for White Hart Hotel, Holsworthy — April 2026*
