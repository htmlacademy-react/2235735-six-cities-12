import { Link } from 'react-router-dom';
import { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { AuthData } from '../../types/auth-data';
import { AppRoute, PASSWORD_VALID_TEMPLATE } from '../../const';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Main from '../main/main';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { City } from '../../types/offers';
import { changeCity, filterCards } from '../../store/offer-data/offer-data';
import { sortType } from '../../store/app-process/app-process';
import { CITIES } from '../../const';
import { Error } from '../../types/error';
import { showError } from '../../store/offer-data/offer-data';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <Main />
    );
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(AppRoute.Root);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null ) {
      if(!passwordRef.current.value.match(PASSWORD_VALID_TEMPLATE)){
        const passwordError:Error = {
          status: true,
          text: 'Password should contain at least one letter and one digit'
        };
        dispatch(showError({ error: passwordError }));
      }else {
        dispatch(showError({ error: {status:false, text:''} }));
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
      }

    }
  };
  const town:City = CITIES[Math.floor(Math.random() * CITIES.length)];
  const displayOffer = (newCity: City) => {
    dispatch(changeCity({ city: newCity }));
    dispatch(filterCards({ city: newCity }));
    dispatch(sortType({ type: 'Popular' }));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit} method="post" action=''>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" ref={loginRef} type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" ref={passwordRef} type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                onClick={() => {
                  displayOffer(town);
                }}
                className="locations__item-link" to="/"
              >
                <span>{town.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>

  );

}

export default Login;
