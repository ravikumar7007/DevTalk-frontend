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
      return {
        ...state,
        errors: action.payload,
        loading: false,
        profile: null,
      };
    },
    clearProfile: (state, action) => {
      return { ...state, profile: null, loading: false, repos: [] };
    },
    updateProfile: (state, action) => {
      return { ...state, profile: action.payload, loading: false };
    },
    getAllProfiles: (state, action) => {
      return { ...state, profiles: action.payload, loading: false };
    },
    getRepos: (state, action) => {
      return { ...state, repos: action.payload };
    },
  },
});

export const {
  getProfile,
  profileError,
  clearProfile,
  updateProfile,
  getAllProfiles,
  getRepos,
} = profileSlice.actions;
export default profileSlice.reducer;
