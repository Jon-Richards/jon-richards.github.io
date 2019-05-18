/**
 * @fileoverview
 * Contains the base page layout.
 */

import * as React from 'react';
const CSS = require('./page.scss');
import { Overview } from '../overview';
import { Contact } from '../contact';
import { Footer } from '../footer';
import { Navigation } from '../navigation';

/** The base layout used by every page. */
export const PAGE: React.FunctionComponent<{}> = (props): JSX.Element => {
    return (
        <div className={CSS['root']}>
            <Navigation />
            <div className={CSS['content']}>
                <Overview />
                <main className={CSS['main']}>{props.children}</main>
                <Contact />
            </div>
            <Footer />
        </div>
    );
};
