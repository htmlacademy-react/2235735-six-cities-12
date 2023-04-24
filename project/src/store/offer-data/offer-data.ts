import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_CITY,UNKNOWN_OFFER,POST_STATUS } from '../../const';
import { OfferData } from '../../types/state';
import { City, Offer } from '../../types/offers';
import { fetchOffersAction, fetchOfferDetailsAction, fetchOfferCommentsAction, fetchOfferNearPlacesAction, commentAction,fetchFavoritesAction, addFavoritesAction, removeFavoritesAction} from '../api-action';

const initialState: OfferData = {
  error:false,
  offerNearPlaces: [],
  offerComments: [],
  city:DEFAULT_CITY,
  cards: [],
  offers:[],
  isOffersDataLoading:false,
  offerDetails: UNKNOWN_OFFER,
  favorites:[],
  postStatus: POST_STATUS.Idle,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState:initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city:City}>) => {
      const { city } = action.payload;
      state.city = city;
    },
    sortCards: (state, action: PayloadAction<{sortedCards:Offer[]}>) => {
      const { sortedCards } = action.payload;
      state.cards = sortedCards;
    },
    filterCards: (state, action: PayloadAction<{city:City}>) => {
      const { city } = action.payload;
      const cards = state.offers.filter((e) => e.city.name === city.name);
      state.cards = cards;
    },
    showError: (state, action: PayloadAction<{error:boolean}>) => {
      const {error} = action.payload;
      state.error = error;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.error = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
        const cards = state.offers.filter((e) => e.city.name === DEFAULT_CITY.name);
        state.cards = cards;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;

      })
      .addCase(fetchOfferDetailsAction.fulfilled, (state, action) => {
        state.offerDetails = action.payload;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
      })
      .addCase(fetchOfferNearPlacesAction.fulfilled, (state, action) => {
        state.offerNearPlaces = action.payload;
      })
      .addCase(commentAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
        state.postStatus = POST_STATUS.Success;
      })
      .addCase(commentAction.pending, (state) => {
        state.postStatus = POST_STATUS.Loading;
      })
      .addCase(commentAction.rejected, (state) => {
        state.postStatus = POST_STATUS.Failed;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(addFavoritesAction.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
        state.offerDetails = action.payload;
        const newCards = state.cards.map((offer)=> {
          if (offer.id === action.payload.id) {
            offer.isFavorite = true;
          }
          return offer;
        });
        state.cards = newCards;
      })
      .addCase(removeFavoritesAction.fulfilled, (state, action) => {
        const newFavorites = state.favorites.filter((offer) => (offer.id !== action.payload.id));
        state.favorites = newFavorites;
        state.offerDetails = action.payload;
        const newCards = state.cards.map((offer)=> {
          if (offer.id === action.payload.id) {
            offer.isFavorite = false;
          }
          return offer;
        });
        state.cards = newCards;
      });
  }
});
export const {changeCity, sortCards, filterCards, showError} = offerData.actions;
