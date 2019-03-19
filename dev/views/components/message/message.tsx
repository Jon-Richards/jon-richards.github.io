import * as React from 'react';

export type Props = {
    /** A simple test message. */
    message: string;
};

/** 
 * Renders a simple test message based on props recieved from the parent
 * component.
 */
export class Message extends React.Component<Props, never> {

    /** Renders this component to the DOM. */
    render():JSX.Element {
        return (
            <div>{this.props.message}</div>
        );
    }
}
