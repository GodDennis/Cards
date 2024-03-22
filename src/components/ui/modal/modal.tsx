import { ComponentProps, ComponentRef, forwardRef } from 'react'

import { CloseCrossOutline } from '@/icons/close-cross-outline'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { Typography } from '../typography'

type ModalProps = {
  closeHandler: (isOpen: boolean) => void
  contentContainerClassName?: string
  open?: boolean
  overlayClassName?: string
  title: string
  withCloseBtn?: boolean
} & ComponentProps<'div'>

export const Modal = forwardRef<ComponentRef<'div'>, ModalProps>((props, ref) => {
  const {
    children,
    className,
    closeHandler,
    contentContainerClassName,
    open = false,
    overlayClassName,
    title,
    withCloseBtn = true,
  } = props
  const clickHandler = () => {
    closeHandler(false)
  }

  const classNames = {
    contentWrapper: clsx(s.contentWrapper, contentContainerClassName),
    dialogContent: clsx(s.dialogContent, className),
    dialogOverlay: clsx(s.dialogOverlay, overlayClassName),
    dialogTitle: s.dialogTitle,
    header: s.header,
    iconButton: s.iconButton,
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.dialogOverlay} />
        <Dialog.Content className={classNames.dialogContent} ref={ref}>
          <header className={classNames.header}>
            <Dialog.Title className={classNames.dialogTitle}>
              <Typography as={'span'} variant={'h2'}>
                {title}
              </Typography>
            </Dialog.Title>
            {withCloseBtn && (
              <Dialog.Close asChild>
                <button
                  aria-label={'Close'}
                  className={classNames.iconButton}
                  onClick={clickHandler}
                >
                  <CloseCrossOutline fill={'#fff'} />
                </button>
              </Dialog.Close>
            )}
          </header>
          <div className={classNames.contentWrapper}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
})
