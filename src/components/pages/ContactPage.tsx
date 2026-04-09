import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEOHead } from '../ui/SEOHead';
import { SchemaOrg } from '../ui/SchemaOrg';
import { GoogleMap } from '../ui/GoogleMap';
import { CTAButton } from '../ui/CTAButton';
import { FlourishDivider } from '../ui/FlourishDivider';
import { DeerMotif } from '../ui/DeerMotif';
import { CONTACT } from '../../constants/contact';
import { openingHours, kitchenNote } from '../../data/openingHours';
import { faqs } from '../../data/faq';
import { trackFormSubmission, getUtmParams } from '../ui/Analytics';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ReasonKey = 'Table Reservation' | 'Room Booking' | 'Private Event' | 'General Enquiry';
type FormStep = 1 | 2 | 3;
type FormSubmitState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: ReasonKey;
  message: string;
  /* Table */
  preferredDate: string;
  preferredTime: string;
  partySize: string;
  /* Room */
  checkinDate: string;
  numberOfNights: string;
  numberOfGuests: string;
  /* Event */
  eventDate: string;
  estimatedGuests: string;
}

const emptyForm: FormData = {
  name: '',
  email: '',
  phone: '',
  reason: 'General Enquiry',
  message: '',
  preferredDate: '',
  preferredTime: '',
  partySize: '',
  checkinDate: '',
  numberOfNights: '',
  numberOfGuests: '',
  eventDate: '',
  estimatedGuests: '',
};

/* ------------------------------------------------------------------ */
/*  Reason card data                                                   */
/* ------------------------------------------------------------------ */

interface ReasonCard {
  key: ReasonKey;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const reasonCards: ReasonCard[] = [
  {
    key: 'Table Reservation',
    title: 'Reserve a Table',
    description: 'Book your dining experience at The White Hart.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m18-12.75H3" />
      </svg>
    ),
  },
  {
    key: 'Room Booking',
    title: 'Book a Room',
    description: 'Stay the night in one of our characterful rooms.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    key: 'Private Event',
    title: 'Private Event',
    description: 'Plan a celebration, function or private dining.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    key: 'General Enquiry',
    title: 'General Enquiry',
    description: 'Ask us anything \u2014 we\u2019re happy to help.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Shared input class                                                 */
/* ------------------------------------------------------------------ */

const inputClass =
  'w-full px-4 py-3 bg-surface-container-low/80 border-b-2 border-on-surface-variant/30 focus:border-primary focus:bg-surface-container/80 text-on-surface placeholder:text-outline font-body text-sm rounded-t-md transition-all duration-300 outline-none';

/* ------------------------------------------------------------------ */
/*  Step progress indicator                                            */
/* ------------------------------------------------------------------ */

function StepIndicator({ current }: { current: FormStep }) {
  const labels = ['Reason', 'Details', 'Review'];
  return (
    <div className="flex items-center justify-center gap-0 mb-10 select-none">
      {labels.map((label, i) => {
        const step = (i + 1) as FormStep;
        const active = step === current;
        const completed = step < current;
        return (
          <div key={label} className="flex items-center">
            {i > 0 && (
              <div
                className={`w-12 sm:w-20 h-0.5 transition-colors duration-500 ${
                  completed ? 'bg-primary' : 'bg-outline-variant/30'
                }`}
              />
            )}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                  active
                    ? 'bg-primary text-on-primary scale-110'
                    : completed
                    ? 'bg-primary/80 text-on-primary'
                    : 'bg-surface-container border border-outline-variant/40 text-outline'
                }`}
              >
                {completed ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span
                className={`text-[10px] uppercase tracking-widest font-label ${
                  active ? 'text-primary font-bold' : 'text-outline'
                }`}
              >
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<FormStep>(1);
  const [formState, setFormState] = useState<FormSubmitState>('idle');
  const [formData, setFormData] = useState<FormData>({ ...emptyForm });
  const [utms, setUtms] = useState<Record<string, string>>({});
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('left');
  const formRef = useRef<HTMLFormElement>(null);

  /* UTM capture */
  useEffect(() => {
    setUtms(getUtmParams());
  }, []);

  /* Room URL-param auto-advance */
  useEffect(() => {
    const room = searchParams.get('room');
    if (room) {
      setFormData((prev) => ({
        ...prev,
        reason: 'Room Booking',
        message: `I'd like to enquire about booking ${room}.`,
      }));
      setStep(2);
    }
  }, [searchParams]);

  /* Navigation helpers */
  const goTo = (target: FormStep) => {
    setSlideDir(target > step ? 'left' : 'right');
    setStep(target);
  };

  const selectReason = (key: ReasonKey) => {
    setFormData((prev) => ({ ...prev, reason: key }));
    goTo(2);
  };


  /* Submit (Netlify) */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setFormState('success');
        trackFormSubmission('enquiry');
        setFormData({ ...emptyForm });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  /* Step-2 simple validation before review */
  const canProceedToReview = formData.name.trim() !== '' && formData.email.trim() !== '';

  /* Friendly labels for the review screen */
  const reviewLabel = (key: string): string => {
    const map: Record<string, string> = {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      reason: 'Enquiry Type',
      message: 'Message',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time',
      partySize: 'Party Size',
      checkinDate: 'Check-in Date',
      numberOfNights: 'Number of Nights',
      numberOfGuests: 'Number of Guests',
      eventDate: 'Event Date',
      estimatedGuests: 'Estimated Guests',
    };
    return map[key] ?? key;
  };

  /* Which fields are relevant for the current reason */
  const relevantKeys = (): (keyof FormData)[] => {
    const base: (keyof FormData)[] = ['name', 'email', 'phone', 'reason'];
    switch (formData.reason) {
      case 'Table Reservation':
        return [...base, 'preferredDate', 'preferredTime', 'partySize', 'message'];
      case 'Room Booking':
        return [...base, 'checkinDate', 'numberOfNights', 'numberOfGuests', 'message'];
      case 'Private Event':
        return [...base, 'eventDate', 'estimatedGuests', 'message'];
      default:
        return [...base, 'message'];
    }
  };

  /* Transition wrapper class */
  const slideClass =
    slideDir === 'left'
      ? 'animate-[slideInLeft_0.35s_ease-out_forwards]'
      : 'animate-[slideInRight_0.35s_ease-out_forwards]';

  return (
    <>
      <SEOHead page="contact" />
      <SchemaOrg type="FAQ" data={{ items: faqs }} />

      {/* Inline keyframes for slide transitions */}
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Hero — dark band with gold flourish + deer watermark */}
      <section className="band-dark-mesh relative overflow-hidden py-20 md:py-32 top-accent">
        {/* Deer watermark */}
        <DeerMotif className="absolute -top-10 -right-10 md:top-4 md:right-12 text-[#e6c487] opacity-[0.05]" size={340} />
        <DeerMotif className="absolute -bottom-12 -left-12 text-[#e6c487] opacity-[0.04] hidden md:block" size={260} />

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal-up">
            <FlourishDivider label="We'd Love to Hear From You" variant="light" className="mb-8" />
            <h1
              className="font-headline italic text-white leading-[1.05] mb-6 drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
            >
              Get in Touch
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Whether you&rsquo;re booking a table, planning an event, or simply want
              to say hello &mdash; we&rsquo;re always here.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 text-[#e6c487] hover:text-white transition-colors font-label tracking-wide"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {CONTACT.phone}
              </a>
              <span className="text-white/25" aria-hidden="true">·</span>
              <a
                href={CONTACT.emailHref}
                className="inline-flex items-center gap-2 text-[#e6c487] hover:text-white transition-colors font-label tracking-wide"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details + Form — on blush background with paper texture */}
      <section className="bg-blush paper-texture relative overflow-hidden py-24 md:py-32">
        {/* Subtle deer watermark corner */}
        <DeerMotif className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#9E7C3C] opacity-[0.04] hidden lg:block" size={400} />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-16 lg:gap-24">
            {/* ========== LEFT: Contact info ========== */}
            <div className="space-y-10 reveal-left">
              {/* Address */}
              <div>
                <h2 className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-3">
                  Address
                </h2>
                <address className="not-italic text-on-surface-variant leading-relaxed">
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.town}, {CONTACT.address.county}
                  <br />
                  {CONTACT.address.postcode}
                </address>
              </div>

              {/* Phone */}
              <div>
                <h2 className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-3">
                  Telephone
                </h2>
                <a
                  href={CONTACT.phoneHref}
                  className="text-on-surface hover:text-primary transition-colors text-lg"
                >
                  {CONTACT.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <h2 className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-3">
                  Email
                </h2>
                <a
                  href={CONTACT.emailHref}
                  className="text-on-surface hover:text-primary transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>

              {/* Facebook */}
              <div>
                <h2 className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-3">
                  Social
                </h2>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-on-surface hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </a>
              </div>

              {/* Opening Hours */}
              <div>
                <h2 className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-3">
                  Opening Hours
                </h2>
                <dl className="space-y-2 luminous-border rounded-lg p-4">
                  {openingHours.map((entry) => (
                    <div key={entry.days} className="flex justify-between gap-4">
                      <dt
                        className={`text-on-surface-variant ${
                          entry.highlight ? 'font-medium text-on-surface' : ''
                        }`}
                      >
                        {entry.days}
                      </dt>
                      <dd
                        className={`text-on-surface-variant ${
                          entry.highlight ? 'font-medium text-on-surface' : ''
                        }`}
                      >
                        {entry.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="text-on-surface-variant text-sm mt-3 italic">
                  {kitchenNote}
                </p>
              </div>
            </div>

            {/* ========== RIGHT: Multi-step form ========== */}
            <div className="reveal-right">
              {/* Quick-contact bar */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8 p-6 bg-surface-container rounded-lg glass-card luminous-border">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href={CONTACT.phoneHref} className="text-on-surface hover:text-primary transition-colors font-medium">
                    {CONTACT.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href={CONTACT.emailHref} className="text-on-surface hover:text-primary transition-colors font-medium">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* ----------- Glass form container ----------- */}
              <div className="glass-card luminous-border rounded-lg p-6 sm:p-10 overflow-hidden">
                {/* Success state */}
                {formState === 'success' ? (
                  <div className="text-center py-16" role="status" aria-live="polite">
                    <svg className="w-16 h-16 text-primary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-headline italic text-3xl text-on-surface mb-3">
                      Thank You
                    </h3>
                    <p className="text-on-surface-variant mb-4 leading-relaxed">
                      Your enquiry has been sent successfully. We will be in touch as
                      soon as possible.
                    </p>
                    <p className="text-on-surface-variant text-sm mb-8">
                      Need an immediate response? Call us on{' '}
                      <a href={CONTACT.phoneHref} className="text-primary underline font-medium">
                        {CONTACT.phone}
                      </a>
                    </p>
                    <CTAButton
                      onClick={() => {
                        setFormState('idle');
                        setStep(1);
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </CTAButton>
                  </div>
                ) : (
                  <>
                    {/* Progress indicator */}
                    <StepIndicator current={step} />

                    {/* The actual Netlify form - always rendered so all fields exist */}
                    <form
                      ref={formRef}
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="relative"
                    >
                      {/* Hidden Netlify plumbing */}
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden">
                        <label>
                          Do not fill this out: <input name="bot-field" />
                        </label>
                      </p>
                      {Object.entries(utms).map(([key, value]) => (
                        <input key={key} type="hidden" name={key} value={value} />
                      ))}

                      {/* All fields are always present as hidden inputs for Netlify */}
                      <input type="hidden" name="reason" value={formData.reason} />
                      <input type="hidden" name="name" value={formData.name} />
                      <input type="hidden" name="email" value={formData.email} />
                      <input type="hidden" name="phone" value={formData.phone} />
                      <input type="hidden" name="message" value={formData.message} />
                      <input type="hidden" name="preferredDate" value={formData.preferredDate} />
                      <input type="hidden" name="preferredTime" value={formData.preferredTime} />
                      <input type="hidden" name="partySize" value={formData.partySize} />
                      <input type="hidden" name="checkinDate" value={formData.checkinDate} />
                      <input type="hidden" name="numberOfNights" value={formData.numberOfNights} />
                      <input type="hidden" name="numberOfGuests" value={formData.numberOfGuests} />
                      <input type="hidden" name="eventDate" value={formData.eventDate} />
                      <input type="hidden" name="estimatedGuests" value={formData.estimatedGuests} />

                      {/* ===== STEP 1: Reason selection ===== */}
                      {step === 1 && (
                        <div key="step1" className={slideClass}>
                          <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-2 text-center">
                            What can we help with?
                          </h2>
                          <p className="text-on-surface-variant text-sm text-center mb-8">
                            Select the option that best describes your enquiry.
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {reasonCards.map((card) => (
                              <button
                                key={card.key}
                                type="button"
                                onClick={() => selectReason(card.key)}
                                className={`group relative text-left p-6 rounded-lg border transition-all duration-300 cursor-pointer
                                  bg-surface-container/40 backdrop-blur-md border-outline-variant/20
                                  hover:border-primary/60 hover:bg-surface-container/70 hover:shadow-lg hover:shadow-primary/5
                                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                                  ${formData.reason === card.key ? 'border-primary bg-surface-container/70 shadow-lg shadow-primary/10' : ''}
                                `}
                              >
                                <div className="text-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                                  {card.icon}
                                </div>
                                <h3 className="font-label font-bold text-sm uppercase tracking-widest text-on-surface mb-1">
                                  {card.title}
                                </h3>
                                <p className="text-on-surface-variant text-xs leading-relaxed">
                                  {card.description}
                                </p>
                                {/* Subtle arrow */}
                                <svg
                                  className="absolute top-6 right-5 w-4 h-4 text-outline opacity-0 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ===== STEP 2: Your Details ===== */}
                      {step === 2 && (
                        <div key="step2" className={slideClass}>
                          <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-2 text-center">
                            Your Details
                          </h2>
                          <p className="text-on-surface-variant text-sm text-center mb-8">
                            For your{' '}
                            <span className="text-primary font-medium">{formData.reason.toLowerCase()}</span>{' '}
                            enquiry.
                          </p>

                          <div className="space-y-5">
                            {/* Name */}
                            <div>
                              <label htmlFor="step-name" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                Name *
                              </label>
                              <input
                                id="step-name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                                className={inputClass}
                                placeholder="Your full name"
                                required
                              />
                            </div>

                            {/* Email */}
                            <div>
                              <label htmlFor="step-email" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                Email *
                              </label>
                              <input
                                id="step-email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                                className={inputClass}
                                placeholder="you@example.com"
                                required
                              />
                            </div>

                            {/* Phone */}
                            <div>
                              <label htmlFor="step-phone" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                Phone
                              </label>
                              <input
                                id="step-phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                                className={inputClass}
                                placeholder="Your phone number (optional)"
                              />
                            </div>

                            {/* ----- Conditional fields ----- */}

                            {/* Table Reservation */}
                            {formData.reason === 'Table Reservation' && (
                              <div className="space-y-5 pt-2 border-t border-outline-variant/20">
                                <div>
                                  <label htmlFor="step-preferredDate" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                    Preferred Date
                                  </label>
                                  <input
                                    id="step-preferredDate"
                                    type="date"
                                    value={formData.preferredDate}
                                    onChange={(e) => setFormData((p) => ({ ...p, preferredDate: e.target.value }))}
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="step-preferredTime" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                    Preferred Time
                                  </label>
                                  <select
                                    id="step-preferredTime"
                                    value={formData.preferredTime}
                                    onChange={(e) => setFormData((p) => ({ ...p, preferredTime: e.target.value }))}
                                    className={inputClass}
                                  >
                                    <option value="">Select a time</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="18:30">18:30</option>
                                    <option value="19:00">19:00</option>
                                    <option value="19:30">19:30</option>
                                    <option value="20:00">20:00</option>
                                    <option value="20:30">20:30</option>
                                  </select>
                                </div>
                                <div>
                                  <label htmlFor="step-partySize" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                    Party Size
                                  </label>
                                  <input
                                    id="step-partySize"
                                    type="number"
                                    min={1}
                                    max={20}
                                    value={formData.partySize}
                                    onChange={(e) => setFormData((p) => ({ ...p, partySize: e.target.value }))}
                                    className={inputClass}
                                    placeholder="Number of guests (1-20)"
                                  />
                                </div>
                              </div>
                            )}

                            {/* Room Booking */}
                            {formData.reason === 'Room Booking' && (
                              <div className="space-y-5 pt-2 border-t border-outline-variant/20">
                                <div>
                                  <label htmlFor="step-checkinDate" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                    Check-in Date
                                  </label>
                                  <input
                                    id="step-checkinDate"
                                    type="date"
                                    value={formData.checkinDate}
                                    onChange={(e) => setFormData((p) => ({ ...p, checkinDate: e.target.value }))}
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="step-numberOfNights" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                    Number of Nights
                                  </label>
                                  <input
                                    id="step-numberOfNights"
                                    type="number"
                                    min={1}
                                    max={14}
                                    value={formData.numberOfNights}
                                    onChange={(e) => setFormData((p) => ({ ...p, numberOfNights: e.target.value }))}
                                    className={inputClass}
                                    placeholder="1-14 nights"
                                  />
                                </div>
                                <div>
                                  <label htmlFor="step-numberOfGuests" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                    Number of Guests
                                  </label>
                                  <input
                                    id="step-numberOfGuests"
                                    type="number"
                                    min={1}
                                    max={6}
                                    value={formData.numberOfGuests}
                                    onChange={(e) => setFormData((p) => ({ ...p, numberOfGuests: e.target.value }))}
                                    className={inputClass}
                                    placeholder="1-6 guests"
                                  />
                                </div>
                              </div>
                            )}

                            {/* Private Event */}
                            {formData.reason === 'Private Event' && (
                              <div className="space-y-5 pt-2 border-t border-outline-variant/20">
                                <div>
                                  <label htmlFor="step-eventDate" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                    Event Date
                                  </label>
                                  <input
                                    id="step-eventDate"
                                    type="date"
                                    value={formData.eventDate}
                                    onChange={(e) => setFormData((p) => ({ ...p, eventDate: e.target.value }))}
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="step-estimatedGuests" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                    Estimated Guests
                                  </label>
                                  <input
                                    id="step-estimatedGuests"
                                    type="number"
                                    min={1}
                                    max={200}
                                    value={formData.estimatedGuests}
                                    onChange={(e) => setFormData((p) => ({ ...p, estimatedGuests: e.target.value }))}
                                    className={inputClass}
                                    placeholder="Expected number of guests"
                                  />
                                </div>
                              </div>
                            )}

                            {/* Message */}
                            <div>
                              <label htmlFor="step-message" className="block font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">
                                Message
                              </label>
                              <textarea
                                id="step-message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                                className={`${inputClass} resize-none`}
                                placeholder="Anything else we should know?"
                              />
                            </div>
                          </div>

                          {/* Navigation */}
                          <div className="flex items-center justify-between mt-8 gap-4">
                            <button
                              type="button"
                              onClick={() => goTo(1)}
                              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface text-sm font-label uppercase tracking-widest transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                              </svg>
                              Back
                            </button>

                            <CTAButton
                              type="button"
                              onClick={() => goTo(3)}
                              disabled={!canProceedToReview}
                            >
                              Review
                            </CTAButton>
                          </div>
                        </div>
                      )}

                      {/* ===== STEP 3: Review & Send ===== */}
                      {step === 3 && (
                        <div key="step3" className={slideClass}>
                          <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-2 text-center">
                            Review &amp; Send
                          </h2>
                          <p className="text-on-surface-variant text-sm text-center mb-8">
                            Please check your details before submitting.
                          </p>

                          {/* Summary card */}
                          <div className="bg-surface-container/60 backdrop-blur-sm rounded-lg p-6 border border-outline-variant/20 mb-6">
                            <dl className="space-y-3">
                              {relevantKeys().map((key) => {
                                const val = formData[key];
                                if (!val) return null;
                                return (
                                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-4 py-2 border-b border-outline-variant/10 last:border-b-0">
                                    <dt className="text-on-surface-variant text-xs uppercase tracking-widest font-label font-bold shrink-0">
                                      {reviewLabel(key)}
                                    </dt>
                                    <dd className="text-on-surface text-sm text-right break-words">
                                      {val}
                                    </dd>
                                  </div>
                                );
                              })}
                            </dl>
                          </div>

                          {/* Error */}
                          {formState === 'error' && (
                            <div className="mb-6 p-4 rounded-lg bg-error/10 border border-error/30" role="alert" aria-live="assertive">
                              <p className="text-error text-sm font-medium mb-1">
                                Something went wrong
                              </p>
                              <p className="text-error/80 text-xs">
                                Please try again or call us directly on{' '}
                                <a href={CONTACT.phoneHref} className="underline font-medium">
                                  {CONTACT.phone}
                                </a>
                                .
                              </p>
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex items-center justify-between gap-4">
                            <button
                              type="button"
                              onClick={() => goTo(2)}
                              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface text-sm font-label uppercase tracking-widest transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                              </svg>
                              Edit
                            </button>

                            <CTAButton type="submit" disabled={formState === 'loading'}>
                              {formState === 'loading' ? 'Sending\u2026' : 'Send Enquiry'}
                            </CTAButton>
                          </div>

                          <p className="text-on-surface-variant text-sm mt-6 text-center">
                            For room bookings, call us directly for the best rate:{' '}
                            <a
                              href={CONTACT.phoneHref}
                              className="text-primary hover:text-primary/80 underline transition-colors font-medium"
                            >
                              {CONTACT.phone}
                            </a>
                          </p>
                        </div>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="reveal-up">
        <GoogleMap className="w-full h-[450px]" />
      </section>

      {/* Parking Info */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl reveal-up">
          <div className="bg-surface-container glass-card rounded-lg p-8 md:p-12 text-center">
            <svg
              className="w-10 h-10 text-primary mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <h3 className="font-headline italic text-2xl text-on-surface mb-3">
              Parking
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Free public car parks are available within a short walk of the
              hotel. The nearest is the Holsworthy town centre car park on Well
              Park, just 100 metres from our front door. On-street parking is
              also available along Fore Street.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline italic text-3xl md:text-4xl text-on-surface mb-12 text-center reveal">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0 reveal">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border-b border-outline-variant/20 last:border-b-0"
              >
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none font-label text-sm font-semibold text-on-surface hover:text-primary transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-outline shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="pb-5 text-on-surface-variant text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
