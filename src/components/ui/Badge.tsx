import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-surface text-foreground',
    accent: 'bg-accent/20 text-foreground',
    success: 'bg-green-50 text-green-700',
  };

  return (
    <span
      className={cn(
        'type-label inline-block',
        variants[variant],
        className
      )}
      style={{
        padding: '4px 12px',
        borderRadius: 'var(--radius-full)',
      }}
    >
      {children}
    </span>
  );
}
