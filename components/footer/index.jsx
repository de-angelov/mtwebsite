import React from 'react';
import style from './style.scss';
import { withNamespaces } from '../../utils/localization';

const Footer = (props) => (
  <footer className={style.container}>
    { props.t('footer') }
  </footer>
);

export default withNamespaces('common')(Footer);
