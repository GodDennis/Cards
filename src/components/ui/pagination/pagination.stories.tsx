import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination'

const meta = {
  argTypes: {},
  args: {
    currentPage: 1,
    pageSize: 10,
    totalCount: 20,
    totalPages: 20,
  },
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PagonationStory: Story = {}
