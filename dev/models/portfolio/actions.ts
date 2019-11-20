/**
 * @fileoverview
 * Conatains action creators used by the Portfolio reducucer.
 */

import { PortfolioState } from './state';
import { Action } from 'redux';

/**
 * Gets all portfolio projects.
 * @return A Redux action signaling to the app that a request for portfolio
 * projects is being made.
 */
export function getProjectsAction(): Action {
  return {
    type: 'PORTFOLIO__GET_PIECES'
  };
}

/**
 * Publishes an array of portfolio projects to the application store.
 * @return A Redux action that updates the application store with an array of
 * portfolio projects.
 */
export function publishProjectsAction(
  projects: PortfolioState['projects']
): Action<'PORTFOLIO__PUBLISH_PIECES'> & {
  /**
   * The array of resulting portfolio projects that will be published to the
   * store.
   */
  projects: PortfolioState['projects'];
} {
  return {
    type: 'PORTFOLIO__PUBLISH_PIECES',
    projects
  };
}