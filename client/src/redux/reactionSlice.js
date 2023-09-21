import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: [],
  disliked: []
};

export const modalSlice = createSlice({
  name: "reactions",
  initialState,
  reducers: {
    setLiked: (state, action) => {
      state.liked += action.payload
    },
    setDisliked: (state, action) => {
      state.disliked += action.payload
    },
  },
});

export const { 
  setLiked,
  setDisliked
} = modalSlice.actions;

export default modalSlice.reducer;