import PropTypes from 'prop-types';

export default function CalcButton(props) {
  const { content } = props;
  const { btnStyle } = props;
  const { clickFunction } = props;
  return (
    <button type="button" className={btnStyle} onClick={clickFunction}>{content}</button>
  );
}

CalcButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  btnStyle: PropTypes.string,
  clickFunction: PropTypes.func,
};

CalcButton.defaultProps = {
  btnStyle: 'defBtn',
  clickFunction: () => {},
};
