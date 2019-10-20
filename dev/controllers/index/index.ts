/**
 * @fileoverview
 * Contains the portfolio controller.
 */

import { ThunkAction, PORTFOLIO_ACTIONS, AppState } from '../mediator';
import { ENDPOINTS, setRequestOptions } from '../api';

/**
 * Requests an overview of the portfolio from the API and publishes the
 * response to the store.
 */
function getOverview(): ThunkAction<
  Promise<ReturnType<typeof PORTFOLIO_ACTIONS.publishPieces>>,
  AppState,
  undefined,
  | ReturnType<typeof PORTFOLIO_ACTIONS.getPieces>
  | ReturnType<typeof PORTFOLIO_ACTIONS.publishPieces>
> {
  return dispatch => {
    dispatch(PORTFOLIO_ACTIONS.getPieces());

    return fetch(ENDPOINTS.overview(), setRequestOptions('GET'))
      .then(resp => resp.json())
      .then(resp => {
        const pieces = (resp.pieces as unknown) as AppState['portfolio']['pieces'];
        return dispatch(PORTFOLIO_ACTIONS.publishPieces(pieces));
      })
      .catch(error => {
        console.error(error);
        return dispatch(PORTFOLIO_ACTIONS.publishPieces([]));
      });
  };
}

export const INDEX_CONTROLLER = {
  getOverview,
};
