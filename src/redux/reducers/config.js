import {
    SET_CONFIG,
  } from '../actions/types';
  
  const configReducer = (state = { config: {} }, action) => {
    switch (action.type) {
      case SET_CONFIG:
        return { config: action.payload };
      default:
        return state;
    }
  };
  
  export default configReducer;
  