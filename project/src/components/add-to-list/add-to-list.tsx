import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import { useCallback, useMemo } from 'react';
import { toggleAddToListButton } from '../../store/api-actions';

type Props = {
  movieId: string;
}

export const AddToList = (props: Props) => {
  const { movieId } = props;
  const dispatch = useAppDispatch();
  const { favouriteFilms } = useAppSelector((state) => state);

  const isMovieFavourite = useMemo(() => favouriteFilms.some((i) => i.id === movieId), [movieId, favouriteFilms]);

  const favoriteAddHandler = useCallback(() => {
    dispatch(toggleAddToListButton({ movieId , status: isMovieFavourite ? '0' : '1' }));
  }, [movieId, isMovieFavourite]);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={favoriteAddHandler}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isMovieFavourite ? '#in-list' : '#add'}/>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favouriteFilms.length}</span>
    </button>
  );
};
