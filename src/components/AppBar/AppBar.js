import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import './AppBar.scss';

export default function AppBar() {
  const isLogin = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className="header">
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
