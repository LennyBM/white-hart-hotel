interface Props {
  title: string;
  text: string;
  className?: string;
}

export function ShareButton({ title, text, className = '' }: Props) {
  if (typeof navigator === 'undefined' || !navigator.share) return null;

  const share = async () => {
    try {
      await navigator.share({ title, text, url: window.location.href });
    } catch {
      // User cancelled or share failed — silently ignore
    }
  };

  return (
    <button
      onClick={share}
      className={`inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors ${className}`}
      aria-label="Share this page"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      Share
    </button>
  );
}
