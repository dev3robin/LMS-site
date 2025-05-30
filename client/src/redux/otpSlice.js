// features/otpSlice.js
import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    userName:'',
    email: '',
    otp: '',
    context:''
  },
  reducers: {
    setOtpData: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.otp = action.payload.otp;
      state.context=action.payload.context
    },
    resetOtpData: (state) => {
      state.userName = '';
      state.email = '';
      state.otp = '';
      state.context=''
    }
  }
});

export const { setOtpData, resetOtpData } = otpSlice.actions;
export default otpSlice.reducer;
