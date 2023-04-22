
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import UserLogged from '../user-logged/user-logged';
import UserNotLogged from '../user-not-logged/user-not-logged';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
function UserAuthStatus(): JSX.Element {
  const userAuthStatus = useAppSelector(getAuthorizationStatus);
  return (
    userAuthStatus !== AuthorizationStatus.Auth ? <UserNotLogged /> : <UserLogged />
  );
}

export default UserAuthStatus;
