import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./reducers/alertSlice";
import authSlice from "./reducers/authSlice";
import profileSlice from "./reducers/profileSlice";
import postSlice from "./reducers/postSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    auth: authSlice,
    profile: profileSlice,
    post: postSlice,
  },
});

export default store;
