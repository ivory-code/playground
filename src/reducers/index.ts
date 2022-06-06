import AsyncStorage from '@react-native-async-storage/async-storage'
import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import counter from '../stores/counter'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth'],
}

const reducers = combineReducers({
  counter: counter,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof reducers>

export const persistor = persistStore(store)
