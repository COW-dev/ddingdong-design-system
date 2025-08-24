import type { Meta, StoryObj } from '@storybook/react';

import { DoubleButton, Props } from './DoubleButton';

import { Button } from '../Button/Button';
import { Flex } from '../Flex';

const meta: Meta = {
  title: 'components/DoubleButton',
  component: DoubleButton,
  tags: ['autodocs'],
  argTypes: {
    left: { description: 'DoubleButton의 왼쪽에 배치되는 버튼입니다.' },
    right: { description: 'DoubleButton의 오른쪽에 배치되는 버튼입니다.' },
  },
};

export default meta;
export type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    left: (
      <Button variant="primary" color="blue" size="full">
        Left Button
      </Button>
    ),
    right: (
      <Button variant="secondary" color="red" size="full">
        Right Button
      </Button>
    ),
  },
  render: (args) => {
    return (
      <Flex className="w-75">
        <DoubleButton {...args} />
      </Flex>
    );
  },
};
