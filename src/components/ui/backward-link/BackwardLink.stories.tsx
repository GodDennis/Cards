import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6'

import { BackwardLink } from './'

const meta = {
  argTypes: {},
  component: BackwardLink,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/BackwardLink',
} satisfies Meta<typeof BackwardLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Back to Decks List',
    to: '/back',
  },
}
