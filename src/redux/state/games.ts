import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Games, LocalStorageTypes } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const API_URL =
  "https://api.rawg.io/api/games?key=004533bcae8f436c845747a2050b54f0";
// const API_KEY = "?key=004533bcae8f436c845747a2050b54f0&page_size=20";

const initialState = {
  games: [],
  searchGames: [],
  status: "idle",
  error: null,
};

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
});

export const gameSlice = createSlice({
  name: "games",
  initialState: getLocalStorage(LocalStorageTypes.GAME)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.GAME) as string)
    : initialState,

  reducers: {
    getAllGames: (state: [], action: any) => {
      setLocalStorage(LocalStorageTypes.GAME, state);
      return action.payload;
    },
    searchGameByName: (state, action) => {
      state.games = state.searchGames.filter((game: Games) =>
        game.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },

  extraReducers(builder) {
    builder

      .addCase(fetchGames.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.games = state.games.concat(action.payload);
        state.searchGames = state.searchGames.concat(action.payload);
      })

      .addCase(fetchGames.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const allGames = (state: any) => state.games.games;
export const getGamesStatus = (state: any) => state.games.status;
export const getGamesErrors = (state: any) => state.games.error;

export const { getAllGames, searchGameByName } = gameSlice.actions;
export default gameSlice.reducer;
