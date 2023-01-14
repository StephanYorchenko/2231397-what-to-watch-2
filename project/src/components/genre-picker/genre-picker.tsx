import React, { FC } from 'react';
import { Genre } from '../../types/main-page.types';
import GenreItem from './genre-item';

type Props = {
  genres: Genre[];
  resetPagination: VoidFunction;
};

const GenresPicker: FC<Props> = (props) => {
  const { genres, resetPagination } = props;

  return (
    <ul className='catalog__genres-list'>
      {
        genres.map((genre) => (
          <GenreItem key={genre} genre={genre} resetPagination={resetPagination}/>
        ))
      }
    </ul>
  );
};

export default GenresPicker;
