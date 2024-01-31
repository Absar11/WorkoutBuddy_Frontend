import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import workoutSlice from "./slices/workoutSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    workout: workoutSlice,
  },
});

export default store;
