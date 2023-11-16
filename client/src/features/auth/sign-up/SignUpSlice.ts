import { createSlice } from "@reduxjs/toolkit";

export interface signUpState {
  isOpen: boolean;
  currentStep: number;
}

const initialState: signUpState = {
  isOpen: false,
  currentStep: 1,
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialState,
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

export const { openModal, closeModal, setCurrentStep } = signUpSlice.actions;

export default signUpSlice.reducer;
