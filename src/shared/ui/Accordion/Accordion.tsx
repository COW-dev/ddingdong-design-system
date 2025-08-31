import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ACCORDION_MOTION } from '@/shared/constants/motion';
import { cn } from '@/shared/lib/core';

import { AccordionContext, useAccordion } from './useAccordion';

import { Icon } from '../Icon';

type AccordionRootProps = {
  /**
   * The type of the Accordion, either single or multiple.
   * @default 'single'
   */
  type?: 'single' | 'multiple';
  /**
   * The content of the Accordion, typically AccordionItem components.
   */
  children: React.ReactNode;
  /**
   * Additional class names to apply to the AccordionRoot.
   */
  className?: string;
};

export function AccordionRoot({ type = 'single', className = '', children }: AccordionRootProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
      return;
    }
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn(`w-full`, className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  /**
   * The trigger element that toggles the visibility of the content.
   */
  trigger: ReactNode;
  /**
   * Whether to show the arrow icon next to the trigger.
   * @default true
   */
  isArrow?: boolean;
  /**
   * The unique value for the AccordionItem, used for tracking its state.
   */
  value: string;
  /**
   * The content of the AccordionItem.
   */
  children: ReactNode;
  /**
   * Additional class names to apply to the AccordionItem.
   */
  btnClassName?: string;
  /**
   * The class name for the content container.
   */
  contentClassName?: string;
};

export function AccordionItem({
  trigger,
  isArrow = true,
  value,
  btnClassName,
  contentClassName,
  children,
  ...props
}: AccordionItemProps) {
  const context = useAccordion();

  const { openItems, toggleItem } = context;
  const isOpen = openItems.includes(value);

  return (
    <div className="border-b border-gray-200" {...props}>
      <button
        onClick={() => toggleItem(value)}
        className={cn(
          'flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left hover:bg-gray-50',
          btnClassName
        )}
      >
        {trigger}
        {isArrow && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-2"
          >
            <Icon name="arrowDown" size={20} />
          </motion.div>
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={ACCORDION_MOTION.initial}
            animate={ACCORDION_MOTION.animate}
            exit={ACCORDION_MOTION.exit}
            transition={ACCORDION_MOTION.transition}
            className="overflow-hidden"
          >
            <div className={cn('bg-gray-50 px-6 py-4', contentClassName)}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
