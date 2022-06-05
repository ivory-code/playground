import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import counter from '../stores/counter'

const reducers = combineReducers({
  counter: counter,
})

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof reducers>
