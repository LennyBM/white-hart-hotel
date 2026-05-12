import { Helmet } from 'react-helmet-async';
import { CONTACT } from '../../constants/contact';

// Stable canonical IDs — one entity, one @id, reused across every page
export const SCHEMA_IDS = {
  organization: `${CONTACT.siteUrl}/#organization`,
  website: `${CONTACT.siteUrl}/#website`,
  localBusiness: `${CONTACT.siteUrl}/#localbusiness`,
} as const;

// International-format telephone (required for Google Rich Results)
const TEL_INTL = '+441409253475';

// Three image ratios Google recommends for LocalBusiness/Hotel
const BUSINESS_IMAGES = [
  `${CONTACT.siteUrl}/images/hero-exterior.webp`,      // 16:9
  `${CONTACT.siteUrl}/images/story-interior.webp`,     // 4:3
  `${CONTACT.siteUrl}/images/og-image.jpg`,            // 1:1-ish (1200×630)
];

interface BlogPostingData {
  '@type': 'BlogPosting';
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: Record<string, unknown>;
  publisher: Record<string, unknown>;
  url: string;
  mainEntityOfPage: string;
  keywords?: string;
  articleSection?: string;
}

interface SchemaOrgProps {
  type: 'LocalBusiness' | 'Restaurant' | 'Hotel' | 'Event' | 'BreadcrumbList' | 'FAQ' | 'Organization' | 'Person' | 'BlogPosting' | 'blogPostings' | 'ContactPage';
  data?: Record<string, unknown>;
  blogPostings?: BlogPostingData[];
}

export function SchemaOrg({ type, data, blogPostings }: SchemaOrgProps) {
  let schema: Record<string, unknown> = {};

  if (type === 'Organization') {
    // Site-wide Organisation — rendered once in Layout.tsx
    // Also emits the WebSite entity so sitelinks search box is eligible
    schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': SCHEMA_IDS.organization,
          name: CONTACT.name,
          legalName: 'The White Hart Hotel',
          url: CONTACT.siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${CONTACT.siteUrl}/apple-touch-icon.png`,
            width: 180,
            height: 180,
          },
          image: BUSINESS_IMAGES,
          description:
            'A historic family-run pub, restaurant and hotel in Holsworthy, Devon, dating back to 1591. Grade II Listed coaching inn run by Jon and Tam Hutchings.',
          telephone: TEL_INTL,
          email: CONTACT.email,
          foundingDate: '1591',
          address: {
            '@type': 'PostalAddress',
            streetAddress: `${CONTACT.address.number} ${CONTACT.address.street}`,
            addressLocality: CONTACT.address.town,
            addressRegion: CONTACT.address.county,
            postalCode: CONTACT.address.postcode,
            addressCountry: 'GB',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: TEL_INTL,
            contactType: 'Reservations',
            email: CONTACT.email,
            areaServed: 'GB',
            availableLanguage: 'English',
          },
          sameAs: [
            CONTACT.facebook,
            CONTACT.instagram,
            CONTACT.tripadvisor,
            CONTACT.bookingCom,
            CONTACT.camra,
          ],
        },
        {
          '@type': 'WebSite',
          '@id': SCHEMA_IDS.website,
          url: CONTACT.siteUrl,
          name: CONTACT.name,
          description: 'Historic pub, restaurant and hotel in Holsworthy, Devon since 1591.',
          publisher: { '@id': SCHEMA_IDS.organization },
          inLanguage: 'en-GB',
        },
      ],
    };
  } else if (type === 'LocalBusiness') {
    schema = {
      '@context': 'https://schema.org',
      '@type': ['BarOrPub', 'Hotel'],
      '@id': SCHEMA_IDS.localBusiness,
      name: CONTACT.name,
      description:
        'A historic family-run pub, restaurant and hotel in Holsworthy, Devon, dating back to 1591. Grade II Listed coaching inn serving traditional British food, stone-baked pizzas, real ales and boutique accommodation.',
      image: BUSINESS_IMAGES,
      url: CONTACT.siteUrl,
      telephone: TEL_INTL,
      email: CONTACT.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${CONTACT.address.number} ${CONTACT.address.street}`,
        addressLocality: CONTACT.address.town,
        addressRegion: CONTACT.address.county,
        postalCode: CONTACT.address.postcode,
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: CONTACT.coordinates.lat,
        longitude: CONTACT.coordinates.lng,
      },
      hasMap: CONTACT.googleMapsLink,
      servesCuisine: ['British', 'Traditional English', 'Pizza', 'Steak'],
      areaServed: [
        { '@type': 'City', name: 'Holsworthy' },
        { '@type': 'AdministrativeArea', name: 'Devon' },
      ],
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '11:00', closes: '23:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '11:00', closes: '00:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '22:30' },
      ],
      priceRange: '££',
      currenciesAccepted: 'GBP',
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      sameAs: [
        CONTACT.facebook,
        CONTACT.instagram,
        CONTACT.tripadvisor,
        CONTACT.bookingCom,
        CONTACT.camra,
      ],
      // aggregateRating — UPDATE quarterly with current Booking.com/TripAdvisor figures
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '7.2',
        bestRating: '10',
        worstRating: '1',
        ratingCount: '283',
        reviewCount: '283',
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Pet Friendly', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Bar', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Function Room', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Live Entertainment', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Pool Table', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Real Ale', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Dog Friendly', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Free Parking Nearby', value: true },
      ],
      // Hotel-specific fields (dual-typed entity)
      checkinTime: 'T14:00',
      checkoutTime: 'T10:30',
      numberOfRooms: 6,
      petsAllowed: true,
    };
  } else if (type === 'Restaurant') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': `${CONTACT.siteUrl}/dining#restaurant`,
      name: 'The White Hart Hotel — Restaurant',
      servesCuisine: ['British', 'Traditional English', 'Pizza'],
      url: `${CONTACT.siteUrl}/dining`,
      telephone: TEL_INTL,
      image: BUSINESS_IMAGES,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${CONTACT.address.number} ${CONTACT.address.street}`,
        addressLocality: CONTACT.address.town,
        addressRegion: CONTACT.address.county,
        postalCode: CONTACT.address.postcode,
        addressCountry: 'GB',
      },
      priceRange: '££',
      // aggregateRating — UPDATE quarterly with current review platform figures
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '17',
        reviewCount: '17',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '12:00', closes: '14:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday'], opens: '17:30', closes: '20:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '17:30', closes: '21:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '16:00' },
      ],
      hasMenu: {
        '@type': 'Menu',
        url: `${CONTACT.siteUrl}/menu`,
      },
    };
  } else if (type === 'Hotel') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      '@id': `${CONTACT.siteUrl}/rooms#hotel`,
      name: CONTACT.name,
      url: `${CONTACT.siteUrl}/rooms`,
      telephone: TEL_INTL,
      image: BUSINESS_IMAGES,
      priceRange: 'From £58/night',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${CONTACT.address.number} ${CONTACT.address.street}`,
        addressLocality: CONTACT.address.town,
        addressRegion: CONTACT.address.county,
        postalCode: CONTACT.address.postcode,
        addressCountry: 'GB',
      },
      numberOfRooms: 6,
      petsAllowed: true,
      checkinTime: 'T14:00',
      checkoutTime: 'T10:30',
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Pet Friendly', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'En-suite Bathroom', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Tea/Coffee Making Facilities', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Flat Screen TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Free Parking Nearby', value: true },
      ],
    };
  } else if (type === 'Person' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      ...data,
    };
  } else if (type === 'BlogPosting' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      publisher: {
        '@id': SCHEMA_IDS.organization,
      },
      ...data,
    };
  } else if (type === 'blogPostings' && blogPostings?.length) {
    schema = {
      '@context': 'https://schema.org',
      '@graph': blogPostings.map((post) => ({
        ...post,
        publisher: { '@id': SCHEMA_IDS.organization },
      })),
    };
  } else if (type === 'ContactPage') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${CONTACT.siteUrl}/contact#webpage`,
      url: `${CONTACT.siteUrl}/contact`,
      name: `Contact ${CONTACT.name}`,
      isPartOf: { '@id': SCHEMA_IDS.website },
      about: { '@id': SCHEMA_IDS.localBusiness },
    };
  } else if (type === 'BreadcrumbList' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.items,
    };
  } else if (type === 'FAQ' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (data.items as Array<{ question: string; answer: string }>).map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  } else if (type === 'Event' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      ...data,
      location: {
        '@type': 'Place',
        name: CONTACT.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${CONTACT.address.number} ${CONTACT.address.street}`,
          addressLocality: CONTACT.address.town,
          postalCode: CONTACT.address.postcode,
          addressCountry: 'GB',
        },
      },
      organizer: { '@id': SCHEMA_IDS.organization },
    };
  }

  if (!Object.keys(schema).length) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
