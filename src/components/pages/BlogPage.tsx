import { SEOHead } from '../ui/SEOHead';
import { FlourishDivider } from '../ui/FlourishDivider';

const posts = [
  {
    date: 'April 2026',
    title: 'Spring at The White Hart',
    excerpt:
      "As the Devon countryside comes alive with spring colour, we're refreshing our bar menu with lighter dishes, local asparagus, and new seasonal ales on tap.",
  },
  {
    date: 'March 2026',
    title: 'Acoustic Sessions — Every First Saturday',
    excerpt:
      'Our monthly acoustic sessions continue to grow. This month we welcomed over 60 guests for an evening of folk, fingerpicking, and real ales by the fire.',
  },
  {
    date: 'February 2026',
    title: 'Six Nations at The White Hart',
    excerpt:
      'Every match shown live in the bar. Game-day platters, guest ales, and the best atmosphere in Holsworthy. The Six Nations brought the town together once again.',
  },
];

export function BlogPage() {
  return (
    <>
      <SEOHead page="news" />

      {/* Hero — dark band with flourish */}
      <section className="band-dark-mesh relative overflow-hidden py-20 md:py-28 top-accent">
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FlourishDivider label="What's New" variant="light" className="mb-6" />
            <h1
              className="font-headline italic text-white leading-[1.05] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)' }}
            >
              News from The Hart
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-5 max-w-xl mx-auto font-light leading-relaxed">
              Seasonal menus, upcoming events, and stories from Holsworthy&rsquo;s oldest coaching inn.
            </p>
          </div>
        </div>
      </section>

      {/* Posts — blush background with paper texture */}
      <section className="bg-blush paper-texture relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto space-y-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className={`reveal reveal-d${i + 1} bg-surface rounded-xl p-7 md:p-10 border border-[#9E7C3C]/15 hover:border-[#9E7C3C]/30 transition-colors shadow-sm`}
              >
                <time className="font-label text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
                  {post.date}
                </time>
                <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mt-2 mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-light">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
