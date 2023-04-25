import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/offer-data/selectors';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';


function Favorites(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const favoritesCitiesSet = new Set<string>();
  favorites.forEach((offer) => favoritesCitiesSet.add(offer.city.name));
  const favoritesCities:string[] = [...favoritesCitiesSet];
  const getFavoritesByCity = (city:string):Offer[] => {
    const favoritesByCity = favorites.filter((offer)=> (offer.city.name === city));
    return favoritesByCity;
  };

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
                  {favoritesCities.map((city:string)=>(
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="/">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <CardList offers={getFavoritesByCity(city)} />
                      </div>
                    </li>
                  ))}
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
