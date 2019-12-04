/**
 * @fileoverview
 * 
 * Contains thunk actions for interacting with the Overview endpoint.
 */

import { ThunkAction } from 'redux-thunk';
import { getPortfolioAction, publishPortfolioAction } from '../../models/portfolio';
import { RootStore } from '../../models/root';
import { setRequestOptions } from '../request_configs';
import { OverviewValidator, OverviewResponseData } from '../node_validators/overview';
import { API_BASE } from '../api_base';

/**
 * Returns the API endpoint for an overview of the portfolio.
 * @return The API endpoint for an overview of the portfolio.
 */
export function overviewEndpoint(): string {
  return `${API_BASE}/overview`;
}

/**
 * Requests an overview of the portfolio from the API and publishes the
 * response to the store.
 */
export function getOverview(): ThunkAction<
  Promise<ReturnType<typeof publishPortfolioAction>>,
  RootStore,
  undefined,
  | ReturnType<typeof getPortfolioAction>
  | ReturnType<typeof publishPortfolioAction>
> {
  return dispatch => {
    dispatch(getPortfolioAction());

    return fetch(overviewEndpoint(), setRequestOptions('GET'))
      .then(resp => resp.json())
      .then(resp => {
        const body = resp as unknown as OverviewResponseData;
        const { projects, tools } = new OverviewValidator(body).data;
        return dispatch(publishPortfolioAction(projects, tools));
      })
      .catch(error => {
        console.error(error);
        return dispatch(publishPortfolioAction([], []));
      });
  };
}