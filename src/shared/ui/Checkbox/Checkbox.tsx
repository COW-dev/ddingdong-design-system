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
        `peer flex h-6 w-6 items-center rounded-sm border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:border-[1.5px] data-[state=checked]:bg-primary-300`,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Icon name="check" width={24} height={24} className="text-primary-300" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
