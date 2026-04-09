import { Link } from 'react-router-dom';

interface ImageCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  to?: string;
  ctaLabel?: string;
  badge?: string;
  className?: string;
}

export function ImageCard({ image, imageAlt, title, description, to, ctaLabel, badge, className = '' }: ImageCardProps) {
  const content = (
    <div className={`group relative overflow-hidden rounded-lg bg-surface-container-low transition-all duration-500 hover:-translate-y-1 ${className}`}>
      <div className="relative h-72 overflow-hidden">
        <picture>
          <source srcSet={image} type="image/webp" />
          <img
            src={image.replace('.webp', '.jpg')}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            width={600}
            height={400}
          />
        </picture>
        {badge && (
          <span className="absolute top-4 left-4 bg-primary text-on-primary px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="p-8">
        <h3 className="font-headline text-2xl mb-2 italic">{title}</h3>
        {description && (
          <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
        )}
        {ctaLabel && (
          <span className="mt-4 inline-flex items-center text-primary font-label uppercase tracking-widest text-xs group-hover:underline underline-offset-8">
            {ctaLabel}
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  if (to) {
    return <Link to={to} className="block">{content}</Link>;
  }

  return content;
}
