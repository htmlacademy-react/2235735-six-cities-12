import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer } from '../types/offers.js';

import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comments.js';
import { CommentData } from '../types/comment-data.js';
import { showError } from './offer-data/offer-data';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(fetchFavoritesAction());
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const fetchOfferDetailsAction = createAsyncThunk<Offer, Offer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferDetails',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.OfferDetails}${id}`);
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<Comment[], Offer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferComments',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Comment[]>(`${APIRoute.OfferComments}${id}`);
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const fetchOfferNearPlacesAction = createAsyncThunk<Offer[], Offer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferNearPlaces',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(`${APIRoute.OfferNearPlaces}${id}/nearby`);
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const commentAction = createAsyncThunk<Comment[], CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment',
  async ({ rating, comment, offerID }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Comment[]>(`${APIRoute.OfferComments}${offerID}`, { rating, comment });
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(APIRoute.Favorites);
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const addFavoritesAction = createAsyncThunk<Offer, Offer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addFavorites',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Offer>(`${APIRoute.Favorites}/${id}/1`);
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);

export const removeFavoritesAction = createAsyncThunk<Offer, Offer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/removeFavorites',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Offer>(`${APIRoute.Favorites}/${id}/0`);
      return data;
    } catch (err) {
      dispatch(showError({ error: true }));
      throw err;
    }
  },
);
