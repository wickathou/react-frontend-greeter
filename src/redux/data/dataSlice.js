import { createSlice } from "@reduxjs/toolkit";

export const testFunction = (a,b) => {
  return a+b
}

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: 0
  },
  reducers: {
    increment:(state) =>{
      return {...state, value: state.value+1}
    }
  }
})

export const {increment} = dataSlice.actions

export default dataSlice.reducer