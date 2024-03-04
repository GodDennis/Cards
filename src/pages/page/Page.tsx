import { ReactNode } from 'react'

import { Header } from '@/components/ui/header'

import s from './page.module.scss'

type PageProps = {
  children: ReactNode
  isLoggedIn: boolean
}

export const Page = ({ children, isLoggedIn }: PageProps) => {
  return (
    <div className={s.pageWrapper}>
      <Header isLoggedIn={isLoggedIn} />
      <main className={s.main}>{children}</main>
    </div>
  )
}
