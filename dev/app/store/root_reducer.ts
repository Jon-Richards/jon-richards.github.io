/**
 * @fileoverview
 * Contains the root reducer for the application.
 */

import { combineReducers } from 'redux';
import { APPLICATION_REDUCER as application } from './application';
import { PORTFOLIO_REDUCER as portfolio } from './portfolio';
import { BROWSER_REDUCER as browser } from './browser';

/**
 * Reducer comprised of all other top level reducers.  This should never be
 * updated directly.
 */
export const ROOT_REDUCER = combineReducers({
  application,
  browser,
  portfolio,
});
