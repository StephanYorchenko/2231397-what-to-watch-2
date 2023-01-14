import MainPage from '../../pages/main-page/main-page';
import { MOVIE_LIST } from '../../pages/main-page/const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, ROUTES } from '../../app-routes.const';
import PrivateRoute from '../private-route/private-route';
import ListPage from '../../pages/list-page/list-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PlayerPage from '../../pages/player-page/player-page';
import CreateReviewPage from '../../pages/create-review-page/create-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage movie={MOVIE_LIST[0]} allMovies={MOVIE_LIST}/>}/>
        <Route path={ROUTES.SIGNIN} element={<SignInPage/>}/>
        <Route
          path={ROUTES.MYLIST}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <ListPage />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.FILM} element={<MoviePage/>}/>
        <Route path={ROUTES.ADDREVIEW} element={<CreateReviewPage/>}/>
        <Route path={ROUTES.PLAYER} element={<PlayerPage/>}/>
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
