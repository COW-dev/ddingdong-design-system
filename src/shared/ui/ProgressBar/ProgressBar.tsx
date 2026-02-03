import { COLORS, colors } from '@/shared/lib/colors';
import { cn } from '@/shared/lib/core';
import { Flex } from '@/shared/ui/Flex';

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
  const height = 10;
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const barColor = COLORS[color];

  return (
    <Flex>
      <div
        className={cn('overflow-hidden', className)}
        style={{
          width: '264px',
          height: `${height}px`,
          borderRadius: `${height / 2}px`,
          backgroundColor: '#F3F4F6',
          backgroundColor: colors.gray[100],
        }}
      >
        <div
          className="h-full transition-[width] duration-300 ease-in-out"
          style={{
            width: `${clampedPercent}%`,
            backgroundColor: barColor,
            borderRadius: `${height / 2}px`,
          }}
        />
      </div>
    </Flex>
  );
}
