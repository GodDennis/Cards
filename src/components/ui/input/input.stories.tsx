import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/ui/input/input'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['simple', 'password', 'search'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    disabled: false,
    placeholder: 'Simple Checkbox',
    variant: 'simple',
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    error: 'Error',
    placeholder: 'Error Checkbox',
    variant: 'simple',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    placeholder: 'Input',
    variant: 'password',
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    placeholder: 'Input',
    variant: 'search',
  },
}
