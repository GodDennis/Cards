import { ComponentProps } from 'react'

import { CloseCrossOutline } from '@/icons/close-cross-outline'
import * as Dialog from '@radix-ui/react-dialog'

type ModalProps = {
  open?: boolean
  title: string
  toggleOpenHandler: (isOpen: boolean) => void
} & ComponentProps<'div'>

export const Modal = (props: ModalProps) => {
  const { children, className, open = false, title, toggleOpenHandler } = props
  const clickHandler = () => {
    toggleOpenHandler(false)
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={'DialogOverlay'} />
        <Dialog.Content className={'DialogContent'}>
          <header>
            <Dialog.Title className={'DialogTitle'}>{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label={'Close'} className={'IconButton'} onClick={clickHandler}>
                <CloseCrossOutline />
              </button>
            </Dialog.Close>
          </header>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
