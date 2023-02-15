import PropTypes from 'prop-types';

export default function CalcDisplay(props) {
  const { disStyle } = props;
  return (
    <input className={disStyle} placeholder="0" />
  );
}

CalcDisplay.propTypes = {
  disStyle: PropTypes.string,
};

CalcDisplay.defaultProps = {
  disStyle: '',
};
