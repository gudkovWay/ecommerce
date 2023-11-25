import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  isAuth: boolean;
  token: string;
}

const initialState: authState = {
  isAuth: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setAuth, setToken } = authSlice.actions;
export default authSlice.reducer;
