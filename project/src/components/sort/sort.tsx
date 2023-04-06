import { Offer } from '../../types/offers';

type SortProps = {
    offers : Offer[];
  }

function Sort({offers}:SortProps):JSX.Element {
  const sortListShowHide = ()=>{
    const sortList = document.querySelector('.places__options--custom');
    if(sortList !== null){
      sortList.classList.toggle('places__options--opened');
    }
  };
  const sortListClickHandler = ()=>{
    sortListShowHide();
  };
  const sortPopularHandler = ()=>{
    sortListShowHide();
  };
  const sortLowtoHighHandler = ()=>{
    sortListShowHide();
  };
  const sortHightoLowHandler = ()=>{
    sortListShowHide();
  };
  const sortTopRatedHandler = ()=>{
    sortListShowHide();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={sortListClickHandler} className="places__sorting-type" tabIndex={0}>Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        <li onClick={sortPopularHandler} className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li onClick={sortLowtoHighHandler} className="places__option" tabIndex={0}>Price: low to high</li>
        <li onClick={sortHightoLowHandler} className="places__option" tabIndex={0}>Price: high to low</li>
        <li onClick={sortTopRatedHandler} className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}
export default Sort;
