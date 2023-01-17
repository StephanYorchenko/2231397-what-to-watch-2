export enum APIRoute {
  GetFilms = '/films',
  GetFilmById = '/films/:id',
  Login = '/login',
  Logout = '/logout',
  GetComments = '/comments/:id',
  GetSimilarFilms = '/films/:id/similar',
  GetPromoFilm = '/promo',
  GetFavourite = '/favorite',
  ToggleFavouriteFilm = '/favorite/:id/:status'
}
