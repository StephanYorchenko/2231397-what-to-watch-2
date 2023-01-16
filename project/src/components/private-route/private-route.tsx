import { FC} from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../app-routes.const';
import { useAppSelector } from '../../hooks/store.hooks';

type Props = {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = (props) => {
  const { children } = props;
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    authorizationStatus
      ? children
      : <Navigate to={ROUTES.SIGNIN} />
  );
};

export default PrivateRoute;
