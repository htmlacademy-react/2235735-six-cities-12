import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction<{city:City}>('changeCity');
export const filterCards = createAction<{city:City}>('filterCards');
export const sortCards = createAction<{sortedCards:Offer[]}>('sortCards');
export const sortType = createAction<{type:string}>('sortType');
export const selectCard = createAction<{card:Offer|null}>('selectCard');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setUserData = createAction<UserData>('setUserData');
export const setOfferDetails = createAction<Offer>('setOfferDetails');
