import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {setMovieList, setRequestStatus} from './action';
import {AppDispatch, State} from '../hooks/store.hooks';
import {APIRoute} from '../api-routes.const';
import {Movie} from '../types/main-page.types';
import {RequestStatus} from '../types/store.types';

// export const fetchFilms = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchFilms',
//   async (_arg, {dispatch, extra: api}) => {
//     dispatch(setRequestStatus(RequestStatus.success));
//     try {
//       await api.get<Movie[]>(APIRoute.GetFilms)
//         .then(({data}) => dispatch(setMovieList(data)));
//       dispatch(setRequestStatus(RequestStatus.success));
//     } catch (e){
//       dispatch(setRequestStatus(RequestStatus.error));
//     }
//   },
// );

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    const { data } = await api.get<Movie[]>(APIRoute.GetFilms);
    dispatch(setMovieList(data));;
    dispatch(setRequestStatus(RequestStatus.success));
  },
);
