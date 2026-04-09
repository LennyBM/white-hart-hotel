# The White Hart Hotel

Website for The White Hart Hotel, a historic family-run pub, restaurant and hotel in Holsworthy, Devon — dating back to 1591.

## Stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS 4
- React Router (client-side routing, lazy-loaded routes)
- React Helmet Async (per-page meta)
- Netlify Forms (contact, event enquiry, newsletter)

## Features

- Light "Antiquarian" theme with warm cream backgrounds and heritage gold accents
- Embedded live room booking widget (booking-directly.com)
- Just Eat integration for takeaway + local delivery
- Full menu pages (Bar, VINYL, Black Rock Grill, Takeaway)
- Dedicated event pages (Poker, Pool, Karaoke)
- 3-step contact form wizard with conditional fields per reason
- GDPR-compliant cookie consent (consent-gated GA4 + Meta Pixel)
- Structured data: LocalBusiness, Restaurant, Hotel, Event, FAQPage, Organization
- Self-hosted variable WOFF2 fonts (Newsreader + Inter)
- Mobile bottom bar with route-aware CTA
- Accessibility: skip-link, ARIA live regions, focus-visible, prefers-reduced-motion

## Getting Started

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build -> dist/
npm run preview # preview built site
```

## Deployment

Deployed to Netlify via `netlify.toml` build config.

- Build command: `npm run build`
- Publish directory: `dist`
- Security headers + CSP configured
- SPA fallback via `_redirects`
- www to non-www 301 redirect

Environment variables (optional for analytics):
- Set GA4 measurement ID in `src/components/ui/Analytics.tsx`
- Set Meta Pixel ID in `src/components/ui/Analytics.tsx`

## Content updates

All content is in `src/data/` — clients can edit:
- `rooms.ts` — rooms, prices, features
- `events.ts` — featured events
- `menuHighlights.ts` — menu items
- `faq.ts` — FAQ questions + answers
- `historyTimeline.ts` — Our Story timeline
- `openingHours.ts` — bar and kitchen hours

---

The White Hart Hotel · Built by Peake Management
