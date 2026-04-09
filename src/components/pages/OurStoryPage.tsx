import { SEOHead } from '../ui/SEOHead';
import { DeerMotif } from '../ui/DeerMotif';
import { CTAButton } from '../ui/CTAButton';
import { CONTACT } from '../../constants/contact';
import { timeline } from '../../data/historyTimeline';

export function OurStoryPage() {
  return (
    <>
      <SEOHead page="ourStory" />

      {/* Hero */}
      <section className="relative bg-surface py-28 md:py-40 overflow-hidden">
        <DeerMotif
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-outline-variant/5 pointer-events-none"
          size={500}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center reveal-up">
          <p className="font-label uppercase tracking-[0.3em] text-primary text-xs font-medium mb-6">
            Since 1591
          </p>
          <h1 className="font-headline italic text-5xl md:text-6xl lg:text-7xl text-on-surface leading-[1.1] mb-6">
            Our Story
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Four centuries of Devon hospitality — from a manor house beside
            the church to a family-run coaching inn at the heart of Holsworthy.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface-container-low py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Centre line (desktop only) */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-20 lg:space-y-28">
              {timeline.map((entry, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={entry.year}
                    className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isLeft ? 'reveal-left' : 'reveal-right'}`}
                  >
                    {/* Year badge - centre on desktop */}
                    <div
                      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20 w-20 h-20 rounded-full bg-primary text-on-primary luminous-border items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="font-label text-xs font-bold tracking-wider leading-tight text-center">
                        {entry.year}
                      </span>
                    </div>

                    {/* Mobile year badge */}
                    <div className="lg:hidden flex items-center gap-4 mb-2">
                      <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                        <span className="font-label text-[10px] font-bold tracking-wider leading-tight text-center">
                          {entry.year}
                        </span>
                      </div>
                      <h3 className="font-headline italic text-2xl text-on-surface">
                        {entry.title}
                      </h3>
                    </div>

                    {/* Content card - alternating sides */}
                    <div
                      className={`glass-card glass-card-hover rounded-lg p-6 ${isLeft ? 'lg:pr-20 lg:text-right lg:order-1' : 'lg:pl-20 lg:col-start-2 lg:order-2'}`}
                    >
                      <h3 className="hidden lg:block font-headline italic text-3xl text-on-surface mb-4">
                        {entry.title}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">
                        {entry.description}
                      </p>
                    </div>

                    {/* Image */}
                    {entry.image ? (
                      <div
                        className={`${isLeft ? 'lg:pl-20 lg:order-2' : 'lg:pr-20 lg:order-1'}`}
                      >
                        <div className="overflow-hidden rounded-lg">
                          <picture>
                            <source srcSet={entry.image} type="image/webp" />
                            <img
                              src={entry.image.replace('.webp', '.jpg')}
                              alt={entry.imageAlt || entry.title}
                              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
                              loading="lazy"
                              width={600}
                              height={400}
                            />
                          </picture>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`hidden lg:block ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative bg-surface py-24 md:py-32 overflow-hidden mesh-warm">
        <DeerMotif
          className="absolute left-[-80px] bottom-[-40px] text-outline-variant/5 pointer-events-none"
          size={400}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center max-w-3xl reveal-up">
          <p className="font-label uppercase tracking-[0.3em] text-primary text-xs font-medium mb-6">
            Looking Forward
          </p>
          <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface mb-6">
            The Story Continues &mdash; With You
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed font-light mb-10">
            From Tudor origins to VINYL nights, The White Hart is still the
            beating heart of Holsworthy. We are proud to carry on the tradition
            of warm Devon hospitality — and we hope to welcome you through our
            doors very soon.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <CTAButton to="/rooms" variant="primary">
              Book Your Stay
            </CTAButton>
            <CTAButton to="/contact" variant="outline">
              Reserve a Table
            </CTAButton>
          </div>
          <p className="text-on-surface-variant text-sm">
            Or call us on{' '}
            <a
              href={CONTACT.phoneHref}
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              {CONTACT.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
