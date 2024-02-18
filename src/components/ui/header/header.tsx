import s from './header.module.scss'

import { Avatar } from '../avatar/Avatar'
import { Button } from '../button'
import { Logo } from '../logo'
import { Typography } from '../typography'

type HeaderProps = {
  isLoggedIn: boolean
  user?: { avatar: null | string; name: string }
}

export const Header = (props: HeaderProps) => {
  const { isLoggedIn, user } = props

  return (
    <header className={s.container}>
      <Logo />
      {isLoggedIn ? (
        <div className={s.userBar}>
          <Typography as={'span'} className={s.userName} variant={'body1'}>
            {user?.name}
          </Typography>
          <Avatar src={user?.avatar} />
        </div>
      ) : (
        <Button variant={'secondary'}>Sign in</Button>
      )}
    </header>
  )
}
