'use client';

import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full border px-7 py-3 text-sm font-semibold transition duration-300 ease-soft',
        variant === 'primary'
          ? 'bg-sand text-ink border-transparent shadow-soft hover:-translate-y-0.5 hover:shadow-lifted'
          : 'bg-transparent text-surface border border-white/10 hover:bg-white/5',
        className
      )}
      {...props}
    />
  );
}
