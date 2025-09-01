import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { Portal } from '../Portal';

export type Props = {
  /**
   * The open state of the drawer.
   */
  isOpen: boolean;
  /**
   * The function to call when the drawer is closed.
   */
  onClose: () => void;
} & PropsWithChildren;

const FADE_IN_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

const SLIDE_IN_ANIMATION = {
  initial: { translateX: '100%' },
  animate: { translateX: 0 },
  exit: { translateX: '100%' },
  transition: { type: 'tween', damping: 50 },
} as const;

export function Drawer({ isOpen, onClose, children }: Props) {
  return (
    <Portal isOpen={isOpen}>
      <motion.div
        onClick={onClose}
        className="fixed inset-0 bg-black/50"
        initial={FADE_IN_ANIMATION.initial}
        animate={FADE_IN_ANIMATION.animate}
        exit={FADE_IN_ANIMATION.exit}
      />
      <div className="fixed top-0 right-0 z-50 h-full">
        <motion.div
          className="h-full bg-white shadow-lg"
          initial={SLIDE_IN_ANIMATION.initial}
          animate={SLIDE_IN_ANIMATION.animate}
          exit={SLIDE_IN_ANIMATION.exit}
          transition={SLIDE_IN_ANIMATION.transition}
        >
          {children}
        </motion.div>
      </div>
    </Portal>
  );
}
