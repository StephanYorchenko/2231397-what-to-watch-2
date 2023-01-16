import { RatingDescription } from '../types/main-page.types';
import {ROUTES} from '../app-routes.const';

export const getMovieLink = (id: string | undefined) => id ? ROUTES.FILM.replace(':id', id) : '#';
export const getReviewLink = (id: string | undefined) => id ? ROUTES.ADD_REVIEW.replace(':id', id) : '#';

const DEFAULT_DESCRIPTION = 'wrong rating';

export const getRatingDescription = (rating: number): RatingDescription | typeof DEFAULT_DESCRIPTION => {
  if (rating <= 2) {
    return RatingDescription.BAD;
  } else if (rating <= 4) {
    return RatingDescription.NORMAL;
  } else if (rating <= 6) {
    return RatingDescription.GOOD;
  } else if (rating <= 8) {
    return RatingDescription.VERYGOOD;
  } else if (rating <= 10) {
    return RatingDescription.AWESOME;
  }
  return DEFAULT_DESCRIPTION;
};
