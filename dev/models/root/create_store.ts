/**
 * @fileoverview
 * Creates the Redux store.
 */

import {
  createStore,
  applyMiddleware,
  thunkMiddleware,
  composeWithDevTools,
  APP_REDUCER,
} from './mediator';

/**
 * Creates and configures the store with various middleware and enhancers in
 * addition to the reducers.
 * @return An instance of the application store.
 */
export function create() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    APP_REDUCER,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
