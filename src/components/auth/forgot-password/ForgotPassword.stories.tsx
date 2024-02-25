import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6'

import { ForgotPassword } from './ForgotPassword'

const meta = {
  argTypes: {},
  args: {},
  component: ForgotPassword,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
