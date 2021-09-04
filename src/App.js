import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button className="inc" onClick={increment}>
        Increment
      </button>
      <button className="dec" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
