/**
 * @fileoverview
 * Contains the portfolio controller.
 */

import { 
    Dispatch, 
    Action, 
    ActionCreator, 
    Store,
    ThunkDispatch, 
    ThunkAction,
    PORTFOLIO_ACTIONS,
    AppState 
} from '../mediator';
import { ENDPOINTS, RequestInit } from '../api';

// /** 
//  * Makes API requests required to initialize the application.
//  * @template R The return value.
//  * @template S The application state.
//  * @template E An extra argument to pass to the thunk.
//  * @template A Actions that are dispatchable by the ThunkAction.
//  */
// export function init (): ThunkAction<
//     ReturnType<typeof PORTFOLIO_ACTIONS.getPieces>, 
//     AppState, 
//     null, 
//     ReturnType<typeof PORTFOLIO_ACTIONS.getPieces>
// > {
//     return (dispatch, getState) => {
//         const foo = getState().portfolio;
//         return dispatch(PORTFOLIO_ACTIONS.getPieces());
//     };
// }

/** Requests all portfolio pieces from the API and publishes them to the store. */
function getPieces(): ThunkAction<
    ReturnType<typeof PORTFOLIO_ACTIONS.publishPieces>,
    AppState,
    undefined,
    | ReturnType<typeof PORTFOLIO_ACTIONS.getPieces>
    | ReturnType<typeof PORTFOLIO_ACTIONS.publishPieces>
> {
    return (dispatch, getState) => {
        dispatch(PORTFOLIO_ACTIONS.getPieces());

        fetch(
            ENDPOINTS.projects(),
            RequestInit('GET')
        )
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .catch(error => console.error(error));
        
        return dispatch(PORTFOLIO_ACTIONS.publishPieces([]));
    };
}

export const INDEX_CONTROLLER = {
    getPieces
};