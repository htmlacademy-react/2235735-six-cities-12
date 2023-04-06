import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks';

function Main(): JSX.Element {
  const offers = useAppSelector((state) => state.cards);
  const city = useAppSelector((state) => state.city);

  let selectedPoint;

  return (
    <div className="page page--gray page--main">
      <Header offers={offers}></Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CityList city={city}/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList offers = {offers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city = {city} points = {offers} selectedPoint={selectedPoint} mapHeight='750px'/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
