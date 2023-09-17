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
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoaded: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
     
    },
    regSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    },
    regFailed: (state, action) => closeAuth(state, action),
    authError: (state, action) => closeAuth(state, action),
  },
});
export const { userLoaded, regSuccess, regFailed, authError } =
  authSlice.actions;
export default authSlice.reducer;
