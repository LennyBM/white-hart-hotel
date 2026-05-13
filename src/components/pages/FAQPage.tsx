import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../ui/SEOHead';
import { FlourishDivider } from '../ui/FlourishDivider';
import { SchemaOrg } from '../ui/SchemaOrg';
import { CONTACT } from '../../constants/contact';

interface FAQItem {
  question: string;
  answer: string;
  answerJsx: React.ReactNode;
}

interface FAQSection {
  heading: string;
  id: string;
  cta?: { label: string; to: string };
  items: FAQItem[];
}

const FAQ_SECTIONS: FAQSection[] = [
  {
    heading: 'Visiting & General',
    id: 'visiting',
    items: [
      {
        question: 'Where is The White Hart Hotel?',
        answer: 'We are at 3 Fore Street, Holsworthy, Devon, EX22 6EB — right in the centre of town. We are easy to find on the main high street.',
        answerJsx: <p>We are at 3 Fore Street, Holsworthy, Devon, EX22 6EB — right in the centre of town. We are easy to find on the main high street. <Link to="/contact" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">See our map and directions.</Link></p>,
      },
      {
        question: 'What are your opening hours?',
        answer: 'We are open Monday to Thursday 11am–11pm, Friday and Saturday 11am–midnight, and Sunday 11am–10:30pm. Kitchen hours differ — see our dining page for details.',
        answerJsx: <p>We are open Monday to Thursday 11am–11pm, Friday and Saturday 11am–midnight, and Sunday 11am–10:30pm. Kitchen hours differ — see our <Link to="/dining" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">dining page</Link> for details.</p>,
      },
      {
        question: 'Is there parking near The White Hart?',
        answer: 'Yes — there is free public parking in Holsworthy town centre, a short walk from the pub. The main car park is on Bodmin Street, approximately 2 minutes on foot.',
        answerJsx: <p>Yes — there is free public parking in Holsworthy town centre, a short walk from the pub. The main car park is on Bodmin Street, approximately 2 minutes on foot.</p>,
      },
      {
        question: 'Are dogs welcome?',
        answer: 'Yes, well-behaved dogs are welcome in our bar areas and beer garden. Please keep dogs on a lead. We have water bowls behind the bar.',
        answerJsx: <p>Yes, well-behaved dogs are welcome in our bar areas and beer garden. Please keep dogs on a lead. We have water bowls behind the bar.</p>,
      },
      {
        question: 'Do you have disabled access?',
        answer: 'The ground floor bar and restaurant are wheelchair accessible. We have an accessible toilet on the ground floor. Please contact us in advance if you need any assistance and we will do our best to accommodate you.',
        answerJsx: <p>The ground floor bar and restaurant are wheelchair accessible. We have an accessible toilet on the ground floor. Please <Link to="/contact" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">contact us</Link> in advance if you need any assistance and we will do our best to accommodate you.</p>,
      },
      {
        question: 'Do you have free WiFi?',
        answer: 'Yes, free WiFi is available throughout the building for guests and diners.',
        answerJsx: <p>Yes, free WiFi is available throughout the building for guests and diners.</p>,
      },
    ],
  },
  {
    heading: 'Dining & Food',
    id: 'dining',
    cta: { label: 'View Our Menu', to: '/menu' },
    items: [
      {
        question: 'Do I need to book a table?',
        answer: 'Booking is recommended for Sunday Carvery and VINYL evenings (Friday and Saturday), especially during peak season. Bar food is available without booking on a first-come, first-served basis. Call us on 01409 253475 or use our contact form to reserve.',
        answerJsx: <p>Booking is recommended for <Link to="/dining" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">Sunday Carvery and VINYL evenings</Link> (Friday and Saturday), especially during peak season. Bar food is available without booking. Call us on <a href={CONTACT.phoneHref} className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">{CONTACT.phone}</a> or use our <Link to="/contact" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">contact form</Link> to reserve.</p>,
      },
      {
        question: 'What is VINYL?',
        answer: 'VINYL is our Friday and Saturday evening restaurant experience — stone-baked pizzas, Black Rock steaks, burgers, ribs, and DJ sets from 8pm. It runs from 6pm to close on Fridays and Saturdays.',
        answerJsx: <p><Link to="/dining" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">VINYL</Link> is our Friday and Saturday evening restaurant experience — stone-baked pizzas, Black Rock steaks, burgers, ribs, and DJ sets from 8pm. It runs from 6pm to close on Fridays and Saturdays.</p>,
      },
      {
        question: 'When is the Sunday Carvery served?',
        answer: 'Our Sunday Carvery is served every Sunday from 12pm until we sell out — usually around 4pm. It is very popular, so we strongly recommend booking ahead.',
        answerJsx: <p>Our <Link to="/dining" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">Sunday Carvery</Link> is served every Sunday from 12pm until we sell out — usually around 4pm. It is very popular, so we strongly recommend booking ahead.</p>,
      },
      {
        question: 'Do you cater for dietary requirements?',
        answer: 'Yes — we have vegetarian, vegan, and gluten-free options on our menu. Please let us know your requirements when booking and our kitchen will do their best to accommodate you.',
        answerJsx: <p>Yes — we have vegetarian, vegan, and gluten-free options on our <Link to="/menu" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">menu</Link>. Please let us know your requirements when booking and our kitchen will do their best to accommodate you.</p>,
      },
      {
        question: 'Do you do takeaway?',
        answer: 'Yes — we offer takeaway and delivery through Just Eat, or you can order for collection by phone. Our full menu is available for takeaway.',
        answerJsx: <p>Yes — we offer <Link to="/takeaway" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">takeaway and delivery through Just Eat</Link>, or you can order for collection by calling <a href={CONTACT.phoneHref} className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">{CONTACT.phone}</a>. Our full menu is available for takeaway.</p>,
      },
      {
        question: 'What is the Black Rock Grill?',
        answer: 'The Black Rock Grill lets you cook your own steak on a volcanic rock heated to over 300°C at your table. Steaks are locally sourced from Swannacott Manor Meats. Available on Wednesday and VINYL evenings.',
        answerJsx: <p>The <Link to="/black-rock-grill" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">Black Rock Grill</Link> lets you cook your own steak on a volcanic rock heated to over 300°C at your table. Steaks are locally sourced from Swannacott Manor Meats. Available on Wednesday and VINYL evenings.</p>,
      },
    ],
  },
  {
    heading: 'Rooms & Staying',
    id: 'rooms',
    cta: { label: 'View Our Rooms', to: '/rooms' },
    items: [
      {
        question: 'How many rooms do you have?',
        answer: 'We have six boutique hotel rooms, each individually styled in a historic coaching inn that dates back to 1591. All rooms are en-suite.',
        answerJsx: <p>We have six <Link to="/rooms" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">boutique hotel rooms</Link>, each individually styled in a historic coaching inn that dates back to 1591. All rooms are en-suite.</p>,
      },
      {
        question: 'What is the check-in and check-out time?',
        answer: 'Check-in is from 2pm. Check-out is by 10:30am. If you need an early check-in or late check-out, please contact us in advance and we will do our best to accommodate.',
        answerJsx: <p>Check-in is from 2pm. Check-out is by 10:30am. If you need an early check-in or late check-out, please <Link to="/contact" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">contact us</Link> in advance and we will do our best to accommodate.</p>,
      },
      {
        question: 'How do I book a room?',
        answer: 'You can book directly online through our booking widget, by phone on 01409 253475, or by email. Booking direct guarantees the best rate.',
        answerJsx: <p>You can <Link to="/rooms#book" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">book directly online</Link> through our booking widget, by phone on <a href={CONTACT.phoneHref} className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">{CONTACT.phone}</a>, or by <a href={CONTACT.emailHref} className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">email</a>. Booking direct guarantees the best rate.</p>,
      },
      {
        question: 'Are dogs allowed in the rooms?',
        answer: 'We are a dog-friendly hotel and can accommodate well-behaved dogs in selected rooms. Please mention this when booking so we can allocate an appropriate room. A small supplement may apply.',
        answerJsx: <p>We are a dog-friendly hotel and can accommodate well-behaved dogs in selected rooms. Please mention this when <Link to="/rooms#book" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">booking</Link> so we can allocate an appropriate room. A small supplement may apply.</p>,
      },
      {
        question: 'Is breakfast included?',
        answer: 'Breakfast is not automatically included, but we serve breakfast from the bar in the morning for guests. Please ask at check-in for details and times.',
        answerJsx: <p>Breakfast is not automatically included, but we serve breakfast from the bar in the morning for guests. Please ask at check-in for details and times.</p>,
      },
    ],
  },
  {
    heading: 'Events & Entertainment',
    id: 'events',
    cta: { label: "See What's On", to: '/whats-on' },
    items: [
      {
        question: 'What regular events do you run?',
        answer: "We run LPPL Poker Nights every Tuesday, Black Rock Grill Steak Nights on Wednesdays, and Karaoke Party on the first Saturday of every month. VINYL restaurant runs every Friday and Saturday with live DJ sets.",
        answerJsx: <p>We run <Link to="/whats-on/poker" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">LPPL Poker Nights every Tuesday</Link>, <Link to="/black-rock-grill" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">Black Rock Grill Steak Nights</Link> on Wednesdays, and <Link to="/whats-on/karaoke" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">Karaoke Party</Link> on the first Saturday of every month. VINYL restaurant runs every Friday and Saturday with live DJ sets.</p>,
      },
      {
        question: 'Can I hire The White Hart for a private event?',
        answer: 'Yes — we have a function room available for private hire, ideal for birthday parties, wakes, family gatherings and corporate events. Contact us to discuss your requirements.',
        answerJsx: <p>Yes — we have a function room available for private hire, ideal for birthday parties, wakes, family gatherings and corporate events. <Link to="/contact" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">Contact us</Link> to discuss your requirements.</p>,
      },
      {
        question: 'Do you have a pool table?',
        answer: 'Yes — we have a pool table in our downstairs bar. It is 70p per game or 2 games for £1. Open to everyone, no booking needed.',
        answerJsx: <p>Yes — we have a <Link to="/whats-on/pool" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">pool table in our downstairs bar</Link>. It is 70p per game or 2 games for £1. Open to everyone, no booking needed.</p>,
      },
      {
        question: 'Do you have a mobile bar for weddings and events?',
        answer: 'Yes — our sister company, The Pop Up Bar Company, provides bespoke mobile bar hire for weddings, festivals and private events across Devon and Cornwall.',
        answerJsx: <p>Yes — our sister company, <Link to="/pop-up-bar" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">The Pop Up Bar Company</Link>, provides bespoke mobile bar hire for weddings, festivals and private events across Devon and Cornwall.</p>,
      },
    ],
  },
];

export function FAQPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const schemaItems = FAQ_SECTIONS.flatMap((sec) =>
    sec.items.map((item) => ({ question: item.question, answer: item.answer }))
  );

  return (
    <>
      <SEOHead page="faqs" breadcrumbs={[{ name: 'FAQs', url: `${CONTACT.siteUrl}/faqs` }]} />
      <SchemaOrg type="FAQ" data={{ items: schemaItems }} />

      <section className="band-dark-mesh relative overflow-hidden py-20 md:py-28 top-accent">
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FlourishDivider label="Help" variant="light" className="mb-6" />
            <h1
              className="font-headline italic text-white leading-[1.05] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)' }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-5 max-w-xl mx-auto font-light leading-relaxed">
              Everything you need to know about visiting, dining, staying, and celebrating at The White Hart.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blush paper-texture relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-16">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-6 pb-3 border-b border-outline-variant/20">
                  {section.heading}
                </h2>

                <dl className="space-y-2">
                  {section.items.map((item, i) => {
                    const key = `${section.id}-${i}`;
                    const isOpen = !!open[key];
                    return (
                      <div
                        key={key}
                        className="border border-outline-variant/20 rounded-lg overflow-hidden bg-surface hover:border-primary/20 transition-colors"
                      >
                        <dt>
                          <button
                            onClick={() => toggle(key)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${key}`}
                            className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 font-label text-sm font-semibold text-on-surface min-h-[52px]"
                          >
                            <span>{item.question}</span>
                            <svg
                              className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </dt>
                        <dd
                          id={`faq-answer-${key}`}
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                          hidden={!isOpen}
                        >
                          <div className="px-5 pb-5 text-on-surface-variant text-sm leading-relaxed font-light border-t border-outline-variant/10 pt-4">
                            {item.answerJsx}
                          </div>
                        </dd>
                      </div>
                    );
                  })}
                </dl>

                {section.cta && (
                  <div className="mt-6">
                    <Link
                      to={section.cta.to}
                      className="inline-flex items-center gap-2 bg-primary text-on-primary px-7 py-3 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:bg-primary-container transition-colors btn-shimmer min-h-[44px]"
                    >
                      {section.cta.label} →
                    </Link>
                  </div>
                )}
              </div>
            ))}

            {/* Still have a question CTA */}
            <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 p-8 text-center">
              <h2 className="font-headline italic text-2xl text-on-surface mb-3">Still have a question?</h2>
              <p className="text-on-surface-variant text-sm mb-6 font-light">
                We're happy to help. Call us, send an email, or drop in.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:bg-primary-container transition-colors min-h-[44px]"
                >
                  Call {CONTACT.phone}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-md font-label font-semibold text-sm tracking-wide hover:bg-primary/10 transition-colors min-h-[44px]"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
