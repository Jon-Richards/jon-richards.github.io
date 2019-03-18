/**
 * @fileoverview
 * Connects the Store to the root of the presentational component tree.  This 
 * React component serves no other purpose than to connect the view layer to the
 * Store, ergo it doesn't have a corresponding presentational component.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { StoreShape } from '../store/store';
import { IndexPage } from '../views/index_page';

type StateProps = StoreShape;
type DispatchProps = {};
type Props = StateProps & DispatchProps;

/** Accepts the Store as props and passes them down to the application. */
class App extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <IndexPage {...this.props.messages} />
            </>
        );
    }
}

/** Maps properties from the state to those of the App component. */
const mapStateToProps = (state: StoreShape): StateProps => ({
    messages: state.messages
});

/** Maps dispatchabale actions to additional properties of the App component. */
const mapDispatchToProps = (dispatches: DispatchProps) => ({

});

/** 
 * Creates an augmented version of the App component that recieves its props
 * directly from the store.
 */
export const APP = connect(mapStateToProps, mapDispatchToProps)(App);
