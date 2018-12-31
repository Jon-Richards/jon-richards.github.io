import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {default as Vue} from 'vue';
import {configureStore} from './models/store';
import Root from './views/vue/root.vue';

const RootContainer = require('./views/root/root').RootContainer; // tslint:disable-line:no-var-requires

ReactDOM.render(
    <Provider store={configureStore()}>
        <RootContainer />
    </Provider>
, document.getElementById('root'));

if (module.hot) {
    module.hot.accept(RootContainer, () => {
        const NEW_ROOT = require('./views/root/root').RootContaienr; // tslint:disable-line:no-var-requires
        ReactDOM.render(
            <Provider store={configureStore()}>
                <NEW_ROOT />
            </Provider>
        , document.getElementById('root'));
    });
}

/**
 * Initializes Vue and mounts a precompiled template instead of compiling one
 * at runtime.  This enables the use of a slimmer build of Vue that doesn't
 * include its runtime compiler.  (About 30% lighter.)
 *
 * https://forum.vuejs.org/t/cant-compile-success-when-i-use-vue-loader-with-runtime-only-build/8346
 */
const ViewApp = new Vue({
    render: (h) => h(Root),
}).$mount('#vue-app');
