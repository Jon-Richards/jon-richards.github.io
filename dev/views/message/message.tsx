import * as React from 'react';

export type Props = {
    message: string;
};

export class Message extends React.Component<Props, never> {
    render():JSX.Element {
        return (
            <div>{this.props.message}</div>
        );
    }
}
