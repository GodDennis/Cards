import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxComponent } from '@/components/ui/checkbox/checkbox'

const meta = {
  component: CheckboxComponent,
  tags: ['autodocs'],
  title: 'Components/CheckboxComponent',
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxStory: Story = {
  args: {
    text: 'fkfkkfkf',
  },
}
