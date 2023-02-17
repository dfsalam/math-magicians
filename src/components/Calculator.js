import React, { useState } from 'react';
import './calc.css';
import CalcButton from './CalcButton';
import CalcDisplay from './CalcDisplay';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const clickFunction2 = (e) => {
    setState((prevState) => calculate(prevState, e.target.innerText));
  };
  const { total } = state;
  const { next } = state;
  const { operation } = state;
  const display = () => {
    if (operation && next) {
      return next;
    }
    if (operation) {
      return operation;
    }
    if (next) {
      return next;
    }
    return total;
  };
  const show = display();
  return (
    <div className="calc__container">
      <CalcDisplay disStyle="disStyle" pHolder={show} />
      <CalcButton content="AC" clickFunction={clickFunction2} />
      <CalcButton content="+/-" clickFunction={clickFunction2} />
      <CalcButton content="%" clickFunction={clickFunction2} />
      <CalcButton content="÷" btnStyle="orange" clickFunction={clickFunction2} />
      <CalcButton content="7" clickFunction={clickFunction2} />
      <CalcButton content="8" clickFunction={clickFunction2} />
      <CalcButton content="9" clickFunction={clickFunction2} />
      <CalcButton content="x" btnStyle="orange" clickFunction={clickFunction2} />
      <CalcButton content="4" clickFunction={clickFunction2} />
      <CalcButton content="5" clickFunction={clickFunction2} />
      <CalcButton content="6" clickFunction={clickFunction2} />
      <CalcButton content="-" btnStyle="orange" clickFunction={clickFunction2} />
      <CalcButton content="3" clickFunction={clickFunction2} />
      <CalcButton content="2" clickFunction={clickFunction2} />
      <CalcButton content="1" clickFunction={clickFunction2} />
      <CalcButton content="+" btnStyle="orange" clickFunction={clickFunction2} />
      <CalcButton content="0" btnStyle="zero" clickFunction={clickFunction2} />
      <CalcButton content="." clickFunction={clickFunction2} />
      <CalcButton content="=" btnStyle="orange" clickFunction={clickFunction2} />
    </div>
  );
}
