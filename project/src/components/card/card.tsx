import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { Offer } from '../../types/offers';

type CardProps = {
  offer : Offer;
}

function Card ({offer}:CardProps): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div className="place-card__mark">
        {offer.isPremium && (<span>Premium</span>)}
      </div>
      <div className={cn(
        'place-card__image-wrapper',
        {
          'cities__image-wrapper': pathname === '/',
          'favorites__image-wrapper': pathname === '/favorites',
          'near-places__image-wrapper': pathname === '/offer/:id'
        }
      )}
      >
        <Link to='/offer/:{offer.id}'>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place pic"/>
        </Link>
      </div>
      <div className={cn(
        'place-card__info',
        {
          'favorites__card-info':pathname === '/favorites'
        }
      )}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}>{offer.rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to='/offer/:{offer.id}'>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </>
  );
}

export default Card;
