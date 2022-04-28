import * as Axios from 'axios';

import { PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from './types';

const fetchProduct = () => async (dispatch) => {
  const baseURL = 'https://api-test.innoloft.com';
  console.log('baseURL', baseURL)
  dispatch({
    type: PRODUCT_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/product/6781`);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE, payload: error.message });
  }
};

export default fetchProduct;
