import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import { changeGenre } from '../../store/action';
import { Genre } from '../../types/main-page.types';

type Props = {
  genre: Genre;
  resetPagination: VoidFunction;
};

const GenreItem: FC<Props> = (props) => {
  const { genre, resetPagination } = props;
  const { activeGenre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (
    activeGenreToChange: Genre
  ) => {
    dispatch(changeGenre(activeGenreToChange));
    resetPagination();
  };

  return (
    <li className={`catalog__genres-item ${genre === activeGenre ? ' catalog__genres-item--active' : ''}`}>
      <a
        href='/'
        className='catalog__genres-link'
        onClick={(e) => {
          e.preventDefault();
          handleChangeActiveGenre(genre);
        }}
      >
        {genre}
      </a>
    </li>
  );
};

export default GenreItem;
