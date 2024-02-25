import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AddNewCard } from '@/layouts/modals/addNewCard/addNewCard'

const meta = {
  argTypes: {},
  component: AddNewCard,
  tags: ['autodocs'],
  title: 'Modals/AddNewCard',
} satisfies Meta<typeof AddNewCard>

export default meta
type Story = StoryObj<typeof meta>

const AddNewCardUsage = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      {open && <AddNewCard open={open} closeHandler={setOpen} />}
    </>
  )
}

export const AddNewDeckStory: Story = {
  render: () => <AddNewCardUsage />,
}
