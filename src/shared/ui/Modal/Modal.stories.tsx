import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

import { Button } from '../Button';
import { DoubleButton } from '../DoubleButton';
import { Flex } from '../Flex';
import { Title3 } from '../Typography';

export default {
  title: 'components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export const Basic: StoryObj<typeof Modal> = {
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: '사용자가 원하는 상태 모드에 따라 모달을 띄우고 닫을 수 있는 컴포넌트입니다.',
      },
    },
  },
  args: {
    isOpen: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <Button onClick={openModal} variant="primary" color="blue">
          모달 열기
        </Button>

        <Modal {...args} isOpen={isOpen} closeModal={closeModal}>
          <Flex dir="col" justify="center" items="center" className="gap-2 md:gap-4">
            <Title3 className="text-2xl font-semibold">ddingdong 모달입니다.</Title3>
            <DoubleButton
              left={
                <Button onClick={closeModal} variant="tertiary" size="full" className="h-10">
                  취소
                </Button>
              }
              right={
                <Button
                  onClick={closeModal}
                  variant="primary"
                  color="red"
                  size="full"
                  className="h-10"
                >
                  확인하기
                </Button>
              }
            />
          </Flex>
        </Modal>
      </div>
    );
  },
};
