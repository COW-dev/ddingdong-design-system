import type { Meta, StoryObj } from '@storybook/react';

import { Carousel, CarouselContent, CarouselItem } from '.';

const meta = {
  title: 'components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Carousel 컴포넌트는 여러 아이템을 슬라이드 형식으로 보여줍니다.',
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="bg-red-500 h-48 w-full" />
        </CarouselItem>
        <CarouselItem>
          <div className="bg-blue-500 h-48 w-full" />
        </CarouselItem>
        <CarouselItem>
          <div className="bg-green-500 h-48 w-full" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  ),
};

export const Single: Story = {
  render: () => (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="bg-red-500 h-48 w-full" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  ),
};
