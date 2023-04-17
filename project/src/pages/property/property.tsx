import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Form from '../../components/form/form';
import Map from '../../components/map/map';
import ReviewList from '../../components/review-list/review-list';
import { Offer } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

type PropertyProps = {
  offers : Offer[];
}

function Property({offers }: PropertyProps): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const comments = useAppSelector((state) => state.offerComments);
  const nearPlaces = useAppSelector((state) => state.offerNearPlaces);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offerDetails = useAppSelector((state) => state.offerDetails);
  const {bedrooms, description, isPremium, title, rating, price, maxAdults, type, images, goods, host:{avatarUrl, isPro, name}} = offerDetails;
  const imagesToRender:string[] = images.slice(0,6);


  return (
    <div className="page">
      <Header offers={offers}></Header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                imagesToRender.map((image)=>(
                  <div className="property__image-wrapper" key={Math.random() * 1000}>
                    <img className="property__image" src={image} alt="Pic studio" />
                  </div>
                ))
              };
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                {isPremium && (<span>Premium</span>)}
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults"> Max {maxAdults} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((good)=>(
                      <li className="property__inside-item" key={Math.random() * 1000}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{name}
                  </span>
                  {isPro && (<span className="property__user-status"></span>)}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList comments= {comments}/>
                {authorizationStatus === AuthorizationStatus.Auth && (<Form/>)}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city = {city} points = {nearPlaces} mapHeight='579px'/>
          </section>
        </section >
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList offers = {nearPlaces}/>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default Property;
