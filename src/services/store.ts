import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
