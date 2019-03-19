/**
 * @fileoverview
 * Contains the base page layout.
 */

import * as React from 'react';
import './page.scss';
import { About } from '../about';
import { Contact } from '../contact';

/** The base layout used by every page. */
export const PAGE: React.FunctionComponent<{}> = (props):JSX.Element => {
    return (
        <div className="page">
            <About name="Jon" />
            <main className="page__content">
                <h1>Page Test</h1>
                <div>
                    {props.children}
                </div>
            </main>
            <Contact />
        </div>
    );
};
