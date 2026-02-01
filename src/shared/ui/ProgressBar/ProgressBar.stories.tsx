import type { Meta, StoryObj } from '@storybook/react';

import { COLORS } from '@/shared/lib/colors';

import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;

export const Basic: StoryObj<typeof ProgressBar> = {
  args: {
    percent: 60,
    color: 'pink',
  },
  argTypes: {
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    color: {
      control: { type: 'select' },
      table: {
        type: { summary: 'Colors' },
        defaultValue: { summary: 'primary' },
      },
      options: Object.keys(COLORS),
    },
  },
  render: (args) => <ProgressBar {...args} />,
};
