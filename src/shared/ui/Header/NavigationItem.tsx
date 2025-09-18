'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/core';

import { Caption1 } from '../Typography';

export type Props = {
  href?: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  children: ReactNode;
};

export function NavigationItem({ href, onClick, active, className, children }: Props) {
  return (
    <Caption1
      as="a"
      {...(href ? { href } : { type: 'button', onClick })}
      className={cn(
        'hover:text-primary-300 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap text-neutral-400 transition-colors duration-200',
        active && 'text-primary-500',
        className
      )}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </Caption1>
  );
}
