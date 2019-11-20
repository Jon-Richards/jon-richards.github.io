/**
 * @fileoverview
 * The reducer for the portfolio store.
 */

import { getProjectsAction, publishProjectsAction } from './actions';
import { PortfolioState } from './state';

/**
 * The Redux reducer for the Portfolio store.  If no params are supplied, a
 * default Portfolio State will be created.
 * @param state An object representing the current state of the Portfolio store.
 * @param action An action creator for updating the supplied state.
 */
export function portfolioReducer(
  state: PortfolioState = {
    projects: [],
  },
  action?: 
  | ReturnType<typeof getProjectsAction>
  | ReturnType<typeof publishProjectsAction>
): PortfolioState {
  if (action) {
    switch (action.type) {
      case 'PORTFOLIO__GET_PIECES':
        return state;
      default:
        return state;
    }
  }

  return state;
}
