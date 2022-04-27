import React from 'react';
import Header from './header';
import styles from './index.module.sass';
import SideNav from './sideNav';

const Layout = (props) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.frame}>
      <SideNav />
      {props.children}
    </div>
  </div>
);

export default Layout;
