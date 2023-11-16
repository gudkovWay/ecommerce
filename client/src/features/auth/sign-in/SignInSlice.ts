import { createSlice } from "@reduxjs/toolkit";

export interface signInState {
  isOpen: boolean;
  currentStep: number;
}

const initialState: signInState = {
  isOpen: false,
  currentStep: 1,
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { openModal, closeModal, setCurrentStep } = signInSlice.actions;

export default signInSlice.reducer;
