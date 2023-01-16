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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(changeAuthStatus(true));
    } catch {
      dispatch(changeAuthStatus(false));
    }
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
    dispatch(changeAuthStatus(false));
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
    dispatch(changeAuthStatus(true));
    dispatch(setUser(user));
  },
);
