import { useState, MouseEvent } from 'react';
import cn from 'classnames';
import Card from '../../components/card/card';
import { Offer } from '../../types/offers';

type CardListProps = {
    offers: Offer[];
    page: string;
}

function CardList({offers,page }: CardListProps): JSX.Element {
  const [card, setCard] = useState(0);
  let isMainPage = false;
  let isFavoritesPage = false;
  let isPropertyPage = false;
  switch (page){
    case 'Main':
      isMainPage = true;
      break;
    case 'Favorites':
      isFavoritesPage = true;
      break;
    case 'Property':
      isPropertyPage = true;
      break;
  }

  return (
    <>
      {offers.map((offer)=> (
        <article className={cn(
          'place-card',
          {
            'cities__card': isMainPage,
            'favorites__card': isFavoritesPage,
            'near-places__card':isPropertyPage
          }
        ) }
        key={offer.id} onMouseEnter={(evt:MouseEvent)=>{
          evt.preventDefault();
          setCard(offer.id);
        }}
        >
          <Card offer={offer} page={page} />
        </article>
      ))}
    </>
  );
}

export default CardList;
