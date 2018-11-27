import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '../../models/store';
import './root.scss';

const RootContainer = require('./root').RootContainer; // tslint:disable-line:no-var-requires

ReactDOM.render(
    <Provider store={configureStore()}>
        <RootContainer />
    </Provider>
, document.getElementById('root'));

if (module.hot) {
    module.hot.accept(RootContainer, () => {
        const NEW_ROOT = require('./../root').RootContaienr;
        console.log(configureStore());

        ReactDOM.render(
            <Provider store={configureStore()}>
                <NEW_ROOT />
            </Provider>
        , document.getElementById('root'));
    });
}
