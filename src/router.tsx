import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useOutletContext,
} from 'react-router-dom'

import { Layout } from './Layout'
import { VerifyEmail } from './components/auth/VerificationEmail'
import { CheckEmail } from './components/auth/checkEmail'
import { CreateNewPassword } from './components/auth/create-new-password'
import { ForgotPassword } from './components/auth/forgot-password'
import { Page404 } from './components/auth/page404'
import { SignIn } from './components/auth/signIn'
import { SignUp } from './components/auth/signUp'
import { Deck } from './pages/deck'
import { DecksPage } from './pages/deckPage'
import { QuestionCard } from './pages/questionCard'

export const publicRouts: RouteObject[] = [
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
  {
    element: <ForgotPassword />,
    path: '/forgot-password',
  },
  {
    element: <CreateNewPassword />,
    path: 'recover-password/:token',
  },
  {
    element: <VerifyEmail />,
    path: '/verify-email/:code',
  },
  {
    element: <Page404 />,
    path: '/404',
  },
]

const privatRouts: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/decks/:pageCount',
  },
  {
    element: <Navigate to={'/decks/1'} />,
    path: '/',
  },
  {
    element: <QuestionCard />,
    path: '/learn/:deckId',
  },
  {
    element: <Deck />,
    path: '/deck/:deckId/:pageCount',
  },
  {
    element: <Page404 />,
    path: '/404',
  },
  {
    element: <Navigate to={'/404'} />,
    path: '/*',
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privatRouts,
        element: <PrivateRoutes />,
      },
      {
        children: publicRouts,
        element: <PublicRoutes />,
      },
    ],
    element: <Layout />,
  },
])

function PrivateRoutes() {
  const isAuthenticated = useOutletContext()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
function PublicRoutes() {
  const isAuthenticated = useOutletContext()

  return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
