import type { Meta, StoryObj } from '@storybook/react'

import { withRedux } from '@/utils/decorators/rtk-sb-dec'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Header } from '.'

const meta = {
  argTypes: {
    isLoggedIn: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },

  component: Header,
  decorators: [withRedux, withRouter],
  parameters: {
    layout: 'full',
  },
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {}
export const Logged: Story = {}
