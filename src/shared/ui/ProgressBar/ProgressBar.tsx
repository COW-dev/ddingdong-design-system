import { COLORS, colors } from '@/shared/lib/colors';
import { cn } from '@/shared/lib/core';

type Props = {
  /**
   *   defined in percentage (0-100).
   */
  percent: number;
  /**
   * color of the switch.
   * @default 'primary'
   */
  color?: keyof typeof COLORS;
  className?: string;
};

export function ProgressBar({ color = 'primary', percent, className }: Props) {
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const barColor = COLORS[color];

  return (
    <div
      className={cn('h-2.5 w-[16.5rem] overflow-hidden rounded-full', className)}
      style={{
        backgroundColor: colors.gray[100],
      }}
    >
      <div
        className="h-full rounded-full transition-[width] duration-500 ease-in-out"
        style={{
          width: `${clampedPercent}%`,
          backgroundColor: barColor,
        }}
      />
    </div>
  );
}
