/* eslint-disable jsx-a11y/interactive-supports-focus */
// eslint-disable jsx-a11y/interactive-supports-focus
// eslint-disable jsx-a11y/click-events-have-key-events
// eslint-disable jsx-a11y/anchor-is-valid

import React from 'react';
import { PropTypes } from 'prop-types';
import { Consumer } from '../../utils/context';
// import { ContextWrapper } from '../../utils/context';
import style from './style.scss';
import { i18n } from '../../utils/localization';


const LanguageSelector = (props) => (
  <Consumer>
    {(context) => (
      <>
        {/* {context.language} */}
        {/* <button onClick={() => context.setLanguage('bg')} type="button"> bg </button> */}
        {/* <button onClick={() => context.setLanguage('en')} type="button"> en </button> */}

        <button
          type="button"
          onClick={() => {
            context.setLanguage('en');
            i18n.changeLanguage('en');
          }}
        >
          <img className={style.img} src="../static/en.png" alt="mt design logo" />
        </button>
        <button
          type="button"
          onClick={() => {
            context.setLanguage('bg');
            i18n.changeLanguage('bg');
          }}
        >
          <img className={style.img} src="../static/bg.png" alt="mt design logo" />
        </button>
      </>
    )}
  </Consumer>
);

// LanguageSelector.propTypes = {
//   text: PropTypes.string.isRequired,
//   changeLanguage: PropTypes.func.isRequired,
// };

export default LanguageSelector;
