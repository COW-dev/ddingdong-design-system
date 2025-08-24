import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { MODAL_MOTION } from '@/shared/constants/motion';

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
};

export function Modal({ isOpen, closeModal, children }: Props) {
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
        className="fixed inset-0 z-30 flex w-full items-center justify-center"
      >
        <div className="bg-opacity-50 absolute inset-0 bg-black" onClick={handleOutsideClick} />
        <ModalContent>{children}</ModalContent>
      </motion.div>
    </Portal>
  );
}

export function ModalContent({ children }: { children: React.ReactNode }) {
  return (
    <Flex justify="center" items="center" className="relative z-40 rounded-lg bg-white p-8">
      {children}
    </Flex>
  );
}
