import type { Meta, StoryObj } from '@storybook/react'

import { Page404 } from '@/components/auth/page404/page404'

const meta = {
  argTypes: {},
  component: Page404,
  tags: ['autodocs'],
  title: 'Page404/Page404',
} satisfies Meta<typeof Page404>

export default meta
type Story = StoryObj<typeof meta>

export const Page404Story: Story = {}
