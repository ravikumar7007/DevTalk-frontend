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
      return { ...state, profile: action.payload, loading: false };
    },
    profileError: (state, action) => {
      return { ...state, errors: action.payload, loading: false };
    },
    clearProfile: (state, action) => {
      return { ...state, profile: null, loading: false, repos: [] };
    },
  },
});

export const { getProfile, profileError ,clearProfile} = profileSlice.actions;
export default profileSlice.reducer;
