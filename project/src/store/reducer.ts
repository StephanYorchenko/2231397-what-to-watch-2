import { createReducer} from '@reduxjs/toolkit';
import { changeAuthStatus, changeGenre, setMovieList, setRequestStatus, setUser } from './action';
import { Genre, Movie } from '../types/main-page.types';
import { RequestStatus } from '../types/store.types';
import { User } from '../types/auth.types';
import { AuthStatus, fetchFavoriteFilms, fetchPromoFilm } from './api-actions';

type TStoreState = {
  activeGenre: Genre;
  movies: Movie[];
  requestStatus: RequestStatus;
  authorizationStatus: AuthStatus;
  user: User | null;
  promoFilm: Movie | null;
  favouriteFilms: Movie[];
};

const initialState: TStoreState = {
  activeGenre: Genre.ALL_GENRES,
  movies: [],
  requestStatus: RequestStatus.success,
  authorizationStatus: AuthStatus.PENDING,
  user: null,
  promoFilm: null,
  favouriteFilms: [],
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
    })
    .addCase(fetchPromoFilm.fulfilled, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
      state.favouriteFilms = action.payload;
    });
});
