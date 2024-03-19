import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '@/components/auth/checkEmail'

const meta = {
  argTypes: {},
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailStory: Story = {}
