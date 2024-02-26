import type { Meta, StoryObj } from '@storybook/react'

import { QuestionCard } from './'

const meta = {
  argTypes: {},
  component: QuestionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/QuestionCard',
} satisfies Meta<typeof QuestionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
