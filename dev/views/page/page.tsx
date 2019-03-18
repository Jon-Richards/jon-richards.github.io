import * as React from 'react';
import './page.scss';

export class Page extends React.Component {
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
