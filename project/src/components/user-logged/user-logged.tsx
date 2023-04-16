import {useAppDispatch} from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';

function UserLogged ():JSX.Element {
  const {email, avatarUrl} = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const Logout = ()=>{
    dispatch(logoutAction());
    navigate(AppRoute.Root);
  };
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/favorites">
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage:`url(${avatarUrl})`}}></div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count"></span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to='/' onClick={Logout}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default UserLogged;

