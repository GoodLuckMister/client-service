import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ children, restricted, redirectTo }) {
  const isLogin = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route>
      {isLogin && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
