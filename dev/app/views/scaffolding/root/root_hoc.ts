import { Root } from './root';
import { bootstrap } from 'Action_creators/bootstrap';
import { connect } from 'react-redux';
import { RootStore } from 'Store/root_reducer';

type StateProps = Pick<Root['props'], 
  | 'projects'
  | 'tools'
  | 'matchingMediaQueries'
  | 'possibleMediaQueries'
>;
type DispatchableProps = Pick<Root['props'], 'initialize'>;

function mapStateToProps(state: RootStore): StateProps {
  return {
    projects: state.portfolio.projects,
    tools: state.portfolio.tools,
    matchingMediaQueries: state.browser.matching_media_queries,
    possibleMediaQueries: state.browser.possible_media_queries
  };
}

function mapDispatchToProps(): DispatchableProps {
  return {
    initialize: () => bootstrap()
  };
}

/** Connected component that renders the Home Page. */
const ROOT_HOC = connect(
  mapStateToProps, 
  mapDispatchToProps()
)(Root);

export { ROOT_HOC as Root };