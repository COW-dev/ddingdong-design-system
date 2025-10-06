import type { Column } from './types';

import { Flex } from '../Flex';
import { Body2 } from '../Typography';

type Props<T extends Record<string, unknown>> = {
  columns: Column<T>[];
};

export function TableHead<T extends Record<string, unknown>>({ columns }: Props<T>) {
  return (
    <Flex className="sticky top-0 z-10 w-full items-center gap-6 bg-gray-50 px-4 py-2">
      {columns.map((col, idx) => (
        <Body2 key={String(col.key ?? idx)} className="flex-1 basis-0 py-1 text-gray-600 md:px-2">
          {col.label}
        </Body2>
      ))}
    </Flex>
  );
}
