import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CITIES } from '../../const';
import { City } from '../../types/offers';
import { useAppDispatch } from '../../hooks';
import { changeCity, filterCards, sortType } from '../../store/action';

type CityListProps = {
    city: City;
}


function CityList({city}:CityListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const displayOffer = (newCity:City)=>{
    dispatch(changeCity({city:newCity}));
    dispatch(filterCards({city:newCity}));
    dispatch(sortType({type:'Popular'}));
  };

  return (
    <>
      {CITIES.map((town)=>(
        <li key={town.name} className="locations__item">
          <Link to ={AppRoute.Root} className={cn(
            'locations__item-link tabs__item',
            {
              'tabs__item--active': town.name === city.name
            }
          )}
          onClick={()=>{
            displayOffer(town);
          }}
          >
            <span>{town.name}
            </span>
          </Link>
        </li>
      ))}
    </>
  );

}

export default CityList;
