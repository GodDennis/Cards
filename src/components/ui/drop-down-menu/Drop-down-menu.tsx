import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import s from './drop-down-menu.module.scss'

import { DropDownList } from './Drop-down-list'
import { UserBarDropDown } from './User-bar-drop-down'

export type userBarProps = {
  avatar: string
  email: string
  id: number
  userName: string
}

export type dropDownMenuList = {
  id?: number
  redirect: string
  src?: string
  title: string
}

type DropDownMenuProps = {
  list: dropDownMenuList[]
  userBarInfo?: userBarProps
}

export const DropDownMenu = (props: DropDownMenuProps) => {
  const { list, userBarInfo } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={'IconButton'}>
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={`${s.menu}`} sideOffset={5}>
          {userBarInfo && <UserBarDropDown userBarInfo={userBarInfo} />}
          <DropDownList list={list} />

          <DropdownMenu.Arrow className={'DropdownMenuArrow'} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
