import { useState } from 'react';
import { trackFormSubmission } from './Analytics';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
      if (res.ok) { setStatus('success'); trackFormSubmission('newsletter'); setEmail(''); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section className="py-16 bg-surface-container border-y border-outline-variant/10">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <h3 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-3 reveal">
          Stay in the Know
        </h3>
        <p className="text-on-surface-variant mb-8 reveal reveal-d1">
          Be the first to hear about events, seasonal menus, and exclusive offers from The White Hart.
        </p>
        {status === 'success' ? (
          <p className="text-primary font-label uppercase tracking-widest text-sm">Thank you — you're on the list!</p>
        ) : (
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto reveal reveal-d2"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="ghost-input flex-1 px-4 py-3 text-on-surface placeholder:text-outline font-body text-sm rounded-md"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary px-8 py-3 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform min-h-[44px] shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-error text-sm mt-3">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
