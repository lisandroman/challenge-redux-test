import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LocalStorageTypes } from "../../models";
import {
  IError,
  IGame,
  IInitialState,
  IStatus
} from "../../models/game";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const API_URL =
  "https://api.rawg.io/api/games?key=004533bcae8f436c845747a2050b54f0";
// const API_KEY = "?key=004533bcae8f436c845747a2050b54f0&page_size=20";

let initialState: IInitialState = {
  game: [],
  searchGame: [],
  status: "idle",
  error: null
};

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
});

export const gameSlice = createSlice({
  name: "game",
  // initialState,
  initialState: getLocalStorage(LocalStorageTypes.GAME)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.GAME) as string)
    : initialState,

  reducers: {
    getAllGames: (state: IGame, action) => {
      setLocalStorage(LocalStorageTypes.GAME, state);
      return action.payload;
    },
    // searchGameByName: (state, action) => {
    //   state.game = state.searchGame.filter((ga: IGame) =>
    //     ga.name.toLowerCase().includes(action.payload.toLowerCase())
    //   );
    // },
  },

  extraReducers(builder) {
    builder

      .addCase(fetchGames.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.game = state.game.concat(action.payload);
        state.searchGame = state.searchGame.concat(action.payload);
      })

      .addCase(fetchGames.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});


export const allGames = (state: IInitialState) => state.game;
export const getGamesStatus = (state: IStatus) => state.status;
export const getGamesErrors = (state: IError) => state.error;

export const { getAllGames } = gameSlice.actions;
export default gameSlice.reducer;
