import { Link, useParams } from 'react-router-dom';
import { getReviewLink } from '../../utils/movie';
import MovieList from '../../components/movie-list/movie-list';
import NotFoundPage from '../not-found-page/not-found-page';
import {Tabs} from '../../components/tabs/tabs';
import { ROUTES } from '../../app-routes.const';
import { UserBlock } from '../../components/user-block/user-block';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/main-page.types';
import { Loader } from '../../components/loader/loader';
import { getMovie, getSimilarMovies } from '../../store/api.requests';
import { AddToList } from '../../components/add-to-list/add-to-list';


const MoviePage = () => {
  const { id } = useParams();

  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [similarFilms, setSimilarFilms] = useState<Movie[]>([]);

  useEffect(() => {
    if (!id) {
      return;
    }

    getMovie(id).then(({ data }) => {
      if (data) {
        setCurrentMovie(data);
      }
    });
    getSimilarMovies(id).then(({ data }) => setSimilarFilms(data));
  }, [id]);

  if (!id) {
    return <NotFoundPage />;
  }

  if (!currentMovie) {
    return <Loader />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentMovie?.posterImage} alt={currentMovie?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={ROUTES.PLAYER.replace(':id', id)}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <AddToList movieId={id}/>
                <Link replace to={getReviewLink(currentMovie.id)} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentMovie.posterImage}
                alt={currentMovie.name}
                width="218"
                height="327"
              />
            </div>

            <Tabs movie={currentMovie} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <MovieList movies={similarFilms} />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MoviePage;

