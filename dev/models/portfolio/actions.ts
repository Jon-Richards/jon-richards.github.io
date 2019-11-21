/**
 * @fileoverview
 * Conatains action creators used by the Portfolio reducucer.
 */

import { PortfolioModelShape } from './interfaces/portfolio';
import { Action } from 'redux';

/** Notifies the app that a request for for the portfolio has been made. */
export function getPortfolioAction(): Action<'PORTFOLIO__GET_PORTFOLIO'> {
  return {
    type: 'PORTFOLIO__GET_PORTFOLIO'
  };
}

/** 
 * Publishes a complete collection of portfolio data to the store.
 * @param projects An array of projects to add to the Portfolio store.
 * @param tools An array of tools that were used in each project of the
 * portfolio.
 */
export function publishPortfolioAction(
  projects: PortfolioModelShape['projects'],
  tools: PortfolioModelShape['tools']
): Action<'PORTFOLIO__PUBLISH_PORTFOLIO'> & {
  /** An array of projects that will overwrite those in the Portfolio store. */
  projects: PortfolioModelShape['projects'];
  /** An array of tools that will overwrite those in the Portfolio store. */
  tools: PortfolioModelShape['tools'];
} {
  return {
    type: 'PORTFOLIO__PUBLISH_PORTFOLIO',
    projects,
    tools
  };
}