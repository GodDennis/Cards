import type { Meta, StoryObj } from '@storybook/react'

import { withRedux } from '@/utils/decorators/rtk-sb-dec'
import { withRouter } from 'storybook-addon-react-router-v6'

import { QuestionCard } from '.'

const meta = {
  argTypes: {},
  component: QuestionCard,
  decorators: [withRouter, withRedux],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Pages/QuestionCard',
} satisfies Meta<typeof QuestionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { deckId: 'id' },
  render: () => (
    <div style={{ height: '100vh', width: '100%' }}>
      <QuestionCard deckId={'id'} />
    </div>
  ),
}
