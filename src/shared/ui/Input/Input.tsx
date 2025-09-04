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
    <Flex gap={8} alignItems="center" className="relative w-full">
      <input
        value={value}
        className="w-full rounded-xl border-none bg-gray-50 px-4 py-3 outline-1 outline-gray-200 focus:bg-primary-50 md:py-3.5"
        {...props}
      />
      {value && (
        <IconButton
          title="입력값 지우기"
          aria-label="입력값 지우기"
          iconName="close"
          color="gray"
          size={18}
          onClick={onClickReset}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
        />
      )}
    </Flex>
  );
}
