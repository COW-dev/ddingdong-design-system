import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Radio, Item } from './index';
import { InputValue } from './RadioRoot';

const meta = {
  title: 'components/Radio',
  component: Item,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Radio 컴포넌트는 input type="radio"를 대체할 수 있는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    disabled: false,
    size: 'md',
  },
  render: (args) => (
    <Radio>
      <Item {...args} />
    </Radio>
  ),
};

export const UsingWithLabel: Story = {
  render: () => (
    <Radio className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Item id="test" value="test" />
        <label htmlFor="test">radio 1</label>
      </div>
      <div className="flex items-center gap-2">
        <Item id="test2" value="test2" />
        <label htmlFor="test2">radio 2</label>
      </div>
    </Radio>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<InputValue>(1);
    const handleChange = (newValue: InputValue) => {
      setValue(newValue);
    };

    return (
      <Radio value={value} onValueChange={(value) => handleChange(value)}>
        <Item value={1} />
        <Item value="문자열 value" />
      </Radio>
    );
  },
};

export const Uncontrolled: Story = {
  render: () => (
    <Radio defaultValue={1}>
      <Item value={1} />
      <Item value={2} />
    </Radio>
  ),
};
