import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const ROOT = require('./../root').Root; // tslint:disable-line:no-var-requires

ReactDOM.render(<ROOT />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept(ROOT, () => {
    const NEW_ROOT = require('./../root').Root;
    ReactDOM.render(<NEW_ROOT />, document.getElementById('root'));
  });
}
