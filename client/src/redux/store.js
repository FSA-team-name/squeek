import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import modalReducer from './modalSlice'


export const store = configureStore({
  reducer: {
    userToken: tokenReducer,
    modalState: modalReducer
  },
})