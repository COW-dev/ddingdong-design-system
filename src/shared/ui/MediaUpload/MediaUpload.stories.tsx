import type { Meta, StoryObj } from '@storybook/react';

import { MediaUpload, Props } from './MediaUpload';

const meta = {
  title: 'components/MediaUpload',
  component: MediaUpload,
  tags: ['autodocs'],
} satisfies Meta<typeof MediaUpload>;

export default meta;
type Story = StoryObj<Props>;

export const Basic: Story = {
  argTypes: {
    label: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    topAffix: { control: 'text' },
    maxSize: { control: { type: 'number', min: 1, step: 1 } },
    acceptedFormats: { control: 'text' },
  },
  render: (args) => <MediaUpload {...args} />,
};

export const UploadFormats: Story = {
  args: {
    label: '이미지와 비디오를 업로드 할 수 있어요.',
    description: '3GB까지 업로드 가능해요.',
    maxSize: 3,
    acceptedFormats: ['image/*', 'video/*'],
  },
};

export const WithTopAffix: Story = {
  args: {
    topAffix: '제목처럼 추가할 수 있어요',
  },
};

export const MultipleMode: Story = {
  args: {
    multiple: true,
  },
};

export const EditMode: Story = {
  args: {
    multiple: true,
    initialPreviewUrls: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    ],
    initialFiles: [new File([], 'test.jpg')],
  },
};
