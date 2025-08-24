import { ComponentProps } from 'react';

import { Flex } from '../Flex';
import { IconButton } from '../IconButton';

type InputProps = {
  /**
   * Callback function when the reset button is clicked.
   */
  onClickReset: () => void;
} & ComponentProps<'input'>;

export function Input({ value, onClickReset, ...props }: InputProps) {
  return (
    <Flex gap="8px" alignItems="center" className="relative w-full">
      <input
        value={value}
        className="focus:bg-primary-50 w-full rounded-xl border border-none bg-gray-50 px-4 py-3 outline-1 outline-gray-200 md:py-3.5"
        {...props}
      />
      {value && (
        <IconButton
          iconName="close"
          color="gray"
          size={18}
          onClick={onClickReset}
          className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer"
        />
      )}
    </Flex>
  );
}
