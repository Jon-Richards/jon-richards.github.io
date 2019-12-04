/**
 * @fileoverview
 * 
 * Contains thunk that handles fetching and publishing data from the overview
 * endpoint.
 */

import { ThunkAction } from 'redux-thunk';
import { GetPortfolio, PublishPortfolio } from '../store/portfolio';
import { RootStore } from '../store/root';
import { setRequestOptions } from '../async/request_configs';
import { OverviewValidator, OverviewResponseData } from '../async/node_validators/overview';
import { overviewEndpoint } from '../async/endpoints';

function publishPortfolio(
  projects: PublishPortfolio['projects'],
  tools: PublishPortfolio['tools']
): PublishPortfolio {
  return {
    type: 'PORTFOLIO__PUBLISH_PORTFOLIO',
    projects,
    tools
  };
}

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
    dispatch((): GetPortfolio => ({type: 'PORTFOLIO__GET_PORTFOLIO'}));

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