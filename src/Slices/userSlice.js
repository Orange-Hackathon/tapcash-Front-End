import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  expirationDate: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      // localStorage.clear();
      state.userName = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
