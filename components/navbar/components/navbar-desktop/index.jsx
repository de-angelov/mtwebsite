import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Router from 'next/router';

import style from './style.scss';

import LanguageSelector from '../../../language-selector';
import LogoBranding from '../../../logo-branding';

export default class NavbarDesktop extends Component {
  state ={
    pathname: null,
  }

  componentDidMount() {
    this.setState({ pathname: Router.pathname });
  }

  getInitialProps({ req }) {
    this.setState({ pathname: req.pathname });
  }

  componentDidUpdate() {
    if (this.state.pathname !== Router.pathname) {
      this.setState({ pathname: Router.pathname });
    }
  }

  render() {
    return (
      <div className={style.navbar}>
        <div className={style.content}>
          <LogoBranding />
          <ul className={style.links}>
            {this.props.links.map(({ key, href, label }, index) => (
              <>
              {index!== 0 && (<span>/</span>)}
              <li
                className={this.state.pathname === href ? style.activeLink : undefined}
                key={key}
              > 
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
              </>
              ))
            }
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>);
  }

}

NavbarDesktop.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};