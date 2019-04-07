/**
 * @fileoverview
 * Contains the root reducer.
 */

'use strict';

import { MessageUpdate } from './action_creators/message_update';

/** The Root state of the reducer. */
export type MessagesState = {
    /** Just a test message. */
    message: string;
};

/**
 * Updates the Root member of the Store.
 * @param state The current state of the Root memeber of the store.
 * @param action The Action by which to make modifications.
 */
export function messagesReducer(
    state: MessagesState = {
        message: 'Hello world!',
    },
    action: MessageUpdate['action']
): MessagesState {
    switch (action.type) {
        case 'ROOT_UPDATE_MESSAGE':
            return {
                ...state,
                message: action.message,
            };
        default:
            return state;
    }
}
