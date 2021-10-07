import { useState } from 'react';

export const useCounter = (initialState = 1, min = 0, max = 999) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (step = 1) => {
    setCounter(counter + step >= max ? max : counter + step);
  };

  const decrement = (step = 1) => {
    setCounter(counter - step <= min ? min : counter - step);
  };

  const setCustomValue = (custom = 0) => {
    setCounter(custom);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return { counter, increment, decrement, setCustomValue, reset };
};
