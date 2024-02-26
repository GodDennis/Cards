import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6'

import { QuestionCard } from './'

const meta = {
  argTypes: {},
  component: QuestionCard,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'features/QuestionCard',
} satisfies Meta<typeof QuestionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <div style={{ height: '100vh', width: '100%' }}>
      <QuestionCard />
    </div>
  ),
}
