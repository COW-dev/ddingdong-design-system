import { ComponentProps } from 'react';

import { cn } from '@/shared/lib/core';

import { Flex } from '../Flex';
import { Caption1 } from '../Typography';

type TextAreaProps = {
  /**
   * Current value of the textarea
   */
  value: string;
  /**
   * Background color of the textarea
   * @default 'gray'
   */
  variant: 'gray' | 'white';
  /**
   * Default height in number of rows
   * @default 3
   */
  rows?: number;
  /**
   * Whether to show character counter
   * @default false
   */
  showCounter?: boolean;
  /**
   * Custom class name for styling
   */
  className?: string;
} & Omit<ComponentProps<'textarea'>, 'rows'>;

const variantStyle = {
  gray: 'bg-gray-50',
  white: 'bg-white',
} as const;

export function TextArea({
  value,
  variant,
  rows = 3,
  showCounter = false,
  className,
  ...props
}: TextAreaProps) {
  return (
    <Flex dir="col" gap={2}>
      <textarea
        rows={rows}
        className={cn(
          'focus:border-primary-100 w-full resize-none rounded-xl border-none px-4 py-3 text-gray-900 outline-1 outline-gray-200 transition-colors placeholder:text-gray-400 focus:border-1',
          variantStyle[variant],
          className
        )}
        {...props}
      />

      {showCounter && props.maxLength && (
        <Caption1 weight="normal" className="text-right text-gray-500">
          {value.length ?? 0}/{props.maxLength}
        </Caption1>
      )}
    </Flex>
  );
}
