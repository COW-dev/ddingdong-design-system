'use client';

import { cn } from '@/shared/lib/core';

import { useMenuCtx } from './MenuContext';

type Props = {
  children?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
};

export function MenuTrigger({ children, className, 'aria-label': ariaLabel = '메뉴 열기' }: Props) {
  const { open, setOpen, triggerId, contentId } = useMenuCtx();
  return (
    <button
      id={triggerId}
      aria-haspopup="menu"
      aria-expanded={open}
      aria-controls={contentId}
      onClick={() => setOpen(!open)}
      className={cn(
        'hover:text-primary-300 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap text-neutral-400 transition-colors duration-200',
        className
      )}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
}
