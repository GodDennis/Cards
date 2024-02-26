import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RadioGroup } from './RadioGroup'

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
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryComponent = () => {
  const [radioValue, setRadioValue] = useState<string>('RadioGroup-1')

  return (
    <RadioGroup
      changeHandler={setRadioValue}
      name={'radio'}
      options={[
        { name: 'RadioGroup-1', value: 'RadioGroup-1' },
        { name: 'RadioGroup-2', value: 'RadioGroup-2' },
        { name: 'RadioGroup-3', value: 'RadioGroup-3' },
      ]}
      value={radioValue}
    />
  )
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
export const WithError: Story = {
  args: {
    changeHandler: undefined,
    defaultValue: 'RadioGroup-2',
    error: 'Some error occured',
    value: undefined,
  },
}
