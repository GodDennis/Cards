import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PagonationStory: Story = {}
