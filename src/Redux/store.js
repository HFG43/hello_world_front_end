import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './Slices/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
