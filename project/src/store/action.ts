import {createAction} from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';

export const changeCity = createAction<{city:City}>('changeCity');
export const filterCards = createAction<{city:City}>('filterCards');
export const sortCards = createAction<{sortedCards:Offer[]}>('sortCards');
export const sortType = createAction<{type:string}>('sortType');
export const selectCard = createAction<{card:Offer|null}>('selectCard');
