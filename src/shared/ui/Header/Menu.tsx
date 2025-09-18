'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/shared/lib/core';

import { useMenuCtx } from './MenuContext';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Menu({ children, className }: Props) {
  const { open, contentId, triggerId, setOpen } = useMenuCtx();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      const target = e.target as Node;
      if (!ref.current.contains(target)) {
        const triggerElement = document.getElementById(triggerId);
        if (triggerElement && triggerElement.contains(target)) {
          return;
        }
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open, setOpen, triggerId]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      id={contentId}
      role="menu"
      aria-labelledby={triggerId}
      className={cn(
        'ring-opacity-5 absolute right-0 mt-2 w-fit min-w-25 overflow-hidden rounded-lg border border-gray-200 bg-white text-center whitespace-nowrap text-neutral-500 shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
