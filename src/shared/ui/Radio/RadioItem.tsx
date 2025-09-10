import { useContext } from 'react';

import { cn } from '@/shared/lib/core';

import { RadioGroupContext } from './Radio.context';

import { Icon } from '../Icon';

type Props = {
  /**
   * size of the radio button.
   */
  size?: 'md' | 'lg';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export function RadioItem({ value, id, className, disabled, size: propSize, ...props }: Props) {
  const context = useContext(RadioGroupContext);
  if (!context) throw new Error('RadioItem must be used inside a RadioGroup');

  const isChecked = context.value === value;
  const isDisabled = context.disabled || disabled;
  const size = propSize ?? context.size;

  const handleChange = () => {
    if (!isDisabled) context.onChange(value);
  };

  return (
    <label
      htmlFor={id}
      className={cn(
        'flex cursor-pointer',
        size === 'lg' ? 'h-8 w-8' : 'h-6 w-6',
        isDisabled && 'cursor-not-allowed opacity-50'
      )}
    >
      <input
        id={id}
        type="radio"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        className="sr-only"
        {...props}
      />
      <span className={cn(`w-full rounded-full border border-gray-300`, className)}>
        {isChecked && (
          <Icon
            name="check"
            color="primary"
            width={size === 'lg' ? 32 : 24}
            height={size === 'lg' ? 32 : 24}
            className="bg-primary-300 rounded-full"
          />
        )}
      </span>
    </label>
  );
}
