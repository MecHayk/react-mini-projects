import React, { useState } from 'react';
import '../styles/counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bodyCounter">
      <div className="Counter">
        <div>
          <h2>Счетчик:</h2>
          <h1>{count}</h1>
          <button onClick={() => setCount(count - 1)} className="minus">
            - Минус
          </button>
          <button onClick={() => setCount(count + 1)} className="plus">
            Плюс +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
