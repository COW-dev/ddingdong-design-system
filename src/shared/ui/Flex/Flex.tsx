import { cn } from '@/shared/lib/core';

const DIR = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
} as const;

const ALIGN_ITEMS = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
} as const;

const JUSTIFY_CONTENT = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch',
  baseline: 'justify-baseline',
  normal: 'justify-normal',
} as const;

const WRAP = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
} as const;

type Props = {
  /**
   * The HTML element to use as the container.
   * @default 'div'
   */
  as?: React.ElementType;
  /**
   * Defines the direction of the flex container's main axis.
   * @default row
   */
  dir?: keyof typeof DIR;
  /**
   * Specifies how flex items are aligned along the cross axis.
   * @default start
   */
  items?: keyof typeof ALIGN_ITEMS;
  /**
   * Defines how flex items are distributed along the main axis.
   * @default center
   */
  justify?: keyof typeof JUSTIFY_CONTENT;
  /**
   * Controls whether flex items should wrap onto multiple lines.
   * @default nowrap
   */
  wrap?: keyof typeof WRAP;
  /**
   * Additional CSS classNames to be applied to the container.
   * @default ''
   */
  className?: string;
  /**
   * The child elements to be rendered inside the Flex container.
   */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Flex({
  as = 'div',
  dir = 'row',
  items = 'stretch',
  justify = 'start',
  wrap = 'nowrap',
  className = '',
  children,
  ...props
}: Props) {
  const Container = as;
  return (
    <Container
      className={cn(
        'flex',
        DIR[dir],
        ALIGN_ITEMS[items],
        JUSTIFY_CONTENT[justify],
        WRAP[wrap],
        className
      )}
      {...props}
    >
      {children}
    </Container>
  );
}
