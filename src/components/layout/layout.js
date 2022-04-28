import React, { useEffect } from 'react';
import * as Axios from 'axios';
import { useDispatch } from 'react-redux';
import Header from './header';
import styles from './index.module.sass';
import SideNav from './sideNav';
import { fetchConfig } from '../../redux/actions';
import * as env from '../../.env.js';

const Layout = (props) => {
  const dispatch = useDispatch();
  const appId = env.APP_ID;

  useEffect(() => {
    dispatch(fetchConfig(appId));
  }, [dispatch]);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.frame}>
        <SideNav />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
