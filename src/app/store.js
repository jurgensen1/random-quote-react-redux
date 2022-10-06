import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import quoteReducer from '../features/quotes/quotesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quotes: quoteReducer,
  }
});
