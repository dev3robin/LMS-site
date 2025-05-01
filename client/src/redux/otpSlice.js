// features/otpSlice.js
import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    email: '',
    otp: '',
  },
  reducers: {
    setOtpData: (state, action) => {
      state.email = action.payload.email;
      state.otp = action.payload.otp;
    },
    resetOtpData: (state) => {
      state.email = '';
      state.otp = '';
    }
  }
});

export const { setOtpData, resetOtpData } = otpSlice.actions;
export default otpSlice.reducer;
