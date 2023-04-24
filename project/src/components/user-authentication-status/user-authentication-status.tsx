
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import UserLogged from '../user-logged/user-logged';
import UserNotLogged from '../user-not-logged/user-not-logged';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function UserAuthStatus(): JSX.Element {
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    userAuthorizationStatus !== AuthorizationStatus.Auth ? <UserNotLogged /> : <UserLogged />
  );
}

export default UserAuthStatus;
