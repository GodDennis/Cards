import { Outlet } from 'react-router-dom'

import s from './layout.module.scss'

import { Header } from './components/ui/header'

export const Layout = () => {
  return (
    <div className={s.layoutContainer}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
}
