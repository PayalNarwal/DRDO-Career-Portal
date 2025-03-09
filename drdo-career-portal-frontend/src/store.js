import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import adminAuthReducer from "./features/adminAuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminAuth: adminAuthReducer,
  },
});
