/**
 * @fileoverview
 * Contains thunks related to the overall application.
 */

import { Dispatch, Action, ActionCreator, Store } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { RootStore } from '../root';
import { getProjectsAction, publishProjectsAction } from '../portfolio';

/** Hi */
function sayHi(): Promise<Response> {
  console.log('hi!');
  return fetch('http://www.google.com');
}

/** Some action */
function someAction(phrase: string) {
  console.log('some action');
}

/**
 * Makes API requests required to initialize the application.
 * @template R The return value.
 * @template S The application state.
 * @template E An extra argument to pass to the thunk.
 * @template A An action to pass in the return value.
 */
export function init(): ThunkAction<
  ReturnType<typeof getProjectsAction>,
  RootStore,
  null,
  ReturnType<typeof getProjectsAction>
> {
  return (dispatch, getState) => {
    const foo = getState().portfolio;
    return dispatch(getProjectsAction());
  };
}
