import { ComponentProps, ComponentRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './modal-footer.module.scss'

type Props = {
  children: ReactNode
  className?: string
} & ComponentProps<'footer'>

export const ModalFooter = forwardRef<ComponentRef<'footer'>, Props>(
  ({ children, className }, ref) => {
    return (
      <footer className={clsx(s.footer, className)} ref={ref}>
        {children}
      </footer>
    )
  }
)
