# Security, Technical SEO & Geo Targeting
## White Hart Hotel, Holsworthy — Complete Briefing Document, 2026

---

## Executive Summary

This document covers three interlinked technical disciplines critical to a successful hospitality website in 2026: security (protecting the business and its customers), technical SEO (ensuring search engines can find, crawl, and rank the site), and geo/local targeting (dominating the local search landscape for Holsworthy and the wider North/West Devon area). Together, these form the technical backbone on which all other marketing efforts depend.

---

## PART 1: WEBSITE SECURITY

---

## 1.1 SSL/HTTPS — Foundation Requirement

Every website in 2026 must run on HTTPS. This is non-negotiable.

**Why it matters:**
- Google will not rank HTTP sites competitively
- Browsers (Chrome, Safari, Firefox) show "Not Secure" warnings for HTTP sites
- Any site taking payments or form submissions without HTTPS is a serious security and legal risk
- Customers see the padlock — its absence destroys trust for a hotel/booking site

**Implementation:**
- SSL certificate required for the domain and all subdomains
- Free via Let's Encrypt (renewed automatically every 90 days)
- Or included with many hosting packages (SiteGround, Kinsta, WP Engine)
- Force HTTPS redirect: all HTTP requests should 301 redirect to HTTPS
- HSTS header (HTTP Strict Transport Security): tells browsers to always use HTTPS

**Check:**
- [ ] padlock visible in browser address bar
- [ ] No mixed content warnings (some images/scripts loading over HTTP)
- [ ] `https://` in all internal links

---

## 1.2 Hosting Security

The hosting environment is the first line of defence.

**Recommended Security Features in Hosting:**
- Web Application Firewall (WAF) — blocks common attacks
- DDoS protection — prevents service disruption attacks
- Malware scanning — daily automated scanning
- Isolated hosting environment — separate from other customers
- Server-level brute force protection
- Automatic security patches for server software

**Recommended Hosts for WordPress UK Hospitality:**
- **Kinsta** — managed WordPress hosting, excellent security, UK data centres
- **SiteGround** — very popular, UK servers available, strong security features
- **WP Engine** — enterprise WordPress hosting with excellent security

**Avoid:**
- Shared budget hosting with no security features (GoDaddy basic, Bluehost basic)
- Hosts with US-only data centres (slower for UK users, potential data sovereignty issues)

---

## 1.3 WordPress-Specific Security (If Using WordPress)

WordPress powers ~43% of the internet and is a common attack target.

### WordPress Security Checklist
- [ ] Update WordPress core to latest version (enable auto-updates)
- [ ] Update all plugins and themes (scheduled weekly minimum)
- [ ] Delete unused plugins and themes
- [ ] Use strong admin username (not "admin")
- [ ] Strong passwords for all admin users (20+ characters, use a password manager)
- [ ] Two-factor authentication (2FA) on all admin accounts
- [ ] Limit login attempts (Wordfence or WP Cerber)
- [ ] Move login URL from /wp-admin (optional but reduces bot traffic)
- [ ] Disable file editing in WordPress admin (`define('DISALLOW_FILE_EDIT', true)`)
- [ ] Set correct file permissions (644 files, 755 directories)
- [ ] Disable XML-RPC if not needed (a common attack vector)
- [ ] Install a security plugin: Wordfence or Solid Security (formerly iThemes Security)

### Recommended Security Plugins
- **Wordfence Security** (free tier excellent): Firewall, malware scanner, login protection
- **WP Activity Log**: Logs all admin actions — useful for detecting compromise
- **WP Hide Login** or custom login URL: Reduces bot login attempts

---

## 1.4 PCI DSS Compliance for Payments

If White Hart takes any online payments (room deposits, gift vouchers, event tickets), PCI DSS (Payment Card Industry Data Security Standard) compliance is required.

**Key PCI DSS Requirements for Small Hospitality Businesses:**

**The good news:** If using Stripe, PayPal, or Square (hosted payment pages), the PCI burden is massively reduced. These providers handle the card data — you never touch it.

**Requirements for hosted payment solutions:**
- Use HTTPS on all pages
- Never store card data in your own systems
- Use reputable payment processors only (Stripe, Square, SagePay/Opayo, PayPal)
- SAQ-A (Self-Assessment Questionnaire A) — simplest compliance level, appropriate when using fully hosted payment

**Avoid:**
- Creating your own payment forms that transmit card numbers
- Using old, non-PCI compliant booking systems
- Storing card details in emails, spreadsheets, or unencrypted files

**Booking Engine Payment Compliance:**
- Ensure the booking engine (Beds24, Little Hotelier, etc.) is PCI compliant — they should all be, but verify
- Gift voucher system must also be PCI compliant

---

## 1.5 GDPR Compliance for UK Hospitality (Post-Brexit ICO Standards)

The UK GDPR (post-Brexit version of EU GDPR) applies to all UK businesses handling personal data.

**Data Points a Pub/Hotel Typically Collects:**
- Guest name, email, phone, address (booking data)
- Payment card details (handled by processor)
- Room preferences, dietary requirements (special category if health-related)
- Marketing opt-in/out
- Website analytics (anonymised via GA4)
- CCTV footage (if applicable — has specific GDPR requirements)
- Employee data (separate consideration)

### GDPR Compliance Checklist

**Privacy Policy (required)**
- [ ] Must exist and be linked in footer and at all data collection points
- [ ] Must explain: what data is collected, why, how long it's kept, who it's shared with, user rights
- [ ] Written in plain English (not legalese)
- [ ] Updated whenever data practices change
- [ ] Covers booking system, email newsletter, contact forms, analytics

**Cookie Policy (required)**
- [ ] Separate from privacy policy (or clearly distinguished within it)
- [ ] Lists all cookies: name, purpose, duration, third party if applicable
- [ ] Categorises cookies: Essential | Analytics | Marketing

**Consent (required for non-essential cookies and marketing)**
- [ ] Cookie consent banner on first visit
- [ ] Cannot pre-tick marketing consent boxes
- [ ] Must obtain separate consent for marketing emails
- [ ] Records of consent stored (most good platforms handle this)
- [ ] Easy to withdraw consent

**Data Retention**
- [ ] Define how long booking data is kept (common: 7 years for financial records)
- [ ] How long CCTV footage is kept (typically 28-31 days)
- [ ] Email list management: remove subscribers who haven't opened in 12+ months

**Data Subject Rights**
- [ ] Guests can request access to their data (Subject Access Request — respond within 30 days)
- [ ] Guests can request deletion of their data ("Right to be forgotten")
- [ ] Process for handling these requests documented

**Third-Party Processors**
- [ ] Booking engine, email platform, analytics — all are data processors
- [ ] Data Processing Agreements (DPAs) required with each
- [ ] Most major platforms (Mailchimp, Stripe, etc.) provide DPAs in their terms

**ICO Registration**
- [ ] Most UK businesses that process personal data must register with the ICO (£40-60/year)
- [ ] Check ico.org.uk to confirm if registration is required

---

## 1.6 Form Security (Anti-Spam and Bot Protection)

Contact forms, booking enquiry forms, and newsletter sign-ups attract spam bots.

**Protection Methods:**
- **reCAPTCHA v3** (Google): Invisible, score-based spam detection — no user friction
- **Honeypot fields**: Hidden form fields that bots fill in but humans don't — free, effective
- **Cloudflare Bot Protection**: Free tier blocks known malicious bots
- **Akismet**: For comment spam if blog is enabled (WordPress plugin)

**Avoid:**
- reCAPTCHA v2 (the "I'm not a robot" checkbox) — adds unnecessary friction and some users find it inaccessible
- No protection at all — forms without protection receive 50-200 spam submissions/day

---

## 1.7 Backup Strategy

Website backups are insurance against hack, accidental deletion, or hosting failure.

**Backup Requirements:**
- **Daily backups** of database and files
- **Off-site storage**: Backups must not be on the same server as the website
- **Restore testing**: Periodically test that backups actually restore correctly
- **30-day retention**: Keep at least 30 days of daily backups

**Tools:**
- **UpdraftPlus** (WordPress plugin): Backs up to Google Drive, Dropbox, S3 — free for basic
- **Solid Backups** (formerly BackupBuddy): More comprehensive
- **Kinsta/SiteGround/WP Engine**: All include automated daily backups (check retention period in plan)
- **Cloudflare**: Does NOT backup — it's a CDN/security layer, not a backup solution

---

## 1.8 Security Monitoring

Ongoing security monitoring catches problems before they become catastrophes.

**Monitoring Tools:**
- **Wordfence** (WordPress): Real-time threat monitoring, email alerts
- **Sucuri SiteCheck** (free): Scan website for malware and blacklist status
- **Google Search Console**: Alerts for security issues and manual actions
- **UptimeRobot** (free): Monitor uptime, alert if site goes down

**Regular Security Tasks:**
- Monthly: Check Wordfence scan results
- Monthly: Verify all plugins/themes updated
- Quarterly: Review admin users — remove old staff accounts
- Annually: Change admin passwords, review security plugin settings

---

## PART 2: TECHNICAL SEO

---

## 2.1 Core Web Vitals Optimisation

Google uses Core Web Vitals as ranking signals. Full details in the Design document — key technical implementations:

**LCP (Largest Contentful Paint) — target < 2.5s:**
- Preload the hero image: `<link rel="preload" as="image" href="hero.webp">`
- Use a CDN for image delivery
- Choose fast hosting (Time to First Byte under 800ms)

**INP (Interaction to Next Paint) — target < 200ms:**
- Minimise heavy JavaScript
- Use efficient event handlers
- Audit and remove unnecessary scripts/plugins

**CLS (Cumulative Layout Shift) — target < 0.1:**
- Set explicit width/height on all images and embeds
- Reserve space for ads/banners
- Avoid injecting content above existing content

---

## 2.2 Schema Markup (Structured Data) — Full Implementation

Schema markup allows Google to understand what the page is about and can generate rich results.

### Schema Types for White Hart Hotel (by page)

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LodgingBusiness", "BarOrPub", "Restaurant"],
      "name": "White Hart Hotel",
      "url": "https://www.whitehart-holsworthy.co.uk",
      "telephone": "+441409XXXXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Street Address]",
        "addressLocality": "Holsworthy",
        "addressRegion": "Devon",
        "postalCode": "[Postcode]",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.8119,
        "longitude": -4.3519
      },
      "priceRange": "££",
      "servesCuisine": ["British", "Traditional Pub Food"],
      "openingHoursSpecification": [
        {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "11:00", "closes": "23:00"},
        {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "11:00", "closes": "23:30"},
        {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "12:00", "closes": "22:30"}
      ],
      "image": "https://www.whitehart-holsworthy.co.uk/images/exterior.jpg",
      "hasMap": "https://maps.google.com/...",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true}
      ]
    }
  ]
}
```

**Rooms Page:**
- HotelRoom schema for each room with name, description, occupancy, amenityFeature

**Food Page:**
- Menu and MenuItem schema

**Events:**
- Event schema with name, startDate, endDate, location, description, image

**FAQ Page:**
- FAQPage with Question and acceptedAnswer for each Q&A

---

## 2.3 XML Sitemap

The XML sitemap tells Google which pages exist and their relative importance.

**Sitemap Requirements:**
- Include all indexable pages
- Exclude: duplicate pages, paginated archive pages (unless canonical handled correctly), admin/login pages, thank-you pages
- Include: all hotel pages, food pages, events, blog posts, key landing pages
- Submit to Google Search Console

**Tools:** Yoast SEO (WordPress) generates this automatically

**Sitemap URL:** `https://www.whitehart-holsworthy.co.uk/sitemap.xml`

---

## 2.4 Robots.txt Configuration

Robots.txt controls which pages search engine crawlers can access.

**Standard configuration for WordPress hospitality site:**
```
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-login.php
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /booking-confirmation/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://www.whitehart-holsworthy.co.uk/sitemap.xml
```

**Important:** Never accidentally block your main content pages. Test using Google Search Console URL inspection.

---

## 2.5 Canonical Tags

Canonical tags prevent duplicate content issues — particularly relevant for booking engines that create URL parameter variations.

**Where to use canonicals:**
- Booking pages with session/tracking parameters (e.g. `?affiliate=booking.com`)
- Paginated content: canonical the first page
- Print versions of pages
- If running on www and non-www (canonical the preferred version + 301 redirect)

**Example:**
```html
<link rel="canonical" href="https://www.whitehart-holsworthy.co.uk/stay/garden-room/" />
```

---

## 2.6 Page Speed Technical Implementation

Beyond Core Web Vitals, full speed optimisation for hospitality:

**Image Optimisation:**
- Convert all images to WebP format (40-50% smaller)
- Implement `srcset` for responsive images (different sizes for different screens)
- Lazy load below-fold images: `loading="lazy"`
- Explicit dimensions: `width="800" height="600"` prevents layout shift

**Caching:**
- Browser caching via Cache-Control headers
- Server-side caching plugin (WP Rocket, W3 Total Cache, or LiteSpeed Cache)
- Full-page caching for static/semi-static pages

**Code Optimisation:**
- Minify CSS and JavaScript files
- Defer non-critical JavaScript
- Inline critical CSS
- Remove unused CSS (PurgeCSS for production)

**CDN:**
- Cloudflare free tier: excellent CDN, DDoS protection, performance optimisation
- Alternative: BunnyCDN (very cost-effective for UK/EU delivery)

---

## 2.7 Google Analytics 4 (GA4) Setup for Hospitality

GA4 tracks user behaviour and conversion events.

**Key Events to Track:**
- `booking_initiated` — when user opens the booking widget
- `booking_completed` — when a booking is confirmed
- `table_booking_completed` — when a table is reserved
- `phone_click` — when mobile user taps phone number
- `enquiry_submitted` — when a contact form is submitted
- `gift_voucher_purchased`
- `page_view` — automatic
- `scroll_depth` — automatic
- `file_download` — for menu PDFs

**GA4 Conversion Configuration:**
- Mark `booking_completed` as a conversion
- Mark `table_booking_completed` as a conversion
- Mark `enquiry_submitted` as a conversion
- This enables conversion data in reports and Google Ads

**Google Search Console Linking:**
- Link GSC to GA4 for combined keyword + behaviour data

---

## 2.8 Redirect Management

Proper redirects prevent losing link equity and avoid 404 errors.

**Types of redirects:**
- **301 (Permanent):** Use when a page has permanently moved. Passes ~90-99% of link equity.
- **302 (Temporary):** Only for genuinely temporary changes.
- **404 (Not Found):** Should be a well-designed custom 404 page with navigation options

**Common redirect needs for pub/hotel sites:**
- Old URL structure → New URL structure
- www → non-www (or vice versa) — pick one, redirect the other
- HTTP → HTTPS
- Old booking system URLs → New booking pages
- Seasonal pages (e.g. Christmas menu) — redirect to main menu when season ends

**Tool:** Redirection plugin (WordPress) or handled in .htaccess / Nginx config

---

## PART 3: GEO / LOCAL TARGETING

---

## 3.1 Google Business Profile — Full Optimisation

GBP is the most important local ranking tool. Full detail in the SEO document — technical specifics here:

**Geo-Specific GBP Setup:**
- Geo coordinates: Holsworthy, Devon: approximately 50.8119°N, 4.3519°W
- Service area: Define if providing delivery or visiting services
- GBP Posts: Use keyword-rich copy in posts (not stuffed — natural)
- Photo geotagging: Ensure photos uploaded have correct geolocation metadata

**GBP Verification Methods (if not verified):**
- Postcard verification (most common)
- Phone verification (available to some)
- Video verification (newer option)
- Instant verification (if already verified on Google Search Console)

---

## 3.2 Local Citation Building

Citations are mentions of NAP (Name, Address, Phone) across the web.

**NAP Consistency — Critical:**
The business name, address, and phone must be 100% identical across every platform. Even small differences (St vs Street, Ltd vs Limited) confuse Google's local algorithm.

**Define the canonical NAP:**
```
White Hart Hotel
[Full Street Address]
Holsworthy
Devon
[Postcode]
Tel: 01409 XXX XXX
```

**Priority UK Citation Sources:**

| Platform | Priority | Type |
|----------|---------|------|
| Google Business Profile | Critical | Local |
| Bing Places | High | Local |
| Apple Maps | High | Local |
| Facebook Business | High | Social/Local |
| TripAdvisor | Critical | Industry |
| Booking.com | Critical | Industry |
| Yell.com | High | Directory |
| Thomson Local | High | Directory |
| Yelp UK | Medium | Directory |
| FreeIndex | Medium | Directory |
| Foursquare | Medium | Directory |
| Visit Devon | High | Industry |
| Visit Britain | High | Industry |
| Good Pub Guide | High | Industry |
| British Pubs | Medium | Industry |
| Pub Explorer | Medium | Industry |
| OpenTable / ResDiary | Medium | Industry |
| Scoot.co.uk | Low | Directory |
| HotFrog | Low | Directory |
| Cylex UK | Low | Directory |

**Citation Management Tool:** BrightLocal (~£29/month) can audit and manage citations across all platforms.

---

## 3.3 Geo-Specific Landing Pages

Creating location-specific pages helps capture "hotel near X" searches from surrounding towns.

### Recommended Geo Landing Pages

**Primary:**
- `/stay/` (main rooms page — targets "hotel holsworthy")

**Geo-expanded pages:**
- `/hotel-near-bude/` — "Hotel near Bude Devon"
- `/hotel-near-dartmoor/` — "Hotel near Dartmoor North Devon"
- `/accommodation-west-devon/` — "Accommodation West Devon"
- `/pub-hotel-north-devon/` — "Pub hotel North Devon"
- `/hotel-okehampton-area/` — "Hotel near Okehampton"

**Each geo page should contain:**
- Unique content (not duplicate of main rooms page)
- Distance and directions from the target town
- What to see/do in the target town + how to get to White Hart
- Photos of the area + the hotel
- Rooms and booking CTA
- Local schema markup

**URL principle:** `/hotel-near-bude/` not `/hotel-near-bude-devon-white-hart-holsworthy/` — clean, concise URLs

---

## 3.4 Regional Tourism Board Listings

These are high-authority backlinks and important referral traffic sources.

**Listings to obtain:**

**Visit Devon (visitdevon.co.uk)**
- Free and paid listings available
- Worth the paid listing for editorial placement
- High authority, high traffic from Devon-bound visitors
- Ensure GBP and Visit Devon listings have identical NAP

**Visit Cornwall (visitcornwall.com)**
- Worth listing given proximity to Cornwall
- Many tourists plan Devon + Cornwall trips

**Visit Britain / Visit England (visitbritain.com)**
- National tourism body
- Quality assurance scheme participation helps listing placement

**Dartmoor National Park (dartmoor.gov.uk)**
- Highly relevant — Dartmoor is a major draw for visitors in the area

**Tarka Trail Official Site**
- Highly relevant for walkers/cyclists visiting the area

**South West Coast Path Association**
- Relevant for coastal walkers

**Go South West (gosouthwest.co.uk)**
- Regional tourism aggregator

---

## 3.5 Multi-Audience Geo Targeting

White Hart serves two geo-distinct audiences with different search behaviours:

**Audience 1: Local Residents (Holsworthy & within 20 miles)**
- Searches: "pub holsworthy", "food holsworthy", "quiz night holsworthy"
- Device: Mixed mobile/desktop
- Intent: Food, drink, events, community
- Targeting: GBP, Facebook, Local targeting keywords

**Audience 2: Tourists/Visitors (UK-wide planning Devon trip)**
- Searches: "hotel holsworthy", "accommodation north devon", "stay near bude"
- Device: Predominantly mobile for research, desktop for booking
- Intent: Accommodation, local base, exploring Devon
- Targeting: OTAs, Visit Devon listings, SEO for accommodation keywords

**Audience 3: Business Travellers / Trade (within 30 miles)**
- Searches: "hotel holsworthy b&b", "accommodation near [business location]"
- Intent: Practical accommodation, expense-account value
- Targeting: Direct outreach to local businesses, GBP

**Each audience needs different copy and landing pages.** The rooms page should speak to tourists; the food page should speak to locals; the about page and social media speak to both.

---

## 3.6 Local Link Building (Devon-Specific)

Links from local and regional websites are the most valuable for local SEO.

**Devon-Specific Link Sources:**

**Local Publications:**
- Devon Life magazine — feature articles
- Devon Live (devonlive.com) — local news site, events listings
- Bude Life / Bude & Stratton Town Council
- West Devon Borough Council website
- Holsworthy Town Council website

**Local Events:**
- Holsworthy Agricultural Society (holsworthy-agri-show.co.uk) — major annual show
- Holsworthy Carnival
- Torridge and West Devon Ramblers

**Local Businesses (for mutual linking):**
- Activity companies: kayaking, horse riding, golf courses
- Local farms that supply the pub (if they have websites)
- Wedding suppliers: photographers, florists, DJ/bands
- Local taxi companies (practical mutual referrals)
- Nearby attractions: museums, farms, visitor centres

**Tactics:**
- Ask supplier businesses with websites for a link from their "stockists" or "local partners" page
- Sponsor local events for a link from the event website
- Contribute a guest post to Devon travel blogs
- Donate prizes to charity events for a link from the charity website

---

## 3.7 Google Maps Optimisation

Appearing prominently in Google Maps is critical for "near me" and local searches.

**Google Maps Optimisation:**
- Ensure GBP is verified and fully complete
- Upload high-quality photos regularly
- Respond to all reviews
- Ensure the pin is placed accurately (check on maps.google.com)
- Add interior photos (Google Street View inside is available)
- List all relevant categories
- Maintain accurate opening hours (especially public holidays)
- Enable messaging feature in GBP for direct Google Maps messages

**Google Maps Embed on Website:**
- Embed the Google Maps widget on the Contact page
- Ensure clicking "View larger map" opens the GBP listing (confirms NAP)
- Consider the iframe embed vs the Google Maps Platform API (the simple iframe is sufficient for most)

---

## 3.8 Local SEO Monitoring

Ongoing monitoring ensures rankings are maintained and problems caught early.

**Tools for Monitoring:**
- **Google Search Console:** Keyword positions, click-through rates, coverage issues
- **Google Business Profile Insights:** Profile views, direction requests, phone calls, website clicks
- **BrightLocal:** Local rank tracking, citation audit, review monitoring
- **Manual checks:** Monthly search for "hotel holsworthy", "pub holsworthy" — check where White Hart appears in the local 3-pack

**Key Metrics to Track Monthly:**
- Ranking for "hotel holsworthy" (aim for #1 GBP + top 3 organic)
- Ranking for "pub holsworthy"
- GBP profile views
- Number of direction requests (a strong local engagement signal)
- Organic traffic to key pages (rooms, food, events)
- Review count and average rating (all platforms)

---

## Security, Technical SEO & Geo — Action Priority Checklist

### Immediate (Week 1)
- [ ] Verify SSL certificate is installed and working
- [ ] Force HTTPS redirect on all pages
- [ ] Claim and verify Google Business Profile
- [ ] Set NAP consistently across all existing listings

### Short-term (Month 1)
- [ ] Install Wordfence or equivalent security plugin
- [ ] Set up daily automated backups to off-site storage
- [ ] Install GA4 with conversion tracking
- [ ] Submit XML sitemap to Google Search Console
- [ ] Implement core schema markup (LodgingBusiness, LocalBusiness)
- [ ] Install cookie consent tool (CookieYes)
- [ ] Publish/update Privacy Policy

### Medium-term (Month 1-3)
- [ ] Run Core Web Vitals audit and fix issues
- [ ] Build priority citations (20+ platforms)
- [ ] Submit to Visit Devon and regional tourism directories
- [ ] Create 2-3 geo-targeting landing pages
- [ ] Set up BrightLocal for citation and review monitoring
- [ ] Obtain ICO registration
- [ ] Implement full FAQ schema

### Ongoing (Monthly)
- [ ] Monitor and respond to reviews
- [ ] Check GBP for updates needed
- [ ] Update GBP photos (monthly minimum)
- [ ] Publish GBP posts (weekly)
- [ ] Check Search Console for crawl errors
- [ ] Run security scan
- [ ] Verify backups completing successfully

---

*Document prepared for White Hart Hotel, Holsworthy — April 2026*
