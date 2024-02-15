import { NavLink } from 'react-router-dom'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { dropDownMenuList } from '.'
import { Typography } from '../typography'

type Props = {
  list: dropDownMenuList[]
}

export const DropDownList = ({ list }: Props) => {
  const dropDownList = list.map(el => {
    return (
      <DropdownMenu.Item key={el.id}>
        <NavLink className={s.item} style={{ textDecoration: 'none' }} to={el.redirect}>
          {el.src && <img alt={''} src={el.src} />}
          <Typography as={'span'} variant={'caption'}>
            {el.title}
          </Typography>
        </NavLink>
      </DropdownMenu.Item>
    )
  })

  return <>{dropDownList}</>
}
