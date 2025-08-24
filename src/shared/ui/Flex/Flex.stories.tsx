import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
  title: 'components/Flex',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Flex 컴포넌트는 display: flex를 적용해 정렬과 배치를 간편하게 조정할 수 있는 컨테이너입니다.',
      },
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Basic: Story = {
  args: {
    dir: 'row',
    items: 'stretch',
    justify: 'normal',
    wrap: 'nowrap',
  },
  argTypes: {
    dir: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    items: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
    },
    justify: {
      control: { type: 'select' },
      options: [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'normal',
      ],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
  render: (args) => (
    <Flex {...args} className="w-full">
      <div className="size-10 bg-red-300">1</div>
      <div className="size-10 bg-green-300">2</div>
      <div className="bg-primary-300 size-10">3</div>
    </Flex>
  ),
};
