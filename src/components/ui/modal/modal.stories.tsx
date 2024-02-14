import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Modal } from './modal'

const meta = {
  argTypes: {
    // changeHandler: {
    //   action: 'clicked',
    // },
  },
  args: {
    // open: false,
    title: 'Test Modal',
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const ServiceModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Trigger</button>
      {isOpen && <Modal open={isOpen} title={'Test Modal'} toggleOpenHandler={setIsOpen} />}
    </>
  )
}

export const Primary: Story = {
  render: () => <ServiceModalComponent />,
}

// export const Primary: Story = {
//   args: {},
// }
