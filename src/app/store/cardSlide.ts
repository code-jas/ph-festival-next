// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CardState {
   currentCard: number;
}

const initialState: CardState = {
   currentCard: 0,
};

const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {
      nextCard(state) {
         state.currentCard = (state.currentCard + 1) % 3;
      },
      prevCard(state) {
         state.currentCard = (state.currentCard - 1 + 3) % 3;
      },
   },
});

export const { nextCard, prevCard } = cardSlice.actions;
export default cardSlice.reducer;
