import React, { useEffect, useState } from 'react';
import * as Axios from 'axios';
import Header from './header';
import styles from './index.module.sass';
import SideNav from './sideNav';

import * as env from '../../.env.js'

const Layout = (props) => {
  const [state, setState] = useState({});
  const appId = env.APP_ID;
 
  useEffect(() => {
    const fetchData = async () => {
      const data = await Axios.get(`/configuration/${appId}`);
      setState({config: data});
    }

    fetchData()
  }, []);
  
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.frame}>
        <SideNav />
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
