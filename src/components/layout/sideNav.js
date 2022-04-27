import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/product">
          <span>Product</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default SideNav;
