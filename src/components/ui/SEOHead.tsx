import { Helmet } from 'react-helmet-async';
import { PAGE_META } from '../../constants/seo';
import { CONTACT } from '../../constants/contact';

interface SEOHeadProps {
  page: keyof typeof PAGE_META;
}

export function SEOHead({ page }: SEOHeadProps) {
  const meta = PAGE_META[page];
  if (!meta) return null;

  const ogImage = meta.ogImage || `${CONTACT.siteUrl}/images/og-image.jpg`;

  const noIndex = page === 'notFound';

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <link rel="canonical" href={meta.canonical} />
      }

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={CONTACT.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
