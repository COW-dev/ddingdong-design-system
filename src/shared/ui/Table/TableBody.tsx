import type { Column } from './types';

import { Flex } from '../Flex';
import { Body3 } from '../Typography';

type Props<T extends Record<string, unknown>> = {
  columns: Column<T>[];
  data: T[];
};

export function TableBody<T extends Record<string, unknown>>({ columns, data }: Props<T>) {
  if (!data || data.length === 0) {
    return <div className="h-[120px] bg-white md:h-[200px]" />;
  }

  return (
    <div>
      {data.map((row, rIdx) => (
        <Flex key={rIdx} className="items-center gap-4 border-b border-gray-200 px-4 py-2">
          {columns.map((col, cIdx) => {
            const value = row[col.key];
            const content = col.render ? col.render(value, row) : (value as React.ReactNode);
            return (
              <Body3
                key={cIdx}
                className="min-w-0 flex-1 basis-0 break-words whitespace-pre-wrap text-gray-400 md:px-2 md:py-2"
                weight="normal"
              >
                {content}
              </Body3>
            );
          })}
        </Flex>
      ))}
    </div>
  );
}
