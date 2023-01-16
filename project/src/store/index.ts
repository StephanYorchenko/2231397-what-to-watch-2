import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from './api';

export const axiosApi = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosApi,
      },
    }),
});

