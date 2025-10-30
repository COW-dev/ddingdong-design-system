'use client';

import { useMenuCtx } from './useMenuCtx';

import { cn } from '../../lib/core';

type Props = {
  className?: string;
  children?: React.ReactNode;
  'aria-label'?: string;
};

export function MenuTrigger({ children, className, 'aria-label': ariaLabel = 'open-menu' }: Props) {
  const { open, setOpen, triggerId, contentId } = useMenuCtx();

  return (
    <button
      id={triggerId}
      aria-haspopup="menu"
      aria-expanded={open ? 'true' : 'false'}
      aria-controls={contentId}
      onClick={() => {
        setOpen(!open);
      }}
      className={cn(
        'hover:text-primary-300 inline-flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-base font-semibold whitespace-nowrap text-neutral-500 transition-colors duration-200',
        className
      )}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
}
