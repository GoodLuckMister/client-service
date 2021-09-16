import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './avatar.png';
import { Button } from 'react-bootstrap';
import './UserMenu.scss';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());

  return (
    <div className="user">
      <img
        src={defaultAvatar}
        alt="avatar"
        width="32"
        className="user__avatar"
      />
      <span className="user__name">Welcome, {name}</span>
      <Button variant="primary" type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}
