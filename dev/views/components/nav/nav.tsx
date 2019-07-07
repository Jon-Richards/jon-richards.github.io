/**
 * @fileoverview
 * Contains the navigation.
 */

import * as React from 'react';
const CSS = require('./nav.scss');

/** The main navigation. */
export class Nav extends React.Component<
    {},
    never
> {
    /** Renders the navigation to the DOM. */
    render(): JSX.Element {
        return (
            <nav className={CSS['root']} role="navigation">
                <a href="#" className={CSS['link']}>Work</a>
                <a href="#" className={CSS['link']}>Resume</a>
                <a href="#" className={CSS['link']}>Contact</a>
            </nav>
        );
    }
}
