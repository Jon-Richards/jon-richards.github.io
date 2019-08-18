/**
 * @fileoverview
 * Contains the React Component that wraps the application.
 */

import * as React from 'react';
import { IndexPage } from '../pages';

/** The root application component. */
export class Root extends React.Component<{}, never> {
    constructor(props: Root['props']) {
        super(props);

        console.log('make initial request');
    }

    /** Returns the rendered component as JSX. */
    render(): JSX.Element {
        return (
            <>
                <IndexPage />
            </>
        );
    }
}