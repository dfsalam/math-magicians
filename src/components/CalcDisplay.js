import PropTypes from 'prop-types';

export default function CalcDisplay(props) {
  const { disStyle } = props;
  const { pHolder } = props;
  return (
    <input className={disStyle} placeholder={pHolder} />
  );
}

CalcDisplay.propTypes = {
  disStyle: PropTypes.string,
  pHolder: PropTypes.string,
};

CalcDisplay.defaultProps = {
  disStyle: '',
  pHolder: '0',
};
