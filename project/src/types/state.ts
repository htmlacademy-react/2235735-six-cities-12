import { store } from '../store/index';
import { AuthorizationStatus, } from '../const';
import { City, Offer,} from './offers';
import { Comment } from './comments';
import { UserData } from './user-data';
import { Error } from './error';

export type UserProcess = {
    user:UserData;
    authorizationStatus: AuthorizationStatus;
};

export type OfferData = {
    error: Error;
    offerNearPlaces: Offer[];
    offerComments: Comment[];
    offerDetails:Offer;
    city: City;
    cards: Offer[];
    offers: Offer[];
    isOffersDataLoading: boolean;
    favorites: Offer[];
    postStatus: string;
};

export type AppProcess = {
    type: string;
    selectedPoint: Offer | null;

}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
