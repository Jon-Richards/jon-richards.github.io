/**
 * @fileoverview
 * Contains an action creator that sets up the application.
 */

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { PublishPortfolio } from '../store/portfolio';
import { RootStore } from '../store';
import { BreakpointTracker } from '../lib/ts/breakpoint_tracker';
import { UpdateStatus } from '../store/application';
import { getOverview } from '../async/requests';

function updateStatus(): UpdateStatus {
  return {
    type: 'APPLICATION__UPDATE_STATUS',
    status: 'ready'
  };
}

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

/** Coordinates bootstrapping the application. */
export function bootstrap(): ThunkAction<
  Promise<UpdateStatus | void> | void,
  RootStore,
  undefined,
  | PublishPortfolio
  | UpdateStatus
> {

  const bp = new BreakpointTracker([
    {name: 'sm', min: 0, max: 99, unit: 'px'},
    {name: 'md', min: 100, max: Infinity, unit: 'px'}
  ],
    () => (console.log('breakpoint'))
  );

  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const overview = getOverview()
      .then((resp => {
        if (resp.getErrors().size > 0) reject('Invalid Overview data.');
        const {projects, tools} = resp.data;
        return dispatch(publishPortfolio(projects, tools));
      }));

      resolve(overview);
    }).then(() => {
      return dispatch(updateStatus());
    }).catch(error => {
      console.error(error);
    });
  };
}