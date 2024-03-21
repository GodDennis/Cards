import { Link } from 'react-router-dom'

import s from './Logo.module.scss'

import logo from '../../../assets/Images/Logo.svg'
import { Typography } from '../typography'

export const Logo = () => {
  return (
    <div>
      <Typography as={Link} to={'/decks'}>
        <img alt={''} className={`${s.logo}`} src={logo} />
      </Typography>
    </div>
  )
}
