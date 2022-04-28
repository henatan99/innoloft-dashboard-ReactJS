import { PRODUCT_FAILURE, PRODUCT_SUCCESS, PRODUCT_REQUEST } from '../actions/types';

const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true };
    case PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
