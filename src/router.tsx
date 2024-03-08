import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { SignIn } from './components/auth/signIn'
import { DeskPage } from './pages/deskPage'
import { LearnPage } from './pages/learnPage'

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
  {
    element: <LearnPage />,
    path: '/learn/:deckId',
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
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
