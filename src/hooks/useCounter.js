import { useState } from 'react';

export const useCounter = (initialValue = 1, min = 0, max = 999) => {
  const [counter, setCounter] = useState(initialValue);

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
    setCounter(initialValue);
  };

  return { counter, increment, decrement, setCustomValue, reset };
};
