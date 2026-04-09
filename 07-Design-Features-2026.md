# Design Factors & Website Features — 2026
## White Hart Hotel, Holsworthy — Complete Briefing Document

---

## Executive Summary

Website design in hospitality has never mattered more. In 2026, users make booking decisions in seconds based on first visual impressions, and the bar for "professional" has risen dramatically. This document covers every design decision, visual principle, technology feature, and UX factor needed to build a competitive hospitality website that converts in 2026.

---

## 1. Visual Design Principles for Pub/Hotel Sites

### The Core Design Challenge
A pub/hotel website must communicate warmth, quality, and trustworthiness simultaneously. It must feel local and personal without looking amateur. It must be visually compelling while remaining fast.

### Design Aesthetic for White Hart Hotel

**Recommended direction:** Traditional with Modern Execution  
Not stuffy. Not the same template every other local pub uses. A design that feels as though the pub itself has been thoughtfully presented rather than templated.

**Visual references to aim for:**
- Warm, earthy colour palettes (creams, deep greens, burned oranges, slate)
- Serif display typography for headings (feels considered, traditional)
- Clean sans-serif for body copy (readable, modern)
- Generous white space — don't cram, let the images breathe
- Full-bleed hero photography
- Subtle texture overlays (grain, paper texture) to add warmth without heaviness

**Avoid:**
- Bright clinical white backgrounds with no warmth
- Stock photography
- Gradient-heavy modern "tech startup" aesthetics
- Heavy drop shadows and gradients that feel 2010-era
- Times New Roman or Comic Sans type choices
- Too many competing fonts (maximum 2 font families)

---

## 2. Colour Psychology for Pub/Hotel Branding

### Colour Associations in Hospitality

| Colour | Association | Use |
|--------|------------|-----|
| Deep green | Nature, Devon, trust, tradition | Primary brand colour |
| Warm cream/ivory | Warmth, welcome, quality | Background tones |
| Burnt orange/amber | Warmth, autumn, real ale, fireside | Accent, CTA buttons |
| Slate/charcoal | Substance, quality, sophistication | Typography |
| Gold/brass | Heritage, quality, pub fittings | Decorative accents |
| White | Clean, modern, breathe | Space/separation |

**Recommended palette for a traditional Devon pub-hotel:**
- Primary: Deep forest green (`#2D4A3E` or similar)
- Secondary: Warm cream (`#F5EDD6`)
- Accent: Amber/burnt orange (`#C87941`)
- Text: Deep charcoal (`#2A2A2A`)
- Background: Off-white (`#FAFAF7`)

**Note:** The specific hex values should be determined by a designer in the context of the actual brand, photography, and building — these are directional guidelines.

---

## 3. Typography

### Type Hierarchy for Hospitality

**Display/Hero font:** Serif, characterful, warm  
Examples: Playfair Display, Cormorant Garamond, Libre Baskerville, Georgia (fallback)  
Use for: H1 headings, hero text, pull quotes

**Body font:** Humanist sans-serif, highly readable  
Examples: Source Sans Pro, Inter, Lato, Nunito Sans  
Use for: Body text, captions, nav, buttons

**Rules:**
- Maximum 2 font families on the site
- Display font: 32px+ for H1, 24px for H2
- Body text minimum 16px (18px preferred)
- Line height 1.5-1.7 for body copy
- Don't use light font weights (300) for small text — poor accessibility
- Load fonts from Google Fonts or self-host — avoid multiple font service calls

---

## 4. Photography Requirements & Direction

Photography is the single most important visual investment for a hospitality website.

### Shoot Requirements (Minimum Viable)

**Location/Exterior:**
- Front of building in good light (golden hour preferred: 1 hour before sunset)
- Entrance/door
- Car park (reassures visitors on logistics)
- Outdoor seating area if applicable

**Bar Area:**
- Full-width bar shot with good lighting and character
- Detail: Real ale pumps
- Bar with people in (warm, social atmosphere)
- Evening ambience shot with warm lighting

**Rooms (per room):**
- Wide shot from doorway
- Bed from front/side (centred, symmetrical)
- Bathroom with good lighting
- View from window
- Detail: Bedding quality, toiletries, tea station
- Room atmosphere shot (evening light, reading lamp on)

**Food:**
- 5-10 hero dish shots (your most photogenic dishes)
- One full table setting
- Kitchen behind-scenes shot
- Ingredient/prep shot for provenance story
- Sunday roast hero shot (very high conversion value)

**Events:**
- Function room dressed for an event
- Private dining setup
- Any real event photos (quiz night, live music, wedding)

**People:**
- Staff/team shots for About page
- Authentic atmosphere: people having drinks, eating, chatting
- Must feel real, not staged — not stock photos

### Photography Technical Specifications
- **Resolution:** Minimum 2000px wide for hero images, 1200px for standard
- **Format:** Deliver in WebP for web (developer converts), JPEG masters retained
- **Aspect ratios needed:** 16:9 (hero), 4:3 (standard), 1:1 (social), 3:4 (portrait/room)
- **Lighting:** Avoid flash photography for hospitality — use natural or professional lighting rigs
- **Colour grading:** Warm tones, consistent across the set
- **No watermarks:** Never show watermarked images on the live site

---

## 5. Video in 2026

Video is increasingly expected on hospitality websites and significantly increases engagement.

### Video Types to Consider

**Hero Background Video (High Impact)**
- 15-30 second loop, no sound
- Shows the pub in atmosphere: fire, bar service, food being served, people laughing
- Must not be distracting — subtle movement
- Must load fast: compress to under 5MB, serve in MP4/WebP format
- Always have a static hero image fallback for slow connections

**Individual Room Video**
- 30-60 second walk-through of each room
- No music — no narration needed, just the ambience
- Host on YouTube and embed (saves bandwidth)

**Food Short-form Videos**
- 15-30 second dish presentation videos
- Ideal for social media repurposing (TikTok, Instagram Reels)
- Can be filmed on an iPhone if lighting is good

**Virtual Tour**
- Google Street View interior tour (free, set up with a Google-certified photographer)
- Embedded on Rooms page and Contact page
- Helps anxious first-time visitors feel familiar with the space

**Wedding Showcase Video**
- 2-3 minute emotional wedding highlight video
- Highest-value video asset for the events/weddings page

---

## 6. Essential Website Features for 2026

### Must-Have Features (Non-Negotiable)

**Booking Engine (Accommodation)**
- Direct booking capability — do not rely solely on Booking.com links
- Calendar availability view
- Price per night displayed before click-through
- Guest checkout (no forced account creation)
- Instant confirmation email
- Recommended systems: Beds24, Little Hotelier, Lodgify, Checkfront, or integration with Eviivo

**Table Reservation System**
- Online table booking: ResDiary, OpenTable, Collins, Resy, or even a simple Typeform
- Booking widget embeddable on food pages
- Integration with email confirmation
- Management side: easy to see/amend bookings

**Contact Forms**
- General enquiry form
- Private hire specific form
- Wedding enquiry form
- Each should trigger an automated acknowledgement email

**Click-to-Call Phone Number**
- Phone number in header on all pages
- Must be a `<a href="tel:+44...">` link for mobile users
- Consider a tracked number to measure marketing effectiveness

**Live Chat / WhatsApp**
- For 2026, WhatsApp Business integration is increasingly expected in hospitality
- Widget in bottom corner linking directly to WhatsApp
- Or simple live chat (Tidio, Intercom, or similar)
- Minimum: an obvious chat or messaging option

**Email Newsletter Capture**
- Prominent sign-up form in footer
- Pop-up or slide-in on exit intent
- Double opt-in for GDPR compliance
- Promised value: "Get exclusive offers and be first to hear about events"
- Connect to Mailchimp or similar

**Google Maps Integration**
- Embedded Google Map on Contact page
- Links directly to Google Maps for navigation on mobile
- Coordinates in the schema markup

### Should-Have Features (Strong Recommendation)

**Gift Voucher System**
- Sell digital gift vouchers directly from website
- Instant email delivery
- Multiple denominations + custom amounts
- Good systems: GiftPro, VoucherCart, or simple Shopify integration

**Events/Ticketing**
- For ticketed events: Eventbrite integration or simple ticket sales via Stripe
- For free events: simple RSVP form

**Reviews Widget**
- Live-pulling Google review widget on homepage
- TripAdvisor widget
- Shows real, up-to-date reviews — more trustworthy than hand-picked screenshots

**Allergen Information Tool**
- Required by law to provide allergen info for all 14 major allergens
- Embedded allergen table or filterable menu
- Link to allergen PDF as a minimum
- Interactive allergen filter is the 2026 standard

**Social Media Feed Integration**
- Instagram feed embedded on homepage or dedicated page
- Shows fresh, social content without manual website updates
- Connects the social presence to the website

**Weather Widget (Optional but valuable)**
- Small "Holsworthy weather" widget helps visitors plan trips
- Particularly useful for outdoor-activity-focused visitors
- API-based, lightweight

### Nice-to-Have Features (Consider Phase 2)

**Loyalty Programme**
- Simple points or stamp card system for regular visitors
- Even a basic "collect 10 stamps, get a free meal" digital card
- Apps: Stamp Me, Loopy Loyalty, or custom

**AI Chatbot**
- FAQ-answering bot for out-of-hours enquiries
- "What time do you serve food?", "Do you have availability this weekend?"
- Reduces phone/email enquiries for common questions
- Tools: Tidio with AI, Intercom, or simple FAQ chatbot

**WhatsApp Order Integration (If doing takeaway/collection)**
- WhatsApp Business API for food pre-orders
- Increasingly common in pub food operations

**360° Room Photography**
- Matterport or similar virtual walkthrough of rooms
- High-converting for undecided accommodation bookers

**AR / Augmented Reality (Emerging)**
- Pointing a phone at a menu and seeing dishes appear — very niche in 2026 but coming
- Not a priority for White Hart at this stage

---

## 7. Mobile Design Requirements (2026 Standard)

### Non-Negotiable Mobile Requirements
- **No horizontal scrolling** — ever
- **Font size:** Minimum 16px body, 14px captions
- **Touch targets:** All buttons/links minimum 44x44px
- **Sticky header:** Logo + phone number + "Book" CTA — always visible
- **Sticky bottom bar:** [Call] [Book Room] [Book Table] — 3 core actions always accessible
- **Loading speed:** Under 3 seconds on 4G connection
- **Forms:** Use appropriate input types (tel, email, number keyboards)
- **Images:** Responsive images (different crops for different screen sizes where needed)
- **Navigation:** Hamburger menu with clear open/close, full-screen overlay preferred

### Progressive Web App (PWA) Consideration
A PWA gives the website app-like behaviour: offline access, home screen icon, push notifications. For a pub/hotel:
- **Worth implementing** if running a loyalty programme or regular events
- **Not a priority** for a basic brochure/booking site
- Cost: £500-1500 to add PWA features to an existing site

---

## 8. Accessibility Requirements (WCAG 2.2 — 2026)

Accessibility is now both legally prudent (Equality Act 2010) and good practice for SEO and UX.

### Minimum Accessibility Standards
- **Colour contrast:** 4.5:1 minimum for body text against background
- **Alt text:** All images must have descriptive alt attributes
- **Keyboard navigation:** All interactive elements accessible without a mouse
- **Focus indicators:** Visible focus outline on all focusable elements
- **Form labels:** All form inputs have associated labels
- **Skip links:** "Skip to main content" link for keyboard users
- **Heading hierarchy:** Logical H1 > H2 > H3 structure
- **Video captions:** Any video with speech must have captions
- **ARIA labels:** On icon buttons without text labels
- **Language declaration:** `<html lang="en">` on all pages

**Tool for testing:** WAVE (wave.webaim.org), Axe browser extension, Lighthouse accessibility audit

---

## 9. Performance Targets (Core Web Vitals 2026)

Google's Core Web Vitals are ranking signals and conversion factors.

| Metric | Poor | Needs Improvement | Good | Target |
|--------|------|------------------|------|--------|
| LCP | > 4.0s | 2.5-4.0s | < 2.5s | < 2.0s |
| INP | > 500ms | 200-500ms | < 200ms | < 150ms |
| CLS | > 0.25 | 0.1-0.25 | < 0.1 | < 0.05 |
| TTFB | > 1800ms | 800-1800ms | < 800ms | < 600ms |

### Performance Optimisation for Hospitality Sites
- Serve images in WebP format (40-50% smaller than JPEG with same quality)
- Implement lazy loading for below-fold images
- Use a CDN (Cloudflare free tier covers most needs)
- Host booking widget as separate async resource
- Minify CSS and JavaScript bundles
- Use system fonts where possible, or preload custom fonts
- Eliminate render-blocking resources
- Target Google PageSpeed score 85+ on mobile

---

## 10. Cookie Consent & GDPR (UK 2026)

The ICO (Information Commissioner's Office) requires genuine, informed consent for non-essential cookies.

### Requirements
- Cookie consent banner on first visit
- Options: Accept All | Reject Non-Essential | Manage Preferences
- No pre-ticked boxes
- Must be able to withdraw consent as easily as giving it
- Privacy policy must explain all cookies used
- Analytics cookies (GA4) require consent
- Marketing/retargeting cookies require consent

### Recommended Tools
- CookieYes (free tier available, GDPR-compliant)
- Cookiebot
- Usercentrics

**Important:** If using a booking engine, ensure it complies with UK GDPR for payment data.

---

## 11. Design Process Recommendations

### Phase 1: Design Foundation
1. Brand audit: Define colour palette, typography, voice
2. Photography shoot: Commission before design starts (design should be built around real photos)
3. Wireframes: Low-fidelity page layouts for key pages before visual design
4. Design system: Buttons, forms, cards, typography styles defined once and used everywhere

### Phase 2: Visual Design
1. Desktop homepage design
2. Mobile homepage design
3. Inner page templates (rooms, food, events)
4. Individual room page
5. Booking flow pages
6. Contact and FAQ

### Phase 3: Build
1. CMS selection (WordPress + Elementor/ACF, or Webflow, or Squarespace for simplest)
2. Booking engine integration
3. Table reservation integration
4. Performance optimisation
5. SEO implementation
6. Analytics and tracking setup

---

## 12. Recommended Technology Stack (2026)

| Function | Recommended Option | Alternative |
|----------|------------------|-------------|
| CMS | WordPress | Webflow, Squarespace |
| Booking Engine | Beds24 / Lodgify | Little Hotelier, Eviivo |
| Table Booking | ResDiary / Collins | OpenTable, Squarespace dining |
| Email Marketing | Mailchimp | Klaviyo |
| Analytics | Google Analytics 4 | — |
| Hosting | SiteGround UK / Kinsta | WP Engine |
| CDN | Cloudflare (free) | — |
| Cookie Consent | CookieYes | Cookiebot |
| Gift Vouchers | GiftPro / VoucherCart | — |
| Live Chat | Tidio | Intercom |
| Reviews Widget | Elfsight / custom | — |
| Social Feed | Smash Balloon | Elfsight |

---

*Document prepared for White Hart Hotel, Holsworthy — April 2026*
