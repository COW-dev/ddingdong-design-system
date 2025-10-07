import { cn } from '@/shared/lib/core';

import { ImageGalleryProvider, useImageGallery } from './ImageGalleryContext';

import { Icon } from '../Icon';

type Props = {
  /**
   * 이미지 URL 목록
   */
  images: string[];
  /**
   * 각 이미지에 사용할 공통 alt 텍스트 접두사
   * @default 'image'
   */
  altPrefix?: string;
  /**
   * 컨테이너 추가 클래스
   */
  className?: string;
};

export function ImageGallery({ images, altPrefix = 'image', className }: Props) {
  return (
    <ImageGalleryProvider images={images} altPrefix={altPrefix}>
      <ImageGalleryContent className={className} />
    </ImageGalleryProvider>
  );
}

function ImageGalleryContent({ className }: { className?: string }) {
  const { images, current, total, altPrefix } = useImageGallery();
  return (
    <div className={cn('relative w-full overflow-hidden rounded-lg bg-gray-50', className)}>
      <div className="relative aspect-video w-full">
        <img
          src={images[current]}
          alt={`${altPrefix}${current + 1}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {total > 1 && (
        <>
          <ImageGalleryArrow direction="prev" />
          <ImageGalleryArrow direction="next" />
          <ImageGalleryDots />
        </>
      )}
    </div>
  );
}

function ImageGalleryDots() {
  const { images, current, goToIndex } = useImageGallery();
  return (
    <div className={cn('absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2')}>
      {images.map((_, idx) => {
        const isActive = idx === current;
        return (
          <button
            key={idx}
            type="button"
            aria-label={`이미지 ${idx + 1}`}
            onClick={() => goToIndex(idx)}
            className={cn('h-2 w-2 rounded-full', isActive ? 'bg-primary-300' : 'bg-gray-300')}
          />
        );
      })}
    </div>
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
        'absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-gray-50',
        isPrev ? 'left-4' : 'right-4',
        isHidden && 'hidden'
      )}
      aria-label={`${altPrefix} ${isPrev} arrow button`}
    >
      <Icon name={isPrev ? 'arrowLeft' : 'arrowRight'} />
    </button>
  );
}
