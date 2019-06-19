/**
 * @fileoverview
 * The main header for the page.
 */

import * as React from 'react';
const CSS = require('./header.scss');
import { Nav } from '../nav';

/** The main header of the page. */
export class Header extends React.Component<
    {},
    never
> {
    /** Renders the header to the DOM. */
    render(): JSX.Element {
        return (
            <header className={CSS['header']}>
                <Nav />
            </header>
        );
    }
}