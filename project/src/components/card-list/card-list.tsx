import {useLocation} from 'react-router-dom';
import { useState, MouseEvent } from 'react';
import cn from 'classnames';
import Card from '../../components/card/card';
import { Offer } from '../../types/offers';

type CardListProps = {
    offers: Offer[];
}

function CardList({offers}: CardListProps): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;
  const [card, setCard] = useState(0);

  return (
    <>
      {offers.map((offer)=> (
        <article className={cn(
          'place-card',
          {
            'cities__card': pathname === '/',
            'favorites__card': pathname === '/favorites',
            'near-places__card':pathname === '/offer/:id'
          }
        ) }
        key={offer.id} onMouseEnter={(evt:MouseEvent)=>{
          evt.preventDefault();
          setCard(offer.id);
        }}
        >
          <Card offer={offer} />
        </article>
      ))}
    </>
  );
}

export default CardList;
