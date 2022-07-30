import React from 'react';
import { Counter } from './features/counter/Counter';
import { Quotes } from './features/quotes/Quotes';
import './App.scss';
import { useSelector} from 'react-redux';

function App(props) {
  return (
    <div>
        <div id="quote-box">
            <Quotes 
                value={useSelector((state) => state.counter.value)}  
            />
        </div>
        <div id="counter">
            <Counter 
                value={useSelector((state) => state.counter.value)}
                // message={useSelector((state) => state.messages.messages)}
            />
        </div>
    </div>
  );
}

export default App;
