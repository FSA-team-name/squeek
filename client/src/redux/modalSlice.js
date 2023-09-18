import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  replyModal: false,
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
    resetReplyModal: (state) => {
      state.replyModal = false;
      state.squeek = null;
    },
  },
});

export const { setReplyModal, resetReplyModal } = modalSlice.actions;

export default modalSlice.reducer;
