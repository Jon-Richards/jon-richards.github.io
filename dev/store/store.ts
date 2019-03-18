/**
 * @fileoverview
 * Creates the Redux store.
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { messagesReducer } from './messages/messages_reducer';

/** Reducer comprised of all other top level reducers. */
const rootReducer = combineReducers({
    messages: messagesReducer
});

/** 
 * Configures the store with various middleware and enhancers in addition to
 * the reducers.
 * @return An instance of the application store.
 */
export function configureStore () {
    const middlewares = [
        thunkMiddleware
    ];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}

/** Shape of the entire store. */
export type StoreShape = ReturnType<typeof rootReducer>;
