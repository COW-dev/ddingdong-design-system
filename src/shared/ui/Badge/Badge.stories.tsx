import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

export const Basic: StoryObj<typeof Badge> = {
  args: {
    variant: 'negative',
    text: 'Badge',
  },
  argTypes: {
    variant: { control: 'radio', options: ['positive', 'negative', 'neutral'] },
    text: { control: 'text' },
  },
};
