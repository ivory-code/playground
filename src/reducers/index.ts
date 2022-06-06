import AsyncStorage from '@react-native-async-storage/async-storage'
import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
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
})

export type RootState = ReturnType<typeof reducers>

export const persistor = persistStore(store)
