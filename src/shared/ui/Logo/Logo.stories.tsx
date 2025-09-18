import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'components/Logo',
  component: Logo,

  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['white', 'black'],
    },
    size: {
      control: { type: 'range', min: 20, max: 100, step: 5 },
    },
    href: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'black',
    size: 200,
  },
};

export const White: Story = {
  args: {
    color: 'white',
    size: 200,
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
};
