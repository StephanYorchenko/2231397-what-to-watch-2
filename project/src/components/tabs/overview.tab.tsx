import { getRatingDescription } from '../../utils/movie';
import { TabContentProps as Props } from './tabs-map';

export const Overview = (props: Props) => {
  const {
    movie: {
      rating,
      description,
      votesCount,
      director,
      starring
    }
  } = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(Number(rating))}</span>
          <span className="film-rating__count">{votesCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring?.join(', ')} and other</strong></p>
      </div>
    </>
  );
};
