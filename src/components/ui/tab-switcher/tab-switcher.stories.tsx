import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './tab-switcher'

const meta = {
  argTypes: {},
  component: TabSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
