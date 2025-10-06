import { cn } from '@/shared/lib/core';

import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import type { Column } from './types';

type Props<T extends Record<string, unknown>> = {
  columns: Column<T>[];
  data: T[];
  hideHead?: boolean;
  className?: string;
};

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  hideHead,
  className,
}: Props<T>) {
  return (
    <div
      className={cn(
        'no-scrollbar relative max-h-[220px] w-full overflow-y-auto rounded-md border border-gray-100 md:max-h-[300px]',
        className
      )}
    >
      {!hideHead && <TableHead<T> columns={columns} />}
      <TableBody<T> columns={columns} data={data} />
    </div>
  );
}
