import PropTypes from 'prop-types';

export default function CalcButton(props) {
  const { content } = props;
  const { btnStyle } = props;
  return (
    <button type="button" className={btnStyle}>{content}</button>
  );
}

CalcButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  btnStyle: PropTypes.string,
};

CalcButton.defaultProps = {
  btnStyle: 'defBtn',
};
