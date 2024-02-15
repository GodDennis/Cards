import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  argTypes: {},
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleCard: Story = {}

export const DivCard: Story = {
  args: {
    as: 'div',
  },
}
