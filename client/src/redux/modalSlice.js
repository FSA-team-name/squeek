import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  replyModal: false,
  reSqueekModal: false,
  squeek: null,
};

export const modalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    setReplyModal: (state, action) => {
      const { squeek } = action.payload;
      state.replyModal = true;
      state.squeek = squeek;
    },
    resetModal: (state) => {
      state.replyModal = false;
      state.reSqueekModal = false;
      state.squeek = null;
    },
    setReSqueekModal: (state, action) => {
      const { squeek } = action.payload;
      state.reSqueekModal = true;
      state.squeek = squeek;
    },
  },
});

export const { 
  setReplyModal,
  setReSqueekModal,
  resetModal
} = modalSlice.actions;

export default modalSlice.reducer;
