import React, { useState } from 'react';
import './Counter.css'; 

const Counter = () => {
 
  const [count, setCount] = useState(0);

  
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  
  return (

    <div className="counter">
      <h2 className='multi'>Count: {count}</h2>
      <div className="buttons">
        <button className='buttonPlus' onClick={incrementCount}>Increase</button>
        <button className='buttonMinus' onClick={decrementCount}>Decrease</button>
        <button className='buttonReset' onClick={resetCount}>Reset</button>
      </div>
    </div>

  );
};


export default Counter;
