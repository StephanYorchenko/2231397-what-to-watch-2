import { memo } from 'react';
import { Review } from '../../types/review.types';
import { Rating } from '../rating/rating';

type Props = {
  reviews: Review[];
  index: number;
}

const MovieReviews = memo(({ reviews, index }: Props) => (
  <>
    {
      reviews.map(({ comment, user, date, rating}) => {
        const dateString =
          Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric', day: 'numeric'})
            .format(Date.parse(date));

        return (
          <div className="review" key={`${comment}-${user.name}-${rating}`}>
            <blockquote className="review__quote">
              <p className="review__text">{comment}</p>

              <footer className="review__details">
                <cite className="review__author">{user.name}</cite>
                <time className="review__date" dateTime={dateString}>{dateString}</time>
              </footer>
            </blockquote>

            <Rating rating={rating} />
          </div>
        );
      }).slice(index * 3, index * 3 + 3)
    }
  </>
));

MovieReviews.displayName = 'MovieReviews';
export default MovieReviews;
