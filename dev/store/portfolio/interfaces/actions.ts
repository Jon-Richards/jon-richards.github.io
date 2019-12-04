
import { PortfolioStore } from './store';
import { Action } from 'redux';

/** Notifies the app that a request for for the portfolio has been made. */
export type GetPortfolio = Action<'PORTFOLIO__GET_PORTFOLIO'>;

/** Publishes a collection of portfolio pieces to the store. */
export interface PublishPortfolio extends Action<
  'PORTFOLIO__PUBLISH_PORTFOLIO'
> {
  /** An array of projects that will overwrite those in the Portfolio store. */
  projects: PortfolioStore['projects'];
  /** An array of tools that will overwrite those in the Portfolio store. */
  tools: PortfolioStore['tools'];
}