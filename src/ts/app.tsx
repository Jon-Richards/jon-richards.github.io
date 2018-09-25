import * as React from 'react';
import * as ReactDOM from 'react-dom';
const ROOT = require('./root').Root; // CommonJS syntax for HMR


ReactDOM.render(
  <ROOT />,
  document.getElementById('root')
);


if (module.hot) {
  console.log('hot');
  module.hot.accept(ROOT, () => {
    console.log('update root');
    
    const NEW_ROOT = require('./root').Root;
    ReactDOM.render(
      <NEW_ROOT />,
      document.getElementById('root')
    );    
  });
}