import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';
import type { Column } from './types';

type ScoreRow = {
  scoreCategory: string;
  reason: string;
  amount: number;
  createdAt: string;
};

function ScoreTable(props: React.ComponentProps<typeof Table<ScoreRow>>) {
  return <Table<ScoreRow> {...props} />;
}

const meta = {
  title: 'Components/Table',
  component: ScoreTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '데이터 목록을 표 형태로 표시하는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof ScoreTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { label: '날짜', key: 'createdAt' },
  { label: '카테고리', key: 'scoreCategory' },
  {
    label: '점수',
    key: 'amount',
    render: (value) => (typeof value === 'number' ? `${value.toFixed(3)}점` : value),
  },
] satisfies Column<ScoreRow>[];

const data: ScoreRow[] = [
  {
    scoreCategory: '동아리 활동 보고서',
    reason: '2회차 활동보고서',
    amount: 4.615,
    createdAt: '2025-03-31 15:42:26',
  },
  {
    scoreCategory: '동아리 활동 보고서',
    reason: '2회차 활동보고서',
    amount: 0.001,
    createdAt: '2025-03-31 16:02:31',
  },
  {
    scoreCategory: '전동대회',
    reason: '3월 전동대회 참여',
    amount: 1.0,
    createdAt: '2025-04-01 11:40:36',
  },
  {
    scoreCategory: '전동대회',
    reason: '4월 전동대회 참여',
    amount: 1.0,
    createdAt: '2025-04-28 19:44:04',
  },
  {
    scoreCategory: '동아리 활동 보고서',
    reason: '3회차 활동보고서',
    amount: 2.308,
    createdAt: '2025-05-03 01:42:26',
  },
  {
    scoreCategory: '동아리 활동 보고서',
    reason: '3회차 활동보고서',
    amount: 0.001,
    createdAt: '2025-05-03 01:43:05',
  },
  {
    scoreCategory: '동아리 활동 보고서',
    reason: '3회차 활동보고서',
    amount: -0.002,
    createdAt: '2025-05-03 01:43:50',
  },
  {
    scoreCategory: '동아리 활동 보고서',
    reason: '5회차 활동보고서',
    amount: 4.616,
    createdAt: '2025-05-16 13:24:23',
  },
  {
    scoreCategory: '전동대회',
    reason: '5월 전동대회 참여',
    amount: 1.0,
    createdAt: '2025-05-26 19:23:15',
  },
  {
    scoreCategory: '동아리 활동 보고서',
    reason: '3회차 활동보고서',
    amount: -0.002,
    createdAt: '2025-05-03 01:43:50',
  },
  {
    scoreCategory: '동아리 활동 보고서',
    reason: '5회차 활동보고서',
    amount: 4.616,
    createdAt: '2025-05-16 13:24:23',
  },
  {
    scoreCategory: '전동대회',
    reason: '5월 전동대회 참여',
    amount: 1.0,
    createdAt: '2025-05-26 19:23:15',
  },
];

export const Basic: Story = {
  args: {
    columns,
    data,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};

export const NoHeader: Story = {
  args: {
    columns,
    data,
    hideHead: true,
  },
};
