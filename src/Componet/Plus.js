import React, { useState } from 'react';
import './Plus.css';

function Plus() {
  const [number, setNum] = useState(0);
  function plusNum() {
    setNum(number + 1);
  }
  function minNum() {
    setNum(number - 1);
  }
  return (
    <div className="cont">
      <button className="btn" onClick={minNum}>
        -
      </button>
      <p className="num">{number}</p>
      <button className="btn" onClick={plusNum}>
        +
      </button>
    </div>
  );
}
export default Plus;
