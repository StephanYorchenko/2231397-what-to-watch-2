import { memo } from 'react';
import { TabContentProps } from './tabs-map';

type Props = {
  reviews: TabContentProps['reviews'];
  index: number;
}

const MovieReviews = memo(({ reviews, index }: Props) => (
  <>
    {
      reviews.map(({comment, userName, reviewDate, userRating}) => {
        const dateString =
          Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric', day: 'numeric'}).format(reviewDate);
        const dateTimeString = reviewDate.toISOString().slice(0, 10);

        return (
          <div className="review" key={`${comment}-${userName}-${userRating}`}>
            <blockquote className="review__quote">
              <p className="review__text">{comment}</p>

              <footer className="review__details">
                <cite className="review__author">{userName}</cite>
                <time className="review__date" dateTime={dateTimeString}>{dateString}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{userRating}</div>
          </div>
        );
      }).slice(index * 3, index * 3 + 3)
    }
  </>
));

MovieReviews.displayName = 'MovieReviews';
export default MovieReviews;
