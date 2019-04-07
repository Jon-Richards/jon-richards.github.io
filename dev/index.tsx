/**
 * @fileoverview
 * Main entry point for the application.
 */

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import { APP } from './containers/app';

/**
 * Applies the store to the root of the application tree as props and renders
 * it to the DOM.
 */
render(
    <Provider store={configureStore()}>
        <APP />
    </Provider>,
    document.getElementById('app')
);

/**
 * If Webpack devserver considers this module "hot", changes to the app will
 * result in recompilation and served back into the app asynchronously.
 */
if (module.hot) {
    module.hot.accept();
}
