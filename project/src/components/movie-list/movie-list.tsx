import { FC } from 'react';
import MovieCard from '../movie-card/movie-card';
import { Movie } from '../../types/main-page.types';
import ShowMore from '../show-more/show-more';

type Props = {
  movies: Movie[];
  loadAdditionalItems?: VoidFunction;
  canLoadAdditionalItems?: boolean;
};

const MovieList: FC<Props> = (props) => {
  const {
    movies,
    loadAdditionalItems,
    canLoadAdditionalItems = false
  } = props;

  return (
    <>
      <div className="catalog__films-list">
        {
          movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)
        }
      </div>
      {
        canLoadAdditionalItems && loadAdditionalItems &&
        <ShowMore loadAdditionalItems={loadAdditionalItems}/>
      }
    </>
  );
};

export default MovieList;
