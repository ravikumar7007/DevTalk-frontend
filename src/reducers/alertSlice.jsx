import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      return [...state, action.payload];
    },
    removeAlert: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
