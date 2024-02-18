import ContextMenu from '@/icons/contextMenu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { Avatar } from '../avatar/Avatar'
import { DropDownList } from './Drop-down-list'
import { UserBarDropDown } from './Drop-down-user-bar'

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
  burgerImage?: string
  list: dropDownMenuList[]
  userBarInfo?: userBarProps
  variant: 'avatar' | 'contextMenu'
}

export const DropDownMenu = (props: DropDownMenuProps) => {
  const { list, userBarInfo, variant = 'contextMenu' } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={'IconButton'}>
          {variant === 'contextMenu' ? (
            <ContextMenu />
          ) : (
            <Avatar className={s.avatar} src={userBarInfo?.avatar} />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} alignOffset={-5} className={`${s.menu}`} sideOffset={5}>
          {userBarInfo && <UserBarDropDown userBarInfo={userBarInfo} />}
          <DropDownList list={list} />
          <DropdownMenu.Arrow asChild className={s.dropdownMenuArrow}>
            <div className={s.arrow} />
          </DropdownMenu.Arrow>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
