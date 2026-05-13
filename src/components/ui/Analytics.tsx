import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// ─── IDs — client must replace placeholders before going live ───────────
// GA4: analytics.google.com → Admin → Data Streams → Measurement ID
const GA4_ID = 'G-XXXXXXXXXX';
// Meta Pixel: business.facebook.com/events/manager → Pixel ID
const META_PIXEL_ID = 'XXXXXXXXXXXXXXX';
// Plausible: create free account at plausible.io, add domain whitehartholsworthy.co.uk
// Plausible tracks page views without requiring cookie consent (privacy-first)
const PLAUSIBLE_DOMAIN = 'whitehartholsworthy.co.uk';
// ─────────────────────────────────────────────────────────────────────────

const GA4_LIVE = GA4_ID !== 'G-XXXXXXXXXX';
const PIXEL_LIVE = META_PIXEL_ID !== 'XXXXXXXXXXXXXXX';

if (!GA4_LIVE && import.meta.env.PROD) {
  console.warn('[Analytics] GA4 ID is placeholder — no analytics data will be collected. Set GA4_ID in Analytics.tsx.');
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function getConsentState() {
  const raw = getCookie('wh_cookie_consent');
  if (!raw) return { analytics: false, marketing: false };
  try {
    const p = JSON.parse(raw);
    return { analytics: !!p.analytics, marketing: !!p.marketing };
  } catch {
    return { analytics: false, marketing: false };
  }
}

export function Analytics() {
  const location = useLocation();
  const [consent, setConsent] = useState(getConsentState);

  // Listen for consent changes
  useEffect(() => {
    const handler = () => setConsent(getConsentState());
    window.addEventListener('cookie-consent-updated', handler);
    return () => window.removeEventListener('cookie-consent-updated', handler);
  }, []);

  // ── Plausible (privacy-first, no consent required for basic page views) ─
  useEffect(() => {
    if (document.querySelector('script[data-plausible]')) return;
    const s = document.createElement('script');
    s.defer = true;
    s.dataset.domain = PLAUSIBLE_DOMAIN;
    s.dataset.plausible = 'true';
    s.src = 'https://plausible.io/js/script.outbound-links.js';
    document.head.appendChild(s);
  }, []);

  // ── GA4 (consent-gated) ─────────────────────────────────────────────────
  useEffect(() => {
    if (!consent.analytics || !GA4_LIVE) return;
    if (document.querySelector(`script[src*="${GA4_ID}"]`)) return;
    const s = document.createElement('script');
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    s.async = true;
    document.head.appendChild(s);
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA4_ID, {
      send_page_view: false, // we send manually for SPA
      enhanced_measurement: true,
    });
  }, [consent.analytics]);

  // ── Meta Pixel (consent-gated) ──────────────────────────────────────────
  useEffect(() => {
    if (!consent.marketing || !PIXEL_LIVE) return;
    if ((window as any).fbq) return;
    const s = document.createElement('script');
    s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;
    document.head.appendChild(s);
  }, [consent.marketing]);

  // ── SPA page view on route change ───────────────────────────────────────
  useEffect(() => {
    // Plausible auto-tracks via its script; we fire GA4 manually for SPA
    if (consent.analytics && GA4_LIVE && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
    if (consent.marketing && PIXEL_LIVE && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
    // Plausible custom event for SPA navigation
    if ((window as any).plausible) {
      (window as any).plausible('pageview');
    }
  }, [location.pathname, consent]);

  // ── Scroll depth milestones ─────────────────────────────────────────────
  useEffect(() => {
    const milestones = [25, 50, 75, 90];
    const fired = new Set<number>();

    const handler = () => {
      const scrolled = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
      milestones.forEach((pct) => {
        if (scrolled >= pct && !fired.has(pct)) {
          fired.add(pct);
          track('scroll_depth', { depth: pct, page: location.pathname });
        }
      });
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler);
      fired.clear();
    };
  }, [location.pathname]);

  return null;
}

// ─── Universal track() — works with both GA4 and Plausible ─────────────
export function track(eventName: string, params: Record<string, unknown> = {}) {
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  if ((window as any).plausible) {
    (window as any).plausible(eventName, { props: params as Record<string, string | number | boolean> });
  }
}

// ─── Conversion helpers ──────────────────────────────────────────────────

export function trackPhoneClick(location = 'unknown') {
  track('phone_click', { location, phone: 'tel:+441409253475' });
  if ((window as any).fbq) (window as any).fbq('track', 'Contact');
}

export function trackEmailClick(location = 'unknown') {
  track('email_click', { location });
}

export function trackOutboundClick(destination: string, label: string) {
  track('outbound_click', { destination, label });
}

export function trackFormStep(step: number, reason: string) {
  track('form_step', { step, reason, form_name: 'contact_wizard' });
}

export function trackFormSubmission(formType: 'enquiry' | 'booking' | 'newsletter', reason?: string) {
  track('generate_lead', {
    event_category: 'form',
    event_label: formType,
    form_name: formType,
    ...(reason ? { reason } : {}),
  });
  if ((window as any).fbq) {
    (window as any).fbq('track', formType === 'booking' ? 'InitiateCheckout' : 'Lead');
  }
}

export function trackBookingWidgetLoad() {
  track('booking_widget_load', { page: window.location.pathname });
}

export function trackBookingStarted(roomName?: string) {
  track('booking_started', { item_name: roomName ?? 'room' });
  if ((window as any).fbq) (window as any).fbq('track', 'AddToCart');
}

export function trackNewsletterSignup() {
  track('newsletter_signup', { form_name: 'footer_newsletter' });
  if ((window as any).fbq) (window as any).fbq('track', 'Subscribe');
}

// ─── UTM param capture ───────────────────────────────────────────────────
export function getUtmParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
    const val = params.get(key);
    if (val) utms[key] = val;
  });
  return utms;
}
