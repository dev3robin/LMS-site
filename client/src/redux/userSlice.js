import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
const userId = localStorage.getItem("userId");

const initialState = {
  isLoggedIn: !!isLoggedIn,
  userId: userId || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userId", action.payload.userId); 
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userId"); 
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
