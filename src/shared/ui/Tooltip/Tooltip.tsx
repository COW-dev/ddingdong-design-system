import { motion } from 'framer-motion';

import { TOOLTIP_MOTION } from '@/shared/constants/motion';
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
   * The animation mode for the tooltip
   */
  animationMode?: keyof typeof TOOLTIP_MOTION;
  /**
   * The content to display in the tooltip
   */
  children: React.ReactNode;
};

export function Tooltip({
  content,
  color = 'gray',
  animationMode = 'SPRING',
  children,
}: TooltipProps) {
  const { open, ref, show, hide, position } = useFloating();
  const selectedColor = tooltipColorMap[color];
  const animation = TOOLTIP_MOTION[animationMode];

  return (
    <div ref={ref} className="inline-flex" onMouseEnter={show} onMouseLeave={hide}>
      {children}
      <Portal isOpen={open}>
        <motion.div
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
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
        </motion.div>
      </Portal>
    </div>
  );
}
