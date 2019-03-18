/**
 * @fileoverview
 * Main entry point for the application.
 */

import * as React from 'react';
import { render, } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import { APP } from './containers/app';

render(
    <Provider store={configureStore()}>
        <APP />
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}