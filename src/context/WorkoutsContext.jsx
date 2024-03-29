import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload),
      };
    case "EDIT_WORKOUT":
      const updatedWorkoutIndex = state.workouts.findIndex(
        (w) => w._id === action.payload._id
      );

      if (updatedWorkoutIndex !== -1) {
        const updatedWorkouts = [...state.workouts];
        updatedWorkouts[updatedWorkoutIndex] = action.payload;

        return {
          workouts: updatedWorkouts,
        };
      }

      // If the workout is not found, return the current state
      return state;
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: [],
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
