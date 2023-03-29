import {useState, MouseEvent} from 'react';
import Card from '../../components/card/card';
import { Offer } from '../../types/offers';

type CardListProps = {
    offers: Offer[];
}

function CardList({offers }: CardListProps): JSX.Element {
  const [card, setCard] = useState(0);
  return (
    <>
      {offers.map((offer)=> (
        <article className="cities__card place-card" key={offer.id} onMouseEnter={(evt:MouseEvent)=>{
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
