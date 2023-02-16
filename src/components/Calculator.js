import './calc.css';
import CalcButton from './CalcButton';
import CalcDisplay from './CalcDisplay';
import '../logic/calculate';
import '../logic/operate';

export default function Calculator() {
  return (
    <div className="calc__container">
      <CalcDisplay disStyle="disStyle" />
      <CalcButton content="AC" />
      <CalcButton content="+/-" />
      <CalcButton content="%" />
      <CalcButton content="÷" btnStyle="orange" />
      <CalcButton content={7} />
      <CalcButton content={8} />
      <CalcButton content={9} />
      <CalcButton content="x" btnStyle="orange" />
      <CalcButton content={4} />
      <CalcButton content={5} />
      <CalcButton content={6} />
      <CalcButton content="-" btnStyle="orange" />
      <CalcButton content={3} />
      <CalcButton content={2} />
      <CalcButton content={1} />
      <CalcButton content="+" btnStyle="orange" />
      <CalcButton content={0} btnStyle="zero" />
      <CalcButton content="." />
      <CalcButton content="=" btnStyle="orange" />
    </div>
  );
}
