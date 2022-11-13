import { configureStore } from "@reduxjs/toolkit";
import { Games } from "../models";
import { favoriteSlice } from "./state/favorites";
import { gameSlice } from "./state/games";

export interface AppStore {
  games: Games[];
  favorites: Games[];
}

export default configureStore<AppStore>({
  reducer: {
    games: gameSlice.reducer,
    favorites: favoriteSlice.reducer
  },
});
