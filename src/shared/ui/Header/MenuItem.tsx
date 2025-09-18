'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/core';

import { useMenuCtx } from './MenuContext';

import { IconName } from '../assets';
import { Icon } from '../Icon/Icon';
import { Caption1 } from '../Typography';

export type Props = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: IconName;
  className?: string;
  disabled?: boolean;
};

export function MenuItem({ children, onClick, href, icon, className, disabled }: Props) {
  const { setOpen } = useMenuCtx();
  const common = cn(
    'flex w-full items-center gap-3 whitespace-nowrap px-4 py-2 text-gray-400 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-500',
    disabled && 'pointer-events-none opacity-50',
    className
  );

  if (href) {
    return (
      <Caption1
        as="a"
        href={href}
        className={common}
        role="menuitem"
        onClick={() => setOpen(false)}
      >
        {icon && <Icon name={icon} size={16} />}
        {children}
      </Caption1>
    );
  }

  const handle = () => {
    if (disabled) return;
    onClick?.();
    setOpen(false);
  };

  return (
    <Caption1 className={common} role="menuitem" onClick={handle}>
      {icon && <Icon name={icon} size={16} />}
      {children}
    </Caption1>
  );
}
