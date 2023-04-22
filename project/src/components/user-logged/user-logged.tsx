import { useAppDispatch } from '../../hooks';
import { fetchFavoritesAction, logoutAction } from '../../store/api-action';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getUserData } from '../../store/user-process/selectors';
import { getFavorites } from '../../store/offer-data/selectors';

function UserLogged(): JSX.Element {
  const { email, avatarUrl } = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(AppRoute.Root);
  };
  const handleFavorites = ()=>{
    dispatch(fetchFavoritesAction());
  };
  const favorites = useAppSelector(getFavorites);
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/favorites" onClick={handleFavorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${avatarUrl})` }}></div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{favorites.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to='/' onClick={handleLogout}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default UserLogged;

