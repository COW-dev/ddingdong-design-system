import type { Meta, StoryObj, StoryContext } from '@storybook/react';

import { Button, Props, ButtonVariant as Variant } from './Button';

const allowedColors: Record<Props<Variant>['variant'], Array<Props<Variant>['color']>> = {
  primary: ['blue', 'red'],
  secondary: ['blue', 'red', 'green'],
  tertiary: [],
};

const meta: Meta<Props<Variant>> = {
  title: 'components/common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Button의 Variant를 설정합니다.',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'radio',
      },
    },
    color: {
      description: 'Button의 color를 설정합니다.',
      table: {
        type: { summary: 'ButtonColor<V>' },
        defaultValue: { summary: 'blue' },
      },
      options: ['blue', 'red'],
      control: {
        type: 'radio',
      },
    },
    isLoading: {
      description: 'Button의 loading 여부를 설정합니다.',
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'Button의 내용을 설정합니다.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  decorators: [
    (Story, context: StoryContext<Props<Variant>>) => {
      const { args } = context;

      if (context.argTypes.color)
        context.argTypes.color.options = allowedColors[args.variant] || [];

      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<Props<Variant>>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    color: 'blue',
    children: 'PrimaryButton',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    color: 'blue',
    children: 'SecondaryButton',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'TertiaryButton',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    color: 'blue',
    isLoading: true,
    children: 'PrimaryButton + isLoading(true)',
  },
};
