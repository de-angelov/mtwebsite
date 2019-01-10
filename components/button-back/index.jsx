import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const ButtonBack = (props) => (
  <button
    type={props.type}
    onClick={() => props.onClick(props.text)}
  >
    {props.text}
  </button>);

ButtonBack.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

ButtonBack.defaultProps = {
  type: 'button',
};

export default ButtonBack;
