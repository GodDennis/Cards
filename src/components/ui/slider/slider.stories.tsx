import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './index'

const meta = {
  args: { maxValue: 60, minValue: 1, value: [10, 60] },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderStory: Story = {}
