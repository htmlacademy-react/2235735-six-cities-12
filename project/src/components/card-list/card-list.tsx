import {useLocation, useMatch} from 'react-router-dom';
import cn from 'classnames';
import Card from '../../components/card/card';
import { Offer } from '../../types/offers';
import { useAppDispatch } from '../../hooks';
import { selectCard } from '../../store/action';
type CardListProps = {
    offers: Offer[];
}

function CardList({offers}: CardListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const favoritePathMatch = useMatch('/offer/:id');

  return (
    <>
      {offers.map((offer)=> (
        <article className={cn(
          'place-card',
          {
            'cities__card': pathname === '/',
            'favorites__card': pathname === '/favorites',
            'near-places__card':favoritePathMatch?.params.id
          }
        ) }
        key={offer.id} onMouseEnter={()=>{dispatch(selectCard({card:offer}));}} onMouseLeave={()=>{dispatch(selectCard({card:null}));}}
        >
          <Card offer={offer} />
        </article>
      ))}
    </>
  );
}

export default CardList;
