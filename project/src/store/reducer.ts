import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillCards } from './action';
import { offers } from '../mocks/offers';

const initialState = {
  city: {
    location:{
      latitude: 48.864716,
      longitude:2.349014,
      zoom:10,
    },
    name: 'Paris'
  },
  cards: offers.filter((e)=>e.city.name === 'Paris')
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(fillCards, (state,action) => {
      const {city} = action.payload;
      const cards = offers.filter((e)=>e.city.name === city.name);
      state.cards = cards;
    });
});

export {reducer};
