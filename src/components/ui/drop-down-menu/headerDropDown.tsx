import { DropDownMenu, dropDownMenuList } from '.'
import { Avatar } from '../avatar/Avatar'
import { DropDownList } from './Drop-down-list'
import { UserBarDropDown } from './Drop-down-user-bar'

export type Props = {
  avatar: string
  email: string
  id: number
  onClose: () => void
  onOpenChange: () => void
  open: boolean
  options: dropDownMenuList[]
  userName: string
}
export const HeaderDropDown = ({
  avatar,
  email,
  id,
  onClose,
  onOpenChange,
  open,
  options,
  userName,
}: Props) => {
  return (
    <DropDownMenu
      onClose={onClose}
      onOpenChange={onOpenChange}
      open={open}
      trigger={<Avatar src={avatar} />}
    >
      <UserBarDropDown avatar={avatar} email={email} id={id} userName={userName} />
      <DropDownList options={options} />
    </DropDownMenu>
  )
}
