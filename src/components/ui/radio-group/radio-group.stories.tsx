import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group'

const meta = {
  argTypes: {
    changeHandler: {
      action: 'clicked',
    },
  },
  args: {
    name: 'radio',
    options: [
      { name: 'RadioGroup-1', value: 'RadioGroup-1' },
      { name: 'RadioGroup-2', value: 'RadioGroup-2' },
      { name: 'RadioGroup-3', value: 'RadioGroup-3' },
    ],
    value: 'RadioGroup-1',
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
