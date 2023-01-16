import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import { ROUTES } from '../../app-routes.const';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';


export const UserBlock: FC = () => {
  const { authorizationStatus, user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logoutAction()).then(() => navigate(ROUTES.SIGNIN));
  };

  return (
    <ul className="user-block">
      {authorizationStatus ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a href='/' className="user-block__link" onClick={(e) => {
              e.preventDefault();
              handleSignOut();
            }}
            >
              Sign out
            </a>
          </li>
        </>
      ) : (
        <Link to={ROUTES.SIGNIN} className="user-block__link">Sign in</Link>
      )}
    </ul>
  );
};
