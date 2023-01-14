import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, setMovieList } from './action';
import { MOVIE_LIST } from '../mocks/film';
import { Genre, Movie } from '../types/main-page.types';

type TStoreState = {
  activeGenre: Genre;
  movies: Movie[];
};

const initialState: TStoreState = {
  activeGenre: Genre.ALL_GENRES,
  movies: MOVIE_LIST
};

export const reducer = createReducer<TStoreState>(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setMovieList, (state, action) => {
      state.movies = action.payload;
    });
});
