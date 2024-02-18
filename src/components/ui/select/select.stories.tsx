import type { Meta, StoryObj } from '@storybook/react'
import { SelectDemo } from '@/components/ui/select'

const meta = {
  argTypes: {},
  component: SelectDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/SelectDemo',
} satisfies Meta<typeof SelectDemo>

export default meta
type Story = StoryObj<typeof meta>

export const SelectStory: Story = {}
