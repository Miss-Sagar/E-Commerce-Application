// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';

//here we also use configureStore from '@reduxjs/toolkit'
const store = configureStore({
    reducer: rootReducer
});
// const store = createStore(rootReducer);

export default store;