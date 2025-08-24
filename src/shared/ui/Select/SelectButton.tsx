import { cn } from '@/shared/lib/core';

import { Icon } from '../Icon';

type Props = {
  selected: string;
  onClick: () => void;
  isOpen: boolean;
  size?: 'md' | 'lg';
};

export function SelectButton({ selected, onClick, isOpen, size = 'lg' }: Props) {
  const sizeVariants = {
    md: 'px-3 py-1 text-sm w-fit min-w-24',
    lg: 'px-5 py-1.5 md:py-2.5 min-w-64 md:w-72 text-base md:text-lg',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        sizeVariants[size],
        'flex cursor-pointer items-center rounded-lg border border-gray-200 bg-white text-start font-semibold text-gray-400'
      )}
    >
      <button
        className={cn(
          'flex w-full items-center justify-between rounded-lg align-middle hover:rounded-lg',
          isOpen && 'hover:rounded-b-none'
        )}
      >
        {selected}
        <Icon
          name="arrowDown"
          className={cn(
            'transform transition-transform duration-300',
            isOpen && 'rotate-180',
            size === 'md' && 'w-5'
          )}
        />
      </button>
    </div>
  );
}
