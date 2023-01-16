import { useEffect, useState } from 'react';
import { Movie } from '../types/main-page.types';
import { getMovie } from '../store/api.requests';

export const useMovie = (id: string | undefined) => {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!id) {return;}
    getMovie(id).then(({ data }) => {
      if (data) {
        setCurrentMovie(data);
      }
    });
  }, [id]);

  return currentMovie;
};
