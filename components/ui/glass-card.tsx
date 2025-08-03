import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong';
}

export function GlassCard({ children, className, variant = 'default' }: GlassCardProps) {
  const variants = {
    default: 'bg-white/10 backdrop-blur-md border border-white/20',
    subtle: 'bg-white/5 backdrop-blur-sm border border-white/10',
    strong: 'bg-white/20 backdrop-blur-lg border border-white/30'
  };

  return (
    <div className={cn(
      'rounded-xl shadow-lg',
      variants[variant],
      'dark:bg-black/10 dark:border-white/10',
      className
    )}>
      {children}
    </div>
  );
}