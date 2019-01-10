import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.scss';

const SlideTitle = (props) => (
  <div >
    {props.slide.title.toUpperCase()}
  </div>);

SlideTitle.propTypes = {
  slide: PropTypes.object.isRequired,

};

export default SlideTitle;
