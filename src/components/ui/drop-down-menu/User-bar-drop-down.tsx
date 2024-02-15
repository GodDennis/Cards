import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { userBarProps } from '.'
import { Typography } from '../typography'

type Props = {
  userBarInfo: userBarProps
}

export const UserBarDropDown = ({ userBarInfo }: Props) => {
  const { avatar, email, id, userName } = userBarInfo

  return (
    <DropdownMenu.Item className={`${s.item} ${s.modefiedItem}`} key={id}>
      <img alt={''} className={s.avatar} src={avatar} />
      <div className={s.flexContainer}>
        <Typography as={'span'} variant={'subtitle2'}>
          {userName}
        </Typography>
        <Typography as={'span'} className={s.colorDark} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </DropdownMenu.Item>
  )
}
