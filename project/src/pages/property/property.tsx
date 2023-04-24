import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Form from '../../components/form/form';
import Map from '../../components/map/map';
import ReviewList from '../../components/review-list/review-list';
import { Offer } from '../../types/offers';
import { useAppSelector,useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { getOfferComments, getOfferNearPlaces, getOfferDetails } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getCity } from '../../store/offer-data/selectors';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { addFavoritesAction, removeFavoritesAction } from '../../store/api-action';
import { Comment } from '../../types/comments';
import { getRating } from '../../untils/utils';

function Property(): JSX.Element {
  const city = useAppSelector(getCity);
  const comments = useAppSelector(getOfferComments);
  const sortCutComments = (revies:Comment[]):Comment[]=>{
    const sortResult: Comment[] = revies.slice().sort((review1, review2) =>Date.parse(review2.date) - Date.parse(review1.date) );
    const cutResult = sortResult.slice(0,10);
    return cutResult;
  };
  const offerDetails = useAppSelector(getOfferDetails);
  const nearPlaces = useAppSelector(getOfferNearPlaces);
  const nearMapPlaces:Offer[] = [];
  nearMapPlaces.push(offerDetails);
  nearPlaces.forEach((place) => nearMapPlaces.push(place));
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const { bedrooms, description, isPremium, title, rating, price, maxAdults, type, images, goods, host: { avatarUrl, isPro, name }, isFavorite } = offerDetails;
  const imagesToRender: string[] = images.slice(0, 6);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userAuthStatus = useAppSelector(getAuthorizationStatus);
  const handleFavorites = ()=>{
    userAuthStatus !== AuthorizationStatus.Auth ? navigate(AppRoute.Login) : addOrRemoveFavorites(offerDetails);
  };
  const addOrRemoveFavorites = (card:Offer) => {
    if (!card.isFavorite){
      dispatch (addFavoritesAction(card));
    } else {
      dispatch (removeFavoritesAction(card));
    }
  };

  const capitalizeFirstLetter = (string:string):string => {
    if (!string) {return string;}
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                imagesToRender.map((image) => (
                  <div className="property__image-wrapper" key={image}>
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
                <button className={cn(
                  'property__bookmark-button button',
                  {
                    'property__bookmark-button--active': isFavorite
                  }
                )} type="button" onClick={handleFavorites}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: getRating(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value"></span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{capitalizeFirstLetter(type)}</li>
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
                    goods.map((good) => (
                      <li className="property__inside-item" key={good}>
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
                <ReviewList comments={sortCutComments(comments)} />
                {authorizationStatus === AuthorizationStatus.Auth && (<Form />)}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} points={nearMapPlaces} />
          </section>
        </section >
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList offers={nearPlaces} />
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default Property;
