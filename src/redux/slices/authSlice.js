import { createSlice } from "@reduxjs/toolkit";
const storedToken = localStorage.getItem("authToken");

const initialState = {
  isLoggedIn: !!storedToken,
  token: storedToken || "",
  user: null,
  user_id: null,
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn } = authSlice.actions;

export default authSlice.reducer;
