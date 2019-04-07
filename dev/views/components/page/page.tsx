/**
 * @fileoverview
 * Contains the base page layout.
 */

import * as React from 'react';
import * as styles from './page.scss';
import { About } from '../about';
import { Contact } from '../contact';
import { Footer } from '../footer';

/** The base layout used by every page. */
export const PAGE: React.FunctionComponent<{}> = (props): JSX.Element => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <About name="Jon" />
                <main className={styles.main}>{props.children}</main>
                <Contact />
            </div>
            <Footer />
        </div>
    );
};
