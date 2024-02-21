import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './ForgotPassword'

const meta = {
  argTypes: {},
  args: {},
  component: ForgotPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
