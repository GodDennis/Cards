import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { AddNewDeck } from '@/layouts/modals/addNewDeck/AddNewDeck'

const meta = {
  argTypes: {},
  component: AddNewDeck,
  tags: ['autodocs'],
  title: 'Modals/AddNewDeck',
} satisfies Meta<typeof AddNewDeck>

export default meta
type Story = StoryObj<typeof meta>

const AddNewDeckUsage = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      {open && <AddNewDeck closeHandler={setOpen} open={open} />}
    </>
  )
}

export const AddNewDeckStory: Story = {
  render: () => <AddNewDeckUsage />,
}
