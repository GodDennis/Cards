import type { Meta, StoryObj } from '@storybook/react'

import { withRedux } from '@/utils/decorators/rtk-sb-dec'
import { withRouter } from 'storybook-addon-react-router-v6'

import { DecksPage } from '.'

const meta = {
  argTypes: {},
  component: DecksPage,
  decorators: [withRouter, withRedux],
  tags: ['autodocs'],
  title: 'Pages/DeskPage',
} satisfies Meta<typeof DecksPage>

export default meta
type Story = StoryObj<typeof meta>

export const DeskLayout: Story = {}
