import type { Meta } from '@storybook/react';

import { Item, Accordion } from '.';

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

export const Default = {
  render: () => {
    return (
      <Accordion type="multiple">
        {[...Array(3)].map((_, index) => (
          <Item value={`item-${index + 1}`} trigger={<div>질문 {index}</div>} key={index}>
            <div className="bg-gray-50">내용 {index}</div>
          </Item>
        ))}
      </Accordion>
    );
  },
};

export const NoneArrowAccordion = {
  render: () => {
    return (
      <Accordion type="single" collapsible>
        <Item value="item-1" isArrow={false} trigger={<div>질문 1</div>}>
          <div className="bg-gray-50">내용</div>
        </Item>
        <Item value="item-2" isArrow={false} trigger={<div>질문 2</div>}>
          <div className="bg-gray-50">내용</div>
        </Item>
      </Accordion>
    );
  },
};
