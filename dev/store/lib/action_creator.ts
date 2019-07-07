/**
 * @fileoverview
 * A base interface for creating Actions.
 */

/** Base interface for an Action Creator. */
export interface ActionCreator<T extends string> {
    /** The string designation used by the reducer for identifying this action. */
    type: T;
}