import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

import {NAV_LINKS} from "utils/constants";

const Header = () => (
  <div id="header">
    <div className="container">
      <div className="logo">
        <span>react-</span>
        workshop
      </div>
      <ul className="right-nav">
        <li>
          <Link to={NAV_LINKS.ACCOUNT.url}>My Account</Link>
        </li>
        <li>
          <Link to={NAV_LINKS.LOGIN.url}>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
