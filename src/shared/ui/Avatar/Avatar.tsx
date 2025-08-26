import { ComponentProps } from 'react';

import { cn } from '@/shared/lib/core';

type AvatarProps = {
  /**
   * Size of the avatar.
   * @default 'lg'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * URL of the avatar image.
   */
  src: string;
  /**
   * Alternative text for the avatar image.
   */
  alt: string;
  /**
   * Width of the avatar image.
   */
  width: number;
  /**
   * Height of the avatar image.
   */
  height: number;
  /**
   * CSS class name for the avatar container.
   */
  className?: string;
} & Omit<ComponentProps<'img'>, 'src' | 'alt' | 'width' | 'height'>;

const avatarSizeMap = {
  sm: 'size-14',
  md: 'size-16',
  lg: 'md:size-18 size-14',
  xl: 'md:size-20 size-14',
} as const;

export function Avatar({ size = 'lg', src, alt, width, height, className, ...props }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={cn(
        'rounded-full border border-gray-200 object-cover',
        avatarSizeMap[size],
        className
      )}
      {...props}
    />
  );
}
