import type { Meta, StoryObj } from '@storybook/react';

import { ImageGallery } from './ImageGallery';

const meta = {
  title: 'components/ImageGallery',
  component: ImageGallery,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    images: {
      control: 'object',
    },
  },
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=1200&auto=format&fit=crop',
];

export const Basic: Story = {
  args: {
    images: sampleImages,
  },
  render: (args) => (
    <div className="w-[640px]">
      <ImageGallery {...args} />
    </div>
  ),
};

export const WithoutArrows: Story = {
  args: {
    images: sampleImages,
  },
  render: (args) => (
    <div className="w-[640px]">
      <ImageGallery {...args} />
    </div>
  ),
};
