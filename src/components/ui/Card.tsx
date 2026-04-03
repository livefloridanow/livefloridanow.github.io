import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow',
        className
      )}
      style={{ borderRadius: 'var(--radius-lg)' }}
    >
      {children}
    </div>
  );
}
