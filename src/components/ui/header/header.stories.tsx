import type { Meta, StoryObj } from '@storybook/react'

import ivan from '@/assets/Images/ivan.jpeg'

import { Header } from '.'

const meta = {
  argTypes: {
    isLoggedIn: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },

  component: Header,
  parameters: {
    layout: 'full',
  },
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: { isLoggedIn: true },
}
export const Logged: Story = {
  args: {
    isLoggedIn: false,
    user: {
      avatar: ivan,
      name: 'Ivan',
    },
  },
}
