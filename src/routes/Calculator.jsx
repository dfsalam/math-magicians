import CalculatorComponent from '../components/CalculatorComponent';
import styles from '../styles/Calculator.module.css';

const Calculator = () => (
  <div className={styles.container}>
    <h2>Let&apos;s do some Math!</h2>
    <CalculatorComponent />
  </div>
);

export default Calculator;
