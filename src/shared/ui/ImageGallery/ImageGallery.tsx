import { cn } from '@/shared/lib/core';

import { ImageGalleryProvider, useImageGallery } from './ImageGalleryContext';

import { Flex } from '../Flex';
import { Icon } from '../Icon';

type Props = {
  /**
   * 이미지 URL 목록
   */
  images: string[];
  /**
   * 각 이미지에 사용할 공통 alt 텍스트 접두사
   */
  altPrefix?: string;
  /**
   * 컨테이너 추가 클래스
   */
  className?: string;
};

export function ImageGallery({ images, altPrefix, className }: Props) {
  return (
    <ImageGalleryProvider images={images} altPrefix={altPrefix}>
      <ImageGalleryContent className={className} />
    </ImageGalleryProvider>
  );
}

function ImageGalleryContent({ className }: { className?: string }) {
  const { images, current, total, firstImage, altPrefix } = useImageGallery();
  const alt = altPrefix ? `${altPrefix}${current + 1}` : undefined;
  const loading = firstImage ? 'eager' : 'lazy';

  return (
    <Flex dir="col" alignItems="center">
      <div className={cn('relative h-[500px] w-[500px] overflow-hidden rounded-lg', className)}>
        <img
          src={images[current]}
          className="h-full w-full object-scale-down"
          loading={loading}
          alt={alt}
        />
        {total > 1 && (
          <>
            <ImageGalleryArrow direction="prev" />
            <ImageGalleryArrow direction="next" />
          </>
        )}
      </div>
      <Flex justifyContent="center" className="mt-2">
        <ImageGalleryDots />
      </Flex>
    </Flex>
  );
}

function ImageGalleryDots() {
  const { images, current, goToIndex } = useImageGallery();
  return (
    <Flex alignItems="center" className="gap-2">
      {images.map((_, index) => {
        const isActive = index === current;
        return (
          <button
            key={index}
            type="button"
            aria-label={`이미지 ${index + 1}`}
            onClick={() => goToIndex(index)}
            className={cn('h-2 w-2 rounded-full', isActive ? 'bg-primary-300' : 'bg-gray-200')}
          />
        );
      })}
    </Flex>
  );
}

type ImageGalleryArrowProps = {
  direction: 'prev' | 'next';
};
function ImageGalleryArrow({ direction }: ImageGalleryArrowProps) {
  const { altPrefix, firstImage, lastImage, goPrev, goNext } = useImageGallery();
  const isPrev = direction === 'prev';
  const isHidden = isPrev ? firstImage : lastImage;
  const onClick = isPrev ? goPrev : goNext;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/75 p-1.5',
        isPrev ? 'left-4' : 'right-4',
        isHidden && 'hidden'
      )}
      aria-label={`${altPrefix} ${direction} button`}
    >
      <Icon name={isPrev ? 'arrowLeft' : 'arrowRight'} />
    </button>
  );
}
