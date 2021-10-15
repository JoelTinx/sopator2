import React, { useEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.styles.scss';

const Counter = ({min = 1, max = 99, initial = 1, onValueChange}) => {
  const { counter, increment, decrement, setCustomValue } = useCounter(initial, min, max);

  useEffect(() => {
    onValueChange(counter)
  }, [counter])

  const onChange = (event) => {
    if (event.target.value === '') {
      setCustomValue(0);
      return;
    }
    const value = +event.target.value;

    if (value > max) {
      setCustomValue(max);
      return;
    }

    if (value < min) {
      setCustomValue(min);
      return;
    }

    setCustomValue(value);
  };

  return (
    <div className="wrapper">
      <button
        type="button"
        className="button button--left"
        onClick={() => decrement()}
      >
        -
        {/* <FontAwesomeIcon icon={faMinus} /> */}
      </button>
      <input
        type="number"
        value={counter}
        min={min}
        max={max}
        onChange={(e) => onChange(e)}
      />
      <button
        type="button"
        className="button button--right"
        onClick={() => increment()}
      >
        +
        {/* <FontAwesomeIcon icon={faPlus} /> */}
      </button>
    </div>
  );
};

export default Counter;
