import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const greetingsURL = 'http://127.0.0.1:3000/api/v1/greetings';

const initialState = {
  greetings: [],
  status: 'idle',
  error: null,
};

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    try {
      const response = await axios.get(greetingsURL);
      return response.data;
    } catch (error) {
      return 'Please try again, something went wrong';
    }
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGreetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greetings = action.payload;
      })
      .addCase(getGreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
