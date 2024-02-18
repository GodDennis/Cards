import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from '@/components/auth/loginForm/loginForm'

const meta = {
  argTypes: {},
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Components/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoginFormStory: Story = {}
