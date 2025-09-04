import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/core';
import { Icon } from '@/shared/ui/Icon/Icon';

type Props = {
  /**
   * additional className.
   */
  className?: string;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export function Checkbox({ className, ...props }: Props) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        `peer data-[state=checked]:bg-primary-300 flex h-6 w-6 items-center rounded-sm border-gray-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:border-[1.5px]`,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Icon name="check" color="primary" width={24} height={24} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
