import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { changeAuthStatus, setMovieList, setRequestStatus, setUser } from './action';
import { AppDispatch, State } from '../hooks/store.hooks';
import { APIRoute } from '../api-routes.const';
import { Movie } from '../types/main-page.types';
import { RequestStatus } from '../types/store.types';
import { dropAuthToken, saveAuthToken } from './api.token';
import { AuthInfo, User } from '../types/auth.types';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    const { data } = await api.get<Movie[]>(APIRoute.GetFilms);
    dispatch(setMovieList(data));
    dispatch(setRequestStatus(RequestStatus.success));
  },
);

export const fetchPromoFilm = createAsyncThunk<Movie, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Movie>(APIRoute.GetPromoFilm);
    return data;
  }
);

export enum AuthStatus {
  PENDING,
  AUTHORIZED,
  UNAUTHORIZED,
}
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeAuthStatus(AuthStatus.PENDING));
    const result =
      await api.get(APIRoute.Login).then(() => AuthStatus.AUTHORIZED).catch(() => AuthStatus.UNAUTHORIZED);
    dispatch(changeAuthStatus(result));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropAuthToken();
    dispatch(changeAuthStatus(AuthStatus.UNAUTHORIZED));
    dispatch(setUser(null));
  },
);

export const loginAction = createAsyncThunk<void, AuthInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const { data: user } = await api.post<User>(APIRoute.Login, {email, password});
    saveAuthToken(user.token);
    dispatch(changeAuthStatus(AuthStatus.AUTHORIZED));
    dispatch(setUser(user));
  },
);

export const fetchFavoriteFilms = createAsyncThunk<Movie[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('fetchFavoriteFilm', async(_arg, {extra: api}) => {
  const { data } = await api.get<Movie[]>(APIRoute.GetFavourite);
  return data;
});

type ToggleFavouriteRequest = {
  movieId: string;
  status: '1' | '0';
}

export const toggleAddToListButton = createAsyncThunk<void, ToggleFavouriteRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({movieId, status}, {dispatch, extra: api}) => {
    await api.post<Movie>(APIRoute.ToggleFavouriteFilm.replace(':id', movieId).replace(':status', status));
    dispatch(fetchFavoriteFilms());
    dispatch(fetchPromoFilm());
  },
);
