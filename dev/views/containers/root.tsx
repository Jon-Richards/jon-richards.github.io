/**
 * @fileoverview
 * Connects the Store to the root application component.
 */

import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Root } from '../components/root';
import { AppState, INDEX_CONTROLLER } from '../../controllers';

type StateProps = {};
type DispatchProps = Pick<Root['props'], 'getProjects'>;

/** Maps properties from the state to those of the App component. */
const mapStateToProps = (state: AppState): StateProps => ({

});

/** Maps dispatchabale actions to additional properties of the App component. */
const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, Action>): DispatchProps => 
({
    getProjects: () => dispatch(INDEX_CONTROLLER.getPieces())
});

/** A version of the root component that is connected directly to the controller layer. */
export const ROOT = connect(mapStateToProps, mapDispatchToProps)(Root);
