import type { ReactNode } from 'react';

export type Column<T extends Record<string, unknown>, K extends keyof T = keyof T> = {
  label: string;
  key: K;
  render?: (value: T[K], row: T) => ReactNode;
};
