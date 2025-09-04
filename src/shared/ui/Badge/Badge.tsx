import { cn } from '@/shared/lib/core';

type Props = {
  /**
   * Color type representing the status.
   * @default 'neutral'
   */
  variant: 'positive' | 'negative' | 'neutral';

  /**
   * The text content to be displayed.
   */
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

const variantStyles = {
  positive: 'bg-green-50 text-green-200',
  negative: 'bg-red-100 text-red-300',
  neutral: 'bg-gray-100 text-gray-400',
};

export function Badge({ variant = 'neutral', text, ...props }: Props) {
  const badgeStyle = variantStyles[variant];

  return (
    <div
      className={cn(
        'w-min whitespace-nowrap rounded-lg px-2 py-1 text-sm font-semibold',
        badgeStyle
      )}
      {...props}
    >
      {text}
    </div>
  );
}
