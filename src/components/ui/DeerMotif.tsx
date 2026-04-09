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
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Simplified sitting/lodged deer silhouette */}
      <path d="M65 15c-1-3-4-5-6-3-1 1 0 3 1 5l3 5c-2 0-4 1-5 3l-2 4c-1-2-3-3-5-3-3 0-5 2-6 5l-1 4c-2-1-4-1-6 0-3 2-4 5-3 8l1 3c-3 1-5 3-6 6l-1 5c0 3 1 5 3 7l4 3-2 4c-1 3 0 6 2 8l5 3h8l6-2 5-4 3-5 1-6-1-5-3-5-4-3 2-4c1-2 1-5-1-7l-2-3 3-2c2-2 3-4 3-7l-1-5-2-4zm-20 55c-2 0-3-1-4-2-1-2 0-4 1-5l3-2 3 4-1 3c-1 1-2 2-2 2zm15-5c0 2-1 3-2 4l-3 2-3-1-2-3 1-4 3-3 3 1 2 2 1 2zm-5-20c2 0 3 1 4 3l1 3-2 3-3 1-3-1-2-3 1-3c1-2 2-3 4-3z" />
    </svg>
  );
}
