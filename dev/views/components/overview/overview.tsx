/**
 * @fileoverview
 * Contains the about section component.
 */

import * as React from 'react';
const CSS = require('./overview.scss');
import { Avatar } from '../avatar';
import { NBSP, NBHP } from '../../lib/ts/html_entities';
import { SVGWrapper } from '../svg_wrapper';
import { Navigation } from '../navigation';
import { debounce } from 'lodash';
import { isSmallScreen } from '../../lib/ts/browser_utils';
import { WINDOW_RESIZE_DELAY } from '../../lib/ts/constants';

/**
 * Renders the about section.
 */
export class Overview extends React.Component<
    {},
    {
        /** If navigation should be rendered. */
        hasNavigation: boolean;
    }
> {
    constructor(props: Overview['props']) {
        super(props);
        this.state = {
            hasNavigation: isSmallScreen() === false
        };
    }

    /** @inheritdoc */
    componentDidMount(): void {
        window.addEventListener('resize', this.handleResize);
    }

    /** @inheritdoc */
    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize);
    }

    /** Safely fires am event handler when the window resized. */
    handleResize = debounce(() => {
        this.setState({
            hasNavigation: isSmallScreen() === false
        });
    }, WINDOW_RESIZE_DELAY);

    /** Renders the Overview to the DOM. */
    render(): JSX.Element {
        return (
            <div id="overview" className={CSS['root']} role="region" aria-label="About">
                <div className={CSS['scroller']}>
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
                                I'm Jon, a{ NBSP }front{ NBHP }end{ NBSP }developer 
                                based in{ NBSP }Boston.
                            </p>
                        </div>
                        {this.state.hasNavigation && <Navigation format="LARGE_DEVICE" />}
                    </div>
                </div>
                <div className={CSS['down']} aria-hidden>
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
                                300 25 
                                150 100
                                0   25"
                            className={CSS['down__background']}
                        />
                    </SVGWrapper>
                </div>
            </div>
        );
    }
}
