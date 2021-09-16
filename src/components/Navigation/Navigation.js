import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Breadcrumb } from 'react-bootstrap';

export default function Navigation() {
  const isLogin = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <Breadcrumb>
        <NavLink
          to={routes.HOME}
          exact
          className="header__link"
          activeClassName="header__link-active"
        >
          Home /
        </NavLink>
        {isLogin && (
          <NavLink
            to={routes.CONTACTS}
            exact
            className="header__link"
            activeClassName="header__link-active"
          >
            / Contacts
          </NavLink>
        )}
      </Breadcrumb>
    </nav>
  );
}
