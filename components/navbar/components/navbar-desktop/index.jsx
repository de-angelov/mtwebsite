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

  componentDidUpdate() {
    if (this.state.pathname !== Router.pathname) {
      this.setState({ pathname: Router.pathname });
    }
  }

  // getDerivedStateFromProps() {
  //   if (this.state.pathname !== Router.pathname) {
  //     this.setState({ pathname: Router.pathname });
  //   }
  // }

  getInitialProps({ req }) {
    this.setState({ pathname: req.pathname });
  }

  render() {
    return (
      <div className={style.navbar}>
        <div className={style.content}>
          <LogoBranding />
          <ul className={style.links}>
            {this.props.links.map(({ key, href, label }, index) => (
              <li key={key}>
                {index !== 0 && (<div>/</div>)}
                <div
                  className={this.state.pathname === href ? style.activeLink : undefined}
                >
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </div>
              </li>
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
