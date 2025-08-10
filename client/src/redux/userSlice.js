import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
const loggedUD = JSON.parse(localStorage.getItem("loggedUD"));


const initialState = {
  isLoggedIn: !!isLoggedIn,
  loggedUD: loggedUD || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.loggedUD = action.payload.loggedUD;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("loggedUD", JSON.stringify(action.payload.loggedUD));

    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.loggedUD = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loggedUD"); 
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
