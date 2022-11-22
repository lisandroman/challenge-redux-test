export interface IGame {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  genres: iGenre[];
  released: string;
}

export interface iGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface ISearchGames {
  game: IGame[];
}

export interface IStatus {
  status: string;
}

export interface IError {
  error: string;
}
export interface IInitialState {
  game: IGame[];
  searchGame: ISearchGames[];
  status: string;
  error: null;
}
