// import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/dataSlice";

// export default configureStore({
//   reducer: {
//     data: dataReducer
//   }
// })

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './users/usersSlice'
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer
})

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}