import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { SignIn } from './components/auth/signIn'
import { DeskPage } from './pages/deskPage'

const publicRouts: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/login',
  },
]

const privatRouts: RouteObject[] = [
  {
    element: <DeskPage />,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privatRouts,
    element: <PrivateRoutes />,
  },
  ...publicRouts,
])

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
