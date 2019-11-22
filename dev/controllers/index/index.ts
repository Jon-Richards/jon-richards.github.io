/**
 * @fileoverview
 * Controller for the index page.
 */

import { ThunkAction } from 'redux-thunk';
import { getPortfolioAction, publishPortfolioAction } from '../../models/portfolio';
import { RootStore } from '../../models/root';
import { overviewEndpoint, setRequestOptions } from '../api';
import { OverviewValidator, OverviewResponseData } from '../api/node_validators/overview';

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
