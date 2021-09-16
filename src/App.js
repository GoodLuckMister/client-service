import { useEffect, useCallback } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import HomePage from './components/HomePage';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './utils/Spinner';
import { Container } from 'react-bootstrap';
import './App.scss';

const Contacts = lazy(() =>
  import(
    './components/Contacts/Contacts.js' /* webpackChunkName: "Contacts" */
  ),
);
const LoginView = lazy(() =>
  import(
    './components/LoginView/LoginView.js' /* webpackChunkName: "LoginView" */
  ),
);

const RegisterView = lazy(() =>
  import(
    './components/RegisterView/RegisterView.js' /* webpackChunkName: "RegisterView" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const onGetCurrentUser = useCallback(
    () => dispatch(authOperations.getCurrentUser()),
    [dispatch],
  );

  useEffect(() => onGetCurrentUser(), [onGetCurrentUser]);

  return (
    <>
      <Container fluid="md">
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.HOME} component={HomePage} />
            <PrivateRoute path={routes.CONTACTS} redirectTo={routes.LOGIN}>
              <Contacts />
            </PrivateRoute>
            <PublicRoute
              path={routes.LOGIN}
              redirectTo={routes.CONTACTS}
              restricted
            >
              <LoginView />
            </PublicRoute>
            <PublicRoute
              path={routes.REGISTER}
              redirectTo={routes.CONTACTS}
              restricted
            >
              <RegisterView />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
