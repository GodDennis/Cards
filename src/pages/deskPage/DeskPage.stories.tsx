import type { Meta, StoryObj } from '@storybook/react'

import { DeskPage } from '.'
const meta = {
  argTypes: {},
  component: DeskPage,
  tags: ['autodocs'],
  title: 'Pages/DeskPage',
} satisfies Meta<typeof DeskPage>

export default meta
type Story = StoryObj<typeof meta>

export const DeskLayout: Story = {}
