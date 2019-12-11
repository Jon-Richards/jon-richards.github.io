/**
 * @fileoverview
 * 
 * Contains thunk that handles fetching and publishing data from the overview
 * endpoint.
 */

import { ThunkAction } from 'redux-thunk';
import { GetPortfolio, PublishPortfolio } from '../store/portfolio';
import { RootStore } from '../store';
import { getOverview as getOverviewRequest } from '../async/requests';

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
 * If the Portfolio store has no tools or projects, makes a request to the API
 * to load them and publishes the result to the store.
 */
export function getOverview(): ThunkAction<
  Promise<PublishPortfolio | void> | void,
  RootStore,
  undefined,
  | GetPortfolio
  | PublishPortfolio
> {
  return (dispatch, getState) => {
    const {projects, tools} = getState().portfolio;
    
    if (projects.length || tools.length) return;
    
    dispatch((): GetPortfolio => ({type: 'PORTFOLIO__GET_PORTFOLIO'}));
    return getOverviewRequest()
      .then(resp => {
        if (resp.getErrors().size > 0) Promise.reject('Invalid Overview data.');
        const {projects, tools} = resp.data;
        return dispatch(publishPortfolio(projects, tools));
      })
      .catch(error => {
        console.error(error);
      });
  };
}