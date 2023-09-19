import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};
function closeAuth(state, action) {

  localStorage.removeItem("token");
  return {
    ...state,
    token: null,
    isAuthenticated: false,
    loading: false,
    user: null,
  };
}

function getToken(state, action) {

  localStorage.setItem("token", action.payload.token);
  return {
    ...state,
    ...action.payload,
    isAuthenticated: true,
    loading: false,
  };
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoaded: (state, action) => {
      
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    },
    regSuccess: (state, action) => getToken(state, action),
    loggedIn: (state, action) => getToken(state, action),
    regFailed: (state, action) => closeAuth(state, action),
    loggedOut: (state, action) => closeAuth(state, action),
    authError: (state, action) => closeAuth(state, action),
  },
});
export const {
  userLoaded,
  regSuccess,
  loggedIn,
  regFailed,
  loggedOut,
  authError,
} = authSlice.actions;
export default authSlice.reducer;
