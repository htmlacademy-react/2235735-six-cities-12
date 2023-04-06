import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Cities } from '../../mocks/cities';
import { City } from '../../types/offers';
import { useAppDispatch } from '../../hooks';
import { changeCity, fillCards } from '../../store/action';

type CityListProps = {
    city: City;
}


function CityList({city}:CityListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const displayOffer = (newCity:City)=>{
    dispatch(changeCity({city:newCity}));
    dispatch(fillCards({city:newCity}));
  };

  return (
    <>
      {Cities.map((e)=>(
        <li key={e.name} className="locations__item">
          <Link to ={AppRoute.Root} className={cn(
            'locations__item-link tabs__item',
            {
              'tabs__item--active': e.name === city.name
            }
          )}
          onClick={()=>{
            displayOffer(e);
          }}
          >
            <span>{e.name}
            </span>
          </Link>
        </li>
      ))}
    </>
  );

}

export default CityList;
