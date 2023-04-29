import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks';
import Sort from '../../components/sort/sort';
import { getSortType } from '../../store/app-process/selectors';
import { getOffers, getCity,getErrorStatus } from '../../store/offer-data/selectors';
import MainEmpty from '../main-empty/main-empty';
import cn from 'classnames';

function Main(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const city = useAppSelector(getCity);
  const type = useAppSelector(getSortType);
  const error = useAppSelector(getErrorStatus);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn(
        'page__main page__main--index',
        {
          'page__main--index-empty': error.status && error.text === 'Can\'t get offers',
        }
      )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CityList city={city} />
            </ul>
          </section>
        </div>
        <div className="cities">
          { error.status && error.text === 'Can\'t get offers' ? <MainEmpty/> : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city.name}</b>
                <Sort city={city} offers={offers} type={type} />
                <div className="cities__places-list places__list tabs__content">
                  <CardList offers={offers} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={city} points={offers} />
                </section>
              </div>
            </div>)}

        </div>
      </main>
    </div>
  );
}

export default Main;
