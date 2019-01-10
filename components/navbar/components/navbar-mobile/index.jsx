import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import style from './style.scss';

import LanguageSelector from '../../../language-selector';
import LogoBranding from '../../../logo-branding';


class NavbarMobile extends Component {
  state = {
    menuOpen: false,
    toggleMenu: () => this.setState((prevState) => ({ menuOpen: !prevState.menuOpen })),

  }

  hiddenMenu = (
    <ul className={style.popup}>
      {this.props.links.map((link) => (
        <li key={link.key}>
          <Link href={link.href}>
            <a>{link.label}</a>
          </Link>
        </li>))}
      <li>
        <LanguageSelector />
      </li>
    </ul>);

  render() {
    return (
      <nav className={style.navbar}>
        {/* <LogoBranding /> */}
        <ul className={style.visibleMenu}>
        <LogoBranding />

          <li>
            <button onClick={() => this.state.toggleMenu()} type="button"> menu </button>
          </li>
        </ul>
        {this.state.menuOpen && this.hiddenMenu }
      </nav>);
  }
}

NavbarMobile.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavbarMobile;
