import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/offer-data/selectors';
import cn from 'classnames';
import { Link } from 'react-router-dom';


function Favorites(): JSX.Element {
  const favorites = useAppSelector(getFavorites);

  return (
    <div className="page">
      <Header />
      <main className = {cn(
        'page__main page__main--favorites',
        {
          'page__main--favorites-empty': favorites.length === 0,
        }
      )}
      >
        <div className="page__favorites-container container">
          <section className = {cn(
            'favorites',
            {
              'favorites--empty': favorites.length === 0,
            }
          )}
          >
            {favorites.length === 0 ? (
              <>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </>) : (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {/* {favorites.map((offer)=>(
                    <li className="favorites__locations-items" key={offer.id}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="/">
                            <span>{offer.city.name}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <CardList offers={favorites} />
                      </div>
                    </li>
                  ))} */}
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="/">
                          <span>Amsterdam</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <CardList offers={favorites} />
                    </div>
                  </li>
                </ul>
              </>)}

          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>

  );
}

export default Favorites;
