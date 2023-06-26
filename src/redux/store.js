
import cartReducer from "./cartReducer";
// const stripe = require('stripe')('sk_test_51NGjZlFQZ4L5btaJsWr9oG4jJ9FLwxIrootNQnl6HTpsZWky1Yi439cTX6rQnYxuY4S44YkdApwe50iEw54q4xGK00FaqRFMWV');

import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {cart: persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)