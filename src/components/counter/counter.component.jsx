import React from 'react';
import { useCounter } from '../../hooks/useCounter';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import './counter.styles.scss';

const Counter = () => {
  const [min, max] = [10, 50];
  const { counter, increment, decrement, setCustomValue } = useCounter(20, min, max);

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
