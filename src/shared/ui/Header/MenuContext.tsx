'use client';

import { createContext, useContext, useId, useState } from 'react';

import { cn } from '@/shared/lib/core';

export type MenuCtx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  triggerId: string;
  contentId: string;
};

const MenuContext = createContext<MenuCtx | null>(null);

export const useMenuCtx = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('error');
  return ctx;
};

type Props = {
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
};

export function MenuContainer({ children, className, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const triggerId = useId();
  const contentId = useId();

  return (
    <MenuContext.Provider value={{ open, setOpen, triggerId, contentId }}>
      <div className={cn('relative', className)}>{children}</div>
    </MenuContext.Provider>
  );
}
