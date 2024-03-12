import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import s from './layout.module.scss'

import { Header } from './components/ui/header'
import { useGetAuthQuery } from './services/auth-api'

export const Layout = () => {
  const { data, isError, isFetching } = useGetAuthQuery()
  const isAuthenticated = !isError && !isFetching

  return (
    <div className={s.layoutContainer}>
      <Header auth={data} isAuthenticated={isAuthenticated} />
      <main className={s.main}>
        <Outlet context={isError} />
      </main>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
        theme={'colored'}
      />
    </div>
  )
}
