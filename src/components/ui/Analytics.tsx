import { useEffect, useState } from 'react';

const GA4_ID = 'G-XXXXXXXXXX'; // Client to provide
const META_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Client to provide

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export function Analytics() {
  const [consent, setConsent] = useState<{ analytics: boolean; marketing: boolean }>({ analytics: false, marketing: false });

  useEffect(() => {
    const checkConsent = () => {
      const raw = getCookie('wh_cookie_consent');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          setConsent({ analytics: !!parsed.analytics, marketing: !!parsed.marketing });
        } catch { /* ignore */ }
      }
    };

    checkConsent();
    window.addEventListener('cookie-consent-updated', checkConsent);
    return () => window.removeEventListener('cookie-consent-updated', checkConsent);
  }, []);

  useEffect(() => {
    if (consent.analytics && GA4_ID !== 'G-XXXXXXXXXX') {
      // Load GA4
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
      gtag('js', new Date());
      gtag('config', GA4_ID);
      (window as any).gtag = gtag;
    }
  }, [consent.analytics]);

  useEffect(() => {
    if (consent.marketing && META_PIXEL_ID !== 'XXXXXXXXXXXXXXX') {
      // Load Meta Pixel
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
        (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init','${META_PIXEL_ID}');fbq('track','PageView');
      `;
      document.head.appendChild(script);
    }
  }, [consent.marketing]);

  return null; // This component renders nothing — it just manages script loading
}

// Helper to fire tracking events from forms
export function trackFormSubmission(formType: 'enquiry' | 'booking' | 'newsletter') {
  // GA4
  if ((window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', {
      event_category: 'form',
      event_label: formType,
    });
  }

  // Meta Pixel
  if ((window as any).fbq) {
    if (formType === 'booking') {
      (window as any).fbq('track', 'InitiateCheckout');
    } else {
      (window as any).fbq('track', 'Lead');
    }
  }
}

// Helper to capture UTM params
export function getUtmParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(key => {
    const val = params.get(key);
    if (val) utms[key] = val;
  });
  return utms;
}
