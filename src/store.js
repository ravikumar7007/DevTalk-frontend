import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./reducers/alert/alertSlice";



const store = configureStore({
  reducer:{
    alert:alertSlice,
    
  }
});

export default store;
