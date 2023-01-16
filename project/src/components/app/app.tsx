import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../app-routes.const';
import PrivateRoute from '../private-route/private-route';
import ListPage from '../../pages/list-page/list-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PlayerPage from '../../pages/player-page/player-page';
import CreateReviewPage from '../../pages/create-review-page/create-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import { RequestStatus } from '../../types/store.types';
import { Loader } from '../loader/loader';
import { checkAuthAction, fetchFilms } from '../../store/api-actions';
import { useEffect } from 'react';

function App(): JSX.Element {
  const { requestStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchFilms());
  }, [dispatch]);

  if (requestStatus === RequestStatus.loading) {
    return <Loader />;
  }

  if (requestStatus === RequestStatus.error) {
    return <>Ведутся технические работы. Зайдите позже</>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />}/>
        <Route path={ROUTES.SIGNIN} element={<SignInPage/>}/>
        <Route
          path={ROUTES.MYLIST}
          element={
            <PrivateRoute>
              <ListPage />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.FILM} element={<MoviePage />}/>
        <Route path={ROUTES.ADD_REVIEW} element={<CreateReviewPage/>}/>
        <Route path={ROUTES.PLAYER} element={<PlayerPage />}/>
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
