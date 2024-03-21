import { ReactNode } from 'react'

import { ContextMenu } from '@/icons/contextMenu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

export type userBarProps = {
  avatar: string
  email: string
  id: number
  userName: string
}

export type dropDownMenuList = {
  icon: ReactNode
  onClick?: () => void
  redirect?: string
  title: string
}

type DropDownMenuProps = {
  align?: 'center' | 'end' | 'start'
  children?: ReactNode
  className?: string
  onClose?: () => void
  onOpenChange?: () => void
  open?: boolean
  trigger?: ReactNode
}

export const DropDownMenu = (props: DropDownMenuProps) => {
  const { align = 'end', children, className, onClose, onOpenChange, open, trigger } = props

  const onClickTrigger = () => {
    onOpenChange?.()
  }

  return (
    <DropdownMenu.Root open={open}>
      <DropdownMenu.Trigger asChild onClick={onClickTrigger}>
        <button aria-label={'Customise options'} className={s.iconButton}>
          {trigger ? trigger : <ContextMenu />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          alignOffset={-5}
          className={`${s.menu} ${className}`}
          onPointerDownOutside={onClose}
          sideOffset={5}
        >
          {children}
          <DropdownMenu.Arrow asChild className={s.dropdownMenuArrow}>
            <div className={s.arrow} />
          </DropdownMenu.Arrow>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
