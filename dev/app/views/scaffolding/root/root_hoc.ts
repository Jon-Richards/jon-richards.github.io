import { Root } from './root';
import { bootstrap } from 'Action_creators/bootstrap';
import { connect } from 'react-redux';
import { Store } from 'Store/index';

type StateProps = Pick<Root['props'], 'route'>;
type DispatchableProps = Pick<Root['props'], 'initialize'>;

function mapStateToProps (state: Store): StateProps {
  return {
    route: state.application.route.schema 
  };
}

function mapDispatchToProps(): DispatchableProps {
  return {
    initialize: () => bootstrap()
  };
}

/** Connected component that renders the Home Page. */
const ROOT_HOC = connect(mapStateToProps, mapDispatchToProps())(Root);

export { ROOT_HOC as RootHOC };