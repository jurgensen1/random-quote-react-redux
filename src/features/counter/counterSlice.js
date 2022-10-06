import { createSlice } from '@reduxjs/toolkit';
import '../../_variables.scss';

const initialState = {
    value: Math.floor(Math.random() * 1642),
    status: 'idle',
};

function randomColor() {
    let red = Math.floor(Math.random() * 150);
    let green = Math.floor(Math.random() * 150);
    let blue = Math.floor(Math.random() * 150);
    return "rgb(" + red + "," + blue + "," + green + ")";
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            document.documentElement.style.setProperty(
                "--background-color",
                randomColor()
            );
        },
        decrement: (state) => {
            state.value -= 1;
            document.documentElement.style.setProperty(
                "--background-color",
                randomColor()
            );
        },
        getQuoteByNumber: (state, action) => {
            state.value = action.payload - 1;
            document.documentElement.style.setProperty(
                "--background-color",
                randomColor()
            );
        },
        randomQuote: (state) => {
            state.value = Math.floor(Math.random() * 1642);
            document.documentElement.style.setProperty(
                "--background-color",
                randomColor()
            );
        },
        handleChange: (state, action) => {
            state.value = action.payload - 1;
            document.documentElement.style.setProperty(
                "--background-color",
                randomColor()
            );
        }
    }
});

export const { increment, decrement, getQuoteByNumber, randomQuote, handleChange } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
