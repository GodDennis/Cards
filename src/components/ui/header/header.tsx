import { useState } from 'react'
import { Link } from 'react-router-dom'

import { LogOutOutline } from '@/icons/LogOutOutline'
import { Profile } from '@/icons/Profile'
import { useLogoutMutation } from '@/services/auth-api'

import s from './header.module.scss'

import { Button } from '../button'
import { HeaderDropDown } from '../drop-down-menu/headerDropDown'
import { Logo } from '../logo'
import { Typography } from '../typography'

type Props = {
  auth: any
  isAuthenticated: boolean
}

export const Header = ({ auth, isAuthenticated }: Props) => {
  const [logout] = useLogoutMutation()
  const [isOpen, setIsOpen] = useState(false)

  const onOpenChange = () => {
    setIsOpen(prev => !prev)
  }
  const options = [
    {
      icon: <Profile />,
      onClick: onOpenChange,
      redirect: '/profile',
      title: 'My Profile',
    },
    {
      icon: <LogOutOutline />,
      onClick: () => {
        onOpenChange()
        logout()
      },
      redirect: '/login',
      title: 'Sign Out',
    },
  ]

  return (
    <header className={s.container}>
      <div className={s.content}>
        <Logo />
        {isAuthenticated ? (
          <div className={s.userBar}>
            <Typography as={'span'} className={s.userName} variant={'body1'}>
              {auth?.name}
            </Typography>

            <HeaderDropDown
              avatar={auth?.avatar}
              email={auth?.email}
              id={auth?.id}
              onClose={() => {
                setIsOpen(false)
              }}
              onOpenChange={onOpenChange}
              open={isOpen}
              options={options}
              userName={auth?.name}
            />
          </div>
        ) : (
          <Button as={Link} to={'/login'} variant={'secondary'}>
            Sign in
          </Button>
        )}
      </div>
    </header>
  )
}
