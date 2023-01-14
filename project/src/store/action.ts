import { createAction } from '@reduxjs/toolkit';
import { Genre, Movie } from '../types/main-page.types';

export const changeGenre = createAction<Genre>('changeGenre');
export const setMovieList = createAction<Movie[]>('setMovieList');
