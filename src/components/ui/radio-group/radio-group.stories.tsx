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
    options: [{ value: 'RadioGroup-1' }, { value: 'RadioGroup-2' }, { value: 'RadioGroup-3' }],
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
