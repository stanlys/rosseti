import { useAppSelector } from '../../store/hooks';
import LoginForm from './login-form/LoginForm';
import UserHomePage from './UserHomePage';

const Auth = (): JSX.Element => {
  
  return <div>{authorizeStatus ? <UserHomePage /> : <LoginForm />}</div>;
};

export default Auth;
