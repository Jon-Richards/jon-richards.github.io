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
            <nav className={CSS['root']}>
                <ul className={CSS['list']}>
                    <li className={CSS['list__item']}>
                        <a href="#" className={CSS['link']}>Portfolio</a>
                    </li>
                    <li className={CSS['list__item']}>
                        <a href="#" className={CSS['link']}>Resume</a>
                    </li>
                    <li className={CSS['list__item']}>
                        <a href="#" className={CSS['link']}>Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
