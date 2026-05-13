import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../ui/SEOHead';
import { FlourishDivider } from '../ui/FlourishDivider';
import { SchemaOrg } from '../ui/SchemaOrg';
import { CONTACT } from '../../constants/contact';

interface BlogPost {
  slug: string;
  date: string;
  isoDate: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: '10-best-walks-near-holsworthy-devon',
    date: 'April 2026',
    isoDate: '2026-04-01',
    category: 'Local Area Guides',
    title: '10 Best Walks Near Holsworthy, Devon',
    excerpt: 'Holsworthy sits at the centre of one of the most underwalked corners of England — rolling Devon farmland, deep river valleys, Dartmoor to the east, and the North Cornwall coast just 20 minutes west. Here are ten walks we\'d recommend to guests staying at the White Hart.',
    content: (
      <div className="space-y-6 text-on-surface-variant leading-relaxed text-sm md:text-base font-light">
        <p>Holsworthy sits at the centre of one of the most underwalked corners of England. Not because there's nothing to walk — quite the opposite. The countryside around here is genuinely spectacular: rolling Devon farmland, the deep-cut valleys of the Rivers Tamar and Torridge, the open expanse of Dartmoor to the east, and the dramatic coastal paths of North Cornwall just 20 minutes west.</p>
        <p>The reason people don't know about it is the same reason we love it: it hasn't been discovered yet. You can walk for three hours on a Sunday in August and not see another soul.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">1. Holsworthy Town Loop (2 miles | Easy | 45 min)</h3>
        <p>Start and finish at <Link to="/rooms" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">the White Hart</Link>. The loop takes you through the churchyard of St Peter and St Paul — one of Devon's finest churches — down along Deer Park Lane, and back through the old market area. A perfect leg-stretcher before <Link to="/dining" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">Sunday lunch</Link>.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">2. Tamar Valley — Boyton (4 miles | Moderate | 2 hours)</h3>
        <p>The River Tamar marks the Devon–Cornwall border. This section follows the river through ancient woodland and open fields. Kingfishers if you're lucky; otter spraint on the rocks if you know what to look for. 8 miles from Holsworthy.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">3. Dunsland Cross Circular (5 miles | Easy | 2.5 hours)</h3>
        <p>Gently rolling farmland with long views toward Dartmoor. Quiet lanes and green lanes through a landscape that feels unchanged from the 1950s. Very few walkers — very good for the mind.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">4. Roadford Lake (4–8 miles | Easy | Families)</h3>
        <p>Devon's largest inland lake. The path around the lake is easy, traffic-free, and completely family-friendly. Great crested grebes breed here; regular osprey sightings during migration. Car park, toilets, café on site.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">5. Tarka Trail — Meeth Section (6 miles | Easy | 2.5 hours)</h3>
        <p>The surfaced section from Meeth follows the disused Torrington–Halwill railway line through deep woodland cuttings and over valley viaducts. Flat, car-free, and worth it for the viaducts alone.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">6–7. Okehampton and Dartmoor Edge</h3>
        <p>Okehampton sits on Dartmoor's northern edge, 15 miles east. The walk south past the castle ruins and up onto the open moor is where things start getting serious. Bring a map, compass, and waterproofs — Dartmoor is not forgiving to the unprepared.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">8. Lydford Gorge (2 miles | National Trust)</h3>
        <p>One of Devon's most dramatic landscapes — a deep, steep-sided gorge with the 30-metre White Lady Fall at its southern end. The path narrows to single file above the river. NT admission applies.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">9. Bude Canal and Coast Path (4–8 miles)</h3>
        <p>Bude is 17 miles west. The canal walk east from town is flat and family-friendly; the coast path south to Widemouth Bay is more dramatic. Combine both for a brilliant 7-mile circular.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">10. Crackington Haven Coast Path (5 miles | Challenging)</h3>
        <p>Save this one for a good day. Cliffs over 400 feet, extraordinary rock formations, views stretching to Hartland Point and Tintagel. The South West Coast Path here is among the most spectacular walking in England. 23 miles from Holsworthy.</p>

        <p className="mt-4 text-xs italic">We keep a selection of walking maps behind the bar — just ask. And when you're done, our <Link to="/dining" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">Sunday Carvery</Link> is waiting.</p>
      </div>
    ),
  },
  {
    slug: 'day-trip-holsworthy-to-bude',
    date: 'March 2026',
    isoDate: '2026-03-01',
    category: 'Local Area Guides',
    title: 'A Day Trip from Holsworthy to Bude — Everything You Need to Know',
    excerpt: 'Bude is just 17 miles west of the White Hart — less than half an hour by car. It offers everything you\'d want from a North Cornwall coast town: a long sandy beach, real Atlantic surf, a charming town centre, and an extraordinary tidal sea pool. Here\'s everything you need for a brilliant day.',
    content: (
      <div className="space-y-6 text-on-surface-variant leading-relaxed text-sm md:text-base font-light">
        <p>If you're <Link to="/rooms" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">staying at the White Hart Hotel</Link>, Bude is the obvious first-day destination. It's just 17 miles west — less than half an hour by car — and it offers everything you'd want from a North Cornwall coast town: a long sandy beach, good surf, a charming town centre, and an extraordinary tidal swimming pool.</p>
        <p>It's also far enough from the tourist honeypots of Padstow and Newquay that it hasn't been ruined. Bude is busy in summer, but busy in a friendly, family way.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">Getting There</h3>
        <p>By car: 17 miles, approximately 25 minutes via the A3072 and A39. Take the A3072 west from Holsworthy through Bridgerule, pick up the A3072 to Stratton, and follow signs into Bude. Arrive early in peak season — Bude's car parks fill fast in July and August.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">The Beaches</h3>
        <p><strong className="text-on-surface">Summerleaze Beach</strong> is the town beach — broad, sandy, with good facilities and the extraordinary <strong className="text-on-surface">tidal sea pool</strong> cut into the rocks at the southern end. It fills and empties with the tide, always clean, always cold. One of the best outdoor swimming spots in England.</p>
        <p><strong className="text-on-surface">Crooklets Beach</strong> is five minutes north — bigger surf, more serious waves. Better for surfers and those wanting to get in the water properly.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">Surfing</h3>
        <p>Bude is a genuine surf town. The waves are real Atlantic swell. Several surf schools operate from the beaches — for beginners, book a lesson rather than hiring a board; the currents can be strong and rip tides are real.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">The Town</h3>
        <p>The canal is a complete surprise — a narrow waterway east of the town through water meadows, completely at odds with the wild coast half a mile away. <strong className="text-on-surface">Bude Castle</strong> (a Regency villa, now a free heritage centre) is worth an hour. Independent shops are better than you'd expect.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">When to Go</h3>
        <p><strong className="text-on-surface">Best:</strong> Late May, June, September — good weather without peak crowds. <strong className="text-on-surface">Underrated:</strong> October, when the surf improves, beaches empty, and the light is extraordinary. <strong className="text-on-surface">Avoid:</strong> peak August school holidays unless you enjoy car park queues.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">Also Worth Seeing</h3>
        <p><strong className="text-on-surface">Widemouth Bay</strong> (3 miles south of Bude) is often less busy with equally good surf and better parking. A top recommendation when Bude feels crowded.</p>
      </div>
    ),
  },
  {
    slug: 'exploring-dartmoor-from-holsworthy',
    date: 'February 2026',
    isoDate: '2026-02-01',
    category: 'Local Area Guides',
    title: 'Exploring Dartmoor from Holsworthy — A Practical Guide',
    excerpt: 'Dartmoor is thirty minutes from the White Hart Hotel. Drive east and within half an hour you\'re standing on open moorland with views stretching fifteen miles. Here\'s everything you need for a brilliant day on the moor — walks for all abilities, wildlife to watch for, and what to bring.',
    content: (
      <div className="space-y-6 text-on-surface-variant leading-relaxed text-sm md:text-base font-light">
        <p>Dartmoor is thirty minutes from the White Hart Hotel. That's probably not what most people expect — Holsworthy is in the north, near Cornwall — but it's true. Drive east and within half an hour you're standing on open moorland with views that stretch for fifteen miles.</p>
        <p>This is one of the great hidden advantages of staying in Holsworthy. You can do the coast in one direction and the moor in the other, on the same weekend, without a long drive either way.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">Getting There</h3>
        <p>Okehampton is the gateway — 15 miles east, about 25 minutes via the A3072 and A30. From Okehampton you access the northern moor directly. Most serious walkers drive the 3 extra miles to <strong className="text-on-surface">Belstone village</strong> — it gets you onto open moorland faster.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">For Families: Belstone Common (3–4 miles | 2 hours)</h3>
        <p>Park free in Belstone village and take the track south. Within 15 minutes you're on open moorland. The loop around Belstone Common follows the Taw River valley and passes <strong className="text-on-surface">the Nine Stones</strong> — a Bronze Age stone circle, quieter and more atmospheric than the famous southern circles.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">The Full Day: Yes Tor and High Willhays (8–10 miles | Challenging)</h3>
        <p>The highest ground in southern England — High Willhays at 621 metres. Start from Meldon Reservoir (paid car park, 3 miles west of Okehampton). Allow 2.5 hours to the summit. Bring a proper OS map and compass — phone signal is unreliable on the high moor and the weather changes fast.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">Lydford — Worth a Detour</h3>
        <p>Just 14 miles from Holsworthy. <strong className="text-on-surface">Lydford Gorge</strong> (National Trust) is the most dramatic landscape within easy reach — a deep, narrow gorge with a 30-metre waterfall. Allow 2–3 hours for the full circuit. The Dartmoor Inn at Lydford is a reliably good lunch option.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">Wildlife to Watch For</h3>
        <p>Free-roaming <strong className="text-on-surface">Dartmoor ponies</strong> (don't feed them), <strong className="text-on-surface">red grouse</strong> calling from the heather, <strong className="text-on-surface">ravens</strong> circling the tors, and everywhere, <strong className="text-on-surface">buzzards</strong>. Look down too — the blanket bog supports sundew, a carnivorous plant.</p>

        <h3 className="font-headline italic text-xl text-on-surface mt-6">What to Bring</h3>
        <p>Waterproofs (even in summer), proper walking boots, OS map OL28 downloaded offline before you go, compass, water, food, and layers. It can be 10°C colder on the high moor than in Holsworthy.</p>

        <p className="mt-4 text-xs italic">After a proper day on the moor, come back to the White Hart for <Link to="/dining" className="text-primary underline underline-offset-2 hover:text-primary-container transition-colors">dinner</Link>. Our Devon beef comes from not far from where you've been walking.</p>
      </div>
    ),
  },
];

export function BlogPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const blogPostingSchemas = posts.map((post) => ({
    '@type': 'BlogPosting' as const,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      '@type': 'Organization' as const,
      name: CONTACT.name,
      url: CONTACT.siteUrl,
    },
    publisher: {
      '@type': 'Organization' as const,
      name: CONTACT.name,
      url: CONTACT.siteUrl,
    },
    url: `${CONTACT.siteUrl}/news#${post.slug}`,
    mainEntityOfPage: `${CONTACT.siteUrl}/news#${post.slug}`,
    keywords: post.category,
    articleSection: post.category,
  }));

  return (
    <>
      <SEOHead page="news" breadcrumbs={[{ name: 'News', url: `${CONTACT.siteUrl}/news` }]} />
      <SchemaOrg type="blogPostings" blogPostings={blogPostingSchemas} />

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
              Seasonal menus, upcoming events, and guides to exploring North Devon and Cornwall from Holsworthy&rsquo;s oldest coaching inn.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blush paper-texture relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                id={post.slug}
                className={`reveal reveal-d${i + 1} bg-surface rounded-xl border border-[#9E7C3C]/15 hover:border-[#9E7C3C]/30 transition-colors shadow-sm overflow-hidden`}
              >
                <div className="p-7 md:p-10">
                  <div className="flex items-center gap-4 mb-3">
                    <time
                      dateTime={post.isoDate}
                      className="font-label text-[10px] uppercase tracking-[0.25em] text-primary font-semibold"
                    >
                      {post.date}
                    </time>
                    <span className="text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-light mb-4">
                    {post.excerpt}
                  </p>
                  <button
                    onClick={() => setExpanded(expanded === post.slug ? null : post.slug)}
                    className="text-primary text-sm font-semibold underline underline-offset-4 hover:text-primary-container transition-colors"
                    aria-expanded={expanded === post.slug}
                  >
                    {expanded === post.slug ? 'Read less ↑' : 'Read more ↓'}
                  </button>
                </div>
                {expanded === post.slug && (
                  <div className="px-7 md:px-10 pb-10 border-t border-[#9E7C3C]/10 pt-6">
                    {post.content}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
