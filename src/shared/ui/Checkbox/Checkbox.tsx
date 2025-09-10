import * as React from 'react';

import { cn } from '@/shared/lib/core';
import { Icon } from '@/shared/ui/Icon/Icon';

type Props = {
  /**
   * additional className.
   */
  className?: string;
  /**
   * checked state of the checkbox.
   */
  checked?: boolean;
  /**
   * default checked state of the checkbox.
   */
  defaultChecked?: boolean;
  /**
   * disabled state of the checkbox.
   */
  disabled?: boolean;
  /**
   * callback function when checked state is changed.
   */
  onCheckedChange?: (checked: boolean) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked' | 'defaultChecked'>;

export function Checkbox({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  ...props
}: Props) {
  const [internalChecked, setInternalChecked] = React.useState<boolean>(defaultChecked ?? false);

  const isControlled = checked !== undefined;
  const value = isControlled ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const next = e.target.checked;
    if (!isControlled) {
      setInternalChecked(next);
    }
    onCheckedChange?.(next);
  };

  return (
    <label
      className={cn(
        'flex h-6 w-6 rounded-sm',
        value ? 'bg-primary-300' : 'border-[1.5px] border-gray-300',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <input
        type="checkbox"
        onChange={handleChange}
        checked={value}
        disabled={disabled}
        className="sr-only"
        {...props}
      />
      {value && <Icon name="check" color="primary" width={24} height={24} />}
    </label>
  );
}
