import { ReactNode } from 'react';

import { Flex } from '../Flex';

export type Props = {
  /**
   * left child of the DoubleButton
   */
  left: ReactNode;
  /**
   * right child of the DoubleButton
   */
  right: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function DoubleButton({ left, right }: Props) {
  return (
    <Flex dir="row" justifyContent="between" alignItems="center" className="w-full gap-2 md:gap-4">
      {left}
      {right}
    </Flex>
  );
}
