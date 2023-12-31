import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "@/features/auth/sign-in/SignInSlice";
import signUpReducer from "@/features/auth/sign-up/SignUpSlice";
import authReducer from "@/features/auth/authSlice";
import purchaseDrawerReducer from "@/features/drawer/purchase/purchaseDrawerSlice";
import favoriteDrawerReducer from "@/features/drawer/favorite/favoriteDrawerSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    auth: authReducer,
    purchaseDrawer: purchaseDrawerReducer,
    favoriteDrawer: favoriteDrawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
