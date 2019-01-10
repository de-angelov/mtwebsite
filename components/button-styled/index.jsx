import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.scss';

const ButtonStyled = (props) => (
  <button
    type={props.type}
    onClick={() => props.onClick(props.text)}
    className={props.className}
  >
    {props.text.toUpperCase()}
  </button>);

ButtonStyled.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

ButtonStyled.defaultProps = {
  type: 'button',
  className: '',
};

export default ButtonStyled;
