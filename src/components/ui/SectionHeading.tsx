interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ label, title, subtitle, center = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${center ? 'text-center' : ''} ${className}`}>
      {label && (
        <p className="font-label uppercase tracking-[0.3em] text-primary text-xs font-medium">
          {label}
        </p>
      )}
      <h2 className="font-headline italic text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
