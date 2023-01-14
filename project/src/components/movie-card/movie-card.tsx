import { FC } from 'react';
import {Movie} from '../../types/main-page.types';


type Props = {
  movie: Movie;
}

const MovieCard: FC<Props> = (props) => {
  const {
    movie: {
      title,
      posterUrl
    }
  } = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterUrl} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
};

export default MovieCard;
