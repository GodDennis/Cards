import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6'

import { MyDeck } from '.'

const meta = {
  argTypes: {},
  component: MyDeck,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Pages/Deck',
} satisfies Meta<typeof MyDeck>

export default meta
type Story = StoryObj<typeof meta>

export const MyDeckLayout: Story = {}
