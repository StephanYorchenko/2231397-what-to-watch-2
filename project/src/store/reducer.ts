import { createReducer } from '@reduxjs/toolkit';
import {changeGenre, setMovieList, setRequestStatus } from './action';
import { Genre, Movie } from '../types/main-page.types';
import {RequestStatus} from '../types/store.types';

type TStoreState = {
  activeGenre: Genre;
  movies: Movie[];
  requestStatus: RequestStatus;
};

const initialState: TStoreState = {
  activeGenre: Genre.ALL_GENRES,
  movies: [],
  requestStatus: RequestStatus.success,
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
    });
});
