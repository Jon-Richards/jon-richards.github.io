import { GetPortfolio } from '../../store/portfolio/interfaces/actions';

/** Notifies the app that a request for for the portfolio has been made. */
export function getPortfolio(): GetPortfolio {
  return {
    type: 'PORTFOLIO__GET_PORTFOLIO'
  };
}