/**
 * @fileoverview
 * Contains the avatar component.
 */

import * as React from 'react';
// import './avatar.scss';
import * as styles from './avatar.scss';

/**
 * Renders the avatar.
 * @example
 * <avatar
 * gravatarHash="92acba29258ba766d65ed96b4697b84f"
 * imageSize={200}
 * altText="Jon Richards"
 * />
 */
export const AVATAR = React.memo<{
    /**
     * The md5 hash for a gravatar image,.
     * @see https://en.gravatar.com/site/implement/images/
     */
    gravatarHash: string;
    /** The size (px) of the image to request from Gravatar. */
    imageSize: number;
    /** Alt text for the image. */
    altText: string;
}>(props => {
    return (
        <div className={styles.avatar}>
            <div className={styles.frame}>
                <img
                    className={styles.image}
                    src={`https://www.gravatar.com/avatar/${props.gravatarHash}?s=${
                        props.imageSize
                    }`}
                    alt={props.altText}
                />
            </div>
        </div>
    );
});
