import { APIRoute } from '../api-routes.const';
import { Movie } from '../types/main-page.types';
import { Review } from '../types/review.types';
import {axiosApi} from './index';

export const getMovie = async (movieId: string) => await axiosApi.get<Movie>(APIRoute.GetFilmById.replace(':id', movieId));

export const getSimilarMovies = async (movieId: string) => await axiosApi.get<Movie[]>(APIRoute.GetSimilarFilms.replace(':id', movieId));

export const getMovieReviews = async (movieId: string) => await axiosApi.get<Review[]>(APIRoute.GetComments.replace(':id', movieId));

export const postMovieReview = async (movieId: string, review: { comment: string; rating: number }) =>
  await axiosApi.post<Review[]>(APIRoute.GetComments.replace(':id', movieId), {...review});
