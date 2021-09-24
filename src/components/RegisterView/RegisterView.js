import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import RegisterForm from './RegisterForm';
import VerifyYourProfile from '../Verification';
import './RegisterView.scss';

export default function RegisterView() {
  const onVerify = useSelector(authSelectors.getVerifyRegister);
  return <>{onVerify.email ? <VerifyYourProfile /> : <RegisterForm />}</>;
}
