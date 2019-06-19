/**
 * @fileoverview
 * Contains the base page layout.
 */

import * as React from 'react';
const CSS = require('./page.scss');
import { Header } from '../header';
import { Preloader } from '../preloader';

/** The base layout used by every page. */
export class Page extends React.Component<
    {},
    {
        /** The overall status of the app. */
        status: 'ready' | '';
    }
> {
    /** 
     * Timeout used for flagging the app as ready.
     * @todo remove when using actual data.
     */
    private initTimout = 0;

    constructor(props:Page['props']) {
        super(props);

        this.state = {
            status: '',
        };
    }

    /** 
     * Waits before setting the app ready flag.
     * @todo Replace response handler when bootstrapping the app.
     */
    componentDidMount() {
        this.initTimout = window.setTimeout(() => {
            this.setState({ status: 'ready' });
        }, 3000);
    }

    /** Unsubscribe from timeouts etc. before unmounting. */
    componentWillUnmount() {
        clearTimeout(this.initTimout);
    }

    /** Renders the page. */
    render(): JSX.Element {
        return (
            <div className={`${CSS['root']} ${'app--' + this.state.status}`}>
                <Preloader />
                <Header />
                <main>
                    Main - test
                </main>
            </div>
        );
    }
}
