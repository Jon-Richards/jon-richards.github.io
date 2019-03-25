import * as React from 'react';
import { Page } from '../page';
import { Message } from '../message';
import { LoremIpsum } from '../../../../test/content/lorem_ipsum';

type Props = {
    /** A simple test message. */
    message:string;
};

/** The root component of the index page. */
export class IndexPage extends React.Component<Props, never> {
    
    /** Renders this component to the DOM. */
    render():JSX.Element {
        return (
            <Page>
                <div className="index">
                    <Message 
                        message={this.props.message}
                    />
                    <LoremIpsum />
                </div>
            </Page>
        );
    }
}