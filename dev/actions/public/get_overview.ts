/**
 * @fileoverview
 * 
 * Contains thunk actions for interacting with the Overview endpoint.
 */

import { ThunkAction } from 'redux-thunk';
import { getPortfolio } from '../private/get_portfolio';
import { publishPortfolio } from '../private/publish_portfolio';
import { GetPortfolio, PublishPortfolio } from '../../store/portfolio/interfaces/actions';
import { RootStore } from '../../store/root';
import { setRequestOptions } from '../../async/request_configs';
import { OverviewValidator, OverviewResponseData } from '../../async/node_validators/overview';
import { overviewEndpoint } from '../../async/endpoints';

/**
 * Requests an overview of the portfolio from the API and publishes the
 * response to the store.
 */
export function getOverview(): ThunkAction<
  Promise<PublishPortfolio>,
  RootStore,
  undefined,
  | GetPortfolio
  | PublishPortfolio
> {
  return dispatch => {
    dispatch(getPortfolio());

    return fetch(overviewEndpoint(), setRequestOptions('GET'))
      .then(resp => resp.json())
      .then(resp => {
        const body = resp as unknown as OverviewResponseData;
        const { projects, tools } = new OverviewValidator(body).data;
        return dispatch(publishPortfolio(projects, tools));
      })
      .catch(error => {
        console.error(error);
        return dispatch(publishPortfolio([], []));
      });
  };
}