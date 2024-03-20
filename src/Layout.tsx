import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import s from './layout.module.scss'

import { Header } from './components/ui/header'
import { Loader } from './components/ui/loader/Loader'
import { useGetAuthQuery } from './services/auth-api'

export const Layout = () => {
  const { data, isError, isLoading } = useGetAuthQuery()
  const isAuthenticated = !isError && !isLoading

  return (
    <div className={s.layoutContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {' '}
          <Header auth={data} isAuthenticated={isAuthenticated} />
          <main className={s.main}>
            <Outlet context={isAuthenticated} />
          </main>
        </>
      )}

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
