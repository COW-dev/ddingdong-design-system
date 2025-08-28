import { useCallback, useEffect, useRef, useState } from 'react';

export const useCarouselController = (itemsPerView: number = 1) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemCount = container.children.length;
      setTotalItems(itemCount);
    }
  }, []);

  const goToIndex = useCallback(
    (index: number) => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const itemWidth = container.clientWidth / itemsPerView;
      const targetScrollLeft = index * itemWidth;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });

      setCurrentIndex(index);
    },
    [itemsPerView]
  );

  const autoGoToNext = useCallback(() => {
    if (isPaused || totalItems === 0) return;

    const nextIndex = currentIndex >= totalItems - itemsPerView ? 0 : currentIndex + 1;
    goToIndex(nextIndex);
  }, [goToIndex, isPaused, currentIndex, totalItems, itemsPerView]);

  const goToNext = useCallback(() => {
    const maxIndex = Math.max(0, totalItems - itemsPerView);
    const nextIndex = Math.min(currentIndex + 1, maxIndex);
    goToIndex(nextIndex);
  }, [currentIndex, totalItems, itemsPerView, goToIndex]);

  const goToPrevious = useCallback(() => {
    const prevIndex = Math.max(0, currentIndex - 1);
    goToIndex(prevIndex);
  }, [currentIndex, goToIndex]);

  useEffect(() => {
    if (totalItems === 0 || isPaused) return;

    intervalRef.current = setInterval(autoGoToNext, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoGoToNext, totalItems, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const canGoNext = currentIndex < totalItems - itemsPerView;
  const canGoPrevious = currentIndex > 0;

  return {
    currentIndex,
    totalItems,
    goToNext,
    goToPrevious,
    canGoNext,
    canGoPrevious,
    scrollContainerRef,
    handleMouseEnter,
    handleMouseLeave,
  };
};
