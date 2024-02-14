import { ComponentProps } from 'react'

import { CloseCrossOutline } from '@/icons/close-cross-outline'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { Typography } from '../typography'

type ModalProps = {
  closeHandler: (isOpen: boolean) => void
  open?: boolean
  title: string
} & ComponentProps<'div'>

export const Modal = (props: ModalProps) => {
  const { children, className, closeHandler, open = false, title } = props
  const clickHandler = () => {
    closeHandler(false)
  }

  const classNames = {
    contentWtapper: clsx(s.contentWtapper, className),
    dialogContent: s.dialogContent,
    dialogOverlay: s.dialogOverlay,
    dialogTitle: s.dialogTitle,
    header: s.header,
    iconButton: s.iconButton,
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.dialogOverlay} />
        <Dialog.Content className={classNames.dialogContent}>
          <header className={classNames.header}>
            {/* tipogr! */}
            <Dialog.Title className={classNames.dialogTitle}>
              <Typography as={'span'} variant={'h2'}>
                {title}
              </Typography>
            </Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label={'Close'} className={classNames.iconButton} onClick={clickHandler}>
                <CloseCrossOutline fill={'#fff'} />
              </button>
            </Dialog.Close>
          </header>
          <div className={classNames.contentWtapper}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
