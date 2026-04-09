/**
 * Editorial ornamental divider — hairline + diamond + hairline.
 * Used to frame section openers and give pages visual texture
 * without relying on photography.
 */
interface FlourishDividerProps {
  className?: string;
  label?: string;
  variant?: 'default' | 'light' | 'dark';
}

export function FlourishDivider({ className = '', label, variant = 'default' }: FlourishDividerProps) {
  const lineColor =
    variant === 'light'
      ? 'rgba(255, 255, 255, 0.4)'
      : variant === 'dark'
      ? 'rgba(34, 30, 26, 0.35)'
      : '#9E7C3C';
  const diamondColor =
    variant === 'light'
      ? '#e6c487'
      : variant === 'dark'
      ? '#9E7C3C'
      : '#9E7C3C';
  const labelColor = variant === 'light' ? '#e6c487' : '#9E7C3C';

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden={!label}>
      <div
        className="flex-1 max-w-[80px] md:max-w-[140px] h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${lineColor}, ${lineColor})` }}
      />
      {label ? (
        <span
          className="font-label uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-semibold whitespace-nowrap"
          style={{ color: labelColor }}
        >
          {label}
        </span>
      ) : (
        <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill={diamondColor}>
          <path d="M6 0l6 6-6 6-6-6z" />
        </svg>
      )}
      {label && (
        <svg className="w-2.5 h-2.5 shrink-0" viewBox="0 0 12 12" fill={diamondColor}>
          <path d="M6 0l6 6-6 6-6-6z" />
        </svg>
      )}
      <div
        className="flex-1 max-w-[80px] md:max-w-[140px] h-px"
        style={{ background: `linear-gradient(90deg, ${lineColor}, ${lineColor}, transparent)` }}
      />
    </div>
  );
}
