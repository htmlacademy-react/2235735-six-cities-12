import { createReducer } from '@reduxjs/toolkit';
import { changeCity, filterCards, sortCards, sortType, selectCard } from './action';
import { offers } from '../mocks/offers';
import { City, Offer } from '../types/offers';

type initialStateProps = {
  city: City;
  cards:Offer[];
  type:string;
  selectedPoint: Offer | null;
};

const initialState:initialStateProps = {
  city: {
    location:{
      latitude: 48.864716,
      longitude:2.349014,
      zoom:10,
    },
    name: 'Paris'
  },
  cards: offers.filter((e)=>e.city.name === 'Paris'),
  type:'Popular',
  selectedPoint: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(filterCards, (state,action) => {
      const {city} = action.payload;
      const cards = offers.filter((e)=>e.city.name === city.name);
      state.cards = cards;
    })
    .addCase(sortCards, (state,action) => {
      const {sortedCards} = action.payload;
      state.cards = sortedCards;
    })
    .addCase(sortType, (state,action) => {
      const {type} = action.payload;
      state.type = type;
    })
    .addCase(selectCard, (state,action) => {
      const {card} = action.payload;
      state.selectedPoint = card;
    });
});

export {reducer};
