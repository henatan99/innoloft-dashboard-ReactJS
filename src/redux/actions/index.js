import * as Axios from 'axios';

import {
  PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, SET_PRODUCT, SET_CONFIG
} from './types';

export const fetchProduct = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_REQUEST,
  });
  try {
    const { data } = await Axios.get('/product/6781');
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE, payload: error.message });
  }
};

export const setProduct = (product) => async (dispatch) => {
  try {
    const { data } = await Axios.put(
      '/product/6781',
      { product },
    );
    dispatch({ type: SET_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE, payload: error.message });
  }
};

export const fetchConfig = (appId) => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/configuration/${appId}`);
    dispatch({ type: SET_CONFIG, payload: data });
  } catch (error) {
    
  }
}
