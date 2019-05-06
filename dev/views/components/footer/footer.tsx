/**
 * @fileoverview
 * Contains the footer component.
 */

import * as React from 'react';
const CSS = require('./footer.scss');

/** Renders the footer component. */
export const FOOTER: React.FunctionComponent<{}> = (props): JSX.Element => {
    return <footer className={CSS['root']}>Footer</footer>;
};
