import { ReactNode, useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { cn } from '@/shared/lib/core';

import { AccordionContext, useAccordion } from './Accordion.context';

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
  children: ReactNode;
  /**
   * Additional class names to apply to the AccordionRoot.
   */
  className?: string;
};

export function AccordionRoot({
  type = 'single',
  className = '',
  children,
  ...props
}: AccordionRootProps) {
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
      <div className={cn(`w-full`, className)} {...props}>
        {children}
      </div>
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

const ACCORDION_MOTION = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: {
    height: { duration: 0.2, ease: 'easeOut' },
    opacity: { duration: 0.1 },
  },
};

const isInteractiveElement = (element: HTMLElement) => {
  const INTERACTIVE_TAGS = ['INPUT', 'TEXTAREA', 'A'];
  return INTERACTIVE_TAGS.includes(element.tagName);
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
  const uid = useId();
  const triggerId = `accordion-trigger-${uid}`;
  const contentId = `accordion-content-${uid}`;
  const prefersReducedMotion = useReducedMotion();

  const { openItems, toggleItem } = context;
  const isOpen = openItems.includes(value);

  const handleClickTrigger = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (isInteractiveElement(target)) {
      return e.stopPropagation();
    }

    toggleItem(value);
  };

  return (
    <div className="border-b border-gray-200" data-state={isOpen ? 'open' : 'closed'} {...props}>
      <div
        id={triggerId}
        aria-controls={contentId}
        aria-expanded={isOpen}
        role="button"
        onClick={handleClickTrigger}
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
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            id={contentId}
            aria-labelledby={triggerId}
            initial={prefersReducedMotion ? undefined : ACCORDION_MOTION.initial}
            animate={prefersReducedMotion ? undefined : ACCORDION_MOTION.animate}
            exit={prefersReducedMotion ? undefined : ACCORDION_MOTION.exit}
            transition={prefersReducedMotion ? undefined : ACCORDION_MOTION.transition}
            className="overflow-hidden"
          >
            <div className={cn('bg-gray-50 px-6 py-4', contentClassName)}>{children}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
