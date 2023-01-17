import { useAppSelector } from '../../hooks/store.hooks';
import { Loader } from '../loader/loader';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../app-routes.const';
import {AddToList} from '../add-to-list/add-to-list';

export const PromoFilm = () => {
  const { promoFilm } = useAppSelector((state) => state);
  const navigate = useNavigate();

  if (!promoFilm) {
    return <Loader />;
  }

  const { posterImage, releaseDate, name, genre, previewImage, id } = promoFilm;
  return (
    <>
      <div className="film-card__bg">
        <img src={previewImage} alt="The Grand Budapest Hotel"/>
      </div>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{releaseDate}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(ROUTES.PLAYER.replace(':id', id))}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <AddToList movieId={id}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
