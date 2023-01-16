import { keygen } from '../../utils/key-gen';
import { TabContentProps as Props } from './tabs-map';
import MovieReviews from './review';
import {useEffect, useState} from 'react';
import { Review } from '../../types/review.types';
import { getMovieReviews } from '../../store/api.requests';


export const Reviews = (props: Props) => {
  const { movie: { id } } = props;
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getMovieReviews(id).then(({ data }) => setReviews(data));
  }, [id]);

  return (
    <div className="film-card__reviews film-card__row">
      {Array(Math.ceil(reviews.length / 3)).fill(0).map((_, index) => (
        <div className="film-card__reviews-col" key={keygen()}>
          <MovieReviews reviews={reviews} index={index} />
        </div>
      ))}
    </div>
  );
};
