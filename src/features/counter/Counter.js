import React from 'react';
import { useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    randomQuote,
    handleChange
} from './counterSlice';
import styles from './Counter.module.scss';



export function LeftArrow() {
    const dispatch = useDispatch();
    return (
        <button
            id={styles.decrement}
            aria-label="Previous Quote"
            onClick={() => dispatch(decrement())}
        >
            <i class="fas fa-angle-left fa-2x"></i>
        </button>)
}
export function RightArrow() {
    const dispatch = useDispatch();
    return (
        <button
            id={styles.increment}
            aria-label="Next Quote"
            onClick={() => dispatch(increment())}
        >
            <i class="fas fa-angle-right fa-2x"></i>
        </button>)
}

export function QuoteNumber(props) {
    const dispatch = useDispatch();
    return (<input
        id={styles.inlineTextbox}
        type='number'
        min={1}
        max={1643}
        step="1"
        aria-label="Input a quote number"
        value={props.value + 1}
        placeholder={props.value + 1}
        onChange={(event) => dispatch(handleChange(event.target.value))}
    />)
}

export function Counter(props) {
    const dispatch = useDispatch();

    return (
        <div id={styles.buttonWrapper}>
            <button
                id="new-quote"
                className={styles.newQuote}
                onClick={() => dispatch(randomQuote())}
            >
                Random Quote
            </button>
        </div>
    );
}
