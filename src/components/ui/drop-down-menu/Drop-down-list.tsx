import { Link } from 'react-router-dom'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { dropDownMenuList } from '.'
import { Typography } from '../typography'

type Props = {
  list: dropDownMenuList[]
}

export const DropDownList = ({ list }: Props) => {
  const dropDownList = list.map((el, i) => {
    return (
      <DropdownMenu.Item className={s.menuItem} key={i}>
        <Typography
          as={Link}
          className={s.item}
          style={{ textDecoration: 'none' }}
          to={el.redirect}
          variant={'caption'}
        >
          {el.src && <img alt={''} src={el.src} />}
          {el.title}
        </Typography>
      </DropdownMenu.Item>
    )
  })

  return <>{dropDownList}</>
}
