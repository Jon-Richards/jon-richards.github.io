/**
 * @fileoverview
 * Contains the footer component.
 */

import * as React from 'react';
import * as styles from './footer.scss';

/** Renders the footer component. */
export const FOOTER: React.FunctionComponent<{}> = (props): JSX.Element => {
    return <footer className={styles.root}>Footer</footer>;
};
