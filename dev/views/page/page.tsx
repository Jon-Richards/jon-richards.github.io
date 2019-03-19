import * as React from 'react';
import './page.scss';

/** The base layout used by every page. */
export class Page extends React.Component {
    /** Renders this component to the DOM. */
    render():JSX.Element {
        return (
            <>
                <div className="page">
                    <h1>Page Test</h1>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </>
        );
    }
}
