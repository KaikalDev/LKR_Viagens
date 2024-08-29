import { configureStore } from '@reduxjs/toolkit'

import tripReducer from './reducers/trip'
import userReducer from './reducers/user'
import api from '../services/api'

export const Store = configureStore({
  reducer: {
    trip: tripReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof Store.getState>
