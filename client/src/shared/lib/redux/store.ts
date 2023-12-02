import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "@/features/auth/sign-in/SignInSlice";
import signUpReducer from "@/features/auth/sign-up/SignUpSlice";
import authReducer from "@/features/auth/authSlice";
import drawerReducer from "@/features/drawer/drawerSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    auth: authReducer,
    drawer: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
