import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: "intial",
  author: "state",
  status: 'idle',
};
const ADD = 'ADD';
export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setStateData: (state) => {
        state.text = "few words; good words";
        state.author = "steve";
    },
    message: (state = [], action) => {
        switch (action.type) {
          case ADD:
            return [
              ...state,
              action.message
            ];
          default:
            return state;
        }
    }
}});

export const { setStateData, message } = quotesSlice.actions;

export const selectCount = (state) => state.quotes.text;


export default quotesSlice.reducer;
