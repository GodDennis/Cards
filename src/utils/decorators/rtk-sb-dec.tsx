import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { baseApi } from '@/services/base-api'
import { configureStore } from '@reduxjs/toolkit'

const sbStore = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
})

export const withRedux = (Story: () => ReactNode) => (
  <Provider store={sbStore}>
    <Story />
  </Provider>
)
