import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from './Layout'
import { CheckEmail } from './components/auth/checkEmail'
import { SignIn } from './components/auth/signIn'
import { SignUp } from './components/auth/signUp'
import { DeskPage } from './pages/deskPage'
import { LearnPage } from './pages/learnPage'

const publicRouts: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/login',
  },
  {
    element: <SignUp />,
    path: '/signUp',
  },
  {
    element: <CheckEmail />,
    path: '/checkEmail/:email',
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

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privatRouts,
        element: <PrivateRoutes />,
      },
      ...publicRouts,
    ],
    element: <Layout />,
  },
])

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
