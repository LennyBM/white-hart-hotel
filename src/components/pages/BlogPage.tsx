import { SEOHead } from '../ui/SEOHead';

const posts = [
  {
    date: 'April 2026',
    title: 'Spring at The White Hart',
    excerpt: 'As the Devon countryside comes alive with spring colour, we\'re refreshing our bar menu with lighter dishes, local asparagus, and new seasonal ales on tap.',
  },
  {
    date: 'March 2026',
    title: 'Acoustic Sessions — Every First Saturday',
    excerpt: 'Our monthly acoustic sessions continue to grow. This month we welcomed over 60 guests for an evening of folk, fingerpicking, and real ales by the fire.',
  },
  {
    date: 'February 2026',
    title: 'Six Nations at The White Hart',
    excerpt: 'Every match shown live on 15 screens in VINYL. Game-day platters, guest ales, and the best atmosphere in Holsworthy. The Six Nations brought the town together once again.',
  },
];

export function BlogPage() {
  return (
    <>
      <SEOHead page="news" />
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="font-label uppercase tracking-[0.3em] text-primary text-xs mb-4 reveal">What's New</p>
          <h1 className="font-headline italic text-4xl md:text-5xl text-on-surface mb-12 reveal reveal-d1">
            News from The Hart
          </h1>
          <div className="space-y-12">
            {posts.map((post, i) => (
              <article key={i} className={`reveal reveal-d${i + 1} border-b border-outline-variant/20 pb-10 last:border-b-0`}>
                <time className="font-label text-xs uppercase tracking-widest text-primary">{post.date}</time>
                <h2 className="font-headline italic text-2xl text-on-surface mt-2 mb-3">{post.title}</h2>
                <p className="text-on-surface-variant leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
