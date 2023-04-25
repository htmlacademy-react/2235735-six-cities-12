import { City, Offer } from './types/offers';
import { UserData } from './types/user-data';
export enum AppRoute {
  Login = '/login',
  Lose = '/lose',
  Favorites = '/favorites',
  Root = '/',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  OfferDetails = '/hotels/',
  OfferComments = '/comments/',
  OfferNearPlaces = '/hotels/',
  Favorites = '/favorite',

}

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export const DEFAULT_CITY = {
  location: {
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 10,
  },
  name: 'Paris'
};

export const CITIES: City[] = [
  {
    location: {
      latitude: 52.3740300,
      longitude: 4.8896900,
      zoom: 10,
    },
    name: 'Amsterdam'
  },
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
    name: 'Paris'
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
    name: 'Cologne'
  },
  {
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 10,
    },
    name: 'Brussels'
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
    name: 'Hamburg'
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
    name: 'Dusseldorf'
  }
];

export const UNKNOWN_USER: UserData = {
  avatarUrl: '',
  email: '',
  id: null,
  isPro: false,
  name: '',
  token: ''
};

export const UNKNOWN_OFFER: Offer = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    },
    name: ''
  },
  description: '',
  goods: [
    ''
  ],
  host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: ''
  },
  id: 0,
  images: [
    ''
  ],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  },
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: ''
};

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export const DATE_OPTIONS:Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric'
};

export const ONE_STAR_RATING_WIDTH = 20;
export const MIN_REVIEW_CHARS = 50;
export const MAX_REVIEW_CHARS = 300;
export const FORM_REVIEW_DATA = {
  maxChars: 300,
  minChars: 50,
  rating:[{value:1, title:'terribly'},{value:2, title:'badly'},{value:3, title:'not bad'},{value:4, title:'good'},{value:5, title:'perfect'}]
};

export const POST_STATUS = {
  Loading: 'loading',
  Failed: 'failed',
  Success: 'success',
  Idle: 'idle'
};
