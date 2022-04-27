import React from 'react';
import styles from './index.module.sass';

const Product = (props) =>
//   const { product } = props;
  (
    <div className={styles.main}>
        <div className={styles.grid_elem}><img /></div>
        <p className={styles.grid_elem}>User Info</p>
        <p className={styles.grid_elem}>This is main info</p>
        <p className={styles.grid_elem}>Description</p>
        <p className={styles.grid_elem}>Attributes</p>
        <p className={styles.grid_elem}>Content</p>
        <div className={styles.grid_elem}>Map</div>
    </div>
  );
export default Product;
