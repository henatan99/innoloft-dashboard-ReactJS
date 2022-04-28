import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/actions';
import MapComponent from '../Map/MapComponent';
import Attributes from './attributes';
import UserInfo from './userInfo';
import styles from './index.module.sass';

const Product = () => {
  const dispatch = useDispatch();
  const fetchedProduct = useSelector((state) => state.productReducer);
  const fetchedConfig = useSelector((state) => state.configReducer);
  const { product, loading, error } = fetchedProduct;
  const [contentType, setContentType] = useState('description');

  console.log('fetched config', fetchedConfig);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const onTabClickDesc = () => setContentType('description');
  const onTabClickAttr = () => setContentType('attributes');

  return (
    loading ? <div>.. Loading</div>
      : error ? <div>{error}</div>
        : (
          <div className={styles.main}>
            <div className={styles.grid_elem}><img src={product?.picture} className={styles.picture} /></div>
            <div className={styles.grid_elem}>
              {
          fetchedConfig.config.hasUserSection
          && (
          <UserInfo
            picture={product?.user?.profilePicture}
            name={`${product?.user?.firstName}${product?.user?.lastName}`}
            companyName={product?.company?.name}
          />
          )
        }
            </div>
            <p className={styles.grid_elem}>
              <span>
                Title:
                {product?.name}
              </span>
              <span>
                Type:
                {product?.type?.name}
              </span>
            </p>
            <button className={styles.grid_elem} type="button" onClick={onTabClickDesc}>Description</button>
            <button className={styles.grid_elem} type="button" onClick={onTabClickAttr}>Attributes</button>
            <div className={styles.grid_elem}>
              {contentType === 'description'
                ? (
                  <span contentEditable>
                    <div dangerouslySetInnerHTML={{ __html: `${product.description}` }} />
                  </span>
                )
                : (
                  <Attributes
                    categories={product.categories}
                    businessModels={product.businessModels}
                    trl={product.trl}
                  />
                )}
            </div>
            <div className={styles.grid_elem}>
              <MapComponent lat={product?.company?.address?.latitude} lng={product?.company?.address?.longitude} />
            </div>
          </div>
        )
  );
};

export default Product;
