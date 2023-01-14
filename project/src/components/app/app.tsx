import MainPage from '../../pages/main-page/main-page';
import {MOVIE_LIST} from '../../pages/main-page/const';

function App(): JSX.Element {
  return <MainPage movie={MOVIE_LIST[0]} allMovies={MOVIE_LIST}/>;
}

export default App;
