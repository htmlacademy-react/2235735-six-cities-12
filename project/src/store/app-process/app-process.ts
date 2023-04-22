import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppProcess } from '../../types/state';
import { Offer } from '../../types/offers';

const initialState: AppProcess = {
  type: 'Popular',
  selectedPoint: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    sortType: (state, action: PayloadAction<{type:string}>) => {
      const { type } = action.payload;
      state.type = type;
    },
    selectCard: (state, action: PayloadAction<{card:Offer|null}>) => {
      const { card } = action.payload;
      state.selectedPoint = card;
    },
  },
});

export const {sortType, selectCard} = appProcess.actions;
