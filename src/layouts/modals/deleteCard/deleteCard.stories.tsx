import type { Meta, StoryObj } from '@storybook/react'
import { DeleteCard } from '@/layouts/modals/deleteCard/deleteCard'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const meta = {
  argTypes: {},
  component: DeleteCard,
  tags: ['autodocs'],
  title: 'Modals/DeleteCard',
} satisfies Meta<typeof DeleteCard>

export default meta
type Story = StoryObj<typeof meta>

const DeleteCardUsage = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      {open && <DeleteCard closeHandler={setOpen} open={open} />}
    </>
  )
}

export const DeleteCardStory: Story = {
  render: () => <DeleteCardUsage />,
}
