import { useState, ChangeEvent, FormEvent, useEffect, Fragment } from 'react';
import { commentAction } from '../../store/api-action';
import { CommentData } from '../../types/comment-data';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getOfferDetails, getPostStatus } from '../../store/offer-data/selectors';
import {FORM_REVIEW_DATA, POST_STATUS } from '../../const';

function Form(): JSX.Element {
  const offerDetails = useAppSelector(getOfferDetails);
  const postStatus = useAppSelector(getPostStatus);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: 0,
    review: ''
  });

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const onSubmit = (commentData: CommentData) => {
    dispatch(commentAction(commentData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      rating: formData.rating,
      comment: formData.review,
      offerID: offerDetails.id
    });
  };

  const validateForm = () => {
    if (formData.rating !== 0 && formData.review.length >= FORM_REVIEW_DATA.minChars && formData.review.length <= FORM_REVIEW_DATA.maxChars) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  };

  useEffect(() => {
    if (postStatus === POST_STATUS.Success) {
      setFormData({
        rating: 0,
        review: ''
      });
      setIsInputDisabled(false);
    }
    if (postStatus === POST_STATUS.Loading) {
      setIsBtnDisabled(true);
      setIsInputDisabled(true);
    }
  }, [postStatus]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {FORM_REVIEW_DATA.rating.slice().reverse().map((star)=>(
          <Fragment key = {star.value}>
            <input onChange={handleInputChange} className="form__rating-input visually-hidden" name="rating" value={star.value} id={`${star.value}-stars`} type="radio" checked={+formData.rating === star.value} disabled = {isInputDisabled}/>
            <label htmlFor={`${star.value}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea onChange={handleInputChange} className="reviews__textarea form__textarea" id="review" name="review" value={formData.review} disabled = {isInputDisabled} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isBtnDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
