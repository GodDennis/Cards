import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { DeleteModal } from '@/layouts/modals/deleteCard/deleteModal'

const meta = {
  argTypes: {},
  args: {
    title: '',
  },
  component: DeleteModal,
  tags: ['autodocs'],
  title: 'Modals/DeleteModal',
} satisfies Meta<typeof DeleteModal>

export default meta
type Story = StoryObj<typeof meta>

const DeleteCardUsage = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      {open && (
        <DeleteModal
          closeHandler={setOpen}
          elementType={'card'}
          open={open}
          removeHandler={() => setOpen(true)}
          title={'Remove card?'}
        />
      )}
    </>
  )
}

export const DeleteCardStory: Story = {
  render: () => <DeleteCardUsage />,
}
