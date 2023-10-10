import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action);

      // state.user = action.payload.user;
      // state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    //   .addCase(login, (state, action) => {})
    //   .addCase(logout, (state, action) => {})
    //   .addCase(refresh, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
