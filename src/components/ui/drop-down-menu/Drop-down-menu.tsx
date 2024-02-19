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
  redirect: string
  src?: string
  title: string
}

type DropDownMenuProps = {
  align?: 'center' | 'end' | 'start'
  children?: ReactNode
  className?: string
  trigger?: ReactNode
}

export const DropDownMenu = (props: DropDownMenuProps) => {
  const { align = 'end', children, className, trigger } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={'IconButton'}>
          {trigger ? trigger : <ContextMenu />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          alignOffset={-5}
          className={`${s.menu} ${className}`}
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
