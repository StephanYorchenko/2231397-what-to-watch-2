import { Link, useParams } from 'react-router-dom';
import { getMovieLink } from '../../utils/movie';
import { FC } from 'react';
import AddReview from '../../components/create-review/creacte-review';
import { UserBlock } from '../../components/user-block/user-block';
import NotFoundPage from '../not-found-page/not-found-page';
import {useMovie} from '../../hooks/movie.hooks';

const CreateReviewPage: FC = () => {
  const { id } = useParams();
  const movie = useMovie(id);

  if (!id){
    return <NotFoundPage />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={getMovieLink(movie?.id)} className="breadcrumbs__link">{movie?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href={'/'} className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie?.posterImage} alt={movie?.name} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReview movieId={id}/>
      </div>
    </section>
  );
};

export default CreateReviewPage;

