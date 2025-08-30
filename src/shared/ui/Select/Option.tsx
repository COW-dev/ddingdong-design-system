import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/core';

import { useSelectContext } from './Select.context';

const optionVariants = cva(
  'font-semibold text- cursor-pointer first:rounded-t-md last:rounded-b-md hover:bg-gray-50',
  {
    variants: {
      size: {
        md: 'px-3 py-1 text-sm',
        lg: 'px-5 py-2 md:py-2.5',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
);

type Props = {
  /**
   * The display name for the option.
   */
  name: string;
  /**
   * Additional classes to apply to the option.
   */
  className?: string;
} & VariantProps<typeof optionVariants>;

export function Option({ name, size, className }: Props) {
  const { onSelect, size: contextSize } = useSelectContext();

  return (
    <div
      onClick={() => onSelect(name)}
      className={cn(optionVariants({ size: size || contextSize }), className)}
    >
      {name}
    </div>
  );
}
