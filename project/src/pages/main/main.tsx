import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks';
import Sort from '../../components/sort/sort';

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
              <Sort offers={offers}/>
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
