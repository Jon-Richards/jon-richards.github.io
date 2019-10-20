/**
 * @fileoverview
 * Contains the root reducer for the application.
 */

import { combineReducers } from './mediator';
import { portfolioReducer as portfolio } from './mediator';

/**
 * Reducer comprised of all other top level reducers.  This should never be
 * updated directly.
 */
export const REDUCER = combineReducers({
  portfolio,
});

/** Shape of the entire application store. */
export type Store = ReturnType<typeof REDUCER>;
