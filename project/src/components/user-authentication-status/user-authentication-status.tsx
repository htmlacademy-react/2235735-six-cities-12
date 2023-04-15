
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import UserLogged from '../user-logged/user-logged';
import UserNotLogged from '../user-not-logged/user-not-logged';
function UserAuthStatus():JSX.Element {
  const userAuthStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    userAuthStatus !== AuthorizationStatus.Auth ? <UserNotLogged/> : <UserLogged/>
  );
}

export default UserAuthStatus;
