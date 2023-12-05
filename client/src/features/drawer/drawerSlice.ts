import { createSlice } from "@reduxjs/toolkit";

export interface drawerInitialState {
  counter: number;
  items: any[];
  isAdded: boolean;
}

const initialState: drawerInitialState = {
  counter: 0,
  items: [],
  isAdded: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.counter++;
      } else {
        state.items.push({
          ...action.payload,
          counter: 1,
          isAdded: true,
        });
      }
    },
    increment: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.counter++;
      }
    },
    decrement: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem.counter > 1) {
        findItem.counter--;
      }
    },
  },
});

export const { addItem, increment, decrement } = drawerSlice.actions;

export default drawerSlice.reducer;
