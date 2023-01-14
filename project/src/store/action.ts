import { createAction } from '@reduxjs/toolkit';
import { Genre, Movie } from '../types/main-page.types';
import { RequestStatus } from '../types/store.types';

export const changeGenre = createAction<Genre>('changeGenre');
export const setMovieList = createAction<Movie[]>('setMovieList');
export const setRequestStatus = createAction<RequestStatus>('setRequestStatus');
