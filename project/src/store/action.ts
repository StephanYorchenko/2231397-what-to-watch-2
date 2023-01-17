import { createAction } from '@reduxjs/toolkit';
import { User } from '../types/auth.types';
import { Genre, Movie } from '../types/main-page.types';
import { RequestStatus } from '../types/store.types';
import { AuthStatus } from './api-actions';

export const changeGenre = createAction<Genre>('changeGenre');
export const setMovieList = createAction<Movie[]>('setMovieList');
export const setRequestStatus = createAction<RequestStatus>('setRequestStatus');
export const changeAuthStatus = createAction<AuthStatus>('changeAuthStatus');
export const setUser = createAction<User | null>('setUser');
