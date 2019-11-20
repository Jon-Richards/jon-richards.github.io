/**
 * @fileoverview
 * Controller for the index page.
 */

import { ThunkAction } from 'redux-thunk';
import {
  getProjectsAction,
  publishProjectsAction
 } from '../../models/portfolio';
import { RootStore } from '../../models/root';
import { overviewEndpoint, setRequestOptions } from '../api';

/**
 * Requests an overview of the portfolio from the API and publishes the
 * response to the store.
 */
export function getOverview(): ThunkAction<
  Promise<ReturnType<typeof publishProjectsAction>>,
  RootStore,
  undefined,
  | ReturnType<typeof getProjectsAction>
  | ReturnType<typeof publishProjectsAction>
> {
  return dispatch => {
    dispatch(getProjectsAction());

    return fetch(overviewEndpoint(), setRequestOptions('GET'))
      .then(resp => resp.json())
      .then(resp => {
        const pieces = 
            (resp.pieces as unknown) as RootStore['portfolio']['projects'];
        return dispatch(publishProjectsAction(pieces));
      })
      .catch(error => {
        console.error(error);
        return dispatch(publishProjectsAction([]));
      });
  };
}
