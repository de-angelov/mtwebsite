import React from 'react';
import { PropTypes } from 'prop-types';
import { Consumer } from '../../utils/context';
// import { ContextWrapper } from '../../utils/context';
import style from './style.scss';


const LanguageSelector = (props) => (
  <Consumer>
    {(context) => (
      <>
        {/* {context.language} */}
        {/* <button onClick={() => context.setLanguage('bg')} type="button"> bg </button> */}
        {/* <button onClick={() => context.setLanguage('en')} type="button"> en </button> */}
        <a>
          <img className={style.img} src="../static/en.png" alt="mt design logo"/>
        </a>
        <a>
          <img className={style.img} src="../static/bg.png" alt="mt design logo"/>
        </a>
      </>
    )}
  </Consumer>
);

// LanguageSelector.propTypes = {
//   text: PropTypes.string.isRequired,
//   changeLanguage: PropTypes.func.isRequired,
// };

export default LanguageSelector;
