/**
 * @fileoverview
 * Contains an action creator that sets up the application.
 */

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { PublishPortfolio } from '../store/portfolio';
import { RootStore } from '../store';
import { MediaQueryTracker } from '../lib/ts/media_query_tracker';
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

  /**
   * 375: 375px,
   * 480: 480px,
   * 720: 720px,
   * 1080: 1080px,
   * 1440: 1400px,
   */

  const mqt = new MediaQueryTracker(
    [
      {id: '375', query: '(min-width: 375px) and (max-width: 479px)'},
      {id: '480', query: '(min-width: 480px) and (max-width: 719px)'},
      {id: '720', query: '(min-width: 720px) and (max-width: 1079px)'},
      {id: '1080', query: '(min-width: 1080px) and (max-width: 1439px)'},
      {id: '1440', query: '(min-width: 1440px)'},
    ],
    [
      {event: 'load', throttle: 0},
      {event: 'resize', throttle: 300},
      {event: 'orientationchange', throttle: 300}
    ],
    (e) => console.log(e)
  );

  console.log('', mqt.getMatches());

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