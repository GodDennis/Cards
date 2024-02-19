import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '../button'
import { Modal } from './modal'
import { ModalFooter } from './modal-footer'

const meta = {
  argTypes: {
    // changeHandler: {
    //   action: 'clicked',
    // },
  },
  args: {
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
      <Button onClick={() => setIsOpen(true)}>Trigger</Button>
      {isOpen && (
        <Modal closeHandler={setIsOpen} open={isOpen} title={'Test Modal'}>
          <div>hello world!</div>
        </Modal>
      )}
    </>
  )
}

const ServiceModalComponentWithFooter = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Trigger</Button>
      {isOpen && (
        <Modal closeHandler={setIsOpen} open={isOpen} title={'Test Modal'}>
          <div>hello world!</div>
          <ModalFooter>
            <Button variant={'secondary'}>Secondary</Button>
            <Button variant={'primary'}>Primary</Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  )
}

export const Primary: Story = {
  render: () => <ServiceModalComponent />,
}

export const WithFooter: Story = {
  render: () => <ServiceModalComponentWithFooter />,
}

const ServiceModalOverflow = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Trigger</Button>
      {isOpen && (
        <Modal closeHandler={setIsOpen} open={isOpen} title={'Test Modal'}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Modal>
      )}
    </>
  )
}

export const Overflow: Story = {
  render: () => <ServiceModalOverflow />,
}
