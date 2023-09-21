import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import modalReducer from "./modalSlice";
import reactionsReducer from "./reactionSlice"

export const store = configureStore({
  reducer: {
    userToken: tokenReducer,
    modalState: modalReducer
  },
});
