import quotesReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './quotesSlice';

describe('quotes reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(quotesReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = quotesReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = quotesReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = quotesReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
