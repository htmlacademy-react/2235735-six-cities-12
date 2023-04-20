import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';

import {userProcess} from './user-process/user-process';
import { offerData } from './offer-data/offer-data';
import { appProcess } from './app-process/app-process';


export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: offerData.reducer,
  [NameSpace.App]: appProcess.reducer,
});
