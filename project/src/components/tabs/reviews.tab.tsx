import { keygen } from '../../utils/key-gen';
import { TabContentProps as Props } from './tabs-map';
import MovieReviews from './review';


export const Reviews = (props: Props) => {
  const { reviews } = props;

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
