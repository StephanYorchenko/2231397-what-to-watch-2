import { Fragment } from 'react';
import { TabContentProps as Props } from './tabs-map';

export const Details = (props: Props) => {
  const {
    movie: {
      director, starring, runTime, genre, released
    }
  } = props;

  return (
    <div className="film-card__text film-card__row">
      <div>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span>
            {starring?.map((actor) => <Fragment key={actor}>{actor}, <br/> </Fragment>)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre.charAt(0).toUpperCase() + genre.slice(1)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};
