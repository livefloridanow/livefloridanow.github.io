import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

/*
  Size variants (btn-sm, btn-md, btn-lg):
    sm  → 12px font / padding 0.5rem 1.25rem  (nav bars, compact UI)
    md  → 12px font / padding 0.875rem 2rem   (default)
    lg  → 12px font / padding 1rem 2.5rem     (hero CTAs, large sections)
*/

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  style: styleProp,
  type = 'button',
  onClick,
}: ButtonProps) {
  const base =
    'type-label inline-flex items-center justify-center transition-colors cursor-pointer';
  const variants = {
    primary: 'btn-shimmer bg-accent text-white hover:bg-accent-dark',
    secondary: 'bg-dark text-white hover:bg-dark-hover',
    outline:
      'border-2 border-foreground/30 text-foreground hover:bg-foreground hover:text-white',
  };
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '0.5rem 1.25rem' },
    md: { padding: '0.875rem 2rem' },
    lg: { padding: '1rem 2.5rem' },
  };

  const classes = cn(base, variants[variant], className);

  const mergedStyle: React.CSSProperties = {
    borderRadius: 'var(--radius-sm)',
    fontWeight: 'var(--weight-medium)',
    ...sizeStyles[size],
    ...styleProp,
  };

  if (href) {
    return (
      <Link href={href} className={classes} style={mergedStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={mergedStyle}>
      {children}
    </button>
  );
}
