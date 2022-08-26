import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || "",
    isLoggedIn: localStorage.getItem("token") ? true : false,
 //هدول بدي اعملللهم شير لكل الملفات
  },
  reducers: {
    // payload :token
    loginAction: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
      state.isLoggedIn = true;
    },

    logoutAction: (state, action) => {
      localStorage.clear();
      state.token = null;
      state.isLoggedIn = false;
      state.isAdmin=false
    }
    
  },
});
export const { logoutAction, loginAction } = auth.actions;

export default auth.reducer;