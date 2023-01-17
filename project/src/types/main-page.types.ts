export type Movie = {
  id: string;
  name: string;
  genre: Genre;
  releaseDate: string;
  posterImage: string;
  previewImage: string;
  description: string;
  rating: string;
  ratingDescription?: RatingDescription;
  votesCount: string;
  director: string;
  actors: string[];
  duration: string;
  previewVideoLink: string;
  videoLink: string;
}

export enum RatingDescription {
  BAD = 'Bad',
  NORMAL ='Normal',
  GOOD = 'Good',
  VERYGOOD = 'Very good',
  AWESOME = 'Awesome',
}

export enum Genre {
  ALL_GENRES = 'All genres',
  COMEDY = 'Comedy',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMA = 'Drama',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-fi',
  THRILLER = 'Thriller'
}
