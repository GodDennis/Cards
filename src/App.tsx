import { Provider } from 'react-redux'

import { Header } from '@/components/ui/header'

import { Router } from './router'
import { store } from './services/store'

function App() {
  return (
    <Provider store={store}>
      <Header isLoggedIn={false} />
      <Router />
    </Provider>
  )
}

export default App
