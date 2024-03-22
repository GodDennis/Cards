import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Ava: Story = {
  args: {
    src: null,
  },
}
