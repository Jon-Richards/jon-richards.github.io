/**
 * @fileoverview
 * Handles dependencies for the Root module.
 */

 /** Extneral  */
export { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
export { thunkMiddleware };
export { composeWithDevTools } from 'redux-devtools-extension';
export { portfolioReducer } from '../portfolio';

/** Internal */
import { REDUCER as APP_REDUCER, Store as AppState } from './reducer';
export { APP_REDUCER, AppState };
export { create } from './create_store';