import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.scss';

const directionEnum = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
};

const Arrow = (props) =>{
  let direction;
  switch (props.direction) {

    case directionEnum.top:
      direction = directionEnum.top;
      break;

    case directionEnum.bottom:
      direction = directionEnum.bottom;
      break;

    case directionEnum.left:
      direction = directionEnum.left;
      break;

    case directionEnum.right:
      direction = directionEnum.right;
      break;

    default:
      break;
  }

  return (
    <button
      className={style[direction]}
      type="button"
      onClick={() => props.onClick()}
    >
      <img
        className={style.arrow}
        src="../../../../static/arrow.png"
        alt="Arrow"
      />
    </button>);
};

Arrow.propTypes = {
  direction: PropTypes.oneOf(Object.values(directionEnum)),
  onClick: PropTypes.func.isRequired,
};

export default Arrow;
