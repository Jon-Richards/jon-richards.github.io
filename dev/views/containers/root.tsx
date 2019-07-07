/**
 * @fileoverview
 * Connects the Store to the root application component.
 */

import { connect } from 'react-redux';
import { Root } from '../components/root';
import { AppState } from '../../store/root';

type StateProps = AppState;
type DispatchProps = {};
type Props = StateProps & DispatchProps;

/** Maps properties from the state to those of the App component. */
const mapStateToProps = (state: AppState): StateProps => ({
    portfolio: state.portfolio
});

/** Maps dispatchabale actions to additional properties of the App component. */
const mapDispatchToProps = (dispatches: DispatchProps) => ({});

/**
 * Creates an augmented version of the App component that recieves its props
 * directly from the store.
 */
export const ROOT = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
