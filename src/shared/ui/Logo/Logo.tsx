'use client';

import { cn } from '@/shared/lib/core';

export type Props = {
  /**
   * The text content to display next to the logo.
   */
  children?: React.ReactNode;
  /**
   * The URL to navigate to when the logo is clicked.
   * @default '/'
   */
  href?: string;
  /**
   * Additional CSS classes to apply to the logo container.
   */
  className?: string;
  /**
   * The color variant of the logo.
   * @default 'black'
   */
  color?: 'white' | 'black';
  /**
   * The size of the logo in pixels.
   * @default 40
   */
  size?: number;
};

export function Logo({ children, href = '/', className, color = 'black', size = 40 }: Props) {
  const logoSrc =
    color === 'white'
      ? '/src/shared/ui/assets/images/logo_white.png'
      : '/src/shared/ui/assets/images/logo_black.png';

  return (
    <a href={href} className={cn('inline-flex items-center', className)} aria-label="홈으로 이동">
      <img src={logoSrc} alt="ddingdong Logo" width={size} height={size} />
      {children && <span className="ml-2 text-lg font-semibold">{children}</span>}
    </a>
  );
}
