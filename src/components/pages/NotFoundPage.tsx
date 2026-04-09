import { SEOHead } from '../ui/SEOHead';
import { CTAButton } from '../ui/CTAButton';
import { DeerMotif } from '../ui/DeerMotif';

export function NotFoundPage() {
  return (
    <>
      <SEOHead page="notFound" />

      <section className="relative bg-surface min-h-[80vh] flex items-center justify-center overflow-hidden">
        <DeerMotif
          className="absolute right-[-40px] bottom-[-40px] text-outline-variant/5 pointer-events-none"
          size={450}
        />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center py-24 reveal-up">
          <p className="font-headline italic text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none text-outline-variant/20 select-none">
            404
          </p>

          <h1 className="font-headline italic text-4xl md:text-5xl text-on-surface -mt-8 md:-mt-12 mb-6">
            Page Not Found
          </h1>

          <p className="text-on-surface-variant text-lg max-w-md mx-auto leading-relaxed font-light mb-10">
            The path you seek may have wandered off into the Devon countryside.
            Let us guide you back.
          </p>

          <CTAButton to="/">Return Home</CTAButton>
        </div>
      </section>
    </>
  );
}
