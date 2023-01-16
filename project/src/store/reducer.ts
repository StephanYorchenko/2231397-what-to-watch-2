import { createReducer } from '@reduxjs/toolkit';
import { changeAuthStatus, changeGenre, setMovieList, setRequestStatus, setUser } from './action';
import { Genre, Movie } from '../types/main-page.types';
import { RequestStatus } from '../types/store.types';
import { User } from '../types/auth.types';

type TStoreState = {
  activeGenre: Genre;
  movies: Movie[];
  requestStatus: RequestStatus;
  authorizationStatus: boolean;
  user: User | null;
};

const initialState: TStoreState = {
  activeGenre: Genre.ALL_GENRES,
  movies: [],
  requestStatus: RequestStatus.success,
  authorizationStatus: false,
  user: null,
};

export const reducer = createReducer<TStoreState>(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setMovieList, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(setRequestStatus, (state, action) => {
      state.requestStatus = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
