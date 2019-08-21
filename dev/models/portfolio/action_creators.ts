/**
 * @fileoverview
 * Conatains action creators used by the Portfolio reducucer.
 */

import { Action, PortfolioState } from './mediator';

/** 
 * Gets all portfolio pieces.
 * @return A Redux action signaling to the app that a request for portfolio pieces is being made.
 */
export function getPieces (): Action<'PORTFOLIO__GET_PIECES'> {
    return {
        type: 'PORTFOLIO__GET_PIECES',
    };
}

/**
 * Action that sinals to the application that a request to get all portfolio pieces is 
 * being made. 
 */
export interface GetPiecesAction extends Action {
    /** The action's "type" property. */
    type: 'PORTFOLIO__GET_PIECES';
}

/**
 * Publishes an array of portfolio pieces to the application store.
 * @return A Redux action that updates the application store with an array of portfolio pieces.
 */
export function publishPieces (pieces: PortfolioState['pieces']):  Action<
    'PORTFOLIO__PUBLISH_PIECES'
> & {
    /** The array of resulting portfolio pieces that will be published to the store. */
    pieces: PortfolioState['pieces']
} {
    return {
        type: 'PORTFOLIO__PUBLISH_PIECES',
        pieces
    };
}

/** Mapping of all Action Creators for the Portfolio module. */
export const ACTIONS = {
    getPieces,
    publishPieces
};