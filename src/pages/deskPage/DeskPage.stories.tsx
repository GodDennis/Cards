import type { Meta, StoryObj } from '@storybook/react'

import { DeskPage } from '.'
import { withRouter } from 'storybook-addon-react-router-v6'
import { withRedux } from '@/utils/decorators/rtk-sb-dec'

const meta = {
  argTypes: {},
  component: DeskPage,
  decorators: [withRouter, withRedux],
  tags: ['autodocs'],
  title: 'Pages/DeskPage',
} satisfies Meta<typeof DeskPage>

export default meta
type Story = StoryObj<typeof meta>

export const DeskLayout: Story = {}
