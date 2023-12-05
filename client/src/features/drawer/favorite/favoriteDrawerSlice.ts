import { createSlice } from "@reduxjs/toolkit";

export interface FavoriteDrawerState {
  isFavorite: boolean;
  favoriteItems: any[];
}

const initialState: FavoriteDrawerState = {
  isFavorite: false,
  favoriteItems: [],
};

export const favoriteDrawerSlice = createSlice({
  name: "favoriteDrawer",
  initialState: initialState,
  reducers: {
    setIsFavorite: (state, action) => {
      const findItem = state.favoriteItems.find(
        (obj) => obj.id === action.payload.id,
      );
      if (findItem) {
        findItem.isFavorite = !findItem.isFavorite;
      } else {
        state.favoriteItems.push({
          ...action.payload,
          isFavorite: findItem ? !findItem.isFavorite : true,
        });
      }
    },
  },
});

export const { setIsFavorite } = favoriteDrawerSlice.actions;

export default favoriteDrawerSlice.reducer;
