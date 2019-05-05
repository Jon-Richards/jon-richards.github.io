/**
 * @fileoverview
 * Contains the about section component.
 */

import * as React from 'react';
import * as styles from './about.scss';
import { Avatar } from '../avatar';
import { NBSP } from '../../lib/ts/html_entities';

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
                <div className={styles.avatar}>
                    <div className={styles.avatar__component}>
                        <Avatar
                            gravatarHash="92acba29258ba766d65ed96b4697b84f"
                            imageSize={300}
                            altText="Jon Richards"
                        />
                    </div>
                </div>
                <div className={styles.intro}>
                    <h2 className={styles.intro__title}>
                        Howdy!
                    </h2>
                    <p className={styles.intro__text}>
                        I'm Jon, a front-end developer based in{NBSP}Boston.
                    </p>
                </div>
            </div>
        </div>
    );
};
