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
  id: string;
  name: string;
} & VariantProps<typeof optionVariants>;

export function Option({ id, name, size }: Props) {
  const { onSelect, size: contextSize } = useSelectContext() as {
    onSelect: (arg: { id: string; name: string }) => void;
    size: 'md' | 'lg';
  };

  return (
    <div
      onClick={() => onSelect({ id, name })}
      className={cn(optionVariants({ size: size || contextSize }))}
    >
      {name}
    </div>
  );
}
