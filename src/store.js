import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./reducers/alertSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    auth: authSlice,
  },
});

export default store;
