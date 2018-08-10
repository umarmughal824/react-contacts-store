import React from 'react';

import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { NAV_LINKS } from 'utils/constants';

const Sidebar = () => (
  <div className="sidebar">
    <ul className="side-nav">
      {Object.keys(NAV_LINKS).map((aLink) => (
        <li key={NAV_LINKS[aLink].url}>
          <NavLink to={NAV_LINKS[aLink].url} activeClassName="active">
            {NAV_LINKS[aLink].displayName}
          </NavLink>
          &nbsp;
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
