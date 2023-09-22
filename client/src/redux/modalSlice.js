import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  replyModal: false,
  reSqueekModal: false,
  loginModal: false,
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
      state.loginModal = false;
      state.squeek = null;
    },
    setReSqueekModal: (state, action) => {
      const { squeek } = action.payload;
      state.reSqueekModal = true;
      state.squeek = squeek;
    },
    setLoginModal: (state) => {
      state.loginModal = true;
    },
  },
});

export const { 
  setReplyModal,
  setReSqueekModal,
  resetModal,
  setLoginModal
} = modalSlice.actions;

export default modalSlice.reducer;
