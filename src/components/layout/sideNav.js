import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.sass';

const SideNav = () => (
  <nav className={styles.side_nav}>
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
