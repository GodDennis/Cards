import type { Meta, StoryObj } from '@storybook/react'

import SliderDemo from '@/components/ui/slider/slider'

const meta = {
  component: SliderDemo,
  tags: ['autodocs'],
  title: 'Components/SliderDemo',
} satisfies Meta<typeof SliderDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {}
