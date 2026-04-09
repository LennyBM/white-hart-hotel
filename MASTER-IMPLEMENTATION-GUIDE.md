# Master Implementation Guide — White Hart Hotel Website
## Everything, in Order, With File References

---

## WHAT'S IN THIS FOLDER

This folder contains everything needed to brief, build, and launch a world-class pub/hotel website for the White Hart Hotel, Holsworthy. Every piece of copy, every technical specification, and every implementation checklist is ready to use.

**Files in this folder:**

### Research & Strategy (Briefing Docs)
| File | What It Contains |
|------|-----------------|
| `01-SEO-Strategy.md` | Full SEO strategy: keywords, GBP, schema, content, link building |
| `02-Competitor-Research.md` | Local/regional competitor analysis and gap opportunities |
| `03-Market-Leaders-Analysis.md` | What market leaders do well and badly — what to steal |
| `04-Copywriting-Guide.md` | Brand voice guide, copy frameworks, cliché blacklist |
| `05-CRO-Strategy.md` | Conversion optimisation: booking funnel, trust signals, mobile |
| `06-Website-Structure.md` | Full sitemap, page specs, URL structure, navigation design |
| `07-Design-Features-2026.md` | Visual design, typography, features, tech stack recommendations |
| `08-Security-Technical-SEO-Geo.md` | Security checklist, technical SEO, geo targeting |

### Ready-to-Use Copy
| File | What It Contains |
|------|-----------------|
| `COPY-01-Homepage.md` | Complete homepage copy — every section, every CTA |
| `COPY-02-Rooms.md` | Rooms overview + 4 individual room page copy templates |
| `COPY-03-Food-Menus.md` | Food menu page, Sunday lunch page, drinks menu page |
| `COPY-04-Events-Functions-Weddings.md` | Events, private hire, weddings, Christmas pages |
| `COPY-05-About-FAQ-Explore.md` | About/story, FAQ, local area/explore, contact pages |
| `COPY-06-Packages-Offers.md` | 5 packages: DBB, Romantic Escape, Walking Weekend, Show Weekend, Dog-Friendly |
| `COPY-07-Geo-Landing-Pages.md` | 5 geo pages: near Bude, near Dartmoor, near Okehampton, West Devon, North Devon pub hotel |
| `COPY-09-Email-Templates.md` | Post-booking confirmation, pre-arrival, and post-stay review request emails |
| `COPY-10-Suppliers-Page.md` | /about/our-suppliers/ — local provenance page with framework for real supplier details |
| `COPY-11-Booking-Guarantee-Trust-Block.md` | The White Hart Promise, trust strips, objection-handling, social proof, CTA micro-copy |

### Technical Implementation
| File | What It Contains |
|------|-----------------|
| `TECHNICAL-01-Schema-Markup.md` | JSON-LD schema blocks for every page — ready to paste |
| `TECHNICAL-02-Title-Tags-Meta.md` | Title tags and meta descriptions for every page |
| `TECHNICAL-03-Setup-Checklist.md` | Step-by-step technical setup: GA4, GSC, Cloudflare, security |
| `TECHNICAL-04-GBP-Script.md` | Google Business Profile: description, Q&As, post templates, review responses |

### Blog Content (Ready to Publish)
| File | What It Contains |
|------|-----------------|
| `BLOG-01-Walks-Near-Holsworthy.md` | "10 Best Walks Near Holsworthy, Devon" — full post |
| `BLOG-02-Day-Trip-Bude.md` | "A Day Trip from Holsworthy to Bude" — full post |
| `BLOG-03-Dartmoor-From-Holsworthy.md` | "Exploring Dartmoor from Holsworthy" — full post |

---

## THE BRIEF FOR THE DEVELOPER / DESIGNER

If you're briefing a web developer and/or designer, give them this entire folder. The key documents to highlight:

1. **`06-Website-Structure.md`** — Full sitemap and every page's content requirements
2. **`07-Design-Features-2026.md`** — Design direction, colour palette, typography, features list
3. **`TECHNICAL-03-Setup-Checklist.md`** — All technical requirements in priority order
4. **`COPY-01-Homepage.md`** through `COPY-05-About-FAQ-Explore.md` — Website copy for every page

Tell them: *"Everything needed to build the site is in these files. Copy, structure, technical specs, and design direction are all here."*

---

## PHASE 1: BEFORE THE WEBSITE IS BUILT

These things should happen BEFORE or ALONGSIDE the website build. Do not wait for the website to be live.

### Priority 1: Commission Professional Photography

**Why first:** The website design should be built around the real photos. A designer who has great photos to work with will produce a far better result. Photos shot after the design is done often don't fit the layout properly.

**What to commission (full shot list in `07-Design-Features-2026.md` Section 4):**
- Exterior in golden hour (1 hour before sunset)
- Bar area — atmospheric, warm lighting, with people
- Each room: 6 shots minimum (wide, bed, bathroom, view, detail, atmosphere)
- Food: 10 hero dish shots + Sunday roast + table setting + chef in kitchen
- Events: function room dressed + any real event photos
- Team/owner in the pub

**Budget:** £400-1,500 for a half-day shoot from a professional hospitality photographer. The ROI is immediate — professional photography increases booking rates by 15-25%.

**Find photographers:** Search "hospitality photographer Devon" or "hotel photographer South West UK". Ask for their portfolio and specifically for hospitality work.

---

### Priority 2: Google Business Profile

**Why now:** GBP is separate from the website and delivers traffic immediately — even before the website is rebuilt.

**What to do:** Use `TECHNICAL-04-GBP-Script.md` — it contains:
- Business description (copy-paste ready)
- All Q&As to pre-seed
- Weekly post templates
- Review response templates

**Time required:** 90 minutes to fully set up. Then 20 minutes per week to maintain.

---

### Priority 3: Review Acquisition

Start this immediately — it takes months to build review volume.

- Print QR code cards linking to Google Reviews — put on every table
- Add Google Review link to printed receipts
- Train staff to verbally ask departing guests
- Set up the WiFi landing page prompt (ask your internet provider / use a router with captive portal)

---

## PHASE 2: WEBSITE BUILD

### Website Specification Summary for Developer

**CMS:** WordPress (recommended — most flexibility, best plugin ecosystem for hospitality)
**Hosting:** SiteGround UK or Kinsta (UK data centres, managed WordPress security)
**SSL:** Let's Encrypt (free, auto-renews) — configure on hosting panel
**CDN:** Cloudflare free tier — set up after site is live

**Required integrations:**
1. Booking engine (Beds24 / Little Hotelier / Lodgify) — embedded on homepage, rooms pages
2. Table reservation (ResDiary / Collins) — embedded on food pages
3. Google Analytics 4 — via Google Site Kit plugin
4. Cookie consent (CookieYes) — GDPR compliance
5. Email newsletter (Mailchimp) — sign-up in footer
6. Schema markup — from `TECHNICAL-01-Schema-Markup.md`

**Performance targets:**
- LCP < 2.5 seconds on mobile
- CLS < 0.1
- Google PageSpeed 85+ on mobile

**Mobile requirements:**
- Sticky header: logo + click-to-call phone + Book button
- Sticky bottom bar: [Call] [Book Room] [Book Table]
- All touch targets minimum 44px
- No PDF menus — HTML only

---

### Page Build Order (Priority)

Build in this order to get the most important pages live first:

1. **Homepage** — highest traffic, highest conversion priority
2. **Rooms overview page** — primary conversion page for accommodation
3. **Individual room pages** (one per room) — needed for SEO and booking
4. **Food menu page** — HTML menu, not PDF link
5. **Sunday lunch page** — dedicated page, high conversion value
6. **Contact page** — with Google map, click-to-call, form
7. **Private hire page** — enquiry form, capacity info
8. **Weddings page** — gallery, enquiry form
9. **About page** — trust and story
10. **FAQ page** — schema markup, voice search
11. **Events/What's On page** — regularly updated
12. **Local area/Explore page** — SEO traffic
13. **Our Suppliers page** — `/about/our-suppliers/` (fill in real supplier details first)
14. **Blog section** — publish the 3 posts from this folder on launch
15. **Drinks menu page**
16. **Geo landing pages** (hotel near Bude, near Dartmoor, etc.)

---

### Design Direction for Designer

From `07-Design-Features-2026.md`:

**Colour palette:**
- Primary: Deep forest green (~#2D4A3E)
- Background: Warm cream/off-white (~#F5EDD6 / #FAFAF7)
- CTA buttons: Amber/burnt orange (~#C87941)
- Text: Deep charcoal (~#2A2A2A)

**Typography:**
- Headings: Playfair Display or Cormorant Garamond (Google Fonts)
- Body: Inter or Lato
- Max 2 font families

**Design direction:** Traditional with modern execution. Warm, not corporate. Local, not generic. Think independent Devon pub that's been thoughtfully presented — not a chain, not a design studio's idea of a pub.

**No:** Stock photography, image carousels, bright clinical white, corporate blue tones.

---

## PHASE 3: LAUNCH & IMMEDIATE POST-LAUNCH

### Launch Checklist

**Technical (from `TECHNICAL-03-Setup-Checklist.md`):**
- [ ] SSL installed and forcing HTTPS
- [ ] Google Search Console verified, sitemap submitted
- [ ] Google Analytics 4 live and recording
- [ ] Schema markup on all pages — tested with Rich Results Test
- [ ] All title tags and meta descriptions implemented (from `TECHNICAL-02-Title-Tags-Meta.md`)
- [ ] Robots.txt correct — not blocking content pages
- [ ] Booking engine working — full test on mobile
- [ ] Table reservation working — full test on mobile
- [ ] All forms working — test every form and confirm emails arrive
- [ ] Cookie consent banner showing on first visit
- [ ] Privacy Policy and Cookie Policy pages live and linked in footer
- [ ] Cloudflare set up (do this on launch day)
- [ ] Wordfence installed and configured
- [ ] UpdraftPlus backups configured

**Content:**
- [ ] All COPY files implemented on correct pages
- [ ] All photos uploaded with correct alt text and file names
- [ ] 3 blog posts published (from BLOG files in this folder)
- [ ] Menu updated to current actual menu
- [ ] Prices added to room pages (the COPY files use £[X] placeholders)
- [ ] Opening hours correct on all pages and on GBP
- [ ] Contact details correct everywhere

---

## PHASE 4: FIRST 90 DAYS POST-LAUNCH

### Month 1 Actions

| Action | File Reference | Time |
|--------|---------------|------|
| Submit to Visit Devon | `01-SEO-Strategy.md` Sec 7 | 30 min |
| Build 20 local citations | `TECHNICAL-03-Setup-Checklist.md` Sec 4.1 | 3 hours |
| Publish Google Post (weekly) | `TECHNICAL-04-GBP-Script.md` Sec 3 | 20 min/week |
| Respond to all reviews | `TECHNICAL-04-GBP-Script.md` Sec 5 | As needed |
| Start email newsletter | `07-Design-Features-2026.md` | 1 hour setup |
| Blog post 4 (Sunday Lunch guide) | `04-Copywriting-Guide.md` for voice | 2 hours |

### Month 2-3 Actions

| Action | File Reference | Time |
|--------|---------------|------|
| Build 10 more citations | `TECHNICAL-03-Setup-Checklist.md` | 2 hours |
| Write geo landing page content | `TECHNICAL-02-Title-Tags-Meta.md` | 1 hour/page |
| Blog posts 4 & 5 | Use content pillars from `01-SEO-Strategy.md` | 2 hrs each |
| Partner links outreach | `01-SEO-Strategy.md` Sec 7 | 3 hours |
| Check Search Console rankings | `TECHNICAL-03-Setup-Checklist.md` | 30 min |
| Review GA4 conversion data | `TECHNICAL-03-Setup-Checklist.md` | 30 min |

---

## KEY NUMBERS TO TRACK

Start measuring these from day 1:

| Metric | How to Track | Target (Month 6) |
|--------|-------------|-----------------|
| "hotel holsworthy" ranking | Google Search Console | Position 1-3 |
| "pub holsworthy" ranking | Google Search Console | Position 1-3 |
| GBP profile views | GBP Insights | 500+/month |
| Google Reviews count | Manual check | 30+ |
| Google Rating | Manual check | 4.5+ |
| Organic website sessions | GA4 | 200+/month |
| Booking conversion rate | GA4 events | 2-4% |
| Direct bookings % | Booking engine dashboard | 40%+ |

---

## THINGS THAT NEED REAL INFORMATION (Placeholders in Copy Files)

The copy files use placeholder text wherever real business information is needed. Before publishing, replace every instance of:

| Placeholder | Replace With |
|------------|-------------|
| `[X]` in prices | Actual price |
| `[X]am/pm` in times | Actual opening/serving times |
| `[local farm]` | Actual supplier names |
| `[Owner name(s)]` | Real names |
| `01409 XXXXXX` | Real phone number |
| `[email]` | Real email address |
| `[Room 1 Name]` etc. | Actual room names |
| `[X] guests` capacity | Actual capacity figures |
| `[year]` | Real year (founding or ownership date) |
| `[street address]` | Full actual address |
| `[Postcode]` | Real postcode |
| `[licence type]` on weddings page | Civil ceremony / reception only |
| `[Supplier Name]` / `[Location]` on suppliers page | Real supplier names and locations |
| `[01409 XXXXXX]` in email templates | Real phone number |
| `[domain]` in email templates | Real email domain |
| `[Google Review link]` in post-stay email | Direct link from GBP "Get more reviews" |

---

## WHAT THIS COSTS

Realistic budget estimates for a complete implementation:

| Item | Budget Range |
|------|-------------|
| Photography (half-day professional) | £400 – £1,200 |
| Website design & build (WordPress) | £2,000 – £5,000 |
| Booking engine (Beds24/Little Hotelier) | £30 – £80/month |
| Table reservation (ResDiary) | £50 – £100/month |
| Hosting (SiteGround/Kinsta) | £15 – £50/month |
| Cloudflare | Free |
| Google Analytics 4 | Free |
| Google Business Profile | Free |
| CookieYes consent banner | Free tier |
| UpdraftPlus backups | Free tier |
| Mailchimp email (up to 500 contacts) | Free |
| BrightLocal citations | £29/month (optional) |
| ICO registration | £40/year |

**Minimum viable launch:** ~£2,500-3,000 (budget photography + budget web build)
**Recommended investment:** ~£4,000-7,000 (professional photography + quality web build + first-year tools)
**Return on investment:** 5-10 extra room bookings per month at average £100/night = £6,000-12,000 additional revenue per year. ROI is typically achieved within 3-6 months.

---

## THE SINGLE MOST IMPORTANT THING

If only one thing gets done from this entire folder, it should be:

**Fully optimise the Google Business Profile.**

It's free, it takes 90 minutes, and it delivers more return per hour than anything else. The business description, Q&As, weekly posts, and review responses in `TECHNICAL-04-GBP-Script.md` are all ready to copy and paste.

Do this today.

---

*Master Implementation Guide prepared for White Hart Hotel, Holsworthy — April 2026*
*All files in this folder are ready to use — replace [placeholder] values with real information before publishing.*
