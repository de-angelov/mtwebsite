import React from 'react';
import { mainNavigationLinks } from '../../config';

import NavBarDesktop from './components/navbar-desktop';
import NavBarMobile from './components/navbar-mobile';

const links = mainNavigationLinks.map((link) => ({ ...link, key: `nav-link-${link.href}-${link.label}` }));
const Navbar = () => (
  <>
    <NavBarDesktop links={links} />
    <NavBarMobile links={links} />
  </>
);

export default Navbar;
