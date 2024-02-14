import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '.'

const meta = {
  argTypes: {},
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Logo',
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
