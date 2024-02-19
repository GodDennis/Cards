import type { Meta, StoryObj } from '@storybook/react'

import { EditableAvatar } from './editableAvatar'

const meta = {
  component: EditableAvatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof EditableAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Editable: Story = {}
