import {Link} from 'react-router-dom';
import { Offer } from '../../types/offers';
import UserAuthStatus from '../user-authentication-status/user-authentication-status';

type HeaderProps = {
  offers: Offer[];
}

function Header({ offers }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <UserAuthStatus/>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
