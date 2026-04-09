interface DeerMotifProps {
  className?: string;
  size?: number;
}

export function DeerMotif({ className = '', size = 300 }: DeerMotifProps) {
  return (
    <svg
      className={`heritage-stamp ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 135"
      aria-hidden="true"
    >
      {/* BODY — wide horizontal oval, properly proportioned */}
      <ellipse cx="66" cy="76" rx="38" ry="19" fill="currentColor" />

      {/* NECK — tapered, angled forward to the left */}
      <path d="M35 62 C32 52 34 44 38 40 C40 38 44 37 48 37 C52 37 56 38 58 40 C62 44 64 52 62 62 Z" fill="currentColor" />

      {/* HEAD — stag faces left */}
      <ellipse cx="38" cy="37" rx="15" ry="13" fill="currentColor" />

      {/* MUZZLE — extends forward to the left */}
      <path d="M24 40 C18 42 16 47 18 52 C20 56 26 57 34 54 L34 40 Z" fill="currentColor" />

      {/* EAR */}
      <path d="M26 30 L18 20 L28 28 Z" fill="currentColor" />

      {/* LEFT ANTLER — thick main beam with 2 tines */}
      <path d="M36 26 L28 12 L22 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M30 18 L20 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M26 10 L20 4" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M26 10 L30 3" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* RIGHT ANTLER — mirrored */}
      <path d="M50 26 L58 12 L64 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M56 18 L66 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M60 10 L66 4" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M60 10 L56 3" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* LEGS — four distinct, well-spaced */}
      {/* Front pair */}
      <rect x="32" y="92" width="8" height="37" rx="4" fill="currentColor" />
      <rect x="44" y="92" width="8" height="37" rx="4" fill="currentColor" />
      {/* Back pair */}
      <rect x="78" y="92" width="8" height="37" rx="4" fill="currentColor" />
      <rect x="90" y="92" width="8" height="37" rx="4" fill="currentColor" />

      {/* TAIL */}
      <ellipse cx="103" cy="70" rx="5" ry="7" fill="currentColor" />
    </svg>
  );
}
