import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./reducers/alertSlice";
import authSlice from "./reducers/authSlice";
import profileSlice from "./reducers/profileSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    auth: authSlice,
    profile: profileSlice,
  },
});

export default store;
