import { MouseEvent } from 'react';
import { Offer, City } from '../../types/offers';
import { useAppDispatch } from '../../hooks';
import { filterCards,sortCards, sortType } from '../../store/action';

type SortProps = {
    city:City;
    offers : Offer[];
    type:string;
  }

function Sort({offers, city, type}:SortProps):JSX.Element {
  const dispatch = useAppDispatch();
  const sortListShowHide = ()=>{
    const sortList = document.querySelector('.places__options--custom');
    if(sortList !== null){
      sortList.classList.toggle('places__options--opened');
    }
  };

  const changeSortActiveLink = ({target}:MouseEvent)=>{
    const sortLinks = document.querySelectorAll('li.places__option');
    sortLinks.forEach((element) => element.classList.remove('places__option--active'));
    const link = target as HTMLLIElement;
    link.classList.add('places__option--active');
  };
  const sortListClickHandler = ()=>{
    sortListShowHide();
  };
  const sortPopularHandler = (evt:MouseEvent)=>{
    sortListShowHide();
    changeSortActiveLink(evt);
    dispatch(filterCards({city:city}));
    dispatch(sortType({type:'Popular'}));
  };
  const sortLowtoHighHandler = (evt:MouseEvent)=>{
    sortListShowHide();
    changeSortActiveLink(evt);
    const sortOffers:Offer[] = offers.slice().sort((offer1, offer2)=>offer1.price - offer2.price);
    dispatch(sortCards({sortedCards:sortOffers}));
    dispatch(sortType({type:'Price: low to high'}));
  };
  const sortHightoLowHandler = (evt:MouseEvent)=>{
    sortListShowHide();
    changeSortActiveLink(evt);
    const sortOffers:Offer[] = offers.slice().sort((offer1, offer2)=>offer2.price - offer1.price);
    dispatch(sortCards({sortedCards:sortOffers}));
    dispatch(sortType({type:'Price: high to low'}));
  };
  const sortTopRatedHandler = (evt:MouseEvent)=>{
    sortListShowHide();
    changeSortActiveLink(evt);
    const sortOffers:Offer[] = offers.slice().sort((offer1, offer2)=>offer2.rating - offer1.rating);
    dispatch(sortCards({sortedCards:sortOffers}));
    dispatch(sortType({type:'Top rated first'}));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={sortListClickHandler} className="places__sorting-type" tabIndex={0}>{type}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        <li onClick={(evt:MouseEvent)=>sortPopularHandler(evt)} className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li onClick={(evt:MouseEvent)=>sortLowtoHighHandler(evt)} className="places__option" tabIndex={0}>Price: low to high</li>
        <li onClick={(evt:MouseEvent)=>sortHightoLowHandler(evt)} className="places__option" tabIndex={0}>Price: high to low</li>
        <li onClick={(evt:MouseEvent)=>sortTopRatedHandler(evt)} className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}
export default Sort;
