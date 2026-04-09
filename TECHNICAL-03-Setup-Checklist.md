# Technical Setup Checklist — White Hart Hotel Website
## Step-by-Step Implementation Guide

---

## PHASE 1: IMMEDIATE — DAY 1 (Do These First)

### ✅ 1.1 Google Business Profile

**Go to:** business.google.com

- [ ] Claim and verify the listing (if not done — postcard verification takes 5-7 days)
- [ ] Set PRIMARY category: `Hotel`
- [ ] Add SECONDARY categories: `Pub`, `Restaurant`, `Bar`, `Wedding venue`, `Event venue`
- [ ] Confirm business name matches signage exactly: `White Hart Hotel`
- [ ] Enter full address — match exactly to what will be on the website
- [ ] Add phone number: `01409 XXXXXX`
- [ ] Add website URL: `https://www.whitehart-holsworthy.co.uk`
- [ ] Write business description (750 chars max — use the GBP Script file for copy)
- [ ] Set accurate opening hours for ALL services (bar, food, hotel check-in)
- [ ] Add hotel attributes: "Pet friendly", "Free parking", "En-suite rooms", "Breakfast included", "Free WiFi"
- [ ] Upload minimum 20 photos immediately (target 50+ over first month)
- [ ] Enable messaging feature
- [ ] Add Products: list each room type with name, description, price
- [ ] Add Services: Accommodation, Food, Bar, Events, Private Hire, Weddings
- [ ] Seed Q&A section (see GBP Script file for questions and answers)
- [ ] Publish first Google Post (see GBP Script file for templates)

**Time required:** 90 minutes for full setup

---

### ✅ 1.2 SSL / HTTPS

- [ ] Confirm SSL certificate is installed: visit the site and check for padlock in browser
- [ ] Check for mixed content: use https://www.whynopadlock.com (paste your URL)
- [ ] Force HTTPS redirect: all HTTP requests should 301 to HTTPS
- [ ] If on WordPress hosting (SiteGround/Kinsta/WP Engine): SSL is usually included — enable in hosting panel
- [ ] If using Cloudflare: set SSL mode to "Full (Strict)"

**Check:** Open site in Chrome, click padlock in address bar → Connection is secure ✓

---

### ✅ 1.3 Google Search Console

**Go to:** search.google.com/search-console

- [ ] Add property: your website URL
- [ ] Verify ownership (HTML tag method is simplest — paste into `<head>`)
- [ ] Submit XML sitemap: enter `https://www.whitehart-holsworthy.co.uk/sitemap.xml`
- [ ] Set preferred domain (www vs non-www) in settings
- [ ] Enable email notifications for critical issues
- [ ] Wait 48 hours then check Coverage report for any errors

**Ongoing:** Check monthly for crawl errors, manual actions, and performance data

---

### ✅ 1.4 Google Analytics 4

**Go to:** analytics.google.com

- [ ] Create GA4 property for the website
- [ ] Install GA4 tracking code:
  - WordPress: Use the "Google Site Kit" plugin (official Google plugin, free)
  - Or paste the `<script>` tag into `<head>` manually
- [ ] Verify data is flowing: open the site in a new browser, check GA4 > Realtime > 1+ user
- [ ] Configure key conversion events:
  - `booking_completed` — when booking is confirmed
  - `table_booking_completed` — when table reservation confirmed
  - `enquiry_submitted` — when any contact/enquiry form submitted
  - `phone_click` — click on phone number link (requires event tracking setup)
  - `gift_voucher_purchased`
- [ ] Mark conversions: in GA4 > Admin > Events — toggle "Mark as conversion" for the above
- [ ] Link GA4 to Google Search Console: GA4 Admin > Search Console Links

**Note:** Event tracking for bookings may require developer help to set up correctly — depends on the booking engine used

---

## PHASE 2: WEEK 1

### ✅ 2.1 Cloudflare Setup (Free — Do This)

**Go to:** cloudflare.com

- [ ] Create free Cloudflare account
- [ ] Add your domain
- [ ] Update nameservers at your domain registrar to Cloudflare's nameservers
- [ ] Wait 24-48 hours for propagation
- [ ] In Cloudflare dashboard:
  - [ ] Enable "Auto Minify" (CSS, JavaScript, HTML)
  - [ ] Enable "Brotli compression"
  - [ ] Set caching level to "Standard"
  - [ ] Enable "Always Use HTTPS"
  - [ ] Turn on "Bot Fight Mode" (free, blocks bad bots)
  - [ ] Set Security Level to "Medium"

**Result:** Site will be noticeably faster and more secure within 24 hours of setup

---

### ✅ 2.2 WordPress Security (If Using WordPress)

- [ ] Update WordPress to latest version (Dashboard > Updates)
- [ ] Update all plugins (Dashboard > Updates)
- [ ] Update all themes (including inactive ones, or delete unused themes)
- [ ] Delete any plugins not in use
- [ ] Install **Wordfence Security** (free): wordfence.com
  - [ ] Run full site scan after install
  - [ ] Enable firewall
  - [ ] Set up email alerts for security events
  - [ ] Configure login security: limit login attempts, enable 2FA
- [ ] Change admin username from "admin" to something unique (if it's currently "admin")
- [ ] Enable 2-factor authentication on all admin accounts
- [ ] Add to `wp-config.php`: `define('DISALLOW_FILE_EDIT', true);`

---

### ✅ 2.3 Backup Setup

- [ ] Install **UpdraftPlus** plugin (free tier): updraftplus.com
- [ ] Configure backup schedule: Daily backups
- [ ] Set remote storage: Google Drive (free) or Dropbox
- [ ] Run first backup manually and verify it completes
- [ ] Test restore process once (restore to staging if available, or just confirm files are accessible)
- [ ] Set retention: keep last 30 daily backups

---

### ✅ 2.4 Cookie Consent

- [ ] Install **CookieYes** (free tier available): cookieyes.com
  - Or **Cookiebot** for more features
- [ ] Scan site to auto-detect all cookies in use
- [ ] Configure consent categories: Essential | Analytics | Marketing
- [ ] Style banner to match site branding
- [ ] Test: clear cookies and visit site — banner should appear
- [ ] Test: decline all cookies — ensure Analytics and Marketing scripts don't load
- [ ] Link to Privacy Policy and Cookie Policy from banner

---

### ✅ 2.5 Privacy Policy & Cookie Policy

- [ ] Create Privacy Policy page at `/privacy-policy/`
  - Use a generator: iubenda.com or privacypolicygenerator.info as starting point
  - Must cover: data collected, why, retention, third parties, user rights
  - Must mention: booking engine, Mailchimp/email platform, GA4, Cloudflare
- [ ] Create Cookie Policy page at `/cookie-policy/`
  - List all cookies by name, type, purpose, duration
- [ ] Link both policies in footer on every page
- [ ] Link Privacy Policy from all forms (booking, contact, newsletter signup)

---

### ✅ 2.6 ICO Registration

**Go to:** ico.org.uk/registration

- [ ] Check if registration is required (most UK businesses processing personal data: yes)
- [ ] Register as a Data Controller
- [ ] Annual fee: approximately £40-60
- [ ] Note registration number — add to Privacy Policy

---

## PHASE 3: MONTH 1

### ✅ 3.1 Schema Markup Implementation

*(Use the TECHNICAL-01-Schema-Markup.md file for all JSON-LD blocks)*

- [ ] Homepage: LodgingBusiness + BarOrPub + Restaurant + WebSite schema
- [ ] Rooms overview: LodgingBusiness schema with numberOfRooms
- [ ] Each room page: HotelRoom schema
- [ ] Food menu page: FoodEstablishment schema
- [ ] Events page: Event schema for each upcoming event
- [ ] FAQ page: FAQPage schema with all Q&As
- [ ] Contact page: LocalBusiness schema
- [ ] All pages: BreadcrumbList schema
- [ ] Validate all schema: search.google.com/test/rich-results

---

### ✅ 3.2 XML Sitemap

- [ ] Install Yoast SEO plugin (if not already — free version is sufficient)
- [ ] Yoast generates sitemap automatically at `/sitemap.xml`
- [ ] Verify sitemap includes all key pages
- [ ] Exclude from sitemap: thank-you pages, login pages, booking confirmation pages
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools (free — bingwebmaster.com)

---

### ✅ 3.3 Robots.txt

- [ ] Verify robots.txt exists at `https://www.whitehart-holsworthy.co.uk/robots.txt`
- [ ] Check it does NOT block important pages
- [ ] Correct configuration (WordPress):

```
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-login.php
Disallow: /booking-confirmation/
Disallow: /thank-you/
Allow: /wp-admin/admin-ajax.php
Sitemap: https://www.whitehart-holsworthy.co.uk/sitemap.xml
```

- [ ] Test: paste URL in Google Search Console > URL Inspection

---

### ✅ 3.4 Page Speed Optimisation

- [ ] Test current speed: pagespeed.web.dev
- [ ] Install caching plugin: **WP Rocket** (paid, best) or **LiteSpeed Cache** (free if on LiteSpeed server)
- [ ] Convert all images to WebP format:
  - Plugin: **Imagify** or **ShortPixel** (bulk convert existing images)
  - Going forward: compress and convert before uploading
- [ ] Add lazy loading to images: `loading="lazy"` attribute
- [ ] Ensure all images have explicit width and height attributes (prevents layout shift)
- [ ] Preload hero image: add `<link rel="preload" as="image" href="/hero.webp">` to `<head>`
- [ ] Defer non-critical JavaScript
- [ ] Minify CSS and JavaScript (WP Rocket / LiteSpeed Cache handle this)
- [ ] Re-test after changes: target 85+ mobile score on PageSpeed Insights

---

### ✅ 3.5 Booking Engine Integration

- [ ] Select booking engine: **Beds24** (recommended) or **Little Hotelier** or **Lodgify**
- [ ] Set up account and configure rooms
- [ ] Connect booking engine to OTAs (Booking.com, Expedia) via channel manager
- [ ] Embed booking widget on website:
  - Homepage (hero area)
  - Rooms overview page (above the fold)
  - Each individual room page
  - Header (optional — date picker in nav)
- [ ] Set up "Book Direct" incentive in the booking engine:
  - Add "Direct booking perks" note to confirmation
  - Ensure direct rates match or beat OTA rates
- [ ] Test complete booking flow on mobile from start to confirmation

---

### ✅ 3.6 Table Reservation System

- [ ] Select system: **ResDiary** or **Collins** (hospitality standard) or **OpenTable**
- [ ] Set up service times, covers per service, table layout
- [ ] Embed booking widget on food menu page and Sunday lunch page
- [ ] Add "Book a Table" button to header and homepage
- [ ] Test complete reservation flow on mobile
- [ ] Set up email confirmation for customers and notification for kitchen/front of house

---

### ✅ 3.7 Email Newsletter Setup

- [ ] Create **Mailchimp** account (free up to 500 contacts)
- [ ] Set up "White Hart Hotel Newsletter" audience
- [ ] Create welcome email sequence (1 email: welcome + link to What's On)
- [ ] Embed sign-up form in footer of all pages
- [ ] Create exit-intent pop-up (desktop only) offering newsletter signup
- [ ] Configure double opt-in for GDPR compliance
- [ ] Draft first newsletter (see GBP Script file for content ideas)

---

### ✅ 3.8 Uptime Monitoring

- [ ] Sign up for **UptimeRobot** (free): uptimerobot.com
- [ ] Add monitor for your website URL (HTTP/HTTPS check every 5 minutes)
- [ ] Set up email and/or SMS alerts for downtime
- [ ] Also monitor: booking engine page, contact form page

---

## PHASE 4: MONTHS 1-3

### ✅ 4.1 Local Citations (Priority Order)

Submit NAP (Name, Address, Phone) to these platforms. **Use identical information on every platform:**

**Name:** White Hart Hotel
**Address:** [Full address, exactly as on website]
**Phone:** 01409 XXXXXX
**Website:** https://www.whitehart-holsworthy.co.uk

Priority order:

1. [ ] Google Business Profile ✓ (Phase 1)
2. [ ] Bing Places — bingplaces.com
3. [ ] Apple Maps — mapsconnect.apple.com
4. [ ] TripAdvisor — claim/create listing
5. [ ] Booking.com — partner.booking.com
6. [ ] Facebook Business Page — complete all fields
7. [ ] Yell.com
8. [ ] Thomson Local — thomsonlocal.com
9. [ ] Yelp UK — biz.yelp.co.uk
10. [ ] FreeIndex — freeindex.co.uk
11. [ ] Foursquare — foursquare.com/businesses
12. [ ] Visit Devon — visitdevon.co.uk (submit listing)
13. [ ] Visit Britain — visitbritain.com
14. [ ] Good Pub Guide — thegoodpubguide.co.uk
15. [ ] British Pubs — britishpubs.com
16. [ ] Pubs Galore — pubsgalore.co.uk
17. [ ] I Love Inns — iloveins.co.uk
18. [ ] HotFrog UK — hotfrog.co.uk
19. [ ] Scoot.co.uk
20. [ ] Cylex UK — cylex.co.uk

**Tip:** Use **BrightLocal** (~£29/month) to manage and audit all citations in one place.

---

### ✅ 4.2 Review Acquisition System

- [ ] Create Google Review shortlink:
  - Go to GBP > Get more reviews > Copy link
  - Shorten with bit.ly: e.g. bit.ly/whitehartreview
- [ ] Print QR code cards for tables (link to review shortlink)
- [ ] Print QR code on till receipts
- [ ] Set up WiFi landing page with review prompt
- [ ] Train all staff: "If you enjoyed your visit, a quick Google review means the world to us"
- [ ] Set up automated post-stay email (via booking engine):
  - Trigger: 24 hours after checkout
  - Subject: `Hope you had a great stay — we'd love your thoughts`
  - Body: See COPY files for email template

---

### ✅ 4.3 Security Headers

Add these HTTP security headers (via Cloudflare Page Rules or .htaccess / Nginx config):

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**Test headers at:** securityheaders.com

---

### ✅ 4.4 Form Security

- [ ] Install **reCAPTCHA v3** on all forms (get key from google.com/recaptcha)
- [ ] Or use **Honeypot fields** (hidden fields — bots fill them, form rejects the submission)
- [ ] Test: submit test enquiry, check it arrives correctly
- [ ] Check spam filter: confirm legitimate submissions are not being caught

---

## ONGOING MONTHLY CHECKLIST

**Every week:**
- [ ] Publish 1 Google Business Profile post
- [ ] Respond to any new reviews (all platforms, within 48 hours)
- [ ] Update events calendar on website

**Every month:**
- [ ] Check Wordfence scan results
- [ ] Check Google Search Console for errors
- [ ] Verify backups are completing
- [ ] Check page speed scores — investigate any regression
- [ ] Review GA4 for booking conversion rate
- [ ] Update GBP photos (upload at least 2 new photos)
- [ ] Check all pages for broken links (Broken Link Checker plugin)

**Every quarter:**
- [ ] Review and remove unused WordPress admin accounts
- [ ] Update passwords on admin accounts
- [ ] Check plugin/theme updates and apply
- [ ] Review citation consistency: search "[business name] holsworthy" and check results
- [ ] Check TripAdvisor ranking position for Holsworthy

**Every year:**
- [ ] Renew ICO registration
- [ ] Review Privacy Policy for any changes needed
- [ ] Full security audit

---

*Technical checklist prepared for White Hart Hotel, Holsworthy — April 2026*
