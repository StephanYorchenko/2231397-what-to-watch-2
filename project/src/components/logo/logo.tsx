import { Link } from 'react-router-dom';
import { ROUTES } from '../../app-routes.const';

export const Logo = () => (
  <div className="logo">
    <Link to={ROUTES.MAIN} className="logo__link">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);
