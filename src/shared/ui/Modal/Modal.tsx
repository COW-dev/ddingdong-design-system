import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/shared';

import { Flex } from '../Flex';
import { Portal } from '../Portal';

type Props = {
  /**
   * Controls whether the modal is open or closed.
   */
  isOpen: boolean;
  /**
   * Function to close the modal.
   */
  closeModal: () => void;
  /**
   * The content to be displayed inside the modal.
   */
  children: ReactNode;
  /**
   * Additional classes to apply to the modal.
   */
  className?: string;
};

const MODAL_MOTION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
} as const;

export function Modal({ isOpen, closeModal, children, className }: Props) {
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target === e.currentTarget && closeModal) {
      closeModal();
    }
  };

  return (
    <Portal isOpen={isOpen}>
      <motion.div
        initial={MODAL_MOTION.initial}
        animate={MODAL_MOTION.animate}
        exit={MODAL_MOTION.exit}
        transition={MODAL_MOTION.transition}
        className={cn('fixed inset-0 z-50 flex w-full items-center justify-center', className)}
      >
        <div className="absolute inset-0 bg-black/50" onClick={handleOutsideClick} />
        <ModalContent>{children}</ModalContent>
      </motion.div>
    </Portal>
  );
}

export function ModalContent({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      role="dialog"
      aria-modal="true"
      justifyContent="center"
      alignItems="center"
      className="relative z-50 rounded-lg bg-white p-6"
    >
      {children}
    </Flex>
  );
}
