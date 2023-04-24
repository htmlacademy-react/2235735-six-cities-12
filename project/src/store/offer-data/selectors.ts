import { NameSpace } from '../../const';
import { Offer, City } from '../../types/offers';
import { Comment } from '../../types/comments';
import { State } from '../../types/state';


export const getOffers = (state: State): Offer[] => state[NameSpace.Data].cards;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getOfferComments = (state: State): Comment[] => state[NameSpace.Data].offerComments;
export const getOfferNearPlaces = (state: State): Offer[] => state[NameSpace.Data].offerNearPlaces;
export const getOfferDetails = (state: State): Offer => state[NameSpace.Data].offerDetails;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].error;
export const getCity = (state: State): City => state[NameSpace.Data].city;
export const getFavorites = (state: State): Offer[] => state[NameSpace.Data].favorites;
export const getPostStatus = (state: State): string => state[NameSpace.Data].postStatus;

