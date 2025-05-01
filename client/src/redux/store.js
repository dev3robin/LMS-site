
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import assesmentReducer from "./assesmentSlice"
import previewReducer from "./coursePreview"
import otpReducer from './otpSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    Assesment:assesmentReducer,
    preview:previewReducer,
    otp: otpReducer
  },
});
