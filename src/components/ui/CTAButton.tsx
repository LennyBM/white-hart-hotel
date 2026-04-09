import { Link } from 'react-router-dom';

interface CTAButtonProps {
  to?: string;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

export function CTAButton({
  to,
  href,
  variant = 'primary',
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center px-10 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] min-h-[44px]';

  const variants = {
    primary: 'bg-primary text-on-primary btn-shimmer',
    outline: 'bg-[#221E1A]/80 backdrop-blur-sm border border-white/20 text-white hover:bg-[#221E1A] hover:border-white/40',
    ghost: 'text-primary hover:underline underline-offset-8',
  };

  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
