import { combineReducers } from 'redux';
import {CartProductReducer} from './reducers/CartProductReducer';
import AuthenticationReducer from './reducers/AuthenticationReducer';

const rootReducer = combineReducers({
    CartItemInfo: CartProductReducer,
    AuthenticationInfo: AuthenticationReducer
  });
  
  export default rootReducer;