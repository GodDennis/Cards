import s from './Logo.module.scss'

import logo from '../../../assets/Images/Logo.svg'

export const Logo = () => {
  return (
    <div>
      <img alt={''} className={`${s.logo}`} src={logo} />
    </div>
  )
}
