import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.scss';

const Slide = (props) => (
  <div style={props.style} className={style.imgContainer}>
    <img
      alt="slide"
      className={style.img}
      src={props.slide.img}
    />
  </div>);

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default Slide;
