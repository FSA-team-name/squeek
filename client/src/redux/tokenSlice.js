import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    increment: (state) => {
      state.token = state;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = tokenSlice.actions

export default tokenSlice.reducer