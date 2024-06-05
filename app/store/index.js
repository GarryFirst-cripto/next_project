import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import postReducer from './postReducer';

const state = typeof window !== 'undefined' ? localStorage.getItem('store') : null;
const initialState = state ? JSON.parse(state) : {};

const middlewares = [thunk];

const reducers = {
  post: postReducer,
};
const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middlewares: applyMiddleware(...middlewares)
});

if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', function (event) {
    localStorage.setItem('store', JSON.stringify(store.getState()));
  });
}

export default store;