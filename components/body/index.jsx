import React from 'react';
import { PropTypes } from 'prop-types';
import Head from 'next/head';

import style from './style.scss';
import Navbar from '../navbar';
import Footer from '../footer';

const Body = (props) => (
  <div className={style.container}>
    <Head>
      <link rel="stylesheet" type="text/css" href={`/_next/static/css/styles.chunk.css?v=${Date.now()}`} />
    </Head>
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
