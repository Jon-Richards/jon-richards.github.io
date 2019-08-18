/**
 * @fileoverview
 * Conatains action creators used by the Portfolio reducucer.
 */

import { ActionCreator, State } from './mediator';

/** 
 * Gets an overview of all portfolio pieces.
 * @param id The number of the active portfolio piece.
 * @return A Redux action for updating the active piece ID in the Portfolio store.
 */
export function getPieces (id: number): ActionCreator<'PORTFOLIO__GET_PIECES'> & {
    /** The number of the active portfolio piece. */
    id: State['activePieceId'];
} {
    return {
        type: 'PORTFOLIO__GET_PIECES',
        id
    };
}

/** Gets an overview of all portfolio pieces. */
export function sayHello (message: string): ActionCreator<'PORTFOLIO__SAY_HELLO'> & {
    /** A new message. */
    message: State['message'];
} {
    return {
        type: 'PORTFOLIO__SAY_HELLO',
        message
    };
}

/** Mapping of all Action Creators for the Portfolio module. */
export const ACTIONS = {
    getPieces,
    sayHello
};