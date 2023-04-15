import { createReducer } from '@reduxjs/toolkit';
import { changeCity, filterCards, sortCards, sortType, selectCard, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setUserData, setOfferDetails } from './action';
import { City, Offer } from '../types/offers';
import { AuthorizationStatus, UNKNOWN_USER, UNKNOWN_OFFER } from '../const';
import { UserData } from '../types/user-data';

type initialStateProps = {
  city: City;
  cards: Offer[];
  type: string;
  selectedPoint: Offer | null;
  authorizationStatus: string;
  error: string | null;
  isOffersDataLoading: boolean;
  offers: Offer[];
  user: UserData;
  offerDetails: Offer;
};

const initialState: initialStateProps = {
  city: {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
    name: 'Paris'
  },
  cards: [],
  type: 'Popular',
  selectedPoint: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  offers: [],
  user: UNKNOWN_USER,
  offerDetails: UNKNOWN_OFFER
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(filterCards, (state, action) => {
      const { city } = action.payload;
      const cards = state.offers.filter((e) => e.city.name === city.name);
      state.cards = cards;
    })
    .addCase(sortCards, (state, action) => {
      const { sortedCards } = action.payload;
      state.cards = sortedCards;
    })
    .addCase(sortType, (state, action) => {
      const { type } = action.payload;
      state.type = type;
    })
    .addCase(selectCard, (state, action) => {
      const { card } = action.payload;
      state.selectedPoint = card;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setOfferDetails, (state, action) => {
      state.offerDetails = action.payload;
    });
});

export { reducer };
