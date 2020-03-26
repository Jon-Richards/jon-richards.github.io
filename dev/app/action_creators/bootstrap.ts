/**
 * @fileoverview
 * Contains an action creator that sets up the application.
 */

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { PublishPortfolio } from '../store/portfolio';
import { Store } from '../store';
import { MediaQueryTracker } from 'Lib/ts/media_query_tracker';
import { UpdateStatus, SetRoute } from '../store/application';
import { getOverview } from '../async/requests';
import { UpdateMatchingMediaQueries } from '../store/browser';
import { MediaQuery } from 'Config/media_queries';
import { setRoute } from './set_route';

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

function updateMatchingMediaQueries(
  matches: UpdateMatchingMediaQueries['matches']
): UpdateMatchingMediaQueries {
  return {
    type: 'BROWSER__UPDATE_MATCHING_MEDIA_QUERIES',
    matches
  };
}

/**
 * Initializes the Media Query Tracker with the standard media queries and
 * a callback to update the store so that the application will have up to
 * date query matches at sensible times, e.g. orientation state change.
 * @param dispatch Reference to the dispatch method for updating the Store.
 * @param queries The set of queries to use when configuring the Media Query
 * Tracker.
 */
function trackMediaQueries (
  dispatch: ThunkDispatch<
    Store,
    undefined,
    | UpdateMatchingMediaQueries
  >,
  queries: MediaQuery[]
): MediaQueryTracker<MediaQuery> {
  return new MediaQueryTracker(
    queries,
    [
      {event: 'load', throttle: 0},
      {event: 'resize', throttle: 500},
      {event: 'orientationchange', throttle: 500}
    ],
    (e) => dispatch(updateMatchingMediaQueries(e.matches))
  );
}

/** Coordinates bootstrapping the application. */
export function bootstrap(): ThunkAction<
  Promise<UpdateStatus | void> | void,
  Store,
  undefined,
  | PublishPortfolio
  | UpdateStatus
> {
  return (dispatch, getState) => {

    trackMediaQueries(dispatch, getState().browser.possible_media_queries);
    dispatch(setRoute(window.location.pathname));

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