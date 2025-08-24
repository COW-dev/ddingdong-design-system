import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/core';

import { useSelectContext } from './Select.context';

const optionListVariants = cva(
  'mt-1 max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white font-semibold text-gray-400',
  {
    variants: {
      size: {
        md: 'text-sm min-w-24',
        lg: 'text-base md:text-lg',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
);

type Props = {
  children: React.ReactNode;
} & VariantProps<typeof optionListVariants>;

export function OptionList({ children, size }: Props) {
  const { size: contextSize } = useSelectContext();

  return <div className={cn(optionListVariants({ size: size || contextSize }))}>{children}</div>;
}
