import React from 'react';
import { withNamespaces } from '../utils/localization';

const About = (props) => (
  <>
    { props.t('about') }
  </>
);

export default withNamespaces('common')(About);
