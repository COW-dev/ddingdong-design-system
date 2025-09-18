import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Menu } from './Menu';
import { MenuContainer } from './MenuContext';
import { MenuItem } from './MenuItem';
import { MenuTrigger } from './MenuTrigger';
import { NavigationItem } from './NavigationItem';

import { Icon } from '../Icon';
import { Logo } from '../Logo';

const meta: Meta<typeof Header> = {
  title: 'components/Header',
  component: Header,

  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-gray-50 pb-12">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className="relative">
      <Header>
        <Logo color="black" size={100} />
        <div className="ml-auto flex items-center gap-4">
          <MenuContainer>
            <MenuTrigger>총동아리연합회</MenuTrigger>
            <Menu>
              <MenuItem href="notice">공지사항</MenuItem>
              <MenuItem href="documents">자료실</MenuItem>
              <MenuItem href="faq">FAQ</MenuItem>
            </Menu>
          </MenuContainer>
          <NavigationItem href="/feed">동아리피드</NavigationItem>

          <MenuContainer>
            <MenuTrigger>SNS</MenuTrigger>
            <Menu>
              <MenuItem>카카오톡</MenuItem>
              <MenuItem>인스타그램</MenuItem>
            </Menu>
          </MenuContainer>
        </div>
      </Header>
    </div>
  ),
};

export const Mobile: Story = {
  render: () => (
    <Header>
      <Logo color="black" size={100} />
      <div className="ml-auto">
        <Icon width={20} name="list" />
      </div>
    </Header>
  ),
};
