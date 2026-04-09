import { CONTACT } from '../../constants/contact';

interface SchemaOrgProps {
  type: 'LocalBusiness' | 'Restaurant' | 'Hotel' | 'Event' | 'BreadcrumbList' | 'FAQ' | 'Organization';
  data?: Record<string, unknown>;
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  let schema: Record<string, unknown> = {};

  if (type === 'LocalBusiness') {
    schema = {
      '@context': 'https://schema.org',
      '@type': ['BarOrPub', 'Hotel'],
      name: CONTACT.name,
      description: 'A historic family-run pub, restaurant and hotel in Holsworthy, Devon, dating back to 1591. Grade II Listed coaching inn serving traditional British food, stone-baked pizzas, real ales and boutique accommodation.',
      image: [
        `${CONTACT.siteUrl}/images/hero-exterior.webp`,
        `${CONTACT.siteUrl}/images/og-image.jpg`,
      ],
      url: CONTACT.siteUrl,
      telephone: CONTACT.phone,
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '7.2',
        bestRating: '10',
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
      ],
      starRating: { '@type': 'Rating', ratingValue: '2' },
      checkinTime: '14:00',
      checkoutTime: '10:30',
      numberOfRooms: 6,
      petsAllowed: true,
    };
  } else if (type === 'Restaurant') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'The White Hart Hotel - Restaurant',
      servesCuisine: ['British', 'Traditional English', 'Pizza'],
      url: `${CONTACT.siteUrl}/dining`,
      telephone: CONTACT.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.town,
        postalCode: CONTACT.address.postcode,
        addressCountry: 'GB',
      },
      priceRange: '££',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        bestRating: '5',
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
        url: `${CONTACT.siteUrl}/dining`,
      },
    };
  } else if (type === 'Hotel') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      name: CONTACT.name,
      url: `${CONTACT.siteUrl}/rooms`,
      telephone: CONTACT.phone,
      priceRange: 'From £58/night',
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.town,
        postalCode: CONTACT.address.postcode,
        addressCountry: 'GB',
      },
      numberOfRooms: 6,
      petsAllowed: true,
      checkinTime: '14:00',
      checkoutTime: '10:30',
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Pet Friendly', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'En-suite Bathroom', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Tea/Coffee Making Facilities', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Flat Screen TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Free Parking Nearby', value: true },
      ],
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
      mainEntity: (data.items as Array<{question: string; answer: string}>).map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  } else if (type === 'Organization') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: CONTACT.name,
      legalName: 'The White Hart Hotel',
      url: CONTACT.siteUrl,
      logo: `${CONTACT.siteUrl}/apple-touch-icon.png`,
      image: `${CONTACT.siteUrl}/images/hero-exterior.jpg`,
      description:
        'A historic family-run pub, restaurant and hotel in Holsworthy, Devon, dating back to 1591. Grade II Listed building run by Jon and Tam Hutchings.',
      telephone: CONTACT.phone,
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
        telephone: CONTACT.phone,
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
      ],
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
          streetAddress: CONTACT.address.street,
          addressLocality: CONTACT.address.town,
          postalCode: CONTACT.address.postcode,
          addressCountry: 'GB',
        },
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
