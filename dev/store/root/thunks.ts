/**
 * @fileoverview
 * Contains thunks related to the overall application.
 */

import { 
    Dispatch, 
    Action, 
    ActionCreator,
    Store
} from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { 
    AppState, 
    PORTFOLIO_ACTIONS 
} from './mediator';

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
export function init (): ThunkAction<
    ReturnType<typeof PORTFOLIO_ACTIONS.getPieces>, 
    AppState, 
    null, 
    ReturnType<typeof PORTFOLIO_ACTIONS.getPieces>
> {
    return (dispatch, getState) => {
        const foo = getState().portfolio;
        return dispatch(PORTFOLIO_ACTIONS.getPieces(1));
    };
}