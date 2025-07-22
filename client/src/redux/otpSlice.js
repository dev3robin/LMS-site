// features/otpSlice.js
import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    userName:'',
    email: '',
    otp: '',
    context:'',
    userRole:'',
    Status:''
  },
  reducers: {
    setOtpData: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.otp = action.payload.otp;
      state.context=action.payload.context
      state.userRole=action.payload.userRole
      state.Status=action.payload.Status
    },
    resetOtpData: (state) => {
      state.userName = '';
      state.email = '';
      state.otp = '';
      state.context=''
      state.userRole=''
      state.Status=''
    }
  }
});

export const { setOtpData, resetOtpData } = otpSlice.actions;
export default otpSlice.reducer;
