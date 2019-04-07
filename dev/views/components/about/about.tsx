/**
 * @fileoverview
 * Contains the about section component.
 */

import * as React from 'react';
import * as styles from './about.scss';
import { LoremIpsum } from '../../../../test/content/lorem_ipsum';
import { Avatar } from '../lib/avatar';

/**
 * Renders the about section.
 */
export const ABOUT: React.FunctionComponent<{
    /** Just a test prop. */
    name: string;
}> = ({ name }): JSX.Element => {
    return (
        <div className={styles.root} role="region" aria-label="About">
            <div className={styles.content}>
                <Avatar
                    gravatarHash="92acba29258ba766d65ed96b4697b84f"
                    imageSize={300}
                    altText="Jon Richards"
                />
                About section. - {name}
                <LoremIpsum />
            </div>
        </div>
    );
};
