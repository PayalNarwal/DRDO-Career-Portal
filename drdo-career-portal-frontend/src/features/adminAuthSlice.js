import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdminLoggedIn: false,
  admin: null,
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    adminLoginSuccess: (state, action) => {
      state.isAdminLoggedIn = true;
      state.admin = action.payload.admin;
    },
    adminLogout: (state) => {
      state.isAdminLoggedIn = false;
      state.admin = null;
    },
  },
});

export const { adminLoginSuccess, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
