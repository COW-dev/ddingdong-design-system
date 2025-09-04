import type { Meta, StoryObj } from '@storybook/react';

import { RadioItem, RadioRoot } from './Radio';

const meta = {
  title: 'components/Radio',
  component: RadioItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Radio 컴포넌트는 input type="radio"를 대체할 수 있는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof RadioItem>;

export default meta;
type Story = StoryObj<typeof RadioItem>;

export const Default: Story = {
  args: {
    disabled: false,
    size: 'md',
  },
  render: (args) => (
    <RadioRoot>
      <RadioItem {...args} />
    </RadioRoot>
  ),
};

export const UsingWithLabel: Story = {
  render: () => (
    <RadioRoot className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <RadioItem id="test" value="test" />
        <label htmlFor="test">radio 1</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioItem id="test2" value="test2" />
        <label htmlFor="test2">radio 2</label>
      </div>
    </RadioRoot>
  ),
};
