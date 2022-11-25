import { createSlice } from "@reduxjs/toolkit";
import {  LocalStorageTypes } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,

  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      state.favorites = state.favorites.concat(action.payload);
      console.log(state.favorites);
      // return action.payload;
    },
    // removeFavorite: (state, action) => {
    //   const filteredState = state.favorites.filter(
    //     (p: Games) => p.id !== action.payload.id
    //   );
    //   setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
    //   return filteredState;
    // },
  },
});
export const allFavGames = (state: any) => state.favorites.favorites;

export const { addFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
