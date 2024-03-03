import type { Meta, StoryObj } from '@storybook/react'

import { FriendsDeck } from '.'
import { withRouter } from 'storybook-addon-react-router-v6'
const meta = {
  argTypes: {},
  component: FriendsDeck,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Pages/FriendsDeck',
} satisfies Meta<typeof FriendsDeck>

export default meta
type Story = StoryObj<typeof meta>

export const FriendsDeckLayout: Story = {}
