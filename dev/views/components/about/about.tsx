/**
 * @fileoverview
 * Contains the about section component.
 */

import * as React from 'react';
import './about.scss';
import { LoremIpsum } from '../../../../test/content/lorem_ipsum';

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
        <div className="about" role="region" aria-label="About">
            <div className="about__content">
                About section. - {name}

                <LoremIpsum />
            </div>
        </div>
    );
};