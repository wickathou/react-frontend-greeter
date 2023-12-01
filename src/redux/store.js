import { combineReducers, configureStore } from '@reduxjs/toolkit'
import greetingReducer from './greeting/greetingSlice'

const rootReducer = combineReducers({
  greeting: greetingReducer,
})

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}