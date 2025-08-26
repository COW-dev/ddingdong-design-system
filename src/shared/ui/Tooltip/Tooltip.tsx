import { useFloating } from '@/shared/hooks/useFloating';
import { Colors } from '@/shared/lib/colors';
import { cn } from '@/shared/lib/core';

import { tooltipColorMap } from './tooltipColorMap';

import { Portal } from '../Portal';
import { Caption1 } from '../Typography';

type TooltipProps = {
  /**
   * The content to display in the tooltip
   */
  content: string;
  /**
   * The color of the tooltip
   */
  color: Colors;
  /**
   * The content to display in the tooltip
   */
  children: React.ReactNode;
};

export function Tooltip({ content, color = 'gray', children }: TooltipProps) {
  const { open, ref, show, hide, position } = useFloating();
  const selectedColor = tooltipColorMap[color];

  return (
    <div ref={ref} className="inline-flex" onMouseEnter={show} onMouseLeave={hide}>
      {children}
      <Portal isOpen={open}>
        <div
          className={cn(
            'fixed mb-2 -translate-x-1/2 -translate-y-full rounded px-2 py-1 whitespace-nowrap shadow-lg',
            selectedColor.bg
          )}
          style={{
            top: position?.top,
            left: position?.left,
          }}
        >
          <Caption1 weight="medium" className={selectedColor.text}>
            {content}
          </Caption1>
        </div>
      </Portal>
    </div>
  );
}
