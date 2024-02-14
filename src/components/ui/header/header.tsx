import s from './header.module.scss'

import nullphoto from '../../../assets/Images/nullPhoto.svg'
import { Button } from '../button'
import { Logo } from '../logo'
import { Typography } from '../typography'

type HeaderProps = {
  isLoggedIn: boolean
  user?: { avatar: null | string; name: string }
}

export const Header = (props: HeaderProps) => {
  const { isLoggedIn, user } = props
  const avatar = user?.avatar ? user?.avatar : nullphoto

  return (
    <header className={s.container}>
      <Logo />
      {isLoggedIn ? (
        <Button variant={'secondary'}>Sign in</Button>
      ) : (
        <div className={s.userBar}>
          <Typography as={'span'} className={s.userName} variant={'body1'}>
            {user?.name}
          </Typography>
          <span className={s.avatar}>
            <img alt={''} src={avatar} />
          </span>
        </div>
      )}
    </header>
  )
}
