import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProduct from '../../redux/actions';
import MapComponent from '../Map/MapComponent';
import styles from './index.module.sass';

const Product = () => {
  const dispatch = useDispatch();
  const fetchedProduct = useSelector((state) => state.productReducer)
  const { product, loading, error } = fetchedProduct;
  const [contentType] = useState('description');

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch])

  return (
    loading ? <div>.. Loading</div> :
    error ? <div>{error}</div> :
    <div className={styles.main}>
      <div className={styles.grid_elem}><img src={product?.picture}/></div>
      <p className={styles.grid_elem}><img src={product?.user?.profilePicture} /></p>
      <p className={styles.grid_elem}>{product?.name}{product?.type?.name}</p>
      <button className={styles.grid_elem} type="button">Description</button>
      <button className={styles.grid_elem} type="button">Attributes</button>
      <p className={styles.grid_elem}>{contentType === 'description' ? product?.description : attributes}</p>
      <div className={styles.grid_elem}>
        <MapComponent lat={product?.company?.address?.latitude} lng={product?.company?.address?.longitude} />
      </div>
    </div>
  );
}
  
export default Product;
