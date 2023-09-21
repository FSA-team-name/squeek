import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  id: null,
  username: null,
}

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;