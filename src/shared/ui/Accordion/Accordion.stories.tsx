import type { Meta, StoryObj } from '@storybook/react';

import { AccordionItem, Accordion } from '.';
import { Input } from '../Input';

const meta: Meta<typeof Accordion> = {
  title: 'components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Accordion 하위 컴포넌트로 AccordionItem이 존재합니다',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => {
    return (
      <Accordion type="single">
        {[...Array(3)].map((_, index) => (
          <AccordionItem value={`item-${index + 1}`} trigger={<div>질문 {index}</div>} key={index}>
            <div>내용 {index}</div>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};

export const MultipleAccordion: Story = {
  render: () => {
    return (
      <Accordion type="multiple">
        <AccordionItem value="item-1" trigger={<div>질문 1</div>}>
          <div>내용</div>
        </AccordionItem>
        <AccordionItem value="item-2" trigger={<div>질문 2</div>}>
          <div>내용</div>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const NoneArrowAccordion: Story = {
  render: () => {
    return (
      <Accordion type="single">
        <AccordionItem value="item-1" isArrow={false} trigger={<div>질문 1</div>}>
          <div>내용</div>
        </AccordionItem>
        <AccordionItem value="item-2" isArrow={false} trigger={<div>질문 2</div>}>
          <div>내용</div>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const InputAccordion: Story = {
  render: () => {
    return (
      <Accordion type="single">
        <AccordionItem value="item-1" trigger={<Input onClickReset={() => {}} />}>
          <Input onClickReset={() => {}} />
        </AccordionItem>
      </Accordion>
    );
  },
};

export const DefaultValueAccordion: Story = {
  render: () => {
    return (
      <Accordion type="single" defaultValue={['item-2']}>
        <AccordionItem value="item-1" isArrow={false} trigger="defualtValue를 설정하지 않은 요소">
          초기 render시 조회되지 않아요
        </AccordionItem>
        <AccordionItem value="item-2" isArrow={false} trigger="defualtValue를 설정한 요소">
          초기 render시 조회돼요
        </AccordionItem>
      </Accordion>
    );
  },
};
