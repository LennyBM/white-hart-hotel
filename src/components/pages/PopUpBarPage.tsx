import { useState, useEffect } from 'react';
import { SEOHead } from '../ui/SEOHead';
import { CTAButton } from '../ui/CTAButton';
import { CONTACT } from '../../constants/contact';
import { popUpServices, equipmentItems, eventTypes } from '../../data/popUpBarServices';
import { trackFormSubmission, getUtmParams } from '../ui/Analytics';

export function PopUpBarPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    guests: '',
    message: '',
  });
  const [utms, setUtms] = useState<Record<string, string>>({});
  useEffect(() => { setUtms(getUtmParams()); }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
      if (res.ok) {
        setFormState('success');
        trackFormSubmission('enquiry');
        setFormData({ name: '', email: '', phone: '', eventType: 'Wedding', eventDate: '', guests: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /** Map service icon key to an inline SVG element */
  const serviceIcon = (icon: string) => {
    const icons: Record<string, React.ReactNode> = {
      festival: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
        </svg>
      ),
      wedding: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      equipment: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.67-5.67a8 8 0 1111.34 0l-5.67 5.67zM11.42 15.17L17 21M7.75 21h8.5" />
        </svg>
      ),
      map: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
    };
    return icons[icon] || null;
  };

  return (
    <>
      <SEOHead page="popUpBar" breadcrumbs={[{ name: "Pop Up Bar", url: `/pop-up-bar` }]} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0">
          <source srcSet="/images/popup-hero.webp" type="image/webp" />
          <img
            src="/images/popup-hero.jpg"
            alt="Pop Up Bar Company setup at an outdoor event"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent mesh-warm" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-32 reveal-up text-over-image">
          <h1 className="font-headline italic text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl">
            Pop Up Bar{' '}
            <span className="block text-primary-container">Company.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mt-6 leading-relaxed font-light">
            Established in 2008, originally as Event barZ — the South West&rsquo;s
            leading mobile bar hire service. Bespoke bar solutions for weddings,
            festivals and private events across Devon and Cornwall.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <CTAButton href="#contact">Request a Quote</CTAButton>
            <CTAButton href={CONTACT.phoneHref} variant="outline">
              Call {CONTACT.phone}
            </CTAButton>
            <a
              href={CONTACT.popUpBarFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/30 text-white/80 hover:text-white hover:border-white/60 transition-colors font-label font-semibold text-sm uppercase tracking-wider"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 reveal-up">
            <p className="font-label uppercase tracking-[0.3em] text-primary text-xs font-medium mb-4">
              What We Do
            </p>
            <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface max-w-2xl">
              Crafting Exceptional Event Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {popUpServices.map((service, idx) => {
              const isWide = idx === 0 || idx === 3;
              return (
                <div
                  key={service.title}
                  className={`relative overflow-hidden rounded-lg bg-surface-container glass-card glass-card-hover p-8 md:p-10 flex flex-col justify-between min-h-[260px] transition-all duration-500 hover:-translate-y-1 ${isWide ? 'md:col-span-2' : 'md:col-span-1'} ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
                >
                  {idx === 3 && (
                    <picture className="absolute inset-0 opacity-10">
                      <source srcSet="/images/popup-map.webp" type="image/webp" />
                      <img
                        src="/images/popup-map.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                        aria-hidden="true"
                        width={800}
                        height={600}
                      />
                    </picture>
                  )}
                  <div className="relative z-10">
                    <div className="text-primary mb-6">{serviceIcon(service.icon)}</div>
                    <h3 className="font-headline italic text-2xl text-on-surface mb-3">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {service.description}
                    </p>
                    {service.badge && (
                      <p className="text-primary text-xs font-medium mt-3 tracking-wide">
                        {service.badge}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 reveal-up">
            <p className="font-label uppercase tracking-[0.3em] text-primary text-xs font-medium mb-4">
              Gallery
            </p>
            <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface">
              Recent Events
            </h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { src: '/images/popup-gallery-1.webp', alt: 'Rustic bar setup at a Devon wedding', h: 'h-80' },
              { src: '/images/popup-gallery-2.webp', alt: 'Cocktail preparation at a festival bar', h: 'h-64' },
              { src: '/images/popup-gallery-3.webp', alt: 'Champagne service at an outdoor event', h: 'h-96' },
              { src: '/images/popup-gallery-4.webp', alt: 'Decorated bar counter with fairy lights', h: 'h-72' },
              { src: '/images/popup-gallery-5.webp', alt: 'Guests enjoying drinks at a garden party', h: 'h-80' },
              { src: '/images/popup-gallery-6.webp', alt: 'Draught system setup at a music festival', h: 'h-64' },
            ].map((img, idx) => (
              <div
                key={img.src}
                className={`break-inside-avoid overflow-hidden rounded-lg ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              >
                <picture>
                  <source srcSet={img.src} type="image/webp" />
                  <img
                    src={img.src.replace('.webp', '.jpg')}
                    alt={img.alt}
                    className={`w-full ${img.h} object-cover transition-transform duration-700 hover:scale-105`}
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="font-label uppercase tracking-[0.3em] text-primary text-xs font-medium mb-4">
                Equipment Hire
              </p>
              <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface mb-6">
                Just the Gear?
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Not every event needs a full-service bar. We offer standalone
                equipment hire — from draught pumps and glassware to complete
                decor kits. Everything you need to run your own bar with
                professional-grade equipment.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                All equipment is delivered, set up, and collected. We provide full
                training and 24-hour support for the duration of your event.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal-right">
              {equipmentItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-surface-container card-lift rounded-lg p-6 text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-6 h-6 text-primary mx-auto mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-label uppercase tracking-widest text-xs text-on-surface font-bold mb-1">
                    {item.label}
                  </h4>
                  <p className="text-on-surface-variant text-xs">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-8 bg-surface-container mesh-warm">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-headline italic text-3xl text-on-surface mb-12 reveal">Why Choose Pop Up Bar Company</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: 'Since 2008', label: 'Established track record' },
              { stat: 'Permanent Base', label: 'Not just a phone number \u2014 a real business at The White Hart' },
              { stat: 'Devon & Cornwall', label: 'Full coverage across the South West' },
              { stat: 'Trained Staff', label: 'Professional bartenders from our hotel team' },
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-d${i+1}`}>
                <p className="font-headline italic text-2xl text-primary mb-2">{item.stat}</p>
                <p className="text-on-surface-variant text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-surface py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16 reveal-up">
            <p className="font-label uppercase tracking-[0.3em] text-primary text-xs font-medium mb-4">
              Enquire Now
            </p>
            <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface mb-4">
              Let&rsquo;s Plan Your Event
            </h2>
            <p className="text-on-surface-variant max-w-lg mx-auto font-light">
              Tell us about your event and we will put together a bespoke
              proposal tailored to your needs.
            </p>
            <p className="mt-4">
              <a
                href={`mailto:${CONTACT.popUpBarEmail}`}
                className="text-primary hover:text-primary/80 transition-colors font-medium underline"
              >
                {CONTACT.popUpBarEmail}
              </a>
            </p>
            <div className="mt-4">
              <a
                href={CONTACT.popUpBarFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm underline underline-offset-4"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Pop Up Bar Company on Facebook
              </a>
            </div>
          </div>

          {formState === 'success' ? (
            <div className="text-center py-16 reveal-up" role="status" aria-live="polite">
              <svg className="w-16 h-16 text-primary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-headline italic text-3xl text-on-surface mb-3">
                Enquiry Sent
              </h3>
              <p className="text-on-surface-variant mb-6">
                Thank you! We will be in touch within 24 hours.
              </p>
              <CTAButton onClick={() => setFormState('idle')} variant="outline">
                Send Another Enquiry
              </CTAButton>
            </div>
          ) : (
            <form
              name="event-enquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6 reveal-up glass-card luminous-border"
            >
              <input type="hidden" name="form-name" value="event-enquiry" />
              <p className="hidden">
                <label>
                  Do not fill this out: <input name="bot-field" />
                </label>
              </p>
              {Object.entries(utms).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={value} />
              ))}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="popup-name" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                    Name *
                  </label>
                  <input
                    id="popup-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="ghost-input w-full"
                    placeholder="Your full name"
                    aria-describedby="popup-name-error"
                  />
                </div>
                <div>
                  <label htmlFor="popup-email" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                    Email *
                  </label>
                  <input
                    id="popup-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="ghost-input w-full"
                    placeholder="you@example.com"
                    aria-describedby="popup-email-error"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="popup-phone" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                  Phone Number
                </label>
                <input
                  id="popup-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="ghost-input w-full"
                  placeholder="Your phone number"
                  aria-describedby="popup-phone-error"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="popup-eventType" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                    Event Type
                  </label>
                  <select
                    id="popup-eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="ghost-input w-full"
                    aria-describedby="popup-eventType-error"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="popup-eventDate" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                    Event Date
                  </label>
                  <input
                    id="popup-eventDate"
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="ghost-input w-full"
                    aria-describedby="popup-eventDate-error"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="popup-guests" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                  Estimated Guests
                </label>
                <input
                  id="popup-guests"
                  type="text"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="ghost-input w-full"
                  placeholder="e.g. 150"
                  aria-describedby="popup-guests-error"
                />
              </div>

              <div>
                <label htmlFor="popup-message" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                  Message
                </label>
                <textarea
                  id="popup-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="ghost-input w-full resize-none"
                  placeholder="Tell us about your event..."
                  aria-describedby="popup-message-error"
                />
              </div>

              {formState === 'error' && (
                <p className="text-error text-sm" role="alert" aria-live="assertive">
                  Something went wrong. Please try again or email us at{' '}
                  <a href={`mailto:${CONTACT.popUpBarEmail}`} className="underline">
                    {CONTACT.popUpBarEmail}
                  </a>
                  .
                </p>
              )}

              <div className="text-center pt-4">
                <CTAButton type="submit" disabled={formState === 'loading'}>
                  {formState === 'loading' ? 'Sending...' : 'Request Bespoke Quote'}
                </CTAButton>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
