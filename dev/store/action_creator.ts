/**
 * @fileoverview
 * Contains a base class from which to create Action Creators.  All action
 * creators should extend from this class.
 */

'use strict';

/**
 * @classdesc
 * A base class from which to create actions.
 */
export class ActionCreator<T extends string, P extends object> {
    /** The type designation for the action. */
    type: T;
    /** 
     * Properties that will appear in the action, with exception to the
     * payload, that is assigned via the constructor.
     */
    payload: P;
    
    /**
     * Assignes the type mmeber for the action corresponding to this action
     * creator.
     * @param type The type designation for the action.
     * @param defaultPayload Default values for the payload, can be
     * overwritten later.
     */
    constructor (type:T, defaultPayload: P) {
        this.type = type;
        this.payload = defaultPayload;
    }

    /**
     * Overwrites the current payload with new values and returns the updated
     * action.
     * @param payload The payload containing all properties (excluding the type)
     * that should appear in the action.
     */
    createAction(payload?: P): ActionCreator<T, P>['action'] {
        this.payload = payload ? payload : this.payload;
        return this.action;
    }

    /** 
     * The assembled action corresponding to this Action Creator.
     * @return A complete action for use by the Store.
     */
    get action(): {type: T} & P {
        return {
            ...this.payload,
            type: this.type
        };
    }
}
