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

export const WithVideoFormats: Story = {
  args: {
    label: '이미지와 비디오를 업로드 할 수 있어요.',
    description: '3GB까지 업로드 가능해요.',
    maxSize: 3,
    acceptedFormats: ['image/*', 'video/*'],
  },
};

export const WithTopAffix: Story = {
  args: {
    topAffix: <span className="text-sm text-gray-500">프로필 이미지</span>,
  },
};
