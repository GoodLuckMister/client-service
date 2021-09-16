import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { Breadcrumb } from 'react-bootstrap';

export default function AuthNav() {
  return (
    <Breadcrumb>
      <NavLink
        to={routes.REGISTER}
        className="header__link"
        activeClassName="header__link-active"
      >
        Sign Up /
      </NavLink>

      <NavLink
        to={routes.LOGIN}
        className="header__link"
        activeClassName="header__link-active"
      >
        / Sign in
      </NavLink>
    </Breadcrumb>
  );
}
