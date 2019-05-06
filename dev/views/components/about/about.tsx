/**
 * @fileoverview
 * Contains the about section component.
 */

import * as React from 'react';
// import * as styles from './about.scss';
const CSS = require('./about.scss');
import { Avatar } from '../avatar';
import { NBSP, NBHP } from '../../lib/ts/html_entities';
import { SVGWrapper } from '../svg_wrapper';

/**
 * Renders the about section.
 */
export const ABOUT: React.FunctionComponent<{
    /** Just a test prop. */
    name: string;
}> = ({ name }): JSX.Element => {
    return (
        <div className={CSS['root']} role="region" aria-label="About">
            <div className={CSS['content']}>
                <div className={CSS['avatar']}>
                    <div className={CSS['avatar__component']}>
                        <Avatar
                            gravatarHash="92acba29258ba766d65ed96b4697b84f"
                            imageSize={300}
                            altText="Jon Richards"
                        />
                    </div>
                </div>
                <div className={CSS['intro']}>
                    <h2 className={CSS['intro__title']}>
                        Howdy!
                    </h2>
                    <p className={CSS['intro__text']}>
                        I'm Jon, a{ NBSP }front{ NBHP }end{ NBSP }developer based in{ NBSP }Boston.
                    </p>
                </div>
            </div>
            <div className={CSS['down']} aria-idden>
                <SVGWrapper
                    viewBox="0 0 300 100"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                >
                    <polygon
                        points="
                            0   0 
                            300 0 
                            150 100"
                        className={CSS['down__background']}
                    />
                </SVGWrapper>
            </div>
        </div>
    );
};
