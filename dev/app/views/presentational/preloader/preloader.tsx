/**
 * @fileoverview
 * Contains the preloader component.
 */

import * as React from 'react';
const CSS = require('./preloader.scss');

/** Indicates to the user that something is processing. */
function Preloader(): JSX.Element {
  return (
    <div className={CSS['root']}>
      <div className={CSS['gradient']}></div>
    </div>
  );
}

const preloaderMemo = React.memo<{}>(Preloader);

export {preloaderMemo as Preloader};