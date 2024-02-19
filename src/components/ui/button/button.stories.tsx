import type { Meta, StoryObj } from '@storybook/react'

import { LogOutOutline } from '@/icons/LogOutOutline'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    disabled: false,
    variant: 'primary',
  },
  render: () => (
    <Button>
      <LogOutOutline fill={'white'} />
      Primary Button
    </Button>
  ),
}

export const SecondaryWithIcon: Story = {
  args: {
    disabled: false,
    variant: 'secondary',
  },
  render: () => (
    <Button variant={'secondary'}>
      <LogOutOutline fill={'white'} />
      Secondary Button
    </Button>
  ),
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
