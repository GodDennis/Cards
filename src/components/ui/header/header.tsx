import logOut from '@/assets/Images/log-out.svg'
import person from '@/assets/Images/person-outline.svg'
import { useGetAuthQuery, useLogoutMutation } from '@/services/auth-api'

import s from './header.module.scss'

import { Button } from '../button'
import { HeaderDropDown } from '../drop-down-menu/headerDropDown'
import { Logo } from '../logo'
import { Typography } from '../typography'

export const Header = () => {
  const { data: isAuth, isError: isAuthError, isFetching: isAuthFetching } = useGetAuthQuery()
  const [logout] = useLogoutMutation()

  console.log(!isAuthError)

  const options = [
    { redirect: '/profile', src: person, title: 'My Profile' },
    {
      onClick: () => {
        logout()
      },
      redirect: '/login',
      src: logOut,
      title: 'Sign Out',
    },
  ]

  return (
    <header className={s.container}>
      <div className={s.content}>
        <Logo />
        {!isAuthError && !isAuthFetching ? (
          <div className={s.userBar}>
            <Typography as={'span'} className={s.userName} variant={'body1'}>
              {isAuth?.name}
            </Typography>

            <HeaderDropDown
              avatar={isAuth?.avatar}
              email={isAuth?.email}
              id={isAuth?.id}
              options={options}
              userName={isAuth?.name}
            />
          </div>
        ) : (
          <Button variant={'secondary'}>Sign in</Button>
        )}
      </div>
    </header>
  )
}
