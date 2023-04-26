import { useLocation, useMatch } from 'react-router-dom';
import cn from 'classnames';
import Card from '../../components/card/card';
import { Offer } from '../../types/offers';
import { useAppDispatch } from '../../hooks';
import { selectCard } from '../../store/app-process/app-process';

type CardListProps = {
  offers: Offer[];
}

function CardList({ offers }: CardListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const propertyPathMatch = useMatch('/offer/:id');
  const onMouseEnter = (offer: Offer) => {
    if (!propertyPathMatch?.params.id) {
      dispatch(selectCard({ card: offer }));
    }
  };
  const onMouseLeave = (offer: Offer) => {
    if (!propertyPathMatch?.params.id) {
      dispatch(selectCard({ card: null }));
    }
  };

  return (
    <>
      {offers.map((offer) => (
        <article
          className={cn(
            'place-card',
            {
              'cities__card': pathname === '/',
              'favorites__card': pathname === '/favorites',
              'near-places__card': propertyPathMatch?.params.id
            }
          )}
          key={offer.id} onMouseEnter={() => onMouseEnter(offer)} onMouseLeave={() => onMouseLeave(offer)}
        >
          <Card offer={offer} />
        </article>
      ))}
    </>
  );
}

export default CardList;
