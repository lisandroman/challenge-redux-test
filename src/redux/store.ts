import { configureStore } from "@reduxjs/toolkit";
import { IGame } from "../models";
import { gameSlice } from "./state/games";

export interface AppStore {
  game: IGame;
  // favorites: Games[];
}

export default configureStore<AppStore>({
  reducer: {
    game: gameSlice.reducer,
    // favorites: favoriteSlice.reducer
  },
});
