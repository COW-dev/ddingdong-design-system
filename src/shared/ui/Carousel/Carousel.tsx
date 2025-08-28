import { ReactNode } from 'react';

import { useCarouselController } from '@/shared/hooks/useCarouselController';
import { cn } from '@/shared/lib/core';

import { CarouselContext, useCarousel } from './CarouselContext';

import { Icon } from '../Icon';

type CarouselProps = {
  /**
   * Number of items to show in the carousel at once
   */
  itemsPerView?: number;
  /**
   * Additional CSS classes to apply to the carousel container
   */
  className?: string;
  /**
   * The content to display within the carousel
   */
  children: ReactNode;
};

export function Carousel({ itemsPerView = 1, className = '', children }: CarouselProps) {
  const carouselData = useCarouselController(itemsPerView);

  return (
    <CarouselContext.Provider value={carouselData}>
      <div
        className={cn('relative', className)}
        onMouseEnter={carouselData.handleMouseEnter}
        onMouseLeave={carouselData.handleMouseLeave}
        role="region"
        aria-roledescription="carousel"
      >
        {children}
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ children, className = '' }: Omit<CarouselProps, 'itemsPerView'>) {
  const { scrollContainerRef } = useCarousel();

  return (
    <div
      ref={scrollContainerRef}
      className={cn('scroll no-scrollbar flex overflow-x-auto scroll-smooth', className)}
    >
      {children}
    </div>
  );
}

export function CarouselItem({ children, className = '' }: Omit<CarouselProps, 'itemsPerView'>) {
  return <div className={cn('flex-shrink-0', className)}>{children}</div>;
}

export function CarouselPrevious() {
  const { goToPrevious, canGoNext, canGoPrevious } = useCarousel();

  if (!(canGoNext || canGoPrevious)) {
    return null;
  }

  return (
    <button
      onClick={goToPrevious}
      disabled={!canGoPrevious}
      className="absolute top-1/2 left-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
      aria-label="이전"
    >
      <Icon name="arrowLeft" className="pr-0.5" />
    </button>
  );
}

export function CarouselNext() {
  const { goToNext, canGoNext, canGoPrevious } = useCarousel();

  if (!(canGoNext || canGoPrevious)) {
    return null;
  }

  return (
    <button
      onClick={goToNext}
      disabled={!canGoNext}
      className="absolute top-1/2 right-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
      aria-label="다음"
    >
      <Icon name="arrowRight" className="pl-0.5" />
    </button>
  );
}
