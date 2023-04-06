import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/offers';

export const changeCity = createAction<{city:City}>('changeCity');
export const fillCards = createAction<{city:City}>('fillCards');
