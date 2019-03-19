/**
 * @fileoverview
 * Contains the about section component.
 */

import * as React from 'react';
import './about.scss';

/**
 * Renders the about section.
 */
export const ABOUT: React.FunctionComponent<{
    /** Just a test prop. */
    name: string;
}> = ({
    name
}): JSX.Element => {
    return (
        <div className="about">
            About section. - {name}
        </div>
    );
};