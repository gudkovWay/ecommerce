import { createSlice } from "@reduxjs/toolkit";

export interface drawerInitialState {
  counter: number;
  items: any[];
}

const initialState: drawerInitialState = {
  counter: 1,
  items: [],
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.counter++;
      }
    },
    decrement: (state) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem.counter > 1) {
        findItem.counter--;
      }
    },
  },
});

export const { increment, decrement } = drawerSlice.actions;

export default drawerSlice.reducer;
