# Schema Markup (Structured Data) — White Hart Hotel
## Ready-to-Implement JSON-LD Blocks for Every Page

---

## HOW TO IMPLEMENT

Add each JSON-LD block inside a `<script type="application/ld+json">` tag in the `<head>` section of the relevant page. If using WordPress + Yoast SEO, you can add custom schema via the Yoast schema tab or using a plugin like Schema Pro. Alternatively, add directly in the theme's `<head>` template.

**Test all schema at:** https://search.google.com/test/rich-results

---

## 1. HOMEPAGE SCHEMA
**Add to:** Homepage `<head>`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LodgingBusiness", "BarOrPub", "Restaurant"],
      "@id": "https://www.whitehart-holsworthy.co.uk/#business",
      "name": "White Hart Hotel",
      "url": "https://www.whitehart-holsworthy.co.uk",
      "logo": "https://www.whitehart-holsworthy.co.uk/images/white-hart-hotel-logo.png",
      "image": "https://www.whitehart-holsworthy.co.uk/images/white-hart-hotel-holsworthy-exterior.jpg",
      "description": "Traditional Devon pub with en-suite hotel rooms, locally-sourced food, and event spaces in the heart of Holsworthy, North Devon. Book direct for our best rate.",
      "telephone": "+441409XXXXXX",
      "email": "info@whitehart-holsworthy.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Full Street Address]",
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
      "servesCuisine": ["British", "Traditional Pub Food", "Contemporary British"],
      "hasMap": "https://maps.google.com/?q=White+Hart+Hotel+Holsworthy+Devon",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "11:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday", "Saturday"],
          "opens": "11:00",
          "closes": "23:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "12:00",
          "closes": "22:30"
        }
      ],
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Free Parking",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Pet Friendly",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Free WiFi",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Restaurant on site",
          "value": true
        }
      ],
      "sameAs": [
        "https://www.facebook.com/[whitehartholsworthy]",
        "https://www.instagram.com/[whitehartholsworthy]",
        "https://www.tripadvisor.co.uk/[listing-url]",
        "https://www.booking.com/[listing-url]"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.whitehart-holsworthy.co.uk/#website",
      "url": "https://www.whitehart-holsworthy.co.uk",
      "name": "White Hart Hotel Holsworthy",
      "publisher": {
        "@id": "https://www.whitehart-holsworthy.co.uk/#business"
      }
    }
  ]
}
```

**NOTE:** Replace all placeholder values:
- `[Full Street Address]` — actual street address
- `[Postcode]` — actual postcode
- `+441409XXXXXX` — actual phone number in international format
- `[whitehartholsworthy]` — actual social media handles
- `[listing-url]` — actual TripAdvisor/Booking.com listing URLs
- Lat/long coordinates: verify exact location on Google Maps

---

## 2. ROOMS OVERVIEW PAGE SCHEMA
**Add to:** `/stay/` page `<head>`

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.whitehart-holsworthy.co.uk/#business",
  "name": "White Hart Hotel",
  "numberOfRooms": [NUMBER OF ROOMS],
  "petsAllowed": true,
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Breakfast Included", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "En-suite Bathrooms", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Dog Friendly", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true}
  ]
}
```

---

## 3. INDIVIDUAL ROOM PAGE SCHEMA
**Add to:** Each `/stay/[room-name]/` page `<head>`
**Repeat for each room — change name, description, occupancy, bed details**

```json
{
  "@context": "https://schema.org",
  "@type": "HotelRoom",
  "name": "The Market Room",
  "description": "King-size en-suite room at the front of the White Hart Hotel, overlooking Holsworthy's market square. Walk-in shower, full cooked breakfast included.",
  "url": "https://www.whitehart-holsworthy.co.uk/stay/the-market-room/",
  "image": "https://www.whitehart-holsworthy.co.uk/images/market-room-hero.jpg",
  "occupancy": {
    "@type": "QuantitativeValue",
    "minValue": 1,
    "maxValue": 2
  },
  "bed": {
    "@type": "BedDetails",
    "typeOfBed": "King-size bed",
    "numberOfBeds": 1
  },
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "En-suite bathroom", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Tea and coffee", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Breakfast included", "value": true}
  ],
  "containedInPlace": {
    "@type": "LodgingBusiness",
    "@id": "https://www.whitehart-holsworthy.co.uk/#business"
  }
}
```

---

## 4. FOOD MENU PAGE SCHEMA
**Add to:** `/eat-drink/food-menu/` page `<head>`

```json
{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": "https://www.whitehart-holsworthy.co.uk/#business",
  "name": "White Hart Hotel",
  "servesCuisine": ["British", "Traditional Pub Food"],
  "hasMenu": "https://www.whitehart-holsworthy.co.uk/eat-drink/food-menu/",
  "priceRange": "££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "12:00",
      "closes": "14:30",
      "validFrom": "2026-01-01",
      "validThrough": "2026-12-31"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "18:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "12:00",
      "closes": "15:00"
    }
  ]
}
```

---

## 5. EVENTS PAGE SCHEMA
**Add to:** Each individual event (on the `/events/` page, markup each event separately)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Quiz Night at the White Hart",
  "description": "Our weekly quiz night — general knowledge, music rounds, picture rounds. Teams of up to 6. Prizes for top teams. £[X] per team entry.",
  "startDate": "2026-04-16T19:30:00",
  "endDate": "2026-04-16T22:00:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "White Hart Hotel",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Full Street Address]",
      "addressLocality": "Holsworthy",
      "addressRegion": "Devon",
      "postalCode": "[Postcode]",
      "addressCountry": "GB"
    }
  },
  "image": "https://www.whitehart-holsworthy.co.uk/images/quiz-night.jpg",
  "offers": {
    "@type": "Offer",
    "price": "[X]",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "url": "https://www.whitehart-holsworthy.co.uk/events/"
  },
  "organizer": {
    "@type": "Organization",
    "@id": "https://www.whitehart-holsworthy.co.uk/#business"
  }
}
```

**Note:** Create one Event schema block per event. Update dates each week/month.

---

## 6. FAQ PAGE SCHEMA
**Add to:** `/faq/` page `<head>`

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What time is check-in and check-out at the White Hart Hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check-in is from 3pm. Check-out is by 11am. Early check-in and late check-out may be available on request — contact us the day before your stay."
      }
    },
    {
      "@type": "Question",
      "name": "Do you allow dogs at the White Hart Hotel Holsworthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — dogs are welcome at the White Hart Hotel. Well-behaved dogs are welcome in the bar, garden, and most of our hotel rooms. Please let us know at the time of booking."
      }
    },
    {
      "@type": "Question",
      "name": "Is there parking at the White Hart Hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — free on-site parking is available for all hotel guests and customers visiting the pub and restaurant."
      }
    },
    {
      "@type": "Question",
      "name": "What time does the White Hart Hotel serve food?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve lunch Monday to Saturday from 12pm to 2:30pm, and dinner from 6pm to 9pm. Sunday lunch is served from 12pm to 3pm. Booking is recommended, especially for Sunday lunch and Friday/Saturday evenings."
      }
    },
    {
      "@type": "Question",
      "name": "Is breakfast included in the room rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — a full cooked breakfast is included in all B&B room rates at the White Hart Hotel. Dietary requirements can be accommodated with advance notice."
      }
    },
    {
      "@type": "Question",
      "name": "Can I hire the function room at the White Hart for a private event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we hire our function room for private events including birthdays, wakes, corporate events, and celebrations. The room holds up to [X] guests seated and [X] standing. Contact us via our private hire enquiry form or call us to discuss."
      }
    },
    {
      "@type": "Question",
      "name": "Does the White Hart Hotel host weddings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the White Hart Hotel is a wedding venue in Holsworthy, Devon. We offer [civil ceremonies / wedding receptions] for up to [X] guests. See our weddings page for full details or contact us to arrange a viewing."
      }
    },
    {
      "@type": "Question",
      "name": "How far is the White Hart Hotel from Bude?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The White Hart Hotel in Holsworthy is approximately 17 miles from Bude — around 25 minutes by car. It makes an ideal base for exploring the North Cornwall and North Devon coast."
      }
    },
    {
      "@type": "Question",
      "name": "How far is the White Hart Hotel from Dartmoor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dartmoor's northern edge is approximately 15-20 miles from Holsworthy — around 25-30 minutes by car. Okehampton and Belstone are the closest moorland access points."
      }
    },
    {
      "@type": "Question",
      "name": "Do you sell gift vouchers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we sell digital gift vouchers from £25, delivered instantly by email. They're available to buy from our gift vouchers page and are valid for [12 months / 2 years]."
      }
    }
  ]
}
```

---

## 7. CONTACT PAGE SCHEMA
**Add to:** `/contact/` page `<head>`

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.whitehart-holsworthy.co.uk/#business",
  "name": "White Hart Hotel",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Full Street Address]",
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
  "telephone": "+441409XXXXXX",
  "email": "info@whitehart-holsworthy.co.uk",
  "url": "https://www.whitehart-holsworthy.co.uk",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "11:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "11:00",
      "closes": "23:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "12:00",
      "closes": "22:30"
    }
  ]
}
```

---

## 8. BREADCRUMB SCHEMA
**Add to:** Every page except homepage

**Template (adapt paths and names per page):**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.whitehart-holsworthy.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Stay",
      "item": "https://www.whitehart-holsworthy.co.uk/stay/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "The Market Room",
      "item": "https://www.whitehart-holsworthy.co.uk/stay/the-market-room/"
    }
  ]
}
```

---

## 9. GEO LANDING PAGE SCHEMA
**Add to:** Each geo landing page (e.g. `/hotel-near-bude/`)

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.whitehart-holsworthy.co.uk/#business",
  "name": "White Hart Hotel — Hotel near Bude, Devon",
  "description": "The White Hart Hotel in Holsworthy is just 17 miles from Bude, making it the perfect base for exploring the North Devon and North Cornwall coast. En-suite rooms, full breakfast, free parking.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Holsworthy",
    "addressRegion": "Devon",
    "addressCountry": "GB"
  }
}
```

---

## VALIDATION CHECKLIST

After implementing schema:

- [ ] Test homepage schema: search.google.com/test/rich-results
- [ ] Test rooms page schema
- [ ] Test food page schema
- [ ] Test events page schema
- [ ] Test FAQ page schema — check for FAQ rich result eligibility
- [ ] Check Google Search Console > Rich Results after 1-2 weeks for any errors
- [ ] Validate JSON syntax: jsonlint.com (paste each block to confirm valid JSON)

---

*Technical file prepared for White Hart Hotel, Holsworthy — April 2026*
