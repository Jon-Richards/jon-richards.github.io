/**
 * @fileoverview
 * Contains the React Component that wraps the application.
 */

import * as React from 'react';
import { IndexPage } from '../index_page';

/** The root application component. */
export class Root extends React.Component<{}, never> {
    /** Returns the rendered component as JSX. */
    render(): JSX.Element {
        return (
            <>
                <IndexPage />
            </>
        );
    }
}