import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  id: null,
  username: null,
  user: null,
}

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { setToken, setUser } = tokenSlice.actions;

export default tokenSlice.reducer;