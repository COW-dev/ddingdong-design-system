import { cn } from '@/shared/lib/core';

import { Flex } from '../Flex';
import { Icon } from '../Icon';

type Props = {
  /**
   * The currently selected option.
   */
  selected: string;
  /**
   * Callback function to be called when the button is clicked.
   * @returns void
   */
  onClick: () => void;
  /**
   * Whether the dropdown is open or closed.
   */
  isOpen: boolean;
  /**
   * The size of the button.
   */
  size?: 'md' | 'lg';
};

const sizeVariants = {
  md: 'px-3 py-1 text-sm min-w-24',
  lg: 'px-4 py-3.5 min-w-64 text-lg',
} as const;

export function SelectButton({ selected, onClick, isOpen, size = 'lg' }: Props) {
  return (
    <Flex
      alignItems="center"
      onClick={onClick}
      className={cn(
        sizeVariants[size],
        'w-full rounded-lg border border-gray-200 bg-white font-semibold text-gray-400'
      )}
    >
      <Flex
        as="button"
        alignItems="center"
        justifyContent="between"
        className={cn(
          'w-full cursor-pointer rounded-lg align-middle',
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
      </Flex>
    </Flex>
  );
}
