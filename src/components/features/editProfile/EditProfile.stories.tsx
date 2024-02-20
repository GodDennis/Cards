import type { Meta, StoryObj } from '@storybook/react'

import { EditProfile } from './EditProfile'

const meta = {
  component: EditProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/EditProfile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Static: Story = {}
