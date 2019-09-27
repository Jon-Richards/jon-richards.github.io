/**
 * @fileoverview
 * Contains the preloader component.
 */

import * as React from 'react';
const CSS = require('./preloader.scss');

/** Indicates to the user that something is processing. */
export const PRELOADER = React.memo<{}>(() => (
  <div className={CSS['root']}>
    <div className={CSS['gradient']}></div>
  </div>
));
