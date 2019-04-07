/**
 * @fileoverview
 * Contains the MessageUpdate action.
 */

'use strict';

import { ActionCreator } from '../../action_creator';
import { MessagesState } from '../messages_reducer';

/** Shape of the payload for an UpdateMessage action. */
type PayloadShape = {
    /** The message to write to the Store. */
    message: MessagesState['message'];
};

/**
 * @classdesc
 * An action for updating the root message in the store.
 * @example
 * dispatch( new MessageUpdate('hello world!').action );
 */
export class MessageUpdate extends ActionCreator<'ROOT_UPDATE_MESSAGE', PayloadShape> {
    /**
     * @constructor
     * Instantiate a new MessageUpdate with a default message value.
     * @param message The message to write to the store.
     */
    constructor(message: string) {
        super('ROOT_UPDATE_MESSAGE', { message });
    }
}
