import type { Meta, StoryObj } from '@storybook/react';

import { tooltipColorMap } from './tooltipColorMap';

import { Tooltip } from '.';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

const meta = {
  title: 'components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tooltip 컴포넌트는 사용자가 요소에 마우스를 올리거나 포커스를 맞출 때 추가 정보를 표시하는 데 사용됩니다.',
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    color: 'gray',
    content: '툴팁입니다!',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(tooltipColorMap),
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args) => (
    <Flex>
      <Tooltip {...args}>
        <Icon name="youtube" size={25} />
      </Tooltip>
    </Flex>
  ),
};
