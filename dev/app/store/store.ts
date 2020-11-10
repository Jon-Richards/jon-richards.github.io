/**
 * @fileoverview
 * Creates the Redux store.
 */

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ROOT_REDUCER } from './root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Creates and configures the store with various middleware and enhancers in
 * addition to the reducers.
 * @return An instance of the application store.
 */
function buildStore () {
  const middlewares = [thunk];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    ROOT_REDUCER,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}

/** The application store. */
export const STORE = buildStore();

/** Shape of the application store. */
export type Store = ReturnType<typeof ROOT_REDUCER>;
