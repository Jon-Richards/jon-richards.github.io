/**
 * @fileoverview
 * The reducer for the portfolio store.
 */

import { Reducer } from 'redux';
import { PortfolioModelShape } from './interfaces/portfolio';
import { 
  getPortfolioAction,
  publishPortfolioAction
} from './actions';

/**
 * The Redux reducer for the Portfolio store.  If no params are supplied, a
 * default Portfolio State will be created.
 * @param state An object representing the current state of the Portfolio store.
 * @param action An action creator for updating the supplied state.
 */
export const PORTFOLIO_REDUCER: Reducer<
  PortfolioModelShape,
  | ReturnType<typeof getPortfolioAction>
  | ReturnType<typeof publishPortfolioAction>
> = (
  state = {
    projects: [],
    tools: []
  },
  action
) => {
  if (action) {
    switch (action.type) {
      case 'PORTFOLIO__GET_PORTFOLIO':
        return state;
      case 'PORTFOLIO__PUBLISH_PORTFOLIO':
        return {
          ...state,
          projects: action.projects,
          tools: action.tools
        };
      default:
        return state;
    }
  }

  return state;
};
