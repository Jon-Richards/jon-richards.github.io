/**
 * @fileoverview
 * Contains a wrapper component that fetches information for the
 * index route.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { RootStore } from '../../../models/root';

/** Stub for dispatchable actions */
type DispatchableActions = {};

interface IndexProps {
  /** All portfolio projects currently in the application store. */
  portfolio: RootStore['portfolio'];
  /** Dispatch to request portfolio projects. */
  getPortfolioProjects(): void;
}

/** Wrapper comonent for the index route. */
const INDEX = React.memo<IndexProps>(props => <>{props.children}</>);

/** 
 * Maps the application state to the props required to render the INDEX
 * component.
 */
const mapStateToProps = (
  appState: RootStore
): Pick<IndexProps, 'portfolio'> => ({
  portfolio: appState.portfolio,
});

/** Maps dispatchable props to those required by the INDEX component. */
const mapDispatchToProps = (
  dispatch: DispatchableActions
): Pick<IndexProps, 'getPortfolioProjects'> => ({
  getPortfolioProjects: () => {},
});

/**
 * Wrapper component that maps the controller layer to the view layer when
 * rendering the index route.
 */
export const INDEX_ROUTE = connect(
  mapStateToProps,
  mapDispatchToProps
)(INDEX);
