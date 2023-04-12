import { City } from './types/offers';
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
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export const DEFAULT_CITY = {
  location:{
    latitude: 48.864716,
    longitude:2.349014,
    zoom:10,
  },
  name: 'Paris'
};

export const CITIES:City[] = [
  {
    location:{
      latitude: 52.3740300,
      longitude:4.8896900,
      zoom:10,
    },
    name: 'Amsterdam'
  },
  {
    location:{
      latitude: 48.864716,
      longitude:2.349014,
      zoom:10,
    },
    name: 'Paris'
  },
  {
    location:{
      latitude: 50.935173,
      longitude:6.953101,
      zoom:10,
    },
    name: 'Cologne'
  },
  {
    location:{
      latitude: 50.85045,
      longitude:4.34878,
      zoom:10,
    },
    name: 'Brussels'
  },
  {
    location:{
      latitude: 53.551086,
      longitude:9.993682,
      zoom:10,
    },
    name: 'Hamburg'
  },
  {
    location:{
      latitude: 51.233334,
      longitude:6.783333,
      zoom:10,
    },
    name: 'Dusseldorf'
  }
];
