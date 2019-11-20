/**
 * @fileoverview
 * Connects the Store to the root application component.
 */

import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Root } from '../pages';
import { RootStore } from '../../models/root';
import { getOverview } from '../../controllers/index';

type StateProps = {};
type DispatchProps = Pick<Root['props'], 'getOverview'>;

/** Maps properties from the state to those of the App component. */
const mapStateToProps = (state: RootStore): StateProps => ({});

/** Maps dispatchabale actions to additional properties of the App component. */
const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootStore, undefined, Action>
): DispatchProps => ({
  getOverview: () => dispatch(getOverview()),
});

/**
 * A version of the root component that is connected directly to the controller
 * layer.
 */
export const ROOT = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
