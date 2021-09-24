import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function VerifyYourProfile() {
  const user = useSelector(authSelectors.getVerifyRegister);
  return (
    <>
      <p>{user.email}</p>
      Please verify your email and after that please auth
    </>
  );
}
