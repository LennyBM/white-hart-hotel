import { Helmet } from 'react-helmet-async';
import { PAGE_META } from '../../constants/seo';
import { CONTACT } from '../../constants/contact';
import { SCHEMA_IDS } from './SchemaOrg';

interface SEOHeadProps {
  page: keyof typeof PAGE_META;
  /** Optional breadcrumb trail — [{name, url}]. Home is always prepended automatically. */
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function SEOHead({ page, breadcrumbs }: SEOHeadProps) {
  const meta = PAGE_META[page];
  if (!meta) return null;

  const ogImage = meta.ogImage || `${CONTACT.siteUrl}/images/og-image.jpg`;
  const noIndex = page === 'notFound';
  const pageId = `${meta.canonical}#webpage`;

  // Build breadcrumb trail: Home → [custom crumbs] → current
  const crumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: CONTACT.siteUrl },
    ...(breadcrumbs || []).map((b, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: b.name,
      item: b.url,
    })),
  ];
  // If the current page isn't already the last breadcrumb, append it
  const lastCrumb = crumbItems[crumbItems.length - 1];
  if (lastCrumb.item !== meta.canonical) {
    crumbItems.push({
      '@type': 'ListItem',
      position: crumbItems.length + 1,
      name: meta.title.split('|')[0].trim(),
      item: meta.canonical,
    });
  }

  const pageGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageId,
        url: meta.canonical,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': SCHEMA_IDS.website },
        inLanguage: 'en-GB',
        ...(noIndex ? {} : { potentialAction: { '@type': 'ReadAction', target: [meta.canonical] } }),
      },
      ...(page !== 'home' && page !== 'notFound'
        ? [{
            '@type': 'BreadcrumbList',
            itemListElement: crumbItems,
          }]
        : []),
    ],
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <>
            <link rel="canonical" href={meta.canonical} />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          </>
      }

      {/* Geographic targeting — local SEO */}
      <meta name="geo.region" content="GB-DEV" />
      <meta name="geo.placename" content="Holsworthy, Devon, United Kingdom" />
      <meta name="geo.position" content={`${CONTACT.coordinates.lat};${CONTACT.coordinates.lng}`} />
      <meta name="ICBM" content={`${CONTACT.coordinates.lat}, ${CONTACT.coordinates.lng}`} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The White Hart Hotel — historic pub, restaurant and hotel in Holsworthy, Devon since 1591" />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={CONTACT.name} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="The White Hart Hotel — historic pub, restaurant and hotel in Holsworthy, Devon since 1591" />

      {/* Per-page WebPage + BreadcrumbList graph */}
      <script type="application/ld+json">{JSON.stringify(pageGraph)}</script>
    </Helmet>
  );
}
