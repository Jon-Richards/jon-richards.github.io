/**
 * @fileoverview
 * Conatains action creators used by the Portfolio reducucer.
 */

import { State, Action } from './mediator';

/** Action that notifies the app that a request for the tools filters as been made. */
export function getToolsFilters (): Action<'TOOLS__GET_FILTERS'> {
    return {
        type: 'TOOLS__GET_FILTERS'
    };
}

/** Mapping of all Action Creators for the Portfolio module. */
export const ACTIONS = {
    getToolsFilters
};