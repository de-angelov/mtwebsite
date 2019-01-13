import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.scss';

import Navbar from '../navbar';
import Footer from '../footer';

const Body = (props) => (
  <div className={style.container}>
    <Navbar />
    <div className={style.children}>
      {props.children}
    </div>
    <Footer />
  </div>);

Body.propTypes = {
  children: PropTypes.element,
};

Body.defaultProps = {
  children: '',
};

export default Body;
