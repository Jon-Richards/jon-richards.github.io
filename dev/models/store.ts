import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension';
import {bootstrapReducer as bootstrap, IBootstrapState} from './bootstrap';
import {default as reducers} from './reducers';

/** The overall structure of the redux store. */
export interface IStore {
    /** Contains data needed to bootstrap the application. */
    bootstrap: IBootstrapState;
}

/**
 * Creates the redux store and hanles HMR functionality when
 * a reducer is updated.
 * @returns The constructed store object.
 */
export function configureStore() {

    const store = createStore(
        reducers, // initial state
        devToolsEnhancer({}), // redux devtools
    );

    if (module.hot) {
        module.hot.accept(require('./reducers'), () => {
            const nextReducers = require('./reducers');
            store.replaceReducer(nextReducers);
        });
    }

    return store;
}
