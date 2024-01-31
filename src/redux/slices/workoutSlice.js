import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    setWorkout(state, action) {
      state.workouts = action.payload;
    },
    createWorkout(state, action) {
      state.workouts.unshift(action.payload);
    },
    deleteWorkout(state, action) {
      state.workouts = state.workouts.filter((w) => w._id !== action.payload);
    },
    editWorkout(state, action) {
      const updatedWorkoutIndex = state.workouts.findIndex(
        (w) => w._id === action.payload._id
      );

      if (updatedWorkoutIndex !== -1) {
        state.workouts[updatedWorkoutIndex] = action.payload;
      }
    },
  },
});

export const { setWorkout, createWorkout, deleteWorkout, editWorkout } =
  workoutSlice.actions;

export default workoutSlice.reducer;
