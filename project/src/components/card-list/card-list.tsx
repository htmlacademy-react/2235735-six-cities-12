import {useLocation} from 'react-router-dom';
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
  // const [card, setCard] = useState(0);

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
        key={offer.id} onMouseEnter={()=>{dispatch(selectCard({card:offer}));}} onMouseLeave={()=>{dispatch(selectCard({card:null}));}}
        >
          <Card offer={offer} />
        </article>
      ))}
    </>
  );
}

export default CardList;
