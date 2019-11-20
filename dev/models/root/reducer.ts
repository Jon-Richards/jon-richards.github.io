/**
 * @fileoverview
 * Contains the root reducer for the application.
 */

import { combineReducers } from 'redux';
import { portfolioReducer as portfolio } from '../portfolio';

/**
 * Reducer comprised of all other top level reducers.  This should never be
 * updated directly.
 */
export const ROOT_REDUCER = combineReducers({
  portfolio,
});

/** Shape of the entire application store. */
export type RootStore = ReturnType<typeof ROOT_REDUCER>;
