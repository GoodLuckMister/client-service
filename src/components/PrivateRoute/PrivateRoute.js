import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({ redirectTo, children }) {
  const isLogin = useSelector(authSelectors.getIsAuthenticated);

  return <Route>{isLogin ? children : <Redirect to={redirectTo} />}</Route>;
}
