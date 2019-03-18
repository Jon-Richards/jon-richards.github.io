import * as React from 'react';
import { Page } from '../page';
import { Message } from '../message';

type Props = {
    message:string;
};

export class IndexPage extends React.Component<Props, never> {
    render():JSX.Element {
        return (
            <Page>
                <div className="index">
                    <Message 
                        message={this.props.message}
                    />
                </div>
            </Page>
        );
    }
}