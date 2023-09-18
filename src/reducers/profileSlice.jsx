import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  errors: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      console.log("instate");
      return { ...state, profile: action.payload, loading: false };
    },
    profileError: (state, action) => {
      return { ...state, errors: action.payload, loading: false };
    },
  },
});

export const {getProfile,profileError}=profileSlice.actions;
export default profileSlice.reducer;
