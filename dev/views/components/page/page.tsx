/**
 * @fileoverview
 * Contains the base page layout.
 */

import * as React from 'react';
const CSS = require('./page.scss');
import { Overview } from '../overview';
import { Contact } from '../contact';
import { Footer } from '../footer';
import { Navigation } from '../navigation';
import { debounce } from 'lodash';
import { DeviceUtils } from '../../lib/ts/device_utils';
import { WINDOW_RESIZE_DELAY } from '../../lib/ts/constants';

/** The base layout used by every page. */
export class Page extends React.Component<
    {},
    {
        /** If the mobile navigation should be rendered to the DOM. */
        hasMobileNavigation: boolean,
    }
> {
    /** Utility for interacting with the viewport. */
    device: DeviceUtils;

    constructor(props: Page['props']) {
        super(props);
        this.device = new DeviceUtils();
        this.state = {
            hasMobileNavigation: this.device.hasSmallScreen
        };
    }

    /** Handles viewport resize events. */
    handleResizeEvent = debounce(() => {
        this.setState({
            hasMobileNavigation: this.device.hasSmallScreen
        });
    }, WINDOW_RESIZE_DELAY);

    /** @inheritdoc */
    componentDidMount(): void {
        window.addEventListener('resize', this.handleResizeEvent, false);
    }

    /** @inheritdoc */
    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResizeEvent, false);
    }

    /** Renders the page. */
    render(): JSX.Element {
        return (
            <div className={CSS['root']}>
                {this.state.hasMobileNavigation && <Navigation format="SMALL_DEVICE" />}
                <div className={CSS['content']}>
                    <Overview />
                    <main className={CSS['main']}>
                        {this.props.children}
                    </main>
                    <Contact />
                </div>
                <Footer />
            </div>
        );
    }
}
